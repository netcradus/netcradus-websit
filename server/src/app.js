import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { apiRateLimiter } from './middleware/rateLimiter.js';
import { notFoundHandler, globalErrorHandler } from './middleware/errorHandler.js';
import apiRouter from './routes/index.js';

const app = express();

// 1. Trust proxy if behind reverse proxy / load balancer (e.g., AWS ALB, Nginx, Cloudflare)
app.set('trust proxy', 1);

// 2. Helmet security headers
app.use(helmet());

// 3. CORS Configuration via ALLOWED_ORIGINS environment variable
const defaultAllowedOrigins = [
  'https://aus.netcradus.com',
  'https://netcradus.in',
  'https://netcradus.co.uk.com',
  'http://localhost:5173',
];

const envOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map((o) => o.trim()).filter(Boolean)
  : defaultAllowedOrigins;

const corsOptions = {
  origin: (origin, callback) => {
    // Allow non-browser requests (like health checks, server-to-server, curl) with no origin
    if (!origin) {
      return callback(null, true);
    }

    // In development mode, permit localhost on any port (5173, 5174, etc.)
    const isLocalDev =
      process.env.NODE_ENV !== 'production' &&
      /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);

    if (envOrigins.includes(origin) || isLocalDev) {
      callback(null, true);
    } else {
      callback(new Error(`CORS policy: Origin '${origin}' is not allowed.`));
    }
  },
  methods: ['GET', 'POST', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  maxAge: 86400, // 24 hours preflight cache
};

app.use(cors(corsOptions));

// 4. Body parsing with strict payload size limit (1MB max)
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true, limit: '1mb' }));

// 5. Global Rate Limiter applied to API routes
app.use('/api', apiRateLimiter);

// 6. Mount API v1 router
app.use('/api/v1', apiRouter);

// 7. 404 & Global Error Handling
app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
