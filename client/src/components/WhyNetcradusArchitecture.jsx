import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Server,
  Cpu,
  ShieldAlert,
  Zap,
  Users,
  CheckCircle2,
  Terminal,
  Activity,
  Sparkles,
} from 'lucide-react';

const LAYERS = [
  {
    id: 'layer-1',
    number: '01',
    title: 'Universal Telemetry Ingestion',
    subtitle: 'Enterprise SIEM & Multi-Cloud Aggregation',
    icon: Server,
    color: 'from-[#3b82f6] to-[#06b6d4]',
    badge: 'Real-time Ingestion',
    statLabel: 'Ingestion Throughput',
    statValue: '100,000+ EPS',
    description:
      'Ingests structured and unstructured security telemetry across AWS, Azure, GCP, on-prem firewalls, IAM providers, and endpoint EDRs with zero data loss.',
    capabilities: [
      'Multi-cloud audit log streaming',
      'Syslog, NetFlow, & API connector fabric',
      'Encrypted transit & zero-loss queuing',
      'Automated log normalization & enrichment',
    ],
    consoleLog: [
      { time: '14:58:01.002', type: 'INGEST', text: 'AWS CloudTrail stream connected (us-east-1)' },
      { time: '14:58:01.045', type: 'PARSER', text: 'Normalized 14,280 event logs / sec across 82 nodes' },
      { time: '14:58:01.090', type: 'OK', text: 'Zero queue lag; Telemetry pipeline healthy' },
    ],
  },
  {
    id: 'layer-2',
    number: '02',
    title: 'AI Machine-Speed Correlation',
    subtitle: 'ACIS Autonomous Machine Learning Engine',
    icon: Cpu,
    color: 'from-[#ec4c8c] to-[#f9832e]',
    badge: '< 50ms Detection',
    statLabel: 'Correlation Latency',
    statValue: '< 50 milliseconds',
    description:
      'Our proprietary ACIS ML models analyze millions of cross-vector signals per second to detect zero-day exploits, credential abuse, and lateral movement in real time.',
    capabilities: [
      'Behavioral UEBA baseline profiling',
      'MITRE ATT&CK TTP mapping',
      'Zero-day heuristic anomaly detection',
      '99.4% reduction in false-positive alerts',
    ],
    consoleLog: [
      { time: '14:58:01.120', type: 'AI_EVAL', text: 'Scanning stream via ACIS Transformer Model v4.2' },
      { time: '14:58:01.145', type: 'ALERT', text: 'Suspicious PowerShell T1059.001 detected on Host-04' },
      { time: '14:58:01.160', type: 'CONFIRM', text: 'Machine Confidence score: 99.6% (Threat Confirmed)' },
    ],
  },
  {
    id: 'layer-3',
    number: '03',
    title: 'Active Threat Deception',
    subtitle: 'Canary Traps & Perimeter Lures',
    icon: ShieldAlert,
    color: 'from-[#a855f7] to-[#ec4c8c]',
    badge: 'Perimeter Traps',
    statLabel: 'Deception Coverage',
    statValue: '100% Boundary Lures',
    description:
      'Deploys decoy credentials, honeypot databases, and canary tokens across micro-segmented networks to trap stealthy adversaries the moment they attempt lateral probes.',
    capabilities: [
      'Dynamic network honeypots & bait databases',
      'Canary tokens embedded in active directories',
      'Adversary fingerprinting & IP tracing',
      'Zero false-positive deception triggers',
    ],
    consoleLog: [
      { time: '14:58:01.210', type: 'DECEPTION', text: 'Honeypot DB (SQL-Canary-02) probed by IP 185.220.101.4' },
      { time: '14:58:01.230', type: 'TRAP', text: 'Adversary isolated in isolated sandbox honeynet' },
      { time: '14:58:01.250', type: 'FINGERPRINT', text: 'Extracted C2 IP, SSL cert, and malware hash' },
    ],
  },
  {
    id: 'layer-4',
    number: '04',
    title: 'Automated Threat Containment',
    subtitle: 'Sub-Second SOAR Playbook Execution',
    icon: Zap,
    color: 'from-[#eab308] to-[#f9832e]',
    badge: 'Sub-second SOAR',
    statLabel: 'Containment Speed',
    statValue: 'Sub-Second Automation',
    description:
      'Executes automated orchestration playbooks to isolate infected endpoints, revoke compromised OAuth sessions, and block attacker IPs instantly without waiting for manual intervention.',
    capabilities: [
      'Instant endpoint isolation via EDR API',
      'Automated OAuth token revocation & password reset',
      'Dynamic edge firewall IP blacklisting',
      'Quarantine infected workload containers',
    ],
    consoleLog: [
      { time: '14:58:01.290', type: 'SOAR', text: 'Executing Playbook #84: Critical Containment Protocol' },
      { time: '14:58:01.310', type: 'ACTION', text: 'Isolated Host-04 NIC & Revoked Active OAuth Session' },
      { time: '14:58:01.330', type: 'BLOCKED', text: 'Attacker C2 IP blacklisted at perimeter firewalls' },
    ],
  },
  {
    id: 'layer-5',
    number: '05',
    title: '24/7 Human SOC Forensic Verification',
    subtitle: 'Certified Incident Response Team',
    icon: Users,
    color: 'from-[#10b981] to-[#06b6d4]',
    badge: '< 15 Min SLA',
    statLabel: 'Response Guarantee',
    statValue: '< 15 Min SLA',
    description:
      'Certified CREST & CISSP security engineers conduct deep forensic investigations, root-cause audits, and deliver executive-level incident reports with remediation roadmaps.',
    capabilities: [
      '24/7/365 active SOC engineer supervision',
      'Deep forensic memory & artifact analysis',
      'Contract-backed < 15 minute SLA response',
      'Regulatory compliance & post-incident reporting',
    ],
    consoleLog: [
      { time: '14:58:01.400', type: 'SOC_TRIAGE', text: 'Senior SOC Analyst assigned to Incident #9482' },
      { time: '14:58:02.100', type: 'FORENSICS', text: 'Root cause verified: Malicious phishing attachment' },
      { time: '14:58:04.500', type: 'CLEARED', text: 'Threat eradicated. Post-mortem report generated' },
    ],
  },
];

export default function WhyNetcradusArchitecture() {
  const [activeTab, setActiveTab] = useState(0);

  const currentLayer = LAYERS[activeTab];
  const IconComp = currentLayer.icon;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#07070b] border-t border-white/10 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131c] border border-white/10 mb-4">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">
              Autonomous Cyber Defense Architecture
            </span>
          </div>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            The 5-Layer <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4c8c] to-[#f9832e]">Security Fabric</span>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed">
            Explore how Netcradus neutralizes complex cyber threats step-by-step through integrated telemetry, machine-speed AI, deception lures, and 24/7 human SOC expertise.
          </p>
        </div>

        {/* Layer Selection Buttons (5 Steps) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
          {LAYERS.map((layer, idx) => {
            const LayerIcon = layer.icon;
            const isActive = idx === activeTab;
            return (
              <button
                key={layer.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-3 p-4 rounded-xl text-left border transition-all duration-300 relative ${
                  isActive
                    ? 'bg-[#13131c] border-orange-500/60 shadow-lg text-white'
                    : 'bg-[#0d0d14]/70 border-white/5 text-gray-400 hover:bg-[#13131c]/60 hover:border-white/20 hover:text-white'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${
                    isActive
                      ? 'bg-orange-500/10 border-orange-500/40 text-orange-400'
                      : 'bg-white/5 border-white/10 text-gray-400'
                  }`}
                >
                  <LayerIcon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase text-gray-500 tracking-wider">
                    Layer {layer.number}
                  </div>
                  <div className="font-sora font-bold text-xs sm:text-sm truncate">
                    {layer.title}
                  </div>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="activeLayerIndicator"
                    className="absolute inset-0 border-2 border-orange-500 rounded-xl pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Layer Details & Console Display */}
        <div className="bg-[#13131c] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLayer.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column Description */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-pink-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-orange-400 uppercase tracking-widest">
                      Layer {currentLayer.number} Architecture
                    </span>
                    <h3 className="font-sora font-extrabold text-2xl sm:text-3xl text-white mt-0.5">
                      {currentLayer.title}
                    </h3>
                  </div>
                </div>

                <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed">
                  {currentLayer.description}
                </p>

                {/* Capability Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentLayer.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-2.5 bg-[#07070b]/60 p-3 rounded-lg border border-white/5 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                {/* Key Metric Highlight */}
                <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                  <div>
                    <div className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                      {currentLayer.statLabel}
                    </div>
                    <div className="font-sora font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] mt-1">
                      {currentLayer.statValue}
                    </div>
                  </div>
                  <div className="h-8 w-px bg-white/10" />
                  <div>
                    <div className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                      Operational State
                    </div>
                    <div className="font-mono text-xs text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 inline-block mt-1">
                      ● Active & Monitored
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Terminal Console Display */}
              <div className="lg:col-span-5 bg-[#07070b] border border-white/10 rounded-xl overflow-hidden shadow-2xl font-mono text-xs">
                {/* Console Header */}
                <div className="bg-[#13131c] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-300 text-xs font-bold">Netcradus SOC Telemetry Stream</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                </div>

                {/* Console Body */}
                <div className="p-4 space-y-3 font-mono text-[11px] leading-relaxed text-gray-300 min-h-[220px]">
                  <div className="text-gray-500">// Simulating Live Layer {currentLayer.number} Execution Telemetry...</div>

                  {currentLayer.consoleLog.map((log, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <span className="text-gray-500 shrink-0">[{log.time}]</span>
                      <span
                        className={`font-bold shrink-0 px-1.5 py-0.5 rounded text-[10px] ${
                          log.type === 'ALERT' || log.type === 'ACTION'
                            ? 'bg-red-500/20 text-red-400'
                            : log.type === 'AI_EVAL' || log.type === 'CONFIRM'
                            ? 'bg-orange-500/20 text-orange-400'
                            : log.type === 'DECEPTION' || log.type === 'TRAP'
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-emerald-500/20 text-emerald-400'
                        }`}
                      >
                        {log.type}
                      </span>
                      <span className="text-gray-200">{log.text}</span>
                    </div>
                  ))}

                  <div className="pt-2 text-emerald-400 flex items-center gap-2">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>Layer {currentLayer.number} active - Telemetry synchronized</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
