import formidable from 'formidable';
import fs from 'fs';
import { saveInquiry } from './lib/db.js';
import { sendAdminNotification, sendVisitorConfirmation } from './lib/mailer.js';

// In-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour window
  const maxRequests = 5;

  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((ts) => now - ts < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

export const config = {
  api: {
    bodyParser: false, // Disable default Vercel body parser to handle formidable multipart uploads
  },
};

export default async function handler(req, res) {
  // Enforce POST method
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} Not Allowed` });
  }

  // Extract client IP address safely
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    '127.0.0.1';

  const userAgent = req.headers['user-agent'] || 'Unknown Browser';

  // Apply rate limiting
  if (isRateLimited(ip)) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests from this IP. Please try again later or contact info@netcradus.com directly.',
    });
  }

  try {
    const contentType = req.headers['content-type'] || '';
    let fields = {};
    let files = {};

    if (contentType.includes('multipart/form-data')) {
      const form = formidable({
        maxFileSize: 5 * 1024 * 1024, // 5MB limit
        keepExtensions: true,
      });

      const [parsedFields, parsedFiles] = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          else resolve([fields, files]);
        });
      });

      // formidable v3 wraps values in arrays
      fields = Object.fromEntries(
        Object.entries(parsedFields).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v])
      );

      files = parsedFiles;
    } else {
      // JSON body parser fallback
      const bodyBuffer = await new Promise((resolve) => {
        let data = '';
        req.on('data', (chunk) => (data += chunk));
        req.on('end', () => resolve(data));
      });
      fields = bodyBuffer ? JSON.parse(bodyBuffer) : {};
    }

    // Extract input fields
    const firstName = (fields.first_name || fields.firstName || '').toString().trim();
    const lastName = (fields.last_name || fields.lastName || '').toString().trim();
    const email = (fields.user_email || fields.email || '').toString().trim();
    const phone = (fields.user_phone || fields.phone || '').toString().trim();
    const company = (fields.user_company || fields.company || '').toString().trim();
    const service = (fields.selectedService || fields.service || '').toString().trim();
    const country = (fields.selectedCountry || fields.country || '').toString().trim();
    const message = (fields.message || '').toString().trim();

    // Server-side validation
    const errors = {};
    if (!firstName) errors.first_name = 'First name is required.';
    if (!lastName) errors.last_name = 'Last name is required.';
    if (!email) {
      errors.user_email = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.user_email = 'Enter a valid email address.';
    }
    if (!message) errors.message = 'Message details are required.';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors, error: 'Validation failed.' });
    }

    // Handle attachment validation and processing
    let attachmentMetadata = null;
    const uploadedFile = files.attachment || files.file;

    if (uploadedFile) {
      const fileObj = Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile;
      if (fileObj && fileObj.size > 0) {
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'text/plain',
          'image/png',
          'image/jpeg',
          'image/jpg',
        ];

        const allowedExtensions = ['.pdf', '.doc', '.docx', '.txt', '.png', '.jpg', '.jpeg'];
        const fileName = fileObj.originalFilename || fileObj.name || 'attachment';
        const ext = fileName.slice(fileName.lastIndexOf('.')).toLowerCase();

        if (fileObj.size > 5 * 1024 * 1024) {
          return res.status(400).json({
            success: false,
            error: 'File size exceeds the 5MB maximum limit.',
          });
        }

        if (!allowedExtensions.includes(ext) && !allowedTypes.includes(fileObj.mimetype)) {
          return res.status(400).json({
            success: false,
            error: 'Unsupported file type. Allowed formats: PDF, DOC, DOCX, TXT, PNG, JPG.',
          });
        }

        // Read file data into base64 Data URL for persistent DB storage & Nodemailer email attachment
        const fileBuffer = fs.readFileSync(fileObj.filepath);
        const base64Content = fileBuffer.toString('base64');
        const mimeType = fileObj.mimetype || 'application/octet-stream';

        attachmentMetadata = {
          fileName,
          size: fileObj.size,
          mimeType,
          content: base64Content,
          url: `data:${mimeType};base64,${base64Content.substring(0, 100)}...`, // Secure reference URL preview
        };
      }
    }

    // Generate unique reference ID
    const referenceId = `NC-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const fullName = `${firstName} ${lastName}`;

    const inquiryRecord = {
      id: referenceId,
      fullName,
      firstName,
      lastName,
      email,
      phone: phone || 'N/A',
      company: company || 'N/A',
      service: service || 'None Specified',
      country: country || 'Not Specified',
      message,
      attachment: attachmentMetadata,
      status: 'new',
      ip,
      userAgent,
      createdAt: new Date().toISOString(),
    };

    // 1. Save to Database (MongoDB or local persistent JSON store)
    await saveInquiry(inquiryRecord);

    // 2. Dispatch Emails (Nodemailer: Admin Alert & Visitor Confirmation)
    try {
      await Promise.all([
        sendAdminNotification(inquiryRecord),
        sendVisitorConfirmation(inquiryRecord),
      ]);
    } catch (emailErr) {
      console.error('[Email Dispatch Error]', emailErr);
      // Note: We log email errors, but since DB record was created successfully, we return success with a notice
    }

    return res.status(200).json({
      success: true,
      referenceId,
      message: 'Your consultation request has been received securely.',
    });
  } catch (err) {
    console.error('[Contact API Error]', err);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please try again.',
    });
  }
}
