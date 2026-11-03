/**
 * 404 Not Found Middleware
 */
export function notFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    error: `Cannot ${req.method} ${req.originalUrl}`,
  });
}

/**
 * Global Error Handler Middleware
 */
export function globalErrorHandler(err, req, res, next) {
  console.error('[Unhandled Error]', err);

  const statusCode = err.status || err.statusCode || 500;
  const isProd = process.env.NODE_ENV === 'production';

  res.status(statusCode).json({
    success: false,
    error: isProd && statusCode === 500 ? 'Internal Server Error' : err.message || 'An unexpected error occurred.',
    ...(isProd ? {} : { stack: err.stack }),
  });
}
