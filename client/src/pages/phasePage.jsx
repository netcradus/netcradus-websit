import React, { useEffect } from "react";
import PageHero from "../components/PageHero";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const phases = [
  {
    title: "Phase 1",
    subtitle: "Deep Environmental Learning",
    desc: `In this foundational phase, the system performs deep analysis of your entire digital ecosystem to understand what normal looks like. It continuously observes network traffic, user behavior, device communication, and application interactions.

Using advanced behavioral analytics and unsupervised machine learning, it builds a dynamic baseline model that evolves with your organization. This includes identifying usage trends, peak activity windows, and typical access patterns.

This phase ensures that the system develops a precise understanding of normal operations, enabling highly accurate anomaly detection in later stages.`,
    points: [
      "Behavioral fingerprinting of users and devices",
      "Network traffic pattern analysis",
      "Dynamic baseline modeling",
      "Adaptive learning as infrastructure grows",
    ],
    img: "/generated/ai_data_network_1773394527444.png",
  },
  {
    title: "Phase 2",
    subtitle: "Continuous Surveillance",
    desc: `Once the baseline is established, the system transitions into continuous real-time monitoring mode. Every interaction across the network is analyzed, including login attempts, data transfers, API calls, and internal communications.

Unlike traditional rule-based systems, this AI-driven surveillance is context-aware and adaptive. It detects even subtle deviations from normal behavior that may indicate potential threats.

The system continuously learns and refines its monitoring thresholds to minimize false positives while ensuring no suspicious activity goes unnoticed.`,
    points: [
      "24/7 real-time monitoring of all activities",
      "Detection of abnormal behavior patterns",
      "Context-aware anomaly detection",
      "Adaptive thresholds to reduce false alerts",
    ],
    img: "/generated/hacker_code_screen_1773394510636.png",
  },
  {
    title: "Phase 3",
    subtitle: "Threat Classification",
    desc: `Not every anomaly is a threat, and this phase ensures accurate identification and prioritization. The system applies machine learning models and threat intelligence to classify detected anomalies into meaningful threat categories.

It identifies attack vectors, assigns severity levels, and evaluates potential impact based on asset criticality and exploit likelihood.

By filtering out noise and focusing only on genuine threats, this phase helps organizations avoid alert fatigue and respond efficiently to high-risk incidents.`,
    points: [
      "AI-based threat identification and categorization",
      "Attack vector analysis and mapping",
      "Risk scoring based on impact and likelihood",
      "Reduction of false positives and alert fatigue",
    ],
    img: "/generated/jlk.png",
  },
  {
    title: "Phase 4",
    subtitle: "Autonomous Response",
    desc: `In this phase, the system takes immediate action without waiting for human intervention. Once a threat is confirmed, AI-driven automation executes precise responses to neutralize it instantly.

Actions may include isolating compromised devices, blocking malicious IPs, terminating suspicious sessions, or revoking access credentials.

Operating at the network edge, the system ensures threats are contained before they can spread, significantly reducing damage and response time from hours to milliseconds.`,
    points: [
      "Automatic threat containment and neutralization",
      "Isolation of compromised systems",
      "Blocking malicious traffic in real-time",
      "Edge-level response for faster protection",
    ],
    img: "/generated/AI.png",
  },
  {
    title: "Phase 5",
    subtitle: "Immunity & Learning",
    desc: `The final phase transforms the system into a continuously evolving defense mechanism. Every detected threat contributes to improving the system's intelligence.

The AI retrains itself using new data, updates threat models, and strengthens defenses against similar future attacks.

This creates a self-learning cybersecurity ecosystem that adapts to emerging threats, evolving user behavior, and global attack patterns, effectively functioning like an immune system for your infrastructure.`,
    points: [
      "Continuous learning from past incidents",
      "Real-time threat intelligence updates",
      "Adaptive defense against evolving threats",
      "Self-healing and strengthening architecture",
    ],
    img: "/generated/secure_shield_concept_1773394778055.png",
  },
];

export default function PhasePage() {
  usePageMeta(SEO_META.phase.title, SEO_META.phase.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background transition-colors duration-500">
      <PageHero
        label="// DEVELOPMENT PHASES"
        title="AI Defense Lifecycle"
        subtitle="A fully autonomous cybersecurity architecture designed to learn, detect, respond, and evolve while preserving clarity, speed, and operational resilience."
        media={
          <div className="overflow-hidden rounded-[30px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_40%),var(--color-surface)] p-4 shadow-[0_18px_60px_rgba(232,64,10,0.08)]">
            <img src="/generated/ChatGPT Image 1.png" alt="AI defense lifecycle" className="h-[320px] w-full rounded-[24px] object-cover" />
          </div>
        }
      />

      <section className="py-0">
        <div className="mx-auto max-w-6xl space-y-8 px-4 pb-24 sm:px-6 lg:px-16">
          {phases.map((phase, index) => (
            <article
              key={phase.title}
              className={`grid gap-8 rounded-[32px] border border-border bg-[var(--color-surface)]/88 p-6 shadow-[0_18px_60px_rgba(232,64,10,0.06)] backdrop-blur-md md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
                index % 2 ? "" : ""
              }`}
            >
              <div className={index % 2 ? "lg:order-2" : ""}>
                <div className="overflow-hidden rounded-[26px] border border-border bg-[linear-gradient(135deg,rgba(232,64,10,0.08),transparent_40%),var(--color-surface)] p-3">
                  <img src={phase.img} alt={phase.subtitle} className="h-[320px] w-full rounded-[22px] object-cover" />
                </div>
              </div>
              <div className={index % 2 ? "lg:order-1" : ""}>
                <span className="text-sm font-bold uppercase tracking-[0.35em] text-accent">{phase.title}</span>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-text-primary md:text-4xl">{phase.subtitle}</h2>
                <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-text-secondary">{phase.desc}</p>
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {phase.points.map((point) => (
                    <li key={point} className="rounded-[20px] border border-border bg-[var(--color-surface-raised)]/65 px-4 py-3 text-sm text-text-secondary">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
