import React from 'react';
import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#07070b] relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#13131c] border border-[rgba(255,255,255,0.08)] border-l-4 border-l-[#f9832e] rounded-2xl p-8 sm:p-12 shadow-2xl relative">
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4c8c]/10 to-[#f9832e]/10 flex items-center justify-center mb-6">
            <Quote className="w-6 h-6 text-[#f9832e]" />
          </div>

          {/* Italic Quote Text */}
          <blockquote className="font-sans italic text-gray-200 text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8">
            “Netcradus completely restructured our cybersecurity posture across 4 UK regional offices within 48 hours. Their UK-based SOC analysts provide unprecedented visibility, and their sub-15 minute SLA response gives our executive board absolute confidence.”
          </blockquote>

          {/* Footer with Name + Role */}
          <div className="flex items-center gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#ec4c8c] to-[#f9832e] flex items-center justify-center font-sora font-bold text-white text-base">
              DM
            </div>
            <div>
              <div className="font-sora font-bold text-white text-base">
                David Miller
              </div>
              <div className="font-mono text-xs text-gray-400">
                Chief Information Security Officer (CISO), FinTech Sovereign UK
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
