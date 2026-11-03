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

async function runMigration() {
  console.log(`[Migration] Connecting to MySQL at ${DB_HOST}:${DB_PORT} as ${DB_USER}...`);

  // First connect without specifying database to ensure database exists
  let rootConnection;
  try {
    rootConnection = await mysql.createConnection({
      host: DB_HOST,
      port: parseInt(DB_PORT, 10),
      user: DB_USER,
      password: DB_PASSWORD,
    });

    console.log(`[Migration] Ensuring database '${DB_NAME}' exists...`);
    await rootConnection.query(
      `CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;`
    );
    await rootConnection.end();
  } catch (err) {
    console.error(`[Migration Error] Failed to verify/create database '${DB_NAME}':`, err.message);
    if (rootConnection) await rootConnection.end();
    process.exit(1);
  }

  // Connect to the specific database to apply schema
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

    const schemaPath = path.join(__dirname, 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');

    console.log(`[Migration] Applying schema definitions from schema.sql...`);
    await dbConnection.query(schemaSql);

    console.log(`[Migration Success] All tables and indexes successfully created/verified in '${DB_NAME}'.`);
  } catch (err) {
    console.error('[Migration Error] Failed to apply schema:', err.message);
    process.exit(1);
  } finally {
    if (dbConnection) await dbConnection.end();
  }
}

runMigration();
