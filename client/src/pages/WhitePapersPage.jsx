import React from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Download,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  HelpCircle,
  BarChart3,
  Lock,
  Zap,
  Eye,
  Server,
  FileSpreadsheet,
  Globe,
  Sparkles,
  ExternalLink
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

// White Paper Topics
const ACIS_TOPICS = [
  "5-Layer Closed-Loop Defense Architecture (CLDM)",
  "AI-SIEM log ingestion @ 10M+ events/sec with sub-10ms detection latency",
  "Autonomous SOAR with sub-200ms response & 240+ pre-built playbooks",
  "Federated Threat Intelligence Swarm & GNN-powered attack path inference",
  "Self-Healing Engine: atomic file rollback, patch orchestration & active deception",
  "24/7 AI Red Team Simulator with 1,400+ MITRE ATT&CK scenario emulations",
  "Consolidated Enterprise Stack: eBPF, Kafka, Flink, PyTorch, Kubernetes & Istio mTLS",
  "Compliance Coverage: ISO/IEC 27001:2022, SOC 2 Type II, NIST CSF 2.0 & GDPR Art. 33"
];

const BENEFIT_ITEMS = [
  {
    icon: BarChart3,
    title: "Accelerate Architecture Audits",
    description: "Equip CISOs, enterprise architects, and risk committees with deep technical blueprints to evaluate defense capabilities against modern machine-speed attacks."
  },
  {
    icon: Cpu,
    title: "Eliminate Human-Latency Bottlenecks",
    description: "Understand how Closed-Loop Defense Mode (CLDM) compresses threat containment timelines from hours to under 200 milliseconds."
  },
  {
    icon: Lock,
    title: "Validate Zero-Trust Compliance",
    description: "Review exact control mappings for ISO 27001:2022 Annex A.16, SOC 2 Type II, NIST CSF 2.0, and GDPR automated breach notification."
  },
  {
    icon: ShieldCheck,
    title: "Reduce Total Cost of Ownership",
    description: "Evaluate how consolidating SIEM, SOAR, UEBA, BAS, and deception into a unified 5-layer fabric cuts vendor licensing friction by up to 60%."
  }
];

export default function WhitePapersPage() {
  usePageMeta(
    "Cybersecurity White Papers & Technical Research | Netcradus",
    "Explore Netcradus technical white papers, platform architecture overviews, and executive research assets. Download the ACIS Autonomous Cyber Immune System White Paper (20 pages, PDF)."
  );

  const primaryPdfUrl = "/documents/Netcradus_ACIS_Autonomous_Cyber_Immune_System_Whitepaper.pdf";

  return (
    <div className="bg-[#05060A] text-white transition-colors duration-500 overflow-x-hidden min-h-screen">
      
      <section className="relative pt-28 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.12)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#FF6B00]" />
              <span className="text-xs font-black tracking-widest uppercase text-[#FF6B00]">
                Netcradus Technical Research
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight">
              Cybersecurity<br />
              <span className="bg-gradient-to-r from-[#FF6B00] via-orange-400 to-amber-500 bg-clip-text text-transparent">
                White Papers
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-3xl leading-relaxed">
              In-depth technical architecture documents, threat research assets, and strategic frameworks designed to guide executive decision-making and security engineering.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#acis-whitepaper"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FF6B00] text-white font-bold text-sm shadow-lg shadow-[#FF6B00]/25 hover:bg-orange-600 transition-all duration-300 no-underline"
              >
                <FileText size={18} />
                Explore ACIS White Paper
              </a>

              <a
                href="#what-is-whitepaper"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
              >
                Learn About White Papers
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      <section id="what-is-whitepaper" className="py-20 border-b border-white/10 bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Definition & Purpose */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                <HelpCircle size={16} />
                Strategic Context
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                What is a Cybersecurity White Paper?
              </h2>

              <p className="text-base text-gray-300 leading-relaxed">
                A cybersecurity white paper is an authoritative, technical research document designed to explain complex security challenges, evaluate architectural models, and detail verified solutions.
              </p>

              <p className="text-base text-gray-300 leading-relaxed">
                Unlike marketing brochures, white papers focus on <strong className="text-white">verifiable specifications, algorithmic logic, integration standards, and performance benchmarks</strong>. They serve as an essential reference for CISOs, CTOs, enterprise architects, and compliance officers evaluating defense strategies.
              </p>
            </div>

            {/* Right: Role in Decision Making */}
            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-md space-y-6 shadow-2xl">
                <div className="flex items-center gap-3 text-[#FF6B00]">
                  <BookOpen size={24} />
                  <h3 className="text-xl font-black text-white">Role in Security Decision-Making</h3>
                </div>

                <div className="space-y-4 text-sm text-gray-200">
                  <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                    <strong className="text-white block mb-1 font-bold">1. Technical Proof of Capability</strong>
                    <span className="text-gray-300">Provides deep-dive code specifications, database schemas, and performance benchmarks (e.g. sub-200ms response times).</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                    <strong className="text-white block mb-1 font-bold">2. Architectural Risk Mitigation</strong>
                    <span className="text-gray-300">Demonstrates how closed-loop automation eliminates single points of failure and reduces human-analyst burnout.</span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                    <strong className="text-white block mb-1 font-bold">3. Compliance & Procurement Verification</strong>
                    <span className="text-gray-300">Contains explicit mappings for ISO 27001, SOC 2 Type II, NIST CSF 2.0, and GDPR data protection mandates.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="acis-whitepaper" className="py-24 border-b border-white/10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00]">
              Featured Technical Document
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              ACIS Platform Technical White Paper
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Read or download the complete 20-page technical specification of the Netcradus Autonomous Cyber Immune System.
            </p>
          </div>

          {/* Large Featured Card */}
          <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/80 p-8 sm:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Cover Preview Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[340px] group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B00]/20 to-transparent blur-2xl pointer-events-none" />
                  
                  {/* Styled Document Mockup Container */}
                  <div className="relative rounded-2xl border border-white/20 bg-[#0B0E17] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.6)] space-y-6 text-left group-hover:border-[#FF6B00]/40 transition-all duration-300">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/20 border border-[#FF6B00]/40 flex items-center justify-center text-[#FF6B00]">
                          <Cpu size={18} />
                        </div>
                        <span className="text-xs font-bold text-white tracking-wider">NETCRADUS</span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 uppercase">Confidential v3.0</span>
                    </div>

                    <div className="space-y-2 py-4">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF6B00]">TECHNICAL SPECIFICATION</span>
                      <h4 className="text-xl font-black text-white leading-tight">
                        Autonomous Cyber Immune System (ACIS)
                      </h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Five-Layer Closed-Loop Defense Mode Architecture & Enterprise Technology Stack
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-gray-300 flex items-center justify-between">
                      <span>📄 20 Pages • PDF</span>
                      <span className="text-[#FF6B00] font-bold">3.2 MB</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Download Action */}
              <div className="lg:col-span-7 space-y-6 text-left">
                
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3.5 py-1 rounded-full bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00] text-xs font-black uppercase tracking-wider">
                    Core Platform White Paper
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    Updated 2025 • Version 3.0
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white leading-snug">
                  ACIS — Autonomous Cyber Immune System (Full Technical Architecture)
                </h3>

                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                  This white paper presents the full ACIS technical architecture, structured around five purpose-engineered defense layers: AI-Powered SIEM, Autonomous SOAR, Threat Intelligence Swarm, Self-Healing and Deception Engine, and AI Red Team Simulator.
                </p>

                {/* Key Topics List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-widest text-gray-400">
                    Key Architecture Topics Included:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {ACIS_TOPICS.map((topic, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-200">
                        <CheckCircle2 size={15} className="text-[#FF6B00] shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PDF Specs Pill */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2 border-t border-white/10">
                  <div><strong>File Type:</strong> PDF Document (.pdf)</div>
                  <div><strong>File Size:</strong> 3.2 MB</div>
                  <div><strong>Classification:</strong> Public Technical Brief</div>
                </div>

                {/* Download CTA Button */}
                <div className="pt-2">
                  <a
                    href={primaryPdfUrl}
                    download="Netcradus_ACIS_Autonomous_Cyber_Immune_System_Whitepaper.pdf"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#FF6B00] text-white font-bold text-sm shadow-xl shadow-[#FF6B00]/30 hover:bg-orange-600 hover:scale-[1.02] transition-all duration-300 no-underline cursor-pointer"
                  >
                    <Download size={18} />
                    Download ACIS White Paper (PDF)
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      <section className="py-24 border-b border-white/10 bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00]">
              Value Delivery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Benefits for Cybersecurity Leaders
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              How technical white papers support strategic risk management and technology procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFIT_ITEMS.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] hover:border-[#FF6B00]/30 transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 text-center space-y-6 relative z-10">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ready to Evaluate ACIS Architecture?
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Download the complete ACIS White Paper PDF or connect with our engineering team for a customized architecture briefing.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href={primaryPdfUrl}
              download="Netcradus_ACIS_Autonomous_Cyber_Immune_System_Whitepaper.pdf"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF6B00] text-white font-bold text-sm shadow-xl shadow-[#FF6B00]/30 hover:bg-orange-600 transition-all duration-300 no-underline cursor-pointer"
            >
              <Download size={18} />
              Download ACIS White Paper (PDF)
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Schedule Architecture Briefing
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
