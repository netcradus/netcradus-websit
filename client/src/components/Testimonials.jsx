import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ArrowUpRight, ChevronLeft, ChevronRight, Star, Sparkles, ShieldCheck } from "lucide-react";

import client1 from "../assets/clientsList/client_1-removebg.png";
import client2 from "../assets/clientsList/client_2-removebg.png";
import client3 from "../assets/clientsList/client_3-removebg.png";
import client4 from "../assets/clientsList/client 4.png";
import client5 from "../assets/clientsList/client5.png";
import client6 from "../assets/clientsList/client_6-removebg.png";

const clientLogos = [client1, client2, client3, client4, client5, client6];

const TESTIMONIALS_DATA = [
  {
    company: "OOURAA",
    industry: "Healthcare Technology",
    logo: "/technology/ouraa.png",
    rating: 5,
    quote:
      "Netcradus helped us strengthen our cybersecurity posture with 24×7 SOC monitoring, proactive threat detection, and continuous vulnerability assessments. Their team delivered enterprise-grade security with exceptional responsiveness and technical expertise."
  },
  {
    company: "Online Pantry",
    industry: "E-Commerce & Retail",
    logo: "/technology/onlinepantry.png",
    rating: 5,
    quote:
      "Partnering with Netcradus significantly improved our security operations. Their SIEM monitoring, cloud security solutions, and rapid incident response helped us protect customer data and maintain uninterrupted business operations."
  },
  {
    company: "Vastraalane",
    industry: "Technology & Digital Solutions",
    logo: "/technology/vastraalane.png",
    rating: 5,
    quote:
      "Netcradus has been a reliable cybersecurity partner, helping us improve threat visibility, security monitoring, and infrastructure protection. Their expertise has added significant value to our business."
  },
  {
    company: "CyberHaxs",
    industry: "Cybersecurity & Risk Management",
    logo: "/technology/cyberhaxs.png",
    rating: 5,
    quote:
      "Working with Netcradus enhanced our security operations through AI-powered monitoring, rapid incident response, and strategic cybersecurity guidance. Their expertise makes them a trusted long-term security partner."
  },
  {
    company: "Teqnoor",
    location: "United Kingdom",
    service: "Website Security Audit",
    industry: "Website Security Audit",
    logo: "/technology/teqnoor.png",
    quote:
      "Netcradus provided a thorough and professional security audit of our website. Their technical expertise, attention to detail, and practical recommendations helped us better understand and strengthen our security posture."
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 80 : -80,
    opacity: 0
  })
};

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleDotClick = (idx) => {
    setDirection(idx > currentIndex ? 1 : -1);
    setCurrentIndex(idx);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5500);
    return () => clearInterval(timer);
  }, [currentIndex, isHovered]);

  return (
    <section className="relative overflow-hidden bg-[#07070b] py-24 border-t border-white/10">
      {/* Subtle radial ambient background light */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,76,140,0.06),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(249,131,46,0.06),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#13131c] border border-white/10 text-orange-400 font-mono text-xs uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Client Proof</span>
            </div>

            <h2 className="font-sora font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-6">
              Trusted by <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4c8c] to-[#f9832e]">
                Security Leaders
              </span>
            </h2>

            <p className="font-sans text-gray-400 text-base sm:text-lg leading-relaxed mb-8">
              Discover how global organizations rely on Netcradus for 24/7 SOC defense, automated threat containment, and zero-trust resilience.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-300 font-sans text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>99.9% Client Satisfaction & Retention</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 font-sans text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Contractually Backed &lt; 15 Min SLA</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 font-sans text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Undetected Critical Incidents</span>
              </div>
            </div>
          </div>

          {/* Right Column Testimonial Card & Controls */}
          <div className="lg:col-span-7 space-y-8">
            <div
              className="relative w-full min-h-[300px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.25 }
                  }}
                  className="w-full"
                >
                  <div className="bg-[#13131c] border border-white/10 rounded-2xl p-8 sm:p-10 relative overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col justify-between min-h-[300px] group hover:border-orange-500/40 transition-colors">
                    {/* Background accent glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#ec4c8c]/10 to-[#f9832e]/10 blur-2xl rounded-full pointer-events-none" />

                    <Quote className="absolute top-6 right-8 text-orange-500/20 w-14 h-14 pointer-events-none" />

                    <div>
                      {/* Rating Stars */}
                      {TESTIMONIALS_DATA[currentIndex].rating ? (
                        <div className="flex items-center gap-1 mb-6">
                          {Array.from({ length: TESTIMONIALS_DATA[currentIndex].rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      ) : null}

                      {/* Quote Text */}
                      <p className="font-sans text-white text-base sm:text-lg lg:text-xl font-normal leading-relaxed italic relative z-10 mb-8">
                        "{TESTIMONIALS_DATA[currentIndex].quote}"
                      </p>
                    </div>

                    {/* Author & Logo Footer */}
                    <div className="relative z-10 border-t border-white/10 pt-6 flex items-center justify-between gap-4">
                      <div className="flex flex-col min-w-0">
                        <h4 className="font-sora font-bold text-xl text-white tracking-tight">
                          {TESTIMONIALS_DATA[currentIndex].company}
                        </h4>
                        <p className="font-mono text-xs text-orange-400 uppercase tracking-wider mt-0.5">
                          {TESTIMONIALS_DATA[currentIndex].service || TESTIMONIALS_DATA[currentIndex].industry}
                          {TESTIMONIALS_DATA[currentIndex].location ? ` • ${TESTIMONIALS_DATA[currentIndex].location}` : ""}
                        </p>
                      </div>

                      {TESTIMONIALS_DATA[currentIndex].logo && (
                        <div className="bg-white p-3 rounded-xl border border-white/20 shadow-md flex items-center justify-center h-14 w-auto min-w-[110px] max-w-[160px] shrink-0">
                          <img
                            src={TESTIMONIALS_DATA[currentIndex].logo}
                            alt={`${TESTIMONIALS_DATA[currentIndex].company} logo`}
                            className="max-h-9 w-auto object-contain"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-2 max-w-sm mx-auto sm:mx-0">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-[#1c1c2b] border border-white/10 hover:border-orange-500 text-white hover:text-orange-400 flex items-center justify-center transition-all hover:scale-105"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleDotClick(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-gradient-to-r from-[#ec4c8c] to-[#f9832e] w-2.5 shadow-[0_0_10px_rgba(249,131,46,0.6)]"
                        : "bg-white/20 hover:bg-white/40 w-2.5"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-[#1c1c2b] border border-white/10 hover:border-orange-500 text-white hover:text-orange-400 flex items-center justify-center transition-all hover:scale-105"
                aria-label="Next Testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Client Logos Strip */}
        <div className="mt-16 pt-12 border-t border-white/10 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#FF6B00] bg-[#FF6B00]/10 border border-[#FF6B00]/30 px-5 py-2 rounded-full mb-10 shadow-[0_0_15px_rgba(255,107,0,0.15)]">
            <Sparkles className="w-4 h-4 text-[#FF6B00]" />
            <span>Securing Infrastructure Across Industries</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 place-items-center">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="w-full h-24 bg-white border border-gray-200 rounded-2xl p-4 flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#FF6B00] group"
              >
                <img
                  src={logo}
                  alt={`Client logo ${idx + 1}`}
                  className="max-h-14 max-w-[85%] w-full h-full object-contain transition-all duration-300 group-hover:scale-105"
                  style={{ filter: "none", opacity: 1 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}