import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Zap, RefreshCcw, Activity, Target, Search, CheckCircle, GitMerge, Server, Building2, ShieldCheck, Globe, Lock } from 'lucide-react';
import FormPrivacyNotice from '../components/ui/FormPrivacyNotice';
import { usePageMeta } from '../hooks/usePageMeta';
import { SEO_META } from '../data/seoMeta';
import { AcisHeroSection, OrbitDiagram, PlatformStrip } from '../components/AcisHero';

// Custom hook for fade-in effect on scroll

const HeroSection = () => {
  const scrollToScreenshots = (e) => {
    e.preventDefault();
    document.getElementById('platform').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRegister = (e) => {
    e.preventDefault();
    window.open('https://acis.netcradus.com/', '_blank', 'noopener,noreferrer');
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-surface overflow-hidden">
      {/* Background gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 30% 50%, rgba(168,85,247,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 70% 20%, rgba(20,184,166,0.10) 0%, transparent 50%)
          `
        }}
      />

      {/* Animated blurred circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-[pulse_5s_ease-in-out_infinite]" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[80px] animate-[pulse_6s_ease-in-out_infinite_1s]" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-[90px] animate-[pulse_4s_ease-in-out_infinite_2s]" />

      <div className="container mx-auto max-w-[1200px] px-6 pt-4 pb-0 relative z-10 flex flex-col items-center">

        {/* Title Elements */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent bg-accent/10 mb-6">
            <div className="w-2 h-2 rounded-sm bg-accent" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}></div>
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">
              AI-Powered · SIEM · SOAR · Self-Healing · Swarm Intel
            </span>
          </div>

          <h1 className="text-5xl md:text-[64px] font-bold leading-tight mb-2">
            <span className="block text-text-primary">Autonomous Cyber</span>
            <span className="block bg-gradient-to-br bg-brand-gradient bg-clip-text pb-2">
              Immune System
            </span>
          </h1>
        </div>

        <div className="w-full max-w-4xl relative perspective-[1000px] mb-8">
          <div className="relative transform hover:scale-[1.02] transition-transform duration-500 ease-out group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
            <img
              src="/assets/Acis-arch.jpeg"
              alt="ACIS 5-Layer Architecture"
              className="relative w-full rounded-xl shadow-2xl shadow-brand border border-border"
            />
          </div>
        </div>

        {/* Text Column */}
        <div className="w-full max-w-3xl flex flex-col items-center text-center">

          <p className="text-lg text-text-secondary leading-[1.7] max-w-[520px] mb-6">
            Enterprise-grade threat detection, automated response, and self-healing endpoints — unified in a single AI platform built for SMEs that can't afford a 24/7 SOC.
          </p>

          <div className="flex flex-wrap gap-8 mb-6">
            <div>
              <div className="text-[28px] font-bold bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">3.4M+</div>
              <div className="text-xs text-text-secondary mt-1 uppercase tracking-wider font-semibold">Events processed daily</div>
            </div>
            <div>
              <div className="text-[28px] font-bold bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">&lt; 3 min</div>
              <div className="text-xs text-text-secondary mt-1 uppercase tracking-wider font-semibold">Mean time to detect</div>
            </div>
            <div>
              <div className="text-[28px] font-bold bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">99.8%</div>
              <div className="text-xs text-text-secondary mt-1 uppercase tracking-wider font-semibold">Threat neutralization</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={scrollToScreenshots}
              className="bg-brand-gradient  text-[15px] font-semibold py-[13px] px-[28px] rounded-lg transition-all duration-200 "
            >
              Explore the Platform
            </button>
            <button
              onClick={scrollToRegister}
              className="border border-accent text-accent text-[15px] font-semibold py-[13px] px-[28px] rounded-lg transition-all duration-200 hover:bg-accent/10"
            >
              Register Interest
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="border border-accent/50 text-accent font-medium text-[11px] px-3 py-1 rounded-full uppercase tracking-wide">Privacy-Conscious Architecture</span>
            <span className="border border-border text-text-primary font-medium text-[11px] px-3 py-1 rounded-full uppercase tracking-wide">ISO/IEC 27001:2022 Aligned</span>
          </div>
          <div className='mt-2 text-sm text-text-secondary pb-4'>
            <p>© All right reserved by Netcradus.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ClosedLoopSection = () => {
  const steps = [
    { num: "01", label: "DETECT", desc: "Real-time log ingestion across all sources", icon: <Activity />, color: "purple" },
    { num: "02", label: "ANALYZE", desc: "LSTM + Isolation Forest AI scoring 0-100", icon: <Search />, color: "blue" },
    { num: "03", label: "RESPOND", desc: "Automated SOAR playbook execution < 10s", icon: <Zap />, color: "amber" },
    { num: "04", label: "HEAL", desc: "Endpoint rollback and isolation < 5 min", icon: <RefreshCcw />, color: "teal" },
    { num: "05", label: "LEARN", desc: "Federated swarm model update globally", icon: <Target />, color: "pink" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: 'text-accent border-accent bg-accent/10',
      blue: 'text-[#3B82F6] border-[#3B82F6] bg-[#3B82F6]/10',
      amber: 'text-[#F59E0B] border-[#F59E0B] bg-amber-500/10',
      teal: 'text-[#14B8A6] border-[#14B8A6] bg-[#14B8A6]/10',
      pink: 'text-[#EC4899] border-[#EC4899] bg-[#EC4899]/10',
    };
    return colors[color];
  };

  return (
    <section className="bg-surface pt-0 pb-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.1em]">HOW ACIS WORKS</span>
          <h2 className="text-[40px] font-bold text-text-primary mt-2 mb-4">The Closed-Loop Defense Model</h2>
          <p className="text-[13px] text-text-secondary max-w-[580px] mx-auto">
            Every threat ACIS detects triggers an autonomous response chain — no human intervention required until resolution.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting Line (desktop) */}
          <div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-purple-500 to-teal-500 pointer-events-none z-0 opacity-50"></div>

          <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1">
                <div className={`w-[52px] h-[52px] rounded-full border-[1.5px] flex items-center justify-center text-xl bg-surface z-10 ${getColorClasses(step.color)}`}>
                  {step.icon}
                </div>
                <div className={`text-[8px] font-semibold mt-3 ${getColorClasses(step.color).split(' ')[0]}`}>{step.num}</div>
                <div className="text-[14px] font-bold text-text-primary mt-1">{step.label}</div>
                <div className="text-[12px] text-text-secondary text-center max-w-[140px] mt-2 leading-tight">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Loop Indicator */}
          <div className="mt-12 hidden md:block w-full h-8 border-b-2 border-l-2 border-r-2 border-dashed border-border rounded-b-[40px] relative">
            <div className="absolute -left-1 bottom-[-5px] text-text-secondary">◀</div>
            <div className="absolute -bottom-[22px] left-1/2 transform -translate-x-1/2 text-[11px] text-text-secondary italic bg-surface px-4">
              Continuous autonomous loop
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlatformSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { label: "Dashboard", url: "app.netcradus.com/dashboard", img: "/assets/acis-dashboard.png", caption: "Real-time KPIs, ingestion charts, open incidents — the command center for your SOC" },
    { label: "Log Explorer", url: "app.netcradus.com/logs", img: "/assets/acis-log-explorer.png", caption: "SPL-like query engine across millions of events with syntax highlighting and CSV export" },
    { label: "Alerts", url: "app.netcradus.com/alerts", img: "/assets/acis-alerts.png", caption: "Deduplicated alert triage with severity badges, ownership, and one-click playbook execution" },
    { label: "SOAR Playbooks", url: "app.netcradus.com/soar", img: "/assets/acis-soar.png", caption: "Automated response playbooks — isolate endpoints, block IPs, reset accounts in under 45 seconds" },
    { label: "Threat Intel", url: "app.netcradus.com/threat-intel", img: "/assets/acis-threat-intel.png", caption: "IOC enrichment powered by global ACIS swarm nodes — IP, domain, and hash lookups" },

  ];

  return (
    <section id="platform" className="bg-surface py-20 px-6">
      <div className="max-w-[1380px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.1em]">THE PLATFORM</span>
          <h2 className="text-[40px] font-bold text-text-primary mt-2 mb-4">A Complete SOC in Your Browser</h2>
          <p className="text-[13px] text-text-secondary max-w-[580px] mx-auto">
            13 integrated modules. One platform. All data shown is from the live ACIS demo environment.
          </p>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-4 pt-2 -mx-6 px-6 md:mx-0 md:px-0 justify-start md:justify-center no-scrollbar">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`whitespace-nowrap px-[18px] py-[8px] rounded-[20px] text-[13px] font-medium transition-all ${activeTab === idx
                ? "bg-accent  border border-accent"
                : "border border-border text-text-secondary hover:border-accent hover:text-accent"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <div className="bg-surface-raised border border-border/80 rounded-xl overflow-hidden shadow-[0_24px_70px_rgba(0,0,0,0.7)]">
            {/* Browser Top Bar */}
            <div className="h-[36px] bg-surface px-4 flex items-center gap-2 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-amber-500"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-emerald-500"></div>
              </div>
              <div className="flex-grow max-w-[320px] mx-auto bg-surface border border-border rounded text-center py-[2px] px-3">
                <span className="text-[11px] text-text-secondary font-mono">{tabs[activeTab].url}</span>
              </div>
            </div>
            {/* Screenshot */}
            <div className="bg-surface relative min-h-[400px] md:min-h-[600px] flex items-center justify-center p-2 md:p-3">
              <img
                key={activeTab} // triggers re-render for fade
                src={tabs[activeTab].img}
                alt={tabs[activeTab].label}
                className="w-full block animate-[fadeIn_0.4s_ease-out] rounded-lg brightness-[1.04] contrast-[1.04] object-contain"
              />
            </div>
          </div>
          <p className="text-center text-[13px] text-text-secondary mt-5 max-w-[700px] mx-auto px-4">
            {tabs[activeTab].caption}
          </p>
        </div>
      </div>
    </section>
  );
};

// Main Component

export const ArchitectureLayersSection = () => {
  const layers = [
    {
      num: "01",
      title: "AI-Powered SIEM — Log Ingestion & Detection",
      color: "blue",
      accent: "bg-[#3B82F6]",
      badge: "border-[#3B82F6]/30 bg-[#3B82F6]/10 text-[#3B82F6]",
      icon: (
        <svg className="w-6 h-6 text-[#3B82F6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
      ),
      description: "Ingests logs from every source — firewalls, endpoints, cloud platforms (AWS, Azure, GCP), APIs, Docker, Kubernetes. Normalizes all events into a unified schema and runs two AI models simultaneously to detect threats in real-time.",
      outputs: [
        "Threat risk score: 0–100 per event",
        "Anomaly flags with confidence level",
        "Event correlation across sources",
        "Sub-5-second detection latency"
      ],
      techStack: ["Apache Kafka", "Elasticsearch", "Apache Flink", "LSTM Networks", "Isolation Forest", "JSON normalization", "Docker", "Kubernetes"],
      stats: [
        { val: "< 5s", lbl: "detection latency" },
        { val: "3.4M+", lbl: "events per day" },
        { val: "0-100", lbl: "risk scoring" }
      ]
    },
    {
      num: "02",
      title: "Autonomous SOAR — Orchestrate & Respond",
      color: "purple",
      accent: "bg-accent",
      badge: "border-accent/30 bg-accent/10 text-accent",
      icon: <Zap size={24} className="text-accent" />,
      description: "Takes risk scores from Layer 1 and executes automated response playbooks without waiting for human approval. Integrates with your existing firewalls, EDR, identity providers, and cloud platforms via REST APIs.",
      outputs: [
        "Block malicious IP at firewall (< 2s)",
        "Isolate compromised endpoint from network",
        "Disable compromised user account in AD/Okta",
        "Detonate suspicious files in sandboxed environment",
        "Auto-create incident ticket with full context"
      ],
      techStack: ["Python Microservices", "FastAPI", "Kubernetes", "REST APIs", "Okta", "Microsoft 365", "AWS Security Hub", "Spring Boot", "Kafka"],
      stats: [
        { val: "< 10s", lbl: "automated response" }
      ]
    },
    {
      num: "03",
      title: "AI Red Team Simulator — Continuous Attack Emulation",
      color: "amber",
      accent: "bg-amber-500",
      badge: "border-[#F59E0B]/30 bg-amber-500/10 text-[#F59E0B]",
      icon: <Target size={24} className="text-amber-500" />,
      description: "Runs continuous simulated attacks against your own infrastructure — exactly like a real attacker would. Uses reinforcement learning to adapt attack paths based on your system's responses, covering 200+ MITRE ATT&CK techniques.",
      outputs: [
        "Phishing → credential harvesting → lateral movement",
        "Privilege escalation via LOLBin abuse",
        "Data exfiltration via DNS tunneling",
        "Cloud misconfiguration exploitation",
        "Ransomware deployment simulation (safe mode)"
      ],
      techStack: ["Reinforcement Learning", "MITRE ATT&CK", "Q-Learning", "Python", "Docker", "Attack Graph Generation"],
      stats: [
        { val: "200+", lbl: "MITRE techniques covered" },
        { val: "30%", lbl: "breach probability reduction" }
      ]
    },
    {
      num: "04",
      title: "Self-Healing & Deception Engine",
      color: "pink",
      accent: "bg-[#EC4899]",
      badge: "border-[#EC4899]/30 bg-[#EC4899]/10 text-[#EC4899]",
      icon: <RefreshCcw size={24} className="text-[#EC4899]" />,
      description: "4.1 Self-Healing: Automatically isolates infected endpoints and rolls them back to the last clean snapshot — without any manual intervention. Recovery happens in under 5 minutes, ensuring business continuity even during active attacks.\n\n4.2 Adaptive Deception: Deploys dynamic honeypots — fake servers, fake credentials, synthetic logs — to lure attackers away from real assets and gather intelligence on their tactics.",
      outputs: [
        "Windows: Volume Shadow Copy Service (VSS) rollback",
        "Linux/Containers: Docker checkpoint snapshots",
        "Network: Automatic VLAN isolation",
        "Honeypot engagement rate: +35% with generative AI lures",
        "Real-time attacker TTP capture"
      ],
      techStack: ["VSS Windows", "Docker Snapshots", "Honeyd", "OpenCanary", "Generative AI", "Machine Learning", "Python"],
      stats: [
        { val: "< 5 min", lbl: "recovery time" }
      ]
    },
    {
      num: "05",
      title: "Threat Intelligence Swarm — Collective Learning",
      color: "teal",
      accent: "bg-[#14B8A6]",
      badge: "border-[#14B8A6]/30 bg-[#14B8A6]/10 text-[#14B8A6]",
      icon: <Globe size={24} className="text-[#14B8A6]" />,
      description: "Every ACIS deployment contributes anonymized attack intelligence to a federated learning network. The global model improves continuously — meaning the more customers ACIS has, the smarter every individual deployment becomes. Individual client data never leaves their environment.",
      outputs: [
        "Only model parameters shared — never raw logs",
        "Post-quantum cryptography (CRYSTALS-Dilithium)",
        "Privacy-preserving federated architecture",
        "Edge + cloud hybrid — works air-gapped"
      ],
      techStack: ["Federated Learning", "CRYSTALS-Dilithium", "FAISS", "LangChain", "Vector Embeddings", "Edge Computing", "Blockchain Consensus", "Python"],
      stats: [
        { val: "10,000+", lbl: "client nodes" },
        { val: "25%", lbl: "training overhead reduction" }
      ]
    }
  ];

  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.1em]">TECHNICAL ARCHITECTURE</span>
          <h2 className="text-[40px] font-bold text-text-primary mt-2 mb-4">Five Autonomous Layers</h2>
          <p className="text-[14px] text-text-secondary max-w-[600px]">
            Each layer feeds the next. Together they form an immune system that detects, responds, heals, and learns.
          </p>
        </div>

        <div className="space-y-4">
          {layers.map((layer, idx) => (
            <div key={idx} className="bg-surface-raised border border-border rounded-xl flex overflow-hidden">
              <div className={`w-[4px] shrink-0 ${layer.accent}`}></div>
              <div className="p-6 md:p-7 w-full">
                <div className="flex items-center gap-3 mb-6">
                  <span className={`px-3 py-1 rounded-full border text-[11px] font-semibold uppercase ${layer.badge}`}>
                    LAYER {layer.num}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center">{layer.icon}</div>
                  <h3 className="text-xl font-bold text-text-primary m-0">{layer.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div>
                    <h4 className="text-sm font-semibold text-text-primary mb-2 uppercase tracking-wide">What it does</h4>
                    {layer.description.split('\n\n').map((para, i) => (
                      <p key={i} className="text-[13px] text-text-secondary leading-relaxed mb-4">{para}</p>
                    ))}

                    <h4 className="text-sm font-semibold text-text-primary mb-2 mt-4">Key Features / Outputs:</h4>
                    <ul className="space-y-1.5 list-disc list-inside text-[13px] text-text-secondary">
                      {layer.outputs.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="bg-surface border border-border rounded-lg p-5">
                      <h4 className="text-sm font-semibold text-text-primary mb-4">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {layer.techStack.map((tech, i) => (
                          <span key={i} className={`border border-border bg-surface text-text-secondary rounded px-2.5 py-1 text-[11px] font-medium`}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-6 pt-4 border-t border-border">
                        {layer.stats.map((stat, i) => (
                          <div key={i}>
                            <div className={`text-lg font-bold text-text-primary`}>{stat.val}</div>
                            <div className="text-[10px] text-text-secondary uppercase tracking-wider">{stat.lbl}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FeaturesSection = () => {
  const features = [
    { icon: <Activity size={20} />, title: "Real-Time Threat Correlation", desc: "LSTM neural networks and Isolation Forest models process 3.4M+ events daily, correlating across all sources to surface only the threats that matter.", color: "text-accent", bg: "bg-accent/10" },
    { icon: <Zap size={20} />, title: "Sub-10-Second Automated Response", desc: "When a threat is confirmed, ACIS executes response playbooks automatically — blocking IPs, isolating endpoints, resetting credentials — before damage spreads.", color: "text-[#14B8A6]", bg: "bg-[#14B8A6]/10" },
    { icon: <RefreshCcw size={20} />, title: "Self-Healing Endpoints", desc: "Compromised devices are automatically isolated and restored to their last clean state using VSS snapshots and Docker checkpoints. Recovery in < 5 min.", color: "text-[#EC4899]", bg: "bg-[#EC4899]/10" },
    { icon: <Target size={20} />, title: "AI Red Team Always-On", desc: "Continuous adversary simulation using 200+ MITRE ATT&CK techniques. Finds your gaps before attackers do — proven to reduce breach probability by 30%.", color: "text-amber-500", bg: "bg-amber-500/10" },
    { icon: <GitMerge size={20} />, title: "Swarm Intelligence Network", desc: "Federated learning across 10,000+ deployments means every new threat discovered by any ACIS customer automatically improves your defenses within minutes.", color: "text-[#3B82F6]", bg: "bg-[#3B82F6]/10" },
    { icon: <Search size={20} />, title: "SPL-Like Log Explorer", desc: "Search millions of events with a familiar Splunk-like query syntax. Syntax highlighting, saved searches, CSV export, and sub-second results powered by Elasticsearch.", color: "text-accent", bg: "bg-accent/10" },
    { icon: <CheckCircle size={20} />, title: "Compliance Auto-Monitoring", desc: "Continuous GDPR, and ISO/IEC 27001:2022 posture tracking. Automated evidence collection and one-click report generation for your compliance team.", color: "text-[#14B8A6]", bg: "bg-[#14B8A6]/10" },
    { icon: <GitMerge size={20} />, title: "SOAR Playbook Engine", desc: "Build and automate response workflows with pre-built connectors for Palo Alto, Microsoft 365, Okta, AWS Security Hub, and 20+ more integrations.", color: "text-amber-500", bg: "bg-amber-500/10" },
    { icon: <Server size={20} />, title: "Multi-Tenant SaaS or On-Prem", desc: "Deploy as cloud SaaS, private cloud, or fully on-premises. Helm charts for Kubernetes. Row-level tenant isolation. Air-gap compatible for regulated sectors.", color: "text-[#EC4899]", bg: "bg-[#EC4899]/10" }
  ];

  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.1em]">KEY FEATURES</span>
          <h2 className="text-[40px] font-bold text-text-primary mt-2">Everything Your SOC Needs</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          {features.map((f, idx) => (
            <div key={idx} className="bg-surface-raised border border-border rounded-xl p-6 transition-colors hover:border-border/80 hover:bg-surface-raised/90">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl mb-4 ${f.bg} ${f.color}`}>
                {f.icon}
              </div>
              <h3 className="text-[16px] font-semibold text-text-primary mb-2">{f.title}</h3>
              <p className="text-[13px] text-text-secondary leading-[1.6]">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const UseCasesSection = () => {
  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 text-center md:text-left">
          <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.1em]">USE CASES</span>
          <h2 className="text-[40px] font-bold text-text-primary mt-2 mb-4">Built for Teams Without a 24/7 SOC</h2>
          <p className="text-[15px] text-text-secondary max-w-[600px] mx-auto md:mx-0">
            ACIS was designed from the ground up for organisations that face enterprise-grade threats but don't have enterprise-grade budgets.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="bg-surface border border-border rounded-xl p-7">
            <Building2 size={36} className="text-accent mb-4" />
            <span className="inline-block px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-[11px] font-semibold uppercase tracking-wider mb-4">
              SME & Mid-Market
            </span>
            <h3 className="text-xl font-bold text-text-primary mb-3">No SOC? No Problem.</h3>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-5">
              ACIS replaces the need for a 24/7 Security Operations Center. Automated detection, response, and healing means your business is protected even when nobody is watching. Ideal for 10–500 employee companies.
            </p>
            <div>
              <h4 className="text-[12px] font-semibold text-text-primary mb-2 uppercase tracking-wide">What you replace:</h4>
              <ul className="text-[13px] text-text-secondary space-y-1">
                <li>• Full SOC team (£200K–£500K/year saved)</li>
                <li>• Splunk / QRadar enterprise licence</li>
                <li>• Manual penetration testing</li>
                <li>• Siloed point security tools</li>
              </ul>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-7">
            <ShieldCheck size={36} className="text-[#14B8A6] mb-4" />
            <span className="inline-block px-3 py-1 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 text-[#14B8A6] text-[11px] font-semibold uppercase tracking-wider mb-4">
              Compliance-Driven
            </span>
            <h3 className="text-xl font-bold text-text-primary mb-3">GDPR, ISO/IEC 27001:2022 — Done.</h3>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-5">
              Regulators are increasing pressure on UK and EU SMEs. ACIS continuously monitors your posture against GDPR requirements, and ISO/IEC 27001:2022 Annex A controls — and generates audit reports on demand.
            </p>
            <div>
              <h4 className="text-[12px] font-semibold text-text-primary mb-2 uppercase tracking-wide">Frameworks covered:</h4>
              <ul className="text-[13px] text-text-secondary space-y-1">

                <li>• GDPR — 88% control coverage</li>
                <li>• ISO/IEC 27001:2022:2022 — 74% coverage</li>
                <li>• UK Cyber Essentials — Full alignment</li>
              </ul>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-7">
            <div className="text-3xl text-[#F59E0B] mb-4">🌐</div>
            <span className="inline-block px-3 py-1 rounded-full border border-[#F59E0B]/30 bg-amber-500/10 text-[#F59E0B] text-[11px] font-semibold uppercase tracking-wider mb-4">
              MSSP / Reseller
            </span>
            <h3 className="text-xl font-bold text-text-primary mb-3">White-Label for Your Clients.</h3>
            <p className="text-[14px] text-text-secondary leading-relaxed mb-5">
              MSSPs can deploy ACIS as a multi-tenant platform and offer autonomous SOC-as-a-service to their SME clients. Each tenant is fully isolated. Branded portal available. API-first architecture for integration.
            </p>
            <div>
              <h4 className="text-[12px] font-semibold text-text-primary mb-2 uppercase tracking-wide">MSSP features:</h4>
              <ul className="text-[13px] text-text-secondary space-y-1">
                <li>• Full multi-tenancy with isolation</li>
                <li>• White-label portal (custom domain)</li>
                <li>• Aggregated cross-tenant intel</li>
                <li>• Bulk deployment via Helm charts</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TechStackSection = () => {
  const categories = [
    { title: "Ingestion & Streaming", pills: ["Kafka", "Kafka Connect", "Apache Flink", "Logstash", "Fluentd"] },
    { title: "AI / ML Engine", pills: ["Python 3.11", "PyTorch", "scikit-learn", "LangChain", "FAISS", "OpenAI API", "FastAPI"] },
    { title: "Storage", pills: ["Elasticsearch 8.x", "ClickHouse", "PostgreSQL 16", "MinIO S3", "Redis"] },
    { title: "Backend & Infra", pills: ["Spring Boot 3.x", "Java 21", "Docker", "Kubernetes", "Helm", "Prometheus", "Grafana", "GitHub Actions"] }
  ];

  return (
    <section className="bg-surface py-24 px-6 relative">
      <div className="max-w-[1200px] mx-auto text-center md:text-left">
        <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <span className="text-[12px] font-bold text-accent uppercase tracking-[0.2em]">TECHNOLOGY</span>
            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mt-3">Enterprise-Grade Stack</h2>
          </div>
          <p className="text-base text-text-secondary max-w-[500px]">
            Built on battle-tested open-source foundations with a production Kubernetes backbone.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="premium-card p-8 flex flex-col h-full relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent opacity-5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              <h3 className="text-lg font-bold text-text-primary mb-6 border-b border-border pb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.pills.map((pill, i) => (
                  <span key={i} className="bg-surface border border-border text-text-secondary hover:text-accent hover:border-accent/40 rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors cursor-default">
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const MetricsSection = () => {
  const metrics = [
    { val: "< 5s", lbl: "Detection Latency", desc: "From log ingestion to risk score" },
    { val: "< 10s", lbl: "Automated Response", desc: "Playbook execution time" },
    { val: "< 5min", lbl: "Endpoint Recovery", desc: "Isolation to clean rollback" },
    { val: "99.8%", lbl: "Threat Neutralization", desc: "Threats contained automatically" },
    { val: "3.4M+", lbl: "Events Per Day", desc: "Processed per deployment" },
    { val: "200+", lbl: "MITRE Techniques", desc: "Covered by red team simulator" },

    { val: "30%", lbl: "Breach Reduction", desc: "Vs. rule-based SIEM alone" }
  ];

  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-[36px] font-bold text-text-primary mb-3">Numbers That Matter</h2>
        <p className="text-[15px] text-text-secondary mb-12">Real performance benchmarks from ACIS production deployments.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div key={idx} className="p-[1px] rounded-[13px] bg-gradient-to-br from-purple-500/50 to-teal-500/50">
              <div className="bg-surface-raised rounded-xl p-7 h-full flex flex-col justify-center">
                <div className="text-[42px] font-bold bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent leading-none">
                  {m.val}
                </div>
                <div className="text-[13px] font-medium text-text-secondary mt-3 uppercase tracking-wider">{m.lbl}</div>
                <div className="text-[11px] text-text-secondary mt-2">{m.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    { q: "What is ACIS and how is it different from Splunk?", a: "ACIS is a fully autonomous cybersecurity platform that combines SIEM, SOAR, AI Red Team, Self-Healing, and Threat Intelligence in one product. Splunk is a powerful log management tool that requires significant human expertise, a dedicated SOC team, and expensive add-ons for automation. ACIS was designed to operate without a 24/7 human team — making enterprise-grade security accessible to SMEs at a fraction of the cost." },
    { q: "Do I need a cybersecurity team to use ACIS?", a: "No. ACIS is designed for organisations without dedicated security teams. The platform detects, responds, and heals autonomously. You receive alerts when something requires human review, but the initial containment and response happens automatically within 10 seconds of detection." },
    { q: "How long does it take to deploy ACIS?", a: "For cloud SaaS deployment, most customers are fully operational within 3–5 business days. This includes connecting your log sources, configuring correlation rules, and onboarding your team. On-premises Kubernetes deployment typically takes 1–2 weeks with support from our team." },
    { q: "Does ACIS work with our existing security tools?", a: "Yes. ACIS integrates via REST APIs with Palo Alto firewalls, Microsoft 365, Okta, AWS Security Hub, CrowdStrike, SentinelOne, and 20+ other platforms. Kafka Connect has pre-built connectors for most enterprise log sources." },
    { q: "How does the Swarm Intelligence work without sharing our data?", a: "ACIS uses federated learning — only mathematical model parameters (not raw logs or events) are shared with the swarm network. Your log data never leaves your environment. The parameters are additionally encrypted using post-quantum cryptography (CRYSTALS-Dilithium), making them future-proof against quantum computing attacks." },
    { q: "Is ACIS compliant with GDPR?", a: "ACIS is built with GDPR compliance as core design requirements. Out of the box it satisfies 88% of GDPR technical measures. The platform generates audit reports, maintains an immutable audit trail, and supports data residency requirements." },
    { q: "Can MSSPs resell ACIS?", a: "Yes. ACIS has a dedicated MSSP tier with full multi-tenancy, white-label portal, custom domain support, and aggregated cross-tenant threat intelligence. Contact us for reseller pricing and partnership details." },
    { q: "What happens if ACIS incorrectly isolates a legitimate endpoint?", a: "ACIS risk scoring uses a 0–100 confidence scale and only triggers automatic isolation above threshold 95. All automated actions are logged in the audit trail and can be reversed with one click from the Endpoints module. Recovery from a false-positive isolation takes under 60 seconds." }
  ];

  return (
    <section className="bg-surface py-20 px-6">
      <div className="max-w-[720px] mx-auto">
        <div className="text-center mb-10">
          {/* <span className="text-[11px] font-semibold text-accent uppercase tracking-[0.1em]">FAQ</span> */}
         <h2 className="text-[36px] font-bold text-text-primary mt-2">FAQs</h2>
        </div>

        <div className="mt-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-border">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full py-[18px] flex justify-between items-center text-left"
              >
                <span className="text-[15px] font-medium text-text-primary pr-4">{faq.q}</span>
                <span className={`text-accent text-xl transition-transform duration-200 ${openIdx === idx ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIdx === idx && (
                <div className="pb-4 text-[13px] text-text-secondary leading-[1.7] animate-[fadeIn_0.2s_ease-out]">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const RegisterSection = () => {
  const [formData, setFormData] = useState({
    name: '', title: '', email: '', phone: '', company: '', size: '', challenge: '', source: '', extra: '', agree: false
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name) newErrors.name = "Required";
    if (!formData.title) newErrors.title = "Required";
    if (!formData.email) newErrors.email = "Required";
    if (!formData.company) newErrors.company = "Required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
    }, 1200);
  };

  const inputClasses = "bg-surface border border-border rounded-lg text-text-primary text-[14px] p-[11px_14px] w-full outline-none transition-colors focus:border-accent focus:ring-3 focus:ring-[#A855F7]/10 placeholder-[#475569]";

  return (
    <section id="register" className="bg-surface py-[100px] px-6">
      <div className="max-w-[560px] mx-auto text-center">
        <span className="inline-block px-3 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent text-[11px] font-semibold uppercase tracking-wider mb-4">
          EARLY ACCESS
        </span>
        <h2 className="text-[36px] font-bold text-text-primary mb-3">Get Early Access to ACIS</h2>
        <p className="text-[15px] text-text-secondary mb-8">
          Join the waitlist. We'll reach out when ACIS is available for onboarding in your region.
        </p>

        <div className="bg-surface-raised border border-border rounded-2xl p-8 md:p-10 text-left relative overflow-hidden shadow-2xl">
          {success ? (
            <div className="text-center py-10 animate-[fadeIn_0.5s_ease-out]">
              <div className="w-[60px] h-[60px] rounded-full bg-[#14B8A6] flex items-center justify-center  text-3xl mx-auto mb-6">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-3">You're on the list!</h3>
              <p className="text-[15px] text-text-secondary mb-6 leading-relaxed">
                Thanks {formData.name.split(' ')[0] || formData.name}. We'll be in touch at <span className="text-text-primary font-medium">{formData.email}</span> when ACIS is ready for your region.
              </p>
              <a href="#" className="text-[13px] font-semibold text-accent hover:underline">Follow us on LinkedIn for updates →</a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input type="text" placeholder="Full Name *" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} className={inputClasses} />
                  {errors.name && <div className="text-[12px] text-[#EF4444] mt-1">{errors.name}</div>}
                </div>
                <div>
                  <input type="text" placeholder="Job Title *" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className={inputClasses} />
                  {errors.title && <div className="text-[12px] text-[#EF4444] mt-1">{errors.title}</div>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <input type="email" placeholder="Work Email *" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} className={inputClasses} />
                  {errors.email && <div className="text-[12px] text-[#EF4444] mt-1">{errors.email}</div>}
                </div>
                <div>
                  <input type="tel" placeholder="Phone" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} className={inputClasses} />
                </div>
              </div>

              <div>
                <input type="text" placeholder="Company Name *" value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} className={inputClasses} />
                {errors.company && <div className="text-[12px] text-[#EF4444] mt-1">{errors.company}</div>}
              </div>

              <div>
                <select value={formData.size} onChange={e => setFormData({ ...formData, size: e.target.value })} className={inputClasses}>
                  <option value="">Select company size</option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="201-500">201–500</option>
                  <option value="500+">500+</option>
                </select>
              </div>

              <div>
                <select value={formData.challenge} onChange={e => setFormData({ ...formData, challenge: e.target.value })} className={inputClasses}>
                  <option value="">What's your biggest security challenge?</option>
                  <option value="No SOC">No 24/7 SOC coverage</option>
                  <option value="False Positives">Too many false positive alerts</option>
                  <option value="Slow IR">Slow incident response times</option>
                  <option value="Compliance">Compliance requirements (GDPR)</option>
                  <option value="Cost">High cost of existing SIEM tools</option>
                  <option value="Expertise">Lack of internal security expertise</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <select value={formData.source} onChange={e => setFormData({ ...formData, source: e.target.value })} className={inputClasses}>
                  <option value="">How did you hear about Netcradus?</option>
                  <option value="Google">Google Search</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Referral">Referral</option>
                  <option value="Conference">Cybersecurity conference</option>
                  <option value="News">News article</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <textarea rows="3" placeholder="Anything else you'd like us to know? Tell us about your current security setup, team size, or specific requirements..." value={formData.extra} onChange={e => setFormData({ ...formData, extra: e.target.value })} className={`${inputClasses} resize-none min-h-[90px]`}></textarea>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input type="checkbox" id="agree" checked={formData.agree} onChange={e => setFormData({ ...formData, agree: e.target.checked })} className="mt-1 flex-shrink-0" />
                <label htmlFor="agree" className="text-[13px] text-text-secondary select-none">
                  Optional: I would like to receive updates about ACIS and related Netcradus products.
                </label>
              </div>

              <div className="py-2 text-left">
                <FormPrivacyNotice
                  purpose="processing your early-access request and contacting you about the requested ACIS information"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-br bg-brand-gradient  text-[15px] font-semibold py-[15px] rounded-lg transition-all duration-200 mt-2 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Request Early Access →'}
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <span className="text-[11px] font-medium text-text-secondary tracking-wider uppercase flex items-center gap-1.5"><Lock size={14} className="mr-1" /> Privacy-conscious design</span>
          <span className="text-[11px] font-medium text-text-secondary tracking-wider uppercase flex items-center gap-1.5"><Shield size={14} className="mr-1" /> ISO/IEC 27001:2022</span>

        </div>
      </div>
    </section>
  );
};

export const FooterCTA = () => {
  return (
    <section className="bg-surface-raised relative overflow-hidden border-t border-accent/20 py-[60px] px-6 text-center">
      <h2 className="text-[32px] font-bold text-text-primary">Ready to Protect Your Business?</h2>
      <p className="text-[16px] text-text-secondary max-w-[600px] mx-auto mt-3 mb-8">
        Join the organisations already on the ACIS waitlist. Early access customers receive 3 months free.
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <a href="/contact" className="bg-brand-gradient  text-[15px] font-semibold py-[13px] px-[28px] rounded-lg transition-all duration-200 ">
          Request Early Access
        </a>
      </div>
      <p className="text-[12px] text-text-secondary">
        14-day free trial · No credit card · Cancel anytime
      </p>
    </section>
  );
};

// Section: ACIS Packages & Comparison Table
export const AcisPackagesComparisonSection = () => {
  const packages = [
    {
      id: "lite",
      name: "ACIS Lite",
      bannerBg: "bg-gradient-to-r from-[#1E1B4B] to-[#312E81]",
      bannerText: "ACIS Lite",
      tagline: "Essential enterprise-grade cybersecurity for growing SMBs, clinics & schools.",
      price: "₹24,999",
      pricePeriod: "/ month",
      taxInfo: "+ 18% GST extra · Billed as agreed",
      commitment: "Minimum term: 3 months",
      linkTo: "/pricing/acis-lite",
      ctaText: "Explore ACIS Lite",
      isFeatured: false,
      accentColor: "#0099FF",
      features: [
        { text: "Up to 100 Endpoints", bold: false },
        { text: "500 GB Monthly Log Storage", bold: false },
        { text: "24×7 SOC Alert Escalation", bold: false },
        { text: "Autonomous AI Threat Engine & Response", bold: false },
        { text: "Ransomware Containment & Self-Healing", bold: false },
        { text: "Ready Reports (ISO 27001, CERT-In)", bold: false },
        { text: "Lightweight Agent across Win, Linux & Cloud", bold: false },
      ],
    },
    {
      id: "pro",
      name: "ACIS Pro",
      badge: "MOST POPULAR",
      bannerBg: "bg-gradient-to-r from-[#FF5500] via-[#FF6B00] to-[#FF8800]",
      bannerText: "ACIS Pro",
      tagline: "Advanced AI threat detection & SOAR response for SMEs, SaaS & manufacturing.",
      price: "₹74,999",
      pricePeriod: "/ month",
      taxInfo: "+ 18% GST extra · Billed per contract",
      commitment: "Contract commitment: Up to 6 months",
      linkTo: "/pricing/acis-pro",
      ctaText: "Talk to Sales",
      isFeatured: true,
      accentColor: "#FF6B00",
      featuresHeader: "Everything in ACIS Lite, plus:",
      features: [
        { text: "100 Endpoints (Up to 250 Users)", bold: true },
        { text: "2 TB Monthly Log Storage", bold: true },
        { text: "UEBA (User & Entity Behavior Analytics)", bold: true },
        { text: "Automated SOAR Playbook Execution", bold: true },
        { text: "Priority 24×5 Support & SLA Included", bold: true },
        { text: "Advanced Threat Intelligence Feeds", bold: false },
        { text: "Cloud SOC Integration Options", bold: false },
      ],
    },
    {
      id: "enterprise",
      name: "ACIS Enterprise",
      badge: "ENTERPRISE",
      bannerBg: "bg-gradient-to-r from-[#0F2942] to-[#1E3A5F]",
      bannerText: "ACIS Enterprise",
      tagline: "Tailored partnership for high-compliance Banks, NBFCs, Gov & Enterprises.",
      price: "₹2,49,999",
      pricePeriod: "/ month",
      taxInfo: "+ 18% GST extra · Monthly or Annual",
      commitment: "Contract commitment: Up to 12 months",
      linkTo: "/pricing/acis-enterprise",
      ctaText: "Contact Us",
      isFeatured: false,
      accentColor: "#10B981",
      featuresHeader: "Everything in ACIS Pro, plus:",
      features: [
        { text: "Custom Endpoints & Log Ingestion (500+ Users)", bold: true },
        { text: "6 TB Monthly Log Storage Included", bold: true },
        { text: "Custom SOAR Playbooks & Premium Intel", bold: true },
        { text: "Dedicated 24×7 SOC & Named CSM", bold: true },
        { text: "Zero Trust PAM & IAM Integration", bold: true },
        { text: "Immutable Audit Trail & On-Prem K8s", bold: false },
        { text: "Post-Quantum Cryptography Protection", bold: false },
      ],
    },
  ];

  return (
    <section id="packages" className="bg-[#05060A] py-24 px-4 sm:px-6 relative overflow-hidden border-t border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.12)_0%,transparent_70%)] pointer-events-none blur-[100px]" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full border border-accent/40 bg-accent/15 text-accent text-xs font-black uppercase tracking-[0.25em]">
            PACKAGE COMPARISON
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif]">
            Change your package
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Select the right autonomous cybersecurity tier engineered for your infrastructure scale, log volume, and compliance needs.
          </p>
        </div>

        {/* 3 Tiers Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-stretch pt-4">
          {packages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                  pkg.isFeatured
                    ? "bg-[#0c0f1d] border-2 border-[#FF6B00] shadow-[0_20px_60px_rgba(255,107,0,0.25)] lg:-translate-y-4 z-20 scale-[1.02] lg:scale-105"
                    : "bg-[#0A0D18]/90 border border-white/12 hover:border-white/25 shadow-xl hover:-translate-y-1 z-10"
                }`}
              >
                {/* Top Banner Header (matching reference design layout) */}
                <div className={`p-8 text-center relative ${pkg.bannerBg}`}>
                  {pkg.badge && (
                    <span className="absolute top-3 right-4 text-[10px] font-extrabold uppercase tracking-widest bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20">
                      {pkg.badge}
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow font-['Space_Grotesk',sans-serif] mt-1">
                    {pkg.bannerText}
                  </h3>
                </div>

                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  
                  <div>
                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-gray-300 text-center leading-relaxed min-h-[40px] mb-6 font-medium">
                      {pkg.tagline}
                    </p>

                    {/* CTA Button (Top placement as in reference design) */}
                    <div className="mb-6">
                      <Link
                        to={pkg.linkTo}
                        className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm text-center block transition-all duration-300 no-underline ${
                          pkg.isFeatured
                            ? "bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white shadow-lg hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] hover:scale-[1.02]"
                            : "bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40"
                        }`}
                      >
                        {pkg.ctaText}
                      </Link>
                    </div>

                    {/* Price & Billing Info */}
                    <div className="pb-6 mb-6 border-b border-white/10 text-center">
                      <div className="flex items-baseline justify-center gap-1.5">
                        <span className="text-4xl sm:text-5xl font-black text-white font-['Space_Grotesk',sans-serif] tracking-tight">
                          {pkg.price}
                        </span>
                        <span className="text-gray-400 text-sm font-medium">{pkg.pricePeriod}</span>
                      </div>
                      <p className="text-[11px] text-gray-400 mt-1 font-medium">{pkg.taxInfo}</p>
                      <p className="text-[11px] text-accent mt-1 font-semibold">{pkg.commitment}</p>
                    </div>

                    <div className="space-y-3 mb-8">
                      {pkg.featuresHeader && (
                        <p className="text-xs font-bold text-white mb-3 tracking-wide">
                          {pkg.featuresHeader}
                        </p>
                      )}
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                          <span 
                            className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                            style={{ backgroundColor: `${pkg.accentColor}25`, color: pkg.accentColor }}
                          >
                            ✓
                          </span>
                          <span className={`${feat.bold ? "font-semibold text-white" : "text-gray-300"}`}>
                            {feat.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Learn More Link */}
                  <div className="pt-4 border-t border-white/10 text-center">
                    <Link
                      to={pkg.linkTo}
                      className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors no-underline group/link"
                      style={{ color: pkg.accentColor }}
                    >
                      <span>Learn about {pkg.name}</span>
                      <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Disclaimer */}
        <p className="text-center text-[11px] text-gray-400 mt-12 font-medium">
          * Payment processing and taxes (18% GST) will apply to all packages. Contact sales for custom enterprise volume discounts.
        </p>

      </div>
    </section>
  );
};

export default function ACISPage() {
  usePageMeta(SEO_META.acis.title, SEO_META.acis.description);

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="font-sans text-text-primary bg-surface overflow-x-hidden selection:bg-accent/30">
      <AcisHeroSection />
      <OrbitDiagram />
      <PlatformStrip />
      <ClosedLoopSection />
      <PlatformSection />
      <ArchitectureLayersSection />
      <FeaturesSection />
      <UseCasesSection />
      <TechStackSection />
      <MetricsSection />
      <AcisPackagesComparisonSection />
      <FAQSection />
      {/* <RegisterSection /> */}
      <FooterCTA />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-7 right-7 w-8 h-8 rounded-full bg-accent  flex items-center justify-center text-[14px] z-50 shadow-lg hover:bg-[#9333EA] transition-colors"
        >
          ↑
        </button>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
