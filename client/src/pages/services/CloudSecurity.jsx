import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import {
  Cloud,
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
  BrainCircuit,
  FileText,
  EyeOff,
  Network,
  Building2,
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
  Search,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const CloudSecurityPage = () => {
  usePageMeta(SEO_META.services.title, SEO_META.services.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden">
      
      <section className="relative min-h-[50vh] lg:min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Responsive Video System (Desktop Background / Mobile Card Box) */}
        <ResponsiveVideo src="/videos/cloud security video.mp4" mode="dual" />

        {/* Dark Overlay Gradient for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75 pointer-events-none z-0" />

        {/* Background Gradients & Effects */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 30%, rgba(255,107,0,0.1) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(59,130,246,0.06) 0%, transparent 50%)
            `
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-3xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-bold tracking-wider uppercase text-accent">
                Cloud Security Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white">
              Secure Your Cloud.<br />
              <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
                Protect Every Workload.
              </span>
            </h1>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          
          <div 
            className="relative rounded-3xl sm:rounded-[32px] overflow-hidden border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)] min-h-[540px] flex items-center"
            style={{
              backgroundImage: `url('/assets/cloud-security-wide.png')`,
              backgroundPosition: 'left center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Smooth Gradient Overlay: Clear vibrant image on left, darkening towards the right for text */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/30 via-60% to-[#0A0605] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />

            {/* Content Container (Text Shifted Right) */}
            <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-10 lg:p-14 gap-8 items-center">
              {/* Empty Left Space to show the vibrant Tech Tree artwork clearly */}
              <div className="hidden lg:block lg:col-span-6 xl:col-span-7" />

              {/* Right Column: Text Content (Shifted Further Right) */}
              <div className="lg:col-span-6 xl:col-span-5 text-left space-y-5">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00] bg-[#FF6B00]/15 border border-[#FF6B00]/30 px-3.5 py-1.5 rounded-full inline-block backdrop-blur-md">
                  CORE CONCEPTS
                </span>
                
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
                  What is Cloud Security?
                </h2>
                
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                  Cloud Security is the practice of protecting cloud-based infrastructure, applications, workloads, and sensitive data from cyber threats, unauthorized access, and misconfigurations.
                </p>
                
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed drop-shadow">
                  It combines advanced technologies, security policies, continuous monitoring, identity management, and threat detection to ensure your cloud environment remains secure, compliant, and resilient.
                </p>
                
                <div className="pt-2 p-4 rounded-2xl bg-black/75 border border-white/20 backdrop-blur-md shadow-lg">
                  <p className="text-xs sm:text-sm text-white leading-relaxed font-medium">
                    <strong className="text-[#FF6B00]">Shared Responsibility Model:</strong> While cloud providers secure the underlying host layer, you must secure the applications, access logs, configurations, and data you deploy inside it.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Strategic Imperative</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Cloud Security Matters
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Without robust cloud guardrails, decentralized operations leave open access points, exposed APIs, and misconfigured S3/Blob storage containers that invite immediate intrusion.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Applying traditional network perimeters doesn't work in ephemeral dynamic environments. Adaptive IAM settings and constant telemetry scanning are key to stopping threats before they scale.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                "Securing the cloud is not just about blocking intruders—it's about ensuring your organization can scale dynamically without leaving operational perimeters unprotected."
              </p>
            </div>

            {/* Right Column: Statistics Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[24px] border border-accent/20 bg-gradient-to-br from-white/5 to-orange-500/5 p-8 backdrop-blur-md shadow-[0_15px_30px_rgba(255,107,0,0.03)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="text-xl font-extrabold text-white mb-6">Cloud Threat Realities</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">82%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Breaches Involving Cloud Data</h4>
                      <p className="text-xs text-text-secondary mt-1">Majority of modern security incidents exploit data stored inside public or hybrid cloud assets.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">95%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Caused by Misconfigurations</h4>
                      <p className="text-xs text-text-secondary mt-1">Nearly all cloud breaches stem from user-controlled permission errors and open firewall ports.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-black text-accent">2x</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Cost of Hybrid Security Incidents</h4>
                      <p className="text-xs text-text-secondary mt-1">Multi-cloud breaches cost twice as much to contain due to tracking complexities across segmented frameworks.</p>
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
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Essential Guardrails</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Why Every Business Needs Cloud Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Ensure continuous runtime protection, threat detection and data integrity inside multi-cloud architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Continuous Compliance", desc: "Ensure your cloud setups continuously comply with standard frameworks like SOC2, GDPR, HIPAA, and CIS benchmarks.", icon: FileCheck },
              { title: "Prevent Misconfigurations", desc: "Automate scans to detect and auto-remediate configuration drift, open buckets, and public keys.", icon: Settings },
              { title: "Data Loss Prevention", desc: "Encrypt sensitive records at-rest and in-transit while monitoring data egress paths.", icon: Lock },
              { title: "Granular Identity & Access", desc: "Hardening IAM policies using least-privilege protocols to reduce exposure.", icon: Key },
              { title: "Secure API Integrations", desc: "Surveil and protect micro-service interfaces against data scraping and endpoint injection attacks.", icon: Globe },
              { title: "Workload Isolation", desc: "Isolate containers, virtual networks, and hybrid server clusters to block lateral breach spreads.", icon: ShieldAlert }
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
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Core Capabilities</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Our Cloud Security Services</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We deploy full-suite security solutions matching the demands of AWS, Azure, GCP, and hybrid cloud infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Cloud Posture Management (CSPM)", desc: "Continuous scanning for configuration compliance, credential drifts and exposed perimeters.", icon: Settings },
              { title: "Identity & Entitlement (CIEM)", desc: "De-escalating excessive permissions, removing inactive profiles and managing multi-cloud access.", icon: Key },
              { title: "Workload Protection (CWPP)", desc: "Host-level threat detection, runtime monitoring and container vulnerability audits.", icon: Shield },
              { title: "Data Loss Prevention (DLP)", desc: "Continuous scanning of cloud repositories to discover and secure exposed PII.", icon: Lock },
              { title: "DevSecOps Integration", desc: "Injecting code audits, container security checks and image scans into your build pipelines.", icon: BrainCircuit },
              { title: "API Security Shielding", desc: "Rate limiting, threat monitoring and configuration audits for API gateway integrations.", icon: Globe },
              { title: "Hybrid Cloud Connectivity", desc: "Securing ExpressRoute, DirectConnect and VPN traffic against perimeter interception.", icon: Network },
              { title: "Log Correlation & Alerts", desc: "Piping cloud trails and access logs directly to SIEM/SOC modules for automated triage.", icon: Database },
              { title: "Continuous Compliance", desc: "Ensuring configurations conform to strict regional regulations like ISO 27001 and GDPR.", icon: FileCheck }
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
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Operational Cycle</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">How We Secure Your Cloud</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Our structured operational cycle ensures continuous protection from initialization to runtime threat containment.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent via-accent-bright to-orange-700 z-0 opacity-40" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", name: "Audit", desc: "Perform detailed permission, credential and configuration architecture scans across all cloud assets.", icon: Search },
                { step: "02", name: "Harden", desc: "Apply least-privilege IAM setups, secure S3 buckets, and configure WAF/firewalls.", icon: Key },
                { step: "03", name: "Monitor", desc: "Activate telemetry ingestion and live audit log analysis inside SIEM pipelines.", icon: Eye },
                { step: "04", name: "Protect", desc: "Deploy runtime protection on active serverless workloads, databases and containers.", icon: Shield },
                { step: "05", name: "Optimize", desc: "Continuously update compliance playbooks, review threat reports and tune firewall rules.", icon: Flame }
              ].map((process, idx) => {
                const Icon = process.icon;
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Technologies We Support</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We integrate natively with all major public cloud platforms and enterprise container security technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "AWS Security", desc: "Identity auditing, GuardDuty alerts and IAM configurations.", icon: Cloud },
              { title: "Azure Security", desc: "Defender logs, sentinel configs and Entra policies.", icon: Cloud },
              { title: "GCP Security", desc: "Asset inventory scans and security command monitoring.", icon: Cloud },
              { title: "Kubernetes Sec.", desc: "Cluster networking controls and pod isolation audits.", icon: Settings },
              { title: "Docker Container", desc: "Image scanning and access controls governance.", icon: BoxIcon },
              { title: "HashiCorp Vault", desc: "Secret lifecycle automation and key rotation auditing.", icon: Key },
              { title: "Palo Alto Prisma", desc: "CSPM telemetry correlation and threat intelligence mapping.", icon: Shield },
              { title: "Cloudflare WAF", desc: "Edge protection filters and API rate limiting.", icon: Globe },
              { title: "Okta IAM", desc: "Single sign-on audits and multi-factor validation.", icon: Users },
              { title: "Wiz Integrations", desc: "Vulnerability data indexing and threat priority mappings.", icon: Database }
            ].map((tech, idx) => {
              const Icon = tech.icon || Shield;
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Industries We Secure</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Tailoring cloud compliance configurations and monitoring parameters to vertical requirements.
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
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Value Delivery</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Benefits of Investing in Cloud Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Ensure continuous runtime protection, threat detection, and data integrity inside multi-cloud architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Continuous configuration compliance visibility",
              "Mitigation of resource permission exposures",
              "Protection of sensitive databases and buckets",
              "Real-time identification of serverless workload drift",
              "Reduction of unauthorized micro-service access",
              "Compliance certification ready posture",
              "Rapid containment of cloud accounts and VMs",
              "Integrated logs for automated SOC alerting",
              "Secure, speedier product delivery pipeline runs"
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
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Partner of Choice</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Choose Netcradus?
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                At Netcradus, we integrate security into the core cloud architecture. Our continuous monitoring and automated remediations safeguard operations against modern infrastructure attacks.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                Enterprise-Grade Cloud Security. Native Integrations. Zero Configuration Overhead.
              </p>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Continuous Multicloud Monitoring", icon: Eye },
                { title: "Auto-Remediation Playbooks", icon: Zap },
                { title: "Zero Trust IAM Architectures", icon: Key },
                { title: "Kubernetes & Container Hardening", icon: Settings },
                { title: "Vulnerability Correlation Logging", icon: Database },
                { title: "Regulatory compliance auditing", icon: FileCheck }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
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
            Ready to Secure Your Cloud?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Don't let permissions and misconfigurations threaten workload operations. Connect with our expert advisors to implement robust cloud security perimeters today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Start Your Cloud Security Audit
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

const BoxIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

export default CloudSecurityPage;