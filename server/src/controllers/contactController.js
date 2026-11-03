import { validateContactPayload } from '../validators/contactValidator.js';
import { processContactSubmission } from '../services/contactService.js';
import { syncInquiryToGoogleSheets } from '../services/googleSheetsService.js';
import { verifyTurnstileToken } from '../services/captchaService.js';

/**
 * Handles POST /api/v1/contact
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
export async function submitContact(req, res) {
  // 1. Request Body Validation via Zod
  const validation = validateContactPayload(req.body);
  if (!validation.success) {
    return res.status(400).json({
      success: false,
      error: 'Validation failed.',
      details: validation.errors,
    });
  }

  // 2. Extract Request Metadata
  const origin = req.headers['origin'] || req.headers['referer'] || null;
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.socket?.remoteAddress ||
    req.ip ||
    '127.0.0.1';
  const userAgent = req.headers['user-agent'] || 'Unknown Client';

  const metadata = {
    origin,
    ip,
    userAgent,
  };

  // 3. Turnstile CAPTCHA Server Verification
  const rawCaptchaToken = req.body.captcha_token || validation.data.captcha_token;
  const captchaResult = await verifyTurnstileToken(rawCaptchaToken, ip);
  if (!captchaResult.success) {
    return res.status(400).json({
      success: false,
      error: captchaResult.error || 'Bot verification failed.',
    });
  }

  // 3. Process & Persist in MySQL
  try {
    const result = await processContactSubmission(validation.data, metadata);

    // 4. Trigger asynchronous Google Sheets synchronization (non-blocking, post-commit)
    if (result.inquiryId && result.inquiryData) {
      syncInquiryToGoogleSheets(result.inquiryId, result.inquiryData).catch((syncErr) => {
        console.error('[Async Sheets Sync Unhandled Warning]', syncErr.message || syncErr);
      });
    }

    return res.status(201).json({
      success: true,
      referenceCode: result.referenceCode,
      message: 'Your consultation request has been submitted successfully.',
    });
  } catch (err) {
    if (err.statusCode === 403) {
      return res.status(403).json({
        success: false,
        error: err.message,
      });
    }

    if (
      err.code === 'ECONNREFUSED' ||
      err.code === 'PROTOCOL_CONNECTION_LOST' ||
      err.code === 'ETIMEDOUT' ||
      err.message?.includes('ECONNREFUSED')
    ) {
      console.error('[Database Unavailable]', err.message);
      return res.status(503).json({
        success: false,
        error: 'Database service is currently unavailable. Please try again later.',
      });
    }

    console.error('[Contact Submission Error]', err.message);

    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your inquiry. Please try again later.',
    });
  }
}
