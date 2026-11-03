import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Server, TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const partnerBenefits = [
  {
    icon: Shield,
    title: "Enterprise Cybersecurity Capabilities",
    desc: "Gain access to 24/7 SOC operations, ACIS AI SIEM deployment, threat hunting, incident response, and VAPT services.",
  },
  {
    icon: Server,
    title: "Scalable Delivery Infrastructure",
    desc: "Leverage Netcradus technical delivery teams, operational processes, and security expertise to fulfill client projects.",
  },
  {
    icon: TrendingUp,
    title: "Recurring Revenue Growth",
    desc: "Generate predictable recurring margin through managed security operations, cloud protection, and long-term retainer models.",
  },
  {
    icon: Users,
    title: "Dedicated Partner Enablement",
    desc: "Receive technical pre-sales support, joint GTM collateral, onboarding training, and dedicated account management.",
  },
];

const partnerTiers = [
  {
    title: "Referral Partner",
    desc: "Refer qualified enterprise leads to Netcradus and earn competitive commissions on successful engagements without delivery obligations.",
    ideal: "Consultants, Advisors, System Integrators",
  },
  {
    title: "Authorized Reseller",
    desc: "Resell Netcradus ACIS platforms, managed SOC tiers, and security audits under structured partner margins and co-selling support.",
    ideal: "VARs, MSPs, IT Distributors",
  },
  {
    title: "White-Label Partner",
    desc: "Deliver enterprise cybersecurity under your brand while leveraging Netcradus backend SOC operations and incident response teams.",
    ideal: "MSSPs, Managed Service Providers",
  },
  {
    title: "Technology Alliance",
    desc: "Integrate software, cloud platforms, or security infrastructure with Netcradus ACIS for joint security operations and GTM initiatives.",
    ideal: "SaaS Vendors, Cloud Providers",
  },
];

const Partners = () => {
  usePageMeta(
    SEO_META.partners?.title || "Netcradus Partner Program | MSSP, Reseller & Technology Alliance",
    SEO_META.partners?.description || "Join the Netcradus partner ecosystem. Accelerate growth with AI-powered cybersecurity, MSSP white-label SOC solutions, and technology integrations."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#05060A] text-white pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider">
            <Award size={14} /> Global Partner Ecosystem
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto">
            Expand Your Business with Netcradus Cybersecurity Solutions
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Partner with Netcradus to deliver autonomous cyber immune systems, 24/7 managed SOC operations, and enterprise threat defense to your clients.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/partners/apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FF8A1F] text-white font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-orange-500/20 no-underline"
            >
              <span>Apply for Partnership</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm hover:bg-white/10 transition-all no-underline"
            >
              <span>Talk to Partner Team</span>
            </Link>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Why Partner with Netcradus</h2>
            <p className="text-slate-400 text-sm mt-2">Accelerate revenue and expand service portfolios with enterprise-ready cyber capabilities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-orange-500/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-[#FF6A00] flex items-center justify-center mb-4">
                    <IconComp size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partnership Models */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Partnership Programs</h2>
            <p className="text-slate-400 text-sm mt-2">Flexible collaboration models structured for your business model.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerTiers.map((tier, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-extrabold text-white">{tier.title}</h3>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
                    {tier.ideal}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{tier.desc}</p>
                <div className="pt-2">
                  <Link
                    to="/partners/apply"
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF6A00] hover:text-white transition-colors no-underline"
                  >
                    <span>Apply for {tier.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-10 rounded-3xl bg-gradient-to-r from-orange-500/20 via-purple-500/10 to-transparent border border-orange-500/30 text-center space-y-4">
          <h2 className="text-2xl font-black text-white">Ready to Become an Official Netcradus Partner?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Submit your application today to gain access to partner margins, pre-sales support, and dedicated enablement.
          </p>
          <div className="pt-2">
            <Link
              to="/partners/apply"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#FF6A00] text-white font-bold text-sm hover:bg-orange-600 transition-all no-underline shadow-lg shadow-orange-500/30"
            >
              <span>Start Partner Application</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;