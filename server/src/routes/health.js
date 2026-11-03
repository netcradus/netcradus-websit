import { Router } from 'express';
import { checkDatabaseHealth } from '../config/db.js';

const router = Router();

/**
 * @route   GET /api/v1/health
 * @desc    Backend health probe & MySQL connectivity check
 * @access  Public
 */
router.get('/health', async (req, res) => {
  const dbHealth = await checkDatabaseHealth();
  const uptimeSeconds = Math.floor(process.uptime());

  const responsePayload = {
    status: dbHealth.healthy ? 'healthy' : 'degraded',
    uptime: `${uptimeSeconds}s`,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: {
      engine: 'MySQL',
      connected: dbHealth.healthy,
      ...(dbHealth.healthy ? { latencyMs: dbHealth.latencyMs } : { error: dbHealth.error }),
    },
  };

  const httpStatus = dbHealth.healthy ? 200 : 503;
  return res.status(httpStatus).json(responsePayload);
});

export default router;
