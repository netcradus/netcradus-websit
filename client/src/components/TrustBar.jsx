import React from 'react';

const CLIENT_NAMES = [
  'Barclays Cyber',
  'NHS Digital Trust',
  'BAE Systems Tech',
  'Standard Chartered Cyber',
  'Vodafone UK Enterprise'
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#07070b] border-y border-[rgba(255,255,255,0.08)] py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Label */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-[#f9832e] animate-pulse" />
          <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
            Trusted by UK security & IT leaders
          </span>
        </div>

        {/* Right Client Name Logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 lg:gap-12">
          {CLIENT_NAMES.map((name, index) => (
            <span
              key={index}
              className="font-sora font-semibold text-sm sm:text-base text-gray-300 hover:text-white transition-colors duration-300 tracking-wide select-none opacity-80 hover:opacity-100"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
