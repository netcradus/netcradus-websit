import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft, ArrowRight, Loader } from "lucide-react";
import emailjs from "@emailjs/browser";
import FormPrivacyNotice from "../components/ui/FormPrivacyNotice";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_0b2gu7w";
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_0eug8b5";
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ezgqG6Hon-z8nuFTU";

const STEPS = [
  "Company Information",
  "Primary Contact",
  "Partnership Interest",
  "Business Profile",
  "Sales & Operations",
  "Partnership Goals",
  "Compliance & Declaration",
];

const BUSINESS_TYPES = [
  "IT Services Provider", "Cybersecurity Company", "MSP/MSSP",
  "Cloud Service Provider", "Software Company", "Consulting Firm",
  "System Integrator", "Digital Agency", "Freelancer/Consultant", "Other",
];

const PARTNERSHIP_TYPES = [
  "Referral Partner", "Reseller Partner", "White-Label Partner",
  "Technology Alliance", "Strategic Enterprise Partnership",
];

const SERVICES_INTERESTED = [
  "SOC Services", "SIEM Solutions", "Penetration Testing",
  "Vulnerability Assessment", "Incident Response", "Cloud Security",
  "Managed IT Services", "Compliance Services", "CRM Solutions",
  "ACIS Platform", "Custom Software Development", "Other",
];

const CUSTOMER_BASE = [
  "Small Businesses", "Medium Businesses", "Enterprise Clients",
  "Government Sector", "Educational Institutions", "Healthcare Sector",
  "Financial Sector", "Other",
];

const TECH_CAPABILITIES = [
  "Security Operations", "Network Security", "Cloud Infrastructure",
  "Endpoint Management", "SOC Operations", "Software Development",
  "IT Support Services", "Security Consulting", "Compliance Management", "Other",
];

const PARTNERSHIP_OBJECTIVES = [
  "Expand Service Portfolio", "Increase Revenue", "Access Technical Expertise",
  "White-Label Security Services", "Enterprise Project Support",
  "Technology Collaboration", "Other",
];

const CERTIFICATIONS = [
  "ISO 27001", "SOC 2", "CEH", "CISSP", "CompTIA Security+", "Other",
];

const initialForm = {
  legalName: "", tradingName: "", regNumber: "", yearEstablished: "",
  website: "", linkedin: "", hqLocation: "", operationalRegions: "",
  employees: "", businessType: "",
  contactName: "", designation: "", businessEmail: "", contactNumber: "",
  whatsapp: "", contactLinkedin: "",
  partnershipTypes: [], servicesInterested: [],
  companyOverview: "", customerBase: [], techCapabilities: [],
  sellsCybersecurity: "", existingVendors: "", estimatedClients: "",
  salesTeamSize: "", operatingRegions: "",
  whyNetcradus: "", partnershipObjectives: [],
  legallyRegistered: "", hasNDA: "", certifications: [],
  declarationChecked: false, signatoryName: "", signatoryDesignation: "",
};

/* ─── Field Components ──────────────────────────────────────────── */

function Field({ label, required, children }) {
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <label style={{
        display: "block", fontSize: 13, fontWeight: 600,
        color: "var(--color-text-secondary)", marginBottom: "0.4rem", letterSpacing: "0.01em",
      }}>
        {label}
        {required && <span style={{ color: "#e8400a", marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = "text", disabled }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      style={{
        width: "100%", boxSizing: "border-box",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--color-border)",
        borderRadius: 10, padding: "0.75rem 1rem",
        fontSize: 14, color: "var(--color-text-primary)",
        outline: "none", transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      onFocus={e => { e.target.style.borderColor = "#e8400a"; e.target.style.boxShadow = "0 0 0 3px rgba(232,64,10,0.13)"; }}
      onBlur={e => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
    />
  );
}

function Textarea({ value, onChange, placeholder, rows = 4 }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%", boxSizing: "border-box", resize: "vertical",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid var(--color-border)",
        borderRadius: 10, padding: "0.75rem 1rem",
        fontSize: 14, color: "var(--color-text-primary)",
        outline: "none", fontFamily: "inherit", lineHeight: 1.6,
        transition: "border-color 0.2s, box-shadow 0.2s",
      }}
      onFocus={e => { e.target.style.borderColor = "#e8400a"; e.target.style.boxShadow = "0 0 0 3px rgba(232,64,10,0.13)"; }}
      onBlur={e => { e.target.style.borderColor = "var(--color-border)"; e.target.style.boxShadow = "none"; }}
    />
  );
}

function Select({ value, onChange, options }) {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        width: "100%", boxSizing: "border-box",
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: 10, padding: "0.75rem 1rem",
        fontSize: 14, color: value ? "var(--color-text-primary)" : "rgba(160,160,160,0.6)",
        outline: "none", cursor: "pointer", appearance: "auto",
        transition: "border-color 0.2s",
      }}
      onFocus={e => { e.target.style.borderColor = "#e8400a"; }}
      onBlur={e => { e.target.style.borderColor = "var(--color-border)"; }}
    >
      <option value="">Select...</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

function CheckboxGrid({ options, selected, onChange }) {
  const toggle = (opt) => {
    if (selected.includes(opt)) onChange(selected.filter(s => s !== opt));
    else onChange([...selected, opt]);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
      {options.map(opt => {
        const active = selected.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            style={{
              fontSize: 13, fontWeight: 500, padding: "0.4rem 0.9rem",
              borderRadius: 999, cursor: "pointer",
              border: active ? "1px solid #e8400a" : "1px solid var(--color-border)",
              background: active ? "rgba(232,64,10,0.12)" : "transparent",
              color: active ? "#e8400a" : "var(--color-text-secondary)",
              transition: "all 0.15s",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function RadioGroup({ options, value, onChange }) {
  return (
    <div style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}>
      {options.map(opt => (
        <label key={opt} style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", fontSize: 14, color: "var(--color-text-primary)" }}>
          <input
            type="radio"
            name={`radio-${options.join("-")}`}
            value={opt}
            checked={value === opt}
            onChange={() => onChange(opt)}
            style={{ accentColor: "#e8400a" }}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}

function TwoCol({ children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      className="pa-two-col">
      {children}
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────── */

export default function PartnerApply() {
  usePageMeta(SEO_META.partnerApply?.title, SEO_META.partnerApply?.description);
  const [step, setStep] = useState(0); // 0-indexed
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [submitError, setSubmitError] = useState("");

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }));
  const setDirect = (key, val) => setForm(f => ({ ...f, [key]: val }));

  /* ── Validation ─────────────────────────────────── */
  const validate = () => {
    const e = {};
    if (step === 0) {
      if (!form.legalName.trim()) e.legalName = "Required";
      if (!form.website.trim()) e.website = "Required";
      if (!form.hqLocation.trim()) e.hqLocation = "Required";
    }
    if (step === 1) {
      if (!form.contactName.trim()) e.contactName = "Required";
      if (!form.designation.trim()) e.designation = "Required";
      if (!form.businessEmail.trim() || !/\S+@\S+\.\S+/.test(form.businessEmail)) e.businessEmail = "Valid email required";
      if (!form.contactNumber.trim()) e.contactNumber = "Required";
    }
    if (step === 3) {
      if (!form.companyOverview.trim()) e.companyOverview = "Required";
    }
    if (step === 5) {
      if (!form.whyNetcradus.trim()) e.whyNetcradus = "Required";
    }
    if (step === 6) {
      if (!form.declarationChecked) e.declarationChecked = "Please confirm the declaration";
      if (!form.signatoryName.trim()) e.signatoryName = "Required";
      if (!form.signatoryDesignation.trim()) e.signatoryDesignation = "Required";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleNext = () => {
    if (!validate()) return;
    setStep(s => Math.min(s + 1, STEPS.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setStep(s => Math.max(s - 1, 0));
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ── Build email message ──────────────────────────────── */
  const buildMessage = () => `
PARTNER APPLICATION — NETCRADUS

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 1 — COMPANY INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Legal Company Name: ${form.legalName}
Brand / Trading Name: ${form.tradingName || "N/A"}
Company Registration No.: ${form.regNumber || "N/A"}
Year Established: ${form.yearEstablished || "N/A"}
Company Website: ${form.website}
Company LinkedIn: ${form.linkedin || "N/A"}
Headquarters Location: ${form.hqLocation}
Operational Regions: ${form.operationalRegions || "N/A"}
Total Employees: ${form.employees || "N/A"}
Business Type: ${form.businessType || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 2 — PRIMARY CONTACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Full Name: ${form.contactName}
Designation: ${form.designation}
Business Email: ${form.businessEmail}
Contact Number: ${form.contactNumber}
WhatsApp: ${form.whatsapp || "N/A"}
LinkedIn: ${form.contactLinkedin || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 3 — PARTNERSHIP INTEREST
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Partnership Types: ${form.partnershipTypes.join(", ") || "N/A"}
Services Interested: ${form.servicesInterested.join(", ") || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 4 — BUSINESS PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Company Overview: ${form.companyOverview}
Customer Base: ${form.customerBase.join(", ") || "N/A"}
Technical Capabilities: ${form.techCapabilities.join(", ") || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 5 — SALES & OPERATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Sells Cybersecurity: ${form.sellsCybersecurity || "N/A"}
Existing Vendor Partnerships: ${form.existingVendors || "N/A"}
Estimated Number of Clients: ${form.estimatedClients || "N/A"}
Sales & Delivery Team Size: ${form.salesTeamSize || "N/A"}
Regions of Operation: ${form.operatingRegions || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 6 — PARTNERSHIP GOALS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Why Partner With Netcradus: ${form.whyNetcradus}
Partnership Objectives: ${form.partnershipObjectives.join(", ") || "N/A"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTION 7 — COMPLIANCE & LEGAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Legally Registered: ${form.legallyRegistered || "N/A"}
NDA / Confidentiality Policies: ${form.hasNDA || "N/A"}
Security Certifications: ${form.certifications.join(", ") || "None"}
Declaration Confirmed: ${form.declarationChecked ? "Yes" : "No"}
Authorized Signatory: ${form.signatoryName}
Signatory Designation: ${form.signatoryDesignation}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted via Netcradus Partner Application Form
Time: ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "full", timeStyle: "short" })}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

  /* ── Submit ─────────────────────────────────────── */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    setSubmitError("");
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: "info@netcradus.com",
          recipient_email: "info@netcradus.com",
          to_name: "Netcradus Info",
          name: form.contactName,
          user_name: form.contactName,
          email: form.businessEmail || "info@netcradus.com",
          user_email: form.businessEmail || "info@netcradus.com",
          reply_to: form.businessEmail || "info@netcradus.com",
          company: form.legalName,
          user_company: form.legalName,
          phone: form.contactNumber,
          user_phone: form.contactNumber,
          source: "Partner Application Form",
          subscription_source: "Partner Application",
          preferences: form.partnershipTypes.join(", ") || "N/A",
          message: buildMessage(),
        },
        publicKey
      );
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("PartnerApply EmailJS error:", err);
      setStatus("error");
      setSubmitError("Something went wrong submitting your application. Please try again or email us directly at info@netcradus.com");
    }
  };

  const progress = ((step + 1) / STEPS.length) * 100;

  /* ── Error helper ────────────────────────────────── */
  const renderErrMsg = (field) =>
    errors[field] ? (
      <p style={{ color: "#f87171", fontSize: 12, marginTop: "0.3rem" }}>{errors[field]}</p>
    ) : null;
  const ErrMsg = ({ field }) => renderErrMsg(field);

  /* ── SUCCESS STATE ─────────────────────────────────────────────── */
  if (status === "success") {
    return (
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "4rem 1.5rem" }}>
        <style>{`@keyframes paCheckScale { 0%{transform:scale(0) rotate(-10deg);opacity:0} 60%{transform:scale(1.18) rotate(3deg);opacity:1} 100%{transform:scale(1) rotate(0deg);opacity:1} }`}</style>
        <div style={{ textAlign: "center", maxWidth: 560 }}>
          <CheckCircle size={72} style={{ color: "#22c55e", animation: "paCheckScale 0.55s cubic-bezier(0.34,1.56,0.64,1) both", marginBottom: "1.5rem" }} />
          <h1 style={{ fontSize: 32, fontWeight: 900, letterSpacing: "-0.03em", color: "var(--color-text-primary)", marginBottom: "1rem" }}>
            Application Submitted Successfully!
          </h1>
          <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "2rem" }}>
            Thank you, <strong style={{ color: "var(--color-text-primary)" }}>{form.legalName}</strong>. We have received your partnership application and will review it within{" "}
            <strong style={{ color: "#e8400a" }}>3–5 business days</strong>. Our team will contact you at{" "}
            <strong style={{ color: "var(--color-text-primary)" }}>{form.businessEmail}</strong>.
          </p>
          <Link
            to="/partners"
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#e8400a", color: "#fff", fontWeight: 700, fontSize: 15,
              padding: "0.85rem 2rem", borderRadius: 999, textDecoration: "none",
              transition: "background 0.2s",
            }}
          >
            <ArrowLeft size={16} /> Back to Partners Page
          </Link>
        </div>
      </div>
    );
  }

  /* ── FORM ─────────────────────────────────────────────────── */
  return (
    <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>
      <style>{`
        .pa-two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        @media (max-width: 600px) { .pa-two-col { grid-template-columns: 1fr; } }
        .pa-step-card {
          background: var(--color-surface);
          border: 1px solid var(--color-border);
          border-radius: 20px;
          padding: 2.25rem 2rem;
        }
        @media (max-width: 500px) { .pa-step-card { padding: 1.5rem 1.1rem; } }
        .pa-note-box {
          background: rgba(232,64,10,0.07);
          border: 1px solid rgba(232,64,10,0.2);
          border-radius: 12px;
          padding: 1rem 1.25rem;
          font-size: 13.5px;
          color: var(--color-text-secondary);
          line-height: 1.6;
        }
        .pa-note-box strong { color: #e8400a; }
      `}</style>

      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <span style={{
          display: "inline-block", fontSize: 11, fontWeight: 700,
          letterSpacing: "0.18em", textTransform: "uppercase",
          color: "#e8400a", border: "1px solid rgba(232,64,10,0.3)",
          borderRadius: 999, padding: "0.3rem 0.9rem", marginBottom: "1rem",
        }}>
          Partner Application
        </span>
        <h1 style={{
          fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900,
          letterSpacing: "-0.03em", color: "var(--color-text-primary)",
          marginBottom: "0.75rem",
        }}>
          Partner Application Form
        </h1>
        <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          Thank you for your interest in joining the Netcradus Partner Ecosystem.
        </p>
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: "2.25rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.25rem" }}>
          {STEPS.map((s, i) => (
            <span
              key={s}
              style={{
                fontSize: 11, fontWeight: 600,
                color: i === step ? "#e8400a" : i < step ? "#22c55e" : "var(--color-text-secondary)",
                textAlign: "center", flex: "1 1 0",
                letterSpacing: "0.01em",
                display: "none", // show only current on mobile
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#e8400a", whiteSpace: "nowrap" }}>
            Step {step + 1} of {STEPS.length}
          </span>
          <span style={{ fontSize: 13, color: "var(--color-text-secondary)", whiteSpace: "nowrap" }}>
            — {STEPS[step]}
          </span>
        </div>
        <div style={{ height: 6, background: "var(--color-border)", borderRadius: 999, overflow: "hidden" }}>
          <div style={{
            height: "100%", borderRadius: 999,
            background: "linear-gradient(90deg, #e8400a, #ff5520)",
            width: `${progress}%`,
            transition: "width 0.4s cubic-bezier(0.4,0,0.2,1)",
          }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "0.35rem" }}>
          {STEPS.map((_, i) => (
            <div key={i} style={{
              width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
              background: i < step ? "#22c55e" : i === step ? "#e8400a" : "var(--color-border)",
              transition: "background 0.3s",
            }} />
          ))}
        </div>
      </div>

      {/* Step Cards */}
      <form onSubmit={handleSubmit} noValidate>
        <div className="pa-step-card">

          {/* ── STEP 1 ── */}
          {step === 0 && (
            <>
              <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.75rem", color: "var(--color-text-primary)" }}>Company Information</h2>
              <Field label="Legal Company Name" required><Input value={form.legalName} onChange={set("legalName")} placeholder="Acme Cybersecurity Ltd." /></Field>
              <ErrMsg field="legalName" />
              <TwoCol>
                <Field label="Brand / Trading Name"><Input value={form.tradingName} onChange={set("tradingName")} placeholder="Acme" /></Field>
                <Field label="Company Registration Number"><Input value={form.regNumber} onChange={set("regNumber")} placeholder="REG12345678" /></Field>
              </TwoCol>
              <TwoCol>
                <Field label="Year Established"><Input value={form.yearEstablished} onChange={set("yearEstablished")} placeholder="2018" /></Field>
                <Field label="Total Number of Employees"><Input value={form.employees} onChange={set("employees")} placeholder="e.g. 50" /></Field>
              </TwoCol>
              <Field label="Company Website" required><Input value={form.website} onChange={set("website")} placeholder="https://yourcompany.com" /></Field>
              {renderErrMsg("website")}
              <Field label="Company LinkedIn Profile"><Input value={form.linkedin} onChange={set("linkedin")} placeholder="https://linkedin.com/company/..." /></Field>
              <Field label="Headquarters Location" required><Input value={form.hqLocation} onChange={set("hqLocation")} placeholder="City, Country" /></Field>
              {renderErrMsg("hqLocation")}
              <Field label="Operational Regions / Countries"><Input value={form.operationalRegions} onChange={set("operationalRegions")} placeholder="UK, India, UAE..." /></Field>
              <Field label="Business Type">
                <Select value={form.businessType} onChange={set("businessType")} options={BUSINESS_TYPES} />
              </Field>
            </>
          )}

          {/* ── STEP 2 ── */}
          {step === 1 && (
            <>
              <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.75rem", color: "var(--color-text-primary)" }}>Primary Contact Information</h2>
              <TwoCol>
                <div>
                  <Field label="Full Name" required><Input value={form.contactName} onChange={set("contactName")} placeholder="Jane Smith" /></Field>
                  {renderErrMsg("contactName")}
                </div>
                <div>
                  <Field label="Job Title / Designation" required><Input value={form.designation} onChange={set("designation")} placeholder="CEO / Partnership Director" /></Field>
                  {renderErrMsg("designation")}
                </div>
              </TwoCol>
              <Field label="Business Email Address" required><Input type="email" value={form.businessEmail} onChange={set("businessEmail")} placeholder="jane@yourcompany.com" /></Field>
              {renderErrMsg("businessEmail")}
              <TwoCol>
                <Field label="Contact Number" required><Input value={form.contactNumber} onChange={set("contactNumber")} placeholder="+44 7000 000000" /></Field>
                <Field label="WhatsApp Number"><Input value={form.whatsapp} onChange={set("whatsapp")} placeholder="+44 7000 000000" /></Field>
              </TwoCol>
              {renderErrMsg("contactNumber")}
              <Field label="LinkedIn Profile"><Input value={form.contactLinkedin} onChange={set("contactLinkedin")} placeholder="https://linkedin.com/in/..." /></Field>
            </>
          )}

          {/* ── STEP 3 ── */}
          {step === 2 && (
            <>
              <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.75rem", color: "var(--color-text-primary)" }}>Partnership Interest</h2>
              <Field label="Partnership Type (select all that apply)">
                <CheckboxGrid options={PARTNERSHIP_TYPES} selected={form.partnershipTypes} onChange={v => setDirect("partnershipTypes", v)} />
              </Field>
              <div style={{ height: "1.5rem" }} />
              <Field label="Services Interested In (select all that apply)">
                <CheckboxGrid options={SERVICES_INTERESTED} selected={form.servicesInterested} onChange={v => setDirect("servicesInterested", v)} />
              </Field>
            </>
          )}

          {/* ── STEP 4 ── */}
          {step === 3 && (
            <>
              <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.75rem", color: "var(--color-text-primary)" }}>Business Profile</h2>
              <Field label="Brief Company Overview" required>
                <Textarea value={form.companyOverview} onChange={set("companyOverview")} placeholder="Describe your company, services, and market focus..." rows={5} />
              </Field>
              {renderErrMsg("companyOverview")}
              <Field label="Current Customer Base (select all that apply)">
                <CheckboxGrid options={CUSTOMER_BASE} selected={form.customerBase} onChange={v => setDirect("customerBase", v)} />
              </Field>
              <div style={{ height: "1.5rem" }} />
              <Field label="Existing Technical Capabilities (select all that apply)">
                <CheckboxGrid options={TECH_CAPABILITIES} selected={form.techCapabilities} onChange={v => setDirect("techCapabilities", v)} />
              </Field>
            </>
          )}

          {/* ── STEP 5 ── */}
          {step === 4 && (
            <>
              <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.75rem", color: "var(--color-text-primary)" }}>Sales & Operational Information</h2>
              <Field label="Do You Currently Sell Cybersecurity Solutions?">
                <RadioGroup options={["Yes", "No"]} value={form.sellsCybersecurity} onChange={v => setDirect("sellsCybersecurity", v)} />
              </Field>
              <div style={{ height: "1rem" }} />
              <Field label="Existing Vendor Partnerships">
                <Textarea value={form.existingVendors} onChange={set("existingVendors")} placeholder="List any current technology or vendor partnerships..." rows={3} />
              </Field>
              <TwoCol>
                <Field label="Estimated Number of Clients"><Input value={form.estimatedClients} onChange={set("estimatedClients")} placeholder="e.g. 50+" /></Field>
                <Field label="Team Size for Sales & Delivery"><Input value={form.salesTeamSize} onChange={set("salesTeamSize")} placeholder="e.g. 12" /></Field>
              </TwoCol>
              <Field label="Regions You Operate In">
                <Textarea value={form.operatingRegions} onChange={set("operatingRegions")} placeholder="UK, India, Middle East, Southeast Asia..." rows={2} />
              </Field>
            </>
          )}

          {/* ── STEP 6 ── */}
          {step === 5 && (
            <>
              <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.75rem", color: "var(--color-text-primary)" }}>Partnership Goals</h2>
              <Field label="Why Do You Want To Partner With Netcradus?" required>
                <Textarea value={form.whyNetcradus} onChange={set("whyNetcradus")} placeholder="Describe your motivation and expected benefits from this partnership..." rows={5} />
              </Field>
              {renderErrMsg("whyNetcradus")}
              <Field label="Expected Partnership Objectives (select all that apply)">
                <CheckboxGrid options={PARTNERSHIP_OBJECTIVES} selected={form.partnershipObjectives} onChange={v => setDirect("partnershipObjectives", v)} />
              </Field>
            </>
          )}

          {/* ── STEP 7 ── */}
          {step === 6 && (
            <>
              <h2 style={{ fontSize: 20, fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "1.75rem", color: "var(--color-text-primary)" }}>Compliance & Legal</h2>
              <TwoCol>
                <Field label="Is Your Company Legally Registered?">
                  <RadioGroup options={["Yes", "No"]} value={form.legallyRegistered} onChange={v => setDirect("legallyRegistered", v)} />
                </Field>
                <Field label="Do You Have NDA / Confidentiality Policies?">
                  <RadioGroup options={["Yes", "No"]} value={form.hasNDA} onChange={v => setDirect("hasNDA", v)} />
                </Field>
              </TwoCol>
              <div style={{ height: "1rem" }} />
              <Field label="Existing Security Certifications (select all that apply)">
                <CheckboxGrid options={CERTIFICATIONS} selected={form.certifications} onChange={v => setDirect("certifications", v)} />
              </Field>
              <div style={{ height: "1.5rem" }} />
              <div className="pa-note-box">
                <strong>📎 Document Submission</strong>
                <br />
                Please email the following documents to{" "}
                <strong>info@netcradus.com</strong>:
                <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem", lineHeight: 1.8 }}>
                  <li>Company Registration Certificate</li>
                  <li>Business Profile / Company Deck</li>
                  <li>Tax Registration Details</li>
                  <li>Authorized Contact ID</li>
                  <li>NDA (if applicable)</li>
                  <li>Security Certifications (optional)</li>
                </ul>
              </div>
              <div style={{ height: "1.75rem" }} />
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: "1.25rem", color: "var(--color-text-primary)" }}>Declaration</h3>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", cursor: "pointer", marginBottom: "0.5rem" }}>
                <input
                  type="checkbox"
                  checked={form.declarationChecked}
                  onChange={e => setDirect("declarationChecked", e.target.checked)}
                  style={{ accentColor: "#e8400a", width: 16, height: 16, marginTop: 3, flexShrink: 0 }}
                />
                <span style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                  I confirm that the information provided is accurate and authorized by our organization.
                  <span style={{ color: "#e8400a", marginLeft: 3 }}>*</span>
                </span>
              </label>
              <ErrMsg field="declarationChecked" />
              <div style={{ height: "1rem" }} />
              <TwoCol>
                <div>
                  <Field label="Authorized Signatory Name" required><Input value={form.signatoryName} onChange={set("signatoryName")} placeholder="Full legal name" /></Field>
                  <ErrMsg field="signatoryName" />
                </div>
                <div>
                  <Field label="Designation" required><Input value={form.signatoryDesignation} onChange={set("signatoryDesignation")} placeholder="CEO / Director" /></Field>
                  <ErrMsg field="signatoryDesignation" />
                </div>
              </TwoCol>
              <div style={{ marginTop: "1.25rem", textAlign: "left" }}>
                <FormPrivacyNotice purpose="reviewing and responding to your partner application" />
              </div>
              {submitError && (
                <div style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 10, padding: "0.85rem 1rem", marginTop: "1rem", fontSize: 14, color: "#f87171" }}>
                  {submitError}
                </div>
              )}
            </>
          )}
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.75rem", gap: "1rem" }}>
          {step > 0 ? (
            <button
              type="button"
              onClick={handleBack}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid var(--color-border)",
                borderRadius: 999, padding: "0.75rem 1.5rem",
                fontSize: 14, fontWeight: 600, cursor: "pointer",
                color: "var(--color-text-primary)",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#e8400a"; e.currentTarget.style.color = "#e8400a"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--color-border)"; e.currentTarget.style.color = "var(--color-text-primary)"; }}
            >
              <ArrowLeft size={16} /> Back
            </button>
          ) : (
            <Link
              to="/partners"
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "transparent", border: "1px solid var(--color-border)",
                borderRadius: 999, padding: "0.75rem 1.5rem",
                fontSize: 14, fontWeight: 600, textDecoration: "none",
                color: "var(--color-text-secondary)",
              }}
            >
              <ArrowLeft size={16} /> Back to Partners
            </Link>
          )}

          {step < STEPS.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: "#e8400a", color: "#fff",
                border: "none", borderRadius: 999,
                padding: "0.75rem 1.75rem",
                fontSize: 14, fontWeight: 700, cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "#ff5520"; e.currentTarget.style.transform = "scale(1.02)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#e8400a"; e.currentTarget.style.transform = "scale(1)"; }}
            >
              Next <ArrowRight size={16} />
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === "loading"}
              style={{
                display: "flex", alignItems: "center", gap: "0.5rem",
                background: status === "loading" ? "rgba(232,64,10,0.7)" : "#e8400a",
                color: "#fff", border: "none", borderRadius: 999,
                padding: "0.75rem 2rem",
                fontSize: 14, fontWeight: 700,
                cursor: status === "loading" ? "not-allowed" : "pointer",
                transition: "background 0.2s",
              }}
            >
              {status === "loading" ? (
                <>
                  <Loader size={16} style={{ animation: "spin 0.7s linear infinite" }} />
                  Submitting Application...
                </>
              ) : (
                <>Submit Application <ArrowRight size={16} /></>
              )}
            </button>
          )}
        </div>
      </form>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
