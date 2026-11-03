import crypto from 'crypto';
import { getInquiries, updateInquiryStatus, saveSession, getSession, deleteSession } from './lib/db.js';

const SESSION_COOKIE_NAME = 'nc_admin_session';
const SESSION_TTL_SECONDS = 14400; // 4 hours

// Helper to parse cookies from request header
function parseCookies(cookieHeader) {
  const list = {};
  if (!cookieHeader) return list;
  cookieHeader.split(';').forEach((cookie) => {
    const parts = cookie.split('=');
    if (parts.length >= 2) {
      const name = parts[0].trim();
      const val = parts.slice(1).join('=').trim();
      list[name] = decodeURIComponent(val);
    }
  });
  return list;
}

// Helper to serialize cookie header
function serializeCookie(name, val, options = {}) {
  let cookieStr = `${name}=${encodeURIComponent(val)}`;
  if (options.path) cookieStr += `; Path=${options.path}`;
  if (options.maxAge !== undefined) cookieStr += `; Max-Age=${options.maxAge}`;
  if (options.expires) cookieStr += `; Expires=${options.expires.toUTCString()}`;
  if (options.httpOnly) cookieStr += '; HttpOnly';
  if (options.secure) cookieStr += '; Secure';
  if (options.sameSite) cookieStr += `; SameSite=${options.sameSite}`;
  return cookieStr;
}

// Throttling / Rate limiting for admin requests (max 20 requests per 15 min per IP)
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes window
  const maxRequests = 20;

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((ts) => now - ts < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export default async function handler(req, res) {
  // Extract client IP address safely for rate limiting
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    '127.0.0.1';

  if (isRateLimited(ip)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.',
    });
  }

  // Fail closed if ADMIN_SECRET_TOKEN is missing or empty
  const expectedToken = process.env.ADMIN_SECRET_TOKEN;
  if (!expectedToken || typeof expectedToken !== 'string' || !expectedToken.trim()) {
    console.error('[Admin Auth Error] ADMIN_SECRET_TOKEN environment variable is not configured.');
    return res.status(500).json({ success: false, error: 'Authentication service unavailable.' });
  }

  const cookies = parseCookies(req.headers.cookie);
  const sessionIdFromCookie = cookies[SESSION_COOKIE_NAME];
  const isSecureEnv = process.env.NODE_ENV === 'production' || req.headers['x-forwarded-proto'] === 'https';

  // 1. POST Requests: Login, Logout, or Session Check Actions
  if (req.method === 'POST') {
    let bodyData = req.body;
    if (typeof bodyData === 'string') {
      try {
        bodyData = JSON.parse(bodyData);
      } catch (_e) {
        bodyData = {};
      }
    }
    const action = bodyData?.action || 'login';

    if (action === 'login') {
      const submittedToken = bodyData?.token || req.headers['x-admin-token'];
      if (!submittedToken || submittedToken !== expectedToken) {
        return res.status(401).json({ success: false, error: 'Unauthorized access.' });
      }

      // Generate opaque session ID and CSRF token
      const sessionId = crypto.randomBytes(32).toString('hex');
      const csrfToken = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + SESSION_TTL_SECONDS * 1000).toISOString();

      await saveSession({
        id: sessionId,
        csrfToken,
        createdAt: new Date().toISOString(),
        expiresAt,
      });

      // Set HttpOnly, Secure, SameSite=Strict cookie
      const cookieStr = serializeCookie(SESSION_COOKIE_NAME, sessionId, {
        path: '/',
        maxAge: SESSION_TTL_SECONDS,
        httpOnly: true,
        secure: isSecureEnv,
        sameSite: 'Strict',
      });

      res.setHeader('Set-Cookie', cookieStr);
      return res.status(200).json({
        success: true,
        csrfToken,
        message: 'Authenticated successfully.',
      });
    }

    if (action === 'logout') {
      if (sessionIdFromCookie) {
        await deleteSession(sessionIdFromCookie);
      }
      const expiredCookie = serializeCookie(SESSION_COOKIE_NAME, '', {
        path: '/',
        maxAge: 0,
        expires: new Date(0),
        httpOnly: true,
        secure: isSecureEnv,
        sameSite: 'Strict',
      });
      res.setHeader('Set-Cookie', expiredCookie);
      return res.status(200).json({ success: true, message: 'Logged out successfully.' });
    }

    if (action === 'check') {
      const session = await getSession(sessionIdFromCookie);
      if (!session) {
        return res.status(401).json({ success: false, error: 'Unauthorized access.' });
      }
      return res.status(200).json({ success: true, csrfToken: session.csrfToken });
    }

    return res.status(400).json({ success: false, error: 'Invalid action.' });
  }

  // 2. Authenticate Session for GET and PATCH
  const currentSession = await getSession(sessionIdFromCookie);
  if (!currentSession) {
    return res.status(401).json({ success: false, error: 'Unauthorized access.' });
  }

  // 3. GET Method: Retrieve inquiries
  if (req.method === 'GET') {
    try {
      const inquiries = await getInquiries();
      const sanitizedInquiries = inquiries.map((item) => {
        if (item.attachment && item.attachment.content) {
          const { content, ...restAttachment } = item.attachment;
          return { ...item, attachment: restAttachment };
        }
        return item;
      });

      return res.status(200).json({
        success: true,
        csrfToken: currentSession.csrfToken,
        inquiries: sanitizedInquiries,
      });
    } catch (err) {
      console.error('[Admin API GET Error]', err);
      return res.status(500).json({ success: false, error: 'Failed to retrieve inquiries.' });
    }
  }

  // 4. PATCH Method: Update inquiry status with CSRF protection
  if (req.method === 'PATCH') {
    // Validate CSRF token for state-changing PATCH request
    const requestCsrfToken =
      req.headers['x-csrf-token'] ||
      (typeof req.body === 'object' ? req.body?.csrfToken : null);

    if (!requestCsrfToken || requestCsrfToken !== currentSession.csrfToken) {
      return res.status(403).json({ success: false, error: 'Invalid or missing CSRF token.' });
    }

    try {
      let bodyData = req.body;
      if (typeof bodyData === 'string') {
        bodyData = JSON.parse(bodyData);
      }
      const { id, status } = bodyData || {};

      if (!id || !status) {
        return res.status(400).json({ success: false, error: 'Inquiry ID and new status are required.' });
      }

      const updated = await updateInquiryStatus(id, status);
      if (updated) {
        return res.status(200).json({ success: true, message: `Inquiry ${id} status updated to ${status}.` });
      }
      return res.status(404).json({ success: false, error: 'Inquiry record not found.' });
    } catch (err) {
      console.error('[Admin API PATCH Error]', err);
      return res.status(500).json({ success: false, error: 'Failed to update inquiry status.' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST', 'PATCH']);
  return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
}
