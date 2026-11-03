import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  ShieldCheck,
  AlertTriangle,
  Building2,
  Stethoscope,
  Activity,
  ArrowRight,
  CheckCircle2,
  Search,
  Lock,
  Share2,
  Key,
  Calendar,
  Globe,
  Database,
  Cpu,
  Eye,
  Server,
  Layers,
  Terminal,
  FileText,
  Clock,
  Radio,
  FileSpreadsheet,
  Zap,
  Crosshair
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";

export default function ThreatReportsPage() {
  usePageMeta(
    "Threat Incident Report — Change Healthcare Ransomware Attack | Netcradus Threat Intelligence",
    "Real-world incident analysis of the Change Healthcare ransomware attack. Includes timeline, initial access vector, attack chain, detection opportunities, MITRE ATT&CK alignment, and 6 defensive recommendations."
  );

  return (
    <div className="bg-[#05060A] text-white transition-colors duration-500 overflow-x-hidden min-h-screen">
      
      <section className="relative pt-28 pb-20 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,45,149,0.12)_0%,rgba(217,70,239,0.05)_50%,transparent_75%)] pointer-events-none" />
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span className="text-xs font-black tracking-widest uppercase text-rose-400">
                NETCRADUS | THREAT INTELLIGENCE
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight">
              Threat Incident Report<br />
              <span className="bg-gradient-to-r from-rose-500 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Change Healthcare Ransomware Attack
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 font-semibold tracking-wide">
              Real-World Incident Analysis • Public-Source Defensive Assessment
            </p>

            {/* Critical Severity Callout */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl border border-rose-500/40 bg-rose-950/40 shadow-[0_0_30px_rgba(244,63,94,0.25)]">
              <ShieldAlert className="text-rose-500 animate-pulse" size={22} />
              <span className="text-sm font-black tracking-widest uppercase text-rose-400">
                SEVERITY: CRITICAL
              </span>
            </div>

            {/* Incident Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Incident Type</span>
                <strong className="text-white text-base font-extrabold flex items-center gap-2">
                  <ShieldAlert size={16} className="text-rose-400" />
                  Ransomware / Data Exfiltration
                </strong>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Target Organization</span>
                <strong className="text-white text-base font-extrabold flex items-center gap-2">
                  <Stethoscope size={16} className="text-cyan-400" />
                  Change Healthcare
                </strong>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Sector & Region</span>
                <strong className="text-white text-base font-extrabold flex items-center gap-2">
                  <Building2 size={16} className="text-purple-400" />
                  Healthcare & Critical Services (US)
                </strong>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Initial Incident</span>
                <strong className="text-amber-400 text-base font-extrabold flex items-center gap-2">
                  <Calendar size={16} />
                  February 2024
                </strong>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Threat Actor</span>
                <strong className="text-rose-400 text-base font-extrabold flex items-center gap-2">
                  <Crosshair size={16} />
                  ALPHV / BlackCat
                </strong>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-1">Primary Vector</span>
                <strong className="text-rose-300 text-base font-extrabold flex items-center gap-2">
                  <Key size={16} />
                  Compromised Credentials (No MFA)
                </strong>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-[#0B0F19] to-[#05060A] border-b border-white/10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00]">
              Executive Overview
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Executive Summary & Incident Timeline
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Disclosed timelines and confirmed milestones of the Change Healthcare cyber incident.
            </p>
          </div>

          {/* Timeline Cards Flow */}
          <div className="space-y-6 relative border-l-2 border-rose-500/30 ml-4 sm:ml-6 pl-6 sm:pl-8">
            
            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-[#05060A] shadow-[0_0_10px_rgba(244,63,94,0.8)]" />
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-rose-500/40 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-400">
                    February 21, 2024
                  </span>
                  <h3 className="text-lg font-bold text-white">Incident Detected</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Change Healthcare identified a cybersecurity threat affecting its environment and disconnected systems to contain the attack.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#05060A]" />
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-purple-500/40 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300">
                    Attribution
                  </span>
                  <h3 className="text-lg font-bold text-white">Ransomware Attack Confirmed</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  The incident was subsequently associated with the ALPHV/BlackCat ransomware operation.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-amber-500 border-4 border-[#05060A]" />
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-amber-500/40 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300">
                    Widespread Impact
                  </span>
                  <h3 className="text-lg font-bold text-white">Healthcare Services Disrupted</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Pharmacies, healthcare providers, and insurers experienced problems with claims, prescriptions, payments, and related transactions.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#05060A]" />
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-cyan-500/40 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
                    Response
                  </span>
                  <h3 className="text-lg font-bold text-white">Investigation & Recovery</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Change Healthcare and UnitedHealth Group worked with cybersecurity specialists and authorities to investigate the intrusion and restore services.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-rose-500 border-4 border-[#05060A]" />
              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-rose-500/40 transition-all duration-300 space-y-2">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-black px-3 py-1 rounded-md bg-rose-500/10 border border-rose-500/30 text-rose-300">
                    Exfiltration Assessment
                  </span>
                  <h3 className="text-lg font-bold text-white">Data Impact Investigation</h3>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Investigations determined that attackers had accessed and removed sensitive information from the compromised environment.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-24 border-b border-white/10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: How Did Attackers Get In? */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-400">
                <Key size={16} />
                Initial Entry Vector
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white">
                How Did Attackers Get In?
              </h2>

              <p className="text-base text-gray-300 leading-relaxed">
                Public disclosures stated that attackers used compromised credentials to access a Change Healthcare Citrix portal that did not have multi-factor authentication enabled.
              </p>

              <div className="p-6 rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-950/30 via-black to-transparent space-y-3">
                <strong className="text-rose-400 text-sm uppercase tracking-wider block font-black">
                  Core Identity-Security Principle
                </strong>
                <p className="text-sm text-gray-200 leading-relaxed italic">
                  "A valid username and password should not automatically be treated as proof that the person accessing a critical system is legitimate."
                </p>
              </div>
            </div>

            {/* Right: Why This Incident Matters (Ecosystem Impact) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#FF6B00]">
                <Activity size={16} />
                Systemic Exposure
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Why This Incident Matters
              </h2>

              <p className="text-base text-gray-300 leading-relaxed">
                One compromised organization can affect an entire ecosystem. Modern organizations depend on interconnected technology providers, cloud platforms, payment systems, APIs, vendors, and digital infrastructure. A successful attack against one critical provider can create cascading disruption across many dependent organizations.
              </p>
            </div>

          </div>

          {/* Simplified Attack Chain Diagram */}
          <div className="p-8 rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.04] to-black/80 space-y-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Layers className="text-[#FF6B00]" size={22} />
                Simplified Attack Chain
              </h3>
              <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                8-Stage Intrusion Model
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { stage: "01", title: "Compromised Credentials", desc: "Valid user credentials obtained through breach logs or phishing." },
                { stage: "02", title: "Remote Access Portal", desc: "Authenticated into external Citrix portal lacking MFA controls." },
                { stage: "03", title: "Unauthorized Initial Access", desc: "Established persistent foothold inside administrative gateway." },
                { stage: "04", title: "Internal Environment Compromise", desc: "Moved laterally across internal network segments and servers." },
                { stage: "05", title: "Data Discovery & Collection", desc: "Located sensitive healthcare, financial, and PII databases." },
                { stage: "06", title: "Data Exfiltration", desc: "Extracted bulk data to external attacker-controlled infrastructure." },
                { stage: "07", title: "Ransomware Disruption", desc: "Deployed ALPHV/BlackCat payload causing operational outages." },
                { stage: "08", title: "Large-Scale Impact", desc: "Cascading claims, payment, and prescription disruptions nationwide." }
              ].map((step) => (
                <div
                  key={step.stage}
                  className="p-5 rounded-2xl border border-white/10 bg-black/50 hover:border-rose-500/30 transition-all duration-300 space-y-2"
                >
                  <span className="text-xs font-black text-rose-400 tracking-widest uppercase">
                    Stage {step.stage}
                  </span>
                  <h4 className="text-sm font-bold text-white">{step.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="py-24 border-b border-white/10 bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left: Key Security Weakness Highlighted */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-rose-400">
                <AlertTriangle size={16} />
                Root Identity Gap
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Key Security Weakness: Missing MFA
              </h2>

              <div className="space-y-4">
                {[
                  { title: "Multi-Factor Authentication", desc: "Require strong, preferably phishing-resistant MFA across all access points." },
                  { title: "Conditional Access", desc: "Restrict authentication based on device health, location, risk, and user behavior." },
                  { title: "Credential Monitoring", desc: "Detect compromised credentials and suspicious authentication attempts." },
                  { title: "Least Privilege", desc: "Limit what each authenticated account can access inside internal networks." },
                  { title: "Privileged Access Management", desc: "Apply stronger controls to administrative and high-impact accounts." },
                  { title: "Continuous Identity Monitoring", desc: "Detect abnormal login patterns and privilege escalation in real time." }
                ].map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/[0.02] flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Detection Opportunities */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400">
                <Eye size={16} />
                Telemetry & SIEM Indicators
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white">
                Detection Opportunities
              </h2>

              <div className="p-6 rounded-3xl border border-white/15 bg-black/60 space-y-3">
                {[
                  "Logins from unusual locations or devices",
                  "Abnormal remote-access sessions",
                  "Impossible-travel authentication events",
                  "Repeated authentication failures",
                  "Unexpected privilege escalation",
                  "Unusual internal network movement",
                  "Large or abnormal data transfers",
                  "Suspicious archive creation",
                  "Connections to unusual external infrastructure",
                  "Security controls being disabled",
                  "Unexpected encryption or mass file modification"
                ].map((indicator, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-gray-300 py-1.5 border-b border-white/5 last:border-0">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                    <span>{indicator}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-8">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00]">
              Technique Mapping
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              MITRE ATT&CK Perspective
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Depending on the evidence available during an investigation, ransomware incidents of this nature may involve techniques associated with Valid Accounts, External Remote Services, Account Discovery, Remote Services, data collection, archiving, exfiltration, and Data Encrypted for Impact.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              "Valid Accounts (T1078)",
              "External Remote Services (T1133)",
              "Account Discovery (T1087)",
              "Remote Services (T1021)",
              "Data Collection (T1005 / T1560)",
              "Data Exfiltration (T1041 / T1567)",
              "Data Encrypted for Impact (T1486)"
            ].map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-xs sm:text-sm font-bold text-[#FF6B00]"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-xs text-gray-400 italic">
            Exact technique attribution should only be made where supported by verified forensic evidence.
          </p>

        </div>
      </section>

      <section className="py-24 border-b border-white/10 bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#FF6B00]">
              Actionable Guidance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Six Netcradus Defensive Recommendations
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Essential defensive controls every enterprise must implement to mitigate identity-based ransomware intrusions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "01",
                title: "Enforce MFA Everywhere",
                desc: "Prioritize VPN, Citrix, RDP, cloud consoles, email, administrative accounts, and remote-access systems.",
                icon: Key
              },
              {
                num: "02",
                title: "Assume Credentials Can Be Compromised",
                desc: "Design authentication architecture around the assumption that passwords may eventually become exposed. A password alone should not provide access to critical infrastructure.",
                icon: Lock
              },
              {
                num: "03",
                title: "Monitor Identity Behavior",
                desc: "Detect new-device logins, impossible travel, unusual geography, privilege escalation, and abnormal session activity.",
                icon: Eye
              },
              {
                num: "04",
                title: "Segment Critical Infrastructure",
                desc: "Reduce unnecessary lateral movement paths between critical healthcare, financial, operational, and administrative systems.",
                icon: Layers
              },
              {
                num: "05",
                title: "Detect Data Exfiltration",
                desc: "Establish baselines for normal data movement and investigate unexpected large transfers, archive creation, cloud uploads, outbound connections, and sensitive-data access.",
                icon: Server
              },
              {
                num: "06",
                title: "Prepare for Ransomware Before It Happens",
                desc: "Maintain offline or immutable backups, incident-response procedures, business-continuity plans, recovery testing, communication plans, and third-party incident procedures.",
                icon: ShieldCheck
              }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.num}
                  className="p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-black/60 hover:border-[#FF6B00]/40 transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#FF6B00] px-3 py-1 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                      Recommendation {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-20 border-b border-white/10 relative overflow-hidden bg-gradient-to-r from-rose-950/40 via-black to-[#05060A]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 text-center space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-rose-400">
            <ShieldCheck size={18} />
            Key Defensive Takeaway
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight max-w-4xl mx-auto">
            "Identity security is infrastructure security. The Change Healthcare attack illustrates how a compromised credential combined with inadequate authentication protection can contribute to a major security incident."
          </h2>

          <div className="pt-2">
            <span className="inline-block px-8 py-3 rounded-full bg-rose-500 text-white font-black text-sm sm:text-base uppercase tracking-wider shadow-lg shadow-rose-500/30">
              Prevent a stolen password from becoming a major breach.
            </span>
          </div>

        </div>
      </section>

      <section className="py-20 bg-black/80 text-xs sm:text-sm text-gray-300">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 space-y-10">
          
          <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] space-y-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <ShieldAlert className="text-[#FF6B00]" size={20} />
              Netcradus Threat Intelligence
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Netcradus analyzes real-world cyber incidents to help security teams understand attacker behavior, identify defensive gaps, and improve cyber resilience.
            </p>
            <p className="text-sm font-extrabold text-[#FF6B00] uppercase tracking-wider">
              Understand the Attack. Detect the Behavior. Reduce the Risk.
            </p>
          </div>

          <div className="space-y-3 p-6 rounded-2xl border border-white/10 bg-black/40">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Editorial Note</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              This report is a Netcradus defensive analysis based on publicly disclosed information about the Change Healthcare incident. It should not imply that Netcradus participated in the original investigation. Technical details and attribution should be updated when authoritative new evidence becomes available.
            </p>
            <p className="text-xs text-gray-500 pt-1">
              Netcradus Threat Incident Report • Public-source defensive analysis
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
