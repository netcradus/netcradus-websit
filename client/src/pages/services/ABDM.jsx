import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AbdmEcosystemVisual from "../../components/AbdmEcosystemVisual";
import {
  ArrowUpRight,
  Fingerprint,
  Users,
  Building2,
  FolderHeart,
  ShieldCheck,
  Stethoscope,
  ServerCog,
  FileStack,
  UserCog2,
  Workflow,
  BadgeCheck,
  Lock,
  Eye,
  ScrollText,
  RadioTower,
  ShieldHalf,
  Compass,
  Blocks,
  PlugZap,
  FlaskConical,
  Rocket,
  LifeBuoy,
  Timer,
  FileX2,
  LayoutDashboard,
  HandHeart,
  Brain,
  Gauge,
  Landmark,
  Infinity as InfinityIcon,
  Box,
  Cpu,
  Layers,
  CloudCog,
  GitBranch,
  Boxes,
  Plus,
  Minus,
} from "lucide-react";

const Reveal = ({ children, delay = 0, y = 24, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Eyebrow = ({ children, tone = "light" }) => (
  <span
    className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.3em] mb-4 ${
      tone === "light" ? "text-sky-600" : "text-sky-300"
    }`}
  >
    <span className={`h-1.5 w-1.5 rounded-full ${tone === "light" ? "bg-orange-500" : "bg-orange-400"}`} />
    {children}
  </span>
);

/** Ambient floating particles used on dark sections */
const Particles = ({ count = 18 }) => {
  const [dots] = useState(() =>
    Array.from({ length: count }).map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      dur: Math.random() * 8 + 8,
      delay: Math.random() * 6,
    }))
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-sky-300/40"
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size }}
          animate={{ y: [0, -22, 0], opacity: [0.15, 0.7, 0.15] }}
          transition={{ duration: d.dur, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const HERO_CHIPS = [
  { icon: Fingerprint, label: "ABHA" },
  { icon: UserCog2, label: "HPR" },
  { icon: Building2, label: "HFR" },
  { icon: FolderHeart, label: "Health Records" },
  { icon: ShieldCheck, label: "Secure APIs" },
];

const SERVICES = [
  {
    icon: Fingerprint,
    title: "ABHA Identity Enablement",
    description: "Let patients generate and link their Ayushman Bharat Health Account directly inside your product.",
  },
  {
    icon: ServerCog,
    title: "HMS / HIS Bridging",
    description: "Wrap your existing Hospital or Clinic management system with a secure ABDM-ready integration layer.",
  },
  {
    icon: FileStack,
    title: "Electronic Health Records",
    description: "Structure, store and exchange longitudinal patient records under the FHIR-based ABDM specification.",
  },
  {
    icon: Users,
    title: "HPR & HFR Onboarding",
    description: "Register practitioners and facilities into the national registries with verified, audit-ready workflows.",
  },
  {
    icon: Workflow,
    title: "Consent-Driven APIs",
    description: "Purpose-built REST and FHIR APIs that respect patient consent at every step of the data exchange.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance & Certification",
    description: "Guided sandbox testing and documentation support to reach ABDM milestone certification faster.",
  },
];

const SECURITY_POINTS = [
  { icon: Lock, title: "End-to-End Encryption", description: "Data encrypted in transit and at rest across every integration point." },
  { icon: ShieldHalf, title: "Zero-Trust Architecture", description: "Every request is authenticated and scoped — nothing is trusted by default." },
  { icon: Eye, title: "Continuous Monitoring", description: "Real-time anomaly detection across your ABDM-connected surfaces." },
  { icon: ScrollText, title: "Immutable Audit Trails", description: "Every consent and record action is logged and tamper-evident." },
  { icon: RadioTower, title: "Penetration Testing", description: "Regular offensive testing against OWASP and ABDM security guidelines." },
  { icon: BadgeCheck, title: "Consent Governance", description: "Granular, revocable consent artifacts aligned to ABDM's Consent Manager spec." },
];

const PROCESS_STEPS = [
  { icon: Compass, title: "Discovery & Audit", description: "Mapping your current systems, data flows and integration surface." },
  { icon: Blocks, title: "Solution Architecture", description: "Designing the ABDM integration blueprint around your infrastructure." },
  { icon: PlugZap, title: "API Integration", description: "Connecting ABHA, HPR, HFR and record-exchange APIs to your platform." },
  { icon: FlaskConical, title: "Sandbox Validation", description: "Testing rigorously in the ABDM sandbox before anything goes live." },
  { icon: Rocket, title: "Production Rollout", description: "A monitored, staged go-live with rollback safety nets in place." },
  { icon: LifeBuoy, title: "Monitor & Sustain", description: "Ongoing patches, updates and 24×7 technical support post-launch." },
];

const BENEFITS = [
  { icon: Timer, title: "Faster Onboarding", description: "Cut patient registration time from minutes to seconds." },
  { icon: FileX2, title: "Paperless Records", description: "Retire manual paperwork with fully digital record-keeping." },
  { icon: LayoutDashboard, title: "Unified Patient Timeline", description: "One longitudinal view of a patient's health history." },
  { icon: HandHeart, title: "Consent-First Sharing", description: "Data moves only with explicit, revocable patient consent." },
  { icon: Brain, title: "Sharper Clinical Insight", description: "Better data availability supports better decisions." },
  { icon: Gauge, title: "Lower Operating Cost", description: "Less duplication, fewer manual reconciliation steps." },
  { icon: Landmark, title: "Scheme-Ready", description: "Positioned for empanelment in government health programs." },
  { icon: InfinityIcon, title: "Future-Proof Stack", description: "Built to extend as ABDM's specification evolves." },
];

const TECHNOLOGIES = [
  { icon: Box, name: "Node.js" },
  { icon: Cpu, name: "Java / Spring" },
  { icon: Layers, name: ".NET" },
  { icon: Boxes, name: "React" },
  { icon: ServerCog, name: "Flutter" },
  { icon: FileStack, name: "PostgreSQL" },
  { icon: FileStack, name: "MySQL" },
  { icon: CloudCog, name: "Azure" },
  { icon: CloudCog, name: "AWS" },
  { icon: GitBranch, name: "Docker" },
  { icon: Blocks, name: "Kubernetes" },
];

const FAQS = [
  {
    question: "Do we have to adopt ABDM right now?",
    answer:
      "Today it's optional for private providers, but adoption is moving quickly from advantage to expectation — it already factors into empanelment for several government health schemes and is becoming the common language for interoperable records across India.",
  },
  {
    question: "Can this connect to the HMS we already run?",
    answer:
      "In most cases, yes. We audit your existing hospital or clinic software first, then build an integration layer that speaks to ABDM's registries and record-exchange APIs without forcing you to replace what already works.",
  },
  {
    question: "Who owns the APIs once the project ends?",
    answer:
      "You do. We hand over documented, versioned APIs along with sandbox test suites, so your internal team — or ours, under a support plan — can maintain and extend them independently.",
  },
  {
    question: "What happens after go-live?",
    answer:
      "We stay involved through monitoring, patching and technical support, and can scope a longer-term maintenance arrangement if you'd rather not manage ABDM compliance in-house.",
  },
  {
    question: "How long does a typical integration take?",
    answer:
      "Straightforward ABHA and record-exchange integrations often land within a few weeks; deeper HMS bridging or multi-facility rollouts typically run longer depending on the state of your existing systems.",
  },
];

const AboutIllustration = () => (
  <div className="relative mx-auto w-full max-w-md">
    <div className="absolute -top-10 -left-8 h-40 w-40 rounded-full bg-sky-200/50 blur-3xl" />
    <div className="absolute -bottom-10 -right-6 h-40 w-40 rounded-full bg-orange-200/50 blur-3xl" />
    <div className="relative space-y-4">
      {[
        { icon: Fingerprint, label: "Patient creates ABHA ID", tint: "from-sky-500 to-blue-700" },
        { icon: ShieldCheck, label: "Consent request raised", tint: "from-orange-500 to-orange-600" },
        { icon: FolderHeart, label: "Records exchanged securely", tint: "from-blue-700 to-indigo-700" },
      ].map((row, i) => (
        <Reveal key={row.label} delay={i * 0.12}>
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-[0_16px_40px_-20px_rgba(15,23,42,0.25)] backdrop-blur">
            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${row.tint} text-white`}>
              <row.icon size={18} />
            </div>
            <span className="text-sm font-bold text-slate-800">{row.label}</span>
            {i < 2 && (
              <span className="ml-auto text-slate-300">
                <ArrowUpRight size={16} className="rotate-90" />
              </span>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  </div>
);

const ShieldGlow = () => (
  <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
    <motion.div
      className="absolute h-full w-full rounded-full bg-sky-500/20 blur-2xl"
      animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />
    <svg viewBox="0 0 100 100" className="relative h-40 w-40">
      <defs>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
      <path
        d="M50 4 L88 18 V48 C88 72 72 88 50 96 C28 88 12 72 12 48 V18 Z"
        fill="url(#shieldGrad)"
        opacity="0.15"
        stroke="url(#shieldGrad)"
        strokeWidth="1.4"
      />
      <path d="M32 50 L45 63 L70 35" fill="none" stroke="url(#shieldGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const CTAIllustration = () => (
  <div className="relative mx-auto flex h-64 w-64 items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="absolute rounded-full border border-white/25"
        style={{ height: `${40 + i * 22}%`, width: `${40 + i * 22}%` }}
        animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.15, 0.5] }}
        transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
      />
    ))}
    <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur border border-white/20">
      <HandHeart size={36} className="text-white" />
    </div>
  </div>
);

const ServiceCard = ({ icon: IconComponent, title, description, index = 0 }) => (
  <Reveal delay={(index % 3) * 0.08}>
    <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-24px_rgba(37,99,235,0.28)]">
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-sky-50 transition-transform duration-500 group-hover:scale-125" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-white shadow-[0_12px_24px_-10px_rgba(37,99,235,0.6)]">
        <IconComponent size={19} />
      </div>
      <h3 className="relative mt-5 text-base font-bold text-slate-900">{title}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-slate-500">{description}</p>
    </div>
  </Reveal>
);

const BenefitCard = ({ icon: IconComponent, title, description, index = 0 }) => (
  <Reveal delay={(index % 4) * 0.06}>
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_18px_40px_-20px_rgba(249,115,22,0.3)]">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
        <IconComponent size={18} />
      </div>
      <h3 className="text-sm font-bold text-slate-900">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-500">{description}</p>
    </div>
  </Reveal>
);

const SecurityCard = ({ icon: IconComponent, title, description }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors duration-300 hover:border-sky-400/40 hover:bg-white/[0.07]">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500/20 to-orange-500/20 text-sky-300">
      <IconComponent size={18} />
    </div>
    <h3 className="mt-4 text-sm font-bold text-white">{title}</h3>
    <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{description}</p>
  </div>
);

const ABDMPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-[#060B1A]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.16),transparent_55%),radial-gradient(circle_at_85%_75%,rgba(249,115,22,0.12),transparent_50%)]" />
        <Particles count={22} />

        <div className="relative mx-auto grid max-w-screen-2xl gap-16 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-16 lg:py-28 xl:px-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-2 text-xs font-bold text-sky-200">
                <Stethoscope size={14} className="text-orange-400" />
                Ayushman Bharat Digital Mission
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white md:text-6xl">
                Empowering Healthcare Through{" "}
                <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-orange-300 bg-clip-text text-transparent">
                  Ayushman Bharat Digital Mission
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 text-lg font-semibold text-sky-100 md:text-xl">
                Build Secure Digital Healthcare Infrastructure
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400">
                Netcradus helps hospitals, clinics, labs and health-tech platforms connect to
                ABDM's national registries and record-exchange layer — with consent-first
                architecture and enterprise-grade security built in from day one.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-8 flex flex-wrap gap-3">
                {HERO_CHIPS.map(({ icon: IconComponent, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 backdrop-blur"
                  >
                    <IconComponent size={14} className="text-sky-300" />
                    {label}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_-14px_rgba(249,115,22,0.6)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Talk to Experts
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <AbdmEcosystemVisual />
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-screen-2xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-16 xl:px-24">
          <Reveal>
            <AboutIllustration />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>About ABDM</Eyebrow>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              A National Layer for Interoperable Health Data
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-500 md:text-lg">
              The Ayushman Bharat Digital Mission gives every stakeholder — patients, hospitals,
              clinicians and digital health platforms — a common, consent-governed way to
              exchange health information. Instead of records living in silos, ABDM makes them
              portable, verifiable and always under the patient's control.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Netcradus builds the bridge between your existing systems and this national
              infrastructure, so you can adopt ABDM without disrupting how your teams already work.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <Eyebrow>What We Build</Eyebrow>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              ABDM Integration Services
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <ServiceCard key={s.title} index={i} {...s} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#060B1A] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.14),transparent_60%)]" />
        <Particles count={14} />
        <div className="relative mx-auto grid max-w-screen-2xl gap-14 px-4 sm:px-6 lg:grid-cols-[0.8fr,1.2fr] lg:items-center lg:px-16 xl:px-24">
          <Reveal>
            <ShieldGlow />
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow tone="dark">Security &amp; Compliance</Eyebrow>
              <h2 className="text-3xl font-black tracking-tight text-white md:text-4xl">
                Security Isn't a Feature Here — It's the Foundation
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                Every integration we ship for healthcare clients is built against a zero-trust
                baseline, with independent audits before go-live.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {SECURITY_POINTS.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 0.08}>
                  <SecurityCard {...s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <Reveal className="mx-auto mb-16 max-w-2xl text-center">
            <Eyebrow>How We Work</Eyebrow>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              From Audit to Production, in Six Moves
            </h2>
          </Reveal>

          <div className="grid gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={(i % 3) * 0.08}>
                <div className="relative flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition-shadow duration-300 hover:shadow-[0_20px_45px_-24px_rgba(37,99,235,0.3)]">
                  <span className="absolute right-5 top-5 text-3xl font-black text-slate-100">
                    0{i + 1}
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-700 text-white">
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-50 to-white py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <Eyebrow>The Payoff</Eyebrow>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              What Going Digital Actually Buys You
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <BenefitCard key={b.title} index={i} {...b} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <Eyebrow>Our Stack</Eyebrow>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Technologies We Build With
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {TECHNOLOGIES.map((tech, i) => (
              <Reveal key={tech.name} delay={(i % 6) * 0.05}>
                <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_18px_40px_-20px_rgba(37,99,235,0.3)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-50 to-orange-50 text-sky-600">
                    <tech.icon size={20} />
                  </div>
                  <span className="text-xs font-bold text-slate-700">{tech.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-14 text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <div className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <Reveal key={faq.question} delay={index * 0.04}>
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-sm font-bold text-slate-900 md:text-base">{faq.question}</span>
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                      </span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-slate-500">{faq.answer}</p>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#060B1A] py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(249,115,22,0.16),transparent_50%)]" />
        <Particles count={16} />
        <div className="relative mx-auto grid max-w-screen-xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr,0.8fr] lg:items-center lg:px-16">
          <Reveal>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Ready to Bring Your Platform Onto ABDM?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
              Talk to our team about what an ABDM-ready integration looks like for your hospital,
              clinic or health-tech product — no obligation, just a clear plan.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-7 py-3.5 text-sm font-bold text-white shadow-[0_18px_45px_-14px_rgba(249,115,22,0.6)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                Request a Free Consultation
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <CTAIllustration />
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default ABDMPage;