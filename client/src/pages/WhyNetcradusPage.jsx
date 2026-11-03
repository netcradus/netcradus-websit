import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Cpu,
  Clock,
  Target,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles,
  BarChart3,
  ShieldCheck,
  Lock,
  Activity,
  Award,
} from 'lucide-react';
import WhyNetcradusHero from '../components/WhyNetcradusHero';
import WhyChooseUsSplit from '../components/WhyChooseUsSplit';
import WhyNetcradusArchitecture from '../components/WhyNetcradusArchitecture';
import CyberMeshBackground from '../components/CyberMeshBackground';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import CTABanner from '../components/CTABanner';
import { usePageMeta } from '../hooks/usePageMeta';
import { SEO_META } from '../data/seoMeta';

const STATS = [
  { value: '< 15 Mins', label: 'Guaranteed Containment SLA', sub: 'Contract-backed rapid response' },
  { value: '24/7/365', label: 'AI + Human SOC Monitoring', sub: 'Continuous threat supervision' },
  { value: '99.99%', label: 'Telemetry & Platform Uptime', sub: 'High availability architecture' },
  { value: '60%', label: 'Average TCO Reduction', sub: 'vs fragmented vendor stacks' },
];

const PILLARS = [
  {
    icon: Cpu,
    tag: 'Autonomous AI Engine',
    title: 'Machine-Speed Threat Correlation',
    description:
      'Our proprietary ACIS engine processes millions of logs per second, using advanced machine learning models to detect zero-day exploits and behavioral anomalies in real time.',
    color: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'group-hover:border-orange-500/50',
    iconColor: 'text-orange-400',
  },
  {
    icon: Clock,
    tag: 'Rapid Response SLA',
    title: 'Sub-15 Minute Incident Containment',
    description:
      'Speed is the ultimate defensive metric. Netcradus guarantees sub-15 minute triage and active threat containment backed by rigorous SLA commitments.',
    color: 'from-pink-500/20 to-rose-500/10',
    borderColor: 'group-hover:border-pink-500/50',
    iconColor: 'text-pink-400',
  },
  {
    icon: Target,
    tag: 'Proactive Cyber Defense',
    title: 'Deception & Continuous Threat Hunting',
    description:
      'We do not wait for alarms. Our certified security engineers deploy canary credentials, honeypots, and active deception traps to lure and isolate adversaries early.',
    color: 'from-cyan-500/20 to-blue-500/10',
    borderColor: 'group-hover:border-cyan-500/50',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Layers,
    tag: 'Unified Cyber Fabric',
    title: 'Single-Pane Glass Architecture',
    description:
      'Consolidate your SIEM, SOAR, UEBA, EDR, and VAPT workflows into one single glass pane. Zero multi-vendor friction and no hidden licensing add-on fees.',
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'group-hover:border-emerald-500/50',
    iconColor: 'text-emerald-400',
  },
];

const COMPARISON_ROWS = [
  {
    feature: 'Threat Detection Speed',
    netcradus: 'Sub-second AI correlation + immediate triage',
    legacyMSSP: 'Hours to days (manual log review)',
    inHouse: 'Dependent on analyst shifts',
  },
  {
    feature: 'Guaranteed Containment SLA',
    netcradus: '< 15 Minutes Contractual SLA',
    legacyMSSP: '24 – 48 Hours Triage SLA',
    inHouse: 'No Formal SLA',
  },
  {
    feature: '24/7/365 SOC Monitoring',
    netcradus: 'Hybrid AI + Certified Human Analysts Included',
    legacyMSSP: 'Expensive Premium Tier Upgrade',
    inHouse: 'High Staffing & Burnout Costs',
  },
  {
    feature: 'Active Deception & Canary Traps',
    netcradus: 'Native Built-in Perimeter & Endpoint Lures',
    legacyMSSP: 'Rare / Custom Integration Required',
    inHouse: 'Complex & Time-Consuming to Maintain',
  },
  {
    feature: 'Total Cost of Ownership (TCO)',
    netcradus: 'Predictable Subscription (Up to 60% Savings)',
    legacyMSSP: 'High Hidden Charges & Add-ons',
    inHouse: '$500K+ Annual Infrastructure & Salary Costs',
  },
  {
    feature: 'Automated Compliance Reporting',
    netcradus: 'Real-time ISO 27001, SOC 2, HIPAA, CERT-In Dashboards',
    legacyMSSP: 'Manual Quarterly PDF Summaries',
    inHouse: 'Manual Audit Spreadsheet Gathering',
  },
];

const WhyNetcradusPage = () => {
  usePageMeta(
    SEO_META.whyNetcradus?.title || 'Why Netcradus | Autonomous Cybersecurity & AI Threat Defense',
    SEO_META.whyNetcradus?.description ||
      'Discover why global enterprises choose Netcradus for 24/7 SOC monitoring, sub-15 minute SLA incident response, zero-trust security, and AI-powered threat defense.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#07070b] text-white min-h-screen relative">
      {/* 3D WebGL & Canvas Cyber Security Mesh & Video Animation Background */}
      <CyberMeshBackground />

      {/* 1. Page Dedicated Hero Header */}
      <WhyNetcradusHero />

      {/* 2. Key Metrics & Executive Summary Bar */}
      <section className="border-y border-white/10 bg-[#0d0d14] py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left border-l border-orange-500/30 pl-6">
                <div className="font-sora font-extrabold text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#ec4c8c] to-[#f9832e]">
                  {stat.value}
                </div>
                <div className="font-sora font-bold text-white text-sm mt-1">{stat.label}</div>
                <div className="font-sans text-xs text-gray-400 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Differentiating Value Pillars */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131c] border border-white/10 mb-4">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">
              Core Differentiators
            </span>
          </div>
          <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-6">
            Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4c8c] to-[#f9832e]">Uncompromising Defense</span>
          </h2>
          <p className="font-sans text-gray-400 text-lg leading-relaxed">
            We built Netcradus from the ground up to solve the four biggest flaws in modern cybersecurity: high false positives, slow response times, fragmented vendor tools, and prohibitive costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PILLARS.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`group relative p-8 rounded-2xl bg-[#13131c] border border-white/10 transition-all duration-300 hover:-translate-y-1 ${pillar.borderColor}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pillar.color} rounded-bl-full pointer-events-none blur-xl opacity-60`} />

                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#07070b] border border-white/10 flex items-center justify-center">
                    <IconComp className={`w-7 h-7 ${pillar.iconColor}`} />
                  </div>
                  <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {pillar.tag}
                  </span>
                </div>

                <h3 className="font-sora font-bold text-2xl text-white mb-3 group-hover:text-orange-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-sans text-gray-400 text-base leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Comparison Matrix: Netcradus vs Alternatives */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0d0d14] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131c] border border-white/10 mb-4">
              <BarChart3 className="w-4 h-4 text-orange-400" />
              <span className="font-mono text-xs text-gray-300 uppercase tracking-widest">
                The Competitive Matrix
              </span>
            </div>
            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight mb-4">
              How Netcradus <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4c8c] to-[#f9832e]">Compares</span>
            </h2>
            <p className="font-sans text-gray-400 text-base">
              Compare Netcradus against traditional MSSP providers and in-house security operations.
            </p>
          </div>

          <div className="responsive-table-wrapper overflow-x-auto shadow-inner rounded-xl">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-white/10 text-gray-300 font-sora text-sm">
                  <th className="py-5 px-6 font-bold uppercase tracking-wider w-1/4">Key Capability</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border-x border-orange-500/30 rounded-t-xl w-1/3">
                    Netcradus Defense Platform
                  </th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-gray-400 w-1/4">Traditional MSSPs</th>
                  <th className="py-5 px-6 font-bold uppercase tracking-wider text-gray-400 w-1/4">In-House SOC Build</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-sans text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-5 px-6 font-sora font-semibold text-white">
                      {row.feature}
                    </td>
                    <td className="py-5 px-6 bg-orange-500/5 border-x border-orange-500/20 font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span>{row.netcradus}</span>
                    </td>
                    <td className="py-5 px-6 text-gray-400">
                      {row.legacyMSSP}
                    </td>
                    <td className="py-5 px-6 text-gray-400">
                      {row.inHouse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. Defensive Edge Split Section (Live Posture Panel) */}
      <WhyChooseUsSplit />

      {/* 6. Deep Tech 5-Layer Security Fabric Architecture */}
      <WhyNetcradusArchitecture />

      {/* 7. Client Proof & Testimonials */}
      <Testimonials />

      {/* 8. Certifications & Compliance Frameworks */}
      <Certifications />

      {/* 9. Final CTABanner */}
      <CTABanner />
    </div>
  );
};

export default WhyNetcradusPage;
