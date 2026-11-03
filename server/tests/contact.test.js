import assert from 'assert';
import app from '../src/app.js';
import { pool, closeDatabasePool } from '../src/config/db.js';
import { generateReferenceCode, extractDomainFromHeader } from '../src/services/contactService.js';
import { runRetentionPurge, executeDataSubjectErasureByEmail } from '../src/services/retentionService.js';

let server;
const PORT = 5098;
const BASE_URL = `http://localhost:${PORT}`;

async function runTests() {
  console.log('='.repeat(65));
  console.log('  NETCRADUS CONTACT API TEST SUITE (PHASE 2)');
  console.log('='.repeat(65));

  // Start temporary test server
  server = app.listen(PORT);
  console.log(`[Test Setup] Test server listening on port ${PORT}`);

  let passed = 0;
  let failed = 0;

  async function test(name, fn) {
    try {
      process.stdout.write(`• Testing: ${name}... `);
      await fn();
      console.log('✅ PASSED');
      passed++;
    } catch (err) {
      console.log('❌ FAILED');
      console.error('  Error:', err.message);
      failed++;
    }
  }

  try {
    // 1. Reference code generation test
    await test('Reference Code Generation format and collision check', async () => {
      const codes = new Set();
      for (let i = 0; i < 50; i++) {
        const code = generateReferenceCode();
        assert.ok(/^NC-[A-Z0-9]{6}$/.test(code), `Code ${code} must match NC-XXXXXX format`);
        codes.add(code);
      }
      assert.strictEqual(codes.size, 50, 'All generated codes should be distinct');
    });

    // 2. Domain extraction test
    await test('Domain Extraction helper', async () => {
      assert.strictEqual(extractDomainFromHeader('https://aus.netcradus.com'), 'aus.netcradus.com');
      assert.strictEqual(extractDomainFromHeader('https://netcradus.in/contact'), 'netcradus.in');
      assert.strictEqual(extractDomainFromHeader('https://netcradus.co.uk.com:443'), 'netcradus.co.uk.com');
    });

    // 3. Valid contact submission (Australia)
    let firstInquiryRef = '';
    const testEmail = `test.contact.${Date.now()}@example.com`;

    await test('Valid Contact Submission (Australia domain)', async () => {
      const payload = {
        first_name: 'John',
        last_name: 'Doe',
        email: testEmail,
        phone: '+61 400 123 456',
        company: 'Netcradus AU Client',
        service: 'managed-soc',
        country: 'Australia',
        message: 'We require 24/7 SOC monitoring for our Australian operations.',
        page_url: 'https://aus.netcradus.com/contact',
        captcha_token: 'TEST_VALID_TOKEN',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://aus.netcradus.com',
        },
        body: JSON.stringify(payload),
      });

      const body = await res.json();
      assert.strictEqual(res.status, 201, `Expected 201 Created, got ${res.status}: ${JSON.stringify(body)}`);
      assert.strictEqual(body.success, true);
      assert.ok(/^NC-[A-Z0-9]{6}$/.test(body.referenceCode));
      firstInquiryRef = body.referenceCode;

      // Verify row in MySQL
      const [inquiries] = await pool.query(
        `SELECT i.*, c.email, w.domain 
         FROM inquiries i 
         JOIN contacts c ON i.contact_id = c.id 
         JOIN websites w ON i.website_id = w.id 
         WHERE i.reference_code = ?`,
        [firstInquiryRef]
      );

      assert.strictEqual(inquiries.length, 1);
      assert.strictEqual(inquiries[0].email, testEmail);
      assert.strictEqual(inquiries[0].domain, 'aus.netcradus.com');
      assert.strictEqual(inquiries[0].status, 'new');
    });

    // 4. Verification of inquiry_activity audit record
    await test('Audit log creation in inquiry_activity table', async () => {
      const [activities] = await pool.query(
        `SELECT a.* FROM inquiry_activity a
         JOIN inquiries i ON a.inquiry_id = i.id
         WHERE i.reference_code = ?`,
        [firstInquiryRef]
      );

      const createdActivities = activities.filter((a) => a.action_type === 'submission_created');
      assert.strictEqual(createdActivities.length, 1, 'Exactly one submission_created activity entry expected');
      assert.strictEqual(createdActivities[0].action_type, 'submission_created');
      assert.strictEqual(createdActivities[0].new_status, 'new');
      assert.strictEqual(createdActivities[0].performed_by, 'system');
    });

    // 5. Duplicate contact creating a second inquiry
    await test('Duplicate Contact with second inquiry reuses contact record', async () => {
      const payload2 = {
        first_name: 'John',
        last_name: 'Doe',
        email: testEmail, // Same email
        phone: '+91 9876543210',
        company: 'Netcradus Updated Client',
        service: 'vapt',
        country: 'India',
        message: 'Second inquiry from the same contact for VAPT services.',
        page_url: 'https://netcradus.in/services/vapt',
        captcha_token: 'TEST_VALID_TOKEN',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://netcradus.in',
        },
        body: JSON.stringify(payload2),
      });

      const body = await res.json();
      assert.strictEqual(res.status, 201);
      assert.strictEqual(body.success, true);
      const secondInquiryRef = body.referenceCode;
      assert.notStrictEqual(secondInquiryRef, firstInquiryRef);

      // Verify that both inquiries link to the SAME contact ID
      const [rows] = await pool.query(
        'SELECT contact_id, reference_code FROM inquiries WHERE reference_code IN (?, ?)',
        [firstInquiryRef, secondInquiryRef]
      );

      assert.strictEqual(rows.length, 2);
      assert.strictEqual(rows[0].contact_id, rows[1].contact_id, 'Both inquiries must share the same contact_id');

      // Verify contact row count for this email is still 1
      const [contactRows] = await pool.query('SELECT id FROM contacts WHERE email = ?', [testEmail]);
      assert.strictEqual(contactRows.length, 1, 'Only one contact row should exist for the email');
    });

    // 5b. Valid submission from United Kingdom domain
    await test('Valid Contact Submission (UK domain: netcradus.co.uk.com)', async () => {
      const ukPayload = {
        first_name: 'David',
        last_name: 'Miller',
        email: `david.uk.${Date.now()}@example.co.uk`,
        phone: '+44 20 7946 0958',
        company: 'Netcradus UK Enterprise',
        service: 'cloud-security',
        country: 'United Kingdom',
        message: 'Cloud infrastructure compliance audit required for London office.',
        page_url: 'https://netcradus.co.uk.com/services/cloud-security',
        captcha_token: 'TEST_VALID_TOKEN',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://netcradus.co.uk.com',
        },
        body: JSON.stringify(ukPayload),
      });

      const body = await res.json();
      assert.strictEqual(res.status, 201);
      assert.strictEqual(body.success, true);
      assert.ok(/^NC-[A-Z0-9]{6}$/.test(body.referenceCode));

      const [ukInquiries] = await pool.query(
        `SELECT i.*, w.domain, c.code AS country_code
         FROM inquiries i
         JOIN websites w ON i.website_id = w.id
         JOIN countries c ON i.country_id = c.id
         WHERE i.reference_code = ?`,
        [body.referenceCode]
      );

      assert.strictEqual(ukInquiries.length, 1);
      assert.strictEqual(ukInquiries[0].domain, 'netcradus.co.uk.com');
      assert.strictEqual(ukInquiries[0].country_code, 'GB');
    });

    // 5c. Missing CAPTCHA token rejection test
    await test('Rejection when CAPTCHA token is missing', async () => {
      const missingCaptchaPayload = {
        first_name: 'NoCaptcha',
        last_name: 'User',
        email: `nocaptcha.${Date.now()}@example.com`,
        phone: '+91 99999 00000',
        company: 'Spam Corp',
        service: 'managed-soc',
        message: 'Submission attempting to bypass CAPTCHA.',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://netcradus.in',
        },
        body: JSON.stringify(missingCaptchaPayload),
      });

      const body = await res.json();
      assert.strictEqual(res.status, 400, 'Expected 400 Bad Request');
      assert.strictEqual(body.success, false);
      assert.strictEqual(body.error, 'CAPTCHA token is required.');

      if (pool) {
        const [rows] = await pool.query('SELECT * FROM contacts WHERE email = ?', [missingCaptchaPayload.email]);
        assert.strictEqual(rows.length, 0, 'No DB contact record created on missing CAPTCHA');
      }
    });

    // 5d. Invalid CAPTCHA token rejection test
    await test('Rejection when CAPTCHA token is invalid', async () => {
      const invalidCaptchaPayload = {
        first_name: 'InvalidCaptcha',
        last_name: 'User',
        email: `invalidcaptcha.${Date.now()}@example.com`,
        phone: '+91 99999 00001',
        company: 'Bot Net',
        service: 'vapt',
        message: 'Submission with fake CAPTCHA token.',
        captcha_token: 'TEST_INVALID_TOKEN',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://netcradus.in',
        },
        body: JSON.stringify(invalidCaptchaPayload),
      });

      const body = await res.json();
      assert.strictEqual(res.status, 400);
      assert.strictEqual(body.success, false);
      assert.strictEqual(body.error, 'Bot verification failed.');
      assert.strictEqual(JSON.stringify(body).includes('CAPTCHA_SECRET_KEY'), false, 'Secret key must never be leaked');

      if (pool) {
        const [rows] = await pool.query('SELECT * FROM contacts WHERE email = ?', [invalidCaptchaPayload.email]);
        assert.strictEqual(rows.length, 0, 'No DB contact record created on invalid CAPTCHA');
      }
    });

    // 5e. Expired CAPTCHA token rejection test
    await test('Rejection when CAPTCHA token is expired', async () => {
      const expiredPayload = {
        first_name: 'ExpiredCaptcha',
        last_name: 'User',
        email: `expiredcaptcha.${Date.now()}@example.com`,
        phone: '+91 99999 00002',
        company: 'Stale Session',
        service: 'cloud-security',
        message: 'Submission with expired CAPTCHA token.',
        captcha_token: 'TEST_EXPIRED_TOKEN',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://netcradus.in',
        },
        body: JSON.stringify(expiredPayload),
      });

      const body = await res.json();
      assert.strictEqual(res.status, 400);
      assert.strictEqual(body.success, false);
      assert.strictEqual(body.error, 'Bot verification failed.');
    });

    // 5f. Cloudflare verification timeout / network error test
    await test('Rejection when Cloudflare verification times out or fails network', async () => {
      const timeoutPayload = {
        first_name: 'TimeoutUser',
        last_name: 'Test',
        email: `timeout.${Date.now()}@example.com`,
        phone: '+91 99999 00003',
        company: 'Slow Network Ltd',
        service: 'vapt',
        message: 'Testing verification timeout fail-closed behavior.',
        captcha_token: 'TEST_TIMEOUT_TOKEN',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://netcradus.in',
        },
        body: JSON.stringify(timeoutPayload),
      });

      const body = await res.json();
      assert.strictEqual(res.status, 400);
      assert.strictEqual(body.success, false);
      assert.strictEqual(body.error, 'Bot verification failed.');
    });

    // 6. Validation failure test
    await test('Validation failure on missing and invalid fields', async () => {
      const invalidPayload = {
        first_name: '',
        last_name: 'Smith',
        email: 'invalid-email-address',
        message: '',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://netcradus.in',
        },
        body: JSON.stringify(invalidPayload),
      });

      const body = await res.json();
      assert.strictEqual(res.status, 400, 'Expected 400 Bad Request');
      assert.strictEqual(body.success, false);
      assert.ok(body.details.first_name, 'first_name validation error expected');
      assert.ok(body.details.email, 'email validation error expected');
      assert.ok(body.details.message, 'message validation error expected');
    });

    // 7. Invalid/unregistered origin test
    await test('Rejection of unregistered / unauthorized Origin', async () => {
      const payload = {
        first_name: 'Attacker',
        last_name: 'Bot',
        email: 'attacker@evil.com',
        message: 'Spam submission',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://evil-phishing-site.com',
        },
        body: JSON.stringify(payload),
      });

      const body = await res.json();
      // Should return 403 or 500 error from CORS/Origin validator
      assert.ok(res.status === 403 || res.status === 500, `Expected 403 Forbidden or CORS error, got ${res.status}`);
      assert.strictEqual(body.success, false);
    });

    // 8. Health check test
    await test('Health endpoint GET /api/v1/health', async () => {
      const res = await fetch(`${BASE_URL}/api/v1/health`);
      const body = await res.json();
      assert.strictEqual(res.status, 200);
      assert.strictEqual(body.status, 'healthy');
      assert.strictEqual(body.database.connected, true);
      assert.strictEqual(body.database.engine, 'MySQL');
    });

    // 9. Google Sheets Async Sync & Failure Resilience test
    await test('Google Sheets sync does not block or break HTTP 201 response on submission', async () => {
      const sheetsTestEmail = `sheets.test.${Date.now()}@example.com`;
      const payload = {
        first_name: 'Sheets',
        last_name: 'Tester',
        email: sheetsTestEmail,
        phone: '+91 99999 88888',
        company: 'Netcradus Sheets Test Ltd',
        service: 'cloud-security',
        country: 'India',
        message: 'Testing Google Sheets async sync flow.',
        page_url: 'https://netcradus.in/contact',
        captcha_token: 'TEST_VALID_TOKEN',
      };

      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://netcradus.in',
        },
        body: JSON.stringify(payload),
      });

      const body = await res.json();
      assert.strictEqual(res.status, 201, 'HTTP 201 expected immediately regardless of Sheets state');
      assert.strictEqual(body.success, true);
      assert.ok(/^NC-[A-Z0-9]{6}$/.test(body.referenceCode));

      // Wait a short tick for async post-commit sync & audit log insertion
      await new Promise((resolve) => setTimeout(resolve, 1500));

      const [activities] = await pool.query(
        `SELECT a.action_type, a.notes FROM inquiry_activity a
         JOIN inquiries i ON a.inquiry_id = i.id
         WHERE i.reference_code = ?`,
        [body.referenceCode]
      );

      // Verify that activity logs exist (submission_created and either sheets_synced or sheets_sync_failed)
      const actionTypes = activities.map((a) => a.action_type);
      assert.ok(actionTypes.includes('submission_created'), 'Must have submission_created activity');
      assert.ok(
        actionTypes.includes('sheets_synced') || actionTypes.includes('sheets_sync_failed'),
        `Expected sheets audit log, found: ${actionTypes.join(', ')}`
      );
    });

    // 10. Data Subject Erasure Request Test (DPDP Right to Erasure)
    await test('Data Subject Erasure Request by Email anonymizes personal data & preserves non-personal audit logs', async () => {
      const erasureEmail = `erasure.user.${Date.now()}@example.com`;

      // Submit a fresh inquiry to erase
      const res = await fetch(`${BASE_URL}/api/v1/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: 'https://netcradus.in',
        },
        body: JSON.stringify({
          first_name: 'ErasureTarget',
          last_name: 'Person',
          email: erasureEmail,
          phone: '+91 1234567890',
          company: 'Secret Corp',
          service: 'vapt',
          message: 'Confidential message to be erased.',
          captcha_token: 'TEST_VALID_TOKEN',
        }),
      });
      const data = await res.json();
      assert.strictEqual(res.status, 201);
      const refCode = data.referenceCode;

      // Execute verified erasure
      const erasureResult = await executeDataSubjectErasureByEmail(erasureEmail, 'verified_user_request');
      assert.strictEqual(erasureResult.success, true);
      assert.strictEqual(erasureResult.erasedInquiries, 1);
      assert.strictEqual(erasureResult.erasedContacts, 1);

      // Verify Contact table record is anonymized
      const [erasedContacts] = await pool.query('SELECT * FROM contacts WHERE email = ?', [erasureEmail]);
      assert.strictEqual(erasedContacts.length, 0, 'Original email must no longer exist in contacts');

      // Verify Inquiry table record is anonymized
      const [inquiries] = await pool.query('SELECT * FROM inquiries WHERE reference_code = ?', [refCode]);
      assert.strictEqual(inquiries.length, 1);
      assert.strictEqual(inquiries[0].status, 'anonymized');
      assert.strictEqual(inquiries[0].ip_address, null);
      assert.strictEqual(inquiries[0].user_agent, null);
      assert.ok(inquiries[0].message.includes('ANONYMIZED'), 'Message content must be redacted');

      // Verify Activity log records data_anonymized without leaking PII
      const [activityLogs] = await pool.query(
        'SELECT * FROM inquiry_activity WHERE inquiry_id = ? AND action_type = "data_anonymized"',
        [inquiries[0].id]
      );
      assert.strictEqual(activityLogs.length, 1);
      assert.strictEqual(activityLogs[0].new_status, 'anonymized');
      assert.ok(activityLogs[0].notes.includes('verified_user_request'));
    });

    // 11. Scheduled Retention Purge Execution Test
    await test('Retention Purge Job executes safely and idempotently on expired records', async () => {
      const oldEmail = `retention.old.${Date.now()}@example.com`;

      // Create an inquiry artificially dated beyond retention window (e.g. 400 days ago)
      const [contactInsert] = await pool.query(
        'INSERT INTO contacts (first_name, last_name, email, phone, company_name, created_at) VALUES (?, ?, ?, ?, ?, NOW() - INTERVAL 400 DAY)',
        ['OldFirst', 'OldLast', oldEmail, '+91 99999 11111', 'Old Company']
      );
      const contactId = contactInsert.insertId;
      const oldRefCode = generateReferenceCode();

      const [inquiryInsert] = await pool.query(
        `INSERT INTO inquiries (
          reference_code, contact_id, website_id, country_id, service_key,
          message, status, priority, ip_address, user_agent, created_at
        ) VALUES (?, ?, 1, 1, 'managed-soc', 'Old message from past year', 'new', 'normal', '1.2.3.4', 'Mozilla', NOW() - INTERVAL 400 DAY)`,
        [oldRefCode, contactId]
      );

      // Run retention purge with 365 days threshold
      const purgeResult = await runRetentionPurge(365);
      assert.ok(purgeResult.processedInquiries >= 1, 'Must process at least 1 expired inquiry');

      // Verify the old inquiry is now anonymized
      const [oldInquiries] = await pool.query('SELECT * FROM inquiries WHERE reference_code = ?', [oldRefCode]);
      assert.strictEqual(oldInquiries[0].status, 'anonymized');
      assert.strictEqual(oldInquiries[0].ip_address, null);
      assert.strictEqual(oldInquiries[0].user_agent, null);

      // Run a second time to ensure complete idempotency
      const rerunResult = await runRetentionPurge(365);
      assert.strictEqual(rerunResult.errors.length, 0, 'Rerun should encounter zero errors');
    });
  } finally {
    if (server) {
      await new Promise((resolve) => server.close(resolve));
    }
    await closeDatabasePool();
    console.log('='.repeat(65));
    console.log(`  TEST RESULTS: ${passed} PASSED | ${failed} FAILED`);
    console.log('='.repeat(65));
    if (failed > 0) {
      process.exitCode = 1;
    } else {
      process.exitCode = 0;
    }
  }
}

runTests().catch((err) => {
  console.error('Fatal Test Runner Error:', err);
  if (server) server.close();
  process.exit(1);
});
