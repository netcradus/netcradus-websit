import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle2, 
  Phone, 
  Mail, 
  HelpCircle, 
  ArrowRight, 
  Zap, 
  Server, 
  Lock, 
  Building2, 
  Users, 
  FileText, 
  AlertCircle, 
  Award,
  Sparkles,
  Layers,
  Clock,
  HardDrive,
  Activity,
  Cpu,
  Factory
} from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';

const AcisProPricing = () => {
  usePageMeta({
    title: "ACIS Pro Pricing — Advanced AI Threat Detection & SOAR for SMEs | Netcradus",
    description: "Enterprise-level autonomous cyber immune system (ACIS Pro) pricing for SMEs, manufacturing, IT, and SaaS firms. ₹74,999/month + GST with 2TB logs, UEBA, and SOAR response."
  });

  useEffect(() => {
    if (!document.getElementById('space-grotesk-font')) {
      const link = document.createElement('link');
      link.id = 'space-grotesk-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap';
      document.head.appendChild(link);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#050B14] text-white min-h-screen font-sans relative overflow-hidden selection:bg-[#ff3d81]/30 selection:text-[#ff3d81]">
      {/* Background Cyber Ambient Glow System */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle_at_center,#ff3d81_0%,transparent_70%)] opacity-20 blur-[130px] animate-pulse" />
        <div className="absolute top-[40%] left-[-10%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,#ff7a1a_0%,transparent_70%)] opacity-15 blur-[140px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle_at_center,#ff3d81_0%,#ff7a1a_50%,transparent_75%)] opacity-15 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(5,11,20,0.85)_0%,rgba(5,11,20,0.95)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24">
        
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff3d81]/40 bg-[#ff3d81]/10 text-[#ff3d81] text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(255,61,129,0.2)]">
            <Sparkles size={14} className="animate-spin-slow" />
            <span>Advanced Enterprise SIEM + SOAR</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-['Space_Grotesk',sans-serif] leading-tight">
            ACIS Pro <span className="bg-gradient-to-r from-[#ff3d81] via-[#ff5b79] to-[#ff7a1a] bg-clip-text text-transparent">Pricing</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            Next-gen SOAR automation, UEBA behavioural analytics, and 2TB log storage built for SMEs, tech firms, and industrial operations.
          </p>
        </div>

        {/* Pricing Main Card & Summary Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Main Pricing Hero Card */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#0F172A]/90 to-[#0B1120]/90 backdrop-blur-xl border-2 border-[#ff3d81]/50 rounded-3xl p-8 sm:p-10 shadow-[0_0_50px_rgba(255,61,129,0.15)] relative overflow-hidden group hover:border-[#ff3d81] transition-all duration-300">
            
            {/* Top Ribbon Badge */}
            <div className="absolute top-0 right-0">
              <div className="bg-gradient-to-r from-[#ff3d81] to-[#ff7a1a] text-white text-[11px] font-bold uppercase tracking-wider py-1.5 px-6 rounded-bl-2xl shadow-lg">
                Recommended for SMEs & SaaS
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ff3d81]/20 to-[#ff7a1a]/20 border border-[#ff3d81]/40 flex items-center justify-center text-[#ff3d81]">
                <Shield size={26} />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-['Space_Grotesk',sans-serif]">ACIS Pro</h2>
                <p className="text-xs text-slate-400">Advanced AI-Driven Cyber Immune System</p>
              </div>
            </div>

            {/* Price Tag */}
            <div className="my-8 pb-8 border-b border-slate-800">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-6xl font-extrabold text-white font-['Space_Grotesk',sans-serif] tracking-tight">
                  ₹74,999
                </span>
                <span className="text-slate-400 font-medium text-lg">/ month</span>
              </div>
              <p className="text-xs text-slate-400 mt-2 font-medium">
                + 18% GST extra · Billed as per agreed contract terms
              </p>

              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                <Clock size={14} className="text-[#ff7a1a]" />
                <span>Contract commitment: <strong>Up to 6 months (+ GST)</strong></span>
              </div>
            </div>

            <div className="space-y-4">
              <Link
                to="/contact?plan=acis-pro"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff3d81] to-[#ff7a1a] text-white font-bold text-lg hover:opacity-95 hover:scale-[1.01] transition-all shadow-[0_0_30px_rgba(255,61,129,0.35)] no-underline group/btn"
              >
                <span>Talk to Sales</span>
                <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-400 mb-1">Prefer to speak directly?</p>
                <a
                  href="tel:1800121008800"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff7a1a] hover:text-[#ff3d81] transition-colors no-underline"
                >
                  <Phone size={15} />
                  <span>1800 12100 8800</span>
                </a>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ff3d81] shrink-0" />
                <span>100 Endpoints (Up to 250 Users)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ff3d81] shrink-0" />
                <span>2 TB/mo Log Storage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ff3d81] shrink-0" />
                <span>UEBA & Threat Intel Included</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#ff3d81] shrink-0" />
                <span>24×5 Support & SLA Included</span>
              </div>
            </div>

          </div>

          {/* Cost Breakdown & Add-ons Side Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Year-1 Cost Breakdown Box */}
            <div className="bg-[#0F172A]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-['Space_Grotesk',sans-serif]">
                <FileText size={20} className="text-[#ff7a1a]" />
                Investment Breakdown
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <span className="text-slate-300">Monthly Subscription (12 mo)</span>
                  <span className="font-semibold text-white">₹8,99,988</span>
                </div>

                <div className="flex justify-between items-center pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-slate-300 block">One-time Setup & Onboarding</span>
                    <span className="text-[11px] text-slate-400">Non-recurring implementation fee</span>
                  </div>
                  <span className="font-semibold text-white">₹1,49,999</span>
                </div>

                <div className="pt-2 flex justify-between items-baseline">
                  <div>
                    <span className="text-base font-bold text-white block">Effective Year-1 Cost</span>
                    <span className="text-[11px] text-[#ff3d81] font-medium">+18% GST Applicable</span>
                  </div>
                  <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3d81] to-[#ff7a1a] font-['Space_Grotesk',sans-serif]">
                    ₹10,49,987
                  </span>
                </div>
              </div>
            </div>

            {/* Expansion & Add-ons Box */}
            <div className="bg-[#0F172A]/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 font-['Space_Grotesk',sans-serif]">
                <Layers size={20} className="text-[#ff3d81]" />
                Flexible Expansion Add-ons
              </h3>

              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-white text-sm">Additional Endpoints</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Servers, Desktops & Workstations</p>
                  </div>
                  <span className="text-[#ff3d81] font-bold whitespace-nowrap text-sm">
                    ₹299 <span className="text-[11px] font-normal text-slate-400">/ep/mo</span>
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-semibold text-white text-sm">Additional Log Storage</h4>
                    <p className="text-xs text-slate-400 mt-0.5">Beyond 2TB monthly included quota</p>
                  </div>
                  <span className="text-[#ff7a1a] font-bold whitespace-nowrap text-sm">
                    ₹1,199 <span className="text-[11px] font-normal text-slate-400">/GB/mo</span>
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Target Audience Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-3">
              Built for Scale & Compliance
            </h2>
            <p className="text-slate-400 text-sm">
              ACIS Pro is engineered to deliver robust defense, threat intelligence, and regulatory alignment for:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SMEs & Mid-Market",
                desc: "Growing organizations needing full-scale SIEM, SOAR, and active threat mitigation.",
                icon: <Building2 className="text-[#ff3d81]" size={24} />
              },
              {
                title: "Manufacturing Firms",
                desc: "Secure OT/IT environments, industrial networks, and supply-chain infrastructure.",
                icon: <Factory className="text-[#ff7a1a]" size={24} />
              },
              {
                title: "IT & Software Services",
                desc: "Protect intellectual property, client source code, and multi-tenant IT systems.",
                icon: <Cpu className="text-[#ff3d81]" size={24} />
              },
              {
                title: "SaaS & Cloud Platforms",
                desc: "Real-time API integrations, UEBA analytics, and continuous security compliance.",
                icon: <Server className="text-[#ff7a1a]" size={24} />
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#0F172A]/60 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 hover:border-[#ff3d81]/40 hover:bg-[#0F172A]/90 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk',sans-serif]">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Grid Section */}
        <div className="bg-gradient-to-b from-[#0F172A]/90 to-[#0B1120]/90 border border-white/10 rounded-3xl p-8 sm:p-12 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white font-['Space_Grotesk',sans-serif] mb-3">
              Everything Included in ACIS Pro
            </h2>
            <p className="text-slate-400 text-sm">
              Comprehensive security operations, threat intelligence, and compliance automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "SOAR & Active Response",
                desc: "Automated playbook execution, threat isolation, and AI-assisted investigation."
              },
              {
                title: "2 TB Monthly Log Storage",
                desc: "High-capacity log retention (2,000 GB/month) for deep analytics and audit compliance."
              },
              {
                title: "Threat Intelligence Feeds",
                desc: "Integrated threat intel feeds for pro-active IoC hunting and global threat matching."
              },
              {
                title: "UEBA Behavioural Analytics",
                desc: "User & Entity Behaviour Analytics to identify insider threats and compromised accounts."
              },
              {
                title: "RBI / SEBI / HIPAA Templates",
                desc: "Pre-built compliance reporting for financial, healthcare, and enterprise audit standards."
              },
              {
                title: "SIEM / SOAR API Integrations",
                desc: "Seamless connection with cloud providers, firewalls, identity providers, and endpoints."
              },
              {
                title: "24×5 Dedicated Support",
                desc: "Direct access to cybersecurity engineers for onboarding, tuning, and ongoing support."
              },
              {
                title: "Support SLA Add-on Included",
                desc: "Guaranteed response timelines for critical incidents and system inquiries."
              },
              {
                title: "Up to 250 Users Covered",
                desc: "Scalable endpoint management covering 100 endpoints and supporting up to 250 team users."
              }
            ].map((feat, i) => (
              <div key={i} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 flex items-start gap-4">
                <CheckCircle2 size={22} className="text-[#ff3d81] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-base font-semibold text-white mb-1 font-['Space_Grotesk',sans-serif]">{feat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions Section */}
        <div className="bg-[#0B1120]/80 border border-slate-800 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-4 text-[#ff7a1a]">
            <AlertCircle size={22} />
            <h3 className="text-lg font-bold text-white font-['Space_Grotesk',sans-serif]">Terms & Conditions</h3>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-400 list-disc list-inside leading-relaxed">
            <li>GST (18%) will be charged extra on all invoices in accordance with applicable tax regulations.</li>
            <li>A minimum contract commitment period of <strong>up to 6 months</strong> (plus applicable GST) applies upon contract execution.</li>
            <li>The one-time setup and onboarding fee of ₹1,49,999 is a non-recurring initial implementation charge.</li>
            <li>Additional endpoint (₹299/ep/mo) and log volume (₹1,199/GB/mo) additions are billed pro-rata as per agreed terms.</li>
          </ul>
        </div>

        <div className="text-center bg-gradient-to-r from-[#ff3d81]/20 via-slate-900/80 to-[#ff7a1a]/20 border border-white/10 rounded-3xl p-10 sm:p-14 relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-['Space_Grotesk',sans-serif]">
            Ready to Upgrade Your Cyber Defense with ACIS Pro?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Schedule a technical consultation with our cybersecurity specialists to configure your ACIS Pro deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact?plan=acis-pro"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#ff3d81] to-[#ff7a1a] text-white font-bold text-base hover:opacity-95 transition-all shadow-lg no-underline"
            >
              <Mail size={18} />
              <span>Talk to Sales</span>
            </Link>

            <a
              href="tel:1800121008800"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-base hover:bg-white/10 transition-all no-underline"
            >
              <Phone size={18} className="text-[#ff7a1a]" />
              <span>1800 12100 8800</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AcisProPricing;
