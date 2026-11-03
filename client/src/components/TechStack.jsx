import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";

const TECH_STACK = [
    "Microsoft Sentinel",
    "CrowdStrike",
    "AWS Security",
    "Palo Alto Networks",
    "Cisco Secure",
    "Splunk",
    "Check Point",
    "Fortinet",
    "Google Cloud",
    "Tenable",
    "SentinelOne",
    "Darktrace"
];

export default function TechStack() {
    return (
        <SectionWrapper className="py-20 bg-[var(--bg-color)] overflow-hidden">
            <div className="text-center mb-16">
                <span className="text-[10px] font-bold tracking-[0.4em] text-[var(--text-secondary)] opacity-50 uppercase">Strategic Partners & Alliances</span>
            </div>

            <div className="relative w-full flex overflow-x-hidden">
                {/* Immersive Fades */}
                <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[var(--bg-color)] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex shrink-0 min-w-full items-center gap-24 pr-24"
                    animate={{ x: "-100%" }}
                    transition={{
                        ease: "linear",
                        duration: 50,
                        repeat: Infinity,
                    }}
                >
                    {TECH_STACK.concat(TECH_STACK).map((tech, idx) => (
                        <div key={idx} className="flex items-center opacity-40 hover:opacity-100 transition-opacity duration-700">
                            <span className="font-display font-medium text-lg md:text-xl text-[var(--text-primary)] tracking-[0.2em] uppercase whitespace-nowrap">{tech}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
}
