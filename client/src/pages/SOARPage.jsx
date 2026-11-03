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
  Check,
  Key
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageLightbox from '../components/ImageLightbox';

const HERO_CAPABILITIES_LEFT = [
  "Drag-and-drop playbook builder",
  "Sub-second endpoint isolation",
  "Case management & auditing",
  "Orchestrate 100+ security APIs",
  "Bidirectional ticketing sync"
];

const HERO_CAPABILITIES_RIGHT = [
  "Pre-approved containment policy",
  "Automated email triage",
  "Sandbox detonation pipelines",
  "Collaborative SOC case rooms",
  "Posture drift remediation"
];

const CORE_CAPABILITIES = [
  {
    id: 1,
    title: "1. Playbook Orchestration",
    desc: "Design and execute multi-step automated response workflows across endpoints, clouds, firewalls, and directory servers.",
    icon: Sliders,
    color: "#EC4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 2,
    title: "2. Drag-and-Drop Builder",
    desc: "Build complex response logic visually with conditionals, approval steps, variable passing, and custom API actions.",
    icon: Layers,
    color: "#7C3AED",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.3)"
  },
  {
    id: 3,
    title: "3. Sub-Second Containment",
    desc: "Automatically isolate compromised endpoints, sever C2 connections, and terminate malicious system threads in real time.",
    icon: Lock,
    color: "#EF4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 4,
    title: "4. Collaborative Case Room",
    desc: "Investigate critical threats with your team in a secure war room with live chat, log sharing, and forensic attachments.",
    icon: Server,
    color: "#3B82F6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 5,
    title: "5. Active Directory Hardening",
    desc: "Revoke compromised AD user sessions, reset passwords, and lock Kerberos tokens automatically upon active compromise.",
    icon: Shield,
    color: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 6,
    title: "6. Case Management",
    desc: "Track incident stages, document response timelines, assign owners, and generate automated post-incident audit reports.",
    icon: FileCheck,
    color: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  },
  {
    id: 7,
    title: "7. Sandbox Detonation",
    desc: "Automatically extract email attachments and drop them in sandbox environments for behavioral scanning and file auditing.",
    icon: Terminal,
    color: "#8B5CF6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Posture Drift Remediation",
    desc: "Automatically push security policy updates to endpoints, deploy emergency patches, and verify compliance baselines.",
    icon: RefreshCw,
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  }
];

const DATA_CONNECTORS = [
  {
    name: "Firewalls & Gateways",
    desc: "Instantly block outbound attacker IPs and domains across network perimeters.",
    icon: Radio,
    color: "#3B82F6",
    badge: "Network Control",
    caps: ["IP Blocking", "Domain Shunt", "Port Lockdown", "SSL Decryption Toggles"]
  },
  {
    name: "EDR & Cloud Workloads",
    desc: "Isolate endpoints and container workloads from internal and external networks.",
    icon: Monitor,
    color: "#7C3AED",
    badge: "Host Isolation",
    caps: ["EDR Network Quarantine", "Kubernetes Pod Suspend", "VM Disk Snapshots", "Registry Rollbacks"]
  },
  {
    name: "IAM & Directory Services",
    desc: "Harden access and enforceZero Trust verification steps on high-risk users.",
    icon: Key,
    color: "#FF6B00",
    badge: "Access Hardening",
    caps: ["Password Resets", "Kerberos Token Revoke", "Active Session Kill", "Trigger MFA Challenges"]
  },
  {
    name: "ITSM & Service Desks",
    desc: "Keep operations aligned with automated, bidirectional ticketing synchronization.",
    icon: Building2,
    color: "#10B981",
    badge: "Service Orchestration",
    caps: ["Jira Incident Sync", "ServiceNow Ticket Ingest", "PagerDuty Alerts Triage", "Slack Alerts Webhooks"]
  }
];

const LIVE_METRICS = [
  { label: "Containment SLA", value: "< 200ms", change: "Device Network Block", color: "#EF4444" },
  { label: "Playbooks Executed / Day", value: "15,000+", change: "Automated Workflows", color: "#3B82F6" },
  { label: "Mean Time to Respond", value: "< 45s", change: "Stack Orchestration", color: "#7C3AED" },
  { label: "Active Integrations", value: "120+", change: "Secure API Connectors", color: "#FF6B00" },
  { label: "Manual SOC Time Saved", value: "85%", change: "Operational Efficiency", color: "#10B981" },
  { label: "Reliability SLA", value: "99.999%", change: "Continuous Heartbeat", color: "#F59E0B" }
];

export default function SOARPage() {
  usePageMeta(
    "NetCradus SOAR | Security Orchestration, Automation & Response",
    "Orchestrate incident response at machine speed. Build custom automated playbooks and isolate compromised devices with NetCradus SOAR."
  );

  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#05060A] text-white min-h-screen pt-20 pb-20 overflow-x-hidden font-sans">
      
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(236,72,153,0.14),transparent_65%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          <div className="bg-[#120718]/90 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.6)] backdrop-blur-xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* Small Pink Badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#EC4899]/40 bg-[#EC4899]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#EC4899] shadow-[0_0_20px_rgba(236,72,153,0.25)]">
                  <span className="h-2 w-2 rounded-full bg-[#EC4899] animate-ping" />
                  INCIDENT RESPONSE AUTOMATION
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                  Orchestrate Defense.<br />
                  <span className="bg-gradient-to-r from-white via-[#ffa8d6] to-[#EC4899] bg-clip-text text-transparent">
                    Contain in Seconds.
                  </span>
                </h1>

                {/* Supporting Text */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                  NetCradus SOAR automates containment playbooks across your entire security ecosystem. Minimize exposure times, orchestrate legacy and cloud APIs, and save your SOC team hours of manual investigation.
                </p>

                <div className="pt-2 border-t border-white/10">
                  <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#EC4899] mb-4">
                    KEY CAPABILITIES:
                  </h4>

                  {/* Two-Column Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_LEFT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#EC4899]/20 text-[#EC4899] flex items-center justify-center shrink-0 border border-[#EC4899]/40">
                            <Check className="w-3 h-3" />
                          </span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {HERO_CAPABILITIES_RIGHT.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-[#EC4899]/20 text-[#EC4899] flex items-center justify-center shrink-0 border border-[#EC4899]/40">
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
                    className="px-7 py-3.5 rounded-xl bg-[#EC4899] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(236,72,153,0.4)] hover:bg-[#ff5cae] transition-all hover:scale-105 no-underline flex items-center gap-2"
                  >
                    <span>Request Demo</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="#soar-console"
                    className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all no-underline"
                  >
                    View Interactive Console
                  </a>
                </div>

              </div>

              {/* Right Column: SOAR Dashboard Visual Frame */}
              <div className="lg:col-span-6 w-full">
                <div className="relative rounded-2xl border border-white/15 bg-[#120718] p-3 shadow-2xl group">
                  {/* Browser top header */}
                  <div className="flex items-center justify-between px-3 py-2 bg-[#1b0a25] rounded-xl border border-white/10 mb-3 text-xs text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[11px] text-gray-300 font-bold">
                      app.netcradus.com/soar-playbook-builder
                    </span>
                    <span className="text-[10px] text-[#EC4899] font-bold">SOAR CONSOLE</span>
                  </div>

                  {/* Screenshot Image with Click-to-Zoom Lightbox */}
                  <div 
                    className="relative cursor-pointer overflow-hidden rounded-xl group/img"
                    onClick={() => setLightboxImage({ src: '/assets/acis-soar.png', alt: 'NetCradus SOAR Playbook Builder' })}
                  >
                    <img 
                      src="/assets/acis-soar.png" 
                      alt="NetCradus SOAR Playbook Builder" 
                      className="w-full h-auto object-contain rounded-xl transition-transform duration-500 group-hover/img:scale-105"
                      onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                      <ExternalLink size={16} /> Click to Expand Playbook Builder
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#0e0716]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC4899] mb-3 block">
              AUTOMATED RESPONSE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              SOAR Platform Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Design, test, and roll out complex workflows, reducing your SOC mean time to response (MTTR) from hours to seconds.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-[#120718] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#EC4899]/40 hover:bg-[#180a22] shadow-lg flex flex-col justify-between group"
                  style={{ borderColor: cap.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-md"
                         style={{ backgroundColor: cap.badgeBg, color: cap.color }}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#EC4899] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#EC4899]">
                    <span>NETCRADUS SOAR</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section id="soar-console" className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC4899] mb-3 block">
              PLAYBOOK EXECUTION WORKSPACE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Real-Time Playbook Orchestration
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Verify how alerts trigger playbooks and contain targets across endpoints, identities, and cloud infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#120718] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#EC4899]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#1b0a25] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-[#3B82F6]" />
                    Case Management
                  </h3>
                  <span className="text-[10px] font-mono bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded font-bold">
                    ACTIVE
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/acis-soc-dashboard.png', alt: 'Incident Case Management' })}
                >
                  <img 
                    src="/assets/acis-soc-dashboard.png" 
                    alt="Incident Case Management" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#EC4899] transition-colors">
                    Incident Tracking &amp; Timelines
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Track playbook lifecycle stages, analyze alert details, and generate instant forensically audited incident logs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#120718] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#EC4899]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#1b0a25] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#EC4899]" />
                    Playbook Builder
                  </h3>
                  <span className="text-[10px] font-mono bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded font-bold">
                    WORKFLOW
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/soar-playbook-templates.png', alt: 'Visual Automation Templates' })}
                >
                  <img 
                    src="/assets/soar-playbook-templates.png" 
                    alt="Visual Automation Templates" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#EC4899] transition-colors">
                    Visual Automation Templates
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Instantly deploy drag-and-drop actions to isolate endpoints, block malicious IPs, reset AD accounts, and alert stakeholders.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#120718] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#EC4899]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#1b0a25] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#8B5CF6]" />
                    Containment logs
                  </h3>
                  <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-bold">
                    SUB-SECOND
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/acis-alerts.png', alt: 'Real-Time Containment Action Logs' })}
                >
                  <img 
                    src="/assets/acis-alerts.png" 
                    alt="Real-Time Containment Action Logs" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#EC4899] transition-colors">
                    Automated Detonation &amp; Rollback
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Contain high-severity events automatically, rollback system configurations, and alert teams.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#0e0716]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC4899] mb-3 block">
              OPERATIONAL EFFICIENCY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Automation &amp; Performance Statistics
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Verify how automated orchestrations reduce remediation time and improve security posture metrics at scale.
            </p>
          </div>

          {/* 6 Live Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {LIVE_METRICS.map((metric, idx) => (
              <div key={idx} className="bg-[#120718] border border-white/10 rounded-xl p-4 text-center space-y-1 hover:border-[#EC4899]/40 transition-colors">
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
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#EC4899] mb-3 block">
              SECURITY STACK ORCHESTRATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              SOAR Security Connectors
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Integrate, sanitize, and orchestrate actions across firewalls, identity nodes, EDR agents, and ticketing applications.
            </p>
          </div>

          {/* 4 Large Connector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA_CONNECTORS.map((env, idx) => {
              const IconC = env.icon;
              return (
                <div key={idx} className="bg-[#120718] border border-white/10 rounded-2xl p-6 text-left space-y-4 hover:border-[#EC4899]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                       style={{ backgroundColor: `${env.color}20`, color: env.color }}>
                    <IconC className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#EC4899] transition-colors">{env.name}</h3>
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

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#120718] to-purple-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(236,72,153,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Automate Your Security Responses?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Build custom containment workflows, drag-and-drop response playbooks, and secure endpoints in sub-seconds. Contact our team to request a demo.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#EC4899] text-white font-bold text-sm shadow-lg shadow-[#EC4899]/25 hover:bg-[#ff5cae] transition-all duration-300 no-underline"
            >
              Request a Free Demo
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
