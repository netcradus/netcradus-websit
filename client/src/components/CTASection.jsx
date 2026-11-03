import React from 'react';
import NextImage from './NextImage';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#07070b]">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#13131c] text-center p-8 sm:p-14 lg:p-20 shadow-2xl">
          {/* Dimmed Background Image */}
          <div className="absolute inset-0 z-0">
            <NextImage
              src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80"
              alt="Cybersecurity defense network"
              fill
              className="object-cover object-center opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#07070b]/90 via-[#07070b]/80 to-[#07070b]/95" />
          </div>

          {/* Centered Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131c]/90 border border-[rgba(255,255,255,0.1)] mb-6 backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-[#f9832e]" />
              <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">
                Start Your Defensive Upgrade
              </span>
            </div>

            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6 leading-tight">
              Ready to Fortify Your Enterprise with{' '}
              <span className="bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] bg-clip-text text-transparent">
                Netcradus?
              </span>
            </h2>

            <p className="font-sans text-gray-300 text-base sm:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Schedule a confidential security assessment with our UK SOC engineering team and discover your posture score in under 24 hours.
            </p>

            {/* Two Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Gradient Button */}
              <a
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] text-white font-sora font-bold text-base hover:opacity-95 transition-all shadow-[0_0_30px_rgba(236,76,140,0.35)] group"
              >
                <span>Request Security Assessment</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary Outline Button */}
              <a
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-[rgba(255,255,255,0.2)] hover:border-white text-white font-sora font-semibold text-base transition-all bg-[#07070b]/40 backdrop-blur-sm"
              >
                <span>View All Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
