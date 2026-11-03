import crypto from 'crypto';
import { pool } from '../config/db.js';

const ANONYMIZED_MESSAGE = '[CONTENT ANONYMIZED PURSUANT TO DATA PROTECTION RETENTION POLICY]';
const ANONYMIZED_NAME = '[ANONYMIZED]';

/**
 * Generates an anonymous, non-identifying email replacement to maintain valid format and database index integrity.
 * @param {number|bigint|string} id
 * @returns {string}
 */
export function generateAnonymousEmail(id) {
  const hash = crypto.randomBytes(4).toString('hex');
  return `anon-${id}-${hash}@redacted.local`;
}

/**
 * Anonymizes a single inquiry by its ID within a transaction.
 * Preserves reference code, status, timestamps, and relational links while redacting personal and network data.
 *
 * @param {import('mysql2/promise').Connection} connection
 * @param {number|bigint} inquiryId
 * @param {string} [reason]
 * @returns {Promise<{ success: boolean, referenceCode: string, contactId: number|bigint }>}
 */
export async function anonymizeInquiryRecord(connection, inquiryId, reason = 'retention_policy') {
  const [rows] = await connection.query(
    'SELECT id, reference_code, contact_id, status FROM inquiries WHERE id = ? FOR UPDATE',
    [inquiryId]
  );

  if (rows.length === 0) {
    throw new Error(`Inquiry with ID ${inquiryId} not found.`);
  }

  const inquiry = rows[0];
  const oldStatus = inquiry.status;

  if (oldStatus === 'anonymized') {
    return { success: true, referenceCode: inquiry.reference_code, contactId: inquiry.contact_id, alreadyAnonymized: true };
  }

  // Update inquiry with sanitized/anonymized values
  await connection.query(
    `UPDATE inquiries SET
      message = ?,
      ip_address = NULL,
      user_agent = NULL,
      page_url = NULL,
      referrer_url = NULL,
      status = 'anonymized',
      updated_at = NOW()
     WHERE id = ?`,
    [ANONYMIZED_MESSAGE, inquiryId]
  );

  // Insert non-identifying activity log entry
  await connection.query(
    `INSERT INTO inquiry_activity (
      inquiry_id, action_type, old_status, new_status, notes, performed_by
    ) VALUES (?, 'data_anonymized', ?, 'anonymized', ?, 'system')`,
    [inquiryId, oldStatus, `Personal data anonymized pursuant to: ${reason}`]
  );

  return { success: true, referenceCode: inquiry.reference_code, contactId: inquiry.contact_id };
}

/**
 * Anonymizes a contact record if all of its associated inquiries are anonymized or being anonymized.
 *
 * @param {import('mysql2/promise').Connection} connection
 * @param {number|bigint} contactId
 * @returns {Promise<{ success: boolean, reason?: string }>}
 */
export async function anonymizeContactRecord(connection, contactId) {
  const [activeInquiries] = await connection.query(
    `SELECT id FROM inquiries WHERE contact_id = ? AND status != 'anonymized'`,
    [contactId]
  );

  // If there are still active, non-anonymized inquiries for this contact, do not anonymize contact profile yet
  if (activeInquiries.length > 0) {
    return { success: false, reason: 'Contact has active, non-expired inquiries' };
  }

  const anonEmail = generateAnonymousEmail(contactId);

  await connection.query(
    `UPDATE contacts SET
      first_name = ?,
      last_name = ?,
      email = ?,
      phone = NULL,
      company_name = NULL,
      updated_at = NOW()
     WHERE id = ?`,
    [ANONYMIZED_NAME, ANONYMIZED_NAME, anonEmail, contactId]
  );

  return { success: true };
}

/**
 * Processes all expired inquiries beyond the retention threshold (default: 365 days).
 * Transactionally anonymizes eligible records and updates contact records accordingly.
 *
 * @param {number} [retentionDays]
 * @returns {Promise<{ retentionDays: number, processedInquiries: number, processedContacts: number, errors: string[] }>}
 */
export async function runRetentionPurge(retentionDays) {
  const days = retentionDays || parseInt(process.env.CONTACT_RETENTION_DAYS, 10) || 365;
  const connection = await pool.getConnection();

  const results = {
    retentionDays: days,
    processedInquiries: 0,
    processedContacts: 0,
    errors: [],
  };

  try {
    // 1. Find all expired inquiries that are not yet anonymized
    const [expiredInquiries] = await connection.query(
      `SELECT id, contact_id, reference_code, created_at
       FROM inquiries
       WHERE created_at < NOW() - INTERVAL ? DAY
         AND status != 'anonymized'
       ORDER BY id ASC`,
      [days]
    );

    if (expiredInquiries.length === 0) {
      return results;
    }

    const affectedContactIds = new Set();

    // 2. Transactionally process expired inquiries
    for (const item of expiredInquiries) {
      try {
        await connection.beginTransaction();
        const res = await anonymizeInquiryRecord(connection, item.id, `retention_schedule_${days}_days`);
        if (res.contactId) {
          affectedContactIds.add(res.contactId);
        }
        await connection.commit();
        results.processedInquiries++;
      } catch (err) {
        await connection.rollback();
        results.errors.push(`Failed to anonymize inquiry ID ${item.id}: ${err.message}`);
      }
    }

    // 3. Process candidate contacts for anonymization
    for (const contactId of affectedContactIds) {
      try {
        await connection.beginTransaction();
        const contactRes = await anonymizeContactRecord(connection, contactId);
        await connection.commit();
        if (contactRes.success) {
          results.processedContacts++;
        }
      } catch (cErr) {
        await connection.rollback();
        results.errors.push(`Failed to anonymize contact ID ${contactId}: ${cErr.message}`);
      }
    }

    return results;
  } finally {
    connection.release();
  }
}

/**
 * Handles a Data Subject Erasure Request by email identifier.
 * Anonymizes all contact records matching the email and their associated inquiries.
 *
 * @param {string} email
 * @param {string} [reason]
 * @returns {Promise<{ success: boolean, erasedInquiries: number, erasedContacts: number, message?: string }>}
 */
export async function executeDataSubjectErasureByEmail(email, reason = 'data_subject_request') {
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    throw new Error('A valid email address is required to execute erasure.');
  }

  const normalizedEmail = email.trim().toLowerCase();
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    const [contacts] = await connection.query(
      'SELECT id FROM contacts WHERE email = ? FOR UPDATE',
      [normalizedEmail]
    );

    if (contacts.length === 0) {
      await connection.commit();
      return { success: true, erasedInquiries: 0, erasedContacts: 0, message: 'No records found for the requested identifier.' };
    }

    let erasedInquiriesCount = 0;
    let erasedContactsCount = 0;

    for (const contact of contacts) {
      const [inquiries] = await connection.query(
        'SELECT id FROM inquiries WHERE contact_id = ? FOR UPDATE',
        [contact.id]
      );

      for (const inq of inquiries) {
        await anonymizeInquiryRecord(connection, inq.id, reason);
        erasedInquiriesCount++;
      }

      const anonEmail = generateAnonymousEmail(contact.id);
      await connection.query(
        `UPDATE contacts SET
          first_name = ?,
          last_name = ?,
          email = ?,
          phone = NULL,
          company_name = NULL,
          updated_at = NOW()
         WHERE id = ?`,
        [ANONYMIZED_NAME, ANONYMIZED_NAME, anonEmail, contact.id]
      );
      erasedContactsCount++;
    }

    await connection.commit();

    return {
      success: true,
      erasedInquiries: erasedInquiriesCount,
      erasedContacts: erasedContactsCount,
    };
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    connection.release();
  }
}
