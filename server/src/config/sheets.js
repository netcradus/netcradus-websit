import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve base server directory
const serverRoot = path.resolve(__dirname, '../..');

let sheetsClient = null;

/**
 * Resolves the absolute path to the service account JSON key safely.
 * @returns {string|null}
 */
export function resolveServiceAccountPath() {
  const configuredPath = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_PATH || './.secrets/google-service-account.json';

  // Check absolute or relative to server root
  const directPath = path.isAbsolute(configuredPath)
    ? configuredPath
    : path.resolve(serverRoot, configuredPath);

  if (fs.existsSync(directPath)) {
    return directPath;
  }

  // Also check relative to current working directory as fallback
  const cwdPath = path.resolve(process.cwd(), configuredPath);
  if (fs.existsSync(cwdPath)) {
    return cwdPath;
  }

  return null;
}

/**
 * Returns Google Sheets configuration parameters from environment.
 */
export function getSpreadsheetConfig() {
  return {
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID || '1YoxMAS3Wcf81jO1UOks21lR9q59d3QemKAO29NsMR74',
    tabName: process.env.GOOGLE_SHEETS_TAB_NAME || 'Sheet1',
  };
}

/**
 * Initializes and returns a Google Sheets API v4 client instance.
 * @returns {import('googleapis').sheets_v4.Sheets | null}
 */
export function getGoogleSheetsClient() {
  if (sheetsClient) {
    return sheetsClient;
  }

  const keyFilePath = resolveServiceAccountPath();

  if (!keyFilePath) {
    if (process.env.NODE_ENV !== 'test') {
      console.warn('[Google Sheets Warning] Service account credential file not found. Sheets synchronization will be bypassed.');
    }
    return null;
  }

  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: keyFilePath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    sheetsClient = google.sheets({ version: 'v4', auth });
    return sheetsClient;
  } catch (err) {
    console.error('[Google Sheets Auth Error] Failed to initialize GoogleAuth client:', err.message);
    return null;
  }
}
