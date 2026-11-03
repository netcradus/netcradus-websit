import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Globe3D from "./Globe3D";
import {
  Shield,
  Radar,
  Lock,
  Activity,
  ShieldCheck,
  Server,
  Bell,
  Users,
  Cpu,
  ShieldAlert,
  Globe,
  BrainCircuit,
} from "lucide-react";

const FEATURES_DATA = [
  // Left Side (from top to bottom)
  { title: "24/7 SOC & SIEM Monitoring", icon: Shield, angle: -135, side: "left" },
  { title: "Global Business Security Expertise", icon: Globe, angle: -155, side: "left" },
  { title: "AI-Powered Security Operations", icon: BrainCircuit, angle: -175, side: "left" },
  { title: "VAPT & Vulnerability Assessment", icon: ShieldCheck, angle: 165, side: "left" },
  { title: "Protection Against Modern Cyber Threats", icon: ShieldAlert, angle: 145, side: "left" },
  { title: "Real-Time Threat Monitoring", icon: Cpu, angle: 125, side: "left" },
  
  // Right Side (from top to bottom)
  { title: "Advanced Threat Detection", icon: Radar, angle: -45, side: "right" },
  { title: "Enterprise-Grade Cybersecurity Solutions", icon: Lock, angle: -25, side: "right" },
  { title: "Proactive Cyber Defense Approach", icon: Activity, angle: -5, side: "right" },
  { title: "End-to-End Digital Protection", icon: Shield, angle: 15, side: "right" },
  { title: "Cloud & Network Security Solutions", icon: Server, angle: 35, side: "right" },
  { title: "Fast Incident Response & Risk Management", icon: Bell, angle: 55, side: "right" },
  
  // Bottom Center
  { title: "Trusted Partner for Digital Resilience", icon: Users, angle: 90, side: "bottom" },
];

const BackgroundParticles = () => {
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 12 + 8,
    delay: Math.random() * -20,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#FF6B00]/15"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });
  const [orbitRadius, setOrbitRadius] = useState(440);
  const [coreDiameter, setCoreDiameter] = useState(400);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // Responsive adjustments for the Orbit radius & Core size to prevent overflow
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 1024) {
        setIsMobileOrTablet(true);
      } else {
        setIsMobileOrTablet(false);
      }

      if (w < 640) {
        setOrbitRadius(250);
        setCoreDiameter(230);
      } else if (w < 1024) {
        setOrbitRadius(320);
        setCoreDiameter(280);
      } else if (w < 1440) {
        setOrbitRadius(390);
        setCoreDiameter(340);
      } else {
        setOrbitRadius(440);
        setCoreDiameter(400);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle Mouse movement for subtle Parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current || isMobileOrTablet) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMouseOffset({ x: x * 25, y: y * 25 });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMobileOrTablet]);

  const coreRadius = coreDiameter / 2;

  // Custom visual CSS rules
  const customStyles = `
    @keyframes chooseFloat1 {
      0%, 100% { transform: translate(-50%, -50%) translateY(0); }
      50% { transform: translate(-50%, -50%) translateY(-6px); }
    }
    @keyframes chooseFloat2 {
      0%, 100% { transform: translate(-50%, -50%) translateY(0); }
      50% { transform: translate(-50%, -50%) translateY(-4px); }
    }
    .hover-card-sweep:hover {
      box-shadow: 0 0 25px rgba(255, 107, 0, 0.35);
      border-color: rgba(255, 107, 0, 0.5);
      background: rgba(0, 0, 0, 0.7);
    }
  `;

  const getCardLayoutProps = (feat) => {
    let r = orbitRadius;
    if (feat.side === "bottom") {
      r = orbitRadius + 50;
    }
    const angleRad = (feat.angle * Math.PI) / 180;
    const x = Math.cos(angleRad) * r;
    const y = Math.sin(angleRad) * r;

    const centerX = 600;
    const centerY = 600;

    const startX = centerX + Math.cos(angleRad) * coreRadius;
    const startY = centerY + Math.sin(angleRad) * coreRadius;

    let dotX = centerX + x;
    let dotY = centerY + y;

    if (feat.side === "left") {
      dotX += 130;
    } else if (feat.side === "right") {
      dotX -= 130;
    } else if (feat.side === "bottom") {
      dotY -= 40;
    }

    return { x, y, startX, startY, dotX, dotY };
  };

  const getWrapperHeight = () => {
    if (orbitRadius === 250) return 414;
    if (orbitRadius === 320) return 512;
    if (orbitRadius === 390) return 610;
    return 682;
  };

  return (
    <section
      id="why-netcradus"
      ref={containerRef}
      className="relative w-full pt-[80px] sm:pt-[100px] lg:pt-[140px] pb-[80px] sm:pb-[100px] lg:pb-[180px] overflow-hidden flex flex-col items-center justify-start z-10 select-none responsive-section-padding"
      style={{
        background: "radial-gradient(circle at 50% 50%, #111827 0%, #070B13 60%, #030509 100%)",
      }}
    >
      <style>{customStyles}</style>
      <BackgroundParticles />

      {/* Ambient background glowing spots */}
      <div className="absolute top-[15%] left-[15%] h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-[#3B82F6]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[15%] h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-full bg-[#FF6B00]/4 blur-[130px] pointer-events-none" />

      {/* Standalone Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 text-center w-full max-w-5xl mx-auto px-4"
      >
        <h2 className="relative font-bold tracking-tight uppercase select-none leading-none text-3xl sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[72px] font-sans">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[350px] h-[80px] bg-accent/20 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none z-0" />
          
          <span className="relative z-10 text-white mr-3 sm:mr-4">
            Why Choose
          </span>{" "}
          <span className="relative z-10 bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent filter drop-shadow-[0_0_15px_rgba(255,107,0,0.25)]">
            Netcradus
          </span>
        </h2>

        <p className="mt-5 text-sm sm:text-base font-normal text-gray-300/90 max-w-[640px] mx-auto leading-relaxed select-text">
          A managed security partner built for organizations that need enterprise-grade defense, round-the-clock visibility, and business-aware execution.
        </p>
      </motion.div>

      {/* DESKTOP LAYOUT: Radial Orbit */}
      {!isMobileOrTablet ? (
        <div
          className="relative w-full overflow-visible pointer-events-none mt-[50px] md:mt-[60px]"
          style={{
            transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
            height: `${getWrapperHeight()}px`,
          }}
        >
          {/* SVG connection lines */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] pointer-events-none z-10 flex items-center justify-center overflow-visible">
            <svg className="w-full h-full overflow-visible">
              {Array.from({ length: 36 }).map((_, i) => {
                const angleDeg = i * (360 / 36);
                const angleRad = (angleDeg * Math.PI) / 180;
                const centerX = 600;
                const centerY = 600;
                const rayLength = 15 + (i % 3 === 0 ? 15 : 0) + (i % 2 === 0 ? 5 : 0);
                
                const startX = centerX + Math.cos(angleRad) * coreRadius;
                const startY = centerY + Math.sin(angleRad) * coreRadius;
                const endX = centerX + Math.cos(angleRad) * (coreRadius + rayLength);
                const endY = centerY + Math.sin(angleRad) * (coreRadius + rayLength);

                const showDot = i % 4 === 0;

                return (
                  <g key={`decorative-ray-${i}`}>
                    <line
                      x1={startX}
                      y1={startY}
                      x2={endX}
                      y2={endY}
                      stroke="rgba(255, 107, 0, 0.35)"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    {showDot && (
                      <circle
                        cx={endX}
                        cy={endY}
                        r="1.2"
                        fill="#FF6B00"
                        opacity="0.85"
                        style={{ filter: "drop-shadow(0 0 2px #FF6B00)" }}
                      />
                    )}
                  </g>
                );
              })}

              {FEATURES_DATA.map((feat, idx) => {
                const { startX, startY, dotX, dotY } = getCardLayoutProps(feat);

                return (
                  <g key={idx}>
                    <line
                      x1={startX}
                      y1={startY}
                      x2={dotX}
                      y2={dotY}
                      stroke="rgba(255, 107, 0, 0.22)"
                      strokeWidth="1.2"
                      strokeDasharray="4 4"
                    />
                    <circle r="2.5" fill="#FF6B00" style={{ filter: "drop-shadow(0 0 4px #FF6B00)" }}>
                      <animate
                        attributeName="cx"
                        from={startX}
                        to={dotX}
                        dur="3.2s"
                        begin={`${idx * 0.25}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="cy"
                        from={startY}
                        to={dotY}
                        dur="3.2s"
                        begin={`${idx * 0.25}s`}
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.1;0.9;1"
                        dur="3.2s"
                        begin={`${idx * 0.25}s`}
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle
                      cx={dotX}
                      cy={dotY}
                      r="4"
                      fill="#FF6B00"
                      style={{ filter: "drop-shadow(0 0 6px #FF6B00)" }}
                    />
                  </g>
                );
              })}
            </svg>
          </div>

          {/* CENTER: Pure 3D Rotating Network Globe */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-auto">
            {/* Outer Radial Glow Aura */}
            <div
              className="absolute rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,26,0.35),rgba(255,107,0,0.15),transparent_70%)] blur-3xl pointer-events-none animate-pulse"
              style={{
                width: `${coreDiameter * 1.4}px`,
                height: `${coreDiameter * 1.4}px`,
              }}
            />

            {/* 3D Rotating Globe Canvas */}
            <Globe3D size={coreDiameter * 1.3} />
          </div>

          {/* Orbiting feature glass cards */}
          {FEATURES_DATA.map((feat, idx) => {
            const { x, y } = getCardLayoutProps(feat);
            const Icon = feat.icon;
            const floatDelay = `${idx * 0.4}s`;
            const floatAnim = idx % 2 === 0 ? "chooseFloat1" : "chooseFloat2";

            return (
              <div
                key={feat.title}
                className="absolute z-20 overflow-visible pointer-events-auto"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  animation: `${floatAnim} 6.5s ease-in-out infinite`,
                  animationDelay: floatDelay,
                }}
              >
                <div className="hover-card-sweep relative flex items-center gap-[18px] backdrop-blur-xl border border-white/8 bg-black/55 shadow-[0_15px_35px_rgba(0,0,0,0.45)] rounded-[18px] pl-[16px] pr-[16px] py-[14px] select-none cursor-pointer transition-all duration-300 w-[215px] sm:w-[240px] hover:border-[#FF6B00]/50 hover:shadow-[0_0_25px_rgba(255,107,0,0.35)]">
                  <div className="h-9 w-9 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/25 text-[#FF6B00] flex items-center justify-center flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-white text-left leading-snug">
                    {feat.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* MOBILE & TABLET RESPONSIVE LAYOUT: Clean 3D Globe + Grid */
        <div className="w-full max-w-4xl mx-auto mt-8 flex flex-col items-center gap-8 relative z-20 px-4">
          {/* Center 3D Globe */}
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center">
            {/* Outer Radial Glow */}
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,26,0.35),rgba(255,107,0,0.15),transparent_70%)] blur-2xl animate-pulse" />

            <Globe3D size={290} />
          </div>

          {/* Cards Grid: 1 col on mobile, 2 cols on tablet */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-4">
            {FEATURES_DATA.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="flex items-center gap-4 backdrop-blur-xl border border-white/10 bg-black/60 shadow-lg rounded-2xl p-4 hover:border-[#FF6B00]/50 transition-all"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] flex items-center justify-center flex-shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white text-left leading-snug">
                    {feat.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
