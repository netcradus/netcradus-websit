import React from "react";

const DEFAULT_NODES = [
  { left: "8%", top: "18%", delay: "0s" },
  { left: "24%", top: "56%", delay: "1.2s" },
  { left: "42%", top: "28%", delay: "2.1s" },
  { left: "58%", top: "62%", delay: "0.8s" },
  { left: "76%", top: "32%", delay: "1.8s" },
  { left: "88%", top: "68%", delay: "2.7s" },
];

export default function AmbientMesh({ className = "", nodes = DEFAULT_NODES }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(127,127,127,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(127,127,127,0.06)_1px,transparent_1px)] [background-size:72px_72px] opacity-50 dark:opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,64,10,0.12),transparent_26%),radial-gradient(circle_at_80%_24%,rgba(232,64,10,0.08),transparent_22%),radial-gradient(circle_at_62%_72%,rgba(232,64,10,0.08),transparent_24%)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(232,64,10,0.16),transparent_24%),radial-gradient(circle_at_80%_24%,rgba(232,64,10,0.12),transparent_22%),radial-gradient(circle_at_62%_72%,rgba(232,64,10,0.12),transparent_24%)]" />
      <div className="absolute inset-0 opacity-80">
        {nodes.map((node) => (
          <span
            key={`${node.left}-${node.top}`}
            className="absolute h-2.5 w-2.5 rounded-full bg-accent/50 shadow-[0_0_24px_rgba(232,64,10,0.35)] dark:bg-accent/70"
            style={{
              left: node.left,
              top: node.top,
              animation: `ambientFloat 10s ease-in-out infinite`,
              animationDelay: node.delay,
            }}
          />
        ))}
      </div>
      <svg
        className="absolute inset-0 h-full w-full opacity-30 dark:opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M8 18 L24 56 L42 28 L58 62 L76 32 L88 68" fill="none" stroke="rgba(232,64,10,0.24)" strokeWidth="0.35" />
        <path d="M24 56 L58 62 L88 68" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.2" />
        <path d="M42 28 L76 32" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="0.2" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-bg)] via-[var(--color-bg)]/55 to-transparent" />
    </div>
  );
}
