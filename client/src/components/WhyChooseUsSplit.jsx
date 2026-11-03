import React from 'react';
import { ShieldCheck, Cpu, Target, Clock, Activity, CheckCircle2, AlertCircle } from 'lucide-react';

const CHECKLIST_ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Zero-Trust Architecture Guarantee',
    description:
      'Strict identity verification and least-privilege access enforcement across all endpoints and micro-segmented networks.',
  },
  {
    icon: Cpu,
    title: 'Autonomous AI & Human SOC Hybrid',
    description:
      'Sub-second machine detection paired with deep manual forensic analysis by certified UK security engineers.',
  },
  {
    icon: Target,
    title: 'Proactive Threat Hunting & Deception',
    description:
      'Honeypots, canary tokens, and continuous hypothesis-driven threat hunts to trap adversaries before breach.',
  },
  {
    icon: Clock,
    title: 'Guaranteed < 15 Min SLA Response',
    description:
      'Contractually backed response speed with immediate triage and live containment during critical incidents.',
  },
];

const METRICS = [
  {
    label: 'Posture Score',
    value: '94 / 100',
    type: 'progress',
    progress: 94,
    color: 'from-[#ec4c8c] to-[#f9832e]',
  },
  {
    label: 'Open Alerts',
    value: '0 Critical, 2 Low',
    badge: 'Healthy',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  },
  {
    label: 'Mean Time to Contain',
    value: '8.4 mins',
    badge: 'Under SLA',
    badgeColor: 'bg-[#f9832e]/20 text-[#f9832e] border-[#f9832e]/30',
  },
  {
    label: 'Assets Watched',
    value: '14,250+',
    badge: 'Live Sync',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  },
  {
    label: 'Last Pentest Date',
    value: 'Aug 2026 / Passed',
    badge: 'Verified',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  },
];

export default function WhyChooseUsSplit() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#07070b] relative border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column Checklist */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131c] border border-[rgba(255,255,255,0.08)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ec4c8c]" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">
              Why Netcradus
            </span>
          </div>

          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-8">
            The Defensive Edge Your{' '}
            <span className="bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] bg-clip-text text-transparent">
              Enterprise Demands
            </span>
          </h2>

          <div className="space-y-6">
            {CHECKLIST_ITEMS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 rounded-xl bg-[#13131c] border border-[rgba(255,255,255,0.08)] flex items-center justify-center shrink-0 group-hover:border-[#f9832e] transition-colors">
                    <IconComp className="w-5 h-5 text-[#f9832e]" />
                  </div>
                  <div>
                    <h3 className="font-sora font-bold text-lg text-white mb-1 group-hover:text-[#f9832e] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column Live Posture Panel */}
        <div className="bg-[#13131c] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_center,#ec4c8c_0%,transparent_70%)] opacity-10 blur-3xl pointer-events-none" />

          {/* Panel Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[rgba(255,255,255,0.08)]">
            <div className="flex items-center gap-3">
              <Activity className="w-6 h-6 text-[#ec4c8c] animate-pulse" />
              <div>
                <h3 className="font-sora font-bold text-lg text-white">Live Posture Panel</h3>
                <p className="font-mono text-xs text-gray-400">Netcradus Autonomous Telemetry</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-xs text-emerald-400">Active Shield</span>
            </div>
          </div>

          {/* 5 Rows of Metrics */}
          <div className="space-y-6">
            {METRICS.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#07070b]/60 p-4 rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.12)] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </span>
                  {metric.badge && (
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded-full border ${metric.badgeColor}`}
                    >
                      {metric.badge}
                    </span>
                  )}
                </div>
                <div className="font-sora font-bold text-lg text-white mb-1">
                  {metric.value}
                </div>

                {metric.type === 'progress' && (
                  <div className="w-full h-2 bg-[#13131c] rounded-full overflow-hidden mt-2">
                    <div
                      className="h-full bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] rounded-full transition-all duration-1000"
                      style={{ width: `${metric.progress}%` }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
