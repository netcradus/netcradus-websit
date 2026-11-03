import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import {
  Building2,
  Shield,
  Eye,
  Key,
  Lock,
  ArrowRight,
  Database,
  Radio,
  Monitor,
  Workflow,
  Cpu,
  Globe,
  CircleDollarSign,
  Zap,
  FileCheck,
  Users,
  TrendingUp,
  ShieldAlert,
  FileText,
  EyeOff,
  Network,
  Heart,
  Factory,
  Landmark,
  GraduationCap,
  ShoppingCart,
  PhoneCall,
  Truck,
  Flame,
  CheckCircle2,
  FileSpreadsheet,
  Settings,
  ShieldX,
  UserCheck,
  Scale,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const EnterpriseSecurityPage = () => {
  usePageMeta(SEO_META.services.title, SEO_META.services.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden">
      
      <section className="relative min-h-[50vh] lg:min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden z-10">
        {/* Responsive Video System (Desktop Background / Mobile Card Box) */}
        <ResponsiveVideo src="/img/enterprise-security.mp4" mode="dual" />

        {/* Dynamic Light Gradient Overlay to Ensure High Video Visibility + Sharp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-[#05060A] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,107,0,0.18)_0%,transparent_60%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/15 backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-black tracking-wider uppercase text-accent">
                Enterprise Security Programs
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Align Security. <br />
              <span className="bg-gradient-to-r from-accent via-accent-bright to-amber-400 bg-clip-text text-transparent">
                Protect Enterprise Growth.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Securing a modern global enterprise requires more than deploying standalone tools. It demands a holistic, board-aligned security strategy that manages corporate risks, ensures strict regulatory compliance, and validates vendor dependencies.
            </p>
            

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-3xl pointer-events-none" />
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <img
                    src="/generated/corporate_office_cyber_1773394698579.png"
                    alt="Enterprise Security Definition"
                    className="w-full h-auto object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Strategic Alignment
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                What is Enterprise Security?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Enterprise Security is the comprehensive practice of designing, managing, and governing security strategies, risk management frameworks, compliance baselines, and employee guidelines across large-scale businesses.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Instead of focusing purely on device-level settings, it addresses corporate-wide threats through formal security architectures, board-level reporting, third-party vendor audits, and incident command playbooks.
              </p>
              <p className="text-base text-text-secondary leading-relaxed font-semibold text-white/90">
                It bridges the gap between raw technical security metrics and business risk management, helping your organization maintain customer trust and audit clearance during high-speed scaling.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Governance Controls</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Enterprise Security Matters
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Without a unified GRC program and formal CISO leadership, enterprises deploy fragmented security configurations that lead to compliance failure, exposed vendor channels, and data leaks.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                By aligning security configurations directly with board-level metrics, organizations avoid regulatory penalties, identify third-party vulnerabilities, and train workforces to mitigate human risk vectors.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                "Governance and strategic security architecture are what transform technical security checklists into a sustainable, resilient growth engine."
              </p>
            </div>

            {/* Right Column: Statistics Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[24px] border border-accent/20 bg-gradient-to-br from-white/5 to-orange-500/5 p-8 backdrop-blur-md shadow-[0_15px_30px_rgba(255,107,0,0.03)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="text-xl font-extrabold text-white mb-6">GRC Metrics</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">60%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Supply Chain Exploit Vectors</h4>
                      <p className="text-xs text-text-secondary mt-1">More than half of modern breaches are traced back to third-party vendor access keys and interfaces.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">$5.8M</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Average Compliance Failure Cost</h4>
                      <p className="text-xs text-text-secondary mt-1">Regulatory non-compliance fines, litigation costs, and audit failures create heavy financial burdens.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-black text-accent">90%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Phishing Prevention Rate</h4>
                      <p className="text-xs text-text-secondary mt-1">Continuous employee training programs reduce vulnerability to social engineering by 90%.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Corporate Guardrails</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Why Every Business Needs Enterprise Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Align security architectures, reduce vendor vulnerabilities, and cultivate security compliance at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Mitigate Third-Party Risks", desc: "Audit, analyze, and manage security settings and integrations belonging to external software vendors.", icon: ShieldAlert },
              { title: "Continuous Audit Readiness", desc: "Maintain constant compliance posture aligned to GDPR, ISO 27001:2022, and other regional mandates.", icon: FileCheck },
              { title: "vCISO Advisory", desc: "Access strategic security leadership, risk assessments, and policy modeling without dedicated overhead.", icon: UserCheck },
              { title: "Reduce Human Vector Risks", desc: "Deploy continuous phishing simulations and security awareness training to educate employee workforces.", icon: Users },
              { title: "Incident Readiness Planning", desc: "Draft detailed playbooks and coordinate tabletop simulation exercises to accelerate containment response.", icon: Workflow },
              { title: "Mergers & Acquisitions Due Diligence", desc: "Perform deep architectural reviews and asset vulnerability scans during corporate transitions.", icon: Scale }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-8 shadow-sm hover:border-accent/30 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-xl bg-orange-500/10 text-accent mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Strategic Offerings</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Our Enterprise Security Services</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We deliver board-level GRC, security consulting, and architectural modeling matching regulatory demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "vCISO advisory", desc: "Expert governance leadership, risk reviews, and security framework design.", icon: UserCheck },
              { title: "Security Architecture Review", desc: "Evaluating network segmentation, cloud native perimeters, and IAM configs.", icon: Shield },
              { title: "Third-Party Risk (TPRM)", desc: "Continuous scanning and validation of vendor software access keys.", icon: ShieldAlert },
              { title: "Phishing & Training Simulations", desc: "Interactive security awareness programs and custom employee campaigns.", icon: Users },
              { title: "GRC Auditing & Readiness", desc: "Ensuring configurations match compliance standards (ISO 27001, GDPR).", icon: FileCheck },
              { title: "Incident Readiness Audits", desc: "Developing playbooks, containment procedures, and forensic strategies.", icon: Workflow },
              { title: "M&A Security Due Diligence", desc: "Vulnerability analysis and asset scanning for corporate transactions.", icon: Scale },
              { title: "Board-Level Risk Reporting", desc: "Translating technical telemetry metrics into risk scores and scorecards.", icon: FileSpreadsheet },
              { title: "Strategy Consulting", desc: "Designing long-term security programs aligned with enterprise goals.", icon: Settings }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-8 shadow-sm hover:border-accent/25 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-6 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Governance Cycle</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">How We Deploy Your Program</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Our structured operational cycle ensures continuous protection from discover phase to audit validation.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent via-accent-bright to-orange-700 z-0 opacity-40" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", name: "Discover", desc: "Map current corporate networks, cloud platforms, IAM setups, and GRC policies.", icon: Database },
                { step: "02", name: "Assess", desc: "Perform detailed vulnerability scans, vendor analyses, and compliance profiling.", icon: Search },
                { step: "03", name: "Align", desc: "Design board-level policies and build frameworks aligned with regulatory standards.", icon: Scale },
                { step: "04", name: "Execute", desc: "Deploy security playbooks, launch training models, and optimize WAF/firewalls.", icon: Shield },
                { step: "05", name: "Audit", desc: "Run periodic testing, compile compliance reports, and present dashboards.", icon: FileCheck }
              ].map((process, idx) => {
                const Icon = process.icon || Database;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-border bg-surface text-accent mb-6 shadow-lg shadow-black/30 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-black text-accent tracking-widest uppercase mb-1">
                      Step {process.step}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2">{process.name}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-[200px] mx-auto">
                      {process.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Tech Integrations</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">GRC Tools We Support</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We leverage, support and integrate with leading compliance, reporting, and GRC systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "OneTrust GRC", desc: "Vendor risk analysis, audit logs, and compliance mapping.", icon: Scale },
              { title: "Vanta Compliance", desc: "Continuous GRC tracking and automated SOC2 audits.", icon: FileCheck },
              { title: "KnowBe4 Platform", desc: "Continuous training metrics and custom phishing reports.", icon: Users },
              { title: "ServiceNow GRC", desc: "Enterprise task automation, ticketing and SLA tracking.", icon: Workflow },
              { title: "MetricStream", desc: "Corporate risk tracking and compliance metrics.", icon: FileSpreadsheet },
              { title: "RSA Archer", desc: "Policy mappings and corporate auditing frameworks.", icon: Settings },
              { title: "Drata Automation", desc: "Continuous security baseline scanning and verification.", icon: Database },
              { title: "Secureframe", desc: "Automated compliance metrics matching regional laws.", icon: Shield },
              { title: "AuditBoard", desc: "Audit scheduling, risk reports, and internal controls.", icon: FileText },
              { title: "Splunk dashboards", desc: "Translating raw telemetry events into risk scores.", icon: Database }
            ].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl border border-border bg-surface hover:border-accent/15 hover:bg-orange-500/5 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{tech.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Verticals Secured</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Industries We Align</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We design governance policies and risk management programs tailored to sector regulations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Banking & Finance", icon: Building2 },
              { name: "Healthcare", icon: Heart },
              { name: "Manufacturing", icon: Factory },
              { name: "Government", icon: Landmark },
              { name: "Education", icon: GraduationCap },
              { name: "Retail & E-commerce", icon: ShoppingCart },
              { name: "IT & SaaS", icon: Monitor },
              { name: "Telecommunications", icon: PhoneCall },
              { name: "Logistics", icon: Truck },
              { name: "Energy & Utilities", icon: Flame }
            ].map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-border bg-surface hover:border-accent/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-115 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">{industry.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Value Realization</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Benefits of Investing in Enterprise Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Aligning security architectures with business objectives manages corporate risk and builds market trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Complete visibility over third-party software risks",
              "Maintain continuous compliance readiness (ISO, GDPR)",
              "Expert security leadership advisory via vCISO models",
              "Substantial reduction in human phishing susceptibility",
              "Coordinated incident containment and playbooks",
              "Thorough vulnerability review for M&A processes",
              "Board-level risk metrics translated to business scores",
              "Avoid expensive GRC and non-compliance failures",
              "Cultivate a resilient enterprise security culture"
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-surface shadow-sm hover:border-accent/15 transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
                  <CheckCircle2 size={15} />
                </div>
                <span className="text-sm font-bold text-white leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Netcradus Advantage</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Choose Netcradus?
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                At Netcradus, we bridge perimeter controls with corporate governance. Our CISO advisors and automated audits safeguard enterprise operations against global risk vectors.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                Enterprise GRC alignments. vCISO Strategic Advisory. Comprehensive Vendor Audits.
              </p>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Continuous Compliance GRC Tracking", icon: FileCheck },
                { title: "Experienced vCISO Strategic Advice", icon: UserCheck },
                { title: "Continuous Third-Party Assessments", icon: ShieldAlert },
                { title: "Unified Security Awareness Training", icon: Users },
                { title: "Incident Containment Mappings", icon: Workflow },
                { title: "M&A Due Diligence Auditing", icon: Scale }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-accent/15 transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent shrink-0">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-bold text-white">{item.title}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Harden Your Enterprise Posture?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Don't leave vendor risks and compliance audits unmanaged. Connect with our expert advisors to implement enterprise security structures today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Start Your Enterprise Assessment
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

const DownloadCloud = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Search = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const AlertTriangle = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default EnterpriseSecurityPage;