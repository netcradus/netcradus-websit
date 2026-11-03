import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePageMeta } from '../hooks/usePageMeta';
import { 
  Shield, 
  Radar, 
  Users, 
  Mail, 
  Cpu, 
  Activity, 
  Database, 
  Compass, 
  Zap, 
  TrendingUp, 
  Layers, 
  Search, 
  RefreshCw, 
  Building, 
  Heart, 
  GraduationCap, 
  Check, 
  ArrowRight,
  Eye,
  AlertTriangle,
  Monitor
} from 'lucide-react';
import './NetXDRPage.css';

const BOTTOM_CARDS = [
  { title: "AI Powered", desc: "Advanced AI engine learns, detects and stops threats faster.", icon: Cpu },
  { title: "Detect", desc: "Detect hidden threats across every layer of your environment.", icon: Shield },
  { title: "Investigate", desc: "Deep insights and context for faster investigations.", icon: Search },
  { title: "Respond", desc: "Automate and orchestrate responses in real-time to neutralize threats.", icon: Zap },
  { title: "Recover", desc: "Minimize impact and restore operations with confidence.", icon: RefreshCw },
  { title: "Optimize", desc: "Continuously improve security posture with smart analytics.", icon: TrendingUp }
];

const INDUSTRIES = [
  { name: "Enterprise", icon: Building },
  { name: "Healthcare", icon: Heart },
  { name: "Banking & Finance", icon: Compass },
  { name: "Manufacturing", icon: Cpu },
  { name: "Government", icon: Shield },
  { name: "Education", icon: GraduationCap },
  { name: "IT & SaaS", icon: Layers }
];

const SPHERE_NODES = [
  { name: "ENDPOINTS", icon: Monitor, pos: "node-pos-1" },
  { name: "NETWORK", icon: Activity, pos: "node-pos-2" },
  { name: "EMAIL", icon: Mail, pos: "node-pos-3" },
  { name: "CLOUD", icon: Layers, pos: "node-pos-4" },
  { name: "IDENTITY", icon: Users, pos: "node-pos-5" },
  { name: "SERVERS", icon: Database, pos: "node-pos-6" }
];

const CAPABILITIES = [
  { title: "AI Threat Detection", desc: "Identify advanced threats before they cause real damage.", icon: Cpu },
  { title: "Real-Time Correlation", desc: "Correlate telemetry across endpoints, network, cloud and identity.", icon: Compass },
  { title: "Automated Response", desc: "Automatically contain threats and stop attacks in real-time.", icon: Zap },
  { title: "Threat Hunting", desc: "Proactively hunt threats with advanced search and analytics.", icon: Search },
  { title: "Attack Visualization", desc: "Visualize attack chains and understand adversary behavior.", icon: Eye },
  { title: "Compliance Reports", desc: "Generate compliance reports in minutes for audits.", icon: Shield },
  { title: "Multi-Tenant", desc: "Manage multiple environments seamlessly.", icon: Users },
  { title: "MITRE ATT&CK", desc: "Map and understand attacker tactics and techniques.", icon: Layers }
];

const NetXDRPage = () => {
  usePageMeta({
    title: "CYRIX XDR — Extended Threat Detection & Response",
    description: "Cyrix XDR delivers AI-powered threat detection, automated response, and unified visibility across endpoints, networks, cloud, and identities."
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="xdr-wrapper netxdr-page-wrapper">
      
      <section className="xdr-hero netxdr-hero">
        <div className="xdr-container">
          <div className="hero-content flex flex-col items-center justify-center text-center py-16">
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-black tracking-[0.15em] text-center uppercase bg-gradient-to-r from-white via-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent drop-shadow-[0_0_70px_rgba(59,130,246,0.65)] leading-none my-6">
              CYRIX
            </h1>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.4em] text-[#60A5FA] bg-[#3B82F6]/10 px-5 py-2 rounded-full border border-[#3B82F6]/30 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              EXTENDED DETECTION &amp; RESPONSE PLATFORM
            </span>
          </div>
        </div>
      </section>

      <section className="xdr-hero-bottom">
        <div className="xdr-container">
          <div className="hero-bottom-grid">
            {BOTTOM_CARDS.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="hero-bottom-card">
                  <Icon className="bottom-card-icon" size={24} />
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="xdr-trusted-strip">
        <div className="xdr-container">
          <h5 className="trusted-strip-header">Trusted By Organizations Worldwide</h5>
          <div className="trusted-strip-logos">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.name} className="trusted-strip-item">
                  <Icon size={18} style={{ color: '#ff6a00' }} />
                  <span>{ind.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="xdr-section">
        <div className="xdr-container">
          <div className="why-xdr-grid">
            <div>
              <h2 className="why-xdr-title">
                Why <span>CYRIX XDR?</span>
              </h2>
              <p className="why-xdr-desc">
                Cyrix XDR unifies telemetry data from across your enterprise network to deliver complete visual context, immediate incident correlation, and smart containment actions.
              </p>
              
              <div className="why-xdr-checklist">
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Break down data silos across endpoint logs</span>
                </div>
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Correlate attack events across multiple security layers</span>
                </div>
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Reduce alert fatigue with automated prioritization engines</span>
                </div>
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Automate containment responses with high confidence</span>
                </div>
                <div className="checklist-item">
                  <div className="checklist-icon"><Check size={18} /></div>
                  <span>Strengthen compliance auditing and infrastructure posture</span>
                </div>
              </div>
            </div>

            {/* Right Sphere DNA visual */}
            <div className="why-xdr-sphere-pod">
              <div className="sphere-podium">
                <div className="sphere-core-dna">
                  <Radar size={140} strokeWidth={1} />
                </div>
              </div>

              {/* Sphere surrounding nodes */}
              {SPHERE_NODES.map((node) => {
                const Icon = node.icon;
                return (
                  <div key={node.name} className={`sphere-node-indicator ${node.pos}`}>
                    <Icon size={14} className="text-[#3b82f6]" />
                    <span>{node.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="xdr-section xdr-capabilities" id="capabilities">
        <div className="xdr-container">
          <div className="xdr-section-header">
            <h2 className="xdr-section-title" style={{ color: 'var(--xdr-text-dark)' }}>
              Powerful <span style={{ color: 'var(--xdr-accent)', WebkitTextFillColor: 'initial', background: 'none' }}>Capabilities</span>
            </h2>
            <p className="xdr-section-subtitle" style={{ color: 'var(--xdr-muted-dark)' }}>
              Everything your SOC team needs to detect, investigate, and respond — in one platform.
            </p>
          </div>

          <div className="xdr-capabilities-grid">
            {CAPABILITIES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div key={cap.title} className="capability-card">
                  <div className="capability-card-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="xdr-section">
        <div className="xdr-container">
          <div className="visibility-grid">
            <div>
              <h2 className="why-xdr-title">
                One Platform.<br />
                <span>Complete Visibility.</span>
              </h2>
              <p className="why-xdr-desc">
                See every threat. Understand every risk. Respond to active attacks with immediate speed and precision.
              </p>
              <div style={{ marginTop: '2.5rem' }}>
                <a href="/contact" className="btn-xdr-primary">
                  View Live Dashboard
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Threat Dashboard Mockup */}
            <div className="flex justify-center items-center">
              <img 
                src="/assets/cyrix-dashboard.png" 
                alt="CYRIX Cyber Defense Platform Dashboard" 
                className="w-full h-auto object-contain rounded-3xl shadow-2xl border border-white/10"
                style={{ 
                  filter: 'drop-shadow(0 25px 60px rgba(0,0,0,0.65))',
                }}
                onError={(e) => { e.currentTarget.src = "/img/cyrix-dashboard.png"; }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="xdr-section xdr-final-cta">
        <div className="xdr-container">
          <div className="xdr-cta-card">
            <h2>Stay Ahead of Every Threat</h2>
            <p>
              AI-powered Extended Detection & Response that learns and evolves with every attack pattern.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetXDRPage;