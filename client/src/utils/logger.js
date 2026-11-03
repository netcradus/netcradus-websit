import { hasConsent, CONSENT_CATEGORIES } from "./consentManager";

const LOGGER_URL = import.meta.env.VITE_LOGGER_URL;

export async function sendLog(path) {
  if (!LOGGER_URL) return;
  // DPDP Control: Do not transmit telemetry without analytics consent
  if (!hasConsent(CONSENT_CATEGORIES.ANALYTICS)) return;

  try {
    await fetch(`${LOGGER_URL}/log`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        site: window.location.hostname,
        path,
        method: "GET",
        status: 200,
        user_agent: navigator.userAgent,
      }),
    });
  } catch (err) {
    console.error("Logger errors:", err);
  }
}
