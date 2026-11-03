import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, Zap, Target } from 'lucide-react';
import './HomepageHighlights.css';

export default function HomepageHighlights() {
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="homepage-highlights-section">
      <div className="highlights-container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Full-width Flagship Card Container */}
        <div className="highlight-card group relative block overflow-hidden rounded-[24px] bg-[#07080f] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-white/20 transition-all duration-500">
          
          {/* Subtle Orange Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#ff6b00]/15 via-transparent to-[#ff8533]/15 pointer-events-none" />
          
          {/* Tech Circuit / Grid Subtle Backdrop */}
          <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 1000 500" preserveAspectRatio="none">
            <pattern id="flagship-circuit" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white/20" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#flagship-circuit)" />
            <path d="M 20 100 H 220 L 280 160 H 550 L 600 110 H 980" stroke="#ff7b29" strokeWidth="1" fill="none" opacity="0.4" strokeDasharray="4 4" />
            <path d="M 980 400 H 650 L 590 340 H 300 L 250 390 H 20" stroke="#ffffff" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 4" />
            <circle cx="220" cy="100" r="3" fill="#ff7b29" />
            <circle cx="650" cy="400" r="3" fill="#ffffff" />
          </svg>

          {/* Animated Corner Stroke (Top-Left Cyber Orange Gradient) */}
          <svg
            className="highlight-corner-svg absolute top-0 left-0 w-full h-full pointer-events-none z-20"
            viewBox="0 0 1000 500"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="gradFlagship" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#ff7b29" />
              </linearGradient>
            </defs>
            <path
              d="M 250 3 H 24 A 20 20 0 0 0 3 24 V 250"
              stroke="url(#gradFlagship)"
              strokeWidth="4"
              strokeLinecap="round"
              className="animated-corner-stroke"
            />
          </svg>

          {/* Two-Column Layout Grid */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-14">
            
            {/* Left Column: Visual / ACIS Video Area */}
            <div className="lg:col-span-5 flex flex-col justify-center items-center relative">
              <div className="w-full relative rounded-2xl bg-gradient-to-br from-[#0c0e1a] via-[#080911] to-[#121626] border border-white/10 overflow-hidden shadow-2xl group-hover:border-[#ff6b00]/30 transition-all duration-300">
                {videoError ? (
                  <div className="w-full aspect-video flex items-center justify-center p-8 bg-gradient-to-br from-[#0c0e1a] via-[#080911] to-[#121626]">
                    <img
                      src="/images/acis-logo.png"
                      alt="ACIS Logo"
                      className="max-h-24 sm:max-h-32 w-auto object-contain filter drop-shadow-[0_0_25px_rgba(255,123,41,0.4)]"
                    />
                  </div>
                ) : (
                  <video
                    ref={videoRef}
                    src="/videos/home acis.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    onError={() => setVideoError(true)}
                    className="w-full h-full aspect-video object-cover object-center block"
                  >
                    <source src="/videos/home acis.mp4" type="video/mp4" />
                  </video>
                )}
              </div>
            </div>

            {/* Right Column: Content Area */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              {/* Label */}
              <div className="flex items-center gap-2 mb-3 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-[0.25em] text-[#ff7b29]">
                <span>NETCRADUS FLAGSHIP PLATFORM</span>
              </div>

              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-[1.25] mb-4">
                ACIS — Autonomous Cyber Immune System
              </h2>

              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6 font-normal">
                AI-powered protection that continuously detects, learns, responds, and strengthens your enterprise security.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-white/90 shadow-sm hover:border-[#ff7b29]/50 transition-colors">
                  <Atom className="w-4 h-4 text-[#ff6b00]" />
                  <span>AI-Native</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-white/90 shadow-sm hover:border-[#ff7b29]/50 transition-colors">
                  <Zap className="w-4 h-4 text-[#ff7b29]" />
                  <span>Real-Time Defense</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-white/90 shadow-sm hover:border-[#ff7b29]/50 transition-colors">
                  <Target className="w-4 h-4 text-[#ff6b00]" />
                  <span>Autonomous Response</span>
                </div>
              </div>

              <div>
                <Link
                  to="/acis"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-white/10 to-white/5 hover:from-[#ff6b00]/25 hover:to-[#ff8533]/25 border border-[#ff7b29]/60 hover:border-[#ff7b29] text-white font-semibold text-sm sm:text-base tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(255,123,41,0.2)] hover:shadow-[0_0_30px_rgba(255,123,41,0.45)] group"
                >
                  <span>Explore ACIS</span>
                  <ArrowRight className="w-5 h-5 text-[#ff7b29] group-hover:translate-x-1.5 transition-transform duration-300" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
