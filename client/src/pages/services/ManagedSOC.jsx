import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import {
  Eye,
  Search,
  Zap,
  Shield,
  Database,
  Radar,
  AlertTriangle,
  GitBranch,
  DownloadCloud,
  BrainCircuit,
  Flame,
  FileCheck,
  ShieldCheck,
  FileText,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Cpu,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const ManagedSOCPage = () => {
  usePageMeta(
    SEO_META.services?.title || "Managed SOC Services | Netcradus Security Operations",
    SEO_META.services?.description || "Continuous Security Monitoring, Threat Detection, and Incident Response built for enterprise environments."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const secOpsCards = [
    {
      title: "Security Monitoring",
      subtitle: "Continuous Visibility",
      icon: Shield,
      bullets: [
        "Continuous security visibility across workloads",
        "Security event monitoring and alert triage",
        "Log analysis and telemetry aggregation",
        "Anomalous pattern and behavior identification",
      ],
    },
    {
      title: "Threat Detection",
      subtitle: "Detection Analytics",
      icon: Radar,
      bullets: [
        "Suspicious activity and unauthorized access detection",
        "Threat identification across endpoint and network layers",
        "Security event correlation and threat signal mapping",
        "Detection analytics tuned to environment baselines",
      ],
    },
    {
      title: "Investigation",
      subtitle: "Alert Context",
      icon: Search,
      bullets: [
        "Alert investigation to reduce false-positive fatigue",
        "In-depth event analysis and host artifact tracing",
        "Threat context and adversary tradecraft assessment",
        "Security incident scoping and impact analysis",
      ],
    },
    {
      title: "Incident Response",
      subtitle: "Triage & Containment",
      icon: AlertTriangle,
      bullets: [
        "Structured incident triage and priority escalation",
        "Containment support to limit threat propagation",
        "Response coordination with internal IT/security teams",
        "Recovery support and post-incident hardening",
      ],
    },
  ];

  const processFlow = [
    {
      step: "01",
      name: "Collect",
      desc: "Security events and telemetry are gathered from relevant endpoint, network, identity, and cloud environments.",
      icon: DownloadCloud,
    },
    {
      step: "02",
      name: "Detect",
      desc: "Potentially suspicious activity is identified through security monitoring and detection mechanisms.",
      icon: Search,
    },
    {
      step: "03",
      name: "Analyse",
      desc: "Events are evaluated and correlated using security analytics to understand potential threats.",
      icon: BrainCircuit,
    },
    {
      step: "04",
      name: "Investigate",
      desc: "Security alerts are investigated to determine context, scope, and operational impact.",
      icon: Eye,
    },
    {
      step: "05",
      name: "Respond",
      desc: "Appropriate response, triage, and containment actions are initiated.",
      icon: Shield,
    },
    {
      step: "06",
      name: "Recover",
      desc: "Support recovery efforts and help organisations improve their overall security posture.",
      icon: Flame,
    },
  ];

  const monitoringCapabilities = [
    { title: "Security Event Monitoring", desc: "Aggregated event surveillance across enterprise environments", icon: Eye },
    { title: "Threat Detection", desc: "Identification of anomalous behaviors and attack patterns", icon: Radar },
    { title: "Log Analysis", desc: "Ingestion and structured parsing of security event logs", icon: Database },
    { title: "Alert Investigation", desc: "Triage and verification to isolate genuine security incidents", icon: Search },
    { title: "Incident Triage", desc: "Prioritised escalation and initial threat scoping", icon: AlertTriangle },
    { title: "Threat Intelligence & Context", desc: "Enrichment using verified threat indicators and tradecraft", icon: GitBranch },
    { title: "Security Analytics", desc: "Data correlation and behavioral analytics for threat detection", icon: Cpu },
    { title: "Incident Response", desc: "Coordinated containment support and incident resolution", icon: Zap },
  ];

  const irPhases = [
    { stage: "Detection", desc: "Identification of security events and anomalous signals." },
    { stage: "Triage", desc: "Initial assessment, categorization, and severity determination." },
    { stage: "Investigation", desc: "Detailed analysis to determine threat scope, entry point, and impact." },
    { stage: "Containment", desc: "Actions taken to isolate affected systems and stop threat spread." },
    { stage: "Eradication Support", desc: "Assisting teams in removing malicious artifacts and footholds." },
    { stage: "Recovery", desc: "Supporting system restoration and safe operational return." },
    { stage: "Post-Incident Analysis", desc: "Reviewing lessons learned to strengthen future security controls." },
  ];

  const ecosystemFlow = [
    { name: "Identity & Access", path: "/services/iam", label: "IAM" },
    { name: "Endpoints", path: "/services/cybersecurity", label: "Core Security" },
    { name: "Network / Cloud", path: "/services/cloud-security", label: "Cloud Security" },
    { name: "Applications / Audit", path: "/services/vapt", label: "VAPT" },
    { name: "SIEM / Monitoring", path: "/platform/siem", label: "SIEM Platform" },
    { name: "Threat Detection", path: "/services/managed-soc", label: "Managed SOC" },
    { name: "Incident Response", path: "/contact", label: "Response Team" },
  ];

  return (
    <div className="bg-[#05060A] text-white transition-colors duration-500 overflow-x-hidden relative">
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,#FF6B00_0%,rgba(255,107,0,0.12)_40%,transparent_70%)] opacity-30 blur-[120px]" />
        <div className="absolute top-[50%] -right-[15%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle_at_center,#3B82F6_0%,rgba(59,130,246,0.12)_45%,transparent_70%)] opacity-30 blur-[140px]" />
        <div className="absolute top-[80%] left-[10%] w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle_at_center,#8B5CF6_0%,rgba(139,92,246,0.10)_45%,transparent_70%)] opacity-25 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />
      </div>

      <section className="relative min-h-[50vh] lg:min-h-[85vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden z-10">
        {/* Responsive Video System (Desktop Background / Mobile Card Box) */}
        <ResponsiveVideo src="/videos/soc_video_gwr_video_mvp.mp4" mode="dual" />
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-12 relative z-10 text-left">
          <div className="max-w-4xl space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/40 bg-accent/15 backdrop-blur-md shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              <Radar size={16} className="text-accent" />
              <span className="text-xs font-black tracking-wider uppercase text-accent">
                Managed Security Operations
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white tracking-tight text-left">
              Continuous Security Monitoring.<br />
              <span className="bg-gradient-to-r from-accent via-accent-bright to-amber-400 bg-clip-text text-transparent">
                Faster Threat Detection. Confident Response.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl font-medium text-left">
              Netcradus Managed SOC provides security monitoring, threat detection and incident response capabilities designed to help organisations identify and respond to security threats.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Core Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Security Operations Built Around Your Environment
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Modern organisations generate security events across endpoints, networks, applications, identities and cloud environments. A managed SOC brings these signals together to improve visibility and response.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secOpsCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[22px] border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md p-8 shadow-md hover:border-accent/40 hover:bg-orange-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/15 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-lg">
                        <Icon size={22} />
                      </div>
                      <span className="text-[11px] font-bold text-accent uppercase tracking-wider px-3 py-1 rounded-md bg-accent/10 border border-accent/20">
                        {card.subtitle}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>

                    <ul className="space-y-3 text-xs sm:text-sm text-gray-300">
                      {card.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
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

      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Log Correlation & Intelligence
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Security Information & Event Management (SIEM)
              </h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                A SIEM platform forms the telemetry foundation for security operations, enabling security teams to centralise log collection, correlate events across diverse systems, and identify suspicious behavior early.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  "Centralise security logs and events",
                  "Correlate security signals across vectors",
                  "Detect suspicious activity and anomalies",
                  "Improve security visibility and audit trails",
                  "Support incident investigations",
                  "Maintain security audit visibility",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/platform/siem"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
                >
                  Explore SIEM Platform
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Interactive Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[460px] p-8 rounded-[24px] border border-white/15 bg-[#0A0D16]/90 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <Database size={18} className="text-accent" />
                    <span className="text-sm font-bold text-white uppercase tracking-wider">SIEM Integration</span>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">Active Ingestion</span>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-300">Endpoint & Host Logs</span>
                    <span className="text-xs font-bold text-accent">Aggregated</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-300">Network & Firewall Telemetry</span>
                    <span className="text-xs font-bold text-accent">Correlated</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-300">Identity & Access Logs</span>
                    <span className="text-xs font-bold text-accent">Monitored</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span className="text-xs text-gray-300">Cloud Infrastructure Events</span>
                    <span className="text-xs font-bold text-accent">Indexed</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Operational Cycle
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Threat Detection & Response Flow
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              A structured operational cycle ensures continuous protection from initial log ingestion to system recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {processFlow.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl border border-white/12 bg-[#0A0D16]/90 backdrop-blur-md flex flex-col justify-between hover:border-accent/40 transition-all duration-300 text-left"
                >
                  <div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-accent/15 text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon size={18} />
                    </div>
                    <span className="text-xs font-black text-accent block mb-1">Step {item.step}</span>
                    <h4 className="text-base font-bold text-white mb-2 uppercase">{item.name}</h4>
                    <p className="text-[11px] text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                  {idx < processFlow.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-accent opacity-60">
                      <ChevronRight size={18} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Core Functional Area
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Security Monitoring Capabilities
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Tailored security operations functions designed to maintain environment visibility and assist in incident handling.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {monitoringCapabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md flex flex-col justify-between hover:border-accent/40 transition-all duration-300"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Incident Lifecycle
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Structured Incident Response
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              When potential security incidents are identified, structured triage and response procedures help minimise disruption and guide containment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {irPhases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md flex flex-col justify-between hover:border-accent/30 transition-all duration-300"
              >
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-accent block mb-2">
                    Phase 0{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">{phase.stage}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                Environment Telemetry
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                Improve Security Visibility Across Your Environment
              </h2>
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Centralized visibility allows security teams to understand threat vectors, evaluate event signals, and make informed response decisions.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Centralised security visibility",
                  "Security event analysis",
                  "Threat detection",
                  "Incident investigation",
                  "Security reporting",
                  "Audit visibility",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/12 bg-[#0A0D16]/80 backdrop-blur-md flex items-center gap-3 hover:border-accent/30 transition-all duration-300"
                  >
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10 backdrop-blur-sm bg-black/40">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto p-8 sm:p-10 rounded-[28px] border border-white/15 bg-[#0A0D16]/90 backdrop-blur-xl shadow-2xl text-center space-y-6">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Governance Support
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Security Monitoring That Supports Governance
            </h2>
            <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl mx-auto">
              Security monitoring and structured log retention help organisations maintain visibility and evidence relevant to their security and compliance processes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <FileCheck size={18} className="text-accent mb-2" />
                <h4 className="text-xs font-bold text-white mb-1">Security Investigations</h4>
                <p className="text-[11px] text-gray-400">Historical telemetry logs to support forensic event analysis.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <ShieldCheck size={18} className="text-accent mb-2" />
                <h4 className="text-xs font-bold text-white mb-1">Audit Visibility</h4>
                <p className="text-[11px] text-gray-400">Centralized log records useful for security review evidence.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <FileText size={18} className="text-accent mb-2" />
                <h4 className="text-xs font-bold text-white mb-1">Governance Evidence</h4>
                <p className="text-[11px] text-gray-400">Assisting organizations in documenting security monitoring processes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
              Unified Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Managed SOC in the Netcradus Ecosystem
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Managed SOC integrates with Netcradus security solutions across identity, endpoint, network, cloud, applications, and SIEM layers.
            </p>
          </div>

          {/* Visual Pipeline with Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {ecosystemFlow.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                className="group p-5 rounded-2xl border border-white/12 bg-[#0A0D16]/90 backdrop-blur-md flex flex-col justify-between hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 no-underline text-left"
              >
                <div>
                  <span className="text-[10px] font-black text-accent uppercase tracking-wider block mb-1">
                    {item.label}
                  </span>
                  <h4 className="text-xs font-bold text-white group-hover:text-accent transition-colors">
                    {item.name}
                  </h4>
                </div>
                <div className="pt-3 flex items-center justify-between text-[10px] text-gray-400 group-hover:text-white">
                  <span>View Details</span>
                  <ArrowRight size={12} className="text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/10 relative overflow-hidden bg-gradient-to-br from-[#0A0D16] via-[#05060A] to-orange-950/30 z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.2),transparent_65%)] pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/15 backdrop-blur-md">
            <Radar size={14} className="text-accent" />
            <span className="text-xs font-bold tracking-wider uppercase text-accent">
              Security Operations
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Strengthen Your Security Operations
          </h2>

          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto font-medium">
            Improve security visibility, detect threats earlier and build a structured approach to incident response.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/platform/siem"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/30 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Explore SIEM
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-black/40 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Talk to Our Security Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ManagedSOCPage;