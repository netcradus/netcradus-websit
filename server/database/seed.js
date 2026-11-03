import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

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

const {
  DB_HOST = '127.0.0.1',
  DB_PORT = '3306',
  DB_NAME = 'netcradus_db',
  DB_USER = 'root',
  DB_PASSWORD = '',
} = process.env;

async function runSeed() {
  console.log(`[Seed] Connecting to MySQL '${DB_NAME}' at ${DB_HOST}:${DB_PORT}...`);

  let dbConnection;
  try {
    dbConnection = await mysql.createConnection({
      host: DB_HOST,
      port: parseInt(DB_PORT, 10),
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      multipleStatements: true,
    });

    const seedPath = path.join(__dirname, 'seed.sql');
    const seedSql = fs.readFileSync(seedPath, 'utf8');

    console.log(`[Seed] Applying seed data (AU, IN, GB)...`);
    await dbConnection.query(seedSql);

    // Verify seeded records
    const [countries] = await dbConnection.query('SELECT code, name, phone_code, is_active FROM countries ORDER BY id');
    const [websites] = await dbConnection.query(
      'SELECT w.name, w.domain, c.code AS country_code FROM websites w JOIN countries c ON w.country_id = c.id ORDER BY w.id'
    );

    console.log('[Seed Success] Seed completed successfully:');
    console.table(countries);
    console.table(websites);
  } catch (err) {
    console.error('[Seed Error] Failed to execute seed:', err.message);
    process.exit(1);
  } finally {
    if (dbConnection) await dbConnection.end();
  }
}

runSeed();
