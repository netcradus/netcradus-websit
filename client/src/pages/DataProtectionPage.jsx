import React, { useEffect } from "react";
import LegalPageTemplate from "../components/LegalPageTemplate";
import PrivacyRequestForm from "../components/PrivacyRequestForm";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const sections = [
  {
    heading: "1. Scope and Application",
    paragraphs: [
      "This Data Protection and Privacy Notice applies to all visitors, prospective clients, partners, candidates, and individuals who interact with the Netcradus public website (www.netcradus.com) and associated digital forms.",
      "Netcradus processes personal data in alignment with currently enforceable provisions of India's Digital Personal Data Protection Act, 2023 (DPDP Act). Specific procedural requirements and compliance mechanisms established under the notified Digital Personal Data Protection Rules, 2025 are subject to phased commencement dates; Netcradus maintains ongoing governance readiness to ensure compliance as respective provisions take legal effect.",
    ],
  },
  {
    heading: "2. Categories of Personal Data Collected",
    paragraphs: [
      "Netcradus collects personal data directly through website interactions, form submissions, and opted-in technical telemetry. Based on actual website capabilities, the categories of personal data collected include:",
      "• Identity and Contact Details: Full name, business/work email address, telephone number, and country of residence.",
      "• Professional and Organizational Information: Company name, job title/designation, organization size, company website URL, and professional profile links (e.g., LinkedIn) where submitted.",
      "• Communication and Inquiry Data: Service interests, message text, consultation details, partnership proposals, and uploaded files (such as RFP documents, architecture summaries, or CVs up to 5MB where supported).",
      "• Subscription and Waitlist Details: Newsletter topic preferences and early-access questionnaire responses (such as security challenges for the ACIS waitlist).",
      "• Technical and Telemetry Data: Where optional tracking is enabled, technical and operational telemetry used for website analytics, diagnostics, and security monitoring (via Netcradus Logger or Google Tag Manager), ad attribution identifiers (via Meta Pixel or Google Ads Tag), and network transmission when loading interactive maps (via Google Maps), subject to the consent controls described in this notice.",
    ],
  },
  {
    heading: "3. Purposes of Processing and Lawful Grounds",
    paragraphs: [
      "Personal data collected through this website is processed strictly for legitimate, specified business purposes tied to actual platform functions:",
      "• Responding to inquiries, assessment requests, and consultation bookings submitted through web forms.",
      "• Delivering requested cybersecurity service overviews, threat briefings, and platform collateral.",
      "• Evaluating and processing partnership applications, vendor inquiries, and collaborative engagements.",
      "• Distributing periodic newsletter updates and technical intelligence where explicitly subscribed.",
      "• Managing early-access onboarding and verification for ACIS (Adaptive Cybersecurity Intelligence System).",
      "• Maintaining platform integrity, diagnosing system anomalies, preventing malicious traffic, and ensuring digital security.",
      "Where processing relies on consent (such as optional marketing, non-essential telemetry, and newsletter subscriptions), you may withdraw consent at any time. Withdrawal does not affect the lawfulness of processing undertaken prior to such withdrawal. Certain limited processing may also occur for legitimate operational purposes or compliance with applicable legal obligations.",
    ],
  },
  {
    heading: "4. Rights of Data Principals & Privacy Request Workflow",
    paragraphs: [
      "Under the Digital Personal Data Protection Act, 2023, individuals whose personal data is processed ('Data Principals') are entitled to specific statutory rights:",
      "• Right to Access Information: Request a summary of personal data being processed by Netcradus and the identities of data fiduciaries or processors with whom such data has been shared.",
      "• Right to Correction and Updating: Request the correction of inaccurate or misleading personal data, the completion of incomplete records, and the updating of your information.",
      "• Right to Erasure: Request the erasure of personal data that is no longer necessary for the purpose for which it was collected, or where consent has been withdrawn, unless retention is required under applicable law.",
      "• Right of Grievance Redressal: Access readily available grievance redressal mechanisms regarding any act or omission by Netcradus concerning your personal data.",
      "• Right to Nominate: Nominate another individual who shall, in the event of death or incapacity, exercise your data protection rights.",
      "How to Exercise Your Rights: Data Principals may submit a formal request by emailing privacy@netcradus.com. Please include:",
      "1. Nature of Request (Access, Correction, Erasure, Nomination, or Grievance).",
      "2. Identifying Details (Full Name and the specific Email Address previously submitted to Netcradus).",
      "3. Clear description of the correction, information, or erasure requested.",
      "To protect your privacy and prevent unauthorized disclosure or alteration, Netcradus verifies the identity of the requester before executing data access or erasure requests.",
    ],
  },
  {
    heading: "5. Privacy and Grievance Redressal Mechanism",
    paragraphs: [
      "In compliance with Section 13 of the DPDP Act and applicable governance guidelines, Netcradus maintains a dedicated channel for data protection inquiries and grievances:",
      "• Primary Privacy & Grievance Inbox: privacy@netcradus.com (Secondary: info@netcradus.com)",
      "• Role: Grievance Redressal Officer (GRO)",
      "• Officer Name: [TO BE CONFIRMED UPON FORMAL DESIGNATION]",
      "• Direct Contact Telephone: [TO BE CONFIRMED]",
      "• Postal Address: [TO BE CONFIRMED]",
      "Requests and grievances will be reviewed and addressed in accordance with applicable law and internal governance procedures. In accordance with the DPDP Act framework, Data Principals must first exhaust the data fiduciary's published grievance redressal mechanism before escalating any unresolved complaint to the Data Protection Board of India (DPBI).",
    ],
  },
  {
    heading: "6. Data Retention Policy",
    paragraphs: [
      "Netcradus retains personal data only for as long as reasonably necessary to satisfy the specific purposes for which it was collected, or as mandated by applicable legal, statutory, tax, or regulatory requirements.",
      "• General Contact and Consultation Inquiries: Retained for an active operational lifecycle of up to 365 days, after which personal identifying information is transactionally anonymized or purged unless active commercial engagement continues.",
      "• Newsletter Subscriptions: Retained until the subscriber exercises their right to unsubscribe or withdraw consent.",
      "• Partnership Applications & ACIS Early Access: Retained for the duration of the partner screening, qualification, or waitlist onboarding cycle.",
      "• Operational Telemetry & Diagnostics: Retained for short diagnostic windows strictly where analytics consent has been granted.",
      "Upon expiration of the applicable retention schedule or upon verification of a valid erasure request, personal data is irreversibly anonymized or securely deleted.",
    ],
  },
  {
    heading: "7. Data Sharing and Service Providers",
    paragraphs: [
      "Netcradus does not sell personal data to third parties. We engage select technical infrastructure and service providers to support our website operations, subject to confidentiality and security commitments:",
      "• Messaging and Notification Services: EmailJS (Browser-initiated form transmission to authorized Netcradus mailboxes).",
      "• Database & Spreadsheet Integration: Google Cloud (Google Sheets API v4 for asynchronous consultation request logging).",
      "• Telemetry and Operational Monitoring: Render (Telemetry logger hosting, active only upon explicit analytics consent).",
      "• Analytics Infrastructure: Google Tag Manager / Google Analytics 4 (Activated only upon analytics consent).",
      "• Marketing & Attribution Services: Meta Pixel / Google Ads Tag (Activated only upon marketing consent).",
      "• Interactive Mapping Services: Google Maps Embed (Activated only upon functional consent).",
      "• Direct Messaging: WhatsApp / Meta (Direct link navigation initiated solely upon explicit user interaction).",
      "• Anti-Bot and Security Verification: Cloudflare Turnstile (Automated challenge and anti-spam verification for public contact form submissions).",
      "Specific vendor contractual arrangements and processing location details are subject to ongoing vendor governance and data processing addenda verification.",
    ],
  },
  {
    heading: "8. Technical and Organizational Security Measures",
    paragraphs: [
      "Netcradus implements layered technical and organizational safeguards to protect personal data against unauthorized access, alteration, disclosure, accidental loss, or destruction.",
      "These measures include TLS/HTTPS encryption for all data in transit, parameterized database transactions, strict CORS origin controls, rate limiting on API endpoints, access controls, segregated environments, and continuous monitoring. While robust controls are maintained, no internet-transmitted communication can be guaranteed completely secure, and users are encouraged to exercise caution when submitting sensitive information.",
    ],
  },
  {
    heading: "9. International Data Transfers",
    paragraphs: [
      "Where personal data is processed using cloud service infrastructure located outside India, Netcradus ensures that such transfers comply with Section 16 of the DPDP Act and any governmental notifications restricting transfers to specific jurisdictions.",
      "Transfers between Netcradus operating entities (such as India and United Kingdom operations) and cloud providers are conducted under appropriate confidentiality, security, and contractual safeguards.",
    ],
  },
  {
    heading: "10. Protection of Children's Personal Data",
    paragraphs: [
      "In accordance with Section 9 of the DPDP Act 2023, the Netcradus website and its cybersecurity services are intended for corporate organizations, enterprise professionals, and adult individuals.",
      "Netcradus does not knowingly collect, solicit, or process personal data from children under the age of 18 without verifiable parental or lawful guardian consent. If you believe that a child has provided us with personal data without appropriate consent, please contact privacy@netcradus.com so that we may promptly investigate and delete the data.",
    ],
  },
  {
    heading: "11. Policy Updates and Contact",
    paragraphs: [
      "Netcradus may update this Data Protection Notice periodically to reflect evolving legal requirements, regulatory notifications, or operational adjustments. Any updates will be published on this page with a revised 'Last Updated' date.",
      "For questions, rights requests, or clarifications regarding this notice, please contact our privacy desk at privacy@netcradus.com or info@netcradus.com.",
    ],
  },
];

export default function DataProtectionPage() {
  usePageMeta(SEO_META.dataProtection.title, SEO_META.dataProtection.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LegalPageTemplate
      title="Data Protection Policy"
      description="Official disclosure of how Netcradus collects, processes, protects, and governs personal data in accordance with the DPDP Act 2023."
      lastUpdated="September 1, 2026"
      sections={sections}
    >
      <PrivacyRequestForm />
    </LegalPageTemplate>
  );
}
