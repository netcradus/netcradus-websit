import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Radar,
  UsersRound,
  ShieldAlert,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const PRODUCTS = [
  {
    id: "acis",
    name: "ACIS Platform",
    tagline: "SIEM & SOAR",
    description: "Autonomous Cyber Immune System for threat detection and response.",
    path: "/acis",
    icon: ShieldCheck,
  },
  {
    id: "netxdr",
    name: "Cyrix XDR",
    tagline: "Extended Detection",
    description: "AI-powered unified endpoint, cloud and network protection.",
    path: "/netxdr",
    icon: Radar,
  },
  {
    id: "crm",
    name: "NetCRM",
    tagline: "Customer Workspace",
    description: "Enterprise relationship and operations platform.",
    path: "/crm",
    icon: UsersRound,
  },
  {
    id: "netcrad",
    name: "NetCrad",
    tagline: "Vulnerability Scan",
    description: "AI-powered website security auditing and vulnerability assessment platform that scans websites for security weaknesses, compliance issues, misconfigurations, and performance risks with actionable remediation insights.",
    path: "/netcrad",
    icon: ShieldAlert,
  },
  {
    id: "future",
    name: "Future Products",
    tagline: "Coming Soon",
    description: "Sparking new security intelligence engines coming soon.",
    path: "#",
    icon: Sparkles,
    isComingSoon: true,
  },
];

const CYBERSECURITY_PLATFORM = [
  {
    id: "acis",
    name: "ACIS Platform",
    description: "Autonomous Cyber Immune System for threat detection and response.",
    path: "/acis",
    icon: ShieldCheck,
  },
  {
    id: "netxdr",
    name: "Cyrix XDR",
    description: "AI-powered unified endpoint, cloud and network protection.",
    path: "/netxdr",
    icon: Radar,
  },
];

const BUSINESS_SOLUTIONS = [
  {
    id: "crm",
    name: "NetCRM",
    description: "Enterprise relationship and operations platform.",
    path: "/crm",
    icon: UsersRound,
  },
  {
    id: "netcrad",
    name: "NetCrad",
    description: "AI-powered website security auditing and vulnerability assessment platform that scans websites for security weaknesses, compliance issues, misconfigurations, and performance risks with actionable remediation insights.",
    path: "/netcrad",
    icon: ShieldAlert,
  },
  {
    id: "future",
    name: "Future Products",
    description: "Sparking new security intelligence engines coming soon.",
    path: "#",
    icon: Sparkles,
    isComingSoon: true,
  },
];

const ProductMegaMenu = ({ isOpen, isScrolled, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-1/2 z-[1000] w-[1140px] max-w-[94vw] transition-all duration-300 top-[52px]"
          style={{ marginLeft: "-570px" }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Caret / pointer arrow */}
          <div
            className="absolute left-1/2 z-0"
            style={{
              top: "-8px",
              width: "18px",
              height: "18px",
              background: "#FFFFFF",
              transform: "translateX(-50%) rotate(45deg)",
              borderTop: "1px solid #E5E7EB",
              borderLeft: "1px solid #E5E7EB",
              borderRadius: "3px 0 0 0",
            }}
          />

          <div
            className="relative z-10 overflow-hidden bg-white"
            style={{
              borderRadius: "24px",
              border: "1px solid #E5E7EB",
              background: "#FFFFFF",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div className="p-8 products-mega-content">
              
              <div className="products-links">
                {/* COLUMN 1 - Cybersecurity Platform */}
                <div className="flex flex-col text-left space-y-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#111827] pb-2 relative">
                      Cybersecurity Platform
                      <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent" />
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    {CYBERSECURITY_PLATFORM.map((solution) => {
                      const Icon = solution.icon;
                      return (
                        <Link
                          key={solution.id}
                          to={solution.path}
                          onClick={onClose}
                          className="group product-mega-item p-4 rounded-xl border border-transparent hover:border-accent/10 hover:bg-orange-50 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(255,107,0,0.04)] transition-all duration-300 no-underline cursor-pointer"
                        >
                          <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg bg-orange-50 text-accent transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                            <Icon size={18} />
                          </div>
                          <div className="product-mega-content">
                            <h4 className="product-mega-title text-sm font-bold text-[#111827] transition-colors duration-300 group-hover:text-accent">
                              {solution.name}
                            </h4>
                            <p className="product-mega-description text-xs text-[#6B7280] mt-1">
                              {solution.description}
                            </p>
                          </div>
                          <ArrowRight
                            size={14}
                            className="shrink-0 mt-1 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* COLUMN 2 - Business Solutions */}
                <div className="flex flex-col text-left space-y-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#111827] pb-2 relative">
                      Business Solutions
                      <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent" />
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    {BUSINESS_SOLUTIONS.map((solution) => {
                      const Icon = solution.icon;
                      const isComingSoon = solution.isComingSoon;
                      const content = (
                        <div className={`group product-mega-item p-4 rounded-xl border border-transparent ${
                          isComingSoon 
                            ? 'opacity-75 cursor-default' 
                            : 'hover:border-accent/10 hover:bg-orange-50 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(255,107,0,0.04)] cursor-pointer'
                        } transition-all duration-300`}>
                          <div className={`w-10 h-10 flex items-center justify-center shrink-0 rounded-lg bg-orange-50 text-accent transition-all duration-300 ${
                            !isComingSoon && 'group-hover:scale-108 group-hover:bg-accent group-hover:text-white'
                          }`}>
                            <Icon size={18} />
                          </div>
                          <div className="product-mega-content">
                            <div className="flex items-center gap-2">
                              <h4 className="product-mega-title text-sm font-bold text-[#111827] transition-colors duration-300 group-hover:text-accent">
                                {solution.name}
                              </h4>
                              {isComingSoon && (
                                <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-orange-100 text-accent">
                                  Soon
                                </span>
                              )}
                            </div>
                            <p className="product-mega-description text-xs text-[#6B7280] mt-1">
                              {solution.description}
                            </p>
                          </div>
                          {!isComingSoon && (
                            <ArrowRight
                              size={14}
                              className="shrink-0 mt-1 text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                            />
                          )}
                        </div>
                      );

                      return isComingSoon ? (
                        <div key={solution.id}>{content}</div>
                      ) : (
                        <Link key={solution.id} to={solution.path} onClick={onClose} className="no-underline">
                          {content}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* COLUMN 3 - Featured Panel */}
              <div>
                <div className="products-featured-panel relative overflow-hidden rounded-[20px] bg-gradient-to-br from-accent via-accent-bright to-orange-600 py-8 text-white flex flex-col justify-between h-full group/panel shadow-[0_10px_30px_rgba(255,107,0,0.15)]">
                  {/* Floating Background Shapes */}
                  <div className="absolute top-[-20%] right-[-20%] w-[180px] h-[180px] rounded-full bg-white/10 blur-2xl animate-pulse duration-4000" />
                  <div className="absolute bottom-[-10%] left-[-10%] w-[120px] h-[120px] rounded-full bg-black/10 blur-xl" />

                  {/* Shield / Radar Visual Overlay */}
                  <div className="absolute inset-0 opacity-15 pointer-events-none flex justify-center items-center">
                    <svg className="w-[180px] h-[180px] animate-pulse" style={{ animationDuration: '4s' }} viewBox="0 0 100 100">
                      <polygon points="50,5 90,20 90,65 50,95 10,65 10,20" fill="none" stroke="white" strokeWidth="2.5" />
                      <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="3 3" />
                      <circle cx="50" cy="50" r="10" fill="none" stroke="white" strokeWidth="2.5" />
                    </svg>
                  </div>

                  <div className="products-featured-content relative z-10 space-y-4">
                    <span className="inline-block text-[9px] font-black uppercase tracking-[0.25em] bg-white/20 px-3 py-1 rounded-full">
                      Enterprise Security Platform
                    </span>
                    <h3 className="text-xl md:text-2xl font-black leading-tight text-white">
                      Netcradus Products
                    </h3>
                    <p className="products-featured-description text-xs text-white/85">
                      Discover AI-powered cybersecurity and business platforms designed to protect, automate, and accelerate your organization through a unified ecosystem.
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {["AI Powered", "Enterprise Ready", "Cloud Native", "Scalable", "Secure by Design"].map((tag) => (
                        <span key={tag} className="text-[9px] font-bold bg-white/15 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 pt-6">
                    <Link
                      to="/platform"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-accent font-bold text-xs shadow-lg shadow-black/10 hover:bg-orange-50 hover:scale-103 transition-all duration-300 no-underline"
                    >
                      Explore Products
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover/panel:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductMegaMenu;