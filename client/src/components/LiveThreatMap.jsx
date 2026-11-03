/**
 * LiveThreatMap.jsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Live cyber-threat intelligence map — fully adapted to the project's global
 * CSS variables (globals.css) with complete light & dark mode support.
 *
 * Theme detection: watches `data-theme` on <html> / <body> — matches your
 * existing ThemeProvider pattern exactly.
 *
 * Dependencies:
 *   npm install react-simple-maps
 *
 * Usage:
 *   import LiveThreatMap from "./LiveThreatMap";
 *   <LiveThreatMap />
 * ─────────────────────────────────────────────────────────────────────────────
 */

import { useState, useEffect, useRef, useCallback } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from "react-simple-maps";

// ─── Geo data ────────────────────────────────────────────────────────────────
const GEO_URL = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

// ─── City nodes [longitude, latitude] ────────────────────────────────────────
const NODES = {
  "New York":     [-74.006,   40.7128],
  "Austin":       [-97.7431,  30.2672],
  "Toronto":      [-79.3832,  43.6532],
  "London":       [ -0.1278,  51.5074],
  "Paris":        [  2.3522,  48.8566],
  "Frankfurt":    [  8.6821,  50.1109],
  "Moscow":       [ 37.6173,  55.7558],
  "Tehran":       [ 51.3890,  35.6892],
  "Mumbai":       [ 72.8777,  19.0760],
  "Beijing":      [116.4074,  39.9042],
  "Seoul":        [127.7669,  35.9078],
  "Tokyo":        [139.6917,  35.6895],
  "Singapore":    [103.8198,   1.3521],
  "Sydney":       [151.2093, -33.8688],
  "São Paulo":    [-46.6333, -23.5505],
  "Lagos":        [  3.3792,   6.5244],
  "Johannesburg": [ 28.0473, -26.2041],
  "Riyadh":       [ 46.6753,  24.6877],
};
const NODE_NAMES = Object.keys(NODES);

// ─── Attack types ─────────────────────────────────────────────────────────────
const ATTACK_TYPES = ["DDoS", "Ransomware", "Phishing", "SQLi", "Zero-day", "MitM", "Botnet"];

// ─── Severity — explicit colors for both themes ───────────────────────────────
const SEVERITY_CONFIG = {
  CRITICAL: {
    lineColor:   "#ef4444",
    darkBg:      "rgba(127,29,29,0.55)",
    lightBg:     "rgba(254,226,226,0.9)",
    darkBorder:  "rgba(185,28,28,0.7)",
    lightBorder: "rgba(239,68,68,0.4)",
    darkText:    "#fca5a5",
    lightText:   "#b91c1c",
  },
  HIGH: {
    lineColor:   "#f97316",
    darkBg:      "rgba(124,45,18,0.55)",
    lightBg:     "rgba(255,237,213,0.9)",
    darkBorder:  "rgba(194,65,12,0.7)",
    lightBorder: "rgba(249,115,22,0.4)",
    darkText:    "#fdba74",
    lightText:   "#c2410c",
  },
  MEDIUM: {
    lineColor:   "#3b82f6",
    darkBg:      "rgba(30,58,138,0.55)",
    lightBg:     "rgba(219,234,254,0.9)",
    darkBorder:  "rgba(29,78,216,0.7)",
    lightBorder: "rgba(59,130,246,0.4)",
    darkText:    "#93c5fd",
    lightText:   "#1d4ed8",
  },
};

const SEVERITY_KEYS    = ["CRITICAL", "HIGH", "MEDIUM"];
const SEVERITY_WEIGHTS = [0.2, 0.45, 0.35];

// ─── Per-theme palette for map / UI ──────────────────────────────────────────
const T = {
  dark: {
    // map geography
    geoFill:       "#1c2333",
    geoStroke:     "#2d3d52",
    geoHover:      "#253045",
    // panels / cards
    cardBg:        "rgba(12,12,20,0.75)",
    cardBorder:    "rgba(255,255,255,0.08)",
    panelBg:       "rgba(18,18,28,0.8)",
    panelBorder:   "rgba(255,255,255,0.07)",
    panelLabel:    "#475569",
    panelText:     "#cbd5e1",
    panelSub:      "#475569",
    typeBarTrack:  "rgba(255,255,255,0.07)",
    emptyText:     "#334155",
    // stat chips
    chipBg:        "rgba(20,20,32,0.85)",
    chipBorder:    "rgba(255,255,255,0.07)",
    chipLabel:     "#64748b",
    // log bar
    logBg:         "rgba(10,10,18,0.6)",
    logBorder:     "rgba(255,255,255,0.06)",
    logLabel:      "#475569",
    // hud / legend / labels
    hudText:       "rgba(148,163,184,0.6)",
    legendText:    "#64748b",
    markerLabel:   "#4b6280",
    nodeDefault:   "#22d87a",
    // heading
    headingColor:  "#ffffff",
    accentHeading: "#f97316",   // use var(--color-accent-bright) feel
    liveDot:       "#4ade80",
    liveLabel:     "#4ade80",
    descText:      "#64748b",
    gridColor:     "#22d87a",
    gridOpacity:   "0.035",
  },
  light: {
    geoFill:       "#d4dde8",
    geoStroke:     "#a8b8c8",
    geoHover:      "#bfccd8",
    cardBg:        "rgba(255,255,255,0.88)",
    cardBorder:    "rgba(0,0,0,0.09)",
    panelBg:       "rgba(255,255,255,0.92)",
    panelBorder:   "rgba(0,0,0,0.08)",
    panelLabel:    "#94a3b8",
    panelText:     "#1e293b",
    panelSub:      "#94a3b8",
    typeBarTrack:  "rgba(0,0,0,0.07)",
    emptyText:     "#cbd5e1",
    chipBg:        "rgba(255,255,255,0.95)",
    chipBorder:    "rgba(0,0,0,0.09)",
    chipLabel:     "#94a3b8",
    logBg:         "rgba(240,236,230,0.8)",
    logBorder:     "rgba(0,0,0,0.07)",
    logLabel:      "#94a3b8",
    hudText:       "rgba(100,116,139,0.75)",
    legendText:    "#94a3b8",
    markerLabel:   "#94a3b8",
    nodeDefault:   "#059669",
    headingColor:  "#0f0f0f",
    accentHeading: "#e8400a",
    liveDot:       "#059669",
    liveLabel:     "#059669",
    descText:      "#6b7280",
    gridColor:     "#e8400a",
    gridOpacity:   "0.025",
  },
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function pickSeverity() {
  const r = Math.random();
  let cum = 0;
  for (let i = 0; i < SEVERITY_KEYS.length; i++) {
    cum += SEVERITY_WEIGHTS[i];
    if (r < cum) return SEVERITY_KEYS[i];
  }
  return "MEDIUM";
}
function pickRandom(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function fmtTime(d) { return d.toLocaleTimeString("en-US", { hour12: false }); }

let atkIdCounter = 0;
function generateAttack() {
  const fromName = pickRandom(NODE_NAMES);
  let toName = pickRandom(NODE_NAMES);
  while (toName === fromName) toName = pickRandom(NODE_NAMES);
  const sev = pickSeverity();
  return {
    id: ++atkIdCounter,
    from: fromName,
    to: toName,
    fromCoords: NODES[fromName],
    toCoords:   NODES[toName],
    type:       pickRandom(ATTACK_TYPES),
    severity:   sev,
    ts:         new Date(),
  };
}

// ─── useTheme — observes data-theme on <html> or <body> ──────────────────────
function useTheme() {
  const getTheme = () =>
    document.documentElement.getAttribute("data-theme") ||
    document.body.getAttribute("data-theme") ||
    "dark";
  const [theme, setTheme] = useState(getTheme);
  useEffect(() => {
    const obs = new MutationObserver(() => setTheme(getTheme()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    obs.observe(document.body,            { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return theme;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function PulseDot({ color, r = 4 }) {
  return (
    <>
      <circle r={r} fill={color} opacity={0.95} />
      <circle r={r} fill="none" stroke={color} strokeWidth={1.5} opacity={0.5}>
        <animate attributeName="r"       values={`${r};${r + 7};${r}`} dur="2.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5"            dur="2.2s" repeatCount="indefinite" />
      </circle>
    </>
  );
}

function AttackArc({ attack }) {
  const cfg = SEVERITY_CONFIG[attack.severity];
  return (
    <Line
      from={attack.fromCoords}
      to={attack.toCoords}
      stroke={cfg.lineColor}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeDasharray="7 5"
      strokeOpacity={0.8}
    >
      <animate attributeName="stroke-dashoffset" from="120" to="0"       dur="1.6s" fill="freeze" />
      <animate attributeName="stroke-opacity"    values="0.85;0.25;0.85" dur="3.5s" repeatCount="indefinite" />
    </Line>
  );
}

function StatChip({ label, value, valueColor, palette }) {
  return (
    <div style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "8px 16px", borderRadius: 10, minWidth: 90,
      background: palette.chipBg,
      border: `1px solid ${palette.chipBorder}`,
      boxShadow: "var(--shadow-premium)",
    }}>
      <span style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.1em", color: palette.chipLabel, textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ fontSize: 18, fontWeight: 700, fontFamily: "monospace", marginTop: 2, color: valueColor }}>
        {value}
      </span>
    </div>
  );
}

function IncidentRow({ atk, isDark }) {
  const cfg    = SEVERITY_CONFIG[atk.severity];
  const bg     = isDark ? cfg.darkBg     : cfg.lightBg;
  const border = isDark ? cfg.darkBorder : cfg.lightBorder;
  const badge  = isDark ? cfg.darkText   : cfg.lightText;
  const body   = isDark ? "#cbd5e1"      : "#1e293b";
  const sub    = isDark ? "#475569"      : "#94a3b8";

  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: 8,
      padding: "7px 10px", borderRadius: 8,
      background: bg, border: `1px solid ${border}`,
      fontSize: 11, fontFamily: "monospace",
      animation: "fadeSlideIn 0.3s ease both",
    }}>
      <span style={{ fontWeight: 700, flexShrink: 0, color: badge }}>{atk.severity.slice(0,4)}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", color: body }}>
          {atk.type}: <span style={{ color: sub }}>{atk.from} → {atk.to}</span>
        </div>
        <div style={{ fontSize: 10, color: sub, marginTop: 1 }}>{fmtTime(atk.ts)}</div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function LiveThreatMap() {
  const theme  = useTheme();
  const isDark = theme !== "light";
  const p      = isDark ? T.dark : T.light;           // current palette

  const [attacks,          setAttacks]          = useState([]);
  const [stats,            setStats]            = useState({ total: 0, blocked: 0, ips: 847, perMin: 0 });
  const [attackTypeCounts, setAttackTypeCounts] = useState({});
  const [sourceCounts,     setSourceCounts]     = useState({});
  const intervalRef   = useRef(null);
  const atkThisWindow = useRef(0);

  const fireAttack = useCallback(() => {
    const atk = generateAttack();
    atkThisWindow.current += 1;
    setAttacks((prev)          => [atk, ...prev].slice(0, 40));
    setStats((s)               => ({ ...s, total: s.total + 1, blocked: s.blocked + 1, ips: Math.min(9999, s.ips + Math.floor(Math.random() * 3)) }));
    setAttackTypeCounts((prev) => ({ ...prev, [atk.type]: (prev[atk.type] || 0) + 1 }));
    setSourceCounts((prev)     => ({ ...prev, [atk.from]: (prev[atk.from] || 0) + 1 }));
  }, []);

  useEffect(() => {
    for (let i = 0; i < 5; i++) setTimeout(fireAttack, i * 350);
    const drip = () => {
      fireAttack();
      intervalRef.current = setTimeout(drip, 700 + Math.random() * 1300);
    };
    intervalRef.current = setTimeout(drip, 2000);
    return () => clearTimeout(intervalRef.current);
  }, [fireAttack]);

  useEffect(() => {
    const win = setInterval(() => {
      setStats((s) => ({ ...s, perMin: atkThisWindow.current * 6 }));
      atkThisWindow.current = 0;
    }, 10_000);
    return () => clearInterval(win);
  }, []);

  const visibleArcs   = attacks.slice(0, 12);
  const incidentLog   = attacks.slice(0, 10);
  const topSources    = Object.entries(sourceCounts).sort((a,b) => b[1]-a[1]).slice(0, 6);
  const totalAtks     = Math.max(stats.total, 1);
  const typeBreakdown = ATTACK_TYPES.map((name) => ({
    name,
    count: attackTypeCounts[name] || 0,
    pct:   Math.round(((attackTypeCounts[name] || 0) / totalAtks) * 100),
  })).sort((a,b) => b.count - a.count);

  const threatLevel = stats.perMin > 30 ? "CRITICAL" : stats.perMin > 15 ? "HIGH" : "ELEVATED";
  const threatColor = threatLevel === "CRITICAL" ? "#ef4444" : threatLevel === "HIGH" ? "#f97316" : "#eab308";

  // shared panel style
  const panel = {
    borderRadius: 16, padding: 16,
    background: p.panelBg,
    border: `1px solid ${p.panelBorder}`,
    boxShadow: "var(--shadow-premium)",
    backdropFilter: "blur(14px)",
    WebkitBackdropFilter: "blur(14px)",
  };

  return (
    <>
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes lthScanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .lth-scanline {
          pointer-events: none;
          position: absolute; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(
            to bottom,
            transparent,
            ${isDark ? "rgba(34,211,122,0.05)" : "rgba(232,64,10,0.04)"},
            transparent
          );
          animation: lthScanline 8s linear infinite;
          z-index: 1;
        }
      `}</style>

      <section
        id="threat-map"
        className="bg-premium-radial"
        style={{
          position: "relative",
          width: "100%",
          overflowX: "hidden",
          fontFamily: "monospace",
        }}
      >
        {/* Scan-line */}
        <div className="lth-scanline" />

        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          opacity: p.gridOpacity,
          backgroundImage: `linear-gradient(${p.gridColor} 1px, transparent 1px), linear-gradient(90deg, ${p.gridColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }} />

        {/* Glow blobs — use CSS variable for brand accent */}
        <div style={{ position:"absolute", top:"-10rem", left:"-10rem", width:500, height:500, borderRadius:"50%", background:"var(--color-accent)", opacity:0.05, filter:"blur(80px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-10rem", right:"-10rem", width:500, height:500, borderRadius:"50%", background:"var(--color-accent)", opacity:0.03, filter:"blur(80px)", pointerEvents:"none" }} />

        {/* ── Inner wrapper ── */}
        <div style={{ position:"relative", zIndex:10, maxWidth:1400, margin:"0 auto", padding:"0 24px" }}>

          {/* ── Header ── */}
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-between", gap:16, marginBottom:32 }}>
            <div>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                <span style={{ display:"inline-block", width:8, height:8, borderRadius:"50%", background: p.liveDot }} className="animate-pulse" />
                <span style={{ fontSize:11, letterSpacing:"0.1em", color: p.liveLabel, textTransform:"uppercase" }}>Live Feed</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-primary)", fontSize:"clamp(26px,4vw,46px)", fontWeight:700, letterSpacing:"-0.03em", lineHeight:1.1, color: p.headingColor, margin:0 }}>
                Global Threat{" "}
                <span style={{ color: p.accentHeading }}>Intelligence</span>
              </h2>
              <p style={{ fontFamily: "var(--font-primary)", color: p.descText, fontSize:13, fontWeight:400, marginTop:6, letterSpacing:"0.02em", marginBottom:0 }}>
                Real-time cyber attack visualization across global nodes
              </p>
            </div>

            {/* Stat chips */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
              <StatChip label="ATK / MIN"  value={stats.perMin}                  valueColor="#ef4444"   palette={p} />
              <StatChip label="BLOCKED"    value={stats.blocked.toLocaleString()} valueColor="#22c55e"   palette={p} />
              <StatChip label="ACTIVE IPs" value={stats.ips.toLocaleString()}     valueColor="#eab308"   palette={p} />
              <StatChip label="THREAT LVL" value={threatLevel}                    valueColor={threatColor} palette={p} />
            </div>
          </div>

          {/* ── Main layout (map + right panel) ── */}
          <div style={{ display:"flex", gap:16, flexWrap:"wrap", alignItems:"flex-start" }}>

            {/* ── Map card ── */}
            <div style={{
              flex:"1 1 540px", borderRadius:20, overflow:"hidden", position:"relative",
              background: p.cardBg,
              border: `1px solid ${p.cardBorder}`,
              boxShadow: "var(--shadow-premium)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}>
              {/* HUD overlay */}
              <div style={{
                position:"absolute", top:14, left:14, zIndex:20,
                fontSize:10, fontFamily:"monospace",
                color: p.hudText,
                lineHeight:1.7, textTransform:"uppercase", letterSpacing:"0.08em",
                pointerEvents:"none",
              }}>
                <div>Feed: Live Signal</div>
                <div>Source: Global Grid</div>
                <div>Total Events: {stats.total.toLocaleString()}</div>
              </div>

              {/* Corner brackets */}
              {[
                { style:{ top:0,    left:0   }, rot:"0deg"   },
                { style:{ top:0,    right:0  }, rot:"90deg"  },
                { style:{ bottom:0, right:0  }, rot:"180deg" },
                { style:{ bottom:0, left:0   }, rot:"270deg" },
              ].map((corner, i) => (
                <div key={i} style={{ position:"absolute", ...corner.style, width:20, height:20, zIndex:20, pointerEvents:"none", transform:`rotate(${corner.rot})` }}>
                  <svg viewBox="0 0 20 20" fill="none" style={{ width:"100%", height:"100%" }}>
                    <path d="M0 10 L0 0 L10 0" stroke="var(--color-accent)" strokeWidth="1.8" />
                  </svg>
                </div>
              ))}

              {/* The map */}
              <ComposableMap
                projection="geoEqualEarth"
                projectionConfig={{ scale: 165, center: [10, 15] }}
                style={{ width:"100%", height:750, background:"transparent", display:"block" }}
              >
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={p.geoFill}
                        stroke={p.geoStroke}
                        strokeWidth={0.5}
                        style={{
                          default: { outline:"none" },
                          hover:   { fill: p.geoHover, outline:"none", cursor:"default" },
                          pressed: { outline:"none" },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {/* Attack arcs */}
                {visibleArcs.map((atk) => (
                  <AttackArc key={atk.id} attack={atk} />
                ))}

                {/* City markers */}
                {NODE_NAMES.map((name) => {
                  const isSource = visibleArcs.some((a) => a.from === name);
                  const isTarget = visibleArcs.some((a) => a.to   === name);
                  const srcAtk   = isSource ? visibleArcs.find((a) => a.from === name) : null;
                  const color    = isSource
                    ? (SEVERITY_CONFIG[srcAtk?.severity]?.lineColor || "#f97316")
                    : isTarget ? "#ef4444" : p.nodeDefault;
                  return (
                    <Marker key={name} coordinates={NODES[name]}>
                      <PulseDot color={color} r={isSource || isTarget ? 5 : 3} />
                      <text
                        textAnchor="middle"
                        y={-10}
                        style={{ fontFamily:"monospace", fontSize:"8px", fill: p.markerLabel, pointerEvents:"none", userSelect:"none" }}
                      >
                        {name}
                      </text>
                    </Marker>
                  );
                })}
              </ComposableMap>

              {/* Legend */}
              <div style={{ position:"absolute", bottom:12, left:14, display:"flex", gap:14, fontSize:10, fontFamily:"monospace", color: p.legendText, pointerEvents:"none" }}>
                {[["#ef4444","Source"],["var(--color-accent)","Attack arc"],[p.nodeDefault,"Node"]].map(([c,l]) => (
                  <span key={l} style={{ display:"flex", alignItems:"center", gap:5 }}>
                    <span style={{ display:"inline-block", width:8, height:8, borderRadius:"50%", background:c, flexShrink:0 }} />
                    {l}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right panel ── */}
            <div style={{ width:260, display:"flex", flexDirection:"column", gap:12, flexShrink:0 }}>

              {/* Live incidents */}
              <div style={panel}>
                <div style={{ fontSize:10, letterSpacing:"0.1em", color: p.panelLabel, textTransform:"uppercase", marginBottom:10 }}>
                  Live Incidents
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:6, overflowY:"auto", maxHeight:210 }}>
                  {incidentLog.map((atk) => (
                    <IncidentRow key={atk.id} atk={atk} isDark={isDark} />
                  ))}
                  {incidentLog.length === 0 && (
                    <div style={{ color: p.emptyText, fontSize:12 }}>Waiting for events…</div>
                  )}
                </div>
              </div>

              {/* Attack vectors */}
              <div style={panel}>
                <div style={{ fontSize:10, letterSpacing:"0.1em", color: p.panelLabel, textTransform:"uppercase", marginBottom:12 }}>
                  Attack Vectors
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
                  {typeBreakdown.map((ty) => (
                    <div key={ty.name} style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <span style={{ fontSize:11, color: p.panelText, width:76, flexShrink:0, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
                        {ty.name}
                      </span>
                      <div style={{ flex:1, height:5, borderRadius:3, background: p.typeBarTrack, overflow:"hidden" }}>
                        <div style={{
                          height:"100%", borderRadius:3,
                          background: "var(--color-accent)",
                          width:`${ty.pct}%`,
                          transition:"width 0.7s ease",
                        }} />
                      </div>
                      <span style={{ fontSize:10, color: p.panelSub, width:22, textAlign:"right", flexShrink:0 }}>{ty.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top sources */}
              <div style={panel}>
                <div style={{ fontSize:10, letterSpacing:"0.1em", color: p.panelLabel, textTransform:"uppercase", marginBottom:12 }}>
                  Top Sources
                </div>
                <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                  {topSources.map(([city, count]) => (
                    <div key={city} style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                      <span style={{ fontSize:11, color: p.panelText, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:150 }}>
                        {city}
                      </span>
                      <span style={{ fontSize:11, fontWeight:700, color:"#ef4444", flexShrink:0 }}>{count}</span>
                    </div>
                  ))}
                  {topSources.length === 0 && (
                    <div style={{ color: p.emptyText, fontSize:12 }}>Collecting data…</div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ── Bottom event log bar ── */}
          <div style={{
            marginTop: 12, borderRadius: 12,
            background: p.logBg,
            border: `1px solid ${p.logBorder}`,
            boxShadow: "var(--shadow-premium)",
            padding: "8px 16px",
            display: "flex", alignItems: "center", gap: 20, overflowX: "auto",
            backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)",
          }}>
            <span style={{ fontSize:9, letterSpacing:"0.12em", color: p.logLabel, textTransform:"uppercase", flexShrink:0 }}>
              Event Log
            </span>
            {attacks.slice(0, 6).map((atk) => {
              const cfg = SEVERITY_CONFIG[atk.severity];
              const color = isDark ? cfg.darkText : cfg.lightText;
              return (
                <span key={atk.id} style={{ fontSize:10, fontFamily:"monospace", whiteSpace:"nowrap", color }}>
                  [{fmtTime(atk.ts)}] {atk.severity} — {atk.type} {atk.from} → {atk.to}
                </span>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}