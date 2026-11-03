import assert from 'assert';
import handler from '../../client/api/admin-inquiries.js';
import { saveSession, getSession, deleteSession } from '../../client/api/lib/db.js';

const TEST_SECRET_TOKEN = 'test_admin_secret_token_sec_2026_xyz';

// Helper to create mock HTTP req/res objects
let ipCounter = 1;
function createMockReqRes(options = {}) {
  const clientIp = options.ip || `192.168.1.${ipCounter++}`;
  const req = {
    method: options.method || 'GET',
    headers: {
      'x-forwarded-for': clientIp,
      'x-forwarded-proto': options.isHttps ? 'https' : 'http',
      ...(options.headers || {}),
    },
    body: options.body || {},
    socket: { remoteAddress: clientIp },
  };

  const headersSet = {};
  let statusCode = 200;
  let responseData = null;

  const res = {
    status(code) {
      statusCode = code;
      return this;
    },
    json(data) {
      responseData = data;
      return this;
    },
    setHeader(name, value) {
      headersSet[name.toLowerCase()] = value;
      return this;
    },
    getHeader(name) {
      return headersSet[name.toLowerCase()];
    },
    getStatusCode() {
      return statusCode;
    },
    getResponseData() {
      return responseData;
    },
    getHeaders() {
      return headersSet;
    },
  };

  return { req, res };
}

// Helper to extract session cookie from Set-Cookie header
function parseSetCookie(cookieStr) {
  if (!cookieStr) return {};
  const parts = cookieStr.split(';');
  const [name, val] = parts[0].split('=');
  const flags = parts.slice(1).map((p) => p.trim());
  return {
    name: name.trim(),
    value: val ? decodeURIComponent(val.trim()) : '',
    flags,
    raw: cookieStr,
  };
}

async function runAdminSecurityTestSuite() {
  console.log('='.repeat(70));
  console.log('  NETCRADUS ADMIN AUTHENTICATION & SESSION SECURITY TEST SUITE');
  console.log('='.repeat(70));

  const origSecret = process.env.ADMIN_SECRET_TOKEN;
  process.env.ADMIN_SECRET_TOKEN = TEST_SECRET_TOKEN;

  let passed = 0;
  let failed = 0;
  let skipped = 0;

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
    // -----------------------------------------------------------------
    // 1. AUTHENTICATION TESTS
    // -----------------------------------------------------------------
    await test('1. Login with correct ADMIN_SECRET_TOKEN', async () => {
      const { req, res } = createMockReqRes({
        method: 'POST',
        isHttps: true,
        body: { action: 'login', token: TEST_SECRET_TOKEN },
      });

      await handler(req, res);

      assert.strictEqual(res.getStatusCode(), 200, 'Expected HTTP 200 on successful login');
      const data = res.getResponseData();
      assert.strictEqual(data.success, true, 'Expected success: true');
      assert.ok(data.csrfToken, 'Expected csrfToken in login response');

      // Verify Secret is NOT exposed in response body
      const jsonStr = JSON.stringify(data);
      assert.strictEqual(jsonStr.includes(TEST_SECRET_TOKEN), false, 'Raw ADMIN_SECRET_TOKEN must NOT be returned in JSON');

      // Verify Set-Cookie header
      const setCookieHeader = res.getHeader('set-cookie');
      assert.ok(setCookieHeader, 'Expected Set-Cookie header on successful login');

      const parsedCookie = parseSetCookie(setCookieHeader);
      assert.strictEqual(parsedCookie.name, 'nc_admin_session', 'Cookie name must be nc_admin_session');
      assert.ok(parsedCookie.value.length >= 32, 'Cookie value must be a valid session ID');

      // Verify cookie security flags
      const flagsStr = parsedCookie.flags.join('; ');
      assert.ok(/HttpOnly/i.test(flagsStr), 'Cookie must have HttpOnly attribute');
      assert.ok(/SameSite=Strict/i.test(flagsStr), 'Cookie must have SameSite=Strict attribute');
      assert.ok(/Secure/i.test(flagsStr), 'Cookie must have Secure attribute in HTTPS/production environment');
      assert.ok(/Path=\//i.test(flagsStr), 'Cookie must have Path=/ attribute');

      // Clean up created session
      await deleteSession(parsedCookie.value);
    });

    await test('2. Login with incorrect token', async () => {
      const { req, res } = createMockReqRes({
        method: 'POST',
        body: { action: 'login', token: 'INVALID_WRONG_TOKEN' },
      });

      await handler(req, res);

      assert.strictEqual(res.getStatusCode(), 401, 'Expected HTTP 401 on invalid token login');
      const data = res.getResponseData();
      assert.strictEqual(data.success, false, 'Expected success: false');
      assert.strictEqual(res.getHeader('set-cookie'), undefined, 'No session cookie should be issued on failed login');

      const jsonStr = JSON.stringify(data);
      assert.strictEqual(jsonStr.includes(TEST_SECRET_TOKEN), false, 'Secret must not be exposed in failure response');
    });

    await test('3. Login when ADMIN_SECRET_TOKEN is missing (fail-closed)', async () => {
      delete process.env.ADMIN_SECRET_TOKEN;

      const { req, res } = createMockReqRes({
        method: 'POST',
        body: { action: 'login', token: TEST_SECRET_TOKEN },
      });

      await handler(req, res);

      assert.strictEqual(res.getStatusCode(), 500, 'Expected HTTP 500 when ADMIN_SECRET_TOKEN is missing');
      const data = res.getResponseData();
      assert.strictEqual(data.success, false);
      assert.strictEqual(data.error, 'Authentication service unavailable.');
      assert.strictEqual(res.getHeader('set-cookie'), undefined, 'No session cookie should be set on 500 failure');

      // Restore secret token
      process.env.ADMIN_SECRET_TOKEN = TEST_SECRET_TOKEN;
    });

    // -----------------------------------------------------------------
    // 2. SESSION PROTECTION TESTS
    // -----------------------------------------------------------------
    await test('4. GET without session cookie', async () => {
      const { req, res } = createMockReqRes({ method: 'GET' });
      await handler(req, res);
      assert.strictEqual(res.getStatusCode(), 401, 'Expected HTTP 401 when GET is requested without session');
    });

    await test('5. GET with invalid session ID', async () => {
      const { req, res } = createMockReqRes({
        method: 'GET',
        headers: { cookie: 'nc_admin_session=nonexistent_invalid_session_id_1234' },
      });
      await handler(req, res);
      assert.strictEqual(res.getStatusCode(), 401, 'Expected HTTP 401 when GET is requested with invalid session ID');
    });

    await test('6. GET with expired session', async () => {
      const expiredSessionId = 'expired_test_session_id_9999';
      const pastDate = new Date(Date.now() - 3600 * 1000).toISOString();
      await saveSession({
        id: expiredSessionId,
        csrfToken: 'expired_csrf_token',
        createdAt: new Date(Date.now() - 7200 * 1000).toISOString(),
        expiresAt: pastDate,
      });

      const { req, res } = createMockReqRes({
        method: 'GET',
        headers: { cookie: `nc_admin_session=${expiredSessionId}` },
      });
      await handler(req, res);

      assert.strictEqual(res.getStatusCode(), 401, 'Expected HTTP 401 when GET is requested with expired session');
      await deleteSession(expiredSessionId);
    });

    await test('7. GET with valid active session', async () => {
      const validSessionId = 'valid_active_session_id_7777';
      const csrfToken = 'valid_test_csrf_token_7777';
      const futureDate = new Date(Date.now() + 14400 * 1000).toISOString();
      await saveSession({
        id: validSessionId,
        csrfToken,
        createdAt: new Date().toISOString(),
        expiresAt: futureDate,
      });

      const { req, res } = createMockReqRes({
        method: 'GET',
        headers: { cookie: `nc_admin_session=${validSessionId}` },
      });
      await handler(req, res);

      assert.strictEqual(res.getStatusCode(), 200, 'Expected HTTP 200 on GET with valid session');
      const data = res.getResponseData();
      assert.strictEqual(data.success, true);
      assert.strictEqual(data.csrfToken, csrfToken);
      assert.ok(Array.isArray(data.inquiries), 'Expected inquiries array in response');

      await deleteSession(validSessionId);
    });

    // -----------------------------------------------------------------
    // 3. CSRF PROTECTION TESTS
    // -----------------------------------------------------------------
    await test('8. PATCH with no session', async () => {
      const { req, res } = createMockReqRes({
        method: 'PATCH',
        body: { id: 'inq_1', status: 'In Review' },
      });
      await handler(req, res);
      assert.strictEqual(res.getStatusCode(), 401, 'Expected HTTP 401 when PATCH requested without session');
    });

    await test('9. PATCH with valid session but missing CSRF token', async () => {
      const validSessionId = 'csrf_test_session_1';
      await saveSession({
        id: validSessionId,
        csrfToken: 'csrf_token_secret_123',
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
      });

      const { req, res } = createMockReqRes({
        method: 'PATCH',
        headers: { cookie: `nc_admin_session=${validSessionId}` },
        body: { id: 'inq_1', status: 'In Review' },
      });
      await handler(req, res);

      assert.strictEqual(res.getStatusCode(), 403, 'Expected HTTP 403 when CSRF token is missing');
      const data = res.getResponseData();
      assert.strictEqual(data.error, 'Invalid or missing CSRF token.');

      await deleteSession(validSessionId);
    });

    await test('10. PATCH with valid session and incorrect CSRF token', async () => {
      const validSessionId = 'csrf_test_session_2';
      await saveSession({
        id: validSessionId,
        csrfToken: 'correct_csrf_token_123',
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
      });

      const { req, res } = createMockReqRes({
        method: 'PATCH',
        headers: {
          cookie: `nc_admin_session=${validSessionId}`,
          'x-csrf-token': 'WRONG_CSRF_TOKEN',
        },
        body: { id: 'inq_1', status: 'In Review' },
      });
      await handler(req, res);

      assert.strictEqual(res.getStatusCode(), 403, 'Expected HTTP 403 when CSRF token is incorrect');

      await deleteSession(validSessionId);
    });

    await test('11. PATCH with valid session and correct CSRF token', async () => {
      const validSessionId = 'csrf_test_session_3';
      const correctCsrfToken = 'correct_csrf_token_abc123';
      await saveSession({
        id: validSessionId,
        csrfToken: correctCsrfToken,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
      });

      const { req, res } = createMockReqRes({
        method: 'PATCH',
        headers: {
          cookie: `nc_admin_session=${validSessionId}`,
          'x-csrf-token': correctCsrfToken,
        },
        body: { id: 'nonexistent_id_999', status: 'In Review' },
      });
      await handler(req, res);

      // CSRF check passes (returns 404 since record id does not exist in store, or 200 if found)
      assert.ok([200, 404].includes(res.getStatusCode()), `Expected status 200 or 404 after CSRF verification passed, got ${res.getStatusCode()}`);

      await deleteSession(validSessionId);
    });

    await test('12. Verify CSRF token is bound to session (cannot use Session B token for Session A)', async () => {
      const sessionA = 'session_A_id_100';
      const csrfA = 'csrf_A_token_100';
      const sessionB = 'session_B_id_200';
      const csrfB = 'csrf_B_token_200';

      await saveSession({
        id: sessionA,
        csrfToken: csrfA,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
      });

      await saveSession({
        id: sessionB,
        csrfToken: csrfB,
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
      });

      // Attempt PATCH with Session A cookie, but Session B CSRF token
      const { req, res } = createMockReqRes({
        method: 'PATCH',
        headers: {
          cookie: `nc_admin_session=${sessionA}`,
          'x-csrf-token': csrfB,
        },
        body: { id: 'inq_1', status: 'Resolved' },
      });
      await handler(req, res);

      assert.strictEqual(res.getStatusCode(), 403, 'CSRF validation must fail when presenting token from a different session');

      await deleteSession(sessionA);
      await deleteSession(sessionB);
    });

    // -----------------------------------------------------------------
    // 4. LOGOUT TESTS
    // -----------------------------------------------------------------
    await test('13. Logout with valid session', async () => {
      const logoutSessionId = 'logout_test_session_id_555';
      await saveSession({
        id: logoutSessionId,
        csrfToken: 'logout_csrf_token',
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
      });

      const { req, res } = createMockReqRes({
        method: 'POST',
        headers: { cookie: `nc_admin_session=${logoutSessionId}` },
        body: { action: 'logout' },
      });
      await handler(req, res);

      assert.strictEqual(res.getStatusCode(), 200, 'Expected HTTP 200 on logout');
      const setCookieHeader = res.getHeader('set-cookie');
      assert.ok(setCookieHeader, 'Expected Set-Cookie header on logout');

      const parsedCookie = parseSetCookie(setCookieHeader);
      assert.strictEqual(parsedCookie.name, 'nc_admin_session');
      assert.strictEqual(parsedCookie.value, '', 'Cookie value must be cleared on logout');

      const flagsStr = parsedCookie.flags.join('; ');
      assert.ok(/Max-Age=0/i.test(flagsStr), 'Cookie must have Max-Age=0 on logout');

      // Assert server-side session deletion
      const sessionInStore = await getSession(logoutSessionId);
      assert.strictEqual(sessionInStore, null, 'Session must be deleted from server-side store on logout');
    });

    await test('14. Reuse session after logout', async () => {
      const reusedSessionId = 'reused_session_id_888';
      await saveSession({
        id: reusedSessionId,
        csrfToken: 'reused_csrf_token',
        createdAt: new Date().toISOString(),
        expiresAt: new Date(Date.now() + 3600 * 1000).toISOString(),
      });

      // Step A: Perform logout
      const { req: reqLogout, res: resLogout } = createMockReqRes({
        method: 'POST',
        headers: { cookie: `nc_admin_session=${reusedSessionId}` },
        body: { action: 'logout' },
      });
      await handler(reqLogout, resLogout);
      assert.strictEqual(resLogout.getStatusCode(), 200);

      // Step B: Attempt GET using old session ID
      const { req: reqGet, res: resGet } = createMockReqRes({
        method: 'GET',
        headers: { cookie: `nc_admin_session=${reusedSessionId}` },
      });
      await handler(reqGet, resGet);

      assert.strictEqual(resGet.getStatusCode(), 401, 'Logged-out session must be rejected with HTTP 401');
    });

  } finally {
    // Restore original environment variable state
    if (origSecret !== undefined) {
      process.env.ADMIN_SECRET_TOKEN = origSecret;
    } else {
      delete process.env.ADMIN_SECRET_TOKEN;
    }
  }

  console.log('='.repeat(70));
  console.log(`  ADMIN SECURITY SUITE SUMMARY: ${passed} PASSED | ${failed} FAILED | ${skipped} SKIPPED`);
  console.log('='.repeat(70));

  if (failed > 0) {
    process.exit(1);
  }
}

runAdminSecurityTestSuite().catch((err) => {
  console.error('Fatal Test Runner Error:', err);
  process.exit(1);
});
