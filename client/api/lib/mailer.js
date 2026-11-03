import nodemailer from 'nodemailer';

export function getTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true';
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';

  if (!user || !pass) {
    console.warn('[Mailer Warning] SMTP credentials not set in environment variables (SMTP_USER / SMTP_PASS). Emails will be logged to console in dev mode.');
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false
    }
  });
}

export async function sendAdminNotification(inquiry) {
  const transporter = getTransporter();
  const targetEmail = process.env.NOTIFICATION_EMAIL || 'info@netcradus.com';
  const senderEmail = process.env.SMTP_USER || 'info@netcradus.com';

  const attachments = [];
  if (inquiry.attachment && inquiry.attachment.content) {
    attachments.push({
      filename: inquiry.attachment.fileName,
      content: Buffer.from(inquiry.attachment.content, 'base64'),
      contentType: inquiry.attachment.mimeType
    });
  }

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #05060a; color: #ffffff; padding: 30px; border-radius: 12px; max-width: 650px; margin: 0 auto; border: 1px solid #e8400a33;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #ffffff1a;">
        <h2 style="color: #e8400a; margin: 0; font-size: 24px;">New Consultation Request Received</h2>
        <p style="color: #9ca3af; font-size: 14px; margin-top: 5px;">Reference ID: <strong style="color: #ffffff;">${inquiry.id}</strong></p>
      </div>

      <div style="padding: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; color: #d1d5db; font-size: 14px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; width: 140px; color: #9ca3af;">Full Name:</td>
            <td style="padding: 10px; color: #ffffff; font-weight: bold;">${inquiry.fullName}</td>
          </tr>
          <tr style="background-color: #ffffff08;">
            <td style="padding: 10px; font-weight: bold; color: #9ca3af;">Business Email:</td>
            <td style="padding: 10px;"><a href="mailto:${inquiry.email}" style="color: #3b82f6; text-decoration: none;">${inquiry.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #9ca3af;">Phone Number:</td>
            <td style="padding: 10px; color: #ffffff;">${inquiry.phone || 'N/A'}</td>
          </tr>
          <tr style="background-color: #ffffff08;">
            <td style="padding: 10px; font-weight: bold; color: #9ca3af;">Company Name:</td>
            <td style="padding: 10px; color: #ffffff;">${inquiry.company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #9ca3af;">Service Required:</td>
            <td style="padding: 10px; color: #e8400a; font-weight: bold;">${inquiry.service || 'N/A'}</td>
          </tr>
          <tr style="background-color: #ffffff08;">
            <td style="padding: 10px; font-weight: bold; color: #9ca3af;">Country/Region:</td>
            <td style="padding: 10px; color: #ffffff;">${inquiry.country || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #9ca3af;">Submission Time:</td>
            <td style="padding: 10px; color: #9ca3af;">${inquiry.createdAt}</td>
          </tr>
          <tr style="background-color: #ffffff08;">
            <td style="padding: 10px; font-weight: bold; color: #9ca3af;">Visitor IP:</td>
            <td style="padding: 10px; color: #9ca3af; font-family: monospace;">${inquiry.ip}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 15px; background-color: #ffffff08; border-radius: 8px; border-left: 4px solid #e8400a;">
          <h4 style="margin: 0 0 10px 0; color: #e8400a; font-size: 14px;">Message Details:</h4>
          <p style="margin: 0; color: #e5e7eb; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${inquiry.message}</p>
        </div>

        ${inquiry.attachment ? `
          <div style="margin-top: 15px; padding: 12px; background-color: #3b82f615; border: 1px solid #3b82f640; border-radius: 8px; font-size: 13px; color: #93c5fd;">
            📎 <strong>Attached File:</strong> ${inquiry.attachment.fileName} (${(inquiry.attachment.size / 1024).toFixed(1)} KB)
          </div>
        ` : ''}
      </div>

      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #ffffff1a; font-size: 12px; color: #6b7280;">
        Sent via Netcradus Automated Secure Contact Dispatch System
      </div>
    </div>
  `;

  if (!transporter) {
    console.log('[Dev Email Dispatch - Admin Notification]:', {
      to: targetEmail,
      subject: `[New Inquiry] ${inquiry.fullName} - ${inquiry.service || 'Consultation'} (${inquiry.id})`,
      inquiry
    });
    return { success: true, simulated: true };
  }

  return transporter.sendMail({
    from: `"Netcradus Dispatch" <${senderEmail}>`,
    to: targetEmail,
    replyTo: inquiry.email,
    subject: `[New Consultation Request] ${inquiry.fullName} - ${inquiry.service || 'Security Service'} (${inquiry.id})`,
    html: htmlContent,
    attachments
  });
}

export async function sendVisitorConfirmation(inquiry) {
  const transporter = getTransporter();
  const senderEmail = process.env.SMTP_USER || 'info@netcradus.com';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #05060a; color: #ffffff; padding: 30px; border-radius: 12px; max-width: 650px; margin: 0 auto; border: 1px solid #e8400a33;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #ffffff1a;">
        <h1 style="color: #e8400a; margin: 0; font-size: 26px; font-weight: bold;">Netcradus</h1>
        <p style="color: #9ca3af; font-size: 13px; margin-top: 4px; letter-spacing: 1px;">UNCOMPROMISING SECURITY. POWERED BY INTELLIGENCE.</p>
      </div>

      <div style="padding: 25px 0; font-size: 15px; line-height: 1.6; color: #d1d5db;">
        <p>Dear <strong style="color: #ffffff;">${inquiry.fullName}</strong>,</p>
        <p>Thank you for reaching out to Netcradus. We have successfully received your consultation request.</p>

        <div style="background-color: #ffffff08; padding: 18px; border-radius: 8px; border-left: 4px solid #e8400a; margin: 20px 0;">
          <p style="margin: 0; font-size: 14px; color: #9ca3af;">Reference Code:</p>
          <p style="margin: 4px 0 0 0; font-size: 20px; font-weight: bold; color: #e8400a; font-family: monospace;">${inquiry.id}</p>
        </div>

        <p>Our dedicated cybersecurity team has been notified and a specialist will review your details and contact you within <strong style="color: #ffffff;">1 business hour</strong>.</p>

        <p style="margin-top: 25px;">If you have any urgent incident or immediate emergency requirement, please contact our 24×7 Operations desk directly at <a href="tel:+917290909571" style="color: #e8400a; text-decoration: none; font-weight: bold;">+91 72909 09571</a> or email <a href="mailto:support@netcradus.com" style="color: #3b82f6; text-decoration: none;">support@netcradus.com</a>.</p>

        <br />
        <p style="margin-bottom: 0;">Best regards,</p>
        <p style="margin-top: 4px; font-weight: bold; color: #ffffff;">Netcradus Cyber Security Team</p>
      </div>

      <div style="text-align: center; padding-top: 20px; border-top: 1px solid #ffffff1a; font-size: 12px; color: #6b7280;">
        Netcradus Ltd. • Enterprise Cybersecurity & Managed Operations Center<br />
        <a href="https://netcradus.com" style="color: #e8400a; text-decoration: none;">www.netcradus.com</a>
      </div>
    </div>
  `;

  if (!transporter) {
    console.log('[Dev Email Dispatch - Visitor Confirmation]:', {
      to: inquiry.email,
      subject: `Consultation Request Received - Reference ${inquiry.id}`,
    });
    return { success: true, simulated: true };
  }

  return transporter.sendMail({
    from: `"Netcradus" <${senderEmail}>`,
    to: inquiry.email,
    subject: `Consultation Request Received - Reference ${inquiry.id}`,
    html: htmlContent
  });
}
