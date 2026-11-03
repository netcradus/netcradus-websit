import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Database,
  Server,
  Eye,
  Key,
  ShieldCheck,
  Building2,
  Globe,
  FileText,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const TrustCenterPage = () => {
  usePageMeta(
    "Trust Center | Netcradus Security, Privacy & Compliance",
    "Comprehensive information on Netcradus security controls, compliance frameworks, data privacy, subprocessors, and business continuity."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const standards = [
    { name: "ISO/IEC 27001", label: "Information Security", desc: "Certified Information Security Management System (ISMS) governing operations and infrastructure." },
    { name: "ISO/IEC 27701", label: "Privacy Management", desc: "Certified Privacy Information Management System (PIMS) for personal data governance." },
    { name: "SOC 2 Type II", label: "Operational Controls", desc: "Independent audit of controls meeting Security & Trust Services Criteria." },
    { name: "DPDP Act 2023", label: "Data Protection", desc: "Full alignment with India's Digital Personal Data Protection regulatory mandate." },
    { name: "UK GDPR", label: "Data Protection", desc: "Strict adherence to UK data privacy standards and data subject rights." },
    { name: "EU GDPR", label: "Data Protection", desc: "Compliance with European Union General Data Protection Regulation requirements." },
  ];

  const trustPillars = [
    {
      title: "Certifications & Audits",
      desc: "Independently verified security and privacy frameworks ensuring continuous compliance.",
      icon: ShieldCheck,
    },
    {
      title: "Security Controls",
      desc: "Defense-in-depth architecture covering identity, endpoints, encryption, and application security.",
      icon: Lock,
    },
    {
      title: "Data Privacy & Governance",
      desc: "Strict data minimization, purpose limitation, and transparent processing commitments.",
      icon: Eye,
    },
    {
      title: "Subprocessors & Locations",
      desc: "Rigorous vendor due diligence and controlled data hosting locations.",
      icon: Server,
    },
    {
      title: "Business Continuity",
      desc: "Resilient infrastructure, automated backups, and disaster recovery playbooks.",
      icon: Database,
    },
    {
      title: "Incident Response",
      desc: "24/7 active surveillance, automated threat containment, and transparent notification.",
      icon: FileCheck,
    },
  ];

  const securityDocs = [
    { title: "ISO 27001 Certificate", category: "Certification", status: "Available upon request" },
    { title: "ISO 27701 Certificate", category: "Certification", status: "Available upon request" },
    { title: "SOC 2 Type II Report", category: "Audit Report", status: "Available upon request" },
    { title: "DPDPA Readiness Document", category: "Compliance", status: "Available upon request" },
    { title: "Security Whitepaper", category: "Architecture", status: "Available upon request" },
    { title: "Data Processing Agreement", category: "Legal", status: "Available upon request" },
    { title: "Business Continuity Overview", category: "Operations", status: "Available upon request" },
    { title: "Penetration Test Summary", category: "Security Test", status: "Available upon request" },
  ];

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden min-h-screen">
      
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/20">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 20%, rgba(255,107,0,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 80%, rgba(59,130,246,0.06) 0%, transparent 50%)
            `,
          }}
        />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/8">
            <Shield size={14} className="text-accent" />
            <span className="text-xs font-bold tracking-wider uppercase text-accent">
              Netcradus Trust Center
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            Security, Privacy & Operational <br />
            <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
              Transparency
            </span>
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Netcradus is committed to safeguarding client data, systems, and privacy. Explore our security controls, compliance attestations, privacy governance, and enterprise trust standards.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/20 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Request Security Information
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services/cybersecurity"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Cybersecurity Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Global Frameworks</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Compliance & Governance Standards</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We align with globally recognized security and data privacy frameworks to maintain maximum organizational resilience.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {standards.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-surface hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-black text-white">{item.name}</span>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md bg-accent/10 text-accent border border-accent/20">
                    {item.label}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Core Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Enterprise Trust Architecture</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              How Netcradus structures identity, data protection, infrastructure resilience, and compliance reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border bg-surface hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-6">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Documentation</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Customer Security & Compliance Pack</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Detailed technical and audit reports available for qualified enterprise customer security reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityDocs.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-surface flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 text-accent mb-4">
                    <FileText size={18} />
                  </div>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-wider block mb-1">
                    {doc.category}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-3 leading-snug">{doc.title}</h4>
                </div>
                <div className="pt-4 border-t border-border/10">
                  <span className="inline-block text-[11px] font-semibold text-text-secondary bg-white/5 px-2.5 py-1 rounded">
                    {doc.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/20 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Request Document Access via Contact
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Questions About Security & Compliance?</h2>
          <p className="text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Our security and compliance team can provide additional details and respond to security reviews and vendor due diligence requests.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Contact Security Team
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TrustCenterPage;
