import React from "react";
import "./Policy.css";

const policies = [
  {
    number: "01",
    title: "Cookie Policy",
    content:
      "We use necessary cookies for core platform security and operation. Optional analytics, marketing, and functional technologies are activated only with your explicit prior consent and can be customized or withdrawn anytime via Cookie Preferences.",
  },
  {
    number: "02",
    title: "Disclaimer Policy",
    content:
      "All information and services are provided “as-is” without warranties. Netcradus does not guarantee accuracy or uninterrupted availability. Cybersecurity reduces risk but does not eliminate all threats.",
  },
  {
    number: "03",
    title: "Refund & Cancellation Policy",
    content: [
      "Payments once made are non-refundable unless agreed in writing",
      "Project cancellations must be requested formally",
      "Refund eligibility depends on project stage and contractual terms",
    ],
  },
  {
    number: "04",
    title: "Grievance Redressal Policy",
    content: [
      "Grievance redressal contact details: Designated Grievance Redressal Officer (GRO).",
      "Primary privacy and grievance email: privacy@netcradus.com (Officer name and address: [TO BE CONFIRMED]).",
      "Requests and grievances will be handled in accordance with applicable law and the organisation's published grievance process.",
      "In accordance with the DPDP Act framework, Data Principals must first exhaust the published grievance redressal mechanism before escalating unresolved complaints to the Data Protection Board of India (DPBI).",
    ],
  },
  {
    number: "05",
    title: "Data Protection Policy",
    content: [
      "Netcradus ensures protection of personal and organizational data through:",
      "Encryption in transit and secure storage practices",
      "Access control and least-privilege principles",
      "Alignment with the Digital Personal Data Protection Act, 2023 (India) and applicable standards",
    ],
  },
  {
    number: "06",
    title: "Information Security Policy",
    content: [
      "Network security monitoring",
      "Endpoint protection",
      "Access management",
      "Regular audits and logging",
    ],
  },
  {
    number: "07",
    title: "Cybersecurity Policy",
    content: [
      "Netcradus follows industry best practices to:",
      "Detect, prevent, and respond to cyber threats",
      "Vulnerability assessments and penetration testing",
      "Continuous monitoring and threat intelligence",
    ],
  },
  {
    number: "08",
    title: "Acceptable Use Policy",
    content: [
      "Users must not:",
      "Use services for illegal or harmful activities",
      "Attempt unauthorized access",
      "Distribute malware or exploit systems",
      "Violation may result in termination and legal action.",
    ],
  },
  {
    number: "09",
    title: "Incident Response Policy",
    content: [
      "We maintain procedures to:",
      "Detect and respond to incidents",
      "Contain and mitigate threats",
      "Notify affected parties where required",
      "Document and improve response processes",
    ],
  },
  {
    number: "10",
    title: "Vulnerability Disclosure Policy",
    content: [
      "Security researchers can report vulnerabilities responsibly via:",
      "Email: info@netcradus.com.",
      "We encourage ethical disclosure and will not take legal action against responsible reporting.",
    ],
  },
  {
    number: "11",
    title: "Data Retention Policy",
    content: [
      "Data is retained only as long as necessary",
      "Secure deletion methods are used after retention period",
      "Compliance with legal and contractual obligations is maintained",
    ],
  },
  {
    number: "12",
    title: "Third-Party/Vendor Security Policy",
    content: [
      "All vendors must:",
      "Follow security and confidentiality standards",
      "Undergo due diligence checks",
      "Comply with applicable laws and agreements",
    ],
  },
  {
    number: "13",
    title: "Intellectual Property Policy",
    content:
      "All content, software, and materials belong to Netcradus unless otherwise stated. Unauthorized use, copying, or distribution is prohibited.",
  },
  {
    number: "14",
    title: "Anti-Bribery Policy",
    content: [
      "Netcradus follows zero-tolerance for bribery and complies with:",
      "Prevention of Corruption Act, 1988 (India)",
      "Applicable international anti-bribery standards",
    ],
  },
  {
    number: "15",
    title: "Compliance Policy",
    content: [
      "We ensure adherence to:",
      "Indian IT and data protection laws including the DPDP Act, 2023",
      "Applicable cross-border commercial and cybersecurity regulations",
      "Industry standards and best practices",
    ],
  },
  {
    number: "16",
    title: "Business Continuity Policy",
    content: [
        "We maintain plans to ensure: ",
      "Continuity of services during disruptions ",
      "Data backup and recovery ",
      "Minimal downtime and operational impact ",
    ],
  },
  {
    number: "17",
    title: "Effective Date",
    content:
      "All policies are effective from the date of publication on the Netcradus website. ",
  },
  {
    number: "18",
    title: "Contact Information",
    content:
      "Netcradus Pvt Ltd | www.netcradus.com | info@netcradus.com",
  },
];

function Policies() {
  return (
    <div className="policy-page">

      <div className="policy-hero">
        <h1>Policies & Compliance</h1>
        <p>Enterprise-grade governance, security, and transparency.</p>
      </div>

      <div className="policy-content">
        {policies.map((item, index) => (
          <div key={index} className="policy-section">

            <div className="policy-header-row">
              <span className="policy-number">{item.number}</span>
              <h2>{item.title}</h2>
            </div>

            {/* 🔥 BULLET SUPPORT */}
           {Array.isArray(item.content) ? (
  <div className="policy-list">
    {item.content.map((point, i) => {
      const isHeading = point.trim().endsWith(":");

      // Detect email
      const emailMatch = point.match(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/);
      const isWebsite = point.includes("www.");

      let formattedText = point;
      if (emailMatch) {
        const email = emailMatch[1];
        const parts = point.split(email);
        formattedText = (
          <>
            {parts[0]}
            <a href={`mailto:${email}`} className="policy-link" style={{ color: "#e8400a", textDecoration: "underline" }}>
              {email}
            </a>
            {parts[1]}
          </>
        );
      } else if (isWebsite) {
        formattedText = (
          <a href="https://www.netcradus.com" target="_blank" rel="noreferrer" className="policy-link">
            {point}
          </a>
        );
      }

      return isHeading ? (
        <p key={i} className="policy-subheading">
          {point}
        </p>
      ) : (
        <li key={i}>{formattedText}</li>
      );
    })}
  </div>
) : (
  <p>
  {typeof item.content === "string"
    ? item.content
        .split(/(www\.netcradus\.com|info@netcradus\.com)/g)
        .map((part, i) => {
          if (part === "www.netcradus.com") {
            return (
              <a
                key={i}
                href="https://www.netcradus.com"
                target="_blank"
                rel="noreferrer"
                className="policy-link"
              >
                {part}
              </a>
            );
          }

          if (part === "info@netcradus.com") {
            return (
              <a
                key={i}
                href="mailto:info@netcradus.com"
                className="policy-link"
              >
                {part}
              </a>
            );
          }

          return part;
        })
    : item.content}
</p>
)}

          </div>
        ))}
      </div>

    </div>
  );
}

export default Policies;