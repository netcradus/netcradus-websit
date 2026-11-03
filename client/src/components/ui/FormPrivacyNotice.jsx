import React from "react";
import { Link } from "react-router-dom";

/**
 * Reusable point-of-collection privacy notice component for web forms.
 * Provides concise, transparent purpose disclosure and links to the Data Protection Notice.
 * Supports explicit DPDP consent checkbox mode (unchecked by default).
 */
export default function FormPrivacyNotice({
  purpose = "responding to your request and providing the requested service or information",
  compact = false,
  className = "",
  showUnsubscribe = false,
  requireConsent = true,
  consentChecked = false,
  onConsentChange,
  id = "privacy-consent-checkbox",
}) {
  return (
    <div
      className={`text-[var(--color-text-secondary,#a0a0a0)] ${
        compact ? "text-[11px] leading-relaxed" : "text-xs leading-relaxed"
      } ${className}`}
      style={{ opacity: 0.9 }}
    >
      {requireConsent ? (
        <label
          htmlFor={id}
          className="flex items-start gap-2.5 cursor-pointer text-left select-none my-2"
          style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", cursor: "pointer" }}
        >
          <input
            type="checkbox"
            id={id}
            name="privacyConsent"
            checked={consentChecked}
            onChange={(e) => onConsentChange && onConsentChange(e.target.checked)}
            required
            className="mt-0.5 shrink-0 accent-[#e8400a]"
            style={{ marginTop: "0.15rem", width: "16px", height: "16px", accentColor: "#e8400a", flexShrink: 0 }}
          />
          <span>
            I agree to the collection and processing of my personal data for{" "}
            {purpose} as described in the{" "}
            <Link
              to="/data-protection"
              className="text-accent hover:underline font-medium inline-block"
              style={{ color: "#e8400a", textDecoration: "underline" }}
              onClick={(e) => e.stopPropagation()}
            >
              Privacy Policy
            </Link>
            . <span style={{ color: "#e8400a" }}>*</span>
            {showUnsubscribe && (
              <span style={{ display: "block", marginTop: "0.25rem", opacity: 0.85 }}>
                You can unsubscribe from these communications at any time.
              </span>
            )}
          </span>
        </label>
      ) : (
        <p style={{ margin: 0 }}>
          By submitting this form, you provide the personal information needed for
          Netcradus to {purpose}. For information on how personal data is handled
          and how to exercise applicable rights, please see our{" "}
          <Link
            to="/data-protection"
            className="text-accent hover:underline font-medium inline-block"
            style={{ color: "#e8400a", textDecoration: "underline" }}
          >
            Privacy Policy
          </Link>
          .
          {showUnsubscribe && (
            <span style={{ display: "block", marginTop: "0.25rem", opacity: 0.85 }}>
              You can unsubscribe from these communications at any time.
            </span>
          )}
        </p>
      )}
    </div>
  );
}
