import React, { useRef } from "react";
import { motion } from "framer-motion";
import {
  Fingerprint,
  UserCog2,
  Building2,
  FolderHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/* 16:9 working canvas — every SVG coordinate and every percentage-positioned
   HTML card is derived from this so lines and cards always line up. */
const CANVAS_W = 100;
const CANVAS_H = 56.25;

/* Ecosystem hub sits left-of-center so the hospital campus has room
   to breathe in the lower-right, exactly like the reference framing. */
const HUB = { x: 33, y: 25 };
const HOSPITAL_ENTRY = { x: 63, y: 33 }; // where the "power line" meets the campus

const NODES = [
  { key: "abha", label: "ABHA ID", icon: Fingerprint, angle: -158, radius: 16.5 },
  { key: "hpr", label: "HPR", icon: UserCog2, angle: -96, radius: 16.5 },
  { key: "hfr", label: "HFR", icon: Building2, angle: -30, radius: 17.5 },
  { key: "records", label: "Health Records", icon: FolderHeart, angle: 118, radius: 17.5 },
  { key: "apis", label: "Secure APIs", icon: ShieldCheck, angle: 196, radius: 16.5 },
];

const point = (angleDeg, radius, cx = HUB.x, cy = HUB.y) => {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
};

const toPercent = ({ x, y }) => ({
  left: `${(x / CANVAS_W) * 100}%`,
  top: `${(y / CANVAS_H) * 100}%`,
});

/* Floating ambient particles, scattered across the whole scene */
const Particles = ({ count = 26 }) => {
  const dots = useRef(
    Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2.2 + 0.8,
      dur: Math.random() * 7 + 6,
      delay: Math.random() * 5,
    }))
  ).current;
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-sky-300/50"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size }}
          animate={{ y: [0, -14, 0], opacity: [0.1, 0.75, 0.1] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

/* Lit window grid for the hospital towers */
const WindowGrid = ({ x, y, cols, rows, cellW, cellH, gap, seedOffset = 0 }) => {
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const lit = (r * cols + c + seedOffset) % 5 !== 0;
      cells.push(
        <rect
          key={`${r}-${c}`}
          x={x + c * (cellW + gap)}
          y={y + r * (cellH + gap)}
          width={cellW}
          height={cellH}
          fill={lit ? "#7dd3fc" : "#0e2340"}
          opacity={lit ? 0.85 : 0.5}
        />
      );
    }
  }
  return <>{cells}</>;
};

const AbdmEcosystemVisual = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto w-full max-w-[760px] aspect-video overflow-hidden rounded-[28px] border border-white/10 bg-[#050D1C] shadow-[0_40px_110px_-28px_rgba(56,189,248,0.4)]"
    >
      {/* ambient color wash */}
      <div className="pointer-events-none absolute -left-12 top-0 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-80 rounded-full bg-orange-500/10 blur-3xl" />
      <Particles />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#050B18" />
            <stop offset="55%" stopColor="#081227" />
            <stop offset="100%" stopColor="#0B1B36" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
          <linearGradient id="powerLineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#7dd3fc" />
          </linearGradient>
          <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hospitalGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
          <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
            <path d="M4 0 L0 0 0 4" fill="none" stroke="#1e3a5f" strokeWidth="0.08" />
          </pattern>
        </defs>

        {/* sky + digital grid */}
        <rect x="0" y="0" width={CANVAS_W} height={CANVAS_H} fill="url(#skyGrad)" />
        <rect x="0" y="0" width={CANVAS_W} height={CANVAS_H} fill="url(#grid)" opacity="0.5" />

        <circle cx="76" cy="36" r="26" fill="url(#hospitalGlow)" />

        <g opacity="0.98">
          {/* ground reflection */}
          <rect x="46" y="52" width="54" height="4.25" fill="#0A182E" />
          <rect x="46" y="52" width="54" height="1.2" fill="#38bdf8" opacity="0.18" />

          {/* wide lower wing */}
          <rect x="50" y="38" width="50" height="14" fill="#0B1B36" stroke="#1d4d78" strokeWidth="0.15" />
          <rect x="50" y="38" width="50" height="0.35" fill="#38bdf8" opacity="0.55" />
          <WindowGrid x={52.5} y={40.5} cols={11} rows={2} cellW={1.6} cellH={1.5} gap={0.7} seedOffset={2} />

          {/* entrance canopy */}
          <rect x="58" y="45.5" width="16" height="1" fill="#123a63" />
          <rect x="58" y="45.5" width="16" height="0.25" fill="#38bdf8" opacity="0.7" />
          <rect x="65.2" y="46.5" width="1.6" height="5.5" fill="#0e2340" />

          {/* mid tower */}
          <rect x="58" y="16" width="20" height="22" fill="#0C1F3D" stroke="#1d4d78" strokeWidth="0.15" />
          <rect x="58" y="16" width="20" height="0.35" fill="#38bdf8" opacity="0.6" />
          <WindowGrid x={60} y={18} cols={8} rows={9} cellW={1.5} cellH={1.4} gap={0.55} seedOffset={0} />

          {/* main tall tower */}
          <rect x="66" y="6" width="12" height="32" fill="#0E2444" stroke="#2a6398" strokeWidth="0.18" />
          <rect x="66" y="6" width="12" height="0.35" fill="#7dd3fc" opacity="0.8" />
          <WindowGrid x={67.4} y={8} cols={5} rows={13} cellW={1.5} cellH={1.35} gap={0.5} seedOffset={1} />

          {/* medical cross on main tower */}
          <rect x="71" y="12" width="4" height="1" fill="#7dd3fc" />
          <rect x="72.5" y="10.5" width="1" height="4" fill="#7dd3fc" />

          {/* rooftop beacon */}
          <rect x="71.6" y="3.4" width="0.8" height="2.6" fill="#38bdf8" />
          <motion.circle
            cx="72"
            cy="3"
            r="0.7"
            fill="#fb923c"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* right wing */}
          <rect x="80" y="24" width="18" height="14" fill="#0B1B36" stroke="#1d4d78" strokeWidth="0.15" />
          <WindowGrid x={81.5} y={26} cols={7} rows={5} cellW={1.4} cellH={1.3} gap={0.5} seedOffset={3} />

          {/* neon outline accents */}
          <path
            d="M50 52 H100 M58 38 H80 M66 16 H78 M66 6 V38 M78 6 V38"
            fill="none"
            stroke="#38bdf8"
            strokeOpacity="0.28"
            strokeWidth="0.18"
          />
        </g>

        {[16.5, 22, 28].map((r, i) => (
          <circle
            key={r}
            cx={HUB.x}
            cy={HUB.y}
            r={r}
            fill="none"
            stroke="#38bdf8"
            strokeOpacity={0.22 - i * 0.05}
            strokeWidth="0.25"
            strokeDasharray="0.6 1.6"
          />
        ))}
        <circle cx={HUB.x} cy={HUB.y} r="19" fill="url(#hubGlow)" />

        {/* hub -> node lines */}
        {NODES.map((n) => {
          const p = point(n.angle, n.radius);
          return (
            <motion.line
              key={n.key}
              x1={HUB.x}
              y1={HUB.y}
              x2={p.x}
              y2={p.y}
              stroke="url(#lineGrad)"
              strokeWidth="0.28"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3 }}
            />
          );
        })}

        {/* hub -> hospital "power" line — shows ABDM feeding the campus */}
        <motion.path
          d={`M ${HUB.x + 16} ${HUB.y + 3} C ${HUB.x + 26} ${HUB.y + 6}, ${HOSPITAL_ENTRY.x - 10} ${HOSPITAL_ENTRY.y - 2}, ${HOSPITAL_ENTRY.x} ${HOSPITAL_ENTRY.y}`}
          fill="none"
          stroke="url(#powerLineGrad)"
          strokeWidth="0.45"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true }}
          transition={{ duration: 1.3, delay: 0.5 }}
        />

        {/* traveling energy packets to each node */}
        {NODES.map((n, i) => {
          const p = point(n.angle, n.radius);
          return (
            <motion.circle
              key={`packet-${n.key}`}
              r="0.55"
              fill="#7dd3fc"
              animate={{ cx: [HUB.x, p.x], cy: [HUB.y, p.y], opacity: [0, 1, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
            />
          );
        })}

        {/* traveling packet into the hospital */}
        <motion.circle
          r="0.65"
          fill="#fb923c"
          animate={{
            cx: [HUB.x + 16, HOSPITAL_ENTRY.x],
            cy: [HUB.y + 3, HOSPITAL_ENTRY.y],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        />
      </svg>

      {/* registry node cards */}
      {NODES.map((n, i) => {
        const pos = toPercent(point(n.angle, n.radius));
        const Icon = n.icon;
        return (
          <motion.div
            key={n.key}
            className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
            style={pos}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.25 }}
          >
            <div className="flex flex-col items-center gap-1.5 rounded-xl border border-sky-400/25 bg-white/[0.07] px-3 py-2.5 backdrop-blur-md shadow-[0_10px_30px_-12px_rgba(56,189,248,0.5)]">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-white">
                <Icon size={13} />
              </div>
              <span className="whitespace-nowrap text-[9.5px] font-bold text-sky-100">{n.label}</span>
            </div>
          </motion.div>
        );
      })}

      {/* central glowing ABDM hub */}
      <motion.div
        className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
        style={toPercent(HUB)}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-[#0B1B3D] to-[#132A5C] text-center ring-1 ring-sky-400/40 shadow-[0_0_60px_rgba(56,189,248,0.6)] sm:h-28 sm:w-28">
          <Sparkles size={18} className="text-orange-400" />
          <span className="mt-1 text-[13px] font-black tracking-tight text-white">ABDM</span>
          <span className="mt-0.5 max-w-[70px] text-[7px] leading-tight text-sky-200">
            Ayushman Bharat Digital Mission
          </span>
        </div>
      </motion.div>

      {/* small "connected" badge over the hospital entrance */}
      <motion.div
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
        style={toPercent(HOSPITAL_ENTRY)}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-1.5 rounded-full border border-sky-300/30 bg-white/[0.08] px-2.5 py-1 backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
          <span className="text-[8px] font-bold text-sky-100">ABDM-Connected</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AbdmEcosystemVisual;