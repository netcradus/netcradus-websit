import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { runRetentionPurge } from '../src/services/retentionService.js';
import { closeDatabasePool } from '../src/config/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from server directory with root fallback
const serverEnv = path.join(__dirname, '../.env');
const rootEnv = path.join(__dirname, '../../.env');

if (fs.existsSync(serverEnv)) {
  dotenv.config({ path: serverEnv });
} else if (fs.existsSync(rootEnv)) {
  dotenv.config({ path: rootEnv });
} else {
  dotenv.config();
}

async function main() {
  const retentionDays = parseInt(process.env.CONTACT_RETENTION_DAYS, 10) || 365;
  console.log('='.repeat(65));
  console.log(`  NETCRADUS DATA RETENTION JOB (Threshold: ${retentionDays} Days)`);
  console.log('='.repeat(65));

  try {
    const results = await runRetentionPurge(retentionDays);
    console.log(`[Retention Job Completed]`);
    console.log(`  • Retention Window: ${results.retentionDays} days`);
    console.log(`  • Anonymized Inquiries: ${results.processedInquiries}`);
    console.log(`  • Anonymized Contact Profiles: ${results.processedContacts}`);

    if (results.errors.length > 0) {
      console.warn(`  • Encountered ${results.errors.length} non-fatal error(s):`);
      results.errors.forEach((e) => console.warn(`    - ${e}`));
    }
  } catch (err) {
    console.error('[Retention Job Fatal Error]:', err.message);
    process.exitCode = 1;
  } finally {
    await closeDatabasePool();
  }
}

main();
