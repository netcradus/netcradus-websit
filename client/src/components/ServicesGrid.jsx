import React from 'react';
import {
  ShieldCheck,
  Radar,
  SearchCheck,
  Zap,
  FileCheck2,
  CloudLightning,
  ArrowRight
} from 'lucide-react';

const SERVICES = [
  {
    icon: ShieldCheck,
    title: 'Managed SOC',
    description:
      '24/7 continuous threat monitoring, incident analysis, and real-time response powered by UK security operations analysts.',
  },
  {
    icon: Radar,
    title: 'Threat Intelligence',
    description:
      'Proactive dark web monitoring, IOC threat feeds, and predictive intelligence tailored to UK infrastructure risks.',
  },
  {
    icon: SearchCheck,
    title: 'Vulnerability Assessment',
    description:
      'Automated scans & manual penetration testing identifying perimeter, application, and internal asset weaknesses.',
  },
  {
    icon: Zap,
    title: 'Incident Response',
    description:
      'Sub-15 minute SLA emergency containment, forensic investigation, and rapid remediation for active cyber attacks.',
  },
  {
    icon: FileCheck2,
    title: 'Compliance Readiness',
    description:
      'Guided accreditation support for Cyber Essentials Plus, ISO 27001, GDPR, and UK NIS Regulations.',
  },
  {
    icon: CloudLightning,
    title: 'Cloud & Endpoint Defence',
    description:
      'Comprehensive zero-trust coverage across AWS, Azure, Microsoft 365, and enterprise workstation fleets.',
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#07070b] relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131c] border border-[rgba(255,255,255,0.08)] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#ec4c8c]" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">
              Cybersecurity Solutions
            </span>
          </div>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
            End-to-End Protection for{' '}
            <span className="bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] bg-clip-text text-transparent">
              UK Digital Assets
            </span>
          </h2>
          <p className="font-sans text-gray-400 text-base sm:text-lg">
            Empower your organization with enterprise-grade defensive security, proactive threat hunting, and compliance engineering.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-[#13131c] border border-[rgba(255,255,255,0.08)] rounded-2xl p-8 hover:border-[rgba(249,131,46,0.4)] transition-all duration-300 group hover:shadow-[0_10px_30px_rgba(236,76,140,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ec4c8c]/15 to-[#f9832e]/15 border border-[rgba(236,76,140,0.2)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-[#f9832e]" />
                  </div>
                  <h3 className="font-sora font-bold text-xl text-white mb-3 group-hover:text-[#f9832e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs text-[#ec4c8c] font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  <span>Explore capability</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
