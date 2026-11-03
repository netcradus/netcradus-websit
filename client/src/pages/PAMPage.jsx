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
  Key,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageLightbox from '../components/ImageLightbox';

const HERO_CAPABILITIES_LEFT = [
  "Privileged credential vaulting",
  "Just-In-Time (JIT) provisioning",
  "AES-256 vault encryption",
  "Least-privilege Zero Trust access",
  "Active session monitoring"
];

const HERO_CAPABILITIES_RIGHT = [
  "SSH/RDP gateway controls",
  "Automated password rotation",
  "API secret key management",
  "UEBA session anomaly alerts",
  "Session audit record trails"
];

const CORE_CAPABILITIES = [
  {
    id: 1,
    title: "1. Secure Secret Vaulting",
    desc: "Store and manage passwords, SSH keys, certificates, and API tokens inside an AES-256 hardware security module backed vault.",
    icon: Lock,
    color: "#F43F5E",
    badgeBg: "rgba(244, 63, 94, 0.12)",
    border: "rgba(244, 63, 94, 0.3)"
  },
  {
    id: 2,
    title: "2. Just-In-Time (JIT) Access",
    desc: "Grant administrative access dynamically on demand with automated approval gates, restricting privilege lifetime strictly to task needs.",
    icon: RefreshCw,
    color: "#7C3AED",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.3)"
  },
  {
    id: 3,
    title: "3. Session Monitoring & Audits",
    desc: "Record and monitor active administrative sessions (SSH, RDP, Web Console) in real time with keystroke logging and full video playback.",
    icon: Eye,
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  },
  {
    id: 4,
    title: "4. Zero Trust Enforcements",
    desc: "Enforce granular user authentication rules, contextual access checks, and mandatory step-up MFA challenges dynamically.",
    icon: Shield,
    color: "#3B82F6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 5,
    title: "5. Secret Key Lifecycle",
    desc: "Automate policy-driven secret updates, certificate renewals, and API key rotations to eliminate stale credentials.",
    icon: Key,
    color: "#EC4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 6,
    title: "6. Session Anomaly Alerts",
    desc: "Leverage behavior analytics (UEBA) to baseline admin operations and flag credentials usage from unmapped networks or systems.",
    icon: AlertTriangle,
    color: "#EF4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 7,
    title: "7. Cloud Infrastructure IAM",
    desc: "Manage and audit permissions across AWS, Azure, and Google Cloud, preventing privilege escalation and orphaned access.",
    icon: Layers,
    color: "#8B5CF6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 8,
    title: "8. Administrative Audits",
    desc: "Maintain detailed logs of authorization actions, vault queries, and credential access for compliance reports.",
    icon: FileCheck,
    color: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  }
];

const DATA_CONNECTORS = [
  {
    name: "Identity Providers",
    desc: "Sync natively with directory servers and single sign-on systems to map credentials access.",
    icon: Users,
    color: "#3B82F6",
    badge: "IAM Sync",
    caps: ["Active Directory Sync", "Okta Identity Mapping", "Azure AD Integration", "SSO Portal Hookups"]
  },
  {
    name: "Target Infrastructures",
    desc: "Inject administrative credentials dynamically into database layers and operating hosts.",
    icon: Server,
    color: "#7C3AED",
    badge: "Infrastructures",
    caps: ["Linux SSH Gateways", "Windows RDP Servers", "SQL Database Nodes", "Kubernetes Clusters Access"]
  },
  {
    name: "Cloud IAM Pools",
    desc: "Audit permissions, service account usage, and temporary credentials in multi-cloud pools.",
    icon: Layers,
    color: "#FF6B00",
    badge: "Cloud-Native",
    caps: ["AWS IAM Roles Sync", "Azure Access Mapping", "GCP Service Accounts", "Cloud Key Vault Links"]
  },
  {
    name: "Auditing & SOC Systems",
    desc: "Push vault query alerts, session audits, and anomalies logs directly into SOC platforms.",
    icon: Radio,
    color: "#10B981",
    badge: "SOC Reporting",
    caps: ["SIEM Log Stream", "SOAR Containment Sync", "ServiceNow Auditing Links", "Slack Alerts Hooks"]
  }
];

const LIVE_METRICS = [
  { label: "Vault Credentials Saved", value: "10,000+", change: "Secure AES Storage", color: "#F43F5E" },
  { label: "JIT Access Approvals", value: "5,000+", change: "Dynamic Permissions", color: "#3B82F6" },
  { label: "Session Audit Log", value: "100%", change: "Full Video Capture", color: "#7C3AED" },
  { label: "Password Rotation Interval", value: "24h", change: "Automated Policy", color: "#FF6B00" },
  { label: "Session Handshake Latency", value: "< 1s", change: "Fast Gateway Proxy", color: "#EC4899" },
  { label: "Vault Availability SLA", value: "99.999%", change: "Redundant Setup", color: "#F59E0B" }
];

export default function PAMPage() {
  usePageMeta(
    "NetCradus PAM | Privileged Access Management",
    "Secure administrative credentials and vaults. Enforce least-privilege Zero Trust and monitor privileged session trails with NetCradus PAM."
  );

  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#05060A] text-white min-h-screen pt-20 pb-20 overflow-x-hidden font-sans">
      
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(244,63,94,0.14),transparent_65%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          <div 
            className="relative border border-white/15 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.6)] overflow-hidden bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('/assets/pam-team-wide.png')`,
              backgroundPosition: 'right center'
            }}
          >
            {/* Subtle overlay behind text on left only — does NOT cover/darken employees on the right */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r from-[#14040c] via-[#14040c]/90 via-50% to-transparent pointer-events-none z-0" />

            {/* Left Content Container positioned over blank portion */}
            <div className="relative z-10 max-w-xl lg:max-w-2xl space-y-6 text-left">
              
              {/* Small Rose Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F43F5E]/40 bg-[#F43F5E]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#F43F5E] shadow-[0_0_20px_rgba(244,63,94,0.25)]">
                <span className="h-2 w-2 rounded-full bg-[#F43F5E] animate-ping" />
                PRIVILEGED ACCESS SECURITY
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                Vault Credentials.<br />
                <span className="bg-gradient-to-r from-white via-[#ffaab8] to-[#F43F5E] bg-clip-text text-transparent">
                  Enforce Least Privilege.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                NetCradus PAM protects your administrative accounts, key credentials, and infrastructure APIs. Prevent lateral movement, vault passwords in AES HSM nodes, audit remote sessions, and enforce Zero Trust access.
              </p>

              <div className="pt-2 border-t border-white/10">
                <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#F43F5E] mb-4">
                  KEY CAPABILITIES:
                </h4>

                {/* Two-Column Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                  <div className="space-y-3">
                    {HERO_CAPABILITIES_LEFT.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#F43F5E]/20 text-[#F43F5E] flex items-center justify-center shrink-0 border border-[#F43F5E]/40">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {HERO_CAPABILITIES_RIGHT.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#F43F5E]/20 text-[#F43F5E] flex items-center justify-center shrink-0 border border-[#F43F5E]/40">
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
                  className="px-7 py-3.5 rounded-xl bg-[#F43F5E] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(244,63,94,0.4)] hover:bg-[#ff5b78] transition-all hover:scale-105 no-underline flex items-center gap-2"
                >
                  <span>Request Demo</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#pam-console"
                  className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all no-underline"
                >
                  View Interactive Console
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#16060f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F43F5E] mb-3 block">
              ZERO TRUST IDENTITY DEPLOYMENT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              PAM Platform Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Enforce temporary session controls, rotate access passwords automatically, and monitor admin actions across critical infrastructures.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-[#18060f] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#F43F5E]/40 hover:bg-[#200814] shadow-lg flex flex-col justify-between group"
                  style={{ borderColor: cap.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-md"
                         style={{ backgroundColor: cap.badgeBg, color: cap.color }}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#F43F5E] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#F43F5E]">
                    <span>NETCRADUS PAM</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section id="pam-console" className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F43F5E] mb-3 block">
              VAULT PREVIEW
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Real-Time Session Monitoring &amp; Vault Controls
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Explore how administrative passwords, cloud secrets, and SSH keys are rotated and audited.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#18060f] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#F43F5E]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#200814] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#3B82F6]" />
                    IAM Verification
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                    CONNECTED
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/pam-iam-verification.png', alt: 'IAM & Privileged Identity Mapping' })}
                >
                  <img 
                    src="/assets/pam-iam-verification.png" 
                    alt="IAM & Privileged Identity Mapping" 
                    className="w-full h-auto object-contain bg-[#0e030a] group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#F43F5E] transition-colors">
                    Administrative Access Matrix
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Audit user credentials maps, enforce multi-factor triggers, and revoke active sessions dynamically across enterprise domains.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#18060f] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#F43F5E]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#200814] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Eye className="w-4 h-4 text-[#7C3AED]" />
                    Session Audits
                  </h3>
                  <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-bold">
                    RECORDED
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/pam-session-audits.png', alt: 'Administrative Session Logging' })}
                >
                  <img 
                    src="/assets/pam-session-audits.png" 
                    alt="Administrative Session Logging" 
                    className="w-full h-auto object-contain bg-[#0e030a] group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#F43F5E] transition-colors">
                    Active Command &amp; Key Audits
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Capture session logs, parse command lines for indicators of privilege abuse, and block high-risk commands instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#18060f] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#F43F5E]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#200814] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Key className="w-4 h-4 text-[#EF4444]" />
                    Vault Lifecycle
                  </h3>
                  <span className="text-[10px] font-mono bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">
                    SECURED
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/pam-vault-lifecycle.png', alt: 'Secret Rotation & Credentials Vault' })}
                >
                  <img 
                    src="/assets/pam-vault-lifecycle.png" 
                    alt="Secret Rotation & Credentials Vault" 
                    className="w-full h-auto object-contain bg-[#0e030a] group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#F43F5E] transition-colors">
                    API Secret Rotation Controls
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Automate credentials rotation, monitor service account connections, and secure credentials in high-availability vaults.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#16060f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F43F5E] mb-3 block">
              IDENTITY INTEGRITY METRICS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Vault Performance &amp; Usage Statistics
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Verify administrative accounts coverage, credentials update intervals, and session proxy connection latency.
            </p>
          </div>

          {/* 6 Live Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {LIVE_METRICS.map((metric, idx) => (
              <div key={idx} className="bg-[#18060f] border border-white/10 rounded-xl p-4 text-center space-y-1 hover:border-[#F43F5E]/40 transition-colors">
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
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#F43F5E] mb-3 block">
              ACCESS CONNECTORS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Directory &amp; Target Connectors
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Integrate, synchronize, and monitor authentication flows across directory pools and cloud workloads natively.
            </p>
          </div>

          {/* 4 Large Connector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA_CONNECTORS.map((env, idx) => {
              const IconC = env.icon;
              return (
                <div key={idx} className="bg-[#18060f] border border-white/10 rounded-2xl p-6 text-left space-y-4 hover:border-[#F43F5E]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                       style={{ backgroundColor: `${env.color}20`, color: env.color }}>
                    <IconC className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#F43F5E] transition-colors">{env.name}</h3>
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

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#18060f] to-rose-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(244,63,94,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Secure Your Privileged Access and Vaults?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Dynamic password rotations, SSH/RDP session auditing, and dynamic Just-In-Time provisioning gates. Contact our Zero Trust architects today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#F43F5E] text-white font-bold text-sm shadow-lg shadow-[#F43F5E]/25 hover:bg-[#ff5b78] transition-all duration-300 no-underline"
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
