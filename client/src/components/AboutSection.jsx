import { Shield, Lock, Server, ArrowRight } from "lucide-react";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";
import MagneticWrapper from "./ui/MagneticWrapper";
import { motion } from "framer-motion";

const highlights = [
  "24/7/365 Proactive Monitoring & Incident Response",
  "Dual-Continent Presence & Follow-the-Sun Support",
  "World-Class Certified Professionals",
  "Scalable & Modular Service Delivery",
  "Compliance-First Architecture",
  "Innovation at the Core — Powered by ACIS",
];

export default function AboutSection() {
  return (
    <SectionWrapper
      id="about"
      className="relative overflow-hidden bg-premium-radial py-24"
    >
      {/* Brand Background Glow */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_35%,rgba(255,138,31,0.08)_0%,transparent_35%),radial-gradient(circle_at_80%_70%,rgba(255,45,143,0.08)_0%,transparent_35%)]" />

      <div className="relative z-10 grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
        <AnimatedReveal className="text-center lg:text-left">
          <span className="mb-8 block font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px]">
            Architectural Excellence
          </span>

          <h2 className="mb-8 font-display text-4xl md:text-7xl font-black leading-[1.02] tracking-tighter text-zinc-900 dark:text-white">
            Outcomes, <br />
            <span className="text-accent italic">
              not just services.
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-lg font-sans text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 lg:mx-0">
            We engineer resilience. Netcradus builds the digital infrastructure
            that doesn&apos;t just survive attacks—it anticipates them.
          </p>

          <div className="mb-12 grid grid-cols-1 gap-5 text-left sm:grid-cols-2">
            {highlights.map((item, idx) => (
              <div key={idx} className="group flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 rounded-full bg-accent/30 transition-colors duration-500 group-hover:bg-accent" />
                <span className="font-sans text-sm leading-relaxed text-zinc-500 dark:text-zinc-500 transition-colors duration-500 group-hover:text-zinc-900 dark:group-hover:text-white">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <MagneticWrapper strength={0.2}>
            <button className="group inline-flex items-center gap-4 font-sans text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-primary)] md:text-xs">
              Our Philosophy
              <ArrowRight
                size={14}
                className="text-primary transition-transform duration-300 group-hover:translate-x-2"
              />
            </button>
          </MagneticWrapper>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2} className="relative flex items-center justify-center">
          <div className="relative flex aspect-square w-full max-w-[500px] items-center justify-center">
            {/* Rings */}
            <div className="absolute inset-0 rounded-full border border-[var(--border-color)]" />
            <div className="absolute inset-10 animate-[spin_40s_linear_infinite] rounded-full border border-[var(--border-color)] border-dashed" />
            <div className="absolute inset-20 rounded-full border border-[var(--border-color)]" />

            <div className="absolute inset-0 rounded-full bg-brand-gradient-soft blur-[120px]" />

            {/* Core */}
            <div className="relative z-10 flex h-48 w-48 items-center justify-center md:h-64 md:w-64">
              <div className="absolute inset-0 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/40 shadow-premium backdrop-blur-3xl" />
              <Shield
                strokeWidth={0.6}
                className="h-32 w-32 text-zinc-900 dark:text-white opacity-10 drop-shadow-[0_0_20px_rgba(232,64,10,0.1)] md:h-44 md:w-44"
              />

              {/* Orbit Top */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-[-40px]"
              >
                  <div className="absolute left-1/2 top-0 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
                    <Lock size={16} className="text-accent" />
                  </div>
              </motion.div>

              {/* Orbit Bottom */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="pointer-events-none absolute inset-[-40px]"
              >
                <div className="absolute bottom-0 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-xl border border-[var(--border-color)] bg-surface shadow-2xl">
                  <Server size={16} className="text-accent" />
                </div>
              </motion.div>
            </div>

            {/* Labels */}
            <div className="pointer-events-none absolute inset-0 font-mono text-[8px] uppercase tracking-[0.3em] text-[var(--text-secondary)] opacity-50">
              <div className="absolute left-0 top-0">ARCH_TYPE: MONOLITH</div>
              <div className="absolute bottom-10 right-0">Uptime: 99.98%</div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </SectionWrapper>
  );
}