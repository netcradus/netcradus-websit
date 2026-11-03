import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Eye,
  X,
  ShieldAlert,
  ShieldCheck,
  Building2,
  Landmark,
  Truck,
  ArrowRight,
  CheckCircle2,
  Search,
  Lock,
  Share2,
  Key,
  FileSpreadsheet
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

// Case Studies Data
const CASE_STUDIES = [
  {
    id: "boston-scientific",
    number: "CASE STUDY 01",
    title: "Boston Scientific Cybersecurity Incident",
    organization: "Boston Scientific",
    sector: "Medical Devices / Healthcare",
    detected: "25 August 2026",
    status: "Investigation and recovery ongoing",
    impact: "Global operational and business-application disruption",
    assessment: "CRITICAL",
    assessmentColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    icon: Building2,
    overview:
      "Boston Scientific disclosed that it identified a cybersecurity incident affecting certain information technology systems on 25 August 2026. The event resulted in a network outage and disruption to global operations, including access to business applications supporting customer-order processing and shipment.",
    confirmedImpacts: [
      "Disruption to certain information systems and business applications",
      "Impact on the ability to process and ship customer orders",
      "Global operational disruption",
      "Full restoration timeline was not yet known at the time of disclosure"
    ],
    analysis:
      "This case demonstrates that cyber resilience is not only a confidentiality issue. When core business applications become unavailable, a security incident can immediately affect revenue-generating operations, customer service and supply continuity.",
    defensivePriorities: [
      "Segment critical operational and enterprise systems",
      "Maintain tested business-continuity procedures",
      "Prioritize restoration of business-critical applications",
      "Monitor abnormal privileged and network activity",
      "Maintain incident-response retainers and recovery playbooks"
    ],
    takeaway: "Cyber resilience means protecting business operations, not only protecting data."
  },
  {
    id: "french-tax-authority",
    number: "CASE STUDY 02",
    title: "French Tax Authority Data Breach",
    organization: "General Directorate of Public Finances (DGFiP)",
    sector: "Government / Public Finance",
    disclosed: "August 2026",
    incidentType: "Unauthorized access and data theft",
    reportedImpact: "Approximately 678,000 users",
    assessment: "CRITICAL",
    assessmentColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    icon: Landmark,
    overview:
      "France's Finance Ministry confirmed a cyberattack involving access to and extraction of taxpayer data. The affected information related to both individual and professional taxpayers. Authorities later stated that data belonging to approximately 678,000 users had been stolen.",
    riskPerspective:
      "Government and financial records can support follow-on fraud, impersonation and highly targeted social-engineering activity. The impact of a breach therefore continues after the initial unauthorized access has been contained.",
    detectionPriorities: [
      "Abnormal database queries and bulk-record access",
      "Unexpected data exports",
      "Privileged-account anomalies",
      "Unusual outbound transfers",
      "Access outside expected user or working patterns"
    ],
    defensivePriorities: [
      "Enforce least privilege",
      "Apply strong authentication to administrative and remote access",
      "Alert on bulk access to sensitive records",
      "Control and audit data exports",
      "Continuously monitor privileged identities"
    ],
    takeaway: "Detect abnormal collection before unauthorized access becomes large-scale exfiltration."
  },
  {
    id: "ceva-logistics",
    number: "CASE STUDY 03",
    title: "CEVA Logistics Cyber Intrusion",
    organization: "CEVA Logistics",
    sector: "Global Logistics / Supply Chain",
    attackBegan: "29 July 2026",
    customerConfirmation: "1 August 2026",
    operationalScope: "Eight European warehouses reported affected",
    assessment: "HIGH",
    assessmentColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    icon: Truck,
    overview:
      "CEVA Logistics confirmed a cyber intrusion affecting part of its European contract-logistics operations. The company stated that the operational impact was limited to eight warehouses and that its investigation was ongoing.",
    downstreamImpact:
      "Multiple CEVA customers reported that shipping-related customer information was exposed, while some organizations also reported order delays or cancellations. The case illustrates how a compromise at a service provider can propagate risk to many dependent businesses.",
    supplyChainModel: [
      "Customer",
      "Business",
      "Logistics Provider",
      "Shared Data",
      "Provider Compromise",
      "Downstream Exposure"
    ],
    defensivePriorities: [
      "Maintain visibility into data shared with third parties",
      "Minimize vendor data retention",
      "Risk-tier critical service providers",
      "Define vendor breach-notification and response procedures",
      "Include suppliers in cyber-resilience exercises"
    ],
    takeaway: "Your vendors and service providers are part of your effective attack surface."
  }
];

const CROSS_FINDINGS = [
  {
    step: "01",
    title: "Availability Is a Security Objective",
    desc: "Operational disruption can become a material business issue even before the full scope of data exposure is known."
  },
  {
    step: "02",
    title: "Sensitive Data Requires Behavioral Monitoring",
    desc: "Security teams need visibility into unusual access volume, exports, privilege use and outbound movement."
  },
  {
    step: "03",
    title: "Third Parties Extend Enterprise Risk",
    desc: "A vendor incident can expose customer information and interrupt services across multiple organizations."
  },
  {
    step: "04",
    title: "Recovery Capability Matters",
    desc: "Incident response must include tested restoration, business continuity and executive decision-making processes."
  }
];

const DEFENSIVE_PRIORITIES_2026 = [
  {
    area: "Identity Security",
    icon: Key,
    points: ["MFA", "PAM", "Conditional Access", "Identity Monitoring"]
  },
  {
    area: "Attack Surface",
    icon: Eye,
    points: ["Asset Discovery", "Exposure Monitoring", "Vulnerability Management"]
  },
  {
    area: "Data Protection",
    icon: Lock,
    points: ["Classification", "DLP", "Encryption", "Exfiltration Detection"]
  },
  {
    area: "Third-Party Security",
    icon: Share2,
    points: ["Vendor Assessment", "Data Minimization", "Supply-Chain Monitoring"]
  },
  {
    area: "Detection & Response",
    icon: ShieldAlert,
    points: ["EDR", "XDR", "SIEM", "Threat Intelligence", "Incident Response"]
  },
  {
    area: "Cyber Resilience",
    icon: ShieldCheck,
    points: ["Segmentation", "Backups", "Disaster Recovery", "Business Continuity"]
  }
];

export default function CaseStudiesPage() {
  usePageMeta(
    "Latest Cyber Incident Case Studies | Netcradus Threat Intelligence",
    "Review three recent cyber incident case studies disclosed in August 2026 (Boston Scientific, French Tax Authority, CEVA Logistics), cross-incident findings, and 2026 defensive priorities."
  );

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const pdfUrl = "/documents/Netcradus_Latest_Cyber_Incident_Case_Studies_August_2026.pdf";

  return (
    <div className="bg-[#05060A] text-white transition-colors duration-500 overflow-x-hidden min-h-screen">
      
      <section className="relative pt-28 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,107,0,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B00]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#FF6B00]/30 bg-[#FF6B00]/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
              <span className="text-xs font-black tracking-widest uppercase text-[#FF6B00]">
                Netcradus | Threat Intelligence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight">
              Latest Cyber Incident<br />
              <span className="bg-gradient-to-r from-[#FF6B00] via-orange-400 to-amber-500 bg-clip-text text-transparent">
                Case Studies
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 tracking-wider font-semibold uppercase">
              REAL INCIDENTS • CURRENT THREATS • ACTIONABLE INTELLIGENCE
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md max-w-2xl">
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                <strong className="text-white">Corporate Threat Intelligence Brief | August 2026</strong><br />
                Prepared for executive, security, risk, and technology stakeholders. Analysis of disclosed incidents across healthcare, government, and global supply chain logistics.
              </p>
            </div>

            {/* Top Metrics Row */}
            <div className="grid grid-cols-3 gap-4 max-w-lg pt-2">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
                <span className="text-3xl font-black text-[#FF6B00]">03</span>
                <span className="block text-xs text-gray-400 font-bold uppercase mt-1">Incidents</span>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
                <span className="text-3xl font-black text-cyan-400">03</span>
                <span className="block text-xs text-gray-400 font-bold uppercase mt-1">Sectors</span>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 text-center">
                <span className="text-3xl font-black text-amber-400">2026</span>
                <span className="block text-xs text-gray-400 font-bold uppercase mt-1">Current</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => setIsPreviewOpen(true)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#FF6B00] text-white font-bold text-sm shadow-lg shadow-[#FF6B00]/25 hover:bg-orange-600 transition-all duration-300 border-0 cursor-pointer"
              >
                <Eye size={18} />
                Preview Full Case Study
              </button>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
              >
                <FileText size={16} />
                Open PDF in New Tab
              </a>

              <a
                href="#executive-brief"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
              >
                Explore Analysis
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      <section id="executive-brief" className="py-20 border-b border-white/10 bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Executive Brief */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                <FileSpreadsheet size={16} />
                Executive Summary
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Executive Brief
              </h2>

              <p className="text-base text-gray-300 leading-relaxed">
                Cyber incidents disclosed in August 2026 show how quickly cyber risk can become operational, financial and ecosystem risk. This report reviews three recent cases across medical technology, government and logistics, focusing on confirmed public facts and the defensive lessons organizations can apply.
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-2" />
                  <div>
                    <strong className="text-white">Boston Scientific</strong> — global operational disruption affecting systems used to process and ship customer orders.
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-2" />
                  <div>
                    <strong className="text-white">French Tax Authority (DGFiP)</strong> — confirmed theft of taxpayer data affecting approximately 678,000 users.
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <div>
                    <strong className="text-white">CEVA Logistics</strong> — cyber intrusion affecting eight European warehouses, with downstream customer-data and delivery impacts reported by clients.
                  </div>
                </div>
              </div>
            </div>

            {/* Executive Security Priorities */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl border border-white/15 bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent backdrop-blur-md shadow-2xl space-y-6">
                <div className="flex items-center gap-3 text-[#FF6B00]">
                  <ShieldCheck size={24} />
                  <h3 className="text-xl font-black text-white">Executive Security Priorities</h3>
                </div>

                <ul className="space-y-3.5 text-sm text-gray-200">
                  {[
                    "Identity and privileged-access security",
                    "Business continuity and cyber resilience",
                    "Sensitive-data access monitoring",
                    "Third-party and supply-chain risk",
                    "Incident detection, containment and recovery"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-[#FF6B00] shrink-0 mt-0.5" />
                      <span className="font-semibold text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10 text-xs text-gray-400">
                  Defensive frameworks aligned to NIST SP 800-53, ISO 27001, and Netcradus ACIS threat intelligence playbooks.
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-24 border-b border-white/10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00]">
              Deep Dive Analysis
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Disclosed Incident Case Studies
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Detailed technical and operational analysis of 3 major cyber security incidents disclosed in August 2026.
            </p>
          </div>

          <div className="space-y-16">
            {CASE_STUDIES.map((study) => (
              <div
                key={study.id}
                id={study.id}
                className="rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/60 p-6 sm:p-10 lg:p-12 space-y-8 backdrop-blur-md shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6B00]/5 rounded-full blur-[100px] pointer-events-none" />

                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
                  <div className="space-y-1">
                    <span className="text-xs font-black uppercase tracking-widest text-[#FF6B00]">
                      {study.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      {study.title}
                    </h3>
                  </div>

                  <span className={`px-4 py-1.5 rounded-full border text-xs font-black uppercase tracking-wider ${study.assessmentColor}`}>
                    {study.assessment} RISK
                  </span>
                </div>

                {/* Metadata Grid Table */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-2xl bg-black/40 border border-white/10 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-400 uppercase text-[11px] font-bold block mb-1">Organization</span>
                    <strong className="text-white font-bold">{study.organization}</strong>
                  </div>

                  <div>
                    <span className="text-gray-400 uppercase text-[11px] font-bold block mb-1">Sector</span>
                    <strong className="text-cyan-400 font-bold">{study.sector}</strong>
                  </div>

                  <div>
                    <span className="text-gray-400 uppercase text-[11px] font-bold block mb-1">
                      {study.detected ? "Detected Date" : study.disclosed ? "Disclosed Date" : "Attack Began"}
                    </span>
                    <strong className="text-amber-400 font-bold">
                      {study.detected || study.disclosed || study.attackBegan}
                    </strong>
                  </div>

                  <div>
                    <span className="text-gray-400 uppercase text-[11px] font-bold block mb-1">Status / Impact</span>
                    <strong className="text-gray-200 font-bold">
                      {study.status || study.reportedImpact || study.operationalScope}
                    </strong>
                  </div>
                </div>

                {/* Incident Overview & Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                        <Search size={18} className="text-[#FF6B00]" />
                        Incident Overview
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        {study.overview}
                      </p>
                    </div>

                    {study.confirmedImpacts && (
                      <div className="space-y-2">
                        <h5 className="text-sm font-bold text-white uppercase tracking-wider">Confirmed Operational Impact</h5>
                        <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                          {study.confirmedImpacts.map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] shrink-0 mt-2" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {study.riskPerspective && (
                      <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs sm:text-sm text-amber-200 leading-relaxed">
                        <strong className="text-amber-400 block mb-1 font-bold">Risk Perspective:</strong>
                        {study.riskPerspective}
                      </div>
                    )}

                    {study.downstreamImpact && (
                      <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-xs sm:text-sm text-blue-200 leading-relaxed">
                        <strong className="text-blue-400 block mb-1 font-bold">Downstream Impact:</strong>
                        {study.downstreamImpact}
                      </div>
                    )}

                    {study.supplyChainModel && (
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                        <h5 className="text-xs font-black uppercase tracking-wider text-gray-400">Supply-Chain Risk Propagation Model</h5>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white">
                          {study.supplyChainModel.map((node, i) => (
                            <React.Fragment key={i}>
                              <span className="px-2.5 py-1 rounded-md bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00]">
                                {node}
                              </span>
                              {i < study.supplyChainModel.length - 1 && <span className="text-gray-500 font-bold">→</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Right Side: Defensive & Detection Priorities */}
                  <div className="lg:col-span-5 space-y-6">
                    
                    {study.detectionPriorities && (
                      <div className="p-6 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                          <Eye size={16} />
                          Detection Priorities
                        </h4>
                        <ul className="space-y-2 text-xs text-gray-300">
                          {study.detectionPriorities.map((dp, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                              <span>{dp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="p-6 rounded-2xl bg-black/50 border border-white/10 space-y-4">
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider text-[#FF6B00] flex items-center gap-2">
                        <ShieldCheck size={18} />
                        Defensive Priorities
                      </h4>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-gray-200">
                        {study.defensivePriorities.map((priority, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0 mt-0.5" />
                            <span>{priority}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

                {/* Bottom Banner — Key Takeaway */}
                <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FF6B00]/20 via-orange-950/40 to-black border border-[#FF6B00]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#FF6B00]">Key Takeaway</span>
                    <p className="text-sm sm:text-base font-bold text-white">
                      "{study.takeaway}"
                    </p>
                  </div>

                  <button
                    onClick={() => setIsPreviewOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF6B00] hover:text-white transition-colors shrink-0 bg-transparent border-0 cursor-pointer"
                  >
                    Preview PDF Brief <Eye size={14} />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 border-b border-white/10 bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00]">
              Strategic Intelligence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Cross-Incident Findings
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Universal cyber defense lessons compiled from analyzing recent disclosures across distinct sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CROSS_FINDINGS.map((item) => (
              <div
                key={item.step}
                className="p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#FF6B00]/40 transition-all duration-300 space-y-4"
              >
                <span className="text-xs font-black text-[#FF6B00] tracking-widest uppercase bg-[#FF6B00]/10 border border-[#FF6B00]/20 px-3 py-1 rounded-full inline-block">
                  Finding {item.step}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-24 border-b border-white/10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00]">
              Framework Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Netcradus 2026 Defensive Priorities
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Recommended architectural security baselines to prevent, detect, and isolate modern attack vectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEFENSIVE_PRIORITIES_2026.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/50 hover:border-[#FF6B00]/30 transition-all duration-300 space-y-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-lg font-bold text-white">{sec.area}</h3>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {sec.points.map((pt, pIdx) => (
                      <span
                        key={pIdx}
                        className="text-xs font-semibold px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-200"
                      >
                        {pt}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-16 border-b border-white/10 bg-black/60 text-xs sm:text-sm text-gray-400">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-8">
          
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Publication Notice</h4>
            <p className="leading-relaxed">
              This document is an independent Netcradus defensive analysis based on publicly available information and disclosures available at the time of publication. Investigations into recent incidents may remain ongoing, and technical details, affected systems, attribution and impact estimates may change as organizations and authorities release additional findings.
            </p>
            <p className="leading-relaxed">
              Netcradus does not claim involvement in the investigation or remediation of the organizations discussed unless explicitly stated. Organization and product names remain the property of their respective owners.
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/10">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Source Notes</h4>
            <ul className="space-y-1.5 list-disc list-inside">
              <li>Boston Scientific, company cybersecurity incident update, 26 August 2026.</li>
              <li>Reuters / French Finance Ministry reporting on the DGFiP taxpayer-data breach, August 2026.</li>
              <li>CEVA Logistics statement reported by TechCrunch regarding its European contract-logistics cyber intrusion, August 2026.</li>
            </ul>
          </div>

        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 text-center space-y-6 relative z-10">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Preview the Complete August 2026 Intelligence Brief
          </h2>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
            View the full multi-page PDF briefing containing all case study breakdowns, threat intelligence data, and Netcradus 2026 defensive priorities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF6B00] text-white font-bold text-sm shadow-xl shadow-[#FF6B00]/30 hover:bg-orange-600 transition-all duration-300 border-0 cursor-pointer"
            >
              <Eye size={18} />
              Preview Full Case Study
            </button>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              <FileText size={16} />
              Open PDF in New Tab
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/15 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Schedule Executive Briefing
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-5xl bg-[#0A0D14] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2 text-sm font-bold text-white">
                <Eye size={18} className="text-[#FF6B00]" />
                <span>Netcradus Threat Intelligence — August 2026 Briefing PDF Preview</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors no-underline px-3 py-1.5 rounded-lg border border-white/15 bg-white/5"
                >
                  <FileText size={14} />
                  Open in New Tab
                </a>

                <button
                  onClick={() => setIsPreviewOpen(false)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all border-0 bg-transparent cursor-pointer"
                  aria-label="Close Preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body / Embedded PDF Viewer */}
            <div className="flex-1 bg-black p-2 overflow-hidden flex items-center justify-center">
              <iframe
                src={`${pdfUrl}#toolbar=0`}
                title="Netcradus Case Studies PDF Preview"
                className="w-full h-[72vh] rounded-xl border border-white/10 bg-slate-950"
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
