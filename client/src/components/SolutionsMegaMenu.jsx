import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Radar,
  Cloud,
  BrainCircuit,
  Network,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Key,
} from "lucide-react";

export const SOLUTIONS = [
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    tagline: "Core Defense",
    description: "End-to-end protection against evolving cyber threats.",
    path: "/services/cybersecurity",
    icon: Shield,
  },
  {
    id: "managed-soc",
    name: "Managed SOC",
    tagline: "24×7 Operations",
    description: "24×7 monitoring and rapid threat detection & response.",
    path: "/services/managed-soc",
    icon: Radar,
  },
  {
    id: "iam",
    name: "Identity & Access Management",
    tagline: "Identity Security",
    description: "Secure identities, enforce least privilege, and govern access across the enterprise.",
    path: "/services/iam",
    icon: Key,
  },
  {
    id: "cloud-security",
    name: "Cloud Security",
    tagline: "Cloud Native",
    description: "Secure cloud workloads, SaaS, and hybrid environments.",
    path: "/services/cloud-security",
    icon: Cloud,
  },
  {
    id: "ai-security",
    name: "AI Security",
    tagline: "AI Governance",
    description: "Protect AI models, LLMs, and enterprise agents.",
    path: "/services/ai-security",
    icon: BrainCircuit,
  },
  {
    id: "network-security",
    name: "Network Security",
    tagline: "Perimeter Defense",
    description: "Defend your perimeter and internal network segments.",
    path: "/services/network-security",
    icon: Network,
  },
  {
    id: "enterprise-security",
    name: "Enterprise Security",
    tagline: "Enterprise Programs",
    description: "Tailored, enterprise-grade security programs.",
    path: "/services/enterprise-security",
    icon: Building2,
  },
  {
    id: "vapt",
    name: "VAPT Services",
    tagline: "Testing & Audit",
    description: "Vulnerability assessment & penetration testing.",
    path: "/services/vapt",
    icon: ShieldCheck,
  },
];

const CORE_SECURITY = [
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "End-to-end protection against evolving cyber threats.",
    path: "/services/cybersecurity",
    icon: Shield,
  },
  {
    id: "managed-soc",
    name: "Managed SOC",
    description: "24×7 monitoring and rapid threat detection & response.",
    path: "/services/managed-soc",
    icon: Radar,
  },
  {
    id: "iam",
    name: "Identity & Access Management",
    description: "Secure identities, enforce least privilege, and govern access across the enterprise.",
    path: "/services/iam",
    icon: Key,
  },
  {
    id: "network-security",
    name: "Network Security",
    description: "Defend your perimeter and internal network segments.",
    path: "/services/network-security",
    icon: Network,
  },
];

const SPECIALIZED_SECURITY = [
  {
    id: "cloud-security",
    name: "Cloud Security",
    description: "Secure cloud workloads, SaaS, and hybrid environments.",
    path: "/services/cloud-security",
    icon: Cloud,
  },
  {
    id: "ai-security",
    name: "AI Security",
    description: "Protect AI models, LLMs, and enterprise agents.",
    path: "/services/ai-security",
    icon: BrainCircuit,
  },
  {
    id: "enterprise-security",
    name: "Enterprise Security",
    description: "Tailored, enterprise-grade security programs.",
    path: "/services/enterprise-security",
    icon: Building2,
  },
  {
    id: "vapt",
    name: "VAPT Services",
    description: "Vulnerability assessment & penetration testing.",
    path: "/services/vapt",
    icon: ShieldCheck,
  },
];

const SolutionsMegaMenu = ({ isOpen, isScrolled, onClose, onMouseEnter, onMouseLeave }) => {
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
            <div className="p-8 solutions-mega-content">
              
              <div className="solutions-links">
                {/* COLUMN 1 - Core Security Services */}
                <div className="flex flex-col text-left space-y-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#111827] pb-2 relative">
                      Core Security Services
                      <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent" />
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    {CORE_SECURITY.map((solution) => {
                      const Icon = solution.icon;
                      return (
                        <Link
                          key={solution.id}
                          to={solution.path}
                          onClick={onClose}
                          className="group solution-item p-4 rounded-xl border border-transparent hover:border-accent/10 hover:bg-orange-50 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(255,107,0,0.04)] transition-all duration-300 no-underline cursor-pointer"
                        >
                          <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg bg-orange-50 text-accent transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                            <Icon size={18} />
                          </div>
                          <div className="solution-item-content">
                            <h4 className="solution-item-title text-sm font-bold text-[#111827] transition-colors duration-300 group-hover:text-accent">
                              {solution.name}
                            </h4>
                            <p className="solution-item-description text-xs text-[#6B7280] mt-1">
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

                {/* COLUMN 2 - Specialized Solutions */}
                <div className="flex flex-col text-left space-y-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#111827] pb-2 relative">
                      Specialized Solutions
                      <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent" />
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    {SPECIALIZED_SECURITY.map((solution) => {
                      const Icon = solution.icon;
                      return (
                        <Link
                          key={solution.id}
                          to={solution.path}
                          onClick={onClose}
                          className="group solution-item p-4 rounded-xl border border-transparent hover:border-accent/10 hover:bg-orange-50 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(255,107,0,0.04)] transition-all duration-300 no-underline cursor-pointer"
                        >
                          <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-lg bg-orange-50 text-accent transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                            <Icon size={18} />
                          </div>
                          <div className="solution-item-content">
                            <h4 className="solution-item-title text-sm font-bold text-[#111827] transition-colors duration-300 group-hover:text-accent">
                              {solution.name}
                            </h4>
                            <p className="solution-item-description text-xs text-[#6B7280] mt-1">
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
              </div>

              {/* COLUMN 3 - Featured Panel */}
              <div>
                <div className="solutions-featured-panel relative overflow-hidden rounded-[20px] bg-gradient-to-br from-accent via-accent-bright to-orange-600 py-8 text-white flex flex-col justify-between h-full group/panel shadow-[0_10px_30px_rgba(255,107,0,0.15)]">
                  {/* Floating Background Shapes */}
                  <div className="absolute top-[-20%] right-[-20%] w-[180px] h-[180px] rounded-full bg-white/10 blur-2xl animate-pulse duration-4000" />
                  <div className="absolute bottom-[-10%] left-[-10%] w-[120px] h-[120px] rounded-full bg-black/10 blur-xl" />

                  {/* Network SVG Overlay */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <svg className="w-full h-full" viewBox="0 0 300 300">
                      <path d="M 50 50 L 150 150 L 250 50" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M 50 250 L 150 150 L 250 250" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
                      <circle cx="150" cy="150" r="8" fill="white" className="animate-ping" style={{ animationDuration: '3s' }} />
                      <circle cx="50" cy="50" r="4" fill="white" />
                      <circle cx="250" cy="50" r="4" fill="white" />
                      <circle cx="50" cy="250" r="4" fill="white" />
                      <circle cx="250" cy="250" r="4" fill="white" />
                    </svg>
                  </div>

                  <div className="solutions-featured-content relative z-10 space-y-4">
                    <span className="inline-block text-[9px] font-black uppercase tracking-[0.25em] bg-white/20 px-3 py-1 rounded-full">
                      Featured Panel
                    </span>
                    <h3 className="text-xl md:text-2xl font-black leading-tight text-white">
                      Enterprise Solutions
                    </h3>
                    <p className="solutions-featured-description text-xs text-white/85">
                      Discover AI-powered cybersecurity, healthcare, cloud, and digital transformation solutions designed to secure and accelerate modern businesses.
                    </p>
                  </div>

                  <div className="relative z-10 pt-6">
                    <Link
                      to="/services"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-accent font-bold text-xs shadow-lg shadow-black/10 hover:bg-orange-50 hover:scale-103 transition-all duration-300 no-underline"
                    >
                      Explore Solutions
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

export default SolutionsMegaMenu;