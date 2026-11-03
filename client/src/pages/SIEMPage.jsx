import React, { useState, useEffect } from 'react';
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
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageLightbox from '../components/ImageLightbox';

const HERO_CAPABILITIES_LEFT = [
  "High-throughput log ingestion",
  "AI noise filtering & deduplication",
  "Event correlation engine",
  "MITRE ATT&CK mapping",
  "Log retention & archiving"
];

const HERO_CAPABILITIES_RIGHT = [
  "Multi-cloud telemetry pipelines",
  "Real-time threat alerting",
  "SQL-like fast query builder",
  "Compliance report generation",
  "User Behavior Analytics (UEBA)"
];

const CORE_CAPABILITIES = [
  {
    id: 1,
    title: "1. Log Ingestion & Storage",
    desc: "Ingest, index, and archive millions of security event logs per second with zero-loss pipelines across on-premises and multi-cloud environments.",
    icon: Database,
    color: "#3B82F6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 2,
    title: "2. Intelligent Event Correlation",
    desc: "Automatically correlate isolated events across endpoints, cloud trails, identities, and network configurations to expose active campaigns.",
    icon: Activity,
    color: "#7C3AED",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.3)"
  },
  {
    id: 3,
    title: "3. AI-Powered Noise Reduction",
    desc: "Filter out background system noise, benign alerts, and repeated logs to let your security team focus on actual indicators of compromise.",
    icon: Cpu,
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  },
  {
    id: 4,
    title: "4. MITRE ATT&CK Mapping",
    desc: "Align incoming alerts and correlated threats directly to standard adversary tactics, techniques, and sub-techniques automatically.",
    icon: Layers,
    color: "#EC4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 5,
    title: "5. Real-Time Security Alerts",
    desc: "Generate alerts on high-risk correlation triggers instantly, firing sub-second notifications to incident response Slack channels or webhooks.",
    icon: Zap,
    color: "#EF4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 6,
    title: "6. User Behavior Analytics (UEBA)",
    desc: "Baseline normal user actions and flag credential abuse, unauthorized access times, anomalous logins, and data exfiltration spikes.",
    icon: Shield,
    color: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 7,
    title: "7. Fast Query Explorer",
    desc: "Search, filter, and inspect historical raw log data with a high-performance query builder optimized for large-scale security investigations.",
    icon: Search,
    color: "#8B5CF6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Continuous Compliance Audit",
    desc: "Run continuous audits and generate instant reports mapping to ISO 27001, SOC 2, HIPAA, GDPR, and PCI-DSS requirements.",
    icon: FileCheck,
    color: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  }
];

const DATA_CONNECTORS = [
  {
    name: "Cloud Infrastructure",
    desc: "Native API connectors for AWS CloudTrail, Azure Monitor, and GCP Cloud Logging.",
    icon: Layers,
    color: "#3B82F6",
    badge: "Cloud-Native Integration",
    caps: ["IAM Identity Audits", "VPC Flow Log Ingestion", "Storage Bucket Access Logs", "Serverless Metrics Sync"]
  },
  {
    name: "Security Products",
    desc: "Ingest alerts and telemetry from Next-Gen Firewalls, EDR/XDR agents, and Web Application Firewalls.",
    icon: Shield,
    color: "#7C3AED",
    badge: "API Integrations",
    caps: ["EDR Threat Alerts Ingestion", "Firewall Access Logs", "WAF Block Action Sync", "Email Gateway Logs"]
  },
  {
    name: "Operating Systems",
    desc: "High-performance shippers collecting Event Logs, Syslog streams, and kernel auditing records.",
    icon: Terminal,
    color: "#FF6B00",
    badge: "Agent & Agentless",
    caps: ["Windows Security Logs", "Linux Auth & Syslogs", "macOS Unified Auditing", "SSH Session Events"]
  },
  {
    name: "Identity & Core Apps",
    desc: "Track authentications, credential usage, and application metrics directly from cloud services.",
    icon: Server,
    color: "#10B981",
    badge: "Application Layer",
    caps: ["Active Directory Audits", "Okta & Identity logs", "Office 365 Audit Streams", "Google Workspace Logs"]
  }
];

const LIVE_METRICS = [
  { label: "Data Ingest SLA", value: "99.99%", change: "High-Availability", color: "#10B981" },
  { label: "Logs Ingested / Sec", value: "250,000+", change: "Scalable Data Pipeline", color: "#3B82F6" },
  { label: "Alert Deduplication", value: "98.4%", change: "Noise Reduction Engine", color: "#7C3AED" },
  { label: "Average Query Latency", value: "< 1.2s", change: "Fast Telemetry Search", color: "#FF6B00" },
  { label: "Correlated Alerts / Day", value: "850+", change: "AI Pattern Scanned", color: "#EC4899" },
  { label: "Data Retention Range", value: "365 days", change: "Hot/Cold Tier Storage", color: "#F59E0B" }
];

export default function SIEMPage() {
  usePageMeta(
    "NetCradus SIEM | Autonomous Log Management & Threat Detection",
    "NetCradus SIEM delivers high-speed log ingestion, automated event correlation, and AI-driven SIEM analytics across enterprise environments."
  );

  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#05060A] text-white min-h-screen pt-20 pb-20 overflow-x-hidden font-sans">
      
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.14),transparent_65%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          <div className="bg-[#0b0c16]/90 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Subtitle & 2-Column Capability Checklist */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Small Blue Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/40 bg-[#3B82F6]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#3B82F6] shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                  <span className="h-2 w-2 rounded-full bg-[#3B82F6] animate-ping" />
                  LOG MANAGEMENT &amp; THREAT CORRELATION
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                  Centralize Logs.<br />
                  <span className="bg-gradient-to-r from-white via-[#8fbbfd] to-[#3B82F6] bg-clip-text text-transparent">
                    Expose Hidden Threats.
                  </span>
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                  NetCradus SIEM aggregates, correlates, and analyzes security logs from cloud providers, network firewalls, endpoint systems, and business services to give you real-time visibility and threat detection.
                </p>

                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#3B82F6] mb-4">
                    KEY CAPABILITIES:
                  </h4>

                  {/* Two-Column Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_LEFT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center shrink-0 border border-[#3B82F6]/40">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_RIGHT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#3B82F6]/20 text-[#3B82F6] flex items-center justify-center shrink-0 border border-[#3B82F6]/40">
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
                    className="px-7 py-3.5 rounded-xl bg-[#3B82F6] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:bg-[#4b91ff] transition-all hover:scale-105 no-underline flex items-center gap-2"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#siem-console"
                    className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all no-underline"
                  >
                    View Interactive Console
                  </a>
                </div>

              </div>

              {/* Right Column: SIEM Dashboard Visual Frame */}
              <div className="lg:col-span-6 w-full">
                <div className="relative rounded-2xl border border-white/15 bg-[#080a13] p-3 shadow-2xl group">
                  {/* Browser top header */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#0e1122] rounded-xl border border-white/10 mb-3 text-xs text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[11px] text-gray-300 font-bold">
                      app.netcradus.com/siem-security-operations
                    </span>
                    <span className="text-[10px] text-[#3B82F6] font-bold">SIEM CONSOLE</span>
                  </div>

                  {/* Screenshot Image with Click-to-Zoom Lightbox */}
                  <div 
                    className="relative cursor-pointer overflow-hidden rounded-xl group/img"
                    onClick={() => setLightboxImage({ src: '/img/siem-dashboard.png', alt: 'NetCradus SIEM Dashboard Telemetry' })}
                  >
                    <img 
                      src="/img/siem-dashboard.png" 
                      alt="NetCradus SIEM Dashboard Telemetry" 
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-105"
                      onError={(e) => { e.currentTarget.src = "/assets/acis-soc-dashboard.png"; }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                      <ExternalLink size={16} /> Click to Expand SIEM Dashboard
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#070914]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#3B82F6] mb-3 block">
              ENTERPRISE SECURITY INTELLIGENCE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              SIEM Engine Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Achieve comprehensive, enterprise-wide security log management, threat correlation, and behavior monitoring to detect active compromise attempts in real-time.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-[#0a0d1a] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#3B82F6]/40 hover:bg-[#0e1226] shadow-lg flex flex-col justify-between group"
                  style={{ borderColor: cap.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-md"
                         style={{ backgroundColor: cap.badgeBg, color: cap.color }}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3B82F6] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#3B82F6]">
                    <span>NETCRADUS SIEM</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section id="siem-console" className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#3B82F6] mb-3 block">
              CONSOLE PREVIEW
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Real-Time Log Search &amp; Incident Analytics
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Explore how security telemetry is ingested, prioritized, and analyzed inside our high-performance cloud SIEM platform.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#0a0d1a] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#3B82F6]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#0e1226] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#3B82F6]" />
                    Data Ingest Pipeline
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                    99.99% UP
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/acis-log-explorer.png', alt: 'High-Speed Ingestion & Log Explorer' })}
                >
                  <img 
                    src="/assets/acis-log-explorer.png" 
                    alt="High-Speed Ingestion & Log Explorer" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                    Log Explorer &amp; SQL Query Workspace
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Search and query raw security data points, filter audit trails, and archive logs with enterprise query performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0d1a] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#3B82F6]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#0e1226] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Activity className="w-4 h-4 text-[#7C3AED]" />
                    Correlation Engine
                  </h3>
                  <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-bold">
                    AI POWERED
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/acis-threat-detection-engine.png', alt: 'Swarm Event Correlation Engine' })}
                >
                  <img 
                    src="/assets/acis-threat-detection-engine.png" 
                    alt="Swarm Event Correlation Engine" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                    Adversary Tradecraft Detection
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Automatically match logs against MITRE ATT&amp;CK behavior definitions, patterns, and indicators of compromise.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0a0d1a] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#3B82F6]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#0e1226] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#EF4444]" />
                    Real-Time Alert Triage
                  </h3>
                  <span className="text-[10px] font-mono bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">
                    SUB-SECOND
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/acis-alerts.png', alt: 'Real-Time Alert Triage Console' })}
                >
                  <img 
                    src="/assets/acis-alerts.png" 
                    alt="Real-Time Alert Triage Console" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                    Deduplicated Alert Prioritization
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Aggregate raw warnings into high-fidelity incidents with risk ratings and visual severity badges.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#070914]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#3B82F6] mb-3 block">
              PERFORMANCE &amp; SCALE METRICS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ingestion &amp; Performance Statistics
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Track standard ingest capabilities, pattern scan telemetry, and average search querying times inside NetCradus SIEM.
            </p>
          </div>

          {/* 6 Live Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {LIVE_METRICS.map((metric, idx) => (
              <div key={idx} className="bg-[#0a0d1a] border border-white/10 rounded-xl p-4 text-center space-y-1 hover:border-[#3B82F6]/40 transition-colors">
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
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#3B82F6] mb-3 block">
              TELEMETRY CONNECTOR DATA
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Data Ingestion Connectors
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Ingest telemetry feeds and logs securely from your entire operating stack using native connectors.
            </p>
          </div>

          {/* 4 Large Connector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA_CONNECTORS.map((env, idx) => {
              const IconC = env.icon;
              return (
                <div key={idx} className="bg-[#0a0d1a] border border-white/10 rounded-2xl p-6 text-left space-y-4 hover:border-[#3B82F6]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                       style={{ backgroundColor: `${env.color}20`, color: env.color }}>
                    <IconC className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#3B82F6] transition-colors">{env.name}</h3>
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

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0a0d1a] to-blue-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Centralize Your Security Intelligence?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Aggregated metrics, sub-second query alerts, and data correlation algorithms mapped to standard MITRE frameworks. Contact our cybersecurity architects today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#3B82F6] text-white font-bold text-sm shadow-lg shadow-[#3B82F6]/25 hover:bg-[#4d97ff] transition-all duration-300 no-underline"
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
