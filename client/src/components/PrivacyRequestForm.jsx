import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Shield, Send, CheckCircle2, AlertCircle, Loader2, HelpCircle } from "lucide-react";
import FormPrivacyNotice from "./ui/FormPrivacyNotice";

const REQUEST_TYPES = [
  { id: "access", label: "Access my personal data (Summary & Disclosures)" },
  { id: "correction", label: "Correct or update my personal data" },
  { id: "erasure", label: "Delete / Erase my personal data" },
  { id: "marketing_withdrawal", label: "Withdraw marketing / newsletter subscription" },
  { id: "grievance", label: "Privacy grievance / complaint" },
  { id: "nomination", label: "Nominate a representative (DPDP Section 14)" },
  { id: "other", label: "Other data protection inquiry" },
];

export default function PrivacyRequestForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "access",
    details: "",
  });

  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [referenceId, setReferenceId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateRequestId = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let id = "";
    for (let i = 0; i < 6; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `PR-${id}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim() || !privacyConsent) {
      setErrorMessage("Please complete all required fields and agree to the Privacy Policy.");
      return;
    }

    const ref = generateRequestId();
    setReferenceId(ref);
    setStatus("loading");
    setErrorMessage("");

    const selectedTypeObj = REQUEST_TYPES.find((t) => t.id === formData.requestType);
    const requestTypeLabel = selectedTypeObj ? selectedTypeObj.label : formData.requestType;

    const emailParams = {
      to_email: "privacy@netcradus.com",
      recipient_email: "privacy@netcradus.com",
      to_name: "Netcradus Privacy Desk",
      name: formData.name.trim(),
      user_name: formData.name.trim(),
      email: formData.email.trim(),
      user_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      phone: "N/A (Privacy Request)",
      company: `Privacy Request Type: ${requestTypeLabel} [Ref: ${ref}]`,
      message: `[DATA SUBJECT PRIVACY REQUEST - ${ref}]\n\nRequest Type: ${requestTypeLabel}\nRequester Name: ${formData.name.trim()}\nRequester Email: ${formData.email.trim()}\nSubmission Time: ${new Date().toISOString()}\n\nRequest Details:\n${formData.details.trim()}\n\nIdentity Verification Notice: Requester must be verified via confirmation response before processing.`,
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_0b2gu7w";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_0eug8b5";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ezgqG6Hon-z8nuFTU";

    try {
      await emailjs.send(serviceId, templateId, emailParams, publicKey);
      setStatus("success");
      setFormData({ name: "", email: "", requestType: "access", details: "" });
      setPrivacyConsent(false);
    } catch (err) {
      console.error("[Privacy Request Submission Error]", err);
      // Construct fallback mailto
      try {
        const mailtoSubject = encodeURIComponent(`[${ref}] Data Subject Privacy Request - ${requestTypeLabel}`);
        const mailtoBody = encodeURIComponent(
          `Request Reference: ${ref}\nRequest Type: ${requestTypeLabel}\nRequester Name: ${formData.name}\nRequester Email: ${formData.email}\n\nDetails:\n${formData.details}`
        );
        window.location.href = `mailto:privacy@netcradus.com?subject=${mailtoSubject}&body=${mailtoBody}`;
        setStatus("success");
        setPrivacyConsent(false);
      } catch (mailtoErr) {
        console.error("[Mailto Fallback Error]", mailtoErr);
        setStatus("error");
        setErrorMessage("Unable to transmit request automatically. Please email privacy@netcradus.com directly.");
      }
    }
  };

  return (
    <div className="premium-card rounded-[28px] border border-border bg-[var(--color-surface)]/80 p-8 md:p-10 shadow-[0_20px_60px_rgba(232,64,10,0.06)]" id="privacy-request">
      <div className="flex items-center gap-3 text-accent text-xs font-mono uppercase tracking-wider mb-3">
        <Shield size={16} />
        <span>Data Subject Rights (DSR) Intake</span>
      </div>

      <h2 className="text-2xl font-black tracking-tight text-text-primary md:text-3xl mb-3">
        Submit a Privacy or Data Subject Request
      </h2>

      <p className="text-sm leading-relaxed text-text-secondary mb-6">
        Under the Digital Personal Data Protection Act, 2023, you have the right to request access, correction, erasure, or grievance redressal regarding your personal data. Complete the form below to lodge a formal request with the Netcradus Privacy Desk.
      </p>

      {status === "success" ? (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3">
          <CheckCircle2 size={36} className="mx-auto text-emerald-400" />
          <h3 className="text-lg font-bold text-white">Privacy Request Received</h3>
          <p className="text-xs font-mono text-emerald-300">
            Request Reference ID: <span className="font-bold underline">{referenceId}</span>
          </p>
          <p className="text-xs text-text-secondary leading-relaxed max-w-lg mx-auto">
            Your request has been routed to our Privacy Desk at <span className="font-mono text-white">privacy@netcradus.com</span>. To prevent unauthorized disclosures or modifications, our team will verify your identity via email before executing your request.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-semibold text-white transition-all"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-3">
              <AlertCircle size={18} className="shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="e.g. Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border text-text-primary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-text-secondary/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
                Registered Email Address <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="e.g. jane.doe@example.com"
                className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border text-text-primary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-text-secondary/50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
              Request Category <span className="text-accent">*</span>
            </label>
            <select
              name="requestType"
              value={formData.requestType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-[#0d0d14] border border-border text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
            >
              {REQUEST_TYPES.map((type) => (
                <option key={type.id} value={type.id} className="bg-[#0d0d14] text-white">
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-text-secondary mb-2">
              Request Details & Specifics <span className="text-accent">*</span>
            </label>
            <textarea
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              required
              placeholder="Please describe the specific records, corrections, erasure, or grievance you wish to communicate..."
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-border text-text-primary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-text-secondary/50 resize-y"
            />
          </div>

          {/* Verification Disclaimer Notice */}
          <div className="p-4 rounded-xl bg-black/30 border border-border/80 flex items-start gap-3">
            <HelpCircle size={18} className="text-accent shrink-0 mt-0.5" />
            <p className="text-xs text-text-secondary leading-relaxed">
              <span className="font-semibold text-text-primary">Identity Verification Notice:</span> To protect personal data and prevent unauthorized alteration or deletion, Netcradus validates the requester&apos;s identity before executing access or erasure requests. Submitting this form logs a request with our Privacy Desk.
            </p>
          </div>

          <FormPrivacyNotice
            purpose="processing your privacy request, verifying your identity, and maintaining statutory DSR compliance records"
            compact={true}
            requireConsent={true}
            consentChecked={privacyConsent}
            onConsentChange={setPrivacyConsent}
            id="dsr-privacy-consent"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#FF6B00] to-[#e8400a] text-white font-bold rounded-xl shadow-lg hover:brightness-110 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {status === "loading" ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                <span>Transmitting Request...</span>
              </>
            ) : (
              <>
                <span>Submit Privacy Request</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
