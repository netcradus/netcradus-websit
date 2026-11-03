import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure .env is loaded if not already loaded by entry point
const serverEnv = path.join(__dirname, '../../.env');
const rootEnv = path.join(__dirname, '../../../.env');

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
  DB_CONNECTION_LIMIT = '10',
  DB_QUEUE_LIMIT = '0',
  DB_WAIT_FOR_CONNECTIONS = 'true',
} = process.env;

// Create MySQL connection pool
export const pool = mysql.createPool({
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: DB_WAIT_FOR_CONNECTIONS === 'true',
  connectionLimit: parseInt(DB_CONNECTION_LIMIT, 10),
  queueLimit: parseInt(DB_QUEUE_LIMIT, 10),
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  charset: 'utf8mb4',
});

/**
 * Health check helper to verify database connectivity and latency
 * @returns {Promise<{ healthy: boolean, latencyMs?: number, error?: string }>}
 */
export async function checkDatabaseHealth() {
  const start = Date.now();
  try {
    const [rows] = await pool.query('SELECT 1 AS ping');
    const latencyMs = Date.now() - start;
    if (rows && rows[0] && rows[0].ping === 1) {
      return { healthy: true, latencyMs };
    }
    return { healthy: false, error: 'Unexpected ping response' };
  } catch (err) {
    return { healthy: false, error: err.message };
  }
}

/**
 * Closes all connections in the pool gracefully
 */
export async function closeDatabasePool() {
  try {
    await pool.end();
    console.log('[DB] MySQL connection pool closed gracefully.');
  } catch (err) {
    console.error('[DB Error] Error closing MySQL connection pool:', err.message);
  }
}
