import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

/**
 * Netcradus Darktrace-Style Homepage Hero Component
 * Rebuild with animated SVG light streaks, ambient radial glow, 
 * left-aligned Darktrace layout structure, and staggered entrance animations.
 */
export default function Hero() {
  return (
    <section className="hero-stage">
      {/* 1. Ambient Moving Radial Glow */}
      <div className="hero-glow" />

      {/* 2. SVG Animated Streaks & Pulsing Nodes (from netcradus-hero-final.html) */}
      <svg className="hero-streaks" viewBox="0 0 1280 720" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="gradWhite" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ff8533" />
          </linearGradient>
          <linearGradient id="gradOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8533" />
            <stop offset="100%" stopColor="#ff6b00" />
          </linearGradient>
        </defs>

        {/* Diagonal Light Streaks */}
        <line className="hero-streak" x1="-100" y1="620" x2="520" y2="120" stroke="url(#gradWhite)"
              strokeDasharray="900" style={{ color: '#ffffff', animationDuration: '6s', animationDelay: '0s' }} />
        <line className="hero-streak" x1="-60" y1="700" x2="680" y2="60" stroke="url(#gradOrange)"
              strokeDasharray="1000" style={{ color: '#ff6b00', animationDuration: '7.5s', animationDelay: '1.2s' }} />
        <line className="hero-streak" x1="150" y1="740" x2="900" y2="180" stroke="url(#gradOrange)"
              strokeDasharray="1000" style={{ color: '#ff8533', animationDuration: '8s', animationDelay: '2.4s' }} />
        <line className="hero-streak" x1="400" y1="760" x2="1150" y2="260" stroke="url(#gradOrange)"
              strokeDasharray="950" style={{ color: '#ff8533', animationDuration: '6.8s', animationDelay: '0.6s' }} />
        <line className="hero-streak" x1="600" y1="780" x2="1300" y2="320" stroke="url(#gradWhite)"
              strokeDasharray="900" style={{ color: '#ffffff', animationDuration: '7s', animationDelay: '3.2s' }} />
        <line className="hero-streak" x1="50" y1="500" x2="480" y2="80" stroke="url(#gradOrange)"
              strokeDasharray="700" style={{ color: '#ff8533', animationDuration: '5.5s', animationDelay: '4s' }} />
        <line className="hero-streak" x1="750" y1="700" x2="1250" y2="150" stroke="url(#gradOrange)"
              strokeDasharray="850" style={{ color: '#ff6b00', animationDuration: '9s', animationDelay: '1.8s' }} />
        <line className="hero-streak" x1="-50" y1="350" x2="300" y2="30" stroke="url(#gradWhite)"
              strokeDasharray="600" style={{ color: '#ffffff', animationDuration: '6.2s', animationDelay: '2.8s' }} />

        {/* Pulsing Target Nodes */}
        <circle className="hero-node" cx="520" cy="120" r="2" style={{ animationDuration: '6s', animationDelay: '0.3s' }} />
        <circle className="hero-node" cx="680" cy="60" r="2" style={{ animationDuration: '7.5s', animationDelay: '1.5s' }} />
        <circle className="hero-node" cx="900" cy="180" r="2" style={{ animationDuration: '8s', animationDelay: '2.7s' }} />
        <circle className="hero-node" cx="1150" cy="260" r="2" style={{ animationDuration: '6.8s', animationDelay: '0.9s' }} />
        <circle className="hero-node" cx="1300" cy="320" r="2" style={{ animationDuration: '7.5s', animationDelay: '3.5s' }} />
        <circle className="hero-node" cx="480" cy="80" r="2" style={{ animationDuration: '5.5s', animationDelay: '4.3s' }} />
        <circle className="hero-node" cx="1250" cy="150" r="2" style={{ animationDuration: '9s', animationDelay: '2.1s' }} />
        <circle className="hero-node" cx="300" cy="30" r="2" style={{ animationDuration: '6.2s', animationDelay: '3.1s' }} />
      </svg>

      {/* 3. Vignette Overlay */}
      <div className="hero-vignette" />

      {/* 4. Left-Aligned Content Block (Darktrace Structure) */}
      <div className="hero-content-left">
        {/* Eyebrow Label (Staggered Animation 1) */}
        <div className="hero-eyebrow">NETCRADUS</div>

        {/* Heading (Staggered Animation 2) */}
        <h1 className="hero-title-main">
          Cybersecurity for <span className="hero-title-gradient">the AI Era</span>
        </h1>

        {/* Subheading (Staggered Animation 3) */}
        <p className="hero-subheading">
          Stay Ahead of Threats — Real-Time, Every Time, with Netcradus.
        </p>

        {/* Dual CTA Buttons (Staggered Animation 4) */}
        <div className="hero-actions">
          <Link to="/platform" className="hero-btn-primary">
            <span>Explore Our Platform</span>
            <ArrowRight size={18} />
          </Link>

          <Link to="/contact" className="hero-btn-secondary">
            <span>Get a Demo</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
