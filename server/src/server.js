import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import app from './app.js';
import { checkDatabaseHealth, closeDatabasePool } from './config/db.js';

import fs from 'fs';

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

const PORT = parseInt(process.env.PORT || '5000', 10);

async function startServer() {
  console.log('='.repeat(60));
  console.log('  NETCRADUS CONTACT BACKEND SERVICE (PHASE 1)');
  console.log('='.repeat(60));

  // Verify Database Connection on Boot
  console.log('[Boot] Probing MySQL Database Connection...');
  const dbHealth = await checkDatabaseHealth();

  if (dbHealth.healthy) {
    console.log(`[Boot] MySQL Database connection established successfully (${dbHealth.latencyMs}ms).`);
  } else {
    console.warn(`[Boot Warning] MySQL Database connection failed: ${dbHealth.error}`);
    console.warn('[Boot Warning] Server will start, but database-backed routes may return 503 until MySQL is available.');
  }

  // Start HTTP Server
  const server = app.listen(PORT, () => {
    console.log(`[Server] Netcradus API Server running on port ${PORT}`);
    console.log(`[Server] Health Endpoint: http://localhost:${PORT}/api/v1/health`);
    console.log(`[Server] Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log('='.repeat(60));
  });

  // Graceful Shutdown Handlers
  async function handleShutdown(signal) {
    console.log(`\n[Shutdown] Received ${signal}. Initiating graceful shutdown...`);
    server.close(async () => {
      console.log('[Shutdown] HTTP server closed.');
      await closeDatabasePool();
      console.log('[Shutdown] Graceful shutdown complete. Exiting process.');
      process.exit(0);
    });

    // Force exit after 10 seconds if hanging
    setTimeout(() => {
      console.error('[Shutdown Error] Graceful shutdown timed out. Forcing termination.');
      process.exit(1);
    }, 10000);
  }

  process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  process.on('SIGINT', () => handleShutdown('SIGINT'));
}

startServer().catch((err) => {
  console.error('[Fatal Error] Failed to start server:', err);
  process.exit(1);
});
