import React from 'react';

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Detect',
    description:
      'Continuous monitoring gathers telemetry across network endpoints, cloud workloads, and user logs to identify anomalies instantly.',
  },
  {
    number: '02',
    title: 'Analyse',
    description:
      'UK-based SOC analysts & automated AI engines correlate indicators to eliminate false positives and score threat severity.',
  },
  {
    number: '03',
    title: 'Respond',
    description:
      'Pre-approved containment playbooks isolate infected hosts, block malicious IPs, and revoke compromised credentials in minutes.',
  },
  {
    number: '04',
    title: 'Learn',
    description:
      'Comprehensive post-incident analysis feeds updated detection rules back into your defence baseline to prevent recurrence.',
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#07070b] relative border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131c] border border-[rgba(255,255,255,0.08)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#f9832e]" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">
              Incident Response Lifecycle
            </span>
          </div>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Four Steps to{' '}
            <span className="bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] bg-clip-text text-transparent">
              Total Threat Containment
            </span>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            Our battle-tested workflow ensures seamless transition from initial alert to long-term security fortification.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] -translate-y-8 h-[2px] bg-gradient-to-r from-[#ec4c8c] via-[#f9832e] to-[#ec4c8c] opacity-30 z-0" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#13131c] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 hover:border-[rgba(236,76,140,0.4)] transition-all duration-300 flex flex-col items-start group shadow-md"
              >
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ec4c8c] to-[#f9832e] text-white font-mono font-bold text-lg flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(236,76,140,0.3)] group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                {/* Step Title */}
                <h3 className="font-sora font-bold text-xl text-white mb-3 group-hover:text-[#f9832e] transition-colors">
                  {step.title}
                </h3>

                <p className="font-sans text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
