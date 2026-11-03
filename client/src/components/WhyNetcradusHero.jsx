import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function WhyNetcradusHero() {
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  useEffect(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.play().catch((err) => console.log('Desktop video autoplay:', err));
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch((err) => console.log('Mobile video autoplay:', err));
    }
  }, []);

  return (
    <section className="relative pt-24 pb-16 md:pt-44 md:pb-32 px-4 sm:px-6 lg:px-8 bg-[#04060c] border-b border-white/10 overflow-hidden min-h-[60vh] md:min-h-[85vh] flex flex-col items-center justify-center">
      {/* 1. Desktop Background Video System (Above 768px / Desktop) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <video
          ref={desktopVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-100 filter brightness-105 saturate-115"
        >
          <source src="/videos/Why Netcradus.mp4" type="video/mp4" />
          <source src="/videos/Why%20Netcradus.mp4" type="video/mp4" />
        </video>

        {/* Minimal Bottom Edge Gradient for Smooth Section Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#04060c]" />
      </div>

      {/* 2. Hero Content */}
      <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center w-full">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-sora font-extrabold text-3xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[1.15] max-w-4xl"
        >
          Why Global Enterprises Choose{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4c8c] via-[#f9832e] to-[#ff8000] drop-shadow-[0_0_40px_rgba(249,131,46,0.5)]">
            Netcradus
          </span>
        </motion.h1>

        {/* 3. Mobile Video Display Card (Below 768px) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block md:hidden mt-8 w-full max-w-2xl mx-auto relative z-10 px-1"
        >
          <div className="relative rounded-[18px] overflow-hidden border border-white/15 shadow-[0_15px_40px_rgba(249,131,46,0.25)] bg-[#0d0d14]">
            <video
              ref={mobileVideoRef}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-[18px] object-cover block"
            >
              <source src="/videos/Why Netcradus.mp4" type="video/mp4" />
              <source src="/videos/Why%20Netcradus.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
