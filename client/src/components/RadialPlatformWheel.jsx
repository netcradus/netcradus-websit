import React from 'react';

export default function RadialPlatformWheel() {
  const CX = 700;
  const CY = 670;

  const p2c = (r, angleDeg) => {
    const rad = (angleDeg * Math.PI) / 180;
    const x = CX + r * Math.cos(rad);
    const y = CY - r * Math.sin(rad);
    return [Math.round(x * 10) / 10, Math.round(y * 10) / 10];
  };

  const arcD = (r, startDeg, endDeg) => {
    const [x1, y1] = p2c(r, startDeg);
    const [x2, y2] = p2c(r, endDeg);
    const largeArc = Math.abs(endDeg - startDeg) > 180 ? 1 : 0;
    const sweep = startDeg > endDeg ? 1 : 0;
    return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} ${sweep} ${x2} ${y2}`;
  };

  const b3Data = [
    { label: "DLP", angle: 158, r: 295, side: "left", llen: 26 },
    { label: "Data Security", angle: 126, r: 295, side: "left", llen: 26 },
    { label: "API Security", angle: 90, r: 295, side: "top", llen: 32 },
    { label: "AppSec", angle: 54, r: 295, side: "right", llen: 26 },
    { label: "Cloud Security", angle: 22, r: 295, side: "right", llen: 26 },
  ];

  const b2Data = [
    { label: "IAM", angle: 172, r: 430, side: "left", llen: 24 },
    { label: "PAM", angle: 148, r: 475, side: "left", llen: 26 },
    { label: "Digital Identity Security", angle: 126, r: 430, side: "left", llen: 28 },
    { label: "Zero Trust", angle: 104, r: 475, side: "left", llen: 26 },
    { label: "Vulnerability Management", angle: 76, r: 475, side: "right", llen: 26 },
    { label: "Cyber Risk Management", angle: 54, r: 430, side: "right", llen: 28 },
    { label: "Patch Management", angle: 32, r: 475, side: "right", llen: 26 },
    { label: "GRC", angle: 10, r: 430, side: "right", llen: 24 },
  ];

  const b1Data = [
    { label: "Security Operations Center (SOC)", angle: 174, r: 585, side: "left", llen: 28 },
    { label: "SIEM", angle: 150, r: 585, side: "left", llen: 26 },
    { label: "SOAR", angle: 122, r: 585, side: "left", llen: 26 },
    { label: "Threat Hunting", angle: 66, r: 585, side: "right", llen: 26 },
    { label: "Threat Intelligence", angle: 38, r: 585, side: "right", llen: 26 },
    { label: "Malware Analysis", angle: 28, r: 625, side: "right", llen: 28 },
    { label: "Reverse Engineering", angle: 16, r: 625, side: "right", llen: 28 },
    { label: "Endpoint Security", angle: 5, r: 585, side: "right", llen: 26 },
  ];

  const renderItems = (itemsGroup, colorClass, glowFilter) => {
    return itemsGroup.map((it, idx) => {
      const [dx, dy] = p2c(it.r, it.angle);
      const [lx, ly] = p2c(it.r + it.llen, it.angle);
      
      let tx, ty, anchor;
      if (it.side === "top") {
        tx = lx;
        ty = ly - 4;
        anchor = "middle";
      } else if (it.side === "left") {
        tx = lx - 6;
        ty = ly + 4;
        anchor = "end";
      } else {
        tx = lx + 6;
        ty = ly + 4;
        anchor = "start";
      }

      return (
        <g key={idx}>
          <line
            x1={dx}
            y1={dy}
            x2={lx}
            y2={ly}
            stroke="#ffffff"
            strokeOpacity="0.45"
            strokeDasharray="2 3"
            strokeWidth="1.2"
          />
          <circle
            cx={dx}
            cy={dy}
            r="6.5"
            fill={colorClass}
            stroke="#ffffff"
            strokeWidth="2"
            filter={`url(#${glowFilter})`}
          />
          <circle cx={dx} cy={dy} r="2" fill="#ffffff" />
          <text
            x={tx}
            y={ty}
            textAnchor={anchor}
            fontFamily="'Inter', sans-serif"
            fontWeight="600"
            fontSize="12"
            fill="#ffffff"
            filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.8))"
          >
            {it.label}
          </text>
        </g>
      );
    });
  };

  return (
    <div className="w-full flex flex-col items-center select-none py-4">
      {/* Graphic Canvas Wrapper */}
      <div className="w-full max-w-[1400px] aspect-[1400/840] relative">
        <svg viewBox="0 0 1400 840" className="w-full h-full overflow-visible">
          <defs>
            <radialGradient id="grad-band1" cx="700" cy="670" r="670" gradientUnits="userSpaceOnUse">
              <stop offset="70%" stopColor="#1b0a33" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#461e78" stopOpacity="0.92" />
              <stop offset="100%" stopColor="#7a34ca" stopOpacity="0.95" />
            </radialGradient>

            <radialGradient id="grad-band2" cx="700" cy="670" r="520" gradientUnits="userSpaceOnUse">
              <stop offset="65%" stopColor="#6924ab" stopOpacity="0.95" />
              <stop offset="85%" stopColor="#b838a1" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#e63e8c" stopOpacity="0.98" />
            </radialGradient>

            <radialGradient id="grad-band3" cx="700" cy="670" r="350" gradientUnits="userSpaceOnUse">
              <stop offset="50%" stopColor="#ff4f8b" stopOpacity="0.98" />
              <stop offset="80%" stopColor="#ff6d52" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#ff9944" stopOpacity="1" />
            </radialGradient>

            <radialGradient id="grad-hub" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="45%" stopColor="#fff0f7" />
              <stop offset="80%" stopColor="#ffd0e8" />
              <stop offset="100%" stopColor="#ff94ce" />
            </radialGradient>

            <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            
            <filter id="glow-pink" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="hub-shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="#000000" floodOpacity="0.7" />
              <feDropShadow dx="0" dy="0" stdDeviation="15" floodColor="#ff4fa3" floodOpacity="0.4" />
            </filter>

            <path id="path-b3-title" d={arcD(245, 145, 35)} />
            <path id="path-b2-title" d={arcD(380, 150, 30)} />
            <path id="path-b1-title" d={arcD(535, 155, 25)} />
            <path id="path-rim-left" d={arcD(675, 172, 105)} />
            <path id="path-rim-right" d={arcD(675, 75, 8)} />
          </defs>

          {/* Outer Rotating Dashed Ring */}
          <circle
            cx="700"
            cy="670"
            r="672"
            fill="none"
            stroke="#a95cff"
            strokeWidth="1.5"
            strokeDasharray="4 8"
            strokeOpacity="0.6"
            className="animate-[spin_60s_linear_infinite] origin-[700px_670px]"
          />
          <circle cx="700" cy="670" r="678" fill="none" stroke="#ff4fa3" strokeWidth="1" strokeOpacity="0.25" />

          {/* Bands */}
          <path d="M 30,670 A 670,670 0 0,1 1370,670 L 1220,670 A 520,520 0 0,0 180,670 Z" fill="url(#grad-band1)" stroke="#8e44e8" strokeWidth="1.5" strokeOpacity="0.6" />
          <path d="M 180,670 A 520,520 0 0,1 1220,670 L 1050,670 A 350,350 0 0,0 350,670 Z" fill="url(#grad-band2)" stroke="#e63e8c" strokeWidth="1.5" strokeOpacity="0.7" />
          <path d="M 350,670 A 350,350 0 0,1 1050,670 L 890,670 A 190,190 0 0,0 510,670 Z" fill="url(#grad-band3)" stroke="#ff8c42" strokeWidth="1.5" strokeOpacity="0.8" />

          <circle cx="700" cy="670" r="520" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="3 4" />
          <circle cx="700" cy="670" r="350" fill="none" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 4" />

          {/* Titles */}
          <text fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="13" fill="#ffffff" letterSpacing="2.5">
            <textPath href="#path-b1-title" startOffset="50%" textAnchor="middle">
              AUTONOMOUS DETECTION &amp; THREAT OPERATIONS
            </textPath>
          </text>

          <text fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="12" fill="#ffffff" letterSpacing="2">
            <textPath href="#path-b2-title" startOffset="50%" textAnchor="middle">
              REAL-TIME IDENTITY &amp; RISK INTELLIGENCE
            </textPath>
          </text>

          <text fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="11" fill="#ffffff" letterSpacing="1.5">
            <textPath href="#path-b3-title" startOffset="50%" textAnchor="middle">
              UNIFIED DATA &amp; APPLICATION PROTECTION
            </textPath>
          </text>

          <text fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="11" fill="#e0c7ff" letterSpacing="2">
            <textPath href="#path-rim-left" startOffset="50%" textAnchor="middle">
              SOC PLATFORM
            </textPath>
          </text>

          <text fontFamily="'Space Grotesk', sans-serif" fontWeight="700" fontSize="11" fill="#e0c7ff" letterSpacing="2">
            <textPath href="#path-rim-right" startOffset="50%" textAnchor="middle">
              THREAT ANALYSIS PLATFORM
            </textPath>
          </text>

          {/* Render Items */}
          {renderItems(b3Data, "#ff7340", "glow-orange")}
          {renderItems(b2Data, "#ff4fa3", "glow-pink")}
          {renderItems(b1Data, "#b56cff", "glow-purple")}

          {/* Central Hub */}
          <g filter="url(#hub-shadow)">
            <circle cx="700" cy="670" r="192" fill="none" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" />
            <circle cx="700" cy="670" r="190" fill="url(#grad-hub)" />
            <circle cx="700" cy="670" r="172" fill="none" stroke="#ff4fa3" strokeWidth="1.5" strokeDasharray="4 4" strokeOpacity="0.4" />

            <text x="700" y="632" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="16" fill="#130526" letterSpacing="1.5">SINGLE PLATFORM</text>
            <text x="700" y="662" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="16" fill="#130526" letterSpacing="1.5">SINGLE CONSOLE</text>
            <text x="700" y="692" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="16" fill="#130526" letterSpacing="1.5">SINGLE AGENT</text>
          </g>
        </svg>
      </div>

      {/* Bottom Pipeline Banner Box */}
      <div className="w-full max-w-[1180px] -mt-14 sm:-mt-20 z-20 relative bg-white/95 backdrop-blur-md border border-white/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(255,79,163,0.25)] text-center text-[#120626]">
        {/* 1. Main Heading */}
        <h2 className="font-['Space_Grotesk'] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#130526] uppercase">
          ONE INTELLIGENT PLATFORM. <span className="bg-gradient-to-r from-[#d91c78] via-[#a855f7] to-[#7e22ce] bg-clip-text text-transparent">COMPLETE DIGITAL CONTROL.</span>
        </h2>

        {/* 2. Subheading */}
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#3b176e] max-w-3xl mx-auto leading-relaxed font-semibold">
          Netcradus unifies <span className="bg-gradient-to-r from-[#c026d3] to-[#7e22ce] bg-clip-text text-transparent font-extrabold">real-time data</span>, <span className="bg-gradient-to-r from-[#d91c78] to-[#c026d3] bg-clip-text text-transparent font-extrabold">enterprise intelligence</span>, <span className="bg-gradient-to-r from-[#c026d3] to-[#7e22ce] bg-clip-text text-transparent font-extrabold">security telemetry</span>, and <span className="bg-gradient-to-r from-[#d91c78] to-[#c026d3] bg-clip-text text-transparent font-extrabold">AI-powered applications</span> into one scalable platform.
        </p>

        {/* 3. Four Platform Features */}
        <div className="flex flex-wrap items-center justify-around gap-3 sm:gap-4 mt-6 sm:mt-8 pt-6 border-t border-[#120626]/15 text-xs sm:text-sm font-['Space_Grotesk'] font-bold text-[#3b176e] tracking-wider">
          <span>REAL-TIME DATA PIPELINE</span>
          <span className="hidden sm:inline text-[#ff52a0]">•</span>
          <span>ENTERPRISE GRAPH</span>
          <span className="hidden sm:inline text-[#ff52a0]">•</span>
          <span>UNIFIED TELEMETRY</span>
          <span className="hidden sm:inline text-[#ff52a0]">•</span>
          <span>CUSTOM APPS &amp; AGENTS</span>
        </div>
      </div>
    </div>
  );
}
