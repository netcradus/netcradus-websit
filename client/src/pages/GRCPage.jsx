import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Radar, 
  Search, 
  Zap, 
  Monitor, 
  Cpu, 
  Database, 
  Activity, 
  CheckCircle2, 
  ArrowRight, 
  ExternalLink,
  Layers,
  Lock,
  Terminal,
  FileCheck,
  Eye,
  AlertTriangle,
  Server,
  RefreshCw,
  Sliders,
  Radio,
  Building2,
  Check,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageLightbox from '../components/ImageLightbox';

const HERO_CAPABILITIES_LEFT = [
  "Continuous cyber risk mapping",
  "ISO 27001, SOC 2 alignment",
  "Automated compliance drift alerts",
  "Asset surface vulnerability scans",
  "Digital footprint discovery"
];

const HERO_CAPABILITIES_RIGHT = [
  "Evidence collection automation",
  "HIPAA, GDPR audit reports",
  "Governance policy archives",
  "Third-party vendor risk scoring",
  "Executive GRC metrics export"
];

const CORE_CAPABILITIES = [
  {
    id: 1,
    title: "1. Cyber Risk Scoring",
    desc: "Map and score risks dynamically based on asset severity, open vulnerabilities, data classifications, and active exploits.",
    icon: AlertTriangle,
    color: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 2,
    title: "2. Compliance Drifts",
    desc: "Enforce and monitor configurations across cloud setups to flag compliance drifts targeting GDPR, HIPAA, and PCI-DSS rules.",
    icon: Sliders,
    color: "#7C3AED",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.3)"
  },
  {
    id: 3,
    title: "3. Automated Auditing Logs",
    desc: "Automatically gather and archive system configurations, audit records, and deployment trails for auditor reviews.",
    icon: FileCheck,
    color: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 4,
    title: "4. Asset Ingestion Scans",
    desc: "Continuously scan your public internet perimeters to discover exposed APIs, open ports, and orphaned assets automatically.",
    icon: Search,
    color: "#3B82F6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 5,
    title: "5. Policy Management",
    desc: "Store, track, and update internal corporate cybersecurity policies. Direct digital signatures tracking user alignments.",
    icon: FileText,
    color: "#EC4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 6,
    title: "6. Vendor Risk scoring",
    desc: "Send automated risk mapping surveys, score external vendor posture profiles, and monitor vendor breach histories.",
    icon: Shield,
    color: "#EF4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 7,
    title: "7. Cloud Security Auditing",
    desc: "Audit cloud tenant configurations (CSPM) to flag open buckets, identity leaks, and insecure network routes instantly.",
    icon: Layers,
    color: "#8B5CF6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Executive Dashboards",
    desc: "Export real-time governance, compliance gaps, and vulnerability status reports for executives and board audits.",
    icon: Monitor,
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  }
];

const DATA_CONNECTORS = [
  {
    name: "Cloud Tenants",
    desc: "Direct APIs collecting compliance trails across Amazon Web Services, Microsoft Azure, and Google Cloud.",
    icon: Layers,
    color: "#3B82F6",
    badge: "Cloud CSPM",
    caps: ["AWS Config Check", "Azure Compliance Sync", "GCP Org Policy Audit", "Cloud Bucket Auditing"]
  },
  {
    name: "Vulnerability Scanners",
    desc: "Ingest and centralize vulnerabilities from EDR, application, and database checkers.",
    icon: Shield,
    color: "#7C3AED",
    badge: "Vulnerability Ingest",
    caps: ["EDR Threat Ingest", "WAF Block Logs", "Database Anomaly Sync", "Code Scanner Findings"]
  },
  {
    name: "IT Infrastructure",
    desc: "Audit configurations and user access privileges inside Active Directory and core servers.",
    icon: Server,
    color: "#FF6B00",
    badge: "IAM Auditing",
    caps: ["Active Directory Checks", "SSO Access Audits", "SSH Gateway Audit logs", "API Credentials Mapping"]
  },
  {
    name: "ITSM Platforms",
    desc: "Automate verification actions and sync compliance alerts with operational service tickets.",
    icon: Building2,
    color: "#10B981",
    badge: "Workflow Sync",
    caps: ["Jira Compliance Tickets", "ServiceNow Auditing", "GitHub Policies Sync", "PagerDuty Alerts Triage"]
  }
];

const LIVE_METRICS = [
  { label: "Compliance Frameworks", value: "12+", change: "ISO, SOC 2, HIPAA, GDPR", color: "#F59E0B" },
  { label: "Active Policies Audited", value: "50+", change: "Corporate Alignments", color: "#3B82F6" },
  { label: "Evidence Collection", value: "Automated", change: "90% Manual Time Saved", color: "#7C3AED" },
  { label: "Asset Scanning", value: "Continuous", change: "100% Surface Checked", color: "#FF6B00" },
  { label: "Compliance Pass Rate", value: "99.9%", change: "Audit Readiness", color: "#10B981" },
  { label: "Risk Map Update Rate", value: "1h", change: "Dynamic Repositories", color: "#EC4899" }
];

export default function GRCPage() {
  usePageMeta(
    "NetCradus GRC | Governance, Risk & Compliance Platform",
    "Automate compliance auditing and cybersecurity risk mapping. Continuously audit assets and surface threats with NetCradus GRC."
  );

  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#05060A] text-white min-h-screen pt-20 pb-20 overflow-x-hidden font-sans">
      
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.14),transparent_65%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          <div className="bg-[#181106]/90 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Small Amber Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#F59E0B] shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                  <span className="h-2 w-2 rounded-full bg-[#F59E0B] animate-ping" />
                  GOVERNANCE, RISK &amp; COMPLIANCE
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                  Automate Audits.<br />
                  <span className="bg-gradient-to-r from-white via-[#ffd8a8] to-[#F59E0B] bg-clip-text text-transparent">
                    Quantify Cyber Risk.
                  </span>
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                  NetCradus GRC automates compliance workflows and maps organization-wide risks in real time. Continuous audit readiness, cloud configurations checks, policy mapping, and vendor risk scores unified in one workbench.
                </p>

                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F59E0B] mb-4">
                    KEY CAPABILITIES:
                  </h4>

                  {/* Two-Column Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_LEFT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#F59E0B]/40">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_RIGHT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#F59E0B]/20 text-[#F59E0B] flex items-center justify-center shrink-0 border border-[#F59E0B]/40">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hero CTAs */}
                <div className="pt-4 flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-7 py-3.5 rounded-xl bg-[#F59E0B] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:bg-[#ffb02e] transition-all hover:scale-105 no-underline flex items-center gap-2"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#grc-console"
                    className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all no-underline"
                  >
                    View Interactive Console
                  </a>
                </div>

              </div>

              {/* Right Column: GRC Dashboard Visual Frame */}
              <div className="lg:col-span-6 w-full">
                <div className="relative rounded-2xl border border-white/15 bg-[#181106] p-3 shadow-2xl group">
                  {/* Browser top header */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#261b0a] rounded-xl border border-white/10 mb-3 text-xs text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[11px] text-gray-300 font-bold">
                      app.netcradus.com/grc-compliance-risk-maps
                    </span>
                    <span className="text-[10px] text-[#F59E0B] font-bold">GRC CONSOLE</span>
                  </div>

                  {/* Screenshot Image with Click-to-Zoom Lightbox */}
                  <div 
                    className="relative cursor-pointer overflow-hidden rounded-xl group/img"
                    onClick={() => setLightboxImage({ src: '/assets/acis-compliance-risk.png', alt: 'NetCradus GRC Compliance & Risk Audit Dashboard' })}
                  >
                    <img 
                      src="/assets/acis-compliance-risk.png" 
                      alt="NetCradus GRC Compliance & Risk Audit Dashboard" 
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-105"
                      onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                      <ExternalLink size={16} /> Click to Expand Compliance Map
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#161006]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F59E0B] mb-3 block">
              ENTERPRISE GOVERNANCE ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              GRC Platform Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Consolidate vulnerability scoring frameworks, audit tenant configs automatically, and capture audit evidence natively.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-[#181106] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F59E0B]/40 hover:bg-[#20170a] shadow-lg flex flex-col justify-between group"
                  style={{ borderColor: cap.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-md"
                         style={{ backgroundColor: cap.badgeBg, color: cap.color }}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F59E0B] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#F59E0B]">
                    <span>NETCRADUS GRC</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section id="grc-console" className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F59E0B] mb-3 block">
              COMPLIANCE DRIFT ANALYSIS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Real-Time Compliance Framework Mapping
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Verify how internal policies, asset vulnerabilities, and compliance drifts align with target standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#181106] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#F59E0B]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#20170a] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#3B82F6]" />
                    Audit Frameworks
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                    100% READY
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/acis-compliance-risk.png', alt: 'Dynamic Compliance Frameworks mapping' })}
                >
                  <img 
                    src="/assets/acis-compliance-risk.png" 
                    alt="Dynamic Compliance Frameworks mapping" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                    Automated Evidence Gathering
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Map tenant files, configuration trails, and user accesses directly to standard framework templates automatically.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#181106] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#F59E0B]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#20170a] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#7C3AED]" />
                    Asset Audits
                  </h3>
                  <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-bold">
                    SCANNING
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/grc-asset-scanning.png', alt: 'Continuous Asset Surface Scanning' })}
                >
                  <img 
                    src="/assets/grc-asset-scanning.png" 
                    alt="Continuous Asset Surface Scanning" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                    Continuous Asset Surface Scanning
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Map exposed network hosts, discover active APIs, check system vulnerabilities, and prioritize remediation workflows.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#181106] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#F59E0B]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#20170a] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
                    Risk Matrix
                  </h3>
                  <span className="text-[10px] font-mono bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">
                    UPDATED
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/grc-risk-maps.png', alt: 'Adversary Impact Risk Maps' })}
                >
                  <img 
                    src="/assets/grc-risk-maps.png" 
                    alt="Adversary Impact Risk Maps" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#F59E0B] transition-colors">
                    Adversary Impact Risk Maps
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Quantify threat impact and compute risk indices based on configurations severity metrics and server roles.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#161006]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F59E0B] mb-3 block">
              COMPLIANCE AUDIT SCALE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Governance &amp; Risk Statistics
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Verify continuous scans coverage, framework templates supported, and evidence collection automation rate.
            </p>
          </div>

          {/* 6 Live Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {LIVE_METRICS.map((metric, idx) => (
              <div key={idx} className="bg-[#181106] border border-white/10 rounded-xl p-4 text-center space-y-1 hover:border-[#F59E0B]/40 transition-colors">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                  {metric.label}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-white block" style={{ color: metric.color }}>
                  {metric.value}
                </span>
                <span className="text-[10px] font-semibold text-gray-300 block">
                  {metric.change}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F59E0B] mb-3 block">
              COMPLIANCE INTEGRATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              GRC Telemetry Connectors
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Connect GRC workflows natively with directory setups, ticket trackers, code repositories, and cloud logs pools.
            </p>
          </div>

          {/* 4 Large Connector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA_CONNECTORS.map((env, idx) => {
              const IconC = env.icon;
              return (
                <div key={idx} className="bg-[#181106] border border-white/10 rounded-2xl p-6 text-left space-y-4 hover:border-[#F59E0B]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                       style={{ backgroundColor: `${env.color}20`, color: env.color }}>
                    <IconC className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F59E0B] transition-colors">{env.name}</h3>
                    <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-white/15 inline-block mb-3 mt-1.5">
                      {env.badge}
                    </span>
                    <p className="text-xs text-gray-300 leading-relaxed mb-4">
                      {env.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 space-y-2">
                    {env.caps.map((c, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: env.color }} />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#181106] to-amber-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(245,158,11,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Streamline Your Cybersecurity Compliance and Risk Audits?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Dynamic asset vulnerability scanning, automated SOC 2/ISO evidence vaults, and vendor risk matrix calculators. Contact our compliance architects today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F59E0B] text-white font-bold text-sm shadow-lg shadow-[#F59E0B]/25 hover:bg-[#ffb02e] transition-all duration-300 no-underline"
            >
              Request a Free Quote
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox Modal */}
      <ImageLightbox
        src={lightboxImage?.src}
        alt={lightboxImage?.alt}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

    </div>
  );
}
