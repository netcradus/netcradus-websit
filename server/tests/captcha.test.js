import assert from 'assert';
import { verifyTurnstileToken } from '../src/services/captchaService.js';
import { validateContactPayload } from '../src/validators/contactValidator.js';

async function runCaptchaUnitTests() {
  console.log('='.repeat(65));
  console.log('  NETCRADUS TURNSTILE CAPTCHA UNIT & VALIDATION SUITE');
  console.log('='.repeat(65));

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

  // Set NODE_ENV to test
  process.env.NODE_ENV = 'test';

  // 1. Missing token rejection
  await test('Missing CAPTCHA token returns required error', async () => {
    const res = await verifyTurnstileToken('', '127.0.0.1');
    assert.strictEqual(res.success, false);
    assert.strictEqual(res.error, 'CAPTCHA token is required.');

    const resNull = await verifyTurnstileToken(null, '127.0.0.1');
    assert.strictEqual(resNull.success, false);
    assert.strictEqual(resNull.error, 'CAPTCHA token is required.');
  });

  // 2. Invalid token rejection
  await test('Invalid CAPTCHA token returns verification failed', async () => {
    const res = await verifyTurnstileToken('TEST_INVALID_TOKEN', '127.0.0.1');
    assert.strictEqual(res.success, false);
    assert.strictEqual(res.error, 'Bot verification failed.');
  });

  // 3. Expired token rejection
  await test('Expired CAPTCHA token returns verification failed', async () => {
    const res = await verifyTurnstileToken('TEST_EXPIRED_TOKEN', '127.0.0.1');
    assert.strictEqual(res.success, false);
    assert.strictEqual(res.error, 'Bot verification failed.');
  });

  // 4. Timeout token rejection
  await test('Timeout/Error CAPTCHA token fails closed', async () => {
    const res = await verifyTurnstileToken('TEST_TIMEOUT_TOKEN', '127.0.0.1');
    assert.strictEqual(res.success, false);
    assert.strictEqual(res.error, 'Bot verification failed.');
  });

  // 5. Valid token acceptance
  await test('Valid CAPTCHA token is accepted in test mode', async () => {
    const res = await verifyTurnstileToken('TEST_VALID_TOKEN', '127.0.0.1');
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.error, undefined);
  });

  // 6. Zod schema validation accepts captcha_token & captchaToken
  await test('Zod contact schema accepts captcha_token field', async () => {
    const payload = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      message: 'Hello world',
      captcha_token: 'SOME_TOKEN_123',
    };
    const validated = validateContactPayload(payload);
    assert.strictEqual(validated.success, true);
    assert.strictEqual(validated.data.captcha_token, 'SOME_TOKEN_123');
  });

  // 7. Secret key leakage prevention
  await test('CAPTCHA_SECRET_KEY is never exposed in verifyTurnstileToken error output', async () => {
    process.env.CAPTCHA_SECRET_KEY = 'super-secret-key-12345';
    const res = await verifyTurnstileToken('TEST_INVALID_TOKEN', '127.0.0.1');
    assert.strictEqual(res.success, false);
    assert.strictEqual(JSON.stringify(res).includes('super-secret-key-12345'), false);
    delete process.env.CAPTCHA_SECRET_KEY;
  });

  console.log('='.repeat(65));
  console.log(`  CAPTCHA SUITE SUMMARY: ${passed} PASSED | ${failed} FAILED`);
  console.log('='.repeat(65));

  if (failed > 0) process.exit(1);
}

runCaptchaUnitTests().catch((err) => {
  console.error('Fatal CAPTCHA Test Error:', err);
  process.exit(1);
});
