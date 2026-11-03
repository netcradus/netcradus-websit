import React from 'react';
import NextImage from './NextImage';

const STATS = [
  {
    value: '24/7',
    label: 'SOC Monitoring',
    description: 'Round-the-clock UK analyst surveillance',
  },
  {
    value: '11m',
    label: 'Avg Detection Time',
    description: 'Instant telemetry correlation',
  },
  {
    value: '98.7%',
    label: 'Threats Contained',
    description: 'Autonomous & rapid mitigation',
  },
  {
    value: '60+',
    label: 'Clients Protected',
    description: 'Across UK enterprise sectors',
  },
];

export default function StatsStrip() {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#07070b]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80"
          alt="SOC Monitoring Room"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070b] via-[#07070b]/85 to-[#07070b]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#13131c]/70 backdrop-blur-md border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 hover:border-[rgba(236,76,140,0.4)] transition-all duration-300 transform hover:-translate-y-1 shadow-lg group"
            >
              <div className="font-sora font-extrabold text-4xl sm:text-5xl tracking-tight bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <h3 className="font-sora font-semibold text-lg text-white mb-1 group-hover:text-[#f9832e] transition-colors">
                {stat.label}
              </h3>
              <p className="font-mono text-xs text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
