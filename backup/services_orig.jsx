import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import SectionWrapper from "../components/ui/SectionWrapper";
import AnimatedReveal from "../components/ui/AnimatedReveal";
import GlassCard from "../components/ui/GlassCard";
import {
    Server, Shield, Cloud, Cpu, Code2, CheckCircle2, FileSearch, Lock,
    Target, ShieldCheck, Zap, AppWindow, Workflow, LayoutTemplate,
    Blocks, CloudCog, Boxes, BrainCircuit, Bot, MessageSquare,
    Search, Activity, Fingerprint, ShieldAlert, Globe, GraduationCap,
    Terminal, Database, Network, Radio
} from "lucide-react";

const SERVICES_TABS = [
    { id: "msp", title: "Managed IT Services (MSP)", icon: Server },
    { id: "mssp", title: "Cybersecurity (MSSP)", icon: Shield },
    { id: "cloud-ai", title: "Cloud & AI Solutions", icon: Cloud },
    { id: "software", title: "Software Development", icon: Code2 }
];

const CYBER_SERVICES = [
    {
        title: "Penetration Testing",
        desc: "Simulate real-world cyberattacks to identify vulnerabilities before attackers exploit them.",
        icon: Target,
        color: "primary",
        items: ["Web Application", "Network", "Mobile Application", "API Security", "Cloud Infrastructure", "Wireless Network", "Internal & External"]
    },
    {
        title: "Vulnerability Assessment",
        desc: "Identify security weaknesses in systems, networks, and applications.",
        icon: FileSearch,
        color: "secondary",
        items: ["Automated Scanning", "Manual Security Testing", "Risk Scoring", "Patch & Remediation", "Continuous Monitoring"]
    },
    {
        title: "SOC Services",
        desc: "24/7 monitoring and threat detection using advanced SIEM technologies.",
        icon: Activity,
        color: "accent",
        items: ["SIEM Monitoring", "Log Analysis", "Threat Detection", "Alert Management", "Incident Investigation", "Threat Intelligence"]
    },
    {
        title: "Incident Response & Forensics",
        desc: "Rapid response to cyber incidents to contain damage and investigate breaches.",
        icon: ShieldAlert,
        color: "primary",
        items: ["Malware Investigation", "Breach Analysis", "Digital Forensics", "Ransomware Response", "Evidence Collection"]
    },
    {
        title: "Cloud Security Services",
        desc: "Secure cloud infrastructure across major cloud platforms.",
        icon: CloudCog,
        color: "secondary",
        items: ["Security Assessment", "Configuration Review", "AWS / Azure / GCP Hardening", "Cloud Pen Testing", "Identity & Access Management"]
    },
    {
        title: "Security Consulting",
        desc: "Strategic cybersecurity guidance for organizations.",
        icon: MessageSquare,
        color: "accent",
        items: ["Architecture Design", "Risk Management", "Strategy Development", "Policy Development", "Program Implementation"]
    },
    {
        title: "Compliance & Regulatory",
        desc: "Help organizations meet industry security standards.",
        icon: ShieldCheck,
        color: "primary",
        items: ["ISO 27001", "GDPR Compliance", "PCI DSS Compliance", "Audit Preparation", "Gap Analysis"]
    },
    {
        title: "Managed Security Services",
        desc: "Outsource cybersecurity monitoring and protection.",
        icon: Lock,
        color: "secondary",
        items: ["Managed Firewall", "Endpoint Security", "Email Security", "Threat Hunting", "Infrastructure Monitoring"]
    },
    {
        title: "Red Team & Simulation",
        desc: "Advanced attack simulation to test organizational security.",
        icon: Terminal,
        color: "accent",
        items: ["Red Team Exercises", "Phishing Simulation", "Social Engineering", "Physical Security Testing"]
    },
    {
        title: "Security Awareness Training",
        desc: "Educate employees to prevent human-based cyber attacks.",
        icon: GraduationCap,
        color: "primary",
        items: ["Phishing Awareness", "Cyber Hygiene", "Security Workshops", "Executive Training"]
    },
    {
        title: "Application Security",
        desc: "Secure software and applications during development.",
        icon: AppWindow,
        color: "secondary",
        items: ["Secure Code Review", "DevSecOps Integration", "SAST / DAST", "API Security Testing"]
    },
    {
        title: "Threat Intelligence",
        desc: "Monitor and analyze global cyber threats.",
        icon: BrainCircuit,
        color: "accent",
        items: ["Dark Web Monitoring", "Threat Intelligence Reports", "Attack Surface Monitoring", "Threat Actor Tracking"]
    },
    {
        title: "Security Audits",
        desc: "Evaluate organizational cybersecurity posture.",
        icon: Search,
        color: "primary",
        items: ["IT Infrastructure", "Network Security", "Application Security", "Cloud Security"]
    },
    {
        title: "Endpoint & Network Security",
        desc: "Protect systems and networks against attacks.",
        icon: Network,
        color: "secondary",
        items: ["EDR", "IDS / IPS", "Firewall Configuration", "Zero Trust Architecture"]
    },
    {
        title: "SIEM & Security Automation",
        desc: "Advanced monitoring and security analytics.",
        icon: Radio,
        color: "accent",
        items: ["SIEM Deployment", "Log Management", "Security Automation", "SOAR Integration"]
    }
];

export default function ServicesPage() {
    const [activeTab, setActiveTab] = useState("msp");

    return (
        <div className="pt-24 bg-background min-h-screen">
            {/* Header Hero */}
            <SectionWrapper className="relative border-b border-white/5 pb-20 pt-10">
                <AnimatedReveal className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                        Netcradus Services
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
                        End-to-End <br />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                            Technology Solutions
                        </span>
                    </h1>
                    <p className="text-gray-400 font-sans text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
                        A comprehensive ecosystem designed to protect, scale, and accelerate your business. Select a service pillar below to explore our detailed capabilities.
                    </p>
                </AnimatedReveal>

                {/* Tab Navigation */}
                <AnimatedReveal delay={0.2} className="mt-16 flex flex-wrap justify-center gap-4">
                    {SERVICES_TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-3 px-6 py-4 rounded-xl font-display font-bold text-sm tracking-widest uppercase transition-all duration-300 border ${activeTab === tab.id
                                ? "bg-white/10 border-primary/50 text-white shadow-[0_0_20px_rgba(255,107,0,0.15)]"
                                : "bg-black border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300"
                                }`}
                        >
                            <tab.icon size={18} className={activeTab === tab.id ? "text-primary" : ""} />
                            {tab.title}
                        </button>
                    ))}
                </AnimatedReveal>
            </SectionWrapper>

            {/* Tab Content */}
            <SectionWrapper className="pt-24 pb-12 max-w-5xl mx-auto">
                <AnimatePresence mode="wait">

                    {/* MSP CONTENT */}
                    {activeTab === "msp" && (
                        <motion.div
                            key="msp"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-16"
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-6">Managed IT Services (MSP)</h2>
                                <p className="text-base md:text-xl text-primary font-sans px-4">Your Entire IT Operation — Expertly Managed, Always On.</p>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="text-gray-400 font-sans leading-relaxed space-y-6 text-lg flex-1">
                                    <p>In today's hyper-connected business environment, your technology infrastructure is the backbone of everything you do. Downtime is not merely an inconvenience — it is a direct and quantifiable threat to revenue, reputation, and customer trust.</p>
                                    <p>Netcradus Managed IT Services (MSP) provide your organisation with a fully outsourced, enterprise-grade IT department — delivering proactive management, round-the-clock monitoring, and strategic technology guidance — all under a single, predictable monthly contract.</p>
                                </div>
                                <div className="flex-1">
                                    <img src="/img/msp-dashboard.png" alt="Managed IT Dashboard" className="w-full h-auto rounded-xl border border-white/10 shadow-[0_0_30px_rgba(0,124,240,0.15)] object-cover" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <GlassCard className="p-8">
                                    <h4 className="text-white font-display font-bold text-xl mb-4 text-primary">Proactive Monitoring & Alerting</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Enterprise-grade RMM tooling across every device and cloud workload. Our AI-enhanced platform analyses thousands of events per second, identifying anomalies before they become user-impacting incidents.</p>
                                </GlassCard>
                                <GlassCard className="p-8">
                                    <h4 className="text-white font-display font-bold text-xl mb-4 text-secondary">Multi-Tier Helpdesk Support</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Seamless L1, L2, and L3 support across UK and India with defined SLAs. First-contact resolution rates exceed 85%, minimising disruption for your real people doing real work.</p>
                                </GlassCard>
                                <GlassCard className="p-8">
                                    <h4 className="text-white font-display font-bold text-xl mb-4 text-accent">Network & Device Management</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Complete lifecycle management of laptops, networking equipment, SD-WAN, and mobile devices (MDM/UEM). Full control, patching, and compliance monitoring globally.</p>
                                </GlassCard>
                                <GlassCard className="p-8">
                                    <h4 className="text-white font-display font-bold text-xl mb-4 text-primary">Backup & Disaster Recovery</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">Automated daily backups with hourly snapshots, multi-DC geo-redundancy, and clearly defined RPO/RTO metrics. We design your business continuity plan, not just your backup routine.</p>
                                </GlassCard>
                            </div>

                            <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-8 lg:p-12">
                                <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">Service Tiers</h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-primary font-bold text-lg mb-2">Essential Care <span className="text-gray-500 font-normal text-sm ml-2">— For Growing SMEs (10-50 Users)</span></h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">Core proactive monitoring, endpoint management, AV, and multi-tier helpdesk. Monthly health reports and quarterly technology review.</p>
                                    </div>
                                    <div className="border-t border-white/5 pt-6">
                                        <h4 className="text-secondary font-bold text-lg mb-2">Advanced Operations <span className="text-gray-500 font-normal text-sm ml-2">— For Established Businesses (50-250 Users)</span></h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">All Essential features plus comprehensive network operations, cloud tracking, advanced EDR, email security, full BCDR, and bi-monthly strategic reviews.</p>
                                    </div>
                                    <div className="border-t border-white/5 pt-6">
                                        <h4 className="text-accent font-bold text-lg mb-2">Enterprise Command <span className="text-gray-500 font-normal text-sm ml-2">— For Demanding Enterprises (250+ Users)</span></h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">All Advanced features plus 24/7/365 dedicated account management, vCTO advisory, financial penalty SLA paths, and custom service design integration with internal IT.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* MSSP CONTENT */}
                    {activeTab === "mssp" && (
                        <motion.div
                            key="mssp"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-16"
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-6">Cybersecurity & MSSP</h2>
                                <p className="text-base md:text-xl text-primary font-sans px-4">Defend. Detect. Respond. Recover — Before It Becomes a Crisis.</p>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="text-gray-400 font-sans leading-relaxed space-y-6 text-lg flex-1">
                                    <p>At Netcradus, cybersecurity is not an add-on — it is the foundation upon which every solution we deliver is built. As a fully accredited MSSP, we deploy a layered, intelligence-led security model designed to protect your organisation across the entire attack surface.</p>
                                    <p>Our 24/7 fully staffed SOC achieves &lt;5min Mean Time to Detect and &lt;15min Mean Time to Respond by ingesting over 1 Billion SIEM logs per day across global endpoints.</p>
                                </div>
                                <div className="flex-1">
                                    <img src="/img/siem-dashboard.png" alt="Cybersecurity SIEM Dashboard" className="w-full h-auto rounded-xl border border-white/10 shadow-[0_0_30px_rgba(255,107,0,0.15)] object-cover" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                                {CYBER_SERVICES.map((service, idx) => (
                                    <GlassCard key={idx} className={cn(
                                        "p-8 border-t-2",
                                        service.color === "primary" ? "border-t-primary" :
                                            service.color === "secondary" ? "border-t-secondary" :
                                                "border-t-accent"
                                    )}>
                                        <service.icon className={cn(
                                            "w-10 h-10 mb-6",
                                            service.color === "primary" ? "text-primary" :
                                                service.color === "secondary" ? "text-secondary" :
                                                    "text-accent"
                                        )} />
                                        <h4 className="text-white font-display font-bold text-xl mb-4">{service.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.desc}</p>

                                        <div className="space-y-2">
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Capabilities include:</p>
                                            <div className="grid grid-cols-1 gap-2">
                                                {service.items.map((item, i) => (
                                                    <div key={i} className="flex items-start gap-2 text-xs text-gray-400">
                                                        <div className={cn(
                                                            "w-1 h-1 rounded-full mt-1.5 shrink-0",
                                                            service.color === "primary" ? "bg-primary" :
                                                                service.color === "secondary" ? "bg-secondary" :
                                                                    "bg-accent"
                                                        )} />
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </GlassCard>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* CLOUD & AI CONTENT */}
                    {activeTab === "cloud-ai" && (
                        <motion.div
                            key="cloud-ai"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-16"
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-6">Cloud & AI Solutions</h2>
                                <p className="text-base md:text-xl text-primary font-sans px-4">Scale Without Limits. Innovate Without Boundaries.</p>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="text-gray-400 font-sans leading-relaxed space-y-6 text-lg flex-1">
                                    <p>The convergence of cloud infrastructure and artificial intelligence represents the most significant technological shift in a generation. Our architects hold professional certifications across AWS, Azure, and Google Cloud, bringing deep commercial viability to multi-cloud engineering.</p>
                                </div>
                                <div className="flex-1">
                                    <img src="/img/cloud-ai.png" alt="Cloud Security Architecture" className="w-full h-auto rounded-xl border border-white/10 shadow-[0_0_30px_rgba(0,245,160,0.15)] object-cover" />
                                </div>
                            </div>

                            <div className="space-y-12">
                                <div className="p-8 bg-black border border-white/10 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all">
                                    <CloudCog className="absolute -right-8 -top-8 w-48 h-48 text-white/[0.03] group-hover:text-primary/10 transition-colors duration-500" />
                                    <h3 className="text-2xl font-display font-bold text-white mb-6">Cloud Practice</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                        <div>
                                            <h4 className="text-primary font-bold mb-2">Migration & Modernisation</h4>
                                            <p className="text-gray-400 text-sm">Full containerisation, legacy monolith refactoring, and structured 6-phase lift-and-shift deployment.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-bold mb-2">FinOps & CloudOps</h4>
                                            <p className="text-gray-400 text-sm">Continuous cost visibility averting standard 30-40% budget overruns via strict reserved instance optimisation.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-bold mb-2">Cloud-Native DevSecOps</h4>
                                            <p className="text-gray-400 text-sm">Infrastructure-as-code security, serverless event-driven architecture, and automated CICD testing.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-bold mb-2">DRaaS</h4>
                                            <p className="text-gray-400 text-sm">Automated cloud-based disaster recovery with instant failover capability at an enterprise-scale fraction cost.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 bg-black border border-white/10 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all">
                                    <BrainCircuit className="absolute -right-8 -top-8 w-48 h-48 text-white/[0.03] group-hover:text-accent/10 transition-colors duration-500" />
                                    <h3 className="text-2xl font-display font-bold text-white mb-6">Artificial Intelligence Practice</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                                        <div>
                                            <h4 className="text-accent font-bold mb-2">MLOps & Model Development</h4>
                                            <p className="text-gray-400 text-sm">Designing LLMs, automated drift detection, and deployment for sentiment analysis, predictive modelling, and CV.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-accent font-bold mb-2">Intelligent Process Auto (IPA)</h4>
                                            <p className="text-gray-400 text-sm">Combining RPA with cognitive algorithms achieving 40-80% operational efficiency on transactional HR and finance workflows.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-accent font-bold mb-2">Conversational Agents</h4>
                                            <p className="text-gray-400 text-sm">Sophisticated multi-turn NLP chatbots handling complex integrations across customer portals, WhatsApp, and Teams.</p>
                                        </div>
                                        <div>
                                            <h4 className="text-accent font-bold mb-2">Generative AI Guardrails</h4>
                                            <p className="text-gray-400 text-sm">Safe custom enterprise copilots backed by Azure OpenAI/Vertex AI mapped securely against your proprietary data.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* SOFTWARE CONTENT */}
                    {activeTab === "software" && (
                        <motion.div
                            key="software"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="space-y-16"
                        >
                            <div className="text-center mb-12">
                                <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-white mb-6">Software Development</h2>
                                <p className="text-base md:text-xl text-primary font-sans px-4">Bespoke Technology Built for Your Business, Not the Other Way Around.</p>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-12">
                                <div className="text-gray-400 font-sans leading-relaxed space-y-6 text-lg flex-1">
                                    <p>Off-the-shelf software rarely fits perfectly. Netcradus brings together software architects, full-stack engineers, and security experts in an Agile sprint-based SDLC. We build platforms that fit your precise operations instead of forcing your operations to fit generic platforms.</p>
                                </div>
                                <div className="flex-1">
                                    <img src="/img/software-dev.png" alt="Software Development" className="w-full h-auto rounded-xl border border-white/10 shadow-[0_0_30px_rgba(0,124,240,0.15)] object-cover" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                                <GlassCard className="p-8">
                                    <LayoutTemplate className="text-primary w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-display font-bold text-white mb-3">CRM Systems</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li>• 360-degree customer profiling</li>
                                        <li>• AI-powered sales lead forecasting</li>
                                        <li>• Omnichannel comms (VoIP, WhatsApp, SMS)</li>
                                        <li>• Open API architecture for seamless linking</li>
                                    </ul>
                                </GlassCard>

                                <GlassCard className="p-8">
                                    <Blocks className="text-secondary w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-display font-bold text-white mb-3">ERP Systems</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li>• Financial ledger & multi-currency banking</li>
                                        <li>• AI predictive inventory & supply chain tracking</li>
                                        <li>• HR and absence processing</li>
                                        <li>• Built-in GDPR compliance and data minimisation</li>
                                    </ul>
                                </GlassCard>

                                <GlassCard className="p-8">
                                    <Workflow className="text-accent w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-display font-bold text-white mb-3">KO (Knock-Out) Systems</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li>• Paperless operations automation</li>
                                        <li>• Mobile-ready field inspection and live sync</li>
                                        <li>• High-speed delivery via proprietary framework (4-12 weeks)</li>
                                    </ul>
                                </GlassCard>

                                <GlassCard className="p-8">
                                    <AppWindow className="text-primary w-10 h-10 mb-4" />
                                    <h3 className="text-xl font-display font-bold text-white mb-3">Custom Enterprise Apps</h3>
                                    <ul className="space-y-2 text-sm text-gray-400">
                                        <li>• Customer or partner self-service portals</li>
                                        <li>• Regulatory FCA trading or clinical NHS systems</li>
                                        <li>• Legacy IT modernisation</li>
                                    </ul>
                                </GlassCard>
                            </div>

                        </motion.div>
                    )}

                </AnimatePresence>
            </SectionWrapper>
        </div>
    );
}
