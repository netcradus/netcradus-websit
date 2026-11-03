/**
 * Netcradus DPDP-Ready Consent Manager
 * Controls conditional initialization, persistence, and withdrawal of analytics, marketing, functional, and telemetry services.
 * 
 * PAGEVIEW OWNERSHIP MODEL:
 * 1. Initial PageView: Owned and fired once by `loadMetaPixel()` upon initial script injection when marketing consent is active.
 * 2. SPA Route Transitions: Owned and fired by `App.jsx` on subsequent route changes, strictly gated by `hasConsent(MARKETING)`.
 * 
 * WITHDRAWAL MODEL:
 * When consent is withdrawn:
 * - Dynamically injected third-party tracking scripts are removed from the DOM.
 * - Runtime trackers are disabled (ga-disable flags, fbq no-op stub).
 * - Future telemetry and marketing events are blocked.
 * - (Note: Client-side withdrawal stops all subsequent data transmission from the browser, but cannot retroactively delete data already received by third-party servers prior to withdrawal).
 */

const STORAGE_KEY = "netcradus_consent_preferences_v1";
const LEGACY_STORAGE_KEY = "netcradus_cookie_consent";
const CONSENT_VERSION = "1.0";

export const CONSENT_CATEGORIES = {
  NECESSARY: "necessary",
  ANALYTICS: "analytics",
  MARKETING: "marketing",
  FUNCTIONAL: "functional",
};

const DEFAULT_CATEGORIES = {
  [CONSENT_CATEGORIES.NECESSARY]: true,
  [CONSENT_CATEGORIES.ANALYTICS]: false,
  [CONSENT_CATEGORIES.MARKETING]: false,
  [CONSENT_CATEGORIES.FUNCTIONAL]: false,
};

// Internal tracking state to prevent duplicate script injection
const scriptLoadStatus = {
  gtm: false,
  metaPixel: false,
  googleAds: false,
};

// Event listeners for consent changes within React tree
const listeners = new Set();

/**
 * Safely parse stored consent preferences with deterministic legacy migration
 */
export function getStoredConsent() {
  if (typeof window === "undefined") {
    return {
      version: CONSENT_VERSION,
      decision: null,
      categories: { ...DEFAULT_CATEGORIES },
      timestamp: null,
    };
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === "object") {
        return {
          version: parsed.version || CONSENT_VERSION,
          decision: parsed.decision || null, // 'accepted' | 'declined' | 'custom' | null
          categories: {
            ...DEFAULT_CATEGORIES,
            ...(parsed.categories || {}),
            [CONSENT_CATEGORIES.NECESSARY]: true, // Always enforced
          },
          timestamp: parsed.timestamp || null,
        };
      }
    }

    // Check for legacy migration
    const legacyVal = window.localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyVal === "declined") {
      // Legacy declined safely maps to all optional categories being false
      const migrated = {
        version: CONSENT_VERSION,
        decision: "declined",
        categories: { ...DEFAULT_CATEGORIES },
        timestamp: new Date().toISOString(),
      };
      saveConsent(migrated.decision, migrated.categories);
      return migrated;
    }
    // Under DPDP principles (Section 6), an old pre-DPDP generic "accepted" banner
    // cannot be safely converted to blanket consent for marketing tracking and telemetry.
    // Therefore, we do NOT auto-grant optional tracking for legacy "accepted";
    // we require a fresh, granular decision from the user.
  } catch (err) {
    console.warn("[Consent Manager] Failed to read stored consent:", err);
  }

  return {
    version: CONSENT_VERSION,
    decision: null,
    categories: { ...DEFAULT_CATEGORIES },
    timestamp: null,
  };
}

/**
 * Check if a specific consent category is granted
 */
export function hasConsent(category) {
  if (category === CONSENT_CATEGORIES.NECESSARY) return true;
  const current = getStoredConsent();
  return Boolean(current.categories && current.categories[category]);
}

/**
 * Save user consent choices, synchronize services, and notify subscribers
 */
export function saveConsent(decision, categories = {}) {
  if (typeof window === "undefined") return;

  const resolvedCategories = {
    [CONSENT_CATEGORIES.NECESSARY]: true,
    [CONSENT_CATEGORIES.ANALYTICS]: Boolean(categories[CONSENT_CATEGORIES.ANALYTICS]),
    [CONSENT_CATEGORIES.MARKETING]: Boolean(categories[CONSENT_CATEGORIES.MARKETING]),
    [CONSENT_CATEGORIES.FUNCTIONAL]: Boolean(categories[CONSENT_CATEGORIES.FUNCTIONAL]),
  };

  const payload = {
    version: CONSENT_VERSION,
    decision: decision || "custom", // 'accepted' | 'declined' | 'custom'
    categories: resolvedCategories,
    timestamp: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    window.localStorage.setItem(LEGACY_STORAGE_KEY, decision === "declined" ? "declined" : "accepted");
  } catch (err) {
    console.error("[Consent Manager] Failed to save consent:", err);
  }

  // Apply tracking service synchronization (load or unload/disable)
  syncTrackingServices(resolvedCategories);

  // Notify active in-memory React subscribers
  listeners.forEach((listener) => {
    try {
      listener(payload);
    } catch (e) {
      console.error("[Consent Manager] Subscriber error:", e);
    }
  });

  // Dispatch custom window event
  window.dispatchEvent(
    new CustomEvent("netcradus:consent-updated", {
      detail: payload,
    })
  );
}

/**
 * Subscribe to consent updates
 */
export function subscribeConsent(callback) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

/**
 * Trigger UI to open / re-open consent preferences
 */
export function openConsentPreferences() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("netcradus:open-consent-modal"));
  }
}

/**
 * Dynamically inject Google Tag Manager (only if analytics consent is granted)
 */
function loadGoogleTagManager() {
  if (typeof window === "undefined") return;
  if (scriptLoadStatus.gtm || document.getElementById("netcradus-gtm-script")) {
    return;
  }

  const gtmId = "GTM-TNL6NL5J";

  // Re-enable GA flags if previously disabled
  window[`ga-disable-${gtmId}`] = false;
  window["ga-disable-G-BVSX3MN771"] = false;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
  script.id = "netcradus-gtm-script";
  document.head.appendChild(script);

  scriptLoadStatus.gtm = true;
}

/**
 * Dynamically inject Meta / Facebook Pixel (only if marketing consent is granted)
 * Fires initial PageView exactly once upon initial injection.
 */
function loadMetaPixel() {
  if (typeof window === "undefined") return;
  if (scriptLoadStatus.metaPixel || document.getElementById("netcradus-fb-pixel-script")) {
    return;
  }

  const pixelId = "26534633586193572";

  !(function (f, b, e, v, n, t, s) {
    if (f.fbq && f.fbq.loaded) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    t.id = "netcradus-fb-pixel-script";
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");

  if (window.fbq) {
    window.fbq("init", pixelId);
    // Initial PageView fired once upon initialization
    window.fbq("track", "PageView");
  }

  scriptLoadStatus.metaPixel = true;
}

/**
 * Dynamically inject Google Ads Tag (only if marketing consent is granted)
 */
function loadGoogleAds() {
  if (typeof window === "undefined") return;
  if (scriptLoadStatus.googleAds || document.getElementById("netcradus-gads-script")) {
    return;
  }

  const adsId = "AW-17901971362";

  // Re-enable tracking flag
  window[`ga-disable-${adsId}`] = false;

  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
  }

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${adsId}`;
  script.id = "netcradus-gads-script";
  document.head.appendChild(script);

  window.gtag("config", adsId);
  scriptLoadStatus.googleAds = true;
}

/**
 * Safely attempt to clear accessible cookies set on the current document/domain.
 * Note: Third-party domain cookies set directly on external provider domains (e.g. .google.com)
 * cannot be accessed or deleted by client-side JavaScript due to browser Same-Origin Policy.
 */
function clearAccessibleCookies(cookieNames) {
  if (typeof document === "undefined" || !document.cookie) return;

  const hostname = window.location.hostname;
  const domainParts = hostname.split(".");
  const domains = ["", hostname, `.${hostname}`];

  if (domainParts.length >= 2) {
    const parentDomain = domainParts.slice(-2).join(".");
    domains.push(parentDomain, `.${parentDomain}`);
  }

  const paths = ["/"];

  cookieNames.forEach((namePattern) => {
    const allCookies = document.cookie.split("; ");
    const matchingCookies = allCookies
      .map((c) => c.split("=")[0].trim())
      .filter((cName) => {
        if (namePattern.endsWith("*")) {
          return cName.startsWith(namePattern.slice(0, -1));
        }
        return cName === namePattern;
      });

    matchingCookies.forEach((cookieToClear) => {
      // Do NOT interfere with essential admin session or consent storage keys
      if (
        cookieToClear === "nc_admin_session" ||
        cookieToClear === STORAGE_KEY ||
        cookieToClear === LEGACY_STORAGE_KEY
      ) {
        return;
      }

      domains.forEach((dom) => {
        paths.forEach((path) => {
          let cookieStr = `${cookieToClear}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=${path};`;
          if (dom) cookieStr += ` domain=${dom};`;
          document.cookie = cookieStr;
        });
      });
    });
  });
}

/**
 * Synchronize external tracking services based on current consent state.
 * Handles both conditional initialization and client-side withdrawal/cleanup.
 */
export function syncTrackingServices(categories) {
  if (typeof window === "undefined") return;

  const cats = categories || getStoredConsent().categories;

  // 1. Analytics & Telemetry (GTM, GA)
  if (cats[CONSENT_CATEGORIES.ANALYTICS]) {
    loadGoogleTagManager();
  } else {
    // Withdrawal / Inactive: Remove script and disable runtime tracking
    const gtmScript = document.getElementById("netcradus-gtm-script");
    if (gtmScript) {
      gtmScript.remove();
    }
    scriptLoadStatus.gtm = false;
    window["ga-disable-GTM-TNL6NL5J"] = true;
    window["ga-disable-G-BVSX3MN771"] = true;

    // Purge accessible first-party analytics cookies from current domain
    clearAccessibleCookies(["_ga", "_ga_*", "_gid"]);
  }

  // 2. Marketing & Advertising (Meta Pixel, Google Ads)
  if (cats[CONSENT_CATEGORIES.MARKETING]) {
    loadMetaPixel();
    loadGoogleAds();
  } else {
    // Withdrawal / Inactive: Remove scripts and disable runtime tracking
    const fbScript = document.getElementById("netcradus-fb-pixel-script");
    if (fbScript) {
      fbScript.remove();
    }
    scriptLoadStatus.metaPixel = false;

    const gadsScript = document.getElementById("netcradus-gads-script");
    if (gadsScript) {
      gadsScript.remove();
    }
    scriptLoadStatus.googleAds = false;

    window["ga-disable-AW-17901971362"] = true;

    // Stub window.fbq to a no-op function and clear queue to prevent further data buffering
    if (window.fbq) {
      window.fbq = function () {
        /* Marketing consent withdrawn: tracking blocked */
      };
      window.fbq.loaded = false;
      window.fbq.queue = [];
    }

    // Purge accessible first-party marketing cookies from current domain
    clearAccessibleCookies(["_fbp", "_fbc", "_gcl_au"]);
  }
}

