import React from "react";
import { motion } from "framer-motion";
import "./AcisOrbit.css";

const OrbitRing = ({ size, duration, reverse = false, children, className = "" }) => (
  <motion.div
    className={`orbit-ring ${className}`}
    style={{ width: size, height: size }}
    animate={{ rotate: reverse ? -360 : 360 }}
    transition={{ duration, repeat: Infinity, ease: "linear" }}
  >
    {children}
  </motion.div>
);

const OrbitDot = ({ angle, radius, tone = "primary" }) => {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className={`orbit-dot tone-${tone}`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    />
  );
};

const StaticBadge = ({ label, angle, radius, tone = "primary" }) => {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <div
      className={`static-badge tone-${tone}`}
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
      }}
    >
      <span className="mono">{label}</span>
    </div>
  );
};

export default function AcisOrbit() {
  return (
    <div className="acis-orbit-container">
      <div className="orbit-grid" />
      <div className="orbit-ambient-glow" />

      {/* Core */}
      <div className="orbit-core">
        {/* Central AI Node */}
        <div className="absolute w-24 h-24 rounded-full bg-accent/20 blur-2xl animate-pulse" />
        <div className="absolute w-12 h-12 rounded-full border border-accent/40 flex items-center justify-center animate-spin-slow">
          <div className="w-6 h-6 rounded-full bg-accent-bright animate-ping opacity-40" />
        </div>
        <motion.div
          className="core-pulse bg-accent"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <div className="core-sphere bg-crimson-deep shadow-red-glow">
          <div className="core-text mono text-white">ACIS CORE</div>
        </div>
      </div>

      <StaticBadge label="THREAT DETECT" angle={-90} radius={220} tone="crimson" />
      <StaticBadge label="AI ENGINE" angle={-25} radius={220} tone="crimson" />
      <StaticBadge label="AUTO HEAL" angle={25} radius={220} tone="crimson" />
      <StaticBadge label="ZERO TRUST" angle={90} radius={220} tone="crimson" />
      <StaticBadge label="INTEL FEED" angle={155} radius={220} tone="crimson" />
      <StaticBadge label="MESH NET" angle={205} radius={220} tone="crimson" />

      <OrbitRing size={180} duration={18} className="ring-inner border-crimson/20">
        <OrbitDot angle={320} radius={90} tone="crimson" />
      </OrbitRing>

      <OrbitRing size={300} duration={28} reverse className="ring-middle border-crimson/15">
        <OrbitDot angle={330} radius={150} tone="crimson" />
        <OrbitDot angle={150} radius={150} tone="crimson-bright" />
      </OrbitRing>

      <OrbitRing size={420} duration={40} className="ring-outer border-crimson/10">
        <OrbitDot angle={210} radius={210} tone="crimson" />
      </OrbitRing>
    </div>
  );
}