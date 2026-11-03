import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield,
  Search,
  Zap,
  Lock,
  Globe,
  ArrowRight,
  Database,
  Terminal,
  Activity,
  FileCheck,
  CheckCircle2,
  Users,
  FileText,
  Settings,
  AlertTriangle,
  Server,
  TrendingUp,
  Cpu,
  Monitor,
  Flame,
  LayoutGrid,
  FileSpreadsheet,
  CircleDollarSign,
  ShieldAlert,
  Building2,
  ShoppingCart,
  Landmark,
  Heart,
  GraduationCap,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

const NetCradPage = () => {
  usePageMeta(
    "NetCrad | Intelligent Website Security Audit Platform | Netcradus",
    "Netcrad is an intelligent Website Security Audit platform that scans your website for security vulnerabilities, configuration weaknesses, performance issues, and compliance risks."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden">
      
      <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Background Gradients & Effects */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(ellipse at 30% 30%, rgba(255,107,0,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 70%, rgba(59,130,246,0.06) 0%, transparent 50%)
            `
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                <span className="text-xs font-bold tracking-wider uppercase text-accent">
                  Netcrad Website Audit Tool
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white">
                Discover Security Risks<br />
                <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
                  Before Hackers Do
                </span>
              </h1>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
                Netcrad is an intelligent Website Security Audit platform that scans your website for security vulnerabilities, configuration weaknesses, performance issues, and compliance risks—helping you secure your digital presence before attackers can exploit it.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm tracking-wide shadow-lg shadow-accent/20 hover:bg-accent-bright hover:scale-102 transition-all duration-300 no-underline"
                >
                  Start Free Scan
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/20 hover:scale-102 transition-all duration-300 no-underline"
                >
                  Schedule Security Assessment
                </Link>
              </div>

              {/* Quick Highlights list under CTAs */}
              <div className="pt-6 border-t border-border/10">
                <span className="text-xs font-bold uppercase tracking-widest text-text-secondary block mb-3">
                  Quick Highlights
                </span>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {[
                    "AI-Powered Website Analysis",
                    "OWASP Security Checks",
                    "SSL & HTTPS Verification",
                    "SEO & Performance Insights",
                    "Instant PDF Reports"
                  ].map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-white/95">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {hl}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="absolute w-[350px] h-[350px] rounded-full bg-accent/8 blur-[80px] pointer-events-none z-0" />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full max-w-[450px]"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                  <img
                    src="/generated/hacker_code_screen_1773394510636.png"
                    alt="Netcrad Website Audit Engine"
                    className="w-full h-auto object-cover rounded-[20px]"
                    style={{ filter: "drop-shadow(0 15px 30px rgba(255, 107, 0, 0.12))" }}
                  />
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Graphic */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[480px]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-3xl pointer-events-none" />
                <div className="relative overflow-hidden rounded-[24px] border border-border bg-surface p-8 shadow-sm">
                  <h4 className="text-sm font-extrabold text-white mb-6">Continuous Website Posture Security</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl border border-border bg-black/20 flex items-center justify-between">
                      <span className="text-xs text-text-secondary">Security Score</span>
                      <span className="text-sm font-black text-green-500">96/100 (Excellent)</span>
                    </div>
                    <div className="p-4 rounded-xl border border-border bg-black/20 flex items-center justify-between">
                      <span className="text-xs text-text-secondary">SSL Certificate Status</span>
                      <span className="text-sm font-black text-green-500">Valid (Expires in 234 days)</span>
                    </div>
                    <div className="p-4 rounded-xl border border-border bg-black/20 flex items-center justify-between">
                      <span className="text-xs text-text-secondary">Security Headers Status</span>
                      <span className="text-sm font-black text-amber-500">CSP Warning</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Text content */}
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Product Introduction
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Trusted by Businesses That Take Security Seriously
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Your website is your first line of business. Netcrad continuously analyzes your web application to identify security gaps, helping organizations reduce cyber risks and improve their online security posture.
              </p>
              
              <div className="pt-4 border-t border-border/10">
                <h3 className="text-xl font-extrabold text-white mb-3">What is Netcrad?</h3>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  Netcrad is a comprehensive Website Security Audit platform designed to help organizations identify vulnerabilities, security misconfigurations, outdated technologies, and compliance issues through automated intelligent scanning.
                </p>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed mt-3">
                  Whether you're running a corporate website, e-commerce platform, SaaS application, or customer portal, Netcrad provides actionable recommendations to strengthen your security.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Cyber Exposure Risk</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Why Website Security Matters
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                A single vulnerable website can lead to devastating consequences for your business reputation, financial bottom line, and database confidentiality.
              </p>
              <p className="text-base font-bold text-white/90">
                Protect your business before cybercriminals discover your weaknesses.
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-bright transition-colors group"
                >
                  Start Your First Assessment Free
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Threats Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Data Breaches", desc: "Leakage of customer passwords and sensitive PII databases.", icon: Lock },
                { title: "Website Defacement", desc: "Malicious modification of public branding elements.", icon: Monitor },
                { title: "Malware Infections", desc: "Injection of malicious scripts targeting site visitors.", icon: AlertTriangle },
                { title: "SEO Blacklisting", desc: "Google flag status blocking organic search traffic.", icon: Search },
                { title: "Customer Trust Loss", desc: "Severe degradation of user loyalty and digital credibility.", icon: Users },
                { title: "Regulatory Penalties", desc: "Heavy fines mapping to compliance frameworks.", icon: FileCheck },
                { title: "Financial Damage", desc: "Severe revenue loss from downtime and restoration.", icon: CircleDollarSign }
              ].map((threat, idx) => {
                const Icon = threat.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-border bg-surface hover:border-accent/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-500/10 text-accent mb-3">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1">{threat.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{threat.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Auditing Scope</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">What Netcrad Scans</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We perform automated, multi-layer intelligence checks across four distinct audit modules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Website Security",
                icon: Shield,
                checks: [
                  "SSL Certificate Validation",
                  "HTTPS Configuration",
                  "Security Headers",
                  "Mixed Content Detection",
                  "Cookie Security",
                  "HTTP Methods",
                  "TLS Configuration",
                  "DNS Security"
                ]
              },
              {
                title: "Vulnerability Assessment",
                icon: ShieldAlert,
                checks: [
                  "SQL Injection Indicators",
                  "Cross-Site Scripting (XSS)",
                  "Cross-Site Request Forgery (CSRF)",
                  "Directory Listing",
                  "Open Redirects",
                  "Clickjacking Protection",
                  "Sensitive File Exposure",
                  "Server Information Disclosure"
                ]
              },
              {
                title: "Infrastructure Security",
                icon: Server,
                checks: [
                  "Open Ports Detection",
                  "DNS Configuration",
                  "Web Server Information",
                  "Technology Fingerprinting",
                  "Firewall Detection",
                  "CDN Configuration",
                  "IP Reputation",
                  "Hosting Security Analysis"
                ]
              },
              {
                title: "Performance & SEO",
                icon: TrendingUp,
                checks: [
                  "Core Web Vitals",
                  "Page Speed",
                  "Mobile Optimization",
                  "Broken Links",
                  "Metadata Analysis",
                  "Sitemap Verification",
                  "Robots.txt Validation",
                  "Image Optimization"
                ]
              }
            ].map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-6 shadow-sm hover:border-accent/25 hover:bg-orange-500/5 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-5 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-4">{category.title}</h3>
                    
                    <ul className="space-y-2">
                      {category.checks.map((check, checkIdx) => (
                        <li key={checkIdx} className="flex items-center gap-2 text-xs text-text-secondary leading-snug">
                          <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                          {check}
                        </li>
                      ))}
                    </ul>
                  </div>
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
            <h2 className="text-3xl sm:text-4xl font-black text-white">Key Features</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Discover, risk-score, remediate, and continuously track public-facing website exposures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Powered Website Intelligence",
                desc: "Advanced scanning engine that identifies security risks using intelligent analysis.",
                icon: Cpu
              },
              {
                title: "One-Click Security Audit",
                desc: "Simply enter your website URL and receive a complete security assessment within minutes.",
                icon: Zap
              },
              {
                title: "Comprehensive Risk Scoring",
                desc: "Every vulnerability is assigned a severity level: Critical, High, Medium, Low, or Informational.",
                icon: Activity
              },
              {
                title: "Actionable Recommendations",
                desc: "Every issue includes risk explanation, business impact, technical details, recommended fix, and security best practices.",
                icon: Settings
              },
              {
                title: "Professional PDF Reports",
                desc: "Generate detailed security reports suitable for clients, management, compliance, developers, and security teams.",
                icon: FileText
              },
              {
                title: "Continuous Monitoring",
                desc: "Monitor your website regularly and receive alerts when new vulnerabilities or configuration changes are detected.",
                icon: Monitor
              }
            ].map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-8 shadow-sm hover:border-accent/25 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-xl bg-orange-500/10 text-accent mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Auditing Scope</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Security Audit Categories</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We cover all technical security indicators mandated by global frameworks and standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-[20px] border border-border bg-surface">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-border bg-white/5">
                    <th className="p-5 text-sm font-black text-white">Category</th>
                    <th className="p-5 text-sm font-black text-white">Coverage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    { cat: "SSL Security", cov: "Certificate, TLS, HTTPS" },
                    { cat: "Website Headers", cov: "CSP, HSTS, X-Frame, XSS Protection" },
                    { cat: "Web Application", cov: "Common OWASP Risks" },
                    { cat: "Server Security", cov: "Version Exposure, Configuration" },
                    { cat: "DNS Analysis", cov: "DNSSEC, MX, SPF, DMARC" },
                    { cat: "Website Performance", cov: "Speed, Optimization" },
                    { cat: "SEO Health", cov: "Technical SEO Audit" },
                    { cat: "Best Practices", cov: "Industry Security Standards" }
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="p-5 text-sm font-bold text-white">{row.cat}</td>
                      <td className="p-5 text-sm text-text-secondary">{row.cov}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Workflow</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">How It Works</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Run audits and implement remediation fixes in five simplified workflow steps.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent via-accent-bright to-orange-700 z-0 opacity-40" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", name: "Submit URL", desc: "Enter your website URL inside our unified console.", icon: Globe },
                { step: "02", name: "Scan Engine", desc: "Netcrad performs an automated multi-layer security assessment.", icon: Search },
                { step: "03", name: "AI Analysis", desc: "AI analyzes vulnerabilities and calculates risk scores.", icon: Cpu },
                { step: "04", name: "Report Delivery", desc: "Receive a detailed report with recommendations.", icon: FileSpreadsheet },
                { step: "05", name: "Remediation", desc: "Fix identified issues and improve your security posture.", icon: CheckCircle2 }
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

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Value Realization</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Benefits of Netcrad</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Proactive website scanning safeguards user databases, speeds loading, and protects branding integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Identify vulnerabilities before attackers exploit them",
              "Substantially reduce enterprise cyber exposure risks",
              "Improve trust score with SSL validation and security headers",
              "Strengthen compliance readiness (SOC2, GDPR, HIPAA)",
              "Improve site performance metrics and loading speed",
              "Enhance customer confidence and security compliance",
              "Support developer teams with technical fix remediation code",
              "Simplify website security audits into single click scans"
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-surface shadow-sm hover:border-accent/15 transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
                  <CheckCircle2 size={15} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Target Verticals</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Who Can Use Netcrad?</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We deliver dedicated website auditing configurations matching the scale of your target business.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Enterprises", desc: "Continuous website security monitoring.", icon: Building2 },
              { name: "Startups", desc: "Affordable website protection from day one.", icon: Flame },
              { name: "E-commerce", desc: "Protect customer data and payment pages.", icon: ShoppingCart },
              { name: "Government", desc: "Strengthen public-facing portals.", icon: Landmark },
              { name: "Healthcare", desc: "Reduce risks to sensitive patient information.", icon: Heart },
              { name: "Education", desc: "Secure student portals and online learning platforms.", icon: GraduationCap },
              { name: "Financial Services", desc: "Improve security posture for banking applications.", icon: CircleDollarSign },
              { name: "Digital Agencies", desc: "Deliver professional security reports for client websites.", icon: Users }
            ].map((user, idx) => {
              const Icon = user.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-border bg-surface hover:border-accent/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-115 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white mb-2 leading-tight">{user.name}</h4>
                  <p className="text-[10px] sm:text-xs text-text-secondary leading-relaxed">{user.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Control Center</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Dashboard Highlights</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Track metrics, scan histories and risk distributions from a unified enterprise-grade dashboard.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              "Overall Security Score",
              "Website Health Score",
              "Risk Distribution",
              "Critical Findings",
              "SSL Status",
              "Security Headers",
              "Technology Stack",
              "Performance Metrics",
              "Compliance Overview",
              "Scan History",
              "Trend Analysis",
              "Download Reports"
            ].map((metric, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-surface hover:border-accent/15 transition-all duration-300"
              >
                <div className="w-5 h-5 flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0">
                  <CheckCircle2 size={13} />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Our Advantage</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                Why Choose Netcrad?
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                Netcrad bridges the gap between complex web application penetration testing and automated scanning efficiency.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                AI-assisted calculations. Comprehensive OWASP checking rules. Clear developer fixes.
              </p>
            </div>

            {/* Right Highlight Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Fast Website Scanning", desc: "Obtain complete scans in minutes." },
                { title: "AI-Assisted Analysis", desc: "Automate severity calculations and fixes." },
                { title: "OWASP-Based Security Checks", desc: "Audit target application vulnerabilities." },
                { title: "Easy-to-Understand Reports", desc: "Translate raw logs into risk scores." },
                { title: "Enterprise-Ready Dashboard", desc: "Track posture histories across SaaS domains." },
                { title: "Continuous Monitoring", desc: "Get real-time alerts when configurations change." }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-accent/15 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{item.title}</h4>
                    <p className="text-xs text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Secure Your Website?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Don't wait for attackers to discover vulnerabilities first. Scan your website with Netcrad and gain clear, actionable insights to strengthen your security.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Scan My Website
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-border/20 bg-surface/50 text-center relative overflow-hidden">
        <div className="container mx-auto max-w-screen-xl px-4 relative z-10 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-black text-white">Security Starts with Visibility.</h3>
          <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Netcrad helps you identify, understand, and remediate website security risks—so you can build trust with every visitor.
          </p>
        </div>
      </section>

    </div>
  );
};

export default NetCradPage;