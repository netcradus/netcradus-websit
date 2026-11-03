import { useEffect, useState } from "react";
import SectionWrapper from "./ui/SectionWrapper";

const stats = [
  { label: "Threat Detection", value: 99.7, suffix: "%", color: "#ff4d00" },
  { label: "Response Time", value: 95, suffix: "%", color: "#ff7a18" },
  { label: "Coverage", value: 100, suffix: "%", color: "#ff2d00" },
  { label: "System Health", value: 98, suffix: "%", color: "#ff5a00" },
];

function CircularProgress({ value, color }) {
  const radius = 50;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (value / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="rgba(120,120,120,0.1)"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />

      {/* Progress */}
      <circle
        stroke={color}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={circumference + " " + circumference}
        style={{
          strokeDashoffset,
          transition: "stroke-dashoffset 1.5s ease",
          filter: `drop-shadow(0 0 6px ${color})`
        }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
}

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [end]);

  return count;
}

export default function Stats() {
  return (
    <SectionWrapper className="py-24 bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-950">

      <div className="max-w-screen-2xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold text-zinc-900 dark:text-white">
            System <span className="text-orange-500">Performance</span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4">
            Real-time analytics across global infrastructure
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative p-[1px] rounded-3xl bg-gradient-to-br from-orange-500/20 to-transparent"
            >
              <div className="rounded-3xl bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 p-6 flex flex-col items-center justify-center gap-4 hover:scale-[1.03] transition-all duration-500">

                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,80,20,0.08),transparent)] opacity-0 hover:opacity-100 transition duration-500" />

                {/* Chart */}
                <div className="relative">
                  <CircularProgress value={stat.value} color={stat.color} />

                  {/* Center Value */}
                  <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-zinc-900 dark:text-white">
                    <Counter end={Math.floor(stat.value)} />{stat.suffix}
                  </div>
                </div>

                {/* Label */}
                <p className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-zinc-500 dark:text-zinc-400 text-center">
                  {stat.label}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  );
}