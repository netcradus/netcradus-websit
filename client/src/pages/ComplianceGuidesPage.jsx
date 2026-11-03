import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Shield,
  ShieldCheck,
  Lock,
  FileText,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Globe,
  Database,
  Cpu,
  Eye,
  AlertTriangle,
  Building2,
  Users,
  Check,
  HelpCircle,
  TrendingUp,
  Layers,
  Search,
  ExternalLink,
  Award,
  Zap
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import gdprImg from "../assets/gdpr.jpeg";
import icoImg from "../assets/ico.png";
import isoIecImg from "../assets/ISO_IEC.png";
import soc2Img from "../assets/soc2.png";
import certinImg from "../assets/certin.png";
import iso27701Img from "../assets/iso-27701-removebg.png";
import iso27001Img from "../assets/ISO-Loogo-removebg.png";

export default function ComplianceGuidesPage() {
  usePageMeta({
    title: "Compliance Guides | Security, Privacy & AI Compliance | Netcradus",
    description:
      "Explore Netcradus guides to GDPR, ICO, ISO/IEC 42001, SOC 2 Type II, CERT-In, ISO/IEC 27701 and ISO/IEC 27001.",
    keywords: [
      "Compliance Guides",
      "GDPR Compliance",
      "ICO UK Data Protection",
      "ISO 42001 AI Governance",
      "SOC 2 Type II Assurance",
      "CERT-In Cybersecurity Directions",
      "ISO 27701 Privacy Information Management",
      "ISO 27001 Security Management",
      "Netcradus Compliance Roadmap"
    ]
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full text-slate-100 font-sans selection:bg-[#00B8FF]/30">
      {/* Quick Jump Bar / Navigation */}
      <div className="sticky top-[80px] z-30 bg-[#05060A]/90 backdrop-blur-md border-b border-slate-800/80 py-2.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs font-medium overflow-x-auto no-scrollbar">
          <span className="text-slate-400 uppercase tracking-widest text-[11px] font-semibold shrink-0">Jump To:</span>
          <div className="flex items-center gap-2 flex-nowrap">
            {[
              { id: "gdpr", label: "GDPR" },
              { id: "ico", label: "ICO" },
              { id: "iso-42001", label: "ISO 42001" },
              { id: "soc2", label: "SOC 2" },
              { id: "cert-in", label: "CERT-In" },
              { id: "iso-27701", label: "ISO 27701" },
              { id: "iso-27001", label: "ISO 27001" },
              { id: "comparison", label: "Matrix" },
              { id: "implementation", label: "Approach" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-3 py-1 rounded-full bg-slate-900/80 hover:bg-[#00B8FF]/20 hover:text-[#00B8FF] border border-slate-800 hover:border-[#00B8FF]/50 transition-all text-slate-300 whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="relative min-h-[85vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-12 bg-[#05060A] overflow-hidden border-b border-slate-800/60">
        {/* Background Grid & Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(#1E293B_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00B8FF]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-[#FF7A00]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-2 sm:pt-4">
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] text-xs uppercase tracking-widest font-semibold">
              <ShieldCheck className="w-4 h-4" />
              COMPLIANCE GUIDES
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Navigate Security, Privacy and AI Compliance with Confidence.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Understand the major security, privacy, governance and AI standards that help organisations protect sensitive information, manage risk and build digital trust.
            </p>

            {/* Quick Badge Chips */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap gap-2 items-center text-xs text-slate-400">
              <span className="text-slate-500 font-semibold mr-1">Covered Standards:</span>
              {["GDPR", "ICO (UK)", "ISO 42001 (AI)", "SOC 2 Type II", "CERT-In", "ISO 27701", "ISO 27001"].map((b) => (
                <span key={b} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-mono">
                  {b}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero Right Visual Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0A0E1A] border border-slate-800/80 p-6 sm:p-8 shadow-2xl overflow-hidden group">
              {/* Subtle ambient light inside container */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#00B8FF]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF7A00]/20 rounded-full blur-3xl pointer-events-none" />

              {/* Graphic Shield Core */}
              <div className="relative z-10 flex flex-col items-center justify-center py-6 text-center space-y-5">
                <div className="relative flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#00B8FF]/20 via-[#0A0E1A] to-[#FF7A00]/20 border border-slate-700 flex items-center justify-center shadow-inner relative">
                    <Shield className="w-12 h-12 text-[#00B8FF] drop-shadow-[0_0_12px_rgba(0,184,255,0.6)]" />
                    <div className="absolute inset-0 rounded-2xl border border-[#00B8FF]/30 animate-pulse" />
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-wide">Enterprise Compliance Shield</h3>
                  <p className="text-xs text-slate-400">Structured Governance & Risk Management Framework</p>
                </div>

                {/* Audit Checklist Card */}
                <div className="w-full bg-slate-950/80 rounded-xl border border-slate-800 p-4 text-left space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-slate-400 pb-1.5 border-b border-slate-800 font-mono text-[11px]">
                    <span className="flex items-center gap-1.5"><FileCheck className="w-3.5 h-3.5 text-[#00B8FF]" /> AUDIT CHECKLIST</span>
                    <span className="text-[#10B981] font-semibold">100% READY</span>
                  </div>
                  <div className="space-y-1.5 text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Data Privacy Controls</span>
                      <span className="text-slate-500 font-mono">GDPR / ICO</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> AI Governance Policy</span>
                      <span className="text-slate-500 font-mono">ISO 42001</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Trust Service Controls</span>
                      <span className="text-slate-500 font-mono">SOC 2 Type II</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> Incident Reporting Logs</span>
                      <span className="text-slate-500 font-mono">CERT-In</span>
                    </div>
                  </div>
                </div>

                {/* Text-based Badges */}
                <div className="w-full flex items-center justify-center flex-wrap gap-2 pt-1">
                  {["GDPR", "ICO", "ISO 42001", "SOC 2", "CERT-In", "ISO 27001"].map((badge) => (
                    <span key={badge} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-700/80 text-[11px] font-mono text-slate-300 shadow-sm">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="what-is-compliance" className="py-20 px-4 sm:px-6 lg:px-12 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-md">
              COMPLIANCE EXPLAINED
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              What is regulatory and security compliance?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Compliance means following the applicable laws, regulations, standards and industry requirements that govern how an organisation manages data, technology, security, privacy and operational risk.
            </p>
          </div>

          {/* 3 Clean Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">1. Protect Sensitive Data</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Helps prevent unauthorised access, loss, misuse and disclosure of personal or business information.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">2. Reduce Business Risk</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Provides structured controls for identifying, managing and responding to security, privacy and operational risks.
              </p>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">3. Build Customer Trust</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Demonstrates accountable practices to customers, partners, regulators and other stakeholders.
              </p>
            </div>
          </div>

          {/* Highlighted Note */}
          <div className="rounded-xl bg-blue-50 border-l-4 border-[#00B8FF] p-5 flex items-start gap-4">
            <HelpCircle className="w-6 h-6 text-[#00B8FF] shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              <strong className="text-slate-900 font-bold">Important Note:</strong> The standards applicable to an organisation depend on its location, industry, services, data and contractual obligations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — GDPR | BLACK THEME */}
      <section id="gdpr" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#090D16] text-white border-b border-slate-800/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00B8FF] bg-[#00B8FF]/10 px-3 py-1 rounded-md">
              DATA PRIVACY REGULATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              General Data Protection Regulation — GDPR
            </h2>
            <p className="text-lg text-[#00B8FF] font-semibold">
              A major European data protection law governing the processing of personal data.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              GDPR establishes requirements for organisations that process personal data belonging to individuals in the European Economic Area, including certain organisations located outside Europe that offer goods or services to, or monitor, those individuals.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/80 p-3 sm:p-4 flex items-center justify-center group hover:border-[#00B8FF]/40 transition-colors">
              <img
                src={gdprImg}
                alt="General Data Protection Regulation - GDPR"
                className="w-full h-auto max-h-[360px] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="ico" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-3 sm:p-4 flex items-center justify-center group hover:border-indigo-300 transition-colors">
              <img
                src={icoImg}
                alt="Information Commissioner’s Office — ICO"
                className="w-full h-auto max-h-[360px] object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-md">
              UK DATA PROTECTION AUTHORITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Information Commissioner’s Office — ICO
            </h2>
            <p className="text-lg text-indigo-600 font-semibold">
              The UK’s independent regulator for information rights and data protection.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              The ICO provides guidance and oversees compliance with UK information-rights legislation, including the UK GDPR and the Data Protection Act 2018.
            </p>
          </div>
        </div>
      </section>

      <section id="iso-42001" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#05060A] text-white border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#FF7A00] bg-[#FF7A00]/10 px-3 py-1 rounded-md">
              AI MANAGEMENT SYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              ISO/IEC 42001:2023
            </h2>
            <p className="text-lg text-[#FF7A00] font-semibold">
              An international management-system standard for responsible AI governance.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              ISO/IEC 42001 provides a structured framework for establishing, implementing, maintaining and continually improving an Artificial Intelligence Management System (AIMS).
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/80 p-3 sm:p-4 flex items-center justify-center group hover:border-[#FF7A00]/40 transition-colors">
              <img
                src={isoIecImg}
                alt="ISO/IEC 42001:2023 AI Management System"
                className="w-full h-auto max-h-[360px] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="soc2" className="py-20 px-4 sm:px-6 lg:px-12 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-3 sm:p-4 flex items-center justify-center group hover:border-teal-300 transition-colors">
              <img
                src={soc2Img}
                alt="SOC 2 Type II Assurance"
                className="w-full h-auto max-h-[360px] object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-md">
              TRUST SERVICES ASSURANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              SOC 2 Type II
            </h2>
            <p className="text-lg text-teal-600 font-semibold">
              Independent assurance over the design and operating effectiveness of service-organisation controls over a defined review period.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              SOC 2 reports are commonly used by technology and service organisations to demonstrate controls relevant to security and, where included, availability, processing integrity, confidentiality and privacy.
            </p>
          </div>
        </div>
      </section>

      <section id="cert-in" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#090D16] text-white border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00B8FF] bg-[#00B8FF]/10 px-3 py-1 rounded-md">
              INDIA CYBERSECURITY COMPLIANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Indian Computer Emergency Response Team — CERT-In
            </h2>
            <p className="text-lg text-[#00B8FF] font-semibold">
              India’s national agency for responding to cybersecurity incidents.
            </p>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              CERT-In issues cybersecurity directions, advisories, vulnerability notes and incident-response guidance for applicable organisations operating in India.
            </p>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900/80 p-3 sm:p-4 flex items-center justify-center group hover:border-[#00B8FF]/40 transition-colors">
              <img
                src={certinImg}
                alt="Indian Computer Emergency Response Team — CERT-In"
                className="w-full h-auto max-h-[360px] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="iso-27701" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white p-3 sm:p-4 flex items-center justify-center group hover:border-cyan-300 transition-colors">
              <img
                src={iso27701Img}
                alt="ISO/IEC 27701:2019 Privacy Information Management"
                className="w-full h-auto max-h-[360px] object-contain rounded-xl"
              />
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-md">
              PRIVACY INFORMATION MANAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              ISO/IEC 27701:2019
            </h2>
            <p className="text-lg text-cyan-600 font-semibold">
              A framework for extending information-security management into privacy-information management.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              ISO/IEC 27701 provides controls and guidance for organisations acting as personally identifiable information (PII) controllers or processors.
            </p>
          </div>
        </div>
      </section>

      <section id="iso-27001" className="py-20 px-4 sm:px-6 lg:px-12 bg-black text-white border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-white bg-slate-800 px-3 py-1 rounded-md">
              INFORMATION SECURITY MANAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              ISO/IEC 27001:2022
            </h2>
            <p className="text-lg text-slate-300 font-semibold">
              An international standard for establishing and continually improving an Information Security Management System (ISMS).
            </p>
            <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
              ISO/IEC 27001 helps organisations manage information-security risks through governance, risk assessment, security controls, internal audits and continual improvement.
            </p>
          </div>

          {/* Right Visual: High-Tech ISO Badge Illustration (Matching Reference Design Layout) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-black p-3 sm:p-4 flex items-center justify-center group hover:border-slate-700 transition-colors">
              <img
                src={iso27001Img}
                alt="ISO/IEC 27001:2022 Information Security Management"
                className="w-full h-auto max-h-[360px] object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-12 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00B8FF] bg-blue-50 px-3 py-1 rounded-md">
              FIND THE RIGHT FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
              Which compliance framework applies to your organisation?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Compare primary focus areas and typical organizational relevance across global standards.
            </p>
          </div>

          {/* Horizontally Scrollable Table Container */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-md bg-white">
            <table className="w-full text-left text-sm border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-900 text-white border-b border-slate-800">
                  <th className="py-4 px-6 font-bold tracking-wider uppercase text-xs">Framework</th>
                  <th className="py-4 px-6 font-bold tracking-wider uppercase text-xs">Primary Focus</th>
                  <th className="py-4 px-6 font-bold tracking-wider uppercase text-xs">Typical Relevance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-800">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-slate-950">GDPR</td>
                  <td className="py-4 px-6 font-medium">EU personal-data protection</td>
                  <td className="py-4 px-6 text-slate-600">Organisations processing covered individuals’ personal data</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-slate-950">ICO / UK GDPR</td>
                  <td className="py-4 px-6 font-medium">UK data protection</td>
                  <td className="py-4 px-6 text-slate-600">Organisations processing personal data under UK law</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-slate-950">ISO/IEC 42001</td>
                  <td className="py-4 px-6 font-medium">AI management and governance</td>
                  <td className="py-4 px-6 text-slate-600">AI developers, providers and users</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-slate-950">SOC 2 Type II</td>
                  <td className="py-4 px-6 font-medium">Service-organisation control assurance</td>
                  <td className="py-4 px-6 text-slate-600">SaaS, cloud and technology service providers</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-slate-950">CERT-In</td>
                  <td className="py-4 px-6 font-medium">Indian cybersecurity response</td>
                  <td className="py-4 px-6 text-slate-600">Applicable organisations operating in India</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-slate-950">ISO/IEC 27701</td>
                  <td className="py-4 px-6 font-medium">Privacy-information management</td>
                  <td className="py-4 px-6 text-slate-600">PII controllers and processors</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="py-4 px-6 font-mono font-bold text-slate-950">ISO/IEC 27001</td>
                  <td className="py-4 px-6 font-medium">Information-security management</td>
                  <td className="py-4 px-6 text-slate-600">Organisations across industries</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="implementation" className="py-20 px-4 sm:px-6 lg:px-12 bg-[#05060A] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest font-bold text-[#00B8FF] bg-[#00B8FF]/10 px-3 py-1 rounded-md">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              From compliance requirements to operational readiness.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Netcradus helps organisations translate complex requirements into practical security, privacy and governance controls aligned with their business environment.
            </p>
          </div>

          {/* 5 Connected Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {[
              { num: "01", title: "Scope & Requirement Mapping", desc: "Define boundaries, identify regulations, and inventory data flows." },
              { num: "02", title: "Gap & Risk Assessment", desc: "Evaluate existing controls against target frameworks and identify risks." },
              { num: "03", title: "Policy & Control Implementation", desc: "Build governance policies, technical safeguards, and operational procedures." },
              { num: "04", title: "Evidence & Remediation", desc: "Automate log collection, test controls, and address compliance gaps." },
              { num: "05", title: "Audit & Continuous Improvement", desc: "Prepare for auditor review and maintain ongoing compliance drift monitoring." }
            ].map((step, idx) => (
              <div key={step.num} className="bg-slate-900/80 border border-slate-800 p-5 rounded-xl space-y-3 relative group hover:border-[#00B8FF]/50 transition-colors">
                <div className="text-2xl font-black text-[#00B8FF] font-mono">{step.num}</div>
                <h4 className="font-bold text-white text-sm leading-snug">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Important Audit Disclaimer */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 text-center max-w-3xl mx-auto">
            <span className="text-slate-300 font-semibold">Note on Certification:</span> Certification or independent assurance, where applicable, is performed by authorised external auditors or certification bodies. Netcradus assists organisations with readiness, control implementation, and evidence preparation.
          </div>
        </div>
      </section>

      <section id="cta" className="py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-[#0A0E1A] to-[#05060A] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-[#00B8FF]/10 border border-[#00B8FF]/30 flex items-center justify-center mx-auto text-[#00B8FF]">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to strengthen your compliance posture?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Identify relevant requirements, close control gaps and build a practical roadmap for security, privacy and AI governance.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(236,76,140,0.35)] transition-all flex items-center gap-2"
            >
              Request a Compliance Assessment <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm transition-all"
            >
              Contact Netcradus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
