import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { X, Shield, CheckCircle, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";
import FormPrivacyNotice from "./ui/FormPrivacyNotice";

const EXCLUDED_PATHS = ["/partners", "/partners/apply"];
const LS_KEY = "netcradus_newsletter_subscribed";

const serviceId =
  import.meta.env.VITE_EMAILJS_NEWSLETTER_SERVICE_ID ||
  import.meta.env.VITE_EMAILJS_SERVICE_ID ||
  "service_0b2gu7w";
const notifyTemplateId =
  import.meta.env.VITE_EMAILJS_NOTIFY_TEMPLATE_ID ||
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
  "template_0eug8b5";
const newsletterTemplateId =
  import.meta.env.VITE_EMAILJS_NEWSLETTER_TEMPLATE_ID ||
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
  "template_0eug8b5";
const publicKey =
  import.meta.env.VITE_EMAILJS_NEWSLETTER_PUBLIC_KEY ||
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
  "ezgqG6Hon-z8nuFTU";

function isValidBusinessEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

function extractName(email) {
  try {
    const local = email.split("@")[0];
    return local
      .replace(/[._-]/g, " ")
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");
  } catch {
    return "Subscriber";
  }
}

export default function NewsletterPopup() {
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const overlayRef = useRef(null);
  const closeTimerRef = useRef(null);

  useEffect(() => {
    // Don't show on excluded paths
    if (EXCLUDED_PATHS.some((p) => location.pathname.startsWith(p))) return;
    // Don't show if already subscribed
    if (localStorage.getItem(LS_KEY) === "true") return;

    // TEMPORARILY DISABLED - Enable newsletter popup before production
    // const timer = setTimeout(() => setVisible(true), 8000);
    // return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!isValidBusinessEmail(email)) {
      setStatus("error");
      setErrorMsg("Please enter a valid business email.");
      return;
    }

    if (!privacyConsent) {
      setStatus("error");
      setErrorMsg("You must agree to the Privacy Policy to subscribe.");
      return;
    }

    setStatus("loading");

    const toName = extractName(email);

    try {
      // Email 1 — Internal notification to media@netcradus.com
      await emailjs.send(
        serviceId,
        notifyTemplateId,
        {
          to_email: "media@netcradus.com",
          subscriber_email: email,
          subscribed_at: new Date().toLocaleString('en-IN', {
            timeZone: 'Asia/Kolkata',
          }),
        },
        publicKey
      );

      // Email 2 — Confirmation to subscriber
      try {
        await emailjs.send(
          serviceId,
          newsletterTemplateId,
          {
            to_email: email,
            to_name: toName,
            name: toName,
            email: email,
            company: "N/A",
            phone: "N/A",
            source: "subscriber_confirmation",
            subscription_source: "Newsletter Popup",
            preferences: "Cybersecurity Insights, Threat Alerts, Product Updates, Technology News",
            message: `Dear ${toName},\n\nThank you for subscribing to Netcradus Updates.\n\nYou will now receive:\n• Latest cybersecurity insights\n• Threat alerts and advisories\n• Product announcements\n• Technology news and updates\n\nWe're glad to have you in our community.\n\nWarm regards,\nTeam Netcradus\nwww.netcradus.com\nToll-Free: 1800 12100 8800`,
          },
          publicKey
        );
      } catch (confirmErr) {
        // Log welcome confirmation error silently to prevent breaking success flow
        console.error("Welcome confirmation failed to send:", confirmErr);
      }

      localStorage.setItem(LS_KEY, "true");
      setStatus("success");

      closeTimerRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    } catch (err) {
      console.error("Newsletter subscription notify failed:", err);
      setStatus("error");
      setErrorMsg(
        err?.text || err?.message || "Something went wrong. Please try again."
      );
    }
  };

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.72)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        animation: "nlFadeIn 0.3s ease",
      }}
    >
      <style>{`
        @keyframes nlFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes nlSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes nlCheckScale {
          0% { transform: scale(0) rotate(-10deg); opacity: 0; }
          60% { transform: scale(1.18) rotate(3deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes nlSpinAnim {
          to { transform: rotate(360deg); }
        }
        .nl-card {
          background: var(--color-surface, #121212);
          border-top: 3px solid #e8400a;
          border-radius: 16px;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 32px 80px rgba(0,0,0,0.7), 0 0 60px rgba(232,64,10,0.08);
          width: 100%;
          max-width: 480px;
          position: relative;
          animation: nlSlideUp 0.35s cubic-bezier(0.16,1,0.3,1);
          padding: 2.5rem 2rem 2rem;
        }
        .nl-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: transparent;
          border: none;
          color: #6b7280;
          cursor: pointer;
          padding: 0.35rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s, background 0.2s;
          line-height: 1;
        }
        .nl-close-btn:hover {
          color: #ffffff;
          background: rgba(255,255,255,0.08);
        }
        .nl-shield-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
        }
        .nl-shield-icon {
          color: #e8400a;
          filter: drop-shadow(0 0 12px rgba(232,64,10,0.45));
        }
        .nl-badge {
          display: block;
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e8400a;
          margin-bottom: 0.65rem;
        }
        .nl-title {
          text-align: center;
          font-size: 22px;
          font-weight: 800;
          color: var(--color-text-primary, #ffffff);
          letter-spacing: -0.02em;
          margin-bottom: 0.65rem;
          line-height: 1.25;
        }
        .nl-subtitle {
          text-align: center;
          font-size: 14px;
          color: var(--color-text-secondary, #a0a0a0);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .nl-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 10px;
          padding: 0.8rem 1rem;
          font-size: 14px;
          color: var(--color-text-primary, #ffffff);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .nl-input::placeholder {
          color: rgba(160,160,160,0.6);
        }
        .nl-input:focus {
          border-color: #e8400a;
          box-shadow: 0 0 0 3px rgba(232,64,10,0.15);
        }
        .nl-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .nl-error {
          font-size: 12.5px;
          color: #f87171;
          margin-top: 0.45rem;
          text-align: left;
        }
        .nl-btn {
          width: 100%;
          background: #e8400a;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.85rem 1rem;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.04em;
          cursor: pointer;
          margin-top: 0.85rem;
          transition: background 0.2s, transform 0.15s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }
        .nl-btn:hover:not(:disabled) {
          background: #ff5520;
          transform: scale(1.015);
        }
        .nl-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }
        .nl-spinner {
          width: 16px;
          height: 16px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: nlSpinAnim 0.65s linear infinite;
          flex-shrink: 0;
        }
        .nl-finePrint {
          text-align: center;
          font-size: 12px;
          color: rgba(160,160,160,0.6);
          margin-top: 0.65rem;
        }
        .nl-success-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.65rem;
          padding: 1rem 0;
        }
        .nl-check-icon {
          color: #22c55e;
          animation: nlCheckScale 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .nl-success-title {
          font-size: 20px;
          font-weight: 800;
          color: var(--color-text-primary, #ffffff);
          letter-spacing: -0.02em;
        }
        .nl-success-body {
          font-size: 14px;
          color: var(--color-text-secondary, #a0a0a0);
          line-height: 1.6;
          max-width: 340px;
        }
        .nl-success-sig {
          font-size: 13px;
          color: #e8400a;
          font-style: italic;
          margin-top: 0.25rem;
        }
      `}</style>

      <div className="nl-card">
        {/* Close button */}
        <button
          className="nl-close-btn"
          onClick={handleClose}
          aria-label="Close newsletter popup"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          /* ── SUCCESS STATE ── */
          <div className="nl-success-wrap">
            <CheckCircle size={56} className="nl-check-icon" />
            <p className="nl-success-title">Thank you for Subscribing!</p>
            <p className="nl-success-body">
              You will now receive the latest cybersecurity insights, product
              announcements, and technology updates from our team.
            </p>
            <p className="nl-success-sig">— Team Netcradus</p>
          </div>
        ) : (
          /* ── DEFAULT / FORM STATE ── */
          <>
            <div className="nl-shield-wrap">
              <Shield size={44} className="nl-shield-icon" />
            </div>

            <span className="nl-badge">Netcradus Updates</span>
            <h2 className="nl-title">Stay Updated With Netcradus</h2>
            <p className="nl-subtitle">
              Get cybersecurity insights, threat alerts, product updates, and
              technology news directly to your inbox.
            </p>

            <form onSubmit={handleSubmit} noValidate>
              <input
                type="email"
                className="nl-input"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") {
                    setStatus("idle");
                    setErrorMsg("");
                  }
                }}
                disabled={status === "loading"}
                autoComplete="email"
                required
              />

              {errorMsg && (
                <p className="nl-error" role="alert">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                className="nl-btn"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="nl-spinner" aria-hidden="true" />
                    Subscribing...
                  </>
                ) : (
                  "Subscribe Now"
                )}
              </button>
            </form>

            <div className="mt-3 text-left">
              <FormPrivacyNotice
                purpose="sending Netcradus updates and newsletter communications"
                compact={true}
                showUnsubscribe={true}
                requireConsent={true}
                consentChecked={privacyConsent}
                onConsentChange={setPrivacyConsent}
                id="newsletter-popup-privacy-consent"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
