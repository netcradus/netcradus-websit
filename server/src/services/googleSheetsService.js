import { pool } from '../config/db.js';
import { getGoogleSheetsClient, getSpreadsheetConfig } from '../config/sheets.js';

/**
 * Appends a single inquiry row to Google Sheets (Sheet1) and logs audit activity.
 * Designed to execute asynchronously after the MySQL transaction has committed.
 *
 * @param {number|bigint} inquiryId - Database primary key of the committed inquiry
 * @param {object} inquiryData - Full inquiry snapshot
 * @returns {Promise<{ success: boolean, updatedRange?: string, error?: string }>}
 */
export async function syncInquiryToGoogleSheets(inquiryId, inquiryData) {
  const sheets = getGoogleSheetsClient();
  const { spreadsheetId, tabName } = getSpreadsheetConfig();

  if (!sheets) {
    const errorMsg = 'Google Sheets client unavailable (missing or unreadable credentials).';
    await logSheetsAuditActivity(inquiryId, 'sheets_sync_failed', errorMsg);
    return { success: false, error: errorMsg };
  }

  if (!spreadsheetId) {
    const errorMsg = 'GOOGLE_SPREADSHEET_ID is not configured.';
    await logSheetsAuditActivity(inquiryId, 'sheets_sync_failed', errorMsg);
    return { success: false, error: errorMsg };
  }

  // Helper to prevent Google Sheets from interpreting values (e.g. +phone or =formula) as formulas
  const escapeSheetValue = (val) => {
    if (val === undefined || val === null || val === '') return '';
    const str = String(val);
    if (str.startsWith('+') || str.startsWith('=') || str.startsWith('-') || str.startsWith('@')) {
      return `'${str}`;
    }
    return str;
  };

  // Exact 12-column row mapping
  const rowValues = [
    escapeSheetValue(inquiryData.referenceCode),
    escapeSheetValue(inquiryData.firstName),
    escapeSheetValue(inquiryData.lastName),
    escapeSheetValue(inquiryData.email),
    escapeSheetValue(inquiryData.phone),
    escapeSheetValue(inquiryData.company),
    escapeSheetValue(inquiryData.service),
    escapeSheetValue(inquiryData.country),
    escapeSheetValue(inquiryData.originDomain),
    escapeSheetValue(inquiryData.message),
    escapeSheetValue(inquiryData.status || 'new'),
    inquiryData.submittedAt || new Date().toISOString(),
  ];

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${tabName}!A:L`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowValues],
      },
    });

    const updatedRange = response.data?.updates?.updatedRange || `${tabName}!A:L`;

    // Audit log success
    await logSheetsAuditActivity(
      inquiryId,
      'sheets_synced',
      `Appended row to ${tabName} (${updatedRange})`
    );

    return { success: true, updatedRange };
  } catch (err) {
    // Safe error message extraction (avoid exposing sensitive tokens or internal stacks)
    const safeErrorMsg =
      err.response?.data?.error?.message ||
      err.message ||
      'Unknown Google Sheets API error';

    console.error('[Google Sheets Sync Error]', {
      code: err.code || err.response?.status || 500,
      message: safeErrorMsg,
      inquiryRef: inquiryData.referenceCode,
    });

    // Audit log failure
    await logSheetsAuditActivity(
      inquiryId,
      'sheets_sync_failed',
      `Sync failed: ${safeErrorMsg.slice(0, 500)}`
    );

    return { success: false, error: safeErrorMsg };
  }
}

/**
 * Safely inserts an audit entry into inquiry_activity.
 * @param {number|bigint} inquiryId
 * @param {string} actionType
 * @param {string} notes
 */
async function logSheetsAuditActivity(inquiryId, actionType, notes) {
  if (!inquiryId) return;

  try {
    await pool.query(
      `INSERT INTO inquiry_activity (
        inquiry_id, action_type, old_status, new_status, notes, performed_by
      ) VALUES (?, ?, NULL, NULL, ?, 'system')`,
      [inquiryId, actionType, notes]
    );
  } catch (dbErr) {
    console.error('[Sheets Activity Log Error] Failed to write inquiry_activity:', dbErr.message);
  }
}
