import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePageMeta } from '../hooks/usePageMeta';
import { 
  Users, 
  MessageSquare, 
  BarChart3, 
  Calendar, 
  Settings, 
  Mail, 
  Phone, 
  Shield, 
  ShieldCheck, 
  Lock, 
  Activity, 
  Briefcase, 
  Clock, 
  Sparkles, 
  Cpu, 
  Star, 
  Database, 
  KeyRound, 
  History, 
  UserCheck, 
  HeartHandshake, 
  SearchCheck, 
  LayoutGrid, 
  Megaphone,
  Check
} from 'lucide-react';
import './CRMPage.css';

const FEATURES = [
  { 
    title: "Lead Management", 
    description: "Capture, qualify, and segment incoming prospect leads dynamically. Automate lead scoring based on user interactions.",
    icon: UserCheck
  },
  { 
    title: "Sales Automation", 
    description: "Automate follow-ups, sync outreach templates, schedule calls, and focus on closing deals.",
    icon: Cpu
  },
  { 
    title: "Contact Management", 
    description: "Keep complete customer context with rich timelines, emails, document logs, and transaction details.",
    icon: Users
  },
  { 
    title: "AI Insights", 
    description: "Forecast pipeline velocities and scan ticket data to identify churn risk before it happens.",
    icon: Sparkles
  },
  { 
    title: "Workflow Automation", 
    description: "Build custom workflow maps to automate manual data syncs and internal notifications.",
    icon: Activity
  },
  { 
    title: "Enterprise Security", 
    description: "Constructed on bank-grade security baselines featuring hardware authentication key configurations.",
    icon: ShieldCheck
  }
];

const MODULES = [
  { 
    title: "Sales CRM", 
    description: "Track pipelines, deals, and compile custom proposals.",
    icon: BarChart3,
    size: "bento-wide"
  },
  { 
    title: "Marketing CRM", 
    description: "Build audience segmentation lists and manage campaigns.",
    icon: Megaphone,
    size: ""
  },
  { 
    title: "Customer Support", 
    description: "Centralize omnichannel support queries and live chats.",
    icon: MessageSquare,
    size: ""
  },
  { 
    title: "Project Workspace", 
    description: "Linked milestone trackers, files, and project boards.",
    icon: Briefcase,
    size: "bento-wide"
  },
  { 
    title: "Finance & Billing", 
    description: "Integrate Stripe invoices and recurring subscriptions.",
    icon: KeyRound,
    size: ""
  },
  { 
    title: "Reports & Analytics", 
    description: "Generate deep-dive conversion and revenue logs.",
    icon: Activity,
    size: ""
  },
  { 
    title: "HR Workspace", 
    description: "Coordinate remote onboarding and team rosters.",
    icon: UserCheck,
    size: "bento-wide"
  }
];

const AI_TAGS = [
  { label: "Smart Reply Engine" },
  { label: "Predictive Analytics" },
  { label: "Auto Lead Qualifier" },
  { label: "Sentiment Tracker" }
];

const TIMELINE_STEPS = [
  { step: "Lead", desc: "Form captures client info", icon: Sparkles },
  { step: "Qualified", desc: "Scored by predictive engine", icon: SearchCheck },
  { step: "Assigned", desc: "Dispatched to regional rep", icon: UserCheck },
  { step: "Meeting", desc: "Calendar synced automatically", icon: Calendar },
  { step: "Proposal", desc: "Dynamic quotes generated", icon: Briefcase },
  { step: "Won", desc: "Sign-offs recorded securely", icon: ShieldCheck },
  { step: "Support", desc: "SLA dashboard provisioned", icon: HeartHandshake }
];

const INTEGRATIONS = [
  { name: "Microsoft", category: "Workspace", icon: Settings },
  { name: "Google Workspace", category: "Workspace", icon: SearchCheck },
  { name: "Slack", category: "Communication", icon: MessageSquare },
  { name: "Zoom", category: "Conferencing", icon: Phone },
  { name: "Zapier", category: "Automation", icon: Activity },
  { name: "Stripe", category: "Payments", icon: KeyRound },
  { name: "WhatsApp", category: "Messaging", icon: MessageSquare },
  { name: "HubSpot", category: "Marketing", icon: Users },
  { name: "Shopify", category: "E-Commerce", icon: LayoutGrid },
  { name: "QuickBooks", category: "Accounting", icon: Database }
];

const SECURITY_ITEMS = [
  { title: "AES-256 Encryption", desc: "Protects database entries both in-transit and at-rest on mirrored nodes.", icon: Lock },
  { title: "MFA Authentication", desc: "Enforce biometric and security key options for all staff logins.", icon: KeyRound },
  { title: "Role-Based Access", desc: "Restricted visibility masks client files dynamically by credentials.", icon: UserCheck },
  { title: "Audit Logs", desc: "Immutable history logs track data exports and user settings changes.", icon: History },
  { title: "Single Sign-On (SSO)", desc: "Sync directory hubs using Okta, Azure, or Google Cloud IAM standards.", icon: Shield },
  { title: "Cloud Backup", desc: "Real-time replica backups stored across multiple storage servers.", icon: Database }
];

const TESTIMONIALS = [
  {
    rating: 5,
    quote: "NetCradus CRM has completely streamlined our sales pipelines. Releasing manual follow-ups gave our sales reps more hours to focus on high-value client relationships.",
    name: "Vikram Malhotra",
    title: "VP of Business Development, Apex Digital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    rating: 5,
    quote: "We chose NetCradus CRM because of its clean White & Orange aesthetic and built-in security details. It matches our brand identity and is incredibly fast to navigate.",
    name: "Sarah Jenkins",
    title: "Director of CRM Strategy, CloudMatrix Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120"
  },
  {
    rating: 5,
    quote: "The visual automation flow and Stripe billing integration made customer onboarding automatic. Highly recommended for expanding startup organizations.",
    name: "Marcus Dupont",
    title: "Chief Executive Officer, FinTrust International",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120"
  }
];

const CRMPage = () => {
  usePageMeta(
    'NetCradus CRM | Clean, Modern AI-Powered Customer CRM Platform',
    'NetCradus CRM is a premium White and Orange enterprise CRM, designed to automate sales pipelines, forecast leads, and secure customer databases in a modern workspace.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="crm-wrapper">
      {/* Background patterns */}
      <div className="crm-dot-pattern" />
      <div className="crm-mesh-gradient" />

      <section className="crm-hero">
        <div className="crm-container">
          <div className="crm-hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="crm-hero-badge">
                ✨ AI-Powered Enterprise CRM
              </div>
              <h1 className="crm-hero-title">
                Manage Customer Relationships<br />
                <span style={{ background: 'linear-gradient(135deg, var(--crm-primary) 0%, var(--crm-secondary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Smarter.</span> Faster. <span style={{ background: 'linear-gradient(135deg, var(--crm-primary) 0%, var(--crm-secondary) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Better.</span>
              </h1>
              <p className="crm-hero-desc">
                NetCradus CRM helps businesses automate sales, manage leads, improve customer relationships, and increase revenue with AI-powered automation.
              </p>

              {/* Statistics row */}
              <div className="crm-hero-stats-row">
                <div className="crm-hero-stat-item">
                  <span className="crm-hero-stat-val">10K+</span>
                  <span className="crm-hero-stat-lbl">Active Customers</span>
                </div>
                <div className="crm-hero-stat-item">
                  <span className="crm-hero-stat-val">98%</span>
                  <span className="crm-hero-stat-lbl">Customer Satisfaction</span>
                </div>
                <div className="crm-hero-stat-item">
                  <span className="crm-hero-stat-val">35%</span>
                  <span className="crm-hero-stat-lbl">Sales Velocity Growth</span>
                </div>
                <div className="crm-hero-stat-item">
                  <span className="crm-hero-stat-val">24/7</span>
                  <span className="crm-hero-stat-lbl">Live Support SLA</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content: Large CRM Dashboard Screenshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="crm-hero-image-wrapper"
            >
              <img 
                src="/assets/crm-hero.png" 
                alt="NetCradus System Overview CRM Dashboard" 
                className="crm-hero-dashboard-img"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="crm-section alt-bg" id="features">
        <div className="crm-container">
          <div className="crm-section-header">
            <h2 className="crm-section-title">
              Spacious Tools built for <span>Better Output.</span>
            </h2>
            <p className="crm-section-subtitle">
              NetCradus CRM unifies lead scoring, drip marketing, contract records, and communication histories into a clean workspace.
            </p>
          </div>

          <div className="crm-features-grid">
            {FEATURES.map((feat) => {
              const Icon = feat.icon;
              return (
                <div key={feat.title} className="crm-white-card">
                  <div className="card-icon-box">
                    <Icon size={20} strokeWidth={2} />
                  </div>
                  <h3>{feat.title}</h3>
                  <p>{feat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="crm-section">
        <div className="crm-container">
          <div className="crm-section-header">
            <h2 className="crm-section-title">
              Modular CRM Bento Workspace.<br />
              <span>Tailored for Multi-Team Workflows.</span>
            </h2>
            <p className="crm-section-subtitle">
              Scale CRM tools dynamically. Choose features, set permissions, and coordinate operations instantly.
            </p>
          </div>

          <div className="crm-bento-grid">
            {MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <div key={mod.title} className={`bento-card ${mod.size}`}>
                  <div className="bento-glow-overlay" />
                  <div className="bento-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{mod.title}</h3>
                  <p>{mod.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="crm-section alt-bg">
        <div className="crm-container">
          <div className="ai-assistant-grid">
            {/* Left Visual Area */}
            <div className="ai-assistant-visual-area">
              <div className="ai-mesh-glow" />
              <div className="ai-avatar-core">
                <Cpu size={120} strokeWidth={1} />
              </div>

              {/* Chat bubbles */}
              <div className="floating-chat-bubble bubble-1">
                <span style={{ fontWeight: 700, color: 'var(--crm-primary)' }}>AI Email draft ready</span>
                <span style={{ color: 'var(--crm-text-secondary)', fontSize: '0.725rem' }}>Drafted follow-up deal terms in 0.4 seconds.</span>
              </div>
              <div className="floating-chat-bubble bubble-2">
                <span style={{ fontWeight: 700, color: '#8B5CF6' }}>Lead Scored: 98/100</span>
                <span style={{ color: 'var(--crm-text-secondary)', fontSize: '0.725rem' }}>High purchase intent identified.</span>
              </div>
            </div>

            {/* Right Content Area */}
            <div>
              <h2 className="crm-section-title">
                Work Smarter with Your<br />
                <span>AI Sales Assistant.</span>
              </h2>
              <p className="crm-section-subtitle">
                Automate outbound email replies, summarize virtual audio conferences, compile quotes, and qualify client profiles automatically.
              </p>

              <div className="ai-tags-row">
                {AI_TAGS.map((tag) => (
                  <div key={tag.label} className="ai-tag-badge">
                    <Sparkles size={16} className="text-[#FF6B00]" />
                    <span>{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crm-section">
        <div className="crm-container">
          <div className="crm-section-header">
            <h2 className="crm-section-title">
              Visual Workflow Automation.<br />
              <span>Map Pipelines Effortlessly.</span>
            </h2>
            <p className="crm-section-subtitle">
              Route leads, synchronize outreach, and close deals automatically.
            </p>
          </div>

          <div className="crm-automation-track">
            {TIMELINE_STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="automation-node">
                  <div className="automation-node-circle">
                    <Icon size={20} />
                  </div>
                  <div className="automation-node-name">{step.step}</div>
                  <div className="automation-node-desc">{step.desc}</div>
                  {index < TIMELINE_STEPS.length - 1 && (
                    <div className="automation-node-line" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="crm-section">
        <div className="crm-container">
          <div className="security-content-grid">
            <div>
              <h2 className="crm-section-title">
                Enterprise Cybersecurity.<br />
                <span>Data Privacy Guaranteed.</span>
              </h2>
              <p className="crm-section-subtitle" style={{ marginBottom: '3.5rem' }}>
                All databases are fully isolated with AES-256 standards, restricting client files dynamically by access credentials.
              </p>

              <div className="security-badges-grid">
                {SECURITY_ITEMS.map((sec) => {
                  const Icon = sec.icon;
                  return (
                    <div key={sec.title} className="security-badge-item">
                      <div className="security-badge-icon-box">
                        <Icon size={18} />
                      </div>
                      <div className="security-badge-info">
                        <h3>{sec.title}</h3>
                        <p>{sec.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Illustration: Glowing 3D Shield (SVG Vector) */}
            <div className="security-illustrations-container">
              <div className="crm-mesh-glow" />
              <div className="security-large-shield">
                <ShieldCheck size={160} strokeWidth={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="crm-section alt-bg">
        <div className="crm-container">
          <div className="crm-section-header">
            <h2 className="crm-section-title">
              Trusted by <span>Revenue Teams worldwide.</span>
            </h2>
            <p className="crm-section-subtitle">
              Read how scaling organizations manage workflows with NetCradus CRM.
            </p>
          </div>

          <div className="testimonials-row-grid">
            {TESTIMONIALS.map((test) => (
              <div key={test.name} className="testimonial-card-item">
                <div>
                  <div className="testimonial-stars">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="testimonial-quote">
                    "{test.quote}"
                  </p>
                </div>
                <div className="testimonial-profile">
                  <img src={test.avatar} alt={test.name} className="testimonial-photo" />
                  <div className="testimonial-info">
                    <h4>{test.name}</h4>
                    <p>{test.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="crm-final-cta-section">
        <div className="crm-container">
          <div className="final-cta-gradient-card">
            <h2>Ready to Grow Your Business<br />with NetCradus CRM?</h2>
            <p>
              Automate follow-ups, forecast deal values, compile proposals, and coordinate workflows in one secure, modern platform.
            </p>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMPage;