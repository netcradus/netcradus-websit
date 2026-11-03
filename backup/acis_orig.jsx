import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";
import { fadeUp } from "../lib/motion";

const phases = [
    { step: "Phase 1", title: "Deep Environmental Learning", desc: "AI maps normal network behavior." },
    { step: "Phase 2", title: "Continuous Surveillance", desc: "Real-time monitoring for anomalies." },
    { step: "Phase 3", title: "Threat Classification", desc: "Machine learning identifies attack vectors." },
    { step: "Phase 4", title: "Autonomous Response", desc: "Instant surgical neutralization of threats." },
    { step: "Phase 5", title: "Immunity & Learning", desc: "System updates global threat intelligence." },
];

export default function ACISSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="acis" className="relative py-32 bg-background overflow-hidden border-t border-white/5">
            {/* Dark spotlight background */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[200px] rounded-full pointer-events-none" />

            <SectionWrapper className="!py-0 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text */}
                    <AnimatedReveal className="text-center lg:text-left">
                        <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 z-10 relative shadow-[0_0_15px_rgba(255,107,0,0.2)]">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Upcoming Project
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] mb-6">
                            ACIS — <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                                Autonomous Cyber Immune System
                            </span>
                        </h2>
                        <p className="text-sm md:text-lg text-gray-400 font-sans leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                            A first-of-its-kind AI-driven, self-healing cybersecurity platform. Seamlessly integrating Next-Gen AI SIEM, SOAR, and an AI Red Team Simulator to transform defense from reactive to proactive.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start gap-4 text-xs md:text-sm font-semibold text-primary uppercase tracking-wider">
                            <span>Future of Enterprise Protection</span>
                            <div className="hidden lg:block h-[1px] flex-grow bg-primary/30 max-w-[100px]" />
                        </div>
                    </AnimatedReveal>

                    {/* Right Timeline */}
                    <div className="relative pl-8 md:pl-12 py-8" ref={containerRef}>
                        {/* The vertical glowing animated line */}
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="absolute left-3 md:left-4 top-0 h-full w-[2px] bg-gradient-to-b from-primary via-secondary to-accent rounded-full shadow-[0_0_15px_rgba(255,107,0,0.5)]"
                        />
                        {/* Faded track */}
                        <div className="absolute left-3 md:left-4 top-0 h-full w-[1px] bg-white/5 rounded-full" />

                        <div className="space-y-12">
                            {phases.map((phase, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: "-100px" }}
                                    custom={idx}
                                    className="relative group"
                                >
                                    {/* Line */}
                                    {idx !== phases.length - 1 && (
                                        <div className="absolute top-10 bottom-[-24px] left-5 w-[1px] bg-gradient-to-b from-primary/30 to-transparent origin-top" />
                                    )}

                                    {/* Dot */}
                                    <div className="absolute -left-[38px] md:-left-[42px] top-1.5 w-3 h-3 rounded-full bg-background border border-white/20 group-hover:border-primary transition-colors duration-300 z-10" />

                                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">
                                        {phase.step}
                                    </span>
                                    <h4 className="text-xl font-display font-semibold text-white mb-2">
                                        {phase.title}
                                    </h4>
                                    <p className="text-sm text-gray-400 font-sans">
                                        {phase.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </SectionWrapper>
        </section>
    );
}
