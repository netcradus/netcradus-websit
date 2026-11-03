import React from 'react';
import NextImage from './NextImage';
import { Shield, Building2, Users, Calendar } from 'lucide-react';

export default function UKCredibilitySplit() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#07070b] relative border-t border-[rgba(255,255,255,0.08)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131c] border border-[rgba(255,255,255,0.08)] mb-6">
            <span className="text-base">🇬🇧</span>
            <span className="font-mono text-xs text-[#f9832e] font-semibold uppercase tracking-widest">
              UK-based, UK data residency
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Sovereign Security for{' '}
            <span className="bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] bg-clip-text text-transparent">
              UK Organisations
            </span>
          </h2>

          {/* Paragraph */}
          <p className="font-sans text-gray-300 text-base sm:text-lg leading-relaxed mb-8">
            Netcradus delivers 100% sovereign UK cybersecurity operations. All client telemetry, logs, and security infrastructure reside strictly within UK borders—ensuring absolute compliance with UK GDPR, DPA 2018, and NIS Regulations under SC-cleared security personnel.
          </p>

          {/* 3 Mini-Stats Row */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[rgba(255,255,255,0.08)]">
            <div className="bg-[#13131c] p-4 rounded-xl border border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2 text-[#ec4c8c] mb-1">
                <Calendar className="w-4 h-4" />
                <span className="font-mono text-xs text-gray-400">Founded</span>
              </div>
              <div className="font-sora font-bold text-xl sm:text-2xl text-white">
                2021
              </div>
            </div>

            <div className="bg-[#13131c] p-4 rounded-xl border border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2 text-[#f9832e] mb-1">
                <Users className="w-4 h-4" />
                <span className="font-mono text-xs text-gray-400">Analysts</span>
              </div>
              <div className="font-sora font-bold text-xl sm:text-2xl text-white">
                45+
              </div>
            </div>

            <div className="bg-[#13131c] p-4 rounded-xl border border-[rgba(255,255,255,0.08)]">
              <div className="flex items-center gap-2 text-[#ec4c8c] mb-1">
                <Building2 className="w-4 h-4" />
                <span className="font-mono text-xs text-gray-400">Offices</span>
              </div>
              <div className="font-sora font-bold text-xl sm:text-2xl text-white">
                3 UK SOCs
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Image */}
        <div className="relative min-h-[380px] sm:min-h-[450px] lg:h-full rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] group shadow-2xl">
          <NextImage
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
            alt="London Skyline UK Security Headquarters"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          {/* Subtle Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07070b] via-transparent to-transparent opacity-60" />
          
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#13131c]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#f9832e]" />
              <div>
                <div className="font-sora font-semibold text-sm text-white">London & Leicester Operations</div>
                <div className="font-mono text-xs text-gray-400">ISO 27001 & Cyber Essentials Certified</div>
              </div>
            </div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
}
