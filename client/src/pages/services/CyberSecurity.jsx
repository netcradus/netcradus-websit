import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import {
  Shield,
  Lock,
  Server,
  Code,
  Activity,
  CheckCircle2,
  Check,
  ArrowRight,
  ShieldCheck,
  Eye,
  FileCheck,
  Database,
  Building2,
  Globe,
  FileText,
  HelpCircle,
  Key,
  Users,
  Terminal,
  Cpu,
  Layers,
  Search,
  Zap,
  Network,
  Cloud,
  Smartphone,
  UserCheck,
  CreditCard,
  Award,
  Mail,
  Bug,
  FileLock,
  UserX,
  ServerOff,
  GitFork,
  UserMinus,
  Truck,
  ExternalLink,
  AlertCircle,
  ShieldAlert,
  Clock,
  Scale,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const CyberSecurityPage = () => {
  usePageMeta(
    SEO_META.services?.title || "Cybersecurity Services | Netcradus",
    SEO_META.services?.description || "Security, privacy, and compliance built into Netcradus."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Trust Indicator badges below hero for verified standards
  const trustIndicators = [
    { name: "ISO/IEC 27001", tag: "InfoSec Management" },
    { name: "ISO/IEC 27701", tag: "Privacy Management" },
    { name: "SOC 2 Type II", tag: "Trust Criteria" },
    { name: "DPDP Act 2023", tag: "India Data Privacy" },
    { name: "UK GDPR", tag: "UK Privacy Standard" },
    { name: "EU GDPR", tag: "EU Privacy Standard" },
  ];

  const cybersecurityBasics = [
    {
      title: "Network Security",
      desc: "Protects business networks, traffic and connected infrastructure.",
      icon: Network,
    },
    {
      title: "Application Security",
      desc: "Reduces vulnerabilities in websites, software and APIs.",
      icon: Code,
    },
    {
      title: "Data Security",
      desc: "Protects personal, financial and business information.",
      icon: Database,
    },
    {
      title: "Cloud Security",
      desc: "Secures cloud applications, workloads, accounts and stored data.",
      icon: Cloud,
    },
    {
      title: "Endpoint Security",
      desc: "Protects laptops, desktops, mobile devices and servers.",
      icon: Smartphone,
    },
    {
      title: "Identity Security",
      desc: "Ensures that only authorized users can access business resources.",
      icon: UserCheck,
    },
  ];

  const businessBenefits = [
    {
      title: "Protect customer and business information",
      desc: "Safeguard sensitive client databases, financial records, and operational intellectual property from unauthorized access.",
      icon: ShieldCheck,
    },
    {
      title: "Reduce financial fraud and cybercrime",
      desc: "Prevent unauthorized transfers, credential theft, and ransomware extortion that target corporate financial assets.",
      icon: CreditCard,
    },
    {
      title: "Secure digital payments and online transactions",
      desc: "Maintain encryption, tokenization, and integrity standards across UPI, payment gateways, and banking APIs.",
      icon: Lock,
    },
    {
      title: "Prevent operational downtime",
      desc: "Keep business-critical IT systems, ERPs, and cloud workloads online without unexpected cyber disruption.",
      icon: Activity,
    },
    {
      title: "Maintain customer trust and brand reputation",
      desc: "Demonstrate strong security posture to protect brand equity and customer confidence across Indian and global markets.",
      icon: Award,
    },
    {
      title: "Support regulatory and contractual security obligations",
      desc: "Fulfill statutory mandates, partner SLAs, and industry cybersecurity benchmarks effortlessly.",
      icon: FileCheck,
    },
  ];

  const commonCyberattacks = [
    {
      title: "Phishing",
      desc: "Fraudulent emails, messages or websites created to steal credentials and financial information.",
      icon: Mail,
    },
    {
      title: "Malware",
      desc: "Malicious software designed to steal information, damage devices or gain unauthorized access.",
      icon: Bug,
    },
    {
      title: "Ransomware",
      desc: "An attack that encrypts business data or systems and demands payment.",
      icon: FileLock,
    },
    {
      title: "Credential Attacks",
      desc: "Attempts to steal, guess or reuse passwords and account credentials.",
      icon: UserX,
    },
    {
      title: "Denial-of-Service Attacks",
      desc: "Attacks that overload systems and make websites or services unavailable.",
      icon: ServerOff,
    },
    {
      title: "Man-in-the-Middle Attacks",
      desc: "Interception or manipulation of communication between users and systems.",
      icon: GitFork,
    },
    {
      title: "Insider Threats",
      desc: "Security incidents caused intentionally or accidentally by trusted users.",
      icon: UserMinus,
    },
    {
      title: "Supply-Chain Attacks",
      desc: "Attacks involving compromised vendors, software dependencies or service providers.",
      icon: Truck,
    },
  ];

  const owaspTop10 = [
    {
      id: "A01:2025",
      title: "Broken Access Control",
      desc: "Failures in access policy enforcement allowing users to act outside intended permissions.",
    },
    {
      id: "A02:2025",
      title: "Security Misconfiguration",
      desc: "Insecure default settings, unpatched flaws, open storage, or verbose error details.",
    },
    {
      id: "A03:2025",
      title: "Software Supply Chain Failures",
      desc: "Compromised third-party packages, unverified dependencies, or insecure CI/CD builds.",
    },
    {
      id: "A04:2025",
      title: "Cryptographic Failures",
      desc: "Weak encryption algorithms, cleartext data transmission, or poor key management.",
    },
    {
      id: "A05:2025",
      title: "Injection",
      desc: "Untrusted user input interpreted as commands (SQLi, NoSQLi, Command Injection).",
    },
    {
      id: "A06:2025",
      title: "Insecure Design",
      desc: "Architectural flaws and missing security controls during system design phases.",
    },
    {
      id: "A07:2025",
      title: "Authentication Failures",
      desc: "Weak session handling, credential stuffing susceptibility, or missing MFA.",
    },
    {
      id: "A08:2025",
      title: "Software or Data Integrity Failures",
      desc: "Untrusted updates, insecure deserialization, or unverified code changes.",
    },
    {
      id: "A09:2025",
      title: "Security Logging and Alerting Failures",
      desc: "Insufficient logging, monitoring, or escalation of active security events.",
    },
    {
      id: "A10:2025",
      title: "Mishandling of Exceptional Conditions",
      desc: "Improper exception management leading to system crashes or bypasses.",
    },
  ];

  const indiaSecurityAspects = [
    {
      title: "Digital Personal Data Protection Act, 2023",
      desc: "Framework governing processing of personal data, user consent rights, and data fiduciary obligations in India.",
      icon: Scale,
    },
    {
      title: "CERT-In cybersecurity directions",
      desc: "Mandatory 6-hour incident reporting guidelines and system clock synchronization requirements for Indian entities.",
      icon: ShieldAlert,
    },
    {
      title: "Information Technology Act, 2000",
      desc: "Primary Indian statute governing cybercrime, electronic commerce, digital signatures, and data liability.",
      icon: FileText,
    },
    {
      title: "Sector-specific cybersecurity requirements",
      desc: "RBI, SEBI, IRDAI, and TRAI directives for financial institutions, insurance, and telecom infrastructure.",
      icon: Building2,
    },
    {
      title: "Incident reporting and response readiness",
      desc: "Established procedures to contain breach scope, document evidence, and report to authorities.",
      icon: Clock,
    },
    {
      title: "Personal-data protection and responsible processing",
      desc: "Minimizing data collection, implementing encryption, and honoring individual data rights.",
      icon: Lock,
    },
  ];

  const individualPrecautions = [
    "Use strong and unique passwords",
    "Enable multi-factor authentication",
    "Avoid unknown links and attachments",
    "Keep devices and applications updated",
    "Use secure Wi-Fi and trusted networks",
    "Review bank and account activity",
    "Back up important information",
    "Never share OTPs, passwords or PINs",
  ];

  const businessPrecautions = [
    "Apply least-privilege access",
    "Use multi-factor authentication",
    "Patch systems and software regularly",
    "Encrypt sensitive information",
    "Secure networks, endpoints, cloud services and APIs",
    "Train employees against phishing and social engineering",
    "Maintain centralized logs and security alerts",
    "Perform vulnerability assessments and penetration testing",
    "Maintain tested backups",
    "Create and test an incident-response plan",
    "Review vendor and supply-chain security",
  ];

  const incidentSteps = [
    {
      num: "01",
      title: "Identify",
      desc: "Confirm the incident and determine which accounts, systems and information are affected.",
    },
    {
      num: "02",
      title: "Contain",
      desc: "Isolate compromised accounts, devices and networks.",
    },
    {
      num: "03",
      title: "Preserve",
      desc: "Preserve relevant logs, messages, devices and other evidence.",
    },
    {
      num: "04",
      title: "Investigate",
      desc: "Determine the attack method, impact and root cause.",
    },
    {
      num: "05",
      title: "Recover",
      desc: "Remove the threat and restore clean systems and business operations.",
    },
    {
      num: "06",
      title: "Improve",
      desc: "Document lessons learned and strengthen security controls.",
    },
  ];

  const lifecycleSteps = [
    { num: "01", label: "Identify risks", desc: "Catalog assets, map vulnerabilities & evaluate threat landscape." },
    { num: "02", label: "Protect critical assets", desc: "Enforce zero trust, encryption, MFA & access boundary controls." },
    { num: "03", label: "Detect suspicious activity", desc: "Monitor continuous telemetry via AI-driven SIEM & logs." },
    { num: "04", label: "Respond to incidents", desc: "Execute automated playbooks & isolate threats within seconds." },
    { num: "05", label: "Recover securely", desc: "Restore clean backups & reinforce defenses with lessons learned." },
  ];

  return (
    <div className="bg-[#05060A] text-text-primary transition-colors duration-500 overflow-x-hidden relative">
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Glow 1: Vibrant Orange Glow */}
        <div className="absolute top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FF6B00_0%,rgba(255,107,0,0.15)_40%,transparent_70%)] opacity-25 blur-[120px]" />
        {/* Glow 2: Cyan / Blue Tech Glow */}
        <div className="absolute top-[40%] -right-[15%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,#3B82F6_0%,rgba(139,92,246,0.15)_45%,transparent_70%)] opacity-25 blur-[140px]" />
        {/* Glow 3: Deep Magenta Ambient Light */}
        <div className="absolute top-[75%] left-[20%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,#D946EF_0%,rgba(217,70,239,0.12)_45%,transparent_70%)] opacity-20 blur-[130px]" />
        {/* Subtle Cyber Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <section className="relative min-h-[50vh] lg:min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden z-10">
        {/* Responsive Video System (Desktop Background / Mobile Card Box) */}
        <ResponsiveVideo src="/videos/cybersecurity services.mp4" mode="dual" />

        {/* Dynamic Light Gradient Overlay to Ensure High Video Visibility + Sharp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-[#05060A] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,107,0,0.18)_0%,transparent_60%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/15 backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              <Shield size={16} className="text-accent" />
              <span className="text-xs font-black tracking-wider uppercase text-accent">
                Cybersecurity & Compliance
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Security, Privacy & Compliance <br />
              <span className="bg-gradient-to-r from-accent via-accent-bright to-amber-400 bg-clip-text text-transparent">
                Built Into Netcradus
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Netcradus maintains a security and privacy framework designed to protect customer data, systems and information throughout their lifecycle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm tracking-wide shadow-[0_10px_25px_rgba(255,107,0,0.35)] hover:bg-accent-bright hover:scale-[1.03] transition-all duration-300 no-underline"
              >
                Get Started
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-black/40 backdrop-blur-md text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/40 hover:scale-[1.03] transition-all duration-300 no-underline shadow-lg"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          {/* Professional Trust Indicator Bar Below Hero */}
          <div className="mt-14 pt-8 border-t border-white/15 relative z-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-accent mb-4 drop-shadow">
              Verified Compliance Standards & Frameworks
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {trustIndicators.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-center p-3.5 rounded-xl border border-white/15 bg-black/50 backdrop-blur-md hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 shadow-md"
                >
                  <span className="text-sm font-black text-white">{item.name}</span>
                  <span className="text-[10px] text-gray-300 mt-0.5 font-medium">{item.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 lg:py-28 relative z-10 overflow-hidden shadow-[inset_0_10px_25px_rgba(0,0,0,0.03),inset_0_-10px_25px_rgba(0,0,0,0.03)]"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f6f7f9 50%, #fff7f2 100%)",
        }}
      >
        {/* Soft Orange Radial Glow in Upper-Left */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(255,107,0,0.07)_0%,transparent_60%)] pointer-events-none z-0" />
        
        {/* Soft Gray Radial Glow in Lower-Right */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.04)_0%,transparent_60%)] pointer-events-none z-0" />
        
        {/* Subtle Cybersecurity Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35 pointer-events-none z-0" />
        
        {/* Large Blurred Background Orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#FF6B00]/5 blur-3xl pointer-events-none z-0" />
        <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-slate-300/30 blur-3xl pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          
          {/* Header Area */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="w-8 h-[3px] bg-[#FF6B00] shadow-[0_0_10px_#FF6B00] mx-auto mb-3 rounded-full" />
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              CYBERSECURITY BASICS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.03)]">
              What Is Cybersecurity?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal pt-1">
              Cybersecurity is the practice of protecting computers, servers, networks, applications, cloud platforms and sensitive information from unauthorized access, digital attacks, damage and disruption.
            </p>
          </div>

          {/* 6 Premium Layered White Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {cybersecurityBasics.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-3xl bg-white/85 backdrop-blur-md border border-gray-900/10 p-7 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(255,107,0,0.14),0_4px_12px_rgba(0,0,0,0.05)] hover:border-[#FF6B00]/40 hover:-translate-y-[6px] hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top-Left Thin Orange Accent Line */}
                  <div className="absolute top-0 left-6 w-12 h-[3px] bg-[#FF6B00] rounded-full transition-all duration-300 group-hover:w-20 shadow-[0_0_8px_rgba(255,107,0,0.4)]" />

                  {/* Faint Cybersecurity Circuit SVG in Corner */}
                  <svg
                    className="absolute right-0 bottom-0 w-36 h-36 opacity-5 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none z-0"
                    viewBox="0 0 200 200"
                    fill="none"
                  >
                    <path d="M40 160 H120 V100 H180" stroke="#FF6B00" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M10 120 H80 V60 H150" stroke="#FF6B00" strokeWidth="2" />
                    <circle cx="120" cy="100" r="4" fill="#FF6B00" />
                    <circle cx="80" cy="60" r="3" fill="#FF6B00" />
                    <circle cx="150" cy="60" r="4" fill="#FF6B00" />
                  </svg>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/25 flex items-center justify-center text-gray-900 mb-6 group-hover:bg-[#FF6B00] group-hover:text-white group-hover:border-[#FF6B00] group-hover:scale-105 shadow-[0_0_15px_rgba(255,107,0,0.15)] transition-all duration-300">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-[#FF6B00] transition-colors">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#05060A] text-white border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              WHY IT MATTERS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Why Cybersecurity Is Essential for Indian Businesses
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Indian organizations increasingly depend on digital payments, cloud services, mobile applications and connected business systems. Cybersecurity helps protect these services from data theft, financial fraud and operational disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {businessBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-[#0e121e] border border-white/10 shadow-lg hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5 group-hover:bg-[#FF6B00]/20 group-hover:text-[#FF6B00] transition-colors">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white text-gray-900 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              CYBER THREATS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Common Cyberattacks
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Understanding common cyber threat vectors allows businesses to implement targeted safeguards and train employees effectively.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commonCyberattacks.map((attack, idx) => {
              const Icon = attack.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-900 mb-4 group-hover:bg-[#FF6B00]/10 group-hover:text-[#FF6B00] transition-colors">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2">{attack.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{attack.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#05060A] text-white border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              WEB APPLICATION SECURITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-['Space_Grotesk',sans-serif]">
              OWASP Top 10:2025
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              The OWASP Top 10 is an internationally recognized awareness standard describing critical security risks affecting web applications.
            </p>
          </div>

          {/* 10 Numbered Monochrome Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-12">
            {owaspTop10.map((cat) => (
              <div
                key={cat.id}
                className="p-6 rounded-2xl bg-[#0e121e] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-black text-[#FF6B00] uppercase tracking-widest block mb-2">
                    {cat.id}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-amber-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Official Source Link */}
          <div className="text-center">
            <a
              href="https://owasp.org/Top10/2025/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs font-semibold text-gray-300 hover:text-white hover:border-[#FF6B00]/50 transition-all no-underline"
            >
              <span>Source: OWASP Top 10:2025</span>
              <ExternalLink size={14} className="text-[#FF6B00]" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white text-gray-900 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              INDIA CYBERSECURITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Cybersecurity in India
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              India’s rapidly expanding digital economy requires organizations to protect personal information, digital services and critical business systems through practical security controls and responsible data handling.
            </p>
          </div>

          {/* 6 Informational Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {indiaSecurityAspects.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-900 mb-5 group-hover:bg-[#FF6B00]/10 group-hover:text-[#FF6B00] transition-colors">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Notice Box */}
          <div className="max-w-3xl mx-auto p-5 rounded-xl bg-gray-50 border border-gray-200 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
              <AlertCircle size={15} className="text-[#FF6B00]" />
              <span>Regulatory Awareness Notice</span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">
              Regulatory obligations may vary by industry, organization and use case. Businesses should obtain appropriate legal and compliance advice.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#05060A] text-white border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              SECURITY PRECAUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Essential Cybersecurity Precautions
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Practical checklist controls designed to protect personal accounts and corporate business networks.
            </p>
          </div>

          {/* Two Large Checklist Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e121e] border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00]">
                    <UserCheck size={20} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    For Individuals
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300">
                  {individualPrecautions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#FF6B00] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e121e] border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Building2 size={20} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    For Businesses
                  </h3>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-gray-300">
                  {businessPrecautions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white text-gray-900 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              INCIDENT RESPONSE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              What to Do After a Cyberattack
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              A structured incident response workflow minimizes blast radius, prevents evidence destruction, and speeds operational recovery.
            </p>
          </div>

          {/* 6-Step Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {incidentSteps.map((step) => (
              <div
                key={step.num}
                className="p-7 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-[#FF6B00]">
                      {step.num}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Highlighted Notice */}
          <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-amber-50 border border-amber-200 text-center">
            <p className="text-xs sm:text-sm font-semibold text-amber-900 leading-relaxed">
              ⚠️ Do not immediately delete logs, messages or affected files. Preserve relevant evidence and follow applicable incident-reporting requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#05060A] text-white border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              CYBER RESILIENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              A Practical Security Lifecycle
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
              Continuous end-to-end security governance built on NIST CSF framework principles.
            </p>
          </div>

          {/* Horizontal Process Design on Desktop, Vertical Timeline on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 relative">
            {lifecycleSteps.map((item, idx) => (
              <div
                key={item.num}
                className="p-6 rounded-2xl bg-[#0e121e] border border-white/10 hover:border-[#FF6B00]/40 transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/15 border border-[#FF6B00]/30 text-[#FF6B00] font-black text-xs font-mono flex items-center justify-center mb-4">
                    {item.num}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{item.label}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>

                {/* Connector arrow on desktop */}
                {idx < lifecycleSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-white/20 z-10 pointer-events-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-900 relative z-10 text-center">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Build a Safer Digital Business
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
              Strengthen your organization with practical cybersecurity controls, continuous monitoring and a response strategy designed for modern threats.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF6B00] text-white font-bold text-sm shadow-lg shadow-[#FF6B00]/25 hover:bg-[#ff7a1a] hover:scale-[1.02] transition-all duration-300 no-underline"
              >
                Request a Security Assessment
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 font-bold text-sm hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 no-underline"
              >
                Talk to a Security Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CyberSecurityPage;