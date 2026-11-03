import rateLimit from 'express-rate-limit';

/**
 * Standard API Rate Limiter
 * Limits each IP to 100 requests per 15-minute window
 */
export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per window per IP
  standardHeaders: true, // Return standard RateLimit-* headers
  legacyHeaders: false, // Disable X-RateLimit-* headers
  message: {
    success: false,
    error: 'Too many requests from this IP address. Please try again after 15 minutes.',
  },
});
