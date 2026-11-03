import React, { useState } from "react";
import {
  Target,
  ShieldCheck,
  Zap,
  Activity,
  Cpu,
  ShieldAlert,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import DottedGlobe from "./DottedGlobe";
import "./ACISSection.css";

const ARCHITECTURE_LAYERS = [
  {
    title: "AI-Powered SIEM",
    content:
      "A real-time intelligent log and event analysis engine that continuously ingests telemetry across endpoints, networks, and cloud systems. Using advanced behavioral analytics, anomaly detection, and correlation models, it establishes dynamic baselines and detects threats with high precision and minimal false positives.",
    icon: Activity,
  },
  {
    title: "Autonomous SOAR & Response Engine",
    content:
      "An autonomous orchestration layer that executes real-time threat response without human intervention. It prioritizes incidents, triggers playbooks, isolates compromised systems, and ensures sub-second containment across distributed infrastructure environments.",
    icon: Cpu,
  },
  {
    title: "AI Red Team Simulator",
    content:
      "A continuous adversarial simulation engine powered by reinforcement learning that mimics real-world attack vectors. It proactively identifies vulnerabilities, stress-tests defenses, and strengthens system resilience through intelligent attack path modeling.",
    icon: ShieldAlert,
  },
  {
    title: "Self-Healing & Deception Engine",
    content:
      "A dynamic defense layer that automatically isolates compromised nodes, deploys deception traps, and rebuilds secure states. It misleads attackers while ensuring system continuity through automated remediation and adaptive recovery mechanisms.",
    icon: ShieldCheck,
  },
  {
    title: "Threat Intelligence Swarm",
    content:
      "A distributed network of AI agents that continuously share and learn from global threat intelligence. This layer enables predictive defense by correlating emerging attack patterns and adapting security posture across the entire ecosystem.",
    icon: Target,
  },
];

const ACISSection = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const phases = [
    {
      step: "Phase 1",
      title: "Deep Environmental Learning",
      desc: "AI maps normal network behavior and establishes a baseline.",
    },
    {
      step: "Phase 2",
      title: "Continuous Surveillance",
      desc: "Real-time monitoring for anomalies and suspicious activity patterns.",
    },
    {
      step: "Phase 3",
      title: "Threat Classification",
      desc: "Machine learning identifies attack vectors and risk levels.",
    },
    {
      step: "Phase 4",
      title: "Autonomous Response",
      desc: "Instant surgical neutralization of threats at the network edge.",
    },
    {
      step: "Phase 5",
      title: "Immunity & Learning",
      desc: "System updates global threat intelligence and adapts for future defense.",
    },
  ];

  return (
    <section id="acis" className="acis-section">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="acis-grid">
          <div className="acis-content reveal">
            <div className="acis-badge mono">
              <span className="pulse-dot"></span>
              Autonomous Response Active
            </div>
            <h2 className="acis-title">
              ACIS &mdash; Autonomous Cyber{" "}
              <span className="text-accent italic">Immune System.</span>
            </h2>
            <p className="acis-desc mb-12 max-w-xl">
              ACIS is our revolutionary, proprietary AI-driven cybersecurity
              platform. Designed to eliminate the lag between threat detection
              and response, ACIS operates autonomously to identify, isolate, and
              neutralize cyber threats without requiring manual human
              intervention.
            </p>
            <div className="feature-grid grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="premium-card p-8 border-l-4 border-l-accent">
                <h4 className="font-bold text-text-primary mb-3 flex items-center gap-2">
                  <ShieldCheck className="text-accent" size={20} />
                  Sub-second Containment
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Detects and neutralizes threats in real-time, preventing
                  lateral movement before it starts.
                </p>
              </div>
              <div className="premium-card p-8 border-l-4 border-l-accent">
                <h4 className="font-bold text-text-primary mb-3 flex items-center gap-2">
                  <Zap className="text-accent" size={20} />
                  AI-Powered UEBA
                </h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Sophisticated User and Entity Behavior Analytics to spot
                  anomalies that traditional tools miss.
                </p>
              </div>
            </div>

            <div className="acis-pills flex flex-wrap gap-2 mb-8">
              <span className="pill">Adaptive Learning</span>
              <span className="pill">Real-time Isolation</span>
              <span className="pill">Zero-Trust Ready</span>
            </div>

            <div className="acis-features space-y-5 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-bold tracking-widest uppercase text-text-secondary">
                  Self-Learning AI Algorithms
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-bold tracking-widest uppercase text-text-secondary">
                  Micro-Segmentation Control
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="text-sm font-bold tracking-widest uppercase text-text-secondary">
                  Instant Threat Neutralization
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <a

                href="https://www.oouraa.com/"

                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary acis-btn inline-flex items-center gap-2 no-underline px-4 py-2"
              >
                Explore ACIS
                <ArrowRight size={18} className="arrow-icon" />
              </a>
            </div>
          </div>

          <div
            className="acis-mockup reveal flex justify-center items-center overflow-visible relative min-h-[350px] md:min-h-[450px]"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="absolute inset-0 flex justify-center items-center z-0 opacity-40 md:scale-[1.2]"></div>

            <div className="relative z-10 w-full max-w-[1280px] mx-auto mt-6 bg-surface-raised border border-border/80 rounded-xl shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
              <div className="h-8 bg-surface border-b border-border flex items-center px-4 gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
              </div>
              <img
                src="/assets/acisDashboard-v2.png"
                alt="ACIS Dashboard"
                className="w-full h-auto opacity-100 object-contain brightness-[1.04] contrast-[1.04] p-1"
              />
            </div>
          </div>
        </div>

        {/* 🔥 NEW ARCHITECTURE SECTION */}
        <div className="architecture-section mt-28">
          <div className="section-label text-center text-accent">

          </div>
          <h3 className="timeline-section-title text-center">
            Multi-Layered Intelligence.
          </h3>

          {/* <div className="arch-image-wrapper mb-16">
    <img
      src="/generated/ai_data_network_1773394527444.png"
      alt="ACIS Architecture"
      className="arch-image"
    />
  </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
            <div className="arch-nav flex flex-col gap-4">
              {ARCHITECTURE_LAYERS.map((layer, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`arch-tab ${activeLayer === idx ? "active" : ""}`}
                >
                  <div className="icon-box">
                    <layer.icon size={20} />
                  </div>

                  <div className="layer-text">
                    <div className="layer-label">Layer {idx + 1}</div>
                    <p className="layer-title">{layer.title}</p>
                  </div>
                </button>
              ))}
            </div>

            <div className="arch-content-card">
              <h4>{ARCHITECTURE_LAYERS[activeLayer].title}</h4>
              <p>{ARCHITECTURE_LAYERS[activeLayer].content}</p>
              <div className="flex justify-center mt-6">
                <Link
                  to="/services"
                  className="btn-primary mt-6 inline-flex items-center gap-2 px-6 py-3 text-xs no-underline"
                >
                  View Specifications
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="acis-timeline reveal">
          <div className="section-label text-center"></div>
          <h3 className="timeline-section-title text-center">
            Implementation Journey
          </h3>
          <div className="timeline-grid">
            {phases.map((phase, idx) => (
              <Link
                to="/phase"
                key={idx}
                className="timeline-item group cursor-pointer block transition-all duration-300 hover:scale-[1.04] hover:-translate-y-1"
              >
                <span className="phase-label mono group-hover:text-accent transition">
                  {phase.step}
                </span>

                <h4 className="phase-title group-hover:text-accent transition">
                  {phase.title}
                </h4>

                <p className="phase-desc">{phase.desc}</p>

                {/* Arrow on hover */}
                <div className="flex items-center mt-3 text-accent opacity-0 group-hover:opacity-100 transition">
                  <span className="text-xs tracking-wider uppercase">
                    Explore
                  </span>
                  <ArrowRight size={14} className="ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ACISSection;
