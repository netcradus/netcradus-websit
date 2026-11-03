import React, { useState, useRef } from "react";
import "./Services.css";

const CybersecurityDashboardVisual = () => {
  return (
    <div
      className="w-full relative overflow-hidden"
      style={{
        background: `radial-gradient(circle at 50% 15%, rgba(255, 107, 0, 0.12), transparent 60%), linear-gradient(180deg, #10131d 0%, #07090f 100%)`,
        borderRadius: "20px",
        padding: "24px",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <div className="cyber-dashboard-card cyber-card-left text-left">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Alerts by Severity
            </h4>
            <span className="px-2 py-0.5 text-[10px] font-semibold bg-red-500/20 text-red-400 rounded-full border border-red-500/30">
              Live Feed
            </span>
          </div>

          <div className="flex items-center gap-4 my-2">
            {/* SVG Donut Chart */}
            <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="36" fill="none" stroke="#1f1f33" strokeWidth="12" />
                {/* Low 16% (Blue) */}
                <circle
                  cx="50" cy="50" r="36" fill="none" stroke="#3b82f6" strokeWidth="12"
                  strokeDasharray="36.2 226.2" strokeDashoffset="0"
                />
                {/* Medium 42% (Amber) */}
                <circle
                  cx="50" cy="50" r="36" fill="none" stroke="#f59e0b" strokeWidth="12"
                  strokeDasharray="95 226.2" strokeDashoffset="-36.2"
                />
                {/* High 28% (Orange) */}
                <circle
                  cx="50" cy="50" r="36" fill="none" stroke="#ff7b29" strokeWidth="12"
                  strokeDasharray="63.3 226.2" strokeDashoffset="-131.2"
                />
                {/* Critical 14% (Red) */}
                <circle
                  cx="50" cy="50" r="36" fill="none" stroke="#ef4444" strokeWidth="12"
                  strokeDasharray="31.7 226.2" strokeDashoffset="-194.5"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-black text-white leading-none">1,248</span>
                <span className="text-[9px] text-gray-400 font-medium mt-0.5">TOTAL</span>
              </div>
            </div>

            {/* Legend Grid */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[11px] w-full">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block"></span>
                <span className="text-gray-300">Critical</span>
                <span className="ml-auto font-bold text-white">14%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 inline-block"></span>
                <span className="text-gray-300">High</span>
                <span className="ml-auto font-bold text-white">28%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                <span className="text-gray-300">Medium</span>
                <span className="ml-auto font-bold text-white">42%</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                <span className="text-gray-300">Low</span>
                <span className="ml-auto font-bold text-white">16%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cyber-dashboard-card cyber-card-right text-left">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Alerts Over Time
            </h4>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              7-Day ▲ 12%
            </span>
          </div>

          <div className="relative h-28 w-full mt-2">
            <svg viewBox="0 0 240 90" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="alertTrendGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e8400a" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#e8400a" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <line x1="0" y1="20" x2="240" y2="20" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="0" y1="45" x2="240" y2="45" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="0" y1="70" x2="240" y2="70" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

              <path
                d="M 10 60 Q 45 68 80 40 T 150 30 T 230 15 L 230 75 L 10 75 Z"
                fill="url(#alertTrendGrad)"
              />

              <path
                d="M 10 60 Q 45 68 80 40 T 150 30 T 230 15"
                fill="none"
                stroke="#ff5520"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              <circle cx="10" cy="60" r="3" fill="#ff5520" />
              <circle cx="48" cy="65" r="3" fill="#ff5520" />
              <circle cx="86" cy="40" r="3" fill="#ff5520" />
              <circle cx="124" cy="48" r="3" fill="#ff5520" />
              <circle cx="162" cy="30" r="3" fill="#ff5520" />
              <circle cx="200" cy="35" r="3" fill="#ff5520" />
              <circle cx="230" cy="15" r="4.5" fill="#ffffff" stroke="#e8400a" strokeWidth="2" />
            </svg>
            <div className="flex justify-between text-[9px] text-gray-400 mt-1 font-mono">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        <div className="cyber-dashboard-card cyber-card-left text-left">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              Identity Risk Overview
            </h4>
            <span className="px-2 py-0.5 text-[10px] font-bold bg-amber-500/20 text-amber-400 rounded-full border border-amber-500/30">
              Moderate
            </span>
          </div>

          <div className="flex items-center gap-4 my-2">
            {/* SVG Donut Chart */}
            <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="36" fill="none" stroke="#1f1f33" strokeWidth="12" />
                {/* Privilege Risk: 45% */}
                <circle
                  cx="50" cy="50" r="36" fill="none" stroke="#e8400a" strokeWidth="12"
                  strokeDasharray="101.8 226.2" strokeDashoffset="0"
                />
                {/* MFA Gaps: 30% */}
                <circle
                  cx="50" cy="50" r="36" fill="none" stroke="#ff7b29" strokeWidth="12"
                  strokeDasharray="67.8 226.2" strokeDashoffset="-101.8"
                />
                {/* Anomalous Access: 25% */}
                <circle
                  cx="50" cy="50" r="36" fill="none" stroke="#ffa043" strokeWidth="12"
                  strokeDasharray="56.5 226.2" strokeDashoffset="-169.6"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-base font-black text-amber-400 leading-none">78</span>
                <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">SCORE</span>
              </div>
            </div>

            {/* Breakdown List */}
            <div className="space-y-1.5 text-[11px] w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#e8400a]"></span>
                  <span className="text-gray-300">Privilege Risk</span>
                </div>
                <span className="font-bold text-white">45%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ff7b29]"></span>
                  <span className="text-gray-300">MFA Gaps</span>
                </div>
                <span className="font-bold text-white">30%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#ffa043]"></span>
                  <span className="text-gray-300">Anomalous Access</span>
                </div>
                <span className="font-bold text-white">25%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="cyber-dashboard-card cyber-card-right text-left flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-300">
              SOC Telemetry
            </h4>
            <span className="text-[10px] text-blue-400 font-medium bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
              Real-Time
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-[#1a1a2e] p-2.5 rounded-xl border border-white/5 text-center flex flex-col justify-center">
              <span className="text-[9px] uppercase font-bold text-gray-400 tracking-tight block">Events</span>
              <span className="text-base font-black text-white my-0.5">1.42M</span>
              <span className="text-[9px] font-semibold text-emerald-400">▲ 8.4%</span>
            </div>

            <div className="bg-[#1a1a2e] p-2.5 rounded-xl border border-white/5 text-center flex flex-col justify-center">
              <span className="text-[9px] uppercase font-bold text-gray-400 tracking-tight block">Notable</span>
              <span className="text-base font-black text-white my-0.5">38</span>
              <span className="text-[9px] font-semibold text-emerald-400">▼ 14%</span>
            </div>

            <div className="bg-[#1a1a2e] p-2.5 rounded-xl border border-white/5 text-center flex flex-col justify-center">
              <span className="text-[9px] uppercase font-bold text-gray-400 tracking-tight block">MTTD</span>
              <span className="text-base font-black text-accent-bright my-0.5">&lt;3.8m</span>
              <span className="text-[9px] font-semibold text-gray-400">SLA &lt;5m</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceDetailLayout = ({ service }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="space-y-8">
        <div className="flex flex-wrap gap-3">
          {service.highlights.map((item) => (
            <span
              key={item}
              className="inline-flex whitespace-nowrap rounded-full border border-accent/15 bg-accent/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-accent"
            >
              {item}
            </span>
          ))}
        </div>
        <div>
          <h3 className="text-3xl font-black tracking-tight text-text-primary md:text-5xl">
            {service.heading}
          </h3>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
            {service.description}
          </p>
        </div>
        <ul className="grid gap-4 md:grid-cols-2">
          {service.points.map((point) => {
            const colonIndex = point.indexOf(":");
            const hasBoldTitle = colonIndex !== -1;
            const title = hasBoldTitle ? point.slice(0, colonIndex) : "";
            const desc = hasBoldTitle ? point.slice(colonIndex + 1) : point;

            return (
              <li
                key={point}
                className="rounded-[22px] border border-border bg-[var(--color-surface-raised)]/70 p-5 text-sm leading-relaxed text-text-secondary shadow-[0_0_24px_rgba(255,107,0,0.04)] hover:border-accent/25 hover:shadow-[0_4px_20px_rgba(255,107,0,0.08)] transition-all duration-300"
              >
                <div className="mb-3 h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(255,107,0,0.35)] animate-pulse" />
                {hasBoldTitle ? (
                  <>
                    <strong className="text-text-primary block mb-1 font-bold">{title}</strong>
                    <span className="text-text-secondary">{desc.trim()}</span>
                  </>
                ) : (
                  point
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="relative">
        <div className={`absolute -inset-2 rounded-[34px] blur-3xl transition-all duration-500 ${service.id === 'cybersecurity' ? 'bg-[radial-gradient(circle_at_50%_40%,rgba(255,107,0,0.25),rgba(255,107,0,0.12),transparent_65%)] opacity-100 animate-pulse' : 'bg-[radial-gradient(circle_at_50%_20%,rgba(255,107,0,0.15),transparent_45%)]'}`} />
        <div className={`relative overflow-hidden rounded-[30px] border p-4 transition-all duration-500 ${service.id === 'cybersecurity' ? 'border-[#FF6B00]/30 bg-[linear-gradient(135deg,rgba(255,107,0,0.12),rgba(255,107,0,0.04),transparent_55%),var(--color-surface)] shadow-[0_22px_70px_rgba(255,107,0,0.15)]' : 'border-border bg-[linear-gradient(135deg,rgba(255,107,0,0.08),transparent_45%),var(--color-surface)] shadow-[0_22px_70px_rgba(255,107,0,0.08)]'}`}>
          {service.id === "cybersecurity" ? (
            <CybersecurityDashboardVisual />
          ) : service.video ? (
            <video
              className="w-full h-auto max-h-[400px] aspect-[16/9] rounded-[16px] object-cover object-top pointer-events-none block"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src={service.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={service.image}
              alt={service.heading}
              className="h-[400px] w-full rounded-[12px] object-cover object-top"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailLayout;