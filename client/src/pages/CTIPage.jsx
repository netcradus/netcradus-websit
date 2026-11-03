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
  Bug,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageLightbox from '../components/ImageLightbox';

const HERO_CAPABILITIES_LEFT = [
  "Global adversary profile mapping",
  "Real-time IOC ingestion feeds",
  "MITRE ATT&CK alignment",
  "STIX/TAXII threat intel pipeline",
  "Sandboxed payload analysis"
];

const HERO_CAPABILITIES_RIGHT = [
  "Swarm intelligence sharing",
  "High-confidence threat scoring",
  "Zero-day campaign discovery",
  "API sync with firewalls/EDR",
  "Malware reverse-engineering logs"
];

const CORE_CAPABILITIES = [
  {
    id: 1,
    title: "1. Threat Intelligence Ingest",
    desc: "Ingest and normalize threat feeds, IPs, domains, and file hashes from multi-source global intelligence repositories in real time.",
    icon: Database,
    color: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 2,
    title: "2. Adversary Tradecraft Profiles",
    desc: "Map active advanced persistent threats (APTs) and threat actor campaigns directly to standard MITRE ATT&CK tactics.",
    icon: Layers,
    color: "#7C3AED",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.3)"
  },
  {
    id: 3,
    title: "3. Malware Analysis Sandbox",
    desc: "Detonate suspicious payloads in a secure cloud sandbox to extract system alterations, C2 domains, and registry indicators.",
    icon: Bug,
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  },
  {
    id: 4,
    title: "4. Unified STIX/TAXII Pipelines",
    desc: "Exhaustively sync with external MISP networks and threat intelligence platforms using native standard JSON structures.",
    icon: Globe,
    color: "#3B82F6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 5,
    title: "5. Swarm Threat Correlation",
    desc: "Leverage global decentralized intelligence from NetCradus network nodes to discover campaign waves before they hit your stack.",
    icon: Activity,
    color: "#EC4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 6,
    title: "6. Security Tooling Synchronization",
    desc: "Instantly stream validated threat indicators directly into your active endpoints, SOAR playbooks, and perimeter firewalls.",
    icon: RefreshCw,
    color: "#EF4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 7,
    title: "7. Log Query Verification",
    desc: "Cross-reference historical log archives with new indicators of compromise to uncover past, undetected system intrusions.",
    icon: Search,
    color: "#8B5CF6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Threat Research Lifecycle",
    desc: "Maintain detailed documentation on active attack vertical profiles, phishing templates, and exploits targeting custom infrastructure.",
    icon: FileCheck,
    color: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  }
];

const DATA_CONNECTORS = [
  {
    name: "Global Open Source",
    desc: "Native sync pipelines mapping open source databases and security community IOC lists.",
    icon: Globe,
    color: "#3B82F6",
    badge: "Community Data",
    caps: ["MISP database Sync", "OTX AlienVault Feeds", "CISA Alert Streams", "OSINT Blog Extractors"]
  },
  {
    name: "Commercial Providers",
    desc: "Native integrations streaming commercial threat intel feeds and vulnerability archives.",
    icon: Shield,
    color: "#7C3AED",
    badge: "Commercial Feeds",
    caps: ["Domain Tools Sync", "VirusTotal API Ingest", "Adversary Actor Profiles", "Zero-Day Exploit Maps"]
  },
  {
    name: "NetCradus Swarm Intel",
    desc: "Decentralized indicators of compromise detected across the NetCradus global deployment base.",
    icon: Activity,
    color: "#FF6B00",
    badge: "Decentralized Swarm",
    caps: ["Zero-Day Attack Correlator", "Verified IOC Matches", "Network Access Anomaly", "Anomalous Login Spikes"]
  },
  {
    name: "External Threat Systems",
    desc: "Bidirectional pipelines linking commercial SIEM, SOAR, and EDR consoles.",
    icon: Server,
    color: "#10B981",
    badge: "API Pipelines",
    caps: ["CrowdStrike Falcon Sync", "SentinelOne Threat Ingest", "Splunk ES Lookup Tables", "Palo Alto Cortex Feeds"]
  }
];

const LIVE_METRICS = [
  { label: "Daily IOCs Normalized", value: "500,000+", change: "Threat Intel Shippers", color: "#10B981" },
  { label: "Active Swarm Nodes", value: "10,000+", change: "Decentralized Network", color: "#3B82F6" },
  { label: "Threat Actors Tracked", value: "150+", change: "Active APT Campaigns", color: "#7C3AED" },
  { label: "Malware Detonated / Day", value: "2,500+", change: "Sandbox Detonations", color: "#FF6B00" },
  { label: "Feed Ingestion Latency", value: "< 5s", change: "Sub-second Sync", color: "#EC4899" },
  { label: "Intel Ingest SLA", value: "99.99%", change: "High-Availability", color: "#F59E0B" }
];

export default function CTIPage() {
  usePageMeta(
    "NetCradus CTI | Cyber Threat Intelligence Platform",
    "Synchronize real-time threat intelligence feeds. Profile adversary tactics and reverse-engineer malicious payloads with NetCradus CTI."
  );

  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#05060A] text-white min-h-screen pt-20 pb-20 overflow-x-hidden font-sans">
      
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.14),transparent_65%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          <div className="bg-[#061410]/90 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Small Green Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/40 bg-[#10B981]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#10B981] shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                  <span className="h-2 w-2 rounded-full bg-[#10B981] animate-ping" />
                  THREAT INTELLIGENCE LIFECYCLE
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                  Expose Adversaries.<br />
                  <span className="bg-gradient-to-r from-white via-[#a8ffdd] to-[#10B981] bg-clip-text text-transparent">
                    Predict Threat Vectors.
                  </span>
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                  NetCradus CTI aggregates global threat feed intelligence, reverse-engineers suspicious malware binaries, and maps adversary tactics directly to the MITRE ATT&amp;CK framework to provide proactive enterprise defense.
                </p>

                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#10B981] mb-4">
                    KEY CAPABILITIES:
                  </h4>

                  {/* Two-Column Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_LEFT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 border border-[#10B981]/40">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_RIGHT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center shrink-0 border border-[#10B981]/40">
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
                    className="px-7 py-3.5 rounded-xl bg-[#10B981] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:bg-[#20d799] transition-all hover:scale-105 no-underline flex items-center gap-2"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#cti-console"
                    className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all no-underline"
                  >
                    View Interactive Console
                  </a>
                </div>

              </div>

              {/* Right Column: CTI Dashboard Visual Frame */}
              <div className="lg:col-span-6 w-full">
                <div className="relative rounded-2xl border border-white/15 bg-[#061410] p-3 shadow-2xl group">
                  {/* Browser top header */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#0a1f1a] rounded-xl border border-white/10 mb-3 text-xs text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[11px] text-gray-300 font-bold">
                      app.netcradus.com/cti-threat-intelligence
                    </span>
                    <span className="text-[10px] text-[#10B981] font-bold">CTI CONSOLE</span>
                  </div>

                  {/* Screenshot Image with Click-to-Zoom Lightbox */}
                  <div 
                    className="relative cursor-pointer overflow-hidden rounded-xl group/img"
                    onClick={() => setLightboxImage({ src: '/assets/acis-threat-intel.png', alt: 'NetCradus CTI Threat Intelligence Dashboard' })}
                  >
                    <img 
                      src="/assets/acis-threat-intel.png" 
                      alt="NetCradus CTI Threat Intelligence Dashboard" 
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-105"
                      onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                      <ExternalLink size={16} /> Click to Expand Threat Intelligence
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#061410]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] mb-3 block">
              ADVERSARY INTELLIGENCE DEFENSE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              CTI Platform Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Consolidate threat telemetry pipelines, reverse-engineer malware code structures, and protect endpoints with continuous synchronization loops.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-[#061410] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#10B981]/40 hover:bg-[#0a1e18] shadow-lg flex flex-col justify-between group"
                  style={{ borderColor: cap.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-md"
                         style={{ backgroundColor: cap.badgeBg, color: cap.color }}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#10B981] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#10B981]">
                    <span>NETCRADUS CTI</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section id="cti-console" className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] mb-3 block">
              CONSOLE PREVIEW
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Real-Time Adversary Research &amp; IOC Matching
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Query global campaign matrices, scan for indicators of compromise, and analyze sandbox payloads.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#061410] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#10B981]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#0a1e18] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-[#3B82F6]" />
                    IOC Normalization
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                    99.99% UP
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/cti-ioc-extraction.png', alt: 'IOC Extraction & Matching' })}
                >
                  <img 
                    src="/assets/cti-ioc-extraction.png" 
                    alt="IOC Extraction & Matching" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#10B981] transition-colors">
                    IOC Extraction &amp; Matching
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Search and query raw security data points, filter audit trails, and archive logs with enterprise query performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#061410] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#10B981]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#0a1e18] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#7C3AED]" />
                    Adversary Profiles
                  </h3>
                  <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-bold">
                    MITRE MAP
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/cti-tactics-maps.png', alt: 'Tactics & Campaign Maps' })}
                >
                  <img 
                    src="/assets/cti-tactics-maps.png" 
                    alt="Tactics & Campaign Maps" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#10B981] transition-colors">
                    Tactics &amp; Campaign Maps
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Automatically match logs against MITRE ATT&amp;CK behavior definitions, patterns, and indicators of compromise.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#061410] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#10B981]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#0a1e18] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Bug className="w-4 h-4 text-[#FF6B00]" />
                    Malware Sandbox
                  </h3>
                  <span className="text-[10px] font-mono bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">
                    SANDBOX
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/cti-payload-detonation.png', alt: 'Payload Behavior Detonation' })}
                >
                  <img 
                    src="/assets/cti-payload-detonation.png" 
                    alt="Payload Behavior Detonation" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#10B981] transition-colors">
                    Payload Behavior Detonation
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

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#061410]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] mb-3 block">
              ADVERSARY RESEARCH METRICS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Threat Intelligence Statistics
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Track real-time ingest statistics, active threat actor groups profiled, and average sync latency metrics.
            </p>
          </div>

          {/* 6 Live Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {LIVE_METRICS.map((metric, idx) => (
              <div key={idx} className="bg-[#061410] border border-white/10 rounded-xl p-4 text-center space-y-1 hover:border-[#10B981]/40 transition-colors">
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
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#10B981] mb-3 block">
              THREAT INTELLIGENCE SYNC
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              CTI Threat Feed Pipelines
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Synchronize threat intelligence natively with global providers, MISP community feeds, and active security consoles.
            </p>
          </div>

          {/* 4 Large Connector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA_CONNECTORS.map((env, idx) => {
              const IconC = env.icon;
              return (
                <div key={idx} className="bg-[#061410] border border-white/10 rounded-2xl p-6 text-left space-y-4 hover:border-[#10B981]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                       style={{ backgroundColor: `${env.color}20`, color: env.color }}>
                    <IconC className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors">{env.name}</h3>
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

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#061410] to-[#0a1e18]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Protect Your Infrastructure with Proactive Intelligence?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Aggregated threat actor matrices, STIX/TAXII pipelines, sandboxing tools, and threat feed integrations. Contact our threat analysts today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#10B981] text-white font-bold text-sm shadow-lg shadow-[#10B981]/25 hover:bg-[#20d799] transition-all duration-300 no-underline"
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
