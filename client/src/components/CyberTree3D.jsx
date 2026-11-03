import React from "react";
import { motion } from "framer-motion";

/**
 * CyberTree3D Component
 * Renders the Cyber Tree of Life visual with interactive glowing elements and responsive layout.
 */
export default function CyberTree3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden p-2 sm:p-4">
      {/* Cyber Tree Container with Glassmorphism Border & Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-[1000px] aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-[#FF6B00]/40 shadow-[0_15px_50px_rgba(255,107,0,0.35)] bg-[#050B14] flex items-center justify-center group"
      >
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,0,0.15),transparent_70%)] pointer-events-none z-10" />

        {/* Homepage Background Image Visual */}
        <img
          src="/img/homepage bg.png"
          alt="Netcradus Cybersecurity Homepage Visual"
          className="w-full h-full object-cover sm:object-contain transition-transform duration-700 ease-out group-hover:scale-102"
        />

        {/* Glossy Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/40 via-transparent to-[#050B14]/20 pointer-events-none z-10" />
      </motion.div>
    </div>
  );
}
