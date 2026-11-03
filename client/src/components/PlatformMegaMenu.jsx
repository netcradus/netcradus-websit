import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Radar,
  Zap,
  Eye,
  Users,
  AlertTriangle,
  Cpu,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const PLATFORM_ITEMS = [
  {
    id: "xdr",
    name: "NetCradus XDR",
    subtitle: "Endpoint + Threat Hunting + Detection",
    description: "AI-powered unified endpoint, network and real-time threat hunting detection.",
    path: "/platform/endpoint-detection",
    icon: ShieldCheck,
  },
  {
    id: "siem",
    name: "NetCradus SIEM",
    subtitle: "Log Management + Detection + Correlation",
    description: "Real-time log aggregation, intelligent event correlation and threat detection.",
    path: "/platform/siem",
    icon: Radar,
  },
  {
    id: "soar",
    name: "NetCradus SOAR",
    subtitle: "Automated Response + Playbooks",
    description: "Autonomous incident containment and agentic playbook orchestration.",
    path: "/platform/soar",
    icon: Zap,
  },
  {
    id: "cti",
    name: "NetCradus CTI",
    subtitle: "Threat Intelligence",
    description: "Global cyber threat research, adversary tradecraft and IOC feeds.",
    path: "/platform/cti",
    icon: Eye,
  },
  {
    id: "pam",
    name: "NetCradus PAM",
    subtitle: "Privileged Access Management",
    description: "Verify identity, enforce zero trust, and secure privileged credentials.",
    path: "/platform/pam",
    icon: Users,
  },
  {
    id: "grc",
    name: "NetCradus GRC",
    subtitle: "Risk + Compliance",
    description: "Continuous attack surface management, vulnerability scanning & compliance audits.",
    path: "/platform/grc",
    icon: AlertTriangle,
  },
  {
    id: "aisecurity",
    name: "NetCradus AI Security",
    subtitle: "AI/ML Security + AI Threat Detection",
    description: "AI engine protection, model vulnerability defense & LLM threat triage.",
    path: "/platform/ai-security",
    icon: Cpu,
  },
];

const PlatformMegaMenu = ({ isOpen, isScrolled, onClose, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: -10 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-1/2 z-[1000] w-[1140px] max-w-[94vw] text-left transition-all duration-300 top-[52px]"
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
            <div className="bg-[#FAFAFA] border-b border-gray-200 px-10 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-orange-100 text-[#FF6B00] flex items-center justify-center">
                  <Sparkles size={18} />
                </span>
                <div>
                  <h3 className="text-base font-extrabold text-[#111827] flex items-center gap-2 tracking-tight">
                    Platform <ArrowRight size={16} className="text-[#FF6B00]" />
                  </h3>
                  <p className="text-xs text-[#6B7280] font-medium">
                    Seven converged platforms working together as one intelligent cyber defense system.
                  </p>
                </div>
              </div>

              <Link
                to="/platform"
                onClick={onClose}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-gray-200 text-xs font-bold text-[#111827] hover:border-[#FF6B00] hover:text-[#FF6B00] transition-all group no-underline"
              >
                <span>Explore Full Architecture</span>
                <ArrowRight size={14} className="text-[#FF6B00] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* 7 Products Grid */}
            <div className="px-10 py-8 platform-menu-grid">
              {PLATFORM_ITEMS.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <Link
                    key={item.id}
                    to={item.path}
                    onClick={onClose}
                    className="group platform-item p-3.5 rounded-xl border border-transparent hover:border-orange-200 hover:bg-orange-50/60 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_rgba(255,107,0,0.05)] transition-all duration-300 no-underline cursor-pointer"
                  >
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 rounded-xl bg-orange-100/70 text-[#FF6B00] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#FF6B00] group-hover:text-white">
                      <ItemIcon size={18} />
                    </div>
                    <div className="platform-content">
                      <h4 className="platform-title text-sm font-bold text-[#111827] transition-colors duration-300 group-hover:text-[#FF6B00]">
                        {item.name}
                      </h4>
                      <span className="platform-subtitle text-[11px] font-semibold text-[#FF6B00] block mt-0.5 leading-tight">
                        → {item.subtitle}
                      </span>
                      <p className="platform-description text-xs text-[#6B7280] mt-1">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Footer Ribbon */}
            <div className="bg-[#FAFAFA] border-t border-gray-200 px-10 py-3 flex items-center justify-between text-xs text-[#6B7280]">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Single Agent • Single Console • Autonomous Cyber Defense</span>
              </span>
              <Link
                to="/platform"
                onClick={onClose}
                className="text-[#FF6B00] hover:underline font-bold flex items-center gap-1 no-underline"
              >
                View Interactive Platform Wheel &rarr;
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlatformMegaMenu;
