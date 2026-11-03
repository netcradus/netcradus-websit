import React from 'react';
import SectionWrapper from "../components/ui/SectionWrapper";
import AnimatedReveal from "../components/ui/AnimatedReveal";
import GlassCard from "../components/ui/GlassCard";
import { Cpu, LayoutTemplate, ShieldCheck, Zap, Workflow, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
    return (
        <div className="pt-16 md:pt-24 bg-background min-h-screen">
            {/* Header Hero */}
            <SectionWrapper className="relative border-b border-white/5 pb-20 pt-10">
                <AnimatedReveal className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                        Netcradus Projects
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light mb-6">
                        Innovation in <br />
                        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                            Action
                        </span>
                    </h1>
                    <p className="text-[var(--text-secondary)] font-sans text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
                        Explore our flagship proprietary technologies and bespoke scalable solutions that are redefining enterprise architecture, security, and relationship management.
                    </p>
                </AnimatedReveal>
            </SectionWrapper>

            {/* ACIS Project Section */}
            <SectionWrapper className="py-16 md:py-24 border-b border-white/5 relative">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <AnimatedReveal className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                            <Cpu className="text-primary w-6 h-6 md:w-8 md:h-8" />
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[var(--text-primary)]">Project: ACIS</h2>
                        </div>
                        <h3 className="text-lg md:text-xl text-primary font-sans mb-6">Autonomous Cyber Immune System</h3>
                        <div className="space-y-6 text-[var(--text-secondary)] font-sans text-sm md:text-base leading-relaxed text-left inline-block">
                            <p>
                                ACIS is our revolutionary, proprietary AI-driven cybersecurity platform. Designed to eliminate the lag between threat detection and response, ACIS operates autonomously to identify, isolate, and neutralize cyber threats without requiring manual human intervention.
                            </p>
                            <p>
                                By deeply integrating Next-Gen AI SIEM, SOAR, an AI-Driven Red Team Simulator, and Threat Intelligence Swarm Learning, ACIS transforms traditional reactive defense postures into proactive, self-healing immune systems for enterprise IT environments.
                            </p>
                            <ul className="space-y-3 mt-4">
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                                    <span>Sub-second autonomous threat containment</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Zap className="w-5 h-5 text-primary shrink-0" />
                                    <span>AI-powered User and Entity Behavior Analytics (UEBA)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Workflow className="w-5 h-5 text-primary shrink-0" />
                                    <span>Self-learning baseline modeling to eliminate manual rules</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-8">
                            <Link to="/acis" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-primary/50 text-white font-display font-bold text-sm tracking-wide rounded-lg transition-colors group">
                                Deep Dive into ACIS
                                <ArrowRight size={16} className="text-primary group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </AnimatedReveal>

                    <AnimatedReveal delay={0.2}>
                        <GlassCard className="p-8 lg:p-12 relative overflow-hidden bg-black/50 border-white/10 h-full flex flex-col justify-center">
                            <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary/10 blur-[50px] rounded-full" />
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-8 shadow-[0_0_30px_rgba(255,107,0,0.2)]">
                                <Cpu size={32} />
                            </div>
                            <h4 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-4">The Future of Cyber Defense</h4>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                ACIS is currently in final development stages. It represents a monumental shift from tools that simply generate alerts to a platform that generates actual security outcomes out-of-the-box.
                            </p>
                        </GlassCard>
                    </AnimatedReveal>
                </div>
            </SectionWrapper>

            {/* CRM Project Section */}
            <SectionWrapper className="py-16 md:py-24 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <AnimatedReveal className="order-2 lg:order-1">
                        <GlassCard className="p-8 lg:p-12 relative overflow-hidden bg-black/50 border-white/10 h-full flex flex-col justify-center">
                            <div className="absolute -left-10 -top-10 w-48 h-48 bg-secondary/10 blur-[50px] rounded-full" />
                            <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary mb-8 shadow-[0_0_30px_rgba(0,124,240,0.2)]">
                                <LayoutTemplate size={32} />
                            </div>
                            <h4 className="text-2xl font-display font-bold text-white mb-4">Bespoke Software Excellence</h4>
                            <p className="text-gray-400 leading-relaxed md:mr-8">
                                Off-the-shelf software often forces businesses to conform to generic workflows. Our custom CRM platforms are molded entirely around the client's proprietary operations, granting a supreme competitive edge.
                            </p>
                        </GlassCard>
                    </AnimatedReveal>

                    <AnimatedReveal delay={0.2} className="order-1 lg:order-2 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                            <LayoutTemplate className="text-secondary w-6 h-6 md:w-8 md:h-8" />
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white">Project: Next-Gen CRM</h2>
                        </div>
                        <h3 className="text-lg md:text-xl text-secondary font-sans mb-6">Custom Enterprise Relationship Management</h3>
                        <div className="space-y-6 text-gray-400 font-sans text-sm md:text-base leading-relaxed text-left inline-block">
                            <p>
                                Netcradus develops highly scalable, bespoke CRM (Customer Relationship Management) ecosystems tailored to specific enterprise processes. Rather than adapting business logic to fit a SaaS product, we engineer platforms that perfectly map to our clients' unique go-to-market strategies.
                            </p>
                            <p>
                                Our CRM architectures are built from the ground up with a security-first, data-minimization mindset, integrating seamlessly with AI pipelines to provide 360-degree customer profiling and predictive sales forecasting.
                            </p>
                            <ul className="space-y-3 mt-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                                    <span>AI-driven sales lead forecasting and pipeline optimization</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                                    <span>Omnichannel communication integrations (VoIP, WhatsApp, SMS)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                                    <span>Open API architecture for unconstrained third-party linking</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                                    <span>Military-grade data encryption and innate GDPR compliance</span>
                                </li>
                            </ul>
                        </div>
                    </AnimatedReveal>

                </div>
            </SectionWrapper>
        </div>
    );
}
