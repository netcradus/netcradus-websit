import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, AlertTriangle, FileText, Bug, ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

const platformsData = [
  {
    id: 'soc',
    name: 'SOC Platform',
    accent: '#7C3AED',
    bgGlow: 'rgba(124, 58, 237, 0.15)',
    borderGlow: 'rgba(124, 58, 237, 0.4)',
    tagline: '"Detect, hunt, and respond to threats in real time."',
    icon: Shield,
    url: 'app.netcradus.com/soc-dashboard',
    image: '/assets/acis-soc-dashboard.png',
    description: 'The SOC Platform serves as the central security command center. It unifies SIEM, SOAR, and real-time telemetry stream processing to eliminate security blind spots and allow security analysts to triage alerts, execute playbooks, and contain incidents at machine speed.',
    bullets: [
      'Security Operations Center (SOC) Console',
      'AI-Powered SIEM Log Aggregation',
      'SOAR Automated Incident Containment',
      'Hypothesis-Driven Threat Hunting',
      'Real-Time Threat Intelligence Integration',
      'Cross-Platform Endpoint Protection'
    ]
  },
  {
    id: 'identity',
    name: 'Identity & Access Platform',
    accent: '#EC4899',
    bgGlow: 'rgba(236, 72, 153, 0.15)',
    borderGlow: 'rgba(236, 72, 153, 0.4)',
    tagline: '"Verify every identity and enforce least-privilege access."',
    icon: Users,
    url: 'app.netcradus.com/assets-and-identities',
    image: '/assets/acis-identity-assets.png',
    description: 'Enforce continuous identity verification and dynamic zero-trust access policies across corporate networks, multi-cloud workspaces, and API endpoints. Automatically detect compromised credentials and anomalous lateral movement before privileges can be escalated.',
    bullets: [
      'Identity & Access Management (IAM)',
      'Privileged Access Management (PAM)',
      'Digital Identity Risk Scoring',
      'Adaptive Zero-Trust Architecture',
      'MFA & Session Anomaly Detection',
      'Automated Access Revocation Playbooks'
    ]
  },
  {
    id: 'risk',
    name: 'Risk & Vulnerability Platform',
    accent: '#F97316',
    bgGlow: 'rgba(249, 115, 22, 0.15)',
    borderGlow: 'rgba(249, 115, 22, 0.4)',
    tagline: '"Find, prioritize, and remediate exposure before attackers do."',
    icon: AlertTriangle,
    url: 'app.netcradus.com/compliance-and-risk-audit',
    image: '/assets/acis-compliance-risk.png',
    description: 'Continuous attack surface management that discovers assets, scans for software vulnerabilities, and prioritizes remediation work lists based on business criticality and active exploitation telemetry.',
    bullets: [
      'Continuous Vulnerability Management',
      'Cyber Risk Prioritization Engine',
      'Automated Patch Deployment Guidance',
      'Governance, Risk & Compliance (GRC)',
      'Asset Discovery & Dependency Mapping',
      'ISO 27001 & SOC 2 Compliance Drift Alerts'
    ]
  },
  {
    id: 'data',
    name: 'Data & AppSec Platform',
    accent: '#3B82F6',
    bgGlow: 'rgba(59, 130, 246, 0.15)',
    borderGlow: 'rgba(59, 130, 246, 0.4)',
    tagline: '"Protect sensitive data and secure applications end to end."',
    icon: FileText,
    url: 'app.netcradus.com/cloud-on-premises-hub',
    image: '/assets/acis-cloud-appsec.png',
    description: 'Protect critical data assets across multi-cloud environments, databases, and microservice APIs. Monitor sensitive data flows, enforce Data Loss Prevention (DLP) rules, and secure web application endpoints against OWASP Top 10 exploits.',
    bullets: [
      'Data Loss Prevention (DLP)',
      'Enterprise Data Classification & Masking',
      'API Security & Web Application Defense',
      'Application Security (AppSec) Scans',
      'Cloud Workload & Container Protection',
      'High-Speed Log Explorer & SPL Query Engine'
    ]
  },
  {
    id: 'analysis',
    name: 'Threat Analysis Platform',
    accent: '#10B981',
    bgGlow: 'rgba(16, 185, 129, 0.15)',
    borderGlow: 'rgba(16, 185, 129, 0.4)',
    tagline: '"Reverse-engineer and profile adversary tradecraft."',
    icon: Bug,
    url: 'app.netcradus.com/intelligent-threat-detection',
    image: '/assets/acis-threat-detection-engine.png',
    description: 'Deep malware analysis, interactive sandboxing, and IOC enrichment powered by global ACIS swarm nodes. Uncover adversary tactics, techniques, and procedures (TTPs) mapped directly to the MITRE ATT&CK matrix.',
    bullets: [
      'Automated Malware Static & Dynamic Analysis',
      'Binary Reverse Engineering Sandbox',
      'Global Threat Intelligence Swarm Feed',
      'MITRE ATT&CK Adversary TTP Mapping',
      'IOC Extraction & Hash Reputation Lookups',
      'Proactive Threat Hunting Feeds'
    ]
  }
];

export default function PlatformShowcaseSlider({ onOpenLightbox }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentPlatform = platformsData[activeIdx];
  const IconComponent = currentPlatform.icon;

  // Auto-play slideshow every 6 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % platformsData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % platformsData.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + platformsData.length) % platformsData.length);
  };

  return (
    <section 
      className="relative bg-[#07040d] py-20 md:py-28 border-t border-white/10 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Ambient Glows */}
      <div 
        className="absolute inset-0 transition-all duration-700 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${currentPlatform.bgGlow} 0%, transparent 70%)`
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-[0.25em] text-[#ff8ad8] mb-3">
            PLATFORM ARCHITECTURE SHOWCASE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Five Specialized Platforms.<br />One Unified Ecosystem.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400 font-medium">
            Select a platform below to inspect live dashboard telemetry, features, and capabilities side-by-side.
          </p>
        </div>

        {/* 1. Interactive Top Tabs Bar */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-10 justify-start md:justify-center scrollbar-hide no-scrollbar">
          {platformsData.map((plat, idx) => {
            const isActive = idx === activeIdx;
            const PlatIcon = plat.icon;
            return (
              <button
                key={plat.id}
                onClick={() => setActiveIdx(idx)}
                className={`group relative flex items-center gap-2.5 px-5 py-3 rounded-xl border text-xs sm:text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                  isActive
                    ? 'bg-white/10 text-white shadow-lg'
                    : 'bg-white/4 border-white/10 text-gray-400 hover:text-white hover:bg-white/8'
                }`}
                style={{
                  borderColor: isActive ? plat.accent : 'rgba(255,255,255,0.1)',
                  boxShadow: isActive ? `0 0 20px ${plat.bgGlow}` : 'none'
                }}
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: isActive ? plat.accent : 'rgba(255,255,255,0.1)',
                    color: '#ffffff'
                  }}
                >
                  <PlatIcon className="w-4 h-4" />
                </span>
                <span>{plat.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activePlatformUnderline"
                    className="absolute -bottom-1 left-2 right-2 h-[3px] rounded-full"
                    style={{ backgroundColor: plat.accent }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* 2. Side-by-Side Dynamic Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#110a1c]/80 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          
          {/* Left Column: Platform Details & Bullets */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPlatform.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                {/* Platform Badge & Stepper Counter */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider text-white" style={{ backgroundColor: `${currentPlatform.accent}33`, border: `1px solid ${currentPlatform.accent}66` }}>
                    <IconComponent className="w-3.5 h-3.5" style={{ color: currentPlatform.accent }} />
                    <span>0{activeIdx + 1} / 05</span>
                  </div>
                  <span className="text-xs font-mono text-gray-400">AUTONOMOUS CYBER IMMUNE SYSTEM</span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                    {currentPlatform.name}
                  </h3>
                  <p className="mt-2 text-sm italic font-medium" style={{ color: currentPlatform.accent }}>
                    {currentPlatform.tagline}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-gray-300">
                  {currentPlatform.description}
                </p>

                {/* Capability Bullets Grid */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                    Key Capabilities &amp; Engine Modules
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentPlatform.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-medium text-gray-200">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: currentPlatform.accent }} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls & Nav Buttons */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/30 transition-all"
                  aria-label="Previous Platform"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/15 hover:border-white/30 transition-all"
                  aria-label="Next Platform"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <span className="text-xs font-medium text-gray-400 ml-2">
                  {isPaused ? 'Paused' : 'Auto-playing'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Browser Frame & Real Image */}
          <div className="lg:col-span-7 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPlatform.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden border border-white/15 bg-black/80 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group"
              >
                {/* Browser Header Bar */}
                <div className="h-9 bg-[#171026] px-4 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="bg-[#0b0614] px-4 py-0.5 rounded-md border border-white/10 text-[11px] font-mono text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>{currentPlatform.url}</span>
                  </div>
                  <div className="w-4" />
                </div>

                {/* Real Platform Image Screenshot */}
                <div 
                  className="relative cursor-pointer overflow-hidden group/img min-h-[320px] sm:min-h-[420px] bg-[#07040d] flex items-center justify-center p-2"
                  onClick={() => onOpenLightbox && onOpenLightbox({ src: currentPlatform.image, alt: currentPlatform.name })}
                >
                  <img
                    src={currentPlatform.image}
                    alt={currentPlatform.name}
                    className="w-full h-auto object-contain rounded-lg transition-transform duration-500 group-hover/img:scale-[1.02] brightness-[1.04] contrast-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-xs bg-black/60 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4" />
                    <span>Click to inspect high-res screenshot</span>
                  </div>
                </div>

                {/* Bottom Status Ribbon */}
                <div className="px-4 py-2 bg-[#120a21] border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentPlatform.accent }} />
                    <span>LIVE DEMO TELEMETRY</span>
                  </span>
                  <span className="font-mono">ACIS Autonomous Shield Enabled</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
