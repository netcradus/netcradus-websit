import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Activity, Zap, Bug, Key, AlertTriangle, Cpu, ArrowRight, CheckCircle2 } from 'lucide-react';

export const NETCRADUS_PLATFORMS = [
  {
    id: 'xdr',
    name: 'NetCradus XDR',
    icon: Shield,
    path: '/platform/endpoint-detection',
    tagline: 'Endpoint + Threat Hunting + Detection',
    description: 'Unified EPP, EDR, and AI threat hunting across enterprise endpoints and cloud workloads.',
    bullets: ['Endpoint Protection (EPP)', 'Threat Hunting', 'Real-Time Incident Detection'],
    color: '#7C3AED',
    bgBadge: 'rgba(124, 58, 237, 0.12)',
    border: 'rgba(124, 58, 237, 0.3)'
  },
  {
    id: 'siem',
    name: 'NetCradus SIEM',
    icon: Activity,
    path: '/platform/siem',
    tagline: 'Log Management + Detection + Correlation',
    description: 'High-speed log ingestion, automated event correlation, and AI-driven SIEM analytics.',
    bullets: ['Log Management', 'AI Threat Detection', 'Event Correlation Engine'],
    color: '#3B82F6',
    bgBadge: 'rgba(59, 130, 246, 0.12)',
    border: 'rgba(59, 130, 246, 0.3)'
  },
  {
    id: 'soar',
    name: 'NetCradus SOAR',
    icon: Zap,
    path: '/platform/soar',
    tagline: 'Automated Response + Playbooks',
    description: 'Machine-speed incident response, automated playbooks, and SOC workflow orchestration.',
    bullets: ['Automated Response', 'Orchestration Playbooks', 'Machine-Speed Containment'],
    color: '#EC4899',
    bgBadge: 'rgba(236, 72, 153, 0.12)',
    border: 'rgba(236, 72, 153, 0.3)'
  },
  {
    id: 'cti',
    name: 'NetCradus CTI',
    icon: Bug,
    path: '/platform/cti',
    tagline: 'Threat Intelligence',
    description: 'Adversary tradecraft profiling, IOC extraction, and global threat intelligence feeds.',
    bullets: ['Threat Intelligence Feeds', 'Malware Reverse Engineering', 'MITRE ATT&CK Mapping'],
    color: '#10B981',
    bgBadge: 'rgba(16, 185, 129, 0.12)',
    border: 'rgba(16, 185, 129, 0.3)'
  },
  {
    id: 'pam',
    name: 'NetCradus PAM',
    icon: Key,
    path: '/platform/pam',
    tagline: 'Privileged Access Management',
    description: 'Identity verification, PAM vault security, and continuous zero-trust access enforcement.',
    bullets: ['Privileged Access Vault', 'Zero Trust Architecture', 'Session Anomaly Detection'],
    color: '#F43F5E',
    bgBadge: 'rgba(244, 63, 94, 0.12)',
    border: 'rgba(244, 63, 94, 0.3)'
  },
  {
    id: 'grc',
    name: 'NetCradus GRC',
    icon: AlertTriangle,
    path: '/platform/grc',
    tagline: 'Risk + Compliance',
    description: 'Continuous risk scoring, vulnerability audit frameworks, and GRC compliance automation.',
    bullets: ['Risk Scoring Engine', 'Vulnerability Auditing', 'Compliance Frameworks'],
    color: '#F59E0B',
    bgBadge: 'rgba(245, 158, 11, 0.12)',
    border: 'rgba(245, 158, 11, 0.3)'
  },
  {
    id: 'aisecurity',
    name: 'NetCradus AI Security',
    icon: Cpu,
    path: '/platform/ai-security',
    tagline: 'AI/ML Security + AI Threat Detection',
    description: 'Protect enterprise AI pipelines, LLM prompts, and machine learning model vectors.',
    bullets: ['LLM Threat Protection', 'AI Model Defense', 'ML Data Poisoning Detection'],
    color: '#8B5CF6',
    bgBadge: 'rgba(139, 92, 246, 0.12)',
    border: 'rgba(139, 92, 246, 0.3)'
  }
];

const XdrCardBackgroundVisual = () => (
  <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] md:w-[55%] lg:w-[50%] pointer-events-none overflow-hidden rounded-2xl z-0 opacity-45 transition-opacity duration-500 group-hover:opacity-60">
    {/* Radial Violet Glow behind Shield */}
    <div className="absolute right-[5%] top-[40%] -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.45)_0%,rgba(139,92,246,0.15)_50%,transparent_75%)] blur-2xl pointer-events-none" />

    {/* Left Gradient Blend Overlay for Text Contrast */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#18112b] via-[#18112b]/70 to-transparent z-10 pointer-events-none" />

    {/* SVG Artwork: Shield, Lock, HUD Rings, Circuit Lines, Bottom Wave Grid */}
    <svg
      viewBox="0 0 500 400"
      className="absolute right-[-20px] sm:right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[500px] h-[350px] sm:h-[400px] object-contain pointer-events-none select-none z-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="violetGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Linear Gradients */}
        <linearGradient id="shieldGradient" x1="260" y1="60" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C4B5FD" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.45" />
        </linearGradient>

        <linearGradient id="lockGradient" x1="310" y1="130" x2="370" y2="230" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DDD6FE" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>

        <linearGradient id="waveGradient" x1="0" y1="300" x2="500" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.08" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.6" />
        </linearGradient>

        <linearGradient id="lineFade" x1="100" y1="0" x2="450" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* 1. Outer Concentric HUD Security Rings */}
      <g stroke="#8B5CF6" strokeOpacity="0.3" fill="none">
        <circle cx="340" cy="170" r="140" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="340" cy="170" r="120" strokeWidth="1.2" strokeOpacity="0.4" />
        <circle cx="340" cy="170" r="100" strokeWidth="1" strokeDasharray="3 9" />
        <circle cx="340" cy="170" r="158" strokeWidth="0.8" strokeDasharray="45 15 10 15" strokeOpacity="0.25" />
      </g>

      {/* HUD Angle Ticks */}
      <g stroke="#A78BFA" strokeOpacity="0.45" strokeWidth="1.5">
        <line x1="340" y1="20" x2="340" y2="32" />
        <line x1="340" y1="308" x2="340" y2="320" />
        <line x1="190" y1="170" x2="202" y2="170" />
        <line x1="478" y1="170" x2="490" y2="170" />
      </g>

      {/* 2. Circuit Board Lines & Data Nodes */}
      <g stroke="url(#lineFade)" strokeWidth="1.2" fill="none">
        <path d="M 120 120 H 220 L 250 150 H 270" />
        <path d="M 140 220 H 210 L 240 190 H 260" />
        <path d="M 160 80 H 280 L 300 100" />
        <path d="M 110 260 H 230 L 270 220" />
        <path d="M 340 30 V 60" />
        <path d="M 430 110 H 470" />
        <path d="M 410 230 H 480" />
        <path d="M 450 170 H 490" />
      </g>

      {/* Circuit Nodes (Dots) */}
      <g fill="#A78BFA" opacity="0.75">
        <circle cx="120" cy="120" r="3" />
        <circle cx="140" cy="220" r="3" />
        <circle cx="160" cy="80" r="2.5" />
        <circle cx="110" cy="260" r="3.5" />
        <circle cx="470" cy="110" r="3" />
        <circle cx="480" cy="230" r="3" />
        <circle cx="490" cy="170" r="3.5" />
        <circle cx="220" cy="120" r="2" />
        <circle cx="210" cy="220" r="2" />
      </g>
      <g fill="#60A5FA" opacity="0.85" filter="url(#violetGlow)">
        <circle cx="250" cy="150" r="2.5" />
        <circle cx="240" cy="190" r="2.5" />
        <circle cx="430" cy="110" r="2" />
      </g>

      {/* 3. Glowing Digital Shield Outer & Inner Outline */}
      <path
        d="M 340 60 L 415 95 V 175 C 415 235 340 275 340 285 C 340 275 265 235 265 175 V 95 Z"
        fill="rgba(124,58,237,0.12)"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeOpacity="0.45"
        filter="url(#softGlow)"
      />

      <path
        d="M 340 65 L 410 98 V 172 C 410 228 340 266 340 275 C 340 266 270 228 270 172 V 98 Z"
        fill="none"
        stroke="url(#shieldGradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#violetGlow)"
      />

      <path
        d="M 340 78 L 398 106 V 168 C 398 216 340 250 340 258 C 340 250 282 216 282 168 V 106 Z"
        fill="rgba(139,92,246,0.08)"
        stroke="#C4B5FD"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        strokeOpacity="0.65"
      />

      {/* 4. Padlock Inside Shield */}
      <path
        d="M 326 148 V 134 C 326 126 332 120 340 120 C 348 120 354 126 354 134 V 148"
        fill="none"
        stroke="url(#lockGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#violetGlow)"
      />
      <rect
        x="318"
        y="148"
        width="44"
        height="38"
        rx="7"
        fill="rgba(24, 17, 43, 0.85)"
        stroke="url(#lockGradient)"
        strokeWidth="2.5"
        filter="url(#violetGlow)"
      />
      <circle cx="340" cy="163" r="3.5" fill="#DDD6FE" />
      <path d="M 340 166 V 175" stroke="#DDD6FE" strokeWidth="2.5" strokeLinecap="round" />

      {/* 5. Bottom Digital Particle Wave Landscape Grid */}
      <g stroke="url(#waveGradient)" strokeWidth="1" fill="none">
        <path d="M 0 340 Q 120 310 240 335 T 500 310" />
        <path d="M 0 355 Q 120 325 240 350 T 500 325" />
        <path d="M 0 370 Q 120 340 240 365 T 500 340" />
        <path d="M 0 385 Q 120 355 240 380 T 500 355" />

        <path d="M 60 380 V 325" strokeOpacity="0.3" strokeDasharray="2 4" />
        <path d="M 120 380 V 315" strokeOpacity="0.3" strokeDasharray="2 4" />
        <path d="M 180 380 V 320" strokeOpacity="0.3" strokeDasharray="2 4" />
        <path d="M 240 380 V 330" strokeOpacity="0.3" strokeDasharray="2 4" />
        <path d="M 300 380 V 325" strokeOpacity="0.3" strokeDasharray="2 4" />
        <path d="M 360 380 V 315" strokeOpacity="0.3" strokeDasharray="2 4" />
        <path d="M 420 380 V 310" strokeOpacity="0.3" strokeDasharray="2 4" />
        <path d="M 480 380 V 315" strokeOpacity="0.3" strokeDasharray="2 4" />
      </g>

      <g fill="#A78BFA" opacity="0.65">
        <circle cx="120" cy="326" r="2" />
        <circle cx="240" cy="335" r="2.5" />
        <circle cx="360" cy="318" r="2" />
        <circle cx="420" cy="312" r="2.5" />
        <circle cx="480" cy="316" r="2" />
        <circle cx="180" cy="352" r="2" />
        <circle cx="300" cy="358" r="2" />
      </g>
    </svg>
  </div>
);

const SiemCardBackgroundVisual = () => (
  <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] md:w-[55%] lg:w-[50%] pointer-events-none overflow-hidden rounded-2xl z-0 opacity-45 transition-opacity duration-500 group-hover:opacity-60">
    {/* Radial Blue Glow behind SIEM Analytics */}
    <div className="absolute right-[5%] top-[40%] -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.45)_0%,rgba(37,99,235,0.15)_50%,transparent_75%)] blur-2xl pointer-events-none" />

    {/* Left Gradient Blend Overlay for Text Contrast */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#18112b] via-[#18112b]/70 to-transparent z-10 pointer-events-none" />

    {/* SVG Artwork: Log Streams, Waveform Signal, Node Grid, Concentric Telemetry Radar */}
    <svg
      viewBox="0 0 500 400"
      className="absolute right-[-20px] sm:right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[500px] h-[350px] sm:h-[400px] object-contain pointer-events-none select-none z-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="blueGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softBlueGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Linear Gradients */}
        <linearGradient id="siemStreamGrad" x1="100" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
          <stop offset="40%" stopColor="#3B82F6" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#60A5FA" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="waveLineGrad" x1="50" y1="180" x2="480" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.75" />
          <stop offset="85%" stopColor="#38BDF8" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.5" />
        </linearGradient>

        <linearGradient id="gridFadeGrad" x1="0" y1="280" x2="500" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* 1. Background Telemetry Log Grid Lines */}
      <g stroke="#3B82F6" strokeOpacity="0.18" strokeWidth="0.8" strokeDasharray="4 6">
        <line x1="80" y1="60" x2="480" y2="60" />
        <line x1="100" y1="100" x2="480" y2="100" />
        <line x1="60" y1="140" x2="480" y2="140" />
        <line x1="120" y1="220" x2="480" y2="220" />
        <line x1="90" y1="260" x2="480" y2="260" />
        <line x1="110" y1="300" x2="480" y2="300" />
      </g>

      {/* 2. Concentric SIEM Radar / Analytics HUD Circles */}
      <g stroke="#3B82F6" strokeOpacity="0.3" fill="none">
        <circle cx="350" cy="180" r="135" strokeWidth="1" strokeDasharray="8 6" />
        <circle cx="350" cy="180" r="110" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="350" cy="180" r="85" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="350" cy="180" r="55" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="350" cy="180" r="25" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.4" />
      </g>

      {/* Crosshairs & Angle Ticks */}
      <g stroke="#60A5FA" strokeOpacity="0.5" strokeWidth="1.2">
        <line x1="350" y1="35" x2="350" y2="50" />
        <line x1="350" y1="310" x2="350" y2="325" />
        <line x1="205" y1="180" x2="220" y2="180" />
        <line x1="480" y1="180" x2="495" y2="180" />
        <line x1="272" y1="102" x2="282" y2="112" />
        <line x1="418" y1="248" x2="428" y2="258" />
        <line x1="418" y1="112" x2="428" y2="102" />
        <line x1="272" y1="258" x2="282" y2="248" />
      </g>

      {/* 3. Real-Time Waveform / Pulse Signal (EKG Threat Detection Peak) */}
      <path
        d="M 60 180 H 210 L 225 180 L 235 150 L 245 210 L 258 135 L 272 230 L 285 165 L 295 185 L 305 180 H 480"
        fill="none"
        stroke="url(#waveLineGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#blueGlow)"
      />

      {/* Glowing Event Detection Marker on Waveform Peak */}
      <circle cx="258" cy="135" r="5" fill="#60A5FA" filter="url(#blueGlow)" />
      <circle cx="258" cy="135" r="2.5" fill="#FFFFFF" />
      <circle cx="272" cy="230" r="4" fill="#38BDF8" filter="url(#blueGlow)" />

      {/* 4. Log Data Flow Streams & Event Packets */}
      <g stroke="url(#siemStreamGrad)" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M 120 100 H 260 L 290 70 H 440" />
        <path d="M 140 260 H 240 L 270 290 H 460" />
        <path d="M 180 60 H 320 L 350 40 H 450" />
        <path d="M 160 300 H 310 L 340 320 H 470" />
      </g>

      {/* Moving Data Packet Rectangles / Pills */}
      <g fill="#60A5FA" opacity="0.85" filter="url(#blueGlow)">
        <rect x="220" y="98" width="14" height="4" rx="2" />
        <rect x="340" y="68" width="18" height="4" rx="2" fill="#93C5FD" />
        <rect x="200" y="258" width="16" height="4" rx="2" />
        <rect x="370" y="288" width="20" height="4" rx="2" fill="#38BDF8" />
        <rect x="260" y="58" width="14" height="4" rx="2" />
      </g>

      {/* 5. Telemetry Nodes & Server Matrix Indicators */}
      <g fill="#3B82F6" opacity="0.8">
        <circle cx="260" cy="100" r="3.5" />
        <circle cx="290" cy="70" r="3" />
        <circle cx="440" cy="70" r="4" fill="#60A5FA" />
        <circle cx="240" cy="260" r="3.5" />
        <circle cx="270" cy="290" r="3" />
        <circle cx="460" cy="290" r="4" fill="#38BDF8" />
        <circle cx="350" cy="180" r="6" fill="#60A5FA" filter="url(#softBlueGlow)" />
        <circle cx="350" cy="180" r="3" fill="#FFFFFF" />
      </g>

      {/* 6. Bottom Perspective Log Analytics Grid */}
      <g stroke="url(#gridFadeGrad)" strokeWidth="1" fill="none">
        <path d="M 50 330 Q 180 305 310 325 T 500 305" />
        <path d="M 50 345 Q 180 320 310 340 T 500 320" />
        <path d="M 50 360 Q 180 335 310 355 T 500 335" />
        <path d="M 50 375 Q 180 350 310 370 T 500 350" />

        <line x1="110" y1="375" x2="110" y2="320" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="190" y1="375" x2="190" y2="310" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="270" y1="375" x2="270" y2="315" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="350" y1="375" x2="350" y2="305" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="430" y1="375" x2="430" y2="308" strokeOpacity="0.35" strokeDasharray="2 3" />
      </g>

      <g fill="#60A5FA" opacity="0.75">
        <circle cx="190" cy="320" r="2.5" />
        <circle cx="270" cy="338" r="3" fill="#38BDF8" filter="url(#blueGlow)" />
        <circle cx="350" cy="318" r="2.5" />
        <circle cx="430" cy="328" r="2.5" />
      </g>
    </svg>
  </div>
);

const SoarCardBackgroundVisual = () => (
  <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] md:w-[55%] lg:w-[50%] pointer-events-none overflow-hidden rounded-2xl z-0 opacity-45 transition-opacity duration-500 group-hover:opacity-60">
    {/* Radial Magenta Glow behind SOAR Automation Engine */}
    <div className="absolute right-[5%] top-[40%] -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.45)_0%,rgba(192,132,252,0.15)_50%,transparent_75%)] blur-2xl pointer-events-none" />

    {/* Left Gradient Blend Overlay for Text Contrast */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#18112b] via-[#18112b]/70 to-transparent z-10 pointer-events-none" />

    {/* SVG Artwork: Playbook Nodes, Automation Flows, Lightning Response Pulse, Workflow HUD */}
    <svg
      viewBox="0 0 500 400"
      className="absolute right-[-20px] sm:right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[500px] h-[350px] sm:h-[400px] object-contain pointer-events-none select-none z-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="pinkGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softPinkGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Linear Gradients */}
        <linearGradient id="soarFlowGrad" x1="80" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0" />
          <stop offset="40%" stopColor="#EC4899" stopOpacity="0.4" />
          <stop offset="75%" stopColor="#F472B6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="soarLightningGrad" x1="60" y1="170" x2="470" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#D946EF" stopOpacity="0.2" />
          <stop offset="40%" stopColor="#EC4899" stopOpacity="0.8" />
          <stop offset="75%" stopColor="#F472B6" stopOpacity="1" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="soarNodeGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        <linearGradient id="playbookGridGrad" x1="0" y1="280" x2="500" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#EC4899" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* 1. Background Playbook Workflow Grid Lines */}
      <g stroke="#EC4899" strokeOpacity="0.18" strokeWidth="0.8" strokeDasharray="4 6">
        <line x1="80" y1="70" x2="480" y2="70" />
        <line x1="110" y1="120" x2="480" y2="120" />
        <line x1="60" y1="170" x2="480" y2="170" />
        <line x1="120" y1="220" x2="480" y2="220" />
        <line x1="90" y1="270" x2="480" y2="270" />
      </g>

      {/* 2. Concentric Workflow HUD Circles & Action Rings */}
      <g stroke="#EC4899" strokeOpacity="0.3" fill="none">
        <circle cx="340" cy="170" r="135" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="340" cy="170" r="110" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="340" cy="170" r="85" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="340" cy="170" r="55" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="340" cy="170" r="25" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.4" />
      </g>

      {/* Workflow Radial Angle Markers */}
      <g stroke="#F472B6" strokeOpacity="0.5" strokeWidth="1.2">
        <line x1="340" y1="25" x2="340" y2="40" />
        <line x1="340" y1="300" x2="340" y2="315" />
        <line x1="195" y1="170" x2="210" y2="170" />
        <line x1="470" y1="170" x2="485" y2="170" />
        <line x1="262" y1="92" x2="272" y2="102" />
        <line x1="408" y1="238" x2="418" y2="248" />
        <line x1="408" y1="102" x2="418" y2="92" />
        <line x1="262" y1="248" x2="272" y2="238" />
      </g>

      {/* 3. Branching Automated Playbook Action Pathways */}
      <g stroke="url(#soarFlowGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M 90 170 H 180 L 210 120 H 310 L 340 170" />
        <path d="M 180 170 L 210 220 H 310 L 340 170" />
        <path d="M 340 170 H 420 L 450 120 H 480" />
        <path d="M 420 170 L 450 220 H 480" />
        <path d="M 140 70 H 260 L 290 40 H 440" />
        <path d="M 150 270 H 270 L 300 300 H 460" />
      </g>

      {/* 4. Lightning / Electric Response Energy Signal */}
      <path
        d="M 60 170 H 175 L 190 145 L 200 195 L 215 110 L 235 230 L 255 130 L 275 210 L 290 155 L 305 170 H 470"
        fill="none"
        stroke="url(#soarLightningGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#pinkGlow)"
      />

      {/* Lightning Energy Flash Points (Impact Nodes) */}
      <circle cx="215" cy="110" r="4.5" fill="#F472B6" filter="url(#pinkGlow)" />
      <circle cx="215" cy="110" r="2" fill="#FFFFFF" />
      <circle cx="235" cy="230" r="4.5" fill="#EC4899" filter="url(#pinkGlow)" />
      <circle cx="235" cy="230" r="2" fill="#FFFFFF" />
      <circle cx="255" cy="130" r="5" fill="#F43F5E" filter="url(#pinkGlow)" />
      <circle cx="255" cy="130" r="2.5" fill="#FFFFFF" />

      {/* 5. Playbook Node Rectangles (Automation Action Blocks) */}
      {/* Node 1: Incident Trigger Block */}
      <rect x="165" y="156" width="28" height="28" rx="6" fill="rgba(24,17,43,0.9)" stroke="#EC4899" strokeWidth="1.8" filter="url(#pinkGlow)" />
      <path d="M 174 170 L 184 170" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />
      <path d="M 179 165 L 179 175" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" />

      {/* Node 2: Decision Core Block */}
      <circle cx="340" cy="170" r="18" fill="rgba(24,17,43,0.95)" stroke="url(#soarNodeGrad)" strokeWidth="2.2" filter="url(#softPinkGlow)" />
      <circle cx="340" cy="170" r="8" fill="#EC4899" filter="url(#pinkGlow)" />
      <circle cx="340" cy="170" r="3.5" fill="#FFFFFF" />

      {/* Node 3 & 4: Upper & Lower Playbook Action Nodes */}
      <rect x="296" y="106" width="26" height="26" rx="5" fill="rgba(24,17,43,0.9)" stroke="#F472B6" strokeWidth="1.5" filter="url(#pinkGlow)" />
      <circle cx="309" cy="119" r="4" fill="#F472B6" />

      <rect x="296" y="206" width="26" height="26" rx="5" fill="rgba(24,17,43,0.9)" stroke="#F472B6" strokeWidth="1.5" filter="url(#pinkGlow)" />
      <circle cx="309" cy="219" r="4" fill="#EC4899" />

      {/* Node 5: Final Containment Action Block */}
      <rect x="436" y="156" width="28" height="28" rx="6" fill="rgba(24,17,43,0.9)" stroke="#F43F5E" strokeWidth="1.8" filter="url(#pinkGlow)" />
      <path d="M 444 170 L 456 170" stroke="#F43F5E" strokeWidth="2.5" strokeLinecap="round" />

      {/* Moving Automation Nodes along Paths */}
      <g fill="#F472B6" opacity="0.85" filter="url(#pinkGlow)">
        <circle cx="210" cy="120" r="3" />
        <circle cx="260" cy="120" r="3" fill="#FFFFFF" />
        <circle cx="210" cy="220" r="3" />
        <circle cx="260" cy="220" r="3" fill="#FFFFFF" />
        <circle cx="380" cy="170" r="3.5" fill="#F43F5E" />
        <circle cx="435" cy="120" r="3" />
        <circle cx="435" cy="220" r="3" />
      </g>

      {/* 6. Bottom Perspective Playbook Matrix Landscape */}
      <g stroke="url(#playbookGridGrad)" strokeWidth="1" fill="none">
        <path d="M 50 330 Q 180 305 310 325 T 500 305" />
        <path d="M 50 345 Q 180 320 310 340 T 500 320" />
        <path d="M 50 360 Q 180 335 310 355 T 500 335" />
        <path d="M 50 375 Q 180 350 310 370 T 500 350" />

        <line x1="110" y1="375" x2="110" y2="320" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="190" y1="375" x2="190" y2="310" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="270" y1="375" x2="270" y2="315" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="350" y1="375" x2="350" y2="305" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="430" y1="375" x2="430" y2="308" strokeOpacity="0.35" strokeDasharray="2 3" />
      </g>

      {/* Glowing Playbook Step Dots on Landscape */}
      <g fill="#F472B6" opacity="0.75">
        <circle cx="190" cy="320" r="2.5" />
        <circle cx="270" cy="338" r="3" fill="#EC4899" filter="url(#pinkGlow)" />
        <circle cx="350" cy="318" r="2.5" />
        <circle cx="430" cy="328" r="2.5" fill="#F43F5E" />
      </g>
    </svg>
  </div>
);

const CtiCardBackgroundVisual = () => (
  <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] md:w-[55%] lg:w-[50%] pointer-events-none overflow-hidden rounded-2xl z-0 opacity-45 transition-opacity duration-500 group-hover:opacity-60">
    {/* Radial Emerald/Teal Glow behind CTI Intelligence Core */}
    <div className="absolute right-[5%] top-[40%] -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.45)_0%,rgba(6,182,212,0.15)_50%,transparent_75%)] blur-2xl pointer-events-none" />

    {/* Left Gradient Blend Overlay for Text Contrast */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#18112b] via-[#18112b]/70 to-transparent z-10 pointer-events-none" />

    {/* SVG Artwork: Global Threat Map, Threat Arc Connections, IOC Nodes, Radar HUD, MITRE Matrix */}
    <svg
      viewBox="0 0 500 400"
      className="absolute right-[-20px] sm:right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[500px] h-[350px] sm:h-[400px] object-contain pointer-events-none select-none z-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softTealGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Linear Gradients */}
        <linearGradient id="ctiArcGrad" x1="100" y1="80" x2="440" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
          <stop offset="40%" stopColor="#10B981" stopOpacity="0.8" />
          <stop offset="80%" stopColor="#34D399" stopOpacity="1" />
          <stop offset="100%" stopColor="#A7F3D0" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="ctiFeedGrad" x1="80" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.4" />
          <stop offset="80%" stopColor="#06B6D4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="geoGridGrad" x1="0" y1="280" x2="500" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#059669" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#10B981" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* 1. Global Map Geographic Grid Lines (Lat / Long) */}
      <g stroke="#10B981" strokeOpacity="0.18" strokeWidth="0.8" strokeDasharray="4 6">
        <ellipse cx="330" cy="170" rx="140" ry="90" fill="none" />
        <line x1="80" y1="170" x2="480" y2="170" />
        <line x1="100" y1="120" x2="460" y2="120" />
        <line x1="100" y1="220" x2="460" y2="220" />
        <line x1="330" y1="30" x2="330" y2="310" />
        <line x1="230" y1="50" x2="230" y2="290" strokeDasharray="3 5" />
        <line x1="430" y1="50" x2="430" y2="290" strokeDasharray="3 5" />
      </g>

      {/* 2. Dotted Continent Landmass Silhouettes */}
      {/* North / South America (West) */}
      <g fill="#10B981" opacity="0.3">
        <circle cx="160" cy="110" r="2" /><circle cx="170" cy="105" r="2.5" /><circle cx="180" cy="115" r="2" /><circle cx="190" cy="110" r="2" />
        <circle cx="175" cy="125" r="2" /><circle cx="185" cy="135" r="2.5" /><circle cx="195" cy="145" r="2" />
        <circle cx="200" cy="175" r="2" /><circle cx="205" cy="190" r="2.5" /><circle cx="210" cy="205" r="2" /><circle cx="215" cy="220" r="2" />
      </g>
      {/* Europe / Africa (Central) */}
      <g fill="#34D399" opacity="0.35">
        <circle cx="290" cy="100" r="2.5" /><circle cx="300" cy="95" r="2" /><circle cx="310" cy="105" r="2.5" /><circle cx="320" cy="110" r="2" />
        <circle cx="295" cy="130" r="2" /><circle cx="305" cy="145" r="2.5" /><circle cx="315" cy="160" r="2" /><circle cx="310" cy="175" r="2.5" /><circle cx="320" cy="190" r="2" />
      </g>
      {/* Asia / Pacific (East) */}
      <g fill="#06B6D4" opacity="0.35">
        <circle cx="370" cy="90" r="2.5" /><circle cx="385" cy="85" r="2" /><circle cx="400" cy="95" r="2.5" /><circle cx="415" cy="90" r="2" /><circle cx="430" cy="100" r="2.5" />
        <circle cx="380" cy="110" r="2" /><circle cx="395" cy="115" r="2.5" /><circle cx="410" cy="120" r="2" /><circle cx="425" cy="130" r="2" />
        <circle cx="415" cy="160" r="2" /><circle cx="430" cy="175" r="2.5" /><circle cx="445" cy="190" r="2" />
      </g>

      {/* 3. Concentric Threat Radar & Intelligence HUD */}
      <g stroke="#10B981" strokeOpacity="0.35" fill="none">
        <circle cx="330" cy="170" r="130" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="330" cy="170" r="105" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="330" cy="170" r="80" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="330" cy="170" r="50" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="330" cy="170" r="22" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.4" />
      </g>

      {/* Crosshairs & Tactical Radar Ticks */}
      <g stroke="#34D399" strokeOpacity="0.55" strokeWidth="1.2">
        <line x1="330" y1="28" x2="330" y2="42" />
        <line x1="330" y1="298" x2="330" y2="312" />
        <line x1="188" y1="170" x2="202" y2="170" />
        <line x1="458" y1="170" x2="472" y2="170" />
      </g>

      {/* 4. Threat Origin Trajectory Arcs (Cross-Border Attacks) */}
      <path
        d="M 180 115 Q 260 50 380 90"
        fill="none"
        stroke="url(#ctiArcGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        filter="url(#emeraldGlow)"
      />
      <path
        d="M 430 100 Q 370 190 210 205"
        fill="none"
        stroke="url(#ctiArcGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="6 3"
        filter="url(#emeraldGlow)"
      />
      <path
        d="M 310 105 Q 350 200 445 190"
        fill="none"
        stroke="url(#ctiArcGrad)"
        strokeWidth="1.8"
        strokeLinecap="round"
        filter="url(#emeraldGlow)"
      />

      {/* 5. IOC (Indicators of Compromise) Data Points & Node Badges */}
      {/* Node 1: Threat Origin (America) */}
      <circle cx="180" cy="115" r="5" fill="#06B6D4" filter="url(#emeraldGlow)" />
      <circle cx="180" cy="115" r="2.5" fill="#FFFFFF" />

      {/* Node 2: Primary Target Core (Europe/Central) */}
      <circle cx="330" cy="170" r="14" fill="rgba(24,17,43,0.9)" stroke="#10B981" strokeWidth="2" filter="url(#softTealGlow)" />
      <circle cx="330" cy="170" r="6" fill="#34D399" filter="url(#emeraldGlow)" />
      <circle cx="330" cy="170" r="2.5" fill="#FFFFFF" />

      {/* Node 3: Threat Cluster (Asia East) */}
      <circle cx="380" cy="90" r="6" fill="#10B981" filter="url(#emeraldGlow)" />
      <circle cx="380" cy="90" r="2.5" fill="#FFFFFF" />

      {/* Node 4: Secondary Target (Latin America) */}
      <circle cx="210" cy="205" r="4.5" fill="#34D399" filter="url(#emeraldGlow)" />
      <circle cx="210" cy="205" r="2" fill="#FFFFFF" />

      {/* Node 5: Threat Feed Node (Pacific East) */}
      <circle cx="445" cy="190" r="5" fill="#06B6D4" filter="url(#emeraldGlow)" />
      <circle cx="445" cy="190" r="2" fill="#FFFFFF" />

      {/* Tactical MITRE ATT&CK Matrix Connectors */}
      <g stroke="#34D399" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 4">
        <line x1="180" y1="115" x2="210" y2="205" />
        <line x1="380" y1="90" x2="330" y2="170" />
        <line x1="330" y1="170" x2="445" y2="190" />
        <line x1="210" y1="205" x2="330" y2="170" />
      </g>

      {/* 6. Intelligence Feed Streams & Data Packets */}
      <g stroke="url(#ctiFeedGrad)" strokeWidth="1.8" strokeLinecap="round" fill="none">
        <path d="M 110 70 H 230 L 260 45 H 430" />
        <path d="M 130 260 H 250 L 280 285 H 460" />
      </g>

      {/* Moving IOC Data Packet Indicators */}
      <g fill="#34D399" opacity="0.85" filter="url(#emeraldGlow)">
        <rect x="190" y="68" width="16" height="4" rx="2" fill="#A7F3D0" />
        <rect x="340" y="43" width="18" height="4" rx="2" />
        <rect x="210" y="258" width="14" height="4" rx="2" fill="#06B6D4" />
        <rect x="360" y="283" width="20" height="4" rx="2" />
      </g>

      {/* 7. Bottom Perspective Geographic Matrix Landscape */}
      <g stroke="url(#geoGridGrad)" strokeWidth="1" fill="none">
        <path d="M 50 330 Q 180 305 310 325 T 500 305" />
        <path d="M 50 345 Q 180 320 310 340 T 500 320" />
        <path d="M 50 360 Q 180 335 310 355 T 500 335" />
        <path d="M 50 375 Q 180 350 310 370 T 500 350" />

        <line x1="110" y1="375" x2="110" y2="320" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="190" y1="375" x2="190" y2="310" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="270" y1="375" x2="270" y2="315" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="350" y1="375" x2="350" y2="305" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="430" y1="375" x2="430" y2="308" strokeOpacity="0.35" strokeDasharray="2 3" />
      </g>

      {/* Glowing CTI Threat Dots on Landscape */}
      <g fill="#34D399" opacity="0.75">
        <circle cx="190" cy="320" r="2.5" />
        <circle cx="270" cy="338" r="3" fill="#10B981" filter="url(#emeraldGlow)" />
        <circle cx="350" cy="318" r="2.5" />
        <circle cx="430" cy="328" r="2.5" fill="#06B6D4" />
      </g>
    </svg>
  </div>
);

const PamCardBackgroundVisual = () => (
  <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] md:w-[55%] lg:w-[50%] pointer-events-none overflow-hidden rounded-2xl z-0 opacity-45 transition-opacity duration-500 group-hover:opacity-60">
    {/* Radial Crimson Glow behind PAM Vault Core */}
    <div className="absolute right-[5%] top-[40%] -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.45)_0%,rgba(153,27,27,0.15)_50%,transparent_75%)] blur-2xl pointer-events-none" />

    {/* Left Gradient Blend Overlay for Text Contrast */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#18112b] via-[#18112b]/70 to-transparent z-10 pointer-events-none" />

    {/* SVG Artwork: Secure Vault, Keyhole Lock Cylinder, Identity Nodes, Zero Trust Flow, Session HUD */}
    <svg
      viewBox="0 0 500 400"
      className="absolute right-[-20px] sm:right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[500px] h-[350px] sm:h-[400px] object-contain pointer-events-none select-none z-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softCrimsonGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Linear Gradients */}
        <linearGradient id="pamVaultGrad" x1="260" y1="60" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FCA5A5" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#EF4444" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#991B1B" stopOpacity="0.45" />
        </linearGradient>

        <linearGradient id="pamKeyGrad" x1="310" y1="130" x2="370" y2="230" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FEE2E2" />
          <stop offset="100%" stopColor="#F87171" />
        </linearGradient>

        <linearGradient id="pamFlowGrad" x1="80" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0" />
          <stop offset="40%" stopColor="#EF4444" stopOpacity="0.4" />
          <stop offset="75%" stopColor="#F87171" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#DC2626" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="vaultGridGrad" x1="0" y1="280" x2="500" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7F1D1D" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#EF4444" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#F87171" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* 1. Background Encrypted Vault Grid Lines */}
      <g stroke="#EF4444" strokeOpacity="0.18" strokeWidth="0.8" strokeDasharray="4 6">
        <line x1="80" y1="70" x2="480" y2="70" />
        <line x1="110" y1="120" x2="480" y2="120" />
        <line x1="60" y1="170" x2="480" y2="170" />
        <line x1="120" y1="220" x2="480" y2="220" />
        <line x1="90" y1="270" x2="480" y2="270" />
      </g>

      {/* 2. Concentric Vault Lock HUD Rings & Security Teeth */}
      <g stroke="#EF4444" strokeOpacity="0.3" fill="none">
        <circle cx="340" cy="170" r="135" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="340" cy="170" r="110" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="340" cy="170" r="85" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="340" cy="170" r="55" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="340" cy="170" r="25" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.4" />
      </g>

      {/* Vault Radial Locking Ticks */}
      <g stroke="#F87171" strokeOpacity="0.55" strokeWidth="1.5">
        <line x1="340" y1="25" x2="340" y2="40" />
        <line x1="340" y1="300" x2="340" y2="315" />
        <line x1="195" y1="170" x2="210" y2="170" />
        <line x1="470" y1="170" x2="485" y2="170" />
        <line x1="262" y1="92" x2="272" y2="102" />
        <line x1="408" y1="238" x2="418" y2="248" />
        <line x1="408" y1="102" x2="418" y2="92" />
        <line x1="262" y1="248" x2="272" y2="238" />
      </g>

      {/* 3. Outer Secure Vault Door Frame & Locking Bolts */}
      <rect
        x="270"
        y="100"
        width="140"
        height="140"
        rx="24"
        fill="rgba(24, 17, 43, 0.85)"
        stroke="url(#pamVaultGrad)"
        strokeWidth="3"
        filter="url(#softCrimsonGlow)"
      />
      <rect
        x="285"
        y="115"
        width="110"
        height="110"
        rx="16"
        fill="none"
        stroke="#F87171"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        strokeOpacity="0.6"
      />

      {/* 4. Vault Keyhole & Cylinder Aperture Core */}
      <circle cx="340" cy="170" r="28" fill="rgba(127,29,29,0.3)" stroke="url(#pamKeyGrad)" strokeWidth="2.5" filter="url(#redGlow)" />
      {/* Keyhole Shape */}
      <circle cx="340" cy="162" r="7" fill="#FEE2E2" filter="url(#redGlow)" />
      <path d="M 334 165 L 346 165 L 348 182 L 332 182 Z" fill="#FEE2E2" />

      {/* 5. Zero Trust Access Flowlines & Identity Verification Nodes */}
      <g stroke="url(#pamFlowGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M 90 170 H 180 L 210 120 H 270" />
        <path d="M 180 170 L 210 220 H 270" />
        <path d="M 410 170 H 480" />
        <path d="M 410 120 H 460" />
        <path d="M 410 220 H 460" />
        <path d="M 140 70 H 260 L 290 40 H 440" />
        <path d="M 150 270 H 270 L 300 300 H 460" />
      </g>

      {/* Identity & Session Nodes */}
      {/* Node 1: Identity Verification Start */}
      <circle cx="180" cy="170" r="6" fill="#F87171" filter="url(#redGlow)" />
      <circle cx="180" cy="170" r="2.5" fill="#FFFFFF" />

      {/* Node 2 & 3: Upper & Lower Access Controls */}
      <circle cx="210" cy="120" r="4.5" fill="#EF4444" filter="url(#redGlow)" />
      <circle cx="210" cy="220" r="4.5" fill="#EF4444" filter="url(#redGlow)" />

      {/* Node 4: Session Monitoring Target */}
      <circle cx="450" cy="170" r="5.5" fill="#F87171" filter="url(#redGlow)" />
      <circle cx="450" cy="170" r="2" fill="#FFFFFF" />

      {/* Moving Encrypted Credential Packets */}
      <g fill="#F87171" opacity="0.85" filter="url(#redGlow)">
        <rect x="130" y="168" width="16" height="4" rx="2" fill="#FEE2E2" />
        <rect x="225" y="118" width="14" height="4" rx="2" />
        <rect x="225" y="218" width="14" height="4" rx="2" />
        <rect x="420" y="168" width="18" height="4" rx="2" fill="#FEE2E2" />
      </g>

      {/* 6. Bottom Perspective Security Matrix Landscape */}
      <g stroke="url(#vaultGridGrad)" strokeWidth="1" fill="none">
        <path d="M 50 330 Q 180 305 310 325 T 500 305" />
        <path d="M 50 345 Q 180 320 310 340 T 500 320" />
        <path d="M 50 360 Q 180 335 310 355 T 500 335" />
        <path d="M 50 375 Q 180 350 310 370 T 500 350" />

        <line x1="110" y1="375" x2="110" y2="320" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="190" y1="375" x2="190" y2="310" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="270" y1="375" x2="270" y2="315" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="350" y1="375" x2="350" y2="305" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="430" y1="375" x2="430" y2="308" strokeOpacity="0.35" strokeDasharray="2 3" />
      </g>

      {/* Glowing PAM Security Dots on Landscape */}
      <g fill="#F87171" opacity="0.75">
        <circle cx="190" cy="320" r="2.5" />
        <circle cx="270" cy="338" r="3" fill="#EF4444" filter="url(#redGlow)" />
        <circle cx="350" cy="318" r="2.5" />
        <circle cx="430" cy="328" r="2.5" fill="#DC2626" />
      </g>
    </svg>
  </div>
);

const GrcCardBackgroundVisual = () => (
  <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] md:w-[55%] lg:w-[50%] pointer-events-none overflow-hidden rounded-2xl z-0 opacity-45 transition-opacity duration-500 group-hover:opacity-60">
    {/* Radial Amber/Gold Glow behind GRC Core */}
    <div className="absolute right-[5%] top-[40%] -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.45)_0%,rgba(180,83,9,0.15)_50%,transparent_75%)] blur-2xl pointer-events-none" />

    {/* Left Gradient Blend Overlay for Text Contrast */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#18112b] via-[#18112b]/70 to-transparent z-10 pointer-events-none" />

    {/* SVG Artwork: GRC Risk Assessment, Compliance Checklist, Governance Framework, HUD, Audit Paths */}
    <svg
      viewBox="0 0 500 400"
      className="absolute right-[-20px] sm:right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[500px] h-[350px] sm:h-[400px] object-contain pointer-events-none select-none z-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="amberGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softAmberGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Linear Gradients */}
        <linearGradient id="grcShieldGrad" x1="260" y1="60" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#B45309" stopOpacity="0.45" />
        </linearGradient>

        <linearGradient id="grcLockGrad" x1="310" y1="130" x2="370" y2="230" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FEF3C7" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        <linearGradient id="grcFlowGrad" x1="80" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0" />
          <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.4" />
          <stop offset="75%" stopColor="#FBBF24" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="grcAuditStreamGrad" x1="60" y1="170" x2="470" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#78350F" stopOpacity="0.2" />
          <stop offset="35%" stopColor="#F59E0B" stopOpacity="0.85" />
          <stop offset="75%" stopColor="#FBBF24" stopOpacity="1" />
          <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="grcMatrixGridGrad" x1="0" y1="280" x2="500" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#78350F" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#F59E0B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* 1. Background Encrypted Audit Grid Lines & Risk Matrix */}
      <g stroke="#F59E0B" strokeOpacity="0.18" strokeWidth="0.8" strokeDasharray="4 6">
        <line x1="80" y1="70" x2="480" y2="70" />
        <line x1="110" y1="120" x2="480" y2="120" />
        <line x1="60" y1="170" x2="480" y2="170" />
        <line x1="120" y1="220" x2="480" y2="220" />
        <line x1="90" y1="270" x2="480" y2="270" />
      </g>

      {/* 2. Concentric Compliance / Risk HUD Rings */}
      <g stroke="#F59E0B" strokeOpacity="0.3" fill="none">
        <circle cx="340" cy="170" r="135" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="340" cy="170" r="110" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="340" cy="170" r="85" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="340" cy="170" r="55" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="340" cy="170" r="25" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.4" />
      </g>

      {/* Risk HUD Angle Ticks & Compass Markers */}
      <g stroke="#FBBF24" strokeOpacity="0.55" strokeWidth="1.5">
        <line x1="340" y1="25" x2="340" y2="40" />
        <line x1="340" y1="300" x2="340" y2="315" />
        <line x1="195" y1="170" x2="210" y2="170" />
        <line x1="470" y1="170" x2="485" y2="170" />
        <line x1="262" y1="92" x2="272" y2="102" />
        <line x1="408" y1="238" x2="418" y2="248" />
        <line x1="408" y1="102" x2="418" y2="92" />
        <line x1="262" y1="248" x2="272" y2="238" />
      </g>

      {/* 3. Central Compliance Shield & Governance Emblem */}
      {/* Outer Glowing Compliance Shield */}
      <path
        d="M 340 55 L 415 90 V 175 C 415 235 340 275 340 285 C 340 275 265 235 265 175 V 90 Z"
        fill="rgba(245,158,11,0.08)"
        stroke="#F59E0B"
        strokeWidth="2"
        strokeOpacity="0.45"
        filter="url(#softAmberGlow)"
      />
      {/* Inner Shield Contour */}
      <path
        d="M 340 62 L 408 94 V 172 C 408 226 340 264 340 273 C 340 264 272 226 272 172 V 94 Z"
        fill="none"
        stroke="url(#grcShieldGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#amberGlow)"
      />
      <path
        d="M 340 75 L 396 102 V 168 C 396 214 340 248 340 256 C 340 248 284 214 284 168 V 102 Z"
        fill="rgba(251,191,36,0.06)"
        stroke="#FEF3C7"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        strokeOpacity="0.65"
      />

      {/* Compliance Verification Seal / Checkmark Emblem inside Shield */}
      <circle cx="340" cy="165" r="28" fill="rgba(24, 17, 43, 0.9)" stroke="url(#grcLockGrad)" strokeWidth="2.5" filter="url(#amberGlow)" />
      {/* Verification Checkmark */}
      <path
        d="M 326 165 L 335 174 L 354 153"
        fill="none"
        stroke="#FEF3C7"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#amberGlow)"
      />

      {/* 4. Governance Framework Pathways & Continuous Audit Line */}
      <g stroke="url(#grcFlowGrad)" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M 85 170 H 175 L 205 120 H 280" />
        <path d="M 175 170 L 205 220 H 280" />
        <path d="M 400 170 H 475" />
        <path d="M 400 115 H 465" />
        <path d="M 400 225 H 465" />
        <path d="M 135 70 H 255 L 285 40 H 440" />
        <path d="M 145 270 H 265 L 295 300 H 455" />
      </g>

      {/* Audit Pipeline Pulse Signal (Risk Assessment -> Vulnerability Audit -> Compliance -> Governance -> Continuous Monitoring) */}
      <path
        d="M 60 170 H 165 L 180 135 L 195 195 L 210 115 L 230 225 L 250 140 L 270 200 L 288 155 L 305 170 H 475"
        fill="none"
        stroke="url(#grcAuditStreamGrad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#amberGlow)"
      />

      {/* Audit Flow Key Milestones / Nodes */}
      {/* Node 1: Risk Assessment Node */}
      <g filter="url(#amberGlow)">
        <polygon points="180,128 190,145 170,145" fill="rgba(24,17,43,0.9)" stroke="#F59E0B" strokeWidth="1.8" />
        <text x="180" y="142" fontSize="9" fontWeight="bold" fill="#FEF3C7" textAnchor="middle">!</text>
      </g>

      {/* Node 2: Vulnerability Audit Node */}
      <circle cx="210" cy="225" r="7" fill="rgba(24,17,43,0.9)" stroke="#FBBF24" strokeWidth="2" filter="url(#amberGlow)" />
      <circle cx="210" cy="225" r="3" fill="#FEF3C7" />

      {/* Node 3: Compliance Frameworks Node */}
      <rect x="268" y="98" width="24" height="24" rx="5" fill="rgba(24,17,43,0.9)" stroke="#F59E0B" strokeWidth="1.8" filter="url(#amberGlow)" />
      <path d="M 275 110 L 279 114 L 285 107" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* Node 4: Continuous Monitoring Output Node */}
      <circle cx="455" cy="170" r="7" fill="#F59E0B" filter="url(#softAmberGlow)" />
      <circle cx="455" cy="170" r="3" fill="#FFFFFF" />

      {/* 5. GRC Risk Assessment Panel & Compliance Checklist Widgets */}
      {/* Top Widget: Risk Scoring Dashboard Index */}
      <g filter="url(#amberGlow)">
        <rect x="382" y="68" width="94" height="42" rx="7" fill="rgba(24,17,43,0.92)" stroke="#F59E0B" strokeWidth="1.5" />
        {/* Risk Level Badge */}
        <rect x="390" y="74" width="46" height="12" rx="3" fill="rgba(245,158,11,0.2)" />
        <text x="413" y="83" fontSize="7" fontWeight="bold" fill="#FBBF24" textAnchor="middle" letterSpacing="0.5">LOW RISK</text>
        <text x="466" y="83" fontSize="8" fontWeight="black" fill="#FEF3C7" textAnchor="end">98%</text>
        {/* Risk Score Progress Bar */}
        <rect x="390" y="92" width="78" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="390" y="92" width="72" height="4" rx="2" fill="url(#grcLockGrad)" />
      </g>

      {/* Bottom Widget: Regulatory Compliance Checklist (ISO / SOC2 / GDPR) */}
      <g filter="url(#amberGlow)">
        <rect x="382" y="202" width="94" height="46" rx="7" fill="rgba(24,17,43,0.92)" stroke="#FBBF24" strokeWidth="1.5" />
        {/* Checklist Item 1 */}
        <circle cx="394" cy="214" r="3" fill="#F59E0B" />
        <line x1="402" y1="214" x2="466" y2="214" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.9" />
        {/* Checklist Item 2 */}
        <circle cx="394" cy="225" r="3" fill="#F59E0B" />
        <line x1="402" y1="225" x2="456" y2="225" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75" />
        {/* Checklist Item 3 */}
        <circle cx="394" cy="236" r="3" fill="#F59E0B" />
        <line x1="402" y1="236" x2="446" y2="236" stroke="#FEF3C7" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
      </g>

      {/* Moving Encrypted Data Packets */}
      <g fill="#FBBF24" opacity="0.85" filter="url(#amberGlow)">
        <rect x="125" y="168" width="16" height="4" rx="2" fill="#FEF3C7" />
        <rect x="220" y="118" width="14" height="4" rx="2" />
        <rect x="220" y="218" width="14" height="4" rx="2" />
        <rect x="415" y="168" width="18" height="4" rx="2" fill="#FEF3C7" />
      </g>

      {/* 6. Bottom Perspective Audit Matrix Landscape */}
      <g stroke="url(#grcMatrixGridGrad)" strokeWidth="1" fill="none">
        <path d="M 50 330 Q 180 305 310 325 T 500 305" />
        <path d="M 50 345 Q 180 320 310 340 T 500 320" />
        <path d="M 50 360 Q 180 335 310 355 T 500 335" />
        <path d="M 50 375 Q 180 350 310 370 T 500 350" />

        <line x1="110" y1="375" x2="110" y2="320" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="190" y1="375" x2="190" y2="310" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="270" y1="375" x2="270" y2="315" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="350" y1="375" x2="350" y2="305" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="430" y1="375" x2="430" y2="308" strokeOpacity="0.35" strokeDasharray="2 3" />
      </g>

      {/* Glowing GRC Security Dots on Landscape */}
      <g fill="#FBBF24" opacity="0.75">
        <circle cx="190" cy="320" r="2.5" />
        <circle cx="270" cy="338" r="3" fill="#F59E0B" filter="url(#amberGlow)" />
        <circle cx="350" cy="318" r="2.5" />
        <circle cx="430" cy="328" r="2.5" fill="#D97706" />
      </g>
    </svg>
  </div>
);

const AiSecurityCardBackgroundVisual = () => (
  <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] md:w-[55%] lg:w-[50%] pointer-events-none overflow-hidden rounded-2xl z-0 opacity-45 transition-opacity duration-500 group-hover:opacity-60">
    {/* Radial Purple Glow behind AI Model Core */}
    <div className="absolute right-[5%] top-[40%] -translate-y-1/2 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.45)_0%,rgba(124,58,237,0.15)_50%,transparent_75%)] blur-2xl pointer-events-none" />

    {/* Left Gradient Blend Overlay for Text Contrast */}
    <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#18112b] via-[#18112b]/70 to-transparent z-10 pointer-events-none" />

    {/* SVG Artwork: Neural Network, LLM Shield, ML Model Enclave, Synaptic Paths, Vector Grid */}
    <svg
      viewBox="0 0 500 400"
      className="absolute right-[-20px] sm:right-0 top-1/2 -translate-y-1/2 w-[420px] sm:w-[500px] h-[350px] sm:h-[400px] object-contain pointer-events-none select-none z-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Glow Filters */}
        <filter id="purpleGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="softPurpleGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Linear Gradients */}
        <linearGradient id="aiShieldGrad" x1="260" y1="60" x2="420" y2="280" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DDD6FE" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.45" />
        </linearGradient>

        <linearGradient id="aiCoreGrad" x1="310" y1="130" x2="370" y2="230" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F3E8FF" />
          <stop offset="100%" stopColor="#A78BFA" />
        </linearGradient>

        <linearGradient id="neuralFlowGrad" x1="80" y1="0" x2="480" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
          <stop offset="40%" stopColor="#8B5CF6" stopOpacity="0.4" />
          <stop offset="75%" stopColor="#C4B5FD" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.95" />
        </linearGradient>

        <linearGradient id="aiDataStreamGrad" x1="60" y1="170" x2="470" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4C1D95" stopOpacity="0.2" />
          <stop offset="35%" stopColor="#8B5CF6" stopOpacity="0.85" />
          <stop offset="75%" stopColor="#C4B5FD" stopOpacity="1" />
          <stop offset="100%" stopColor="#E9D5FF" stopOpacity="0.9" />
        </linearGradient>

        <linearGradient id="aiGridGrad" x1="0" y1="280" x2="500" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#5B21B6" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* 1. Background Encrypted Synaptic Grid Lines */}
      <g stroke="#8B5CF6" strokeOpacity="0.18" strokeWidth="0.8" strokeDasharray="4 6">
        <line x1="80" y1="70" x2="480" y2="70" />
        <line x1="110" y1="120" x2="480" y2="120" />
        <line x1="60" y1="170" x2="480" y2="170" />
        <line x1="120" y1="220" x2="480" y2="220" />
        <line x1="90" y1="270" x2="480" y2="270" />
      </g>

      {/* 2. Concentric AI Neural HUD Rings & Synaptic Reticle */}
      <g stroke="#8B5CF6" strokeOpacity="0.3" fill="none">
        <circle cx="340" cy="170" r="135" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="340" cy="170" r="110" strokeWidth="1.2" strokeOpacity="0.45" />
        <circle cx="340" cy="170" r="85" strokeWidth="1" strokeDasharray="3 7" />
        <circle cx="340" cy="170" r="55" strokeWidth="1.5" strokeOpacity="0.5" />
        <circle cx="340" cy="170" r="25" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.4" />
      </g>

      {/* Neural HUD Angle Ticks */}
      <g stroke="#C4B5FD" strokeOpacity="0.55" strokeWidth="1.5">
        <line x1="340" y1="25" x2="340" y2="40" />
        <line x1="340" y1="300" x2="340" y2="315" />
        <line x1="195" y1="170" x2="210" y2="170" />
        <line x1="470" y1="170" x2="485" y2="170" />
        <line x1="262" y1="92" x2="272" y2="102" />
        <line x1="408" y1="238" x2="418" y2="248" />
        <line x1="408" y1="102" x2="418" y2="92" />
        <line x1="262" y1="248" x2="272" y2="238" />
      </g>

      {/* 3. Deep Neural Network Graph & Layer Interconnections */}
      {/* Input Layer Connections (Left) */}
      <g stroke="url(#neuralFlowGrad)" strokeWidth="1.2" strokeOpacity="0.6" fill="none">
        <line x1="130" y1="110" x2="210" y2="90" />
        <line x1="130" y1="110" x2="210" y2="150" />
        <line x1="130" y1="170" x2="210" y2="90" />
        <line x1="130" y1="170" x2="210" y2="150" />
        <line x1="130" y1="170" x2="210" y2="210" />
        <line x1="130" y1="230" x2="210" y2="210" />
        <line x1="130" y1="230" x2="210" y2="270" />

        {/* Hidden Layer 1 -> Model Enclave Core Connections */}
        <line x1="210" y1="90" x2="290" y2="110" />
        <line x1="210" y1="150" x2="290" y2="110" />
        <line x1="210" y1="150" x2="290" y2="170" />
        <line x1="210" y1="210" x2="290" y2="170" />
        <line x1="210" y1="210" x2="290" y2="230" />
        <line x1="210" y1="270" x2="290" y2="230" />
      </g>

      {/* Synaptic Layer Nodes */}
      <g fill="#A78BFA" opacity="0.85" filter="url(#purpleGlow)">
        {/* Input Layer Dots */}
        <circle cx="130" cy="110" r="4" />
        <circle cx="130" cy="170" r="4.5" fill="#DDD6FE" />
        <circle cx="130" cy="230" r="4" />

        {/* Hidden Layer 1 Dots */}
        <circle cx="210" cy="90" r="4.5" />
        <circle cx="210" cy="150" r="5" fill="#C4B5FD" />
        <circle cx="210" cy="210" r="5" fill="#C4B5FD" />
        <circle cx="210" cy="270" r="4.5" />

        {/* Hidden Layer 2 / Model Boundary Dots */}
        <circle cx="290" cy="110" r="5" />
        <circle cx="290" cy="170" r="6" fill="#E9D5FF" />
        <circle cx="290" cy="230" r="5" />
      </g>

      {/* 4. Central AI Model Defense Enclave & Shield Core */}
      {/* Outer AI Defense Shield */}
      <path
        d="M 340 55 L 415 90 V 175 C 415 235 340 275 340 285 C 340 275 265 235 265 175 V 90 Z"
        fill="rgba(139,92,246,0.08)"
        stroke="#8B5CF6"
        strokeWidth="2"
        strokeOpacity="0.45"
        filter="url(#softPurpleGlow)"
      />
      {/* Inner Shield Contour */}
      <path
        d="M 340 62 L 408 94 V 172 C 408 226 340 264 340 273 C 340 264 272 226 272 172 V 94 Z"
        fill="none"
        stroke="url(#aiShieldGrad)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#purpleGlow)"
      />
      <path
        d="M 340 75 L 396 102 V 168 C 396 214 340 248 340 256 C 340 248 284 214 284 168 V 102 Z"
        fill="rgba(196,181,253,0.06)"
        stroke="#DDD6FE"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        strokeOpacity="0.65"
      />

      {/* Central AI Microchip / Processor Core Emblem inside Shield */}
      <rect
        x="322"
        y="147"
        width="36"
        height="36"
        rx="8"
        fill="rgba(24, 17, 43, 0.95)"
        stroke="url(#aiCoreGrad)"
        strokeWidth="2.5"
        filter="url(#purpleGlow)"
      />
      {/* CPU / Neural Processor Pins */}
      <g stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round">
        <line x1="330" y1="147" x2="330" y2="141" />
        <line x1="340" y1="147" x2="340" y2="141" />
        <line x1="350" y1="147" x2="350" y2="141" />
        <line x1="330" y1="183" x2="330" y2="189" />
        <line x1="340" y1="183" x2="340" y2="189" />
        <line x1="350" y1="183" x2="350" y2="189" />
        <line x1="322" y1="155" x2="316" y2="155" />
        <line x1="322" y1="165" x2="316" y2="165" />
        <line x1="322" y1="175" x2="316" y2="175" />
        <line x1="358" y1="155" x2="364" y2="155" />
        <line x1="358" y1="165" x2="364" y2="165" />
        <line x1="358" y1="175" x2="364" y2="175" />
      </g>
      {/* AI Synaptic Core Indicator */}
      <circle cx="340" cy="165" r="5" fill="#C4B5FD" filter="url(#purpleGlow)" />
      <circle cx="340" cy="165" r="2" fill="#FFFFFF" />

      {/* 5. Main AI Data & Inference Pipeline Signal */}
      {/* Path: AI Model -> Data -> Threat Detection -> Model Defense -> Secure AI */}
      <path
        d="M 60 170 H 130 L 155 125 L 180 205 L 210 90 L 245 240 L 275 130 L 290 170 H 475"
        fill="none"
        stroke="url(#aiDataStreamGrad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#purpleGlow)"
      />

      {/* ML Threat Detection Node (Poisoning / Prompt Injection Warning) */}
      <g filter="url(#purpleGlow)">
        <polygon points="210,95 220,112 200,112" fill="rgba(24,17,43,0.9)" stroke="#8B5CF6" strokeWidth="1.8" />
        <text x="210" y="109" fontSize="9" fontWeight="bold" fill="#DDD6FE" textAnchor="middle">!</text>
      </g>

      {/* Output Secure AI Node */}
      <circle cx="455" cy="170" r="7" fill="#8B5CF6" filter="url(#softPurpleGlow)" />
      <circle cx="455" cy="170" r="3" fill="#FFFFFF" />

      {/* 6. Enterprise AI Security Widgets (LLM Shield & Model Poisoning Defense) */}
      {/* Widget 1: LLM Prompt Security Dashboard */}
      <g filter="url(#purpleGlow)">
        <rect x="382" y="68" width="94" height="42" rx="7" fill="rgba(24,17,43,0.92)" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="390" y="74" width="52" height="12" rx="3" fill="rgba(139,92,246,0.2)" />
        <text x="416" y="83" fontSize="6.5" fontWeight="bold" fill="#C4B5FD" textAnchor="middle" letterSpacing="0.5">LLM SHIELD</text>
        <text x="466" y="83" fontSize="8" fontWeight="black" fill="#E9D5FF" textAnchor="end">99%</text>
        {/* Progress Bar */}
        <rect x="390" y="92" width="78" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
        <rect x="390" y="92" width="74" height="4" rx="2" fill="url(#aiCoreGrad)" />
      </g>

      {/* Widget 2: AI Model Defense & Poisoning Protection Matrix */}
      <g filter="url(#purpleGlow)">
        <rect x="382" y="202" width="94" height="46" rx="7" fill="rgba(24,17,43,0.92)" stroke="#C4B5FD" strokeWidth="1.5" />
        {/* Vector Line 1 */}
        <circle cx="394" cy="214" r="3" fill="#8B5CF6" />
        <line x1="402" y1="214" x2="466" y2="214" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.9" />
        {/* Vector Line 2 */}
        <circle cx="394" cy="225" r="3" fill="#8B5CF6" />
        <line x1="402" y1="225" x2="456" y2="225" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.75" />
        {/* Vector Line 3 */}
        <circle cx="394" cy="236" r="3" fill="#8B5CF6" />
        <line x1="402" y1="236" x2="446" y2="236" stroke="#E9D5FF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.6" />
      </g>

      {/* Moving Neural Data Packets */}
      <g fill="#C4B5FD" opacity="0.85" filter="url(#purpleGlow)">
        <rect x="110" y="168" width="16" height="4" rx="2" fill="#E9D5FF" />
        <rect x="235" y="118" width="14" height="4" rx="2" />
        <rect x="235" y="218" width="14" height="4" rx="2" />
        <rect x="415" y="168" width="18" height="4" rx="2" fill="#E9D5FF" />
      </g>

      {/* 7. Bottom Perspective Neural Mesh Landscape */}
      <g stroke="url(#aiGridGrad)" strokeWidth="1" fill="none">
        <path d="M 50 330 Q 180 305 310 325 T 500 305" />
        <path d="M 50 345 Q 180 320 310 340 T 500 320" />
        <path d="M 50 360 Q 180 335 310 355 T 500 335" />
        <path d="M 50 375 Q 180 350 310 370 T 500 350" />

        <line x1="110" y1="375" x2="110" y2="320" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="190" y1="375" x2="190" y2="310" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="270" y1="375" x2="270" y2="315" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="350" y1="375" x2="350" y2="305" strokeOpacity="0.35" strokeDasharray="2 3" />
        <line x1="430" y1="375" x2="430" y2="308" strokeOpacity="0.35" strokeDasharray="2 3" />
      </g>

      {/* Glowing AI Neural Dots on Landscape */}
      <g fill="#C4B5FD" opacity="0.75">
        <circle cx="190" cy="320" r="2.5" />
        <circle cx="270" cy="338" r="3" fill="#8B5CF6" filter="url(#purpleGlow)" />
        <circle cx="350" cy="318" r="2.5" />
        <circle cx="430" cy="328" r="2.5" fill="#6D28D9" />
      </g>
    </svg>
  </div>
);

export default function PlatformDirectory({ onSelectPlatform }) {
  return (
    <section className="relative bg-[#06030b] py-20 md:py-28 border-t border-white/10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,107,0,0.08),transparent_60%)] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 max-w-screen-2xl">
        
        {/* CrowdStrike Style Main Card Container */}
        <div className="bg-[#120b20]/90 border border-white/15 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_30px_70px_rgba(0,0,0,0.85)] backdrop-blur-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#FF6B00] animate-pulse" />
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center gap-2">
                Platform <ArrowRight className="w-6 h-6 text-[#FF6B00]" />
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-medium max-w-xl">
              Explore our 7 specialized cybersecurity engines built into one unified autonomous defense architecture.
            </p>
          </div>

          {/* Platform Directory Vertical Sequence */}
          <div className="flex flex-col items-center gap-10 md:gap-14">
            {NETCRADUS_PLATFORMS.map((plat) => {
              const IconComp = plat.icon;
              const isXdr = plat.id === 'xdr';
              const isSiem = plat.id === 'siem';
              const isSoar = plat.id === 'soar';
              const isCti = plat.id === 'cti';
              const isPam = plat.id === 'pam';
              const isGrc = plat.id === 'grc';
              const isAiSecurity = plat.id === 'aisecurity';
              return (
                <Link
                  key={plat.id}
                  to={plat.path}
                  className="group relative w-full md:w-[90%] lg:w-[80%] max-w-[1000px] bg-[#18112b] border border-white/10 rounded-2xl p-7 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#1e1537] hover:border-[#FF6B00]/50 shadow-lg cursor-pointer flex flex-col justify-between no-underline overflow-hidden"
                  style={{
                    borderColor: plat.border
                  }}
                >
                  {/* Background Visual INSIDE Card - XDR Only */}
                  {isXdr && <XdrCardBackgroundVisual />}

                  {/* Background Visual INSIDE Card - SIEM Only */}
                  {isSiem && <SiemCardBackgroundVisual />}

                  {/* Background Visual INSIDE Card - SOAR Only */}
                  {isSoar && <SoarCardBackgroundVisual />}

                  {/* Background Visual INSIDE Card - CTI Only */}
                  {isCti && <CtiCardBackgroundVisual />}

                  {/* Background Visual INSIDE Card - PAM Only */}
                  {isPam && <PamCardBackgroundVisual />}

                  {/* Background Visual INSIDE Card - GRC Only */}
                  {isGrc && <GrcCardBackgroundVisual />}

                  {/* Background Visual INSIDE Card - AI Security Only */}
                  {isAiSecurity && <AiSecurityCardBackgroundVisual />}

                  <div className="relative z-10">
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="w-13 h-13 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-md"
                        style={{ backgroundColor: plat.bgBadge, color: plat.color }}
                      >
                        <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-md text-white/80 bg-white/5 border border-white/10">
                        {plat.id.toUpperCase()}
                      </span>
                    </div>

                    {/* Platform Title */}
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FF6B00] transition-colors mb-2 flex items-center justify-between">
                      <span>{plat.name}</span>
                      <ArrowRight className="w-5 h-5 text-gray-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>

                    {/* Tagline Highlight */}
                    <div className="inline-block mb-4">
                      <span
                        className="text-xs sm:text-sm font-bold tracking-wide px-3 py-1.5 rounded-lg"
                        style={{ color: plat.color, backgroundColor: plat.bgBadge }}
                      >
                        → {plat.tagline}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                      {plat.description}
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-2 pt-4 border-t border-white/10 text-xs sm:text-sm text-gray-300 font-medium">
                      {plat.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: plat.color }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
