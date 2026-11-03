import React from 'react';
import NextImage from './NextImage';
import { ArrowRight, ShieldAlert } from 'lucide-react';

export default function CaseStudyStrip() {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#07070b]">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#13131c] shadow-2xl">
          {/* Dimmed Background Image */}
          <div className="absolute inset-0 z-0">
            <NextImage
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80"
              alt="Cyber security operation case study"
              fill
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07070b] via-[#07070b]/90 to-[#07070b]/60" />
          </div>

          <div className="relative z-10 p-8 sm:p-12 lg:p-16 max-w-3xl">
            {/* Tag Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#07070b]/80 border border-[rgba(255,255,255,0.1)] mb-6 backdrop-blur-md">
              <ShieldAlert className="w-4 h-4 text-[#ec4c8c]" />
              <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">
                Case Study / Financial Services UK
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-sora font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight mb-4 leading-tight">
              Neutralizing Zero-Day Ransomware for a Tier-1 UK FinTech Enterprise
            </h2>

            {/* Paragraph */}
            <p className="font-sans text-gray-300 text-base sm:text-lg mb-8 leading-relaxed">
              When an advanced persistent threat breached external APIs, Netcradus Autonomous Response engines isolated infected host clusters within 11 minutes—preserving £450M in transactions with zero data loss.
            </p>

            <a
              href="/resources"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] text-white font-sora font-bold text-sm hover:opacity-95 transition-all shadow-[0_0_25px_rgba(236,76,140,0.3)] group"
            >
              <span>Read Full Case Study</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
