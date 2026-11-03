import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import {
  Network,
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
  Server,
  Activity,
  Search,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const NetworkSecurityPage = () => {
  usePageMeta(SEO_META.services.title, SEO_META.services.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden">
      
      <section className="relative min-h-[50vh] lg:min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden text-white bg-slate-950">
        {/* Responsive Video System (Desktop Background / Mobile Card Box) */}
        <ResponsiveVideo src="/videos/network security.mp4" mode="dual" />

        {/* Semi-transparent Dark Gradient Overlay for High Video Visibility & Sharp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/20 z-0 pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-3xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/30 bg-accent/15 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              <span className="text-xs font-bold tracking-wider uppercase text-accent">
                Network Security Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              Secure Your Perimeter.<br />
              <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
                Protect Your Infrastructure.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl drop-shadow-sm">
              As organizations support hybrid workforces and deploy applications across multiple environments, the network perimeter has evolved. Our Network Security Services protect your networks, servers, and remote connections against intrusion, lateral movement, and data exfiltration.
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
                    src="/generated/cyber_server_room_1773394493658.png"
                    alt="Network Security Definition"
                    className="w-full h-auto object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Core Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                What is Network Security?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Network Security is the set of configurations, policies, and systems designed to defend the integrity, confidentiality, and accessibility of corporate computer networks and data.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                It combines hardware and software controls—such as next-generation firewalls, intrusion prevention systems (IPS), web application firewalls (WAF), secure SD-WAN, and zero-trust network access (ZTNA)—to intercept threats before they enter your perimeter.
              </p>
              <p className="text-base text-text-secondary leading-relaxed font-semibold text-white/90">
                In today's decentralized environments, network security shifts from securing a static physical boundary to establishing dynamic, identity-based boundaries that secure workloads wherever they run.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Strategic Defense</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Network Security Matters
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                As network perimeters expand to cloud nodes and remote office endpoints, traditional flat-network architectures present high exposure risks. A single compromised host can allow unrestricted lateral movement.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Modern network security limits these threats by deploying micro-segmentation, continuous packet inspections, and multi-factor access policies that isolate breaches at the point of origin.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                "Securing the network is not just about blocking entry—it's about containing threats and ensuring the business can operate uninterrupted."
              </p>
            </div>

            {/* Right Column: Statistics Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[24px] border border-accent/20 bg-gradient-to-br from-white/5 to-orange-500/5 p-8 backdrop-blur-md shadow-[0_15px_30px_rgba(255,107,0,0.03)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="text-xl font-extrabold text-white mb-6">Threat Metrics</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">$4.5M</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Average Cost of Net Intrusion</h4>
                      <p className="text-xs text-text-secondary mt-1">Financial impact covering containment, loss of service, and restoration costs.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">68%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Exploit Lateral Movement</h4>
                      <p className="text-xs text-text-secondary mt-1">Nearly 70% of network breaches target secondary assets via lateral propagation paths.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-black text-accent">50%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Reduction in Downtime</h4>
                      <p className="text-xs text-text-secondary mt-1">Organizations with active segmentation cut their service downtime by half during incidents.</p>
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
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Pillars of Integrity</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Why Every Business Needs Network Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Ensure continuous runtime protection, threat isolation and connection privacy across enterprise networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Block Lateral Movement", desc: "Enforce network segmentation and zero-trust policies to isolate compromised assets instantly.", icon: ShieldAlert },
              { title: "Defend Remote Connections", desc: "Provide secure encrypted ZTNA and SD-WAN links for hybrid and remote office workforces.", icon: Server },
              { title: "Prevent Downtime", desc: "Mitigate expensive outages with real-time DDoS filtering and automated traffic scrubbing.", icon: Zap },
              { title: "Regulatory Compliance", desc: "Meet strict compliance audits (such as PCI-DSS, ISO 27001, GDPR) for data in transit.", icon: FileCheck },
              { title: "Identify Intrusions Early", desc: "Detect and flag anomalous traffic spikes, port scans, and command-and-control behaviors.", icon: Eye },
              { title: "Hardened Gateway Access", desc: "Deploy next-generation firewalls to monitor and control inbound and outbound traffic flows.", icon: Network }
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
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Our Offerings</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Our Network Security Services</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We deploy full-suite security solutions matching the demands of modern enterprise networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Next-Generation Firewall (NGFW)", desc: "Granular control, packet inspections, and deep traffic visibility.", icon: Shield },
              { title: "Intrusion Detection & Prevention", desc: "Real-time threat signature mapping and anomalous packet isolation.", icon: ShieldAlert },
              { title: "Network Traffic Analysis (NTA)", desc: "Machine learning analytics to flag lateral movements and C2 connections.", icon: Activity },
              { title: "Secure SD-WAN Management", desc: "Encrypted, optimized and managed network connectivity across branch offices.", icon: Server },
              { title: "Network Microsegmentation", desc: "Isolating server workloads and databases into distinct secure zones.", icon: Network },
              { title: "DDoS Mitigation Services", desc: "High-volume traffic scrubbing to preserve availability under attack.", icon: Zap },
              { title: "Zero Trust Network Access (ZTNA)", desc: "Identity-based application access replacing legacy insecure VPN setups.", icon: Key },
              { title: "SSL/TLS Traffic Inspection", desc: "Decrypting and analyzing network packets safely to detect hidden payloads.", icon: Eye },
              { title: "Network Access Control (NAC)", desc: "Profile devices, verify postures, and authorize endpoint network access.", icon: Monitor }
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">How We Secure Your Network</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Our structured operational cycle ensures continuous protection from network ingestion to adaptive containment.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent via-accent-bright to-orange-700 z-0 opacity-40" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", name: "Ingest", desc: "Route and correlate telemetry logs from switches, routers, and host agents.", icon: Database },
                { step: "02", name: "Inspect", desc: "Analyze packets, signatures, and traffic protocols in real time.", icon: Search },
                { step: "03", name: "Enforce", desc: "Apply NGFW policies, ZTNA boundaries, and segmentation rules.", icon: Shield },
                { step: "04", name: "Alert", desc: "Flag threat anomalies, lateral actions, and malicious traffic spikes.", icon: AlertTriangle },
                { step: "05", name: "Adapt", desc: "Update access privileges, patch vulnerabilities, and fine-tune rules.", icon: Flame }
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Technologies We Support</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We leverage, support and integrate with industry-leading network security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "Fortinet NGFW", desc: "Perimeter logs, security policies, and SD-WAN integrations.", icon: Shield },
              { title: "Palo Alto Networks", desc: "Prisma access tunnels, firewalls, and policy configurations.", icon: Shield },
              { title: "Cisco Systems", desc: "Identity services engine (ISE) audits and switch mappings.", icon: Network },
              { title: "Check Point", desc: "Packet inspection logs, WAF alerts and firewall rules.", icon: Shield },
              { title: "F5 BIG-IP", desc: "Load balancer settings, SSL termination and WAF setups.", icon: Server },
              { title: "Cloudflare WAF", desc: "Edge rules, DDoS scrubbing and DNS security.", icon: Globe },
              { title: "Aruba ClearPass", desc: "Endpoint posture profiles and network access controls.", icon: Key },
              { title: "Zscaler ZTNA", desc: "Private access gateway configs and user policies.", icon: ShieldAlert },
              { title: "pfSense Security", desc: "Open-source firewall configurations and VPN bridges.", icon: Settings },
              { title: "Ubiquiti Networks", desc: "WLAN settings, switch maps and local perimeters.", icon: Database }
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Industries We Secure</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We deliver custom network isolation and surveillance models tailored to vertical regulations.
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Benefits of Investing in Network Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Proactive network security safeguards operational runtime and mitigates lateral breach propagation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Complete isolation of compromised assets to stop lateral movement",
              "Encrypted, secure channels for all remote connection points",
              "Minimize operational downtime with active DDoS mitigation",
              "Achieve compliance readiness (ISO 27001, PCI-DSS, GDPR)",
              "Identify anomalous network events and port scans early",
              "Harden perimeter firewalls with intelligent inspection rules",
              "Reduce risks associated with unsecured IoT device extensions",
              "Obtain full visibility over internal network packet flows",
              "Provide safe, policy-driven application access via ZTNA"
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
                At Netcradus, we bridge perimeter controls with cloud native networks. Our continuous traffic scanning and automated mitigations safeguard operations against complex network attacks.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                Enterprise-Grade Network Controls. Zero-Trust Access. Integrated Incident containment.
              </p>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Continuous Traffic Surveillance", icon: Eye },
                { title: "Automated DDoS Mitigation", icon: Zap },
                { title: "Granular Network Microsegmentation", icon: Network },
                { title: "Zero Trust Network Access (ZTNA)", icon: Key },
                { title: "Unified log and telemetry flow", icon: Database },
                { title: "Ensured regional audit compliance", icon: FileCheck }
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
            Ready to Secure Your Network?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Don't leave perimeter structures exposed. Connect with our expert advisors to implement robust network security controls today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Start Your Network Assessment
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

const DownloadCloud = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const AlertTriangle = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

export default NetworkSecurityPage;