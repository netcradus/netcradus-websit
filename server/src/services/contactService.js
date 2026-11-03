import crypto from 'crypto';
import { pool } from '../config/db.js';

/**
 * Extracts normalized hostname from Origin or Referer header URL
 * e.g., "https://aus.netcradus.com:443/contact" -> "aus.netcradus.com"
 * @param {string} originHeader
 * @returns {string|null}
 */
export function extractDomainFromHeader(originHeader) {
  if (!originHeader) return null;
  try {
    const url = new URL(originHeader.startsWith('http') ? originHeader : `https://${originHeader}`);
    return url.hostname.toLowerCase();
  } catch (_err) {
    return originHeader.replace(/^https?:\/\//, '').split('/')[0].split(':')[0].toLowerCase();
  }
}

/**
 * Generates a collision-resistant unique inquiry reference code (e.g., NC-9X2K4L)
 * @returns {string}
 */
export function generateReferenceCode() {
  const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ'; // Base32 unambiguous charset
  let code = '';
  const randomBytes = crypto.randomBytes(6);
  for (let i = 0; i < 6; i++) {
    code += chars[randomBytes[i] % chars.length];
  }
  return `NC-${code}`;
}

/**
 * Resolves the registered website record using the Origin header
 * @param {import('mysql2/promise').Connection} connection
 * @param {string} originHeader
 * @param {string} [nodeEnv]
 * @returns {Promise<{ id: number, country_id: number, domain: string, name: string }>}
 */
async function resolveWebsiteByOrigin(connection, originHeader, nodeEnv = process.env.NODE_ENV) {
  const domain = extractDomainFromHeader(originHeader);

  // In development/test mode, allow localhost/127.0.0.1 mapping
  if ((domain === 'localhost' || domain === '127.0.0.1' || !domain) && nodeEnv !== 'production') {
    const [devWebsites] = await connection.query(
      'SELECT id, country_id, domain, name FROM websites WHERE is_active = 1 ORDER BY id ASC LIMIT 1'
    );
    if (devWebsites.length > 0) {
      return devWebsites[0];
    }
  }

  if (!domain) {
    const error = new Error('Origin header is required to identify the originating Netcradus website.');
    error.statusCode = 403;
    throw error;
  }

  const [websites] = await connection.query(
    'SELECT id, country_id, domain, name FROM websites WHERE domain = ? AND is_active = 1 LIMIT 1',
    [domain]
  );

  if (websites.length === 0) {
    const error = new Error(`Origin domain '${domain}' is not a registered Netcradus website.`);
    error.statusCode = 403;
    throw error;
  }

  return websites[0];
}

/**
 * Resolves country ID from code or name
 * @param {import('mysql2/promise').Connection} connection
 * @param {string|null} countryInput
 * @param {number} defaultCountryId
 * @returns {Promise<number>}
 */
async function resolveCountryId(connection, countryInput, defaultCountryId) {
  if (!countryInput) return defaultCountryId;

  const [rows] = await connection.query(
    'SELECT id FROM countries WHERE (code = ? OR name = ?) AND is_active = 1 LIMIT 1',
    [countryInput.trim(), countryInput.trim()]
  );

  if (rows.length > 0) {
    return rows[0].id;
  }
  return defaultCountryId;
}

/**
 * Main transactional service to process and persist a contact form submission
 * @param {object} payload - Validated contact data
 * @param {object} metadata - Client request metadata (origin, ip, userAgent)
 * @returns {Promise<{ referenceCode: string }>}
 */
export async function processContactSubmission(payload, metadata) {
  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    // 1. Resolve originating website from Origin header
    const website = await resolveWebsiteByOrigin(connection, metadata.origin);

    // 2. Resolve target country (selected country or website's default country)
    const targetCountryId = await resolveCountryId(connection, payload.selected_country, website.country_id);

    // 3. Find or Create Contact record by Email
    let contactId;
    const [existingContacts] = await connection.query(
      'SELECT id, phone, company_name FROM contacts WHERE email = ? ORDER BY id DESC LIMIT 1',
      [payload.email]
    );

    if (existingContacts.length > 0) {
      contactId = existingContacts[0].id;
      // Update phone or company if newly provided and previously empty
      const existing = existingContacts[0];
      const newPhone = payload.phone || existing.phone;
      const newCompany = payload.company || existing.company_name;

      if (newPhone !== existing.phone || newCompany !== existing.company_name) {
        await connection.query(
          'UPDATE contacts SET phone = ?, company_name = ?, updated_at = NOW() WHERE id = ?',
          [newPhone, newCompany, contactId]
        );
      }
    } else {
      const [insertContactResult] = await connection.query(
        'INSERT INTO contacts (first_name, last_name, email, phone, company_name) VALUES (?, ?, ?, ?, ?)',
        [payload.first_name, payload.last_name, payload.email, payload.phone, payload.company]
      );
      contactId = insertContactResult.insertId;
    }

    // 4. Generate unique reference code with collision check
    let referenceCode;
    let isUnique = false;
    let attempts = 0;

    while (!isUnique && attempts < 5) {
      attempts++;
      referenceCode = generateReferenceCode();
      const [existingInquiry] = await connection.query(
        'SELECT id FROM inquiries WHERE reference_code = ? LIMIT 1',
        [referenceCode]
      );
      if (existingInquiry.length === 0) {
        isUnique = true;
      }
    }

    if (!isUnique) {
      throw new Error('Failed to generate unique inquiry reference code. Please try again.');
    }

    // 5. Insert Inquiry Record
    const [insertInquiryResult] = await connection.query(
      `INSERT INTO inquiries (
        reference_code, contact_id, website_id, country_id, service_key,
        message, status, priority, page_url, referrer_url, ip_address, user_agent
      ) VALUES (?, ?, ?, ?, ?, ?, 'new', 'normal', ?, ?, ?, ?)`,
      [
        referenceCode,
        contactId,
        website.id,
        targetCountryId,
        payload.service_key,
        payload.message,
        payload.page_url,
        payload.referrer_url,
        metadata.ip || null,
        metadata.userAgent || null,
      ]
    );

    const inquiryId = insertInquiryResult.insertId;

    // 6. Insert Audit Log into inquiry_activity
    await connection.query(
      `INSERT INTO inquiry_activity (
        inquiry_id, action_type, old_status, new_status, notes, performed_by
      ) VALUES (?, 'submission_created', NULL, 'new', ?, 'system')`,
      [inquiryId, `Inquiry created from website: ${website.domain}`]
    );

    // Commit Transaction
    await connection.commit();

    return {
      referenceCode,
      inquiryId,
      inquiryData: {
        referenceCode,
        firstName: payload.first_name,
        lastName: payload.last_name,
        email: payload.email,
        phone: payload.phone || '',
        company: payload.company || '',
        service: payload.service_key,
        country: payload.selected_country || '',
        originDomain: website.domain,
        message: payload.message,
        status: 'new',
        submittedAt: new Date().toISOString(),
      },
    };
  } catch (err) {
    await connection.rollback();
    throw err;
  } finally {
    connection.release();
  }
}
