import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Shield, Settings2, Check, X, Info } from "lucide-react";
import {
  getStoredConsent,
  saveConsent,
  subscribeConsent,
  CONSENT_CATEGORIES,
} from "../utils/consentManager";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [, setCurrentConsent] = useState(() => getStoredConsent());

  // Category preferences for custom modal
  const [categories, setCategories] = useState({
    [CONSENT_CATEGORIES.NECESSARY]: true,
    [CONSENT_CATEGORIES.ANALYTICS]: false,
    [CONSENT_CATEGORIES.MARKETING]: false,
    [CONSENT_CATEGORIES.FUNCTIONAL]: false,
  });

  const closeBanner = useCallback(() => {
    setMounted(false);
    window.setTimeout(() => {
      setVisible(false);
      setIsCustomizing(false);
    }, 350);
  }, []);

  useEffect(() => {
    const stored = getStoredConsent();
    setCurrentConsent(stored);
    setCategories(stored.categories);

    // If user hasn't made a decision yet, show the banner
    if (!stored.decision) {
      setVisible(true);
      const timer = window.setTimeout(() => setMounted(true), 100);
      return () => window.clearTimeout(timer);
    }
  }, []);

  // Listen for consent updates or manual reopen requests
  useEffect(() => {
    const handleReopen = () => {
      const stored = getStoredConsent();
      setCategories(stored.categories);
      setIsCustomizing(true);
      setVisible(true);
      setMounted(true);
    };

    window.addEventListener("netcradus:open-consent-modal", handleReopen);
    const unsubscribe = subscribeConsent((updated) => {
      setCurrentConsent(updated);
      setCategories(updated.categories);
    });

    return () => {
      window.removeEventListener("netcradus:open-consent-modal", handleReopen);
      unsubscribe();
    };
  }, []);

  // Keyboard accessibility: Escape key handling
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && visible) {
        if (isCustomizing) {
          setIsCustomizing(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible, isCustomizing]);

  const handleAcceptAll = () => {
    const allCats = {
      [CONSENT_CATEGORIES.NECESSARY]: true,
      [CONSENT_CATEGORIES.ANALYTICS]: true,
      [CONSENT_CATEGORIES.MARKETING]: true,
      [CONSENT_CATEGORIES.FUNCTIONAL]: true,
    };
    saveConsent("accepted", allCats);
    closeBanner();
  };

  const handleDeclineAll = () => {
    const minimalCats = {
      [CONSENT_CATEGORIES.NECESSARY]: true,
      [CONSENT_CATEGORIES.ANALYTICS]: false,
      [CONSENT_CATEGORIES.MARKETING]: false,
      [CONSENT_CATEGORIES.FUNCTIONAL]: false,
    };
    saveConsent("declined", minimalCats);
    closeBanner();
  };

  const handleSaveCustom = () => {
    saveConsent("custom", categories);
    closeBanner();
  };

  const toggleCategory = (cat) => {
    if (cat === CONSENT_CATEGORIES.NECESSARY) return; // Always mandatory
    setCategories((prev) => ({
      ...prev,
      [cat]: !prev[cat],
    }));
  };

  return (
    <>
      {/* Main Consent Banner & Custom Preferences Dialog */}
      {visible && (
        <div
          role="dialog"
          aria-modal={isCustomizing ? "true" : "false"}
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-desc"
          className="fixed inset-x-0 bottom-0 z-[70] border-t-2 border-[#f97316] bg-[#07090E] px-4 py-4 sm:px-8 shadow-[0_-8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-transform duration-350 ease-out"
          style={{
            transform: mounted ? "translateY(0)" : "translateY(100%)",
          }}
        >
          <div className="mx-auto max-w-screen-2xl">
            {!isCustomizing ? (
              /* Compact Primary Banner View */
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-3.5 max-w-4xl">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#f97316]/10 text-[#f97316] border border-[#f97316]/20">
                    <Shield size={18} />
                  </span>
                  <div>
                    <h3 id="cookie-consent-title" className="text-sm font-bold text-white mb-1 tracking-wide">
                      Privacy & Cookie Choices
                    </h3>
                    <p id="cookie-consent-desc" className="text-[12px] sm:text-[13px] leading-relaxed text-gray-300">
                      We value your privacy. Netcradus uses necessary cookies to ensure core website security and operation. With your consent, we also use optional analytics and marketing technologies to improve platform experience and understand site traffic. Read our{" "}
                      <Link to="/cookies" className="font-semibold text-[#f97316] underline underline-offset-2 hover:text-[#fb923c] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f97316]">
                        Cookie Policy
                      </Link>{" "}
                      and{" "}
                      <Link to="/policy" className="font-semibold text-[#f97316] underline underline-offset-2 hover:text-[#fb923c] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#f97316]">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 sm:flex-nowrap shrink-0 pt-1 lg:pt-0">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#e8400a] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#e8400a]/20 transition-all hover:brightness-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Accept All
                  </button>
                  <button
                    type="button"
                    onClick={handleDeclineAll}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-200 transition-all hover:border-white/30 hover:bg-white/10 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    Decline Optional
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsCustomizing(true)}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#f97316]/30 bg-[#f97316]/10 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#f97316] transition-all hover:bg-[#f97316]/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
                  >
                    <Settings2 size={14} />
                    <span>Customize</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Detailed Custom Preferences View */
              <div className="space-y-4 py-2">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2.5">
                    <Cookie size={20} className="text-[#f97316]" />
                    <h3 id="cookie-consent-title" className="text-base font-bold text-white tracking-wide">
                      Customize Consent Preferences
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsCustomizing(false)}
                    aria-label="Back to overview"
                    className="rounded-lg p-1.5 text-gray-400 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316]"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                  {/* Necessary */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 flex flex-col justify-between text-left">
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span id="label-necessary" className="text-xs font-bold text-white uppercase tracking-wider">Essential</span>
                        <span className="text-[10px] font-bold text-[#22c55e] bg-[#22c55e]/10 border border-[#22c55e]/20 px-2 py-0.5 rounded">
                          Always Active
                        </span>
                      </div>
                      <p id="desc-necessary" className="text-[11px] text-gray-400 leading-relaxed">
                        Required for core security, session state, and basic platform navigation.
                      </p>
                    </div>
                  </div>

                  {/* Analytics */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={categories[CONSENT_CATEGORIES.ANALYTICS]}
                    aria-labelledby="label-analytics"
                    aria-describedby="desc-analytics"
                    onClick={() => toggleCategory(CONSENT_CATEGORIES.ANALYTICS)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all flex flex-col justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] ${
                      categories[CONSENT_CATEGORIES.ANALYTICS]
                        ? "border-[#f97316]/40 bg-[#f97316]/5"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span id="label-analytics" className="text-xs font-bold text-white uppercase tracking-wider">Analytics</span>
                        <span
                          className={`inline-flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                            categories[CONSENT_CATEGORIES.ANALYTICS]
                              ? "bg-[#f97316] border-[#f97316] text-white"
                              : "border-gray-500 bg-transparent"
                          }`}
                        >
                          {categories[CONSENT_CATEGORIES.ANALYTICS] && <Check size={11} strokeWidth={3} />}
                        </span>
                      </div>
                      <p id="desc-analytics" className="text-[11px] text-gray-400 leading-relaxed">
                        Helps us understand aggregated page views and service performance.
                      </p>
                    </div>
                  </button>

                  {/* Marketing */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={categories[CONSENT_CATEGORIES.MARKETING]}
                    aria-labelledby="label-marketing"
                    aria-describedby="desc-marketing"
                    onClick={() => toggleCategory(CONSENT_CATEGORIES.MARKETING)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all flex flex-col justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] ${
                      categories[CONSENT_CATEGORIES.MARKETING]
                        ? "border-[#f97316]/40 bg-[#f97316]/5"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span id="label-marketing" className="text-xs font-bold text-white uppercase tracking-wider">Marketing & Ads</span>
                        <span
                          className={`inline-flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                            categories[CONSENT_CATEGORIES.MARKETING]
                              ? "bg-[#f97316] border-[#f97316] text-white"
                              : "border-gray-500 bg-transparent"
                          }`}
                        >
                          {categories[CONSENT_CATEGORIES.MARKETING] && <Check size={11} strokeWidth={3} />}
                        </span>
                      </div>
                      <p id="desc-marketing" className="text-[11px] text-gray-400 leading-relaxed">
                        Enables ad attribution and campaign conversion analysis (Meta Pixel, Google Ads).
                      </p>
                    </div>
                  </button>

                  {/* Functional */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={categories[CONSENT_CATEGORIES.FUNCTIONAL]}
                    aria-labelledby="label-functional"
                    aria-describedby="desc-functional"
                    onClick={() => toggleCategory(CONSENT_CATEGORIES.FUNCTIONAL)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all flex flex-col justify-between text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] ${
                      categories[CONSENT_CATEGORIES.FUNCTIONAL]
                        ? "border-[#f97316]/40 bg-[#f97316]/5"
                        : "border-white/10 bg-white/[0.02]"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span id="label-functional" className="text-xs font-bold text-white uppercase tracking-wider">Functional & Maps</span>
                        <span
                          className={`inline-flex h-4 w-4 items-center justify-center rounded border transition-colors ${
                            categories[CONSENT_CATEGORIES.FUNCTIONAL]
                              ? "bg-[#f97316] border-[#f97316] text-white"
                              : "border-gray-500 bg-transparent"
                          }`}
                        >
                          {categories[CONSENT_CATEGORIES.FUNCTIONAL] && <Check size={11} strokeWidth={3} />}
                        </span>
                      </div>
                      <p id="desc-functional" className="text-[11px] text-gray-400 leading-relaxed">
                        Allows interactive external embeds such as Google Maps office locations.
                      </p>
                    </div>
                  </button>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <span className="text-[11px] text-gray-400 flex items-center gap-1.5">
                    <Info size={13} className="text-[#f97316]" />
                    <span>Preferences are saved and can be changed anytime.</span>
                  </span>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      onClick={handleDeclineAll}
                      className="rounded-xl border border-white/15 px-4 py-2 text-xs font-semibold text-gray-300 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      Reject All Optional
                    </button>
                    <button
                      type="button"
                      onClick={handleSaveCustom}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-[#f97316] px-5 py-2 text-xs font-bold text-white hover:bg-[#fb923c] shadow-md shadow-[#f97316]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      <Check size={14} />
                      <span>Save Preferences</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
