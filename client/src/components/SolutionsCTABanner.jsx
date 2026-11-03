import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Database, Laptop, Cloud, Brain, CheckCircle2 } from "lucide-react";
import "./SolutionsCTABanner.css";

const SolutionsCTABanner = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // range: -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5; // range: -0.5 to 0.5
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  // Smooth scroll handler if clicking Explore Solutions on the main Services/Solutions landing page
  const handleExploreClick = (e) => {
    if (window.location.pathname === "/services") {
      e.preventDefault();
      const servicesSection = document.getElementById("services");
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: "smooth" });
      } else {
        // Fallback to scrolling down slightly or window scroll
        window.scrollTo({
          top: window.innerHeight * 0.9,
          behavior: "smooth"
        });
      }
    }
  };

  return (
    <section className="solutions-cta-section solutions-cta-wrapper relative overflow-hidden">
      <div className="solutions-cta-grid-overlay" />

      {/* Animated Mesh Gradients */}
      <div className="solutions-cta-mesh-container">
        <div className="solutions-mesh-blob solutions-mesh-blob-orange" />
        <div className="solutions-mesh-blob solutions-mesh-blob-blue" />
        <div className="solutions-mesh-blob solutions-mesh-blob-accent" />
      </div>

      {/* Abstract Curved Line SVG Background decoration */}
      <svg className="solutions-curved-lines" viewBox="0 0 1440 400" fill="none" preserveAspectRatio="none">
        <path
          d="M-100,150 C300,300 700,50 1100,250 C1300,350 1500,200 1600,150"
          stroke="rgba(255, 107, 0, 0.08)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M-50,220 C400,80 800,380 1200,180 C1400,80 1500,250 1650,220"
          stroke="rgba(59, 130, 246, 0.08)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="10 15"
        />
      </svg>

      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="solutions-glass-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 flex flex-col text-left space-y-6">
              <div>
                <span className="solutions-badge">
                  <CheckCircle2 size={16} /> Enterprise Security Solutions
                </span>
              </div>

              <h2 className="solutions-headline text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6.5xl">
                Secure Every Layer. <br />
                <span>Power Every Decision.</span>
              </h2>

              <p className="solutions-description text-gray-600 max-w-xl">
                Explore Netcradus solutions built for modern enterprises—from proactive
                cyber defense and compliance to AI-powered monitoring and automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/services"
                  onClick={handleExploreClick}
                  className="btn-solutions-primary px-8 py-4 text-sm font-semibold tracking-wide text-center no-underline inline-block shadow-md hover:scale-102 transition-transform duration-300"
                >
                  Explore Solutions
                </Link>

                <Link
                  to="/contact"
                  className="btn-solutions-secondary px-8 py-4 text-sm font-semibold tracking-wide text-center no-underline inline-block border hover:scale-102 transition-transform duration-300"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div
                className="solutions-visual-container"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* SVG network connection lines linking outer nodes to the center */}
                <svg className="solutions-svg-network" viewBox="0 0 500 500">
                  {/* Underlay static dashed paths */}
                  <path d="M 80 85 L 250 250" className="network-path" />
                  <path d="M 420 100 L 250 250" className="network-path" />
                  <path d="M 70 410 L 250 250" className="network-path" />
                  <path d="M 410 400 L 250 250" className="network-path" />

                  {/* Flowing animated network paths */}
                  <path d="M 80 85 L 250 250" className="network-path-orange" />
                  <path d="M 420 100 L 250 250" className="network-path-orange" />
                  <path d="M 70 410 L 250 250" className="network-path-orange" />
                  <path d="M 410 400 L 250 250" className="network-path-orange" />

                  {/* Node junction indicator circles */}
                  <circle cx="80" cy="85" r="5" className="glowing-node-circle" />
                  <circle cx="420" cy="100" r="5" className="glowing-node-circle" />
                  <circle cx="70" cy="410" r="5" className="glowing-node-circle" />
                  <circle cx="410" cy="400" r="5" className="glowing-node-circle" />
                </svg>

                {/* Rotating Holographic Rings */}
                <div
                  className="hologram-ring-outer"
                  style={{ transform: `rotate(${mousePos.x * 25}deg)` }}
                />
                <div
                  className="hologram-ring-middle"
                  style={{ transform: `rotate(${mousePos.y * -35}deg)` }}
                />
                <div
                  className="hologram-ring-inner"
                  style={{ transform: `rotate(${mousePos.x * 45}deg)` }}
                />

                {/* Center Holographic Shield Sphere */}
                <div
                  className="hologram-center"
                  style={{
                    transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`
                  }}
                >
                  <Shield size={36} />
                </div>

                {/* Floating Glass Dashboard Panels */}
                {/* 1. SIEM Panel */}
                <div
                  className="floating-glass-card card-siem"
                  style={{
                    transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -25}px, 0)`
                  }}
                >
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-600 flex items-center justify-center">
                    <Database size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">SIEM</span>
                    <span className="text-xs font-bold text-gray-800 leading-none">Logs Analyzed</span>
                  </div>
                </div>

                {/* 2. AI Copilot Panel */}
                <div
                  className="floating-glass-card card-ai"
                  style={{
                    transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * -20}px, 0)`
                  }}
                >
                  <div className="p-2 bg-orange-500/10 rounded-lg text-[#ff6b00] flex items-center justify-center">
                    <Brain size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-[#ff6b00] uppercase tracking-wider leading-none mb-1">AI Agent</span>
                    <span className="text-xs font-bold text-gray-800 leading-none">Protection Active</span>
                  </div>
                </div>

                {/* 3. Endpoint Card */}
                <div
                  className="floating-glass-card card-endpoint"
                  style={{
                    transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * 32}px, 0)`
                  }}
                >
                  <div className="p-2 bg-green-500/10 rounded-lg text-green-600 flex items-center justify-center">
                    <Laptop size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">Endpoints</span>
                    <span className="text-xs font-bold text-gray-800 leading-none">Fully Secured</span>
                  </div>
                </div>

                {/* 4. Cloud Nodes Card */}
                <div
                  className="floating-glass-card card-cloud"
                  style={{
                    transform: `translate3d(${mousePos.x * 28}px, ${mousePos.y * 28}px, 0)`
                  }}
                >
                  <div className="p-2 bg-purple-500/10 rounded-lg text-purple-600 flex items-center justify-center">
                    <Cloud size={16} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider leading-none mb-1">Cloud Secure</span>
                    <span className="text-xs font-bold text-gray-800 leading-none">Syncing Nodes</span>
                  </div>
                </div>

                {/* 5. Metrics Overlay */}
                <div
                  className="floating-glass-card card-threats"
                  style={{
                    transform: `translate3d(${mousePos.x * 15}px, ${mousePos.y * 15}px, 0)`
                  }}
                >
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-bold text-[#ff6b00] uppercase tracking-widest leading-none mb-1">Live Status</span>
                    <span className="text-xs font-black text-gray-800 leading-none">Threats Prevented</span>
                    <span className="text-sm font-black text-[#ff6b00] mt-1.5 leading-none">99.98% Rate</span>
                  </div>
                </div>

                {/* Glowing light particles */}
                <div
                  className="floating-orange-particle part-1"
                  style={{
                    transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0)`
                  }}
                />
                <div
                  className="floating-orange-particle part-2"
                  style={{
                    transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * -30}px, 0)`
                  }}
                />
                <div
                  className="floating-orange-particle part-3"
                  style={{
                    transform: `translate3d(${mousePos.x * -30}px, ${mousePos.y * 20}px, 0)`
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsCTABanner;
