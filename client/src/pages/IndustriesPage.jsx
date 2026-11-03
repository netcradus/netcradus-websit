import React from 'react';
import SectionWrapper from "../components/ui/SectionWrapper";
import AnimatedReveal from "../components/ui/AnimatedReveal";
import GlassCard from "../components/ui/GlassCard";
import MagneticWrapper from "../components/ui/MagneticWrapper";
import { Landmark, HeartPulse, Scale, ShoppingBag, Factory, GraduationCap, Building2, Rocket, Smartphone, ShieldCheck, ArrowRight } from "lucide-react";

const INDUSTRIES_DATA = [
    {
        name: "Financial Services",
        icon: Landmark,
        desc: "Tactical defense for fintech, algorithmic trading, and open banking API ecosystems.",
        color: "primary"
    },
    {
        name: "Healthcare",
        icon: HeartPulse,
        desc: "NHS-aligned governance and clinical data resilience for large-scale hospital groups.",
        color: "secondary"
    },
    {
        name: "Manufacturing",
        icon: Factory,
        desc: "OT/IT convergence security and ICS protection for critical industrial infrastructure.",
        color: "accent"
    }
];

export default function IndustriesPage() {
    return (
        <div className="pt-16 md:pt-24 bg-background min-h-screen transition-colors duration-300">
            {/* Cinematic Hero */}
            <SectionWrapper className="relative border-b border-white/[0.05] pb-16 md:pb-32 pt-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full opacity-50 pointer-events-none" />
                
                <AnimatedReveal className="text-center max-w-5xl mx-auto relative z-10">
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-primary uppercase mb-8 block">
                        Domain Specialized
                    </span>
                    <h1 className="text-4xl md:text-8xl font-display font-extrabold text-[var(--text-primary)] mb-8 tracking-tighter leading-none">
                        Engineered for every <br />
                        <span className="text-[var(--text-secondary)] opacity-60 italic">sector.</span>
                    </h1>
                    <p className="text-[var(--text-secondary)] font-sans text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        We don't retrofit generic solutions. We build domain-specific threat models for unique operational realities.
                    </p>
                </AnimatedReveal>
            </SectionWrapper>

            {/* Core Grid */}
            <SectionWrapper className="py-16 md:py-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {INDUSTRIES_DATA.map((ind, idx) => (
                        <MagneticWrapper key={idx} strength={0.1}>
                            <div className="p-12 bg-surface-color/50 border border-[var(--border-color)] rounded-[3rem] hover:bg-surface-color hover:border-primary/30 transition-all duration-700 group h-full flex flex-col backdrop-blur-sm">
                                <div className="w-14 h-14 bg-surface-color border border-[var(--border-color)] rounded-2xl flex items-center justify-center text-[var(--text-secondary)] group-hover:text-primary transition-all duration-500 mb-10 group-hover:scale-110 shadow-2xl">
                                    <ind.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-6 tracking-tight group-hover:text-primary transition-colors">{ind.name}</h3>
                                <p className="text-[var(--text-secondary)] font-sans text-sm leading-relaxed mb-12 group-hover:opacity-100 transition-opacity">
                                    {ind.desc}
                                </p>
                                <div className="mt-auto flex justify-end">
                                    <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500" />
                                </div>
                            </div>
                        </MagneticWrapper>
                    ))}
                </div>
            </SectionWrapper>

            {/* Compliance Banner */}
            <SectionWrapper className="py-16 md:py-32 bg-background border-t border-[var(--border-color)]">
                <div className="max-w-5xl mx-auto bg-surface-color/50 border border-[var(--border-color)] p-16 rounded-[4rem] relative overflow-hidden text-center backdrop-blur-md">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,124,255,0.05)_0%,transparent_70%)] opacity-50 pointer-events-none" />
                    <ShieldCheck className="mx-auto text-primary w-12 h-12 mb-8 animate-pulse" />
                    <h2 className="text-3xl font-display font-extrabold text-[var(--text-primary)] mb-6 tracking-tighter italic">Compliance mandated. Resilience delivered.</h2>
                    <p className="text-[var(--text-secondary)] font-sans text-lg max-w-2xl mx-auto mb-12">
                        Operating under the baseline of ISO/IEC 27001:2022, GDPR. De-risking your organization from day zero.
                    </p>
                    <MagneticWrapper strength={0.2}>
                        <button className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-[0.4em] border-b border-primary/20 pb-2 hover:text-primary transition-colors">Tactical Consultation</button>
                    </MagneticWrapper>
                </div>
            </SectionWrapper>
        </div>
    );
}
