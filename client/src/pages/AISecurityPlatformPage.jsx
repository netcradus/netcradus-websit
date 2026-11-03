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
  BrainCircuit,
  Bot
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageLightbox from '../components/ImageLightbox';

const HERO_CAPABILITIES_LEFT = [
  "Prompt injection protection",
  "LLM semantic guardrails",
  "Data leakage prevention (DLP)",
  "Model weight & IP hardening",
  "Adversarial vulnerability checks"
];

const HERO_CAPABILITIES_RIGHT = [
  "Shadow AI discover tracker",
  "Training set poisoning audit",
  "Compliance logic logs (EU AI Act)",
  "Dynamic prompt sanitizer",
  "Agent permission isolation"
];

const CORE_CAPABILITIES = [
  {
    id: 1,
    title: "1. Prompt Injection Shield",
    desc: "Scan and sanitize user inputs to LLM APIs in real time, blocking jailbreaks, context overrides, and hijack attempts.",
    icon: Terminal,
    color: "#8B5CF6",
    badgeBg: "rgba(139, 92, 246, 0.12)",
    border: "rgba(139, 92, 246, 0.3)"
  },
  {
    id: 2,
    title: "2. Context Data Leakage",
    desc: "Enforce DLP policies on chat histories to prevent API tokens, customer PII, or internal corporate IP from reaching external models.",
    icon: Lock,
    color: "#7C3AED",
    badgeBg: "rgba(124, 58, 237, 0.12)",
    border: "rgba(124, 58, 237, 0.3)"
  },
  {
    id: 3,
    title: "3. Shadow AI Discovery",
    desc: "Surveil network connections to discover unapproved consumer AI sites and block endpoints uploading corporate documents.",
    icon: Radar,
    color: "#FF6B00",
    badgeBg: "rgba(255, 107, 0, 0.12)",
    border: "rgba(255, 107, 0, 0.3)"
  },
  {
    id: 4,
    title: "4. Training Set Poisoning",
    desc: "Track and audit data ingestion pathways for model retraining to prevent malicious dataset contamination.",
    icon: Database,
    color: "#3B82F6",
    badgeBg: "rgba(59, 130, 246, 0.12)",
    border: "rgba(59, 130, 246, 0.3)"
  },
  {
    id: 5,
    title: "5. Dynamic API Guardrails",
    desc: "Intercept model transactions, filter completions, and block hallucinated PII leaks before they leave your perimeter.",
    icon: Sliders,
    color: "#EC4899",
    badgeBg: "rgba(236, 72, 153, 0.12)",
    border: "rgba(236, 72, 153, 0.3)"
  },
  {
    id: 6,
    title: "6. Agent Sandboxing",
    desc: "Restrict AI agent privileges dynamically to isolate execution nodes, preventing unauthorized database queries or host file access.",
    icon: Server,
    color: "#EF4444",
    badgeBg: "rgba(239, 68, 68, 0.12)",
    border: "rgba(239, 68, 68, 0.3)"
  },
  {
    id: 7,
    title: "7. Model IP Protection",
    desc: "Harden API layers to prevent adversarial parameter extraction and reverse-engineering of model weights.",
    icon: Shield,
    color: "#10B981",
    badgeBg: "rgba(16, 185, 129, 0.12)",
    border: "rgba(16, 185, 129, 0.3)"
  },
  {
    id: 8,
    title: "8. GRC Compliance Logs",
    desc: "Maintain detailed transaction logs, risk maps, and drift metrics to conform with NIST AI Risk and EU AI Act requirements.",
    icon: FileCheck,
    color: "#F59E0B",
    badgeBg: "rgba(245, 158, 11, 0.12)",
    border: "rgba(245, 158, 11, 0.3)"
  }
];

const DATA_CONNECTORS = [
  {
    name: "Model APIs & Hubs",
    desc: "Integrate directly with commercial API endpoints and private registries to monitor queries.",
    icon: Bot,
    color: "#3B82F6",
    badge: "LLM Gateways",
    caps: ["OpenAI API Ingest", "Anthropic Claude Sync", "Hugging Face Registries", "AWS Bedrock Hardening"]
  },
  {
    name: "Framework Orchestrators",
    desc: "Secure agent logic pipelines, prompt construction, and vector searches natively.",
    icon: BrainCircuit,
    color: "#7C3AED",
    badge: "Orchestrators",
    caps: ["LangChain Security Links", "LlamaIndex Auditing", "Semantic Kernels Checks", "Agent Exec Sandbox"]
  },
  {
    name: "Vector Databases",
    desc: "Monitor search parameters, enforce IAM, and audit index ingestion pipelines.",
    icon: Database,
    color: "#FF6B00",
    badge: "Data Layers",
    caps: ["Pinecone DB Access", "Chroma DB Integrity", "Milvus Database Check", "Qdrant Index Auditing"]
  },
  {
    name: "Enterprise SOC Networks",
    desc: "Stream semantic logs, prompt alerts, and shadow AI logs to SOC analytics consoles.",
    icon: Radio,
    color: "#10B981",
    badge: "SOC Pipelines",
    caps: ["SIEM Alert Logs", "SOAR Workflows Sync", "ServiceNow Auditing Links", "Slack Alerts Hooks"]
  }
];

const LIVE_METRICS = [
  { label: "Transactions Checks / Day", value: "1M+", change: "High-throughput filters", color: "#8B5CF6" },
  { label: "Jailbreaks Blocked", value: "99.8%", change: "Semantic Injections Guard", color: "#3B82F6" },
  { label: "Filter Ingest Latency", value: "< 10ms", change: "Sub-millisecond Checks", color: "#7C3AED" },
  { label: "Shadow AI Blocked", value: "100%", change: "Unapproved Model Traffic", color: "#FF6B00" },
  { label: "Data Poisoning Alerts", value: "Instant", change: "Malicious training audit", color: "#EC4899" },
  { label: "Uptime Availability SLA", value: "99.99%", change: "Clustered Engines", color: "#F59E0B" }
];

export default function AISecurityPlatformPage() {
  usePageMeta(
    "NetCradus AI Security | AI/ML & LLM Triage Protection",
    "Harden machine learning pipelines and large language models against prompts injection, data poisoning, and Shadow AI traffic."
  );

  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#05060A] text-white min-h-screen pt-20 pb-20 overflow-x-hidden font-sans">
      
      <section className="relative py-16 lg:py-24 border-b border-white/10 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.14),transparent_65%)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          <div 
            className="relative border border-white/15 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_30px_90px_rgba(0,0,0,0.6)] overflow-hidden bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url('/assets/ai-security-team-wide.png')`,
              backgroundPosition: 'right center'
            }}
          >
            {/* Subtle overlay behind text on left only — does NOT cover/darken engineer on right */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-[60%] bg-gradient-to-r from-[#0b0314] via-[#0b0314]/90 via-50% to-transparent pointer-events-none z-0" />

            {/* Left Content Container positioned over blank portion */}
            <div className="relative z-10 max-w-xl lg:max-w-2xl space-y-6 text-left">
              
              {/* Small Violet Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/15 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.25)]">
                <span className="h-2 w-2 rounded-full bg-[#8B5CF6] animate-ping" />
                AI SECURITY &amp; LLM GUARDRAILS
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                Secure Models.<br />
                <span className="bg-gradient-to-r from-white via-[#d3a8ff] to-[#8B5CF6] bg-clip-text text-transparent">
                  Harden AI Pipelines.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
                NetCradus AI Security protects generative AI apps, machine learning models, and automated agent pipelines. Intercept prompt injection jailbreaks, prevent credentials and PII leakage, discover Shadow AI, and audit datasets.
              </p>

              <div className="pt-2 border-t border-white/10">
                <h4 className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#8B5CF6] mb-4">
                  KEY CAPABILITIES:
                </h4>

                {/* Two-Column Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-gray-200">
                  <div className="space-y-3">
                    {HERO_CAPABILITIES_LEFT.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center shrink-0 border border-[#8B5CF6]/40">
                          <Check className="w-3 h-3" />
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {HERO_CAPABILITIES_RIGHT.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#8B5CF6]/20 text-[#8B5CF6] flex items-center justify-center shrink-0 border border-[#8B5CF6]/40">
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
                  className="px-7 py-3.5 rounded-xl bg-[#8B5CF6] text-white font-bold text-xs uppercase tracking-wider shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:bg-[#a680ff] transition-all hover:scale-105 no-underline flex items-center gap-2"
                >
                  <span>Request Demo</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#ai-console"
                  className="px-7 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all no-underline"
                >
                  View Interactive Console
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#0f0618]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B5CF6] mb-3 block">
              MODEL ASSURANCE &amp; PROTECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              AI Security Platform Capabilities
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Enable continuous semantic prompt inspections, lock agent authorization perimeters, and protect proprietary model weights natively.
            </p>
          </div>

          {/* 8 Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_CAPABILITIES.map((cap) => {
              const IconComp = cap.icon;
              return (
                <div
                  key={cap.id}
                  className="bg-[#0f0618] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#8B5CF6]/40 hover:bg-[#150921] shadow-lg flex flex-col justify-between group"
                  style={{ borderColor: cap.border }}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 shadow-md"
                         style={{ backgroundColor: cap.badgeBg, color: cap.color }}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#8B5CF6] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-bold text-[#8B5CF6]">
                    <span>NETCRADUS AI SECURITY</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section id="ai-console" className="py-20 lg:py-24 border-b border-white/10 bg-[#05060A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B5CF6] mb-3 block">
              CONSOLE PREVIEW
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Real-Time AI Ingestion &amp; Prompt Inspections
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Explore how prompts are sanitized, how Shadow AI traffic is discovered, and how model pipelines are audited.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="bg-[#0f0618] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#8B5CF6]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#150921] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-[#3B82F6]" />
                    Prompt Sanitizer
                  </h3>
                  <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                    99.8% BLOCKED
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/ai-semantic-guardrails.jpg', alt: 'Semantic Injection Guardrails' })}
                >
                  <img 
                    src="/assets/ai-semantic-guardrails.jpg" 
                    alt="Semantic Injection Guardrails" 
                    className="w-full h-auto object-contain bg-[#0b0314] group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                    Semantic Injection Guardrails
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Audit user contexts feeds, verify completions risk rating, block prompt escapes, and prevent unauthorized model instructions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0618] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#8B5CF6]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#150921] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <Radar className="w-4 h-4 text-[#7C3AED]" />
                    Shadow AI Tracker
                  </h3>
                  <span className="text-[10px] font-mono bg-purple-500/20 text-purple-400 px-2 py-0.5 rounded font-bold">
                    MONITORING
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/acis-soc-dashboard.png', alt: 'Shadow AI traffic analysis' })}
                >
                  <img 
                    src="/assets/acis-soc-dashboard.png" 
                    alt="Shadow AI traffic analysis" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                    Shadow AI Discovery logs
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Continuously detect endpoints communicating with consumer AI endpoints and prevent credentials and file uploads.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#0f0618] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#8B5CF6]/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="p-4 bg-[#150921] border-b border-white/10 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <FileCheck className="w-4 h-4 text-[#EF4444]" />
                    AI Compliance GRC
                  </h3>
                  <span className="text-[10px] font-mono bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">
                    EU AI ACT
                  </span>
                </div>
                <div 
                  className="relative cursor-pointer overflow-hidden group/img"
                  onClick={() => setLightboxImage({ src: '/assets/acis-compliance-risk.png', alt: 'NIST and EU AI Act Compliance audits' })}
                >
                  <img 
                    src="/assets/acis-compliance-risk.png" 
                    alt="NIST and EU AI Act Compliance audits" 
                    className="w-full h-56 object-cover group-hover/img:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/img/siem-dashboard.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-xs">
                    <ExternalLink size={16} /> Click to Expand Screenshot
                  </div>
                </div>
                <div className="p-6 space-y-2 text-left">
                  <h4 className="text-base font-bold text-white group-hover:text-[#8B5CF6] transition-colors">
                    NIST and EU AI compliance
                  </h4>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Generate compliance reports mapping model architectures, data parameters, and safety metrics for audits.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 border-b border-white/10 bg-[#0f0618]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B5CF6] mb-3 block">
              AI TELEMETRY SCALE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              AI Security Ingest &amp; Performance Statistics
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Track daily transactions sanity checking, average prompt processing times, and injection block rate.
            </p>
          </div>

          {/* 6 Live Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {LIVE_METRICS.map((metric, idx) => (
              <div key={idx} className="bg-[#0f0618] border border-white/10 rounded-xl p-4 text-center space-y-1 hover:border-[#8B5CF6]/40 transition-colors">
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
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8B5CF6] mb-3 block">
              AI MODEL INTEGRATIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Supported AI Stack Pipelines
            </h2>
            <p className="mt-4 text-gray-400 text-sm sm:text-base leading-relaxed">
              Deploy native guardrails across leading LLM hosts, prompt orchestrators, vector databases, and SOC pipelines.
            </p>
          </div>

          {/* 4 Large Connector Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {DATA_CONNECTORS.map((env, idx) => {
              const IconC = env.icon;
              return (
                <div key={idx} className="bg-[#0f0618] border border-white/10 rounded-2xl p-6 text-left space-y-4 hover:border-[#8B5CF6]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                       style={{ backgroundColor: `${env.color}20`, color: env.color }}>
                    <IconC className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-[#8B5CF6] transition-colors">{env.name}</h3>
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

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#0f0618] to-violet-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Protect Your Generative AI Deployments and Model Vectors?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Dynamic semantic prompt shields, real-time transaction sandboxing, Shadow AI discovery, and NIST compliance tracking. Contact our AI security experts today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#8B5CF6] text-white font-bold text-sm shadow-lg shadow-[#8B5CF6]/25 hover:bg-[#a680ff] transition-all duration-300 no-underline"
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
