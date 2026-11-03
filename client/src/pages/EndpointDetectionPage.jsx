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
  Download, 
  ExternalLink,
  Layers,
  Lock,
  Terminal,
  FileCheck,
  Eye,
  AlertTriangle,
  Server,
  Smartphone,
  HardDrive,
  RefreshCw,
  Sliders,
  Radio,
  BarChart3,
  ShieldCheck,
  Building2,
  Check
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageLightbox from '../components/ImageLightbox';

const HERO_CAPABILITIES_LEFT = [
  "Real-time endpoint protection",
  "Process & behavior monitoring",
  "Malware detection",
  "File integrity monitoring",
  "Endpoint vulnerability assessment"
];

const HERO_CAPABILITIES_RIGHT = [
  "Application & device control",
  "Suspicious activity detection",
  "Endpoint isolation",
  "Automated remediation",
  "Endpoint telemetry collection"
];

const CORE_CAPABILITIES = [
  {
    id: 1,
    title: "1. Real-Time Protection",
    desc: "Continuous endpoint telemetry auditing, kernel-level hook monitoring, and instantaneous threat prevention across all hosts.",
    icon: Shield,
    color: "#7C3AED",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.3)"
  },
  {
    id: 2,
    title: "2. Malware Detection",
    desc: "Detect known signatures, polymorphous malware, and zero-day execution vectors using behavioral machine learning models.",
    icon: BugIcon,
    color: "#EF4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 3,
    title: "3. Behavioral Detection",
    desc: "Identify suspicious process chains, parent-child process anomalies, memory injection attempts, and unauthorized PowerShell calls.",
    icon: Activity,
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  },
  {
    id: 4,
    title: "4. Vulnerability Assessment",
    desc: "Continuously scan installed software packages, OS patch levels, and misconfigured security settings across the fleet.",
    icon: AlertTriangle,
    color: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 5,
    title: "5. File Integrity Monitoring",
    desc: "Audit critical system files, SAM registry hives, and DLL libraries for unauthorized modifications or stealthy persistence.",
    icon: FileCheck,
    color: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 6,
    title: "6. Device Control",
    desc: "Enforce strict peripheral access policies for USB drives, external storage devices, and unauthorized network adapters.",
    icon: Sliders,
    color: "#3B82F6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 7,
    title: "7. Endpoint Isolation",
    desc: "Instantly sever network communication for compromised endpoints with a single click or automated response policy.",
    icon: Lock,
    color: "#EC4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 8,
    title: "8. Automated Remediation",
    desc: "Roll back ransomware modifications, purge malicious registry keys, and restore original clean file states automatically.",
    icon: RefreshCw,
    color: "#8B5CF6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  }
];

// Helper bug icon wrapper
function BugIcon(props) {
  return <Search {...props} />;
}

const HUNTING_FEATURES = [
  {
    title: "Behavioral Detection",
    desc: "Analyze memory allocations, process thread injection, and token impersonation to catch fileless stealth attacks.",
    icon: Cpu
  },
  {
    title: "IOC Matching",
    desc: "Query live system activity against global threat feeds, YARA rules, and domain blacklists in real time.",
    icon: Search
  },
  {
    title: "MITRE ATT&CK Mapping",
    desc: "Automatically align detected endpoint events to MITRE tactics, techniques, and sub-techniques.",
    icon: Layers
  },
  {
    title: "Advanced Threat Hunting Engine",
    desc: "SQL-like telemetry query builder for SOC analysts to execute historical searches across millions of log lines.",
    icon: Radar
  }
];

const ISOLATION_FEATURES = [
  {
    title: "Automated Device Isolation",
    desc: "Cut off external and internal network connectivity while preserving encrypted SOC telemetry access.",
    icon: Lock
  },
  {
    title: "Process Termination",
    desc: "Instantly kill malicious child processes, script runtimes, and suspicious memory threads in <100ms.",
    icon: Zap
  },
  {
    title: "File Quarantine",
    desc: "Automatically isolate suspicious executables, payload scripts, and suspicious DLLs into a secure vault.",
    icon: HardDrive
  },
  {
    title: "Network Containment",
    desc: "Block malicious outbound C2 IP addresses and invalidate compromised Active Directory Kerberos tokens.",
    icon: Radio
  },
  {
    title: "Forensic Incident Response",
    desc: "Generate full timeline forensic artifacts, process trees, and root-cause breakdown reports automatically.",
    icon: FileCheck
  },
  {
    title: "Automated Remediation",
    desc: "Clean malicious persistence mechanisms, system services, and scheduled tasks without re-imaging the host.",
    icon: RefreshCw
  }
];

const LIVE_METRICS = [
  { label: "Endpoints Protected", value: "24,500+", change: "+12% this month", color: "#7C3AED" },
  { label: "Active Agents", value: "99.98%", change: "Healthy Heartbeat", color: "#10B981" },
  { label: "Threats Blocked (24h)", value: "1,420", change: "Sub-Second Containment", color: "#FF6B00" },
  { label: "High-Risk Hosts", value: "03", change: "Action Required", color: "#EF4444" },
  { label: "Isolated Systems", value: "01", change: "Quarantined", color: "#EC4899" },
  { label: "Vulnerabilities Patched", value: "8,940", change: "Continuous Assessment", color: "#3B82F6" }
];

const PLATFORM_ENVIRONMENTS = [
  {
    name: "Windows",
    desc: "Windows 10/11 Workstations & Windows Server 2016-2025.",
    icon: Monitor,
    color: "#3B82F6",
    badge: "EPP + EDR + NGAV",
    caps: ["Memory Injection Guard", "Anti-Ransomware Shield", "ETW Event Audit", "Registry File Lock"]
  },
  {
    name: "Linux Servers",
    desc: "Enterprise Linux distributions (RHEL, Ubuntu, Debian, CentOS, AlmaLinux).",
    icon: Terminal,
    color: "#FF6B00",
    badge: "Kernel eBPF Audit",
    caps: ["eBPF System Call Audit", "SSH Brute-Force Shield", "Container Runtime Defense", "Rootkit Prevention"]
  },
  {
    name: "macOS",
    desc: "macOS Ventura, Sonoma & Sequoia running Apple Silicon or Intel.",
    icon: Server,
    color: "#10B981",
    badge: "System Extension Agent",
    caps: ["Endpoint Security Framework", "Gatekeeper Enforcement", "XProtect Log Sync", "File Integrity Monitor"]
  },
  {
    name: "Cloud & IoT",
    desc: "AWS EC2, Azure VMs, GCP Compute, Kubernetes Nodes & OT Gateways.",
    icon: Layers,
    color: "#8B5CF6",
    badge: "Container Telemetry",
    caps: ["Kubernetes Pod Isolation", "Virtual Machine Guard", "OT Sensor Telemetry", "Multi-Cloud Workload Shield"]
  }
];

export default function EndpointDetectionPage() {
  usePageMeta({
    title: "NetCradus Endpoint Detection — Enterprise Endpoint Security & Threat Hunting",
    description: "NetCradus XDR protects endpoints across your entire digital environment, including Windows, Linux, macOS, servers, laptops, workstations, cloud workloads, and IoT devices."
  });

  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#05060A] text-white min-h-screen pt-20 pb-20 overflow-x-hidden font-sans">
      
      {/* SCROLL 1: SECTION 1 — HERO                                               */}
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(255,107,0,0.14),transparent_65%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          <div className="bg-[#0e0719]/90 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Heading, Subtitle & 2-Column Capability Checklist */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Small Orange Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/40 bg-[#FF6B00]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.25)]">
                  <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-ping" />
                  ENDPOINT SECURITY
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                  Protect Every <span className="bg-gradient-to-r from-white via-[#ff8ad8] to-[#FF6B00] bg-clip-text text-transparent">Endpoint.</span>
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                  NetCradus XDR protects endpoints across your entire digital environment, including Windows, Linux, macOS, servers, laptops, workstations, cloud workloads, and IoT devices.
                </p>

                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#FF6B00] mb-4">
                    KEY CAPABILITIES:
                  </h4>

                  {/* Two-Column Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_LEFT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center shrink-0 border border-[#FF6B00]/40">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_RIGHT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] flex items-center justify-center shrink-0 border border-[#FF6B00]/40">
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
                    className="px-7 py-3.5 rounded-xl bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(255,107,0,0.4)] hover:bg-[#ff7b1a] transition-all hover:scale-105 no-underline flex items-center gap-2"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#live-telemetry"
                    className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all no-underline"
                  >
                    View Live Console
                  </a>
                </div>

              </div>

              {/* Right Column: NetCradus Endpoint Dashboard Visual Frame */}
              <div className="lg:col-span-6 w-full">
                <div className="relative rounded-2xl border border-white/15 bg-[#0b0515] p-3 shadow-2xl group">
                  {/* Browser top header */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#140b26] rounded-xl border border-white/10 mb-3 text-xs text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[11px] text-gray-300 font-bold">
                      app.netcradus.com/xdr-endpoints-management
                    </span>
                    <span className="text-[10px] text-[#FF6B00] font-bold">NETCRADUS CONSOLE</span>
                  </div>

                  {/* Screenshot Image with Click-to-Zoom Lightbox */}
                  <div 
                    className="relative cursor-pointer overflow-hidden rounded-xl group/img"
                    onClick={() => setLightboxImage({ src: '/assets/netxdr-endpoints-management.png', alt: 'NetCradus Endpoint Security Dashboard' })}
                  >
                    <img 
                      src="/assets/netxdr-endpoints-management.png" 
                      alt="NetCradus Endpoint Security Dashboard" 
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-105"
                      onError={(e) => { e.currentTarget.src = "/assets/acis-soc-dashboard.png"; }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                      <ExternalLink size={16} /> Click to Expand NetCradus Dashboard
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SCROLL 2: SECTION 2 — ENDPOINT PROTECTION CAPABILITIES                   */}
      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#07040f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] mb-3 block">
              COMPREHENSIVE ENDPOINT DEFENSE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Enterprise Endpoint Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Complete, end-to-end protection for every host across your organization, preventing ransomware, fileless exploits, and lateral movement.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-[#0e0719] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#FF6B00]/40 hover:bg-[#140b24] shadow-lg flex flex-col justify-between group"
                  style={{ borderColor: cap.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-md"
                         style={{ backgroundColor: cap.badgeBg, color: cap.color }}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF6B00] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#FF6B00]">
                    <span>NETCRADUS EPP</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SCROLL 3: SECTION 3 — LIVE TELEMETRY & CONSOLE                          */}
      <section id="live-telemetry" className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] mb-3 block">
              LIVE TELEMETRY &amp; CONSOLE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Centralized Host Visibility &amp; Threat Isolation
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Inspect real-time process execution logs, active agent health scores, endpoint telemetry, and threat hunting indicators from a centralized security console.
            </p>
          </div>

          {/* 3 Large Visual Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#0e0719] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#150b26] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-[#FF6B00]" />
                    Endpoint Telemetry Agent
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                    ACTIVE
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/netxdr-endpoints-management.png', alt: 'Endpoint Telemetry Agent' })}
                >
                  <img 
                    src="/assets/netxdr-endpoints-management.png" 
                    alt="Endpoint Telemetry Agent" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/assets/acis-soc-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                    Windows &amp; Linux Process Telemetry
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Real-time monitoring of process lineage, ETW events, memory modifications, file activity, and network connections.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0e0719] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#150b26] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#7C3AED]" />
                    Threat Hunting &amp; IOC Matching
                  </h3>
                  <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-bold">
                    LIVE STREAM
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/netxdr-threat-hunting-ioc.png', alt: 'Threat Hunting & IOC Matching' })}
                >
                  <img 
                    src="/assets/netxdr-threat-hunting-ioc.png" 
                    alt="Threat Hunting & IOC Matching" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/assets/acis-threat-detection-engine.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                    Adversary TTP &amp; Hash Search
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Search endpoint behavior against global indicators, YARA rules, MITRE ATT&amp;CK techniques, and threat intelligence feeds.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0e0719] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#150b26] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#EC4899]" />
                    Real-Time Containment Engine
                  </h3>
                  <span className="text-[10px] font-mono bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded font-bold">
                    SUB-SECOND
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/netxdr-realtime-detections.png', alt: 'Real-Time Containment Engine' })}
                >
                  <img 
                    src="/assets/netxdr-realtime-detections.png" 
                    alt="Real-Time Containment Engine" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/assets/acis-alerts.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#FF6B00] transition-colors">
                    Automated Device Isolation
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Automatically detect suspicious activity and trigger containment workflows when high-risk behavior is identified.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SCROLL 4: SECTION 4 — THREAT HUNTING & DETECTION                          */}
      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#07040f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] block">
                PROACTIVE DEFENSE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Proactive Threat Hunting
              </h2>
              <h3 className="text-lg font-bold text-[#FF6B00]">
                Find threats before they become incidents.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                NetCradus continuously analyzes endpoint telemetry, process behavior, network activity, file changes, and suspicious execution patterns to uncover stealthy adversaries.
              </p>

              {/* 4 Feature Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {HUNTING_FEATURES.map((feat, idx) => {
                  const IconC = feat.icon;
                  return (
                    <div key={idx} className="bg-[#0e0719] border border-white/10 rounded-xl p-4 space-y-2 hover:border-[#FF6B00]/40 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/15 text-[#FF6B00] flex items-center justify-center">
                        <IconC className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                      <p className="text-xs text-gray-300 leading-relaxed">{feat.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Visual Screenshot */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-2xl border border-white/15 bg-[#0b0515] p-3 shadow-2xl group">
                <div className="flex items-center justify-between px-3 py-2 bg-[#140b26] rounded-xl border border-white/10 mb-3 text-xs text-gray-300 font-mono">
                  <span className="font-bold text-[#FF6B00]">THREAT HUNTING ENGINE</span>
                  <span>MITRE ATT&amp;CK RETROSPECTION</span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden rounded-xl group/img"
                  onClick={() => setLightboxImage({ src: '/assets/netxdr-threat-hunting-ioc.png', alt: 'Proactive Threat Hunting Workbench' })}
                >
                  <img 
                    src="/assets/netxdr-threat-hunting-ioc.png" 
                    alt="Proactive Threat Hunting Workbench" 
                    className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-105"
                    onError={(e) => { e.currentTarget.src = "/assets/acis-threat-detection-engine.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Threat Hunting Console
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SCROLL 5: SECTION 5 — AUTOMATED RESPONSE & ISOLATION                      */}
      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] mb-3 block">
              AUTOMATED RESPONSE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Contain Threats Before They Spread.
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              When malicious activity is detected, NetCradus can automatically isolate affected endpoints, terminate malicious processes, quarantine files, and initiate remediation workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Visual: Detections & Isolation Interface */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-2xl border border-white/15 bg-[#0b0515] p-3 shadow-2xl group">
                <div className="flex items-center justify-between px-3 py-2 bg-[#140b26] rounded-xl border border-white/10 mb-3 text-xs text-gray-300 font-mono">
                  <span className="font-bold text-pink-400">AUTOMATED ISOLATION PLAYBOOK</span>
                  <span className="text-emerald-400 font-bold">EXECUTED</span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden rounded-xl group/img"
                  onClick={() => setLightboxImage({ src: '/assets/netxdr-realtime-detections.png', alt: 'Automated Device Isolation Console' })}
                >
                  <img 
                    src="/assets/netxdr-realtime-detections.png" 
                    alt="Automated Device Isolation Console" 
                    className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-105"
                    onError={(e) => { e.currentTarget.src = "/assets/acis-alerts.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Isolation Console
                  </div>
                </div>
              </div>
            </div>

            {/* Right: 6 Isolation Feature Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ISOLATION_FEATURES.map((feat, idx) => {
                const IconC = feat.icon;
                return (
                  <div key={idx} className="bg-[#0e0719] border border-white/10 rounded-xl p-5 text-left space-y-2 hover:border-[#FF6B00]/40 transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-pink-500/15 text-pink-400 flex items-center justify-center">
                      <IconC className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{feat.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SCROLL 6: SECTION 6 — ENDPOINT INTELLIGENCE & VISIBILITY                   */}
      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#07040f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] mb-3 block">
              ENTERPRISE TELEMETRY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Complete Endpoint Intelligence.
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Get complete visibility into endpoint health, users, processes, applications, network connections, vulnerabilities, and security events.
            </p>
          </div>

          {/* 6 Live Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {LIVE_METRICS.map((metric, idx) => (
              <div key={idx} className="bg-[#0e0719] border border-white/10 rounded-xl p-4 text-center space-y-1 hover:border-[#FF6B00]/40 transition-colors">
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

          {/* CYRIX Platform Dashboard Screenshot Visual */}
          <div className="w-full">
            <div className="relative rounded-2xl border border-white/15 bg-[#0b0515] p-3 shadow-2xl group">
              <div className="flex items-center justify-between px-3 py-2 bg-[#140b26] rounded-xl border border-white/10 mb-3 text-xs text-gray-300 font-mono">
                <span className="font-bold text-[#FF6B00]">CYRIX CYBER DEFENSE PLATFORM DASHBOARD</span>
                <span>REAL-TIME TELEMETRY AUDIT</span>
              </div>
              <div 
                className="relative cursor-pointer overflow-hidden rounded-xl group/img"
                onClick={() => setLightboxImage({ src: '/assets/cyrix-dashboard.png', alt: 'CYRIX Cyber Defense Platform Dashboard' })}
              >
                <img 
                  src="/assets/cyrix-dashboard.png" 
                  alt="CYRIX Cyber Defense Platform Dashboard" 
                  className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-[1.02]"
                  onError={(e) => { e.currentTarget.src = "/img/cyrix-dashboard.png"; }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                  <ExternalLink size={16} /> Click to Expand CYRIX Platform Dashboard
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SCROLL 7: SECTION 7 — PLATFORM COVERAGE                                  */}
      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] mb-3 block">
              CROSS-PLATFORM DEFENSE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Protect Every Environment.
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Lightweight, high-performance agent architecture built for heterogeneous enterprise environments.
            </p>
          </div>

          {/* 4 Large Platform Environment Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PLATFORM_ENVIRONMENTS.map((env, idx) => {
              const IconC = env.icon;
              return (
                <div key={idx} className="bg-[#0e0719] border border-white/10 rounded-2xl p-6 text-left space-y-4 hover:border-[#FF6B00]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                       style={{ backgroundColor: `${env.color}20`, color: env.color }}>
                    <IconC className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#FF6B00] transition-colors">{env.name}</h3>
                    </div>
                    <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-0.5 rounded border border-white/15 inline-block mb-3">
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

      {/* SCROLL 8: SECTION 8 — FINAL CTA                                          */}
      <section className="py-20 lg:py-28 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.18),transparent_70%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="bg-[#0e0719] border border-[#FF6B00]/30 rounded-3xl p-10 sm:p-16 text-center max-w-4xl mx-auto shadow-[0_20px_80px_rgba(255,107,0,0.2)]">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#FF6B00] mb-4 block">
              UNIFIED CYBER IMMUNITY
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              Secure Every Endpoint With NetCradus.
            </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Unify endpoint protection, threat hunting, detection, and automated response in one intelligent security platform.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="px-9 py-4 rounded-xl bg-[#FF6B00] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_35px_rgba(255,107,0,0.45)] hover:bg-[#ff7b1a] transition-all hover:scale-105 no-underline flex items-center gap-2"
              >
                <span>REQUEST A DEMO</span>
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/platform"
                className="px-9 py-4 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all no-underline"
              >
                EXPLORE PLATFORM
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <ImageLightbox
        src={lightboxImage?.src}
        alt={lightboxImage?.alt}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />

    </div>
  );
}
