import React from "react";
import { motion } from "framer-motion";
import "./TrustedTechnologiesSection.css";

const PARTNERS = [
  {
    name: "AWS",
    svg: (
      <svg width="48" height="30" viewBox="0 0 48 30" fill="currentColor">
        <path d="M4.6 21.2h3.4l.9-3.2h5.5l.9 3.2h3.4L13.1 3.5H9.6L4.6 21.2zm6.2-6.5l1.8-6.1 1.8 6.1h-3.6zM20.2 3.5v17.7h3.4v-8.1h3.4v8.1h3.4V3.5h-3.4v6.2h-3.4V3.5h-3.4zm12.3 8.3c0 3.1 2.3 5.4 5.4 5.4s5.4-2.3 5.4-5.4V3.5h-3.4v8.3c0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2V3.5h-3.4v8.3z" />
        <path d="M7 23.5c10 6 23 6 34 0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M39.5 22.5l2.5 2-3 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "Microsoft",
    svg: (
      <svg width="34" height="34" viewBox="0 0 23 23" fill="currentColor">
        <rect width="10.5" height="10.5" />
        <rect x="12.5" width="10.5" height="10.5" />
        <rect y="12.5" width="10.5" height="10.5" />
        <rect x="12.5" y="12.5" width="10.5" height="10.5" />
      </svg>
    )
  },
  {
    name: "Google Cloud",
    svg: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    name: "Cisco",
    svg: (
      <svg width="42" height="32" viewBox="0 0 24 24" fill="currentColor">
        <rect x="2" y="14" width="1.5" height="4" rx="0.5" />
        <rect x="4.5" y="10" width="1.5" height="8" rx="0.5" />
        <rect x="7" y="6" width="1.5" height="12" rx="0.5" />
        <rect x="9.5" y="10" width="1.5" height="8" rx="0.5" />
        <rect x="12" y="12" width="1.5" height="6" rx="0.5" />
        <rect x="14.5" y="10" width="1.5" height="8" rx="0.5" />
        <rect x="17" y="6" width="1.5" height="12" rx="0.5" />
        <rect x="19.5" y="10" width="1.5" height="8" rx="0.5" />
        <rect x="22" y="14" width="1.5" height="4" rx="0.5" />
      </svg>
    )
  },
  {
    name: "Palo Alto Networks",
    svg: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4M12 16h.01" strokeWidth="2.5" />
      </svg>
    )
  },
  {
    name: "CrowdStrike",
    svg: (
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 9v11l9 4 9-4V9L12 2z" />
        <path d="M12 22V11M8 14l4-4 4 4" />
      </svg>
    )
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const TrustedTechnologiesSection = () => {
  return (
    <section className="tech-partners-section">
      <div className="tech-partners-mesh" />
      <div className="tech-partners-container">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="tech-badge">
            Technology Partners
          </span>
          <h2 className="tech-title">
            Trusted Technologies We Use
          </h2>
          <p className="tech-subtitle">
            NetCradus delivers enterprise-grade cybersecurity solutions powered by globally trusted technology partners and industry-leading security platforms.
          </p>
        </div>

        {/* Logos Grid */}
        <motion.div
          className="tech-logos-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PARTNERS.map((partner) => (
            <motion.div
              key={partner.name}
              className="tech-logo-card"
              variants={cardVariants}
            >
              <div className="tech-logo-svg-wrapper">
                {partner.svg}
              </div>
              <span className="tech-logo-name">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="tech-bottom-text">
            Our solutions integrate seamlessly with industry-leading security, cloud, and networking platforms to provide scalable, resilient, and future-ready enterprise protection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustedTechnologiesSection;
