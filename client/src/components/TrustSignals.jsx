// import { Award, BadgeCheck, BriefcaseBusiness, Building2, Quote } from "lucide-react";

// const logos = [];

// const testimonials = [
//   {
//     name: "Security Leader",
//     role: "Enterprise Technology Team",
//     quote:
//       "Client testimonial ready. Add approved customer proof points here to reinforce trust and buying confidence.",
//   },
//   {
//     name: "Operations Head",
//     role: "Global Business Services",
//     quote:
//       "Use this space for verified outcomes tied to managed SOC, SIEM visibility, incident response, or compliance improvement.",
//   },
// ];

// const certifications = [
//   { icon: BadgeCheck, label: "Security Certifications" },
//   { icon: Award, label: "Industry Awards" },
//   { icon: Building2, label: "Enterprise References" },
//   { icon: BriefcaseBusiness, label: "Compliance Credentials" },
// ];

// export default function TrustSignals() {
//   return (
//     <section
//       id="trust-signals"
//       className="relative overflow-hidden bg-background py-24 transition-colors duration-500"
//     >
//       <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
//         <div className="mx-auto mb-16 max-w-3xl text-center">
//           <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
//             Trust Signals
//           </span>
//           <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
//             Proof points that support <span className="text-accent italic">buyer confidence.</span>
//           </h2>

//         </div>

//         <div className="grid gap-8">


//           <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
//             <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.06),transparent_40%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
//               <h3 className="text-2xl font-black tracking-tight text-text-primary">Testimonials</h3>
//               <div className="mt-6 grid gap-5 md:grid-cols-2">
//                 {testimonials.map((item) => (
//                   <article
//                     key={item.name}
//                     className="rounded-[24px] border border-border bg-[var(--color-surface-raised)]/70 p-6"
//                   >
//                     <Quote className="text-accent" size={24} />
//                     <p className="mt-4 text-sm leading-relaxed text-text-secondary">
//                       {item.quote}
//                     </p>
//                     <div className="mt-6 border-t border-border pt-4">
//                       <h4 className="text-base font-bold text-text-primary">{item.name}</h4>
//                       <p className="text-sm text-text-secondary">{item.role}</p>
//                     </div>
//                   </article>
//                 ))}
//               </div>
//             </div>

//             <div className="rounded-[28px] border border-border bg-[linear-gradient(180deg,rgba(232,64,10,0.08),transparent_45%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
//               <h3 className="text-2xl font-black tracking-tight text-text-primary">
//                 Case Study Highlight
//               </h3>
//               <div className="mt-6 space-y-5 rounded-[24px] border border-accent/20 bg-accent/5 p-6">
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
//                     Problem
//                   </p>
//                   <p className="mt-2 text-sm leading-relaxed text-text-secondary">
//                     A healthcare client faced repeated phishing-based credential theft
//                     affecting staff accounts.
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
//                   </p>
//                   <p className="mt-2 text-sm leading-relaxed text-text-secondary">
//                     Deployed 24/7 SOC monitoring with AI-driven phishing detection and
//                     staff security training protocols.
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
//                     Result
//                   </p>
//                   <p className="mt-2 text-sm leading-relaxed text-text-secondary">
//                     Reduced phishing attack incidents by 72% within 90 days.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
//             <div className="rounded-[28px] border border-border bg-[var(--color-surface)]/85 p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
//               <h3 className="text-2xl font-black tracking-tight text-text-primary">
//                 Certifications &amp; Awards
//               </h3>
//               <ul className="mt-6 grid gap-4 sm:grid-cols-2">
//                 {certifications.map(({ icon: Icon, label }) => (
//                   <li
//                     key={label}
//                     className="flex items-center gap-3 rounded-[22px] border border-border bg-[var(--color-surface-raised)]/70 px-4 py-4 text-sm text-text-secondary"
//                   >
//                     <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accent/20 bg-accent/8 text-accent">
//                       <Icon size={18} />
//                     </span>
//                     <span>{label}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="rounded-[28px] border border-border bg-[linear-gradient(90deg,rgba(232,64,10,0.12),transparent_55%),var(--color-surface)] p-8 shadow-[0_18px_46px_rgba(232,64,10,0.05)]">
//               <h3 className="text-2xl font-black tracking-tight text-text-primary">
//                 Follow Netcradus on LinkedIn
//               </h3>
//               <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-secondary">
//                 Use LinkedIn as the live proof stream for company updates, team growth,
//                 security insights, event participation, and customer-facing momentum.
//               </p>
//               <a
//                 href="https://www.linkedin.com/company/netcradus-pvt-ltd/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-primary mt-6 inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] no-underline"
//               >
//                 Visit LinkedIn
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  ShoppingBag,
  Eye,
  Factory,
  CloudOff,
  Store
} from "lucide-react";
import "./TrustSignals.css";

const testimonials = [
  {
    company: "OOURAA",
    industry: "Healthcare Technology",
    logo: "/technology/ouraa.png",
    text: "Netcradus helped us strengthen our cybersecurity posture with 24Ã—7 SOC monitoring, proactive threat detection, and continuous vulnerability assessments. Their team delivered enterprise-grade security with exceptional responsiveness and technical expertise."
  },
  {
    company: "Online Pantry",
    industry: "E-Commerce & Retail",
    logo: "/technology/onlinepantry.png",
    text: "Partnering with Netcradus significantly improved our security operations. Their SIEM monitoring, cloud security solutions, and rapid incident response helped us protect customer data and maintain uninterrupted business operations."
  },
  {
    company: "Vastraalane",
    industry: "Technology & Digital Solutions",
    logo: "/technology/vastraalane.png",
    text: "Netcradus has been a reliable cybersecurity partner, helping us improve threat visibility, security monitoring, and infrastructure protection."
  },
  {
    company: "CyberHaxs",
    industry: "Cybersecurity & Risk Management",
    logo: "/technology/cyberhaxs.png",
    text: "Working with Netcradus enhanced our security operations through AI-powered monitoring, rapid incident response, and strategic cybersecurity guidance."
  },
  {
    company: "Teqnoor",
    location: "United Kingdom",
    service: "Website Security Audit",
    industry: "Website Security Audit",
    logo: "/technology/teqnoor.png",
    text: "Netcradus provided a thorough and professional security audit of our website. Their technical expertise, attention to detail, and practical recommendations helped us better understand and strengthen our security posture."
  }
];

const caseStudies = [
  {
    title: "Healthcare",
    subtitle: "Phishing Credential Theft",
    icon: ShieldAlert,
    problem: "A healthcare client faced repeated phishing-based credential theft affecting staff accounts.",
    solution: "Deployed 24/7 SOC monitoring with AI-driven phishing detection and staff security training protocols.",
    result: "Reduced phishing attack incidents by 72% within 90 days."
  },
  {
    title: "E-commerce",
    subtitle: "Ransomware Defense & Recovery",
    icon: ShoppingBag,
    problem: "Ransomware encrypted order database.",
    solution: "EDR deployment + isolated infected systems + automated backup/recovery.",
    result: "Zero data loss, full restoration in 4 hours, no ransom paid."
  },
  {
    title: "Fintech",
    subtitle: "Insider Threat Mitigation",
    icon: Eye,
    problem: "Unusual data access suggesting insider threat.",
    solution: "User behavior analytics + role-based access controls + real-time alerts.",
    result: "Threat contained in 48 hours, no data exfiltration."
  },
  {
    title: "Manufacturing",
    subtitle: "OT Security Hardening",
    icon: Factory,
    problem: "Exposed OT network due to outdated segmentation.",
    solution: "IT/OT segmentation redesign + continuous vulnerability scanning + legacy hardening.",
    result: "Eliminated critical vulnerabilities, 99.9% uptime."
  },
  {
    title: "SaaS Startup",
    subtitle: "Cloud Misconfiguration Protection",
    icon: CloudOff,
    problem: "Publicly exposed cloud storage buckets.",
    solution: "Full cloud security audit + least-privilege IAM + automated drift detection.",
    result: "100% exposed assets closed in 72 hours, passed SOC 2 audit with zero findings."
  },
  {
    title: "Retail",
    subtitle: "DDoS Attack Mitigation",
    icon: Store,
    problem: "Repeated DDoS attacks during peak sales.",
    solution: "Layered DDoS mitigation with traffic scrubbing, rate limiting, geo-filtering.",
    result: "100% uptime during Black Friday/holiday sales."
  }
];

const certifications = [
  { icon: BadgeCheck, label: "Security Certifications" },
  { icon: Award, label: "Industry Awards" },
  { icon: Building2, label: "Enterprise References" },
  { icon: BriefcaseBusiness, label: "Compliance Credentials" },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 40 : -40,
    opacity: 0
  })
};

export default function TrustSignals() {
  // Testimonials Carousel State
  const [testiIndex, setTestiIndex] = useState(0);
  const [testiDirection, setTestiDirection] = useState(0);
  const [isTestiHovered, setIsTestiHovered] = useState(false);
  const [testiTouchStart, setTestiTouchStart] = useState(0);
  const [testiMouse, setTestiMouse] = useState({ x: 0, y: 0, active: false });

  // Case Studies Carousel State
  const [caseIndex, setCaseIndex] = useState(0);
  const [caseDirection, setCaseDirection] = useState(0);
  const [isCaseHovered, setIsCaseHovered] = useState(false);
  const [caseTouchStart, setCaseTouchStart] = useState(0);
  const [caseMouse, setCaseMouse] = useState({ x: 0, y: 0, active: false });

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsTouchDevice(
        'ontouchstart' in window || navigator.maxTouchPoints > 0
      );
    }
  }, []);

  const handleTestiMouseMove = (e) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setTestiMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  const handleCaseMouseMove = (e) => {
    if (isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setCaseMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      active: true
    });
  };

  // Testimonials Navigation Handlers
  const handleTestiNext = () => {
    setTestiDirection(1);
    setTestiIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleTestiPrev = () => {
    setTestiDirection(-1);
    setTestiIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTestiDotClick = (idx) => {
    setTestiDirection(idx > testiIndex ? 1 : -1);
    setTestiIndex(idx);
  };

  // Case Studies Navigation Handlers
  const handleCaseNext = () => {
    setCaseDirection(1);
    setCaseIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const handleCasePrev = () => {
    setCaseDirection(-1);
    setCaseIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const handleCaseDotClick = (idx) => {
    setCaseDirection(idx > caseIndex ? 1 : -1);
    setCaseIndex(idx);
  };

  // Touch Swipe Handlers for Mobile / Tablet
  const handleTouchEnd = (touchStart, e, onNext, onPrev) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const minDistance = 40;
    if (distance > minDistance) {
      onNext();
    } else if (distance < -minDistance) {
      onPrev();
    }
  };

  // Testimonials Auto-rotate (Every 5s)
  useEffect(() => {
    if (isTestiHovered) return;
    const timer = setInterval(() => {
      handleTestiNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [testiIndex, isTestiHovered]);

  // Case Studies Auto-rotate (Every 7s)
  useEffect(() => {
    if (isCaseHovered) return;
    const timer = setInterval(() => {
      handleCaseNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [caseIndex, isCaseHovered]);

  const CurrentCaseIcon = caseStudies[caseIndex].icon;

  return (
    <section
      id="trust-signals"
      className="relative overflow-hidden bg-background py-24 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
            Trust Signals
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-text-primary md:text-6xl">
            Proof points that support{" "}
            <span className="text-accent italic">buyer confidence.</span>
          </h2>
        </div>

        <div className="grid gap-8">
          <div className="grid gap-8 xl:grid-cols-2">

            <div
              className="trust-outer-card"
              onMouseMove={handleTestiMouseMove}
              onMouseLeave={() => setTestiMouse((prev) => ({ ...prev, active: false }))}
            >
              {/* Outer Border Orange Glow Frame */}
              <div className="trust-border-glow-frame" />

              {/* Cursor-Following Radial Glow */}
              {testiMouse.active && !isTouchDevice && (
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
                  style={{
                    background: `radial-gradient(400px circle at ${testiMouse.x}px ${testiMouse.y}px, rgba(255, 107, 0, 0.12), rgba(255, 133, 51, 0.04), transparent 70%)`
                  }}
                />
              )}

              {/* Slow-Moving Circuit Particles Background */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none circuit-particle-bg" viewBox="0 0 500 500" preserveAspectRatio="none">
                <pattern id="testi-circuit" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FF6B00" strokeWidth="0.5" />
                  <circle cx="25" cy="25" r="1.5" fill="#FF7A00" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#testi-circuit)" />
              </svg>

              <div>
                {/* Header with Title and Left/Right Arrows */}
                <div className="flex items-center justify-between relative z-20">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-12 bg-accent/15 rounded-full blur-xl pointer-events-none z-0" />
                    <h3 className="relative z-10 text-2xl sm:text-3xl font-bold tracking-tight text-text-primary uppercase">
                      Testimonials
                    </h3>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-[3px] w-20 bg-gradient-to-r from-[#FF6B00] to-[#FFA043] mt-2 rounded-full origin-left"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleTestiPrev}
                      className="trust-nav-btn"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleTestiNext}
                      className="trust-nav-btn"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Animated Carousel Slide Area */}
                <div
                  className="relative mt-6 overflow-hidden pt-2 px-1 pb-4 min-h-[290px] z-20"
                  onMouseEnter={() => setIsTestiHovered(true)}
                  onMouseLeave={() => setIsTestiHovered(false)}
                  onTouchStart={(e) => setTestiTouchStart(e.targetTouches[0].clientX)}
                  onTouchEnd={(e) => handleTouchEnd(testiTouchStart, e, handleTestiNext, handleTestiPrev)}
                >
                  <AnimatePresence mode="wait" custom={testiDirection}>
                    <motion.article
                      key={testiIndex}
                      custom={testiDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 280, damping: 28 },
                        opacity: { duration: 0.3 }
                      }}
                      className="trust-inner-card group"
                    >
                      {/* Left Gradient Edge Bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#FF6B00] to-[#FFA043] rounded-l-[24px] overflow-hidden z-20">
                        <motion.div
                          className="w-full h-1/3 bg-white/80"
                          animate={{ y: ["-100%", "300%"] }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                        />
                      </div>

                      <div className="pl-2">
                        <Quote className="text-[#FF7A00] pulse-glow-icon transition-transform duration-300 group-hover:scale-110" size={30} />
                        <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-text-secondary italic group-hover:text-text-primary transition-colors duration-300">
                          "{testimonials[testiIndex].text}"
                        </p>
                      </div>

                      <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between gap-4 z-10 relative pl-2">
                        <div className="flex flex-col gap-0.5 min-w-0">
                          <h4 className="text-base font-semibold text-white leading-tight tracking-wide uppercase transition-colors duration-300 group-hover:text-[#FF7A00] truncate">
                            {testimonials[testiIndex].company}
                          </h4>
                          <p className="text-[11px] font-bold text-[#FF7A00] tracking-widest uppercase truncate pulse-glow-icon">
                            {testimonials[testiIndex].service || testimonials[testiIndex].industry}
                            {testimonials[testiIndex].location ? ` • ${testimonials[testiIndex].location}` : ""}
                          </p>
                        </div>
                        {testimonials[testiIndex].logo && (
                          <div className="shrink-0 flex items-center justify-center p-2 px-3 bg-white/10 rounded-xl border border-white/15 shadow-sm">
                            <img
                              src={testimonials[testiIndex].logo}
                              alt={`${testimonials[testiIndex].company} logo`}
                              className="h-12 sm:h-16 max-h-16 w-auto max-w-[140px] sm:max-w-[180px] object-contain"
                            />
                          </div>
                        )}
                      </div>
                    </motion.article>
                  </AnimatePresence>
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="mt-6 flex justify-center items-center gap-2.5 relative z-20">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleTestiDotClick(idx)}
                    className="relative h-2.5 w-2.5 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center p-0 border-0 bg-transparent"
                    aria-label={`Go to Testimonial ${idx + 1}`}
                  >
                    {idx === testiIndex ? (
                      <motion.div
                        layoutId="testiActiveDot"
                        className="active-dot-pill"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    ) : (
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-[#FF7A00]/50 transition-colors" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="trust-outer-card"
              onMouseMove={handleCaseMouseMove}
              onMouseLeave={() => setCaseMouse((prev) => ({ ...prev, active: false }))}
            >
              {/* Outer Border Orange Glow Frame */}
              <div className="trust-border-glow-frame" />

              {/* Cursor-Following Radial Glow */}
              {caseMouse.active && !isTouchDevice && (
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
                  style={{
                    background: `radial-gradient(400px circle at ${caseMouse.x}px ${caseMouse.y}px, rgba(255, 107, 0, 0.12), rgba(255, 133, 51, 0.04), transparent 70%)`
                  }}
                />
              )}

              {/* Slow-Moving Circuit Particles Background */}
              <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none circuit-particle-bg" viewBox="0 0 500 500" preserveAspectRatio="none">
                <pattern id="case-circuit" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#FF7A00" strokeWidth="0.5" />
                  <circle cx="25" cy="25" r="1.5" fill="#FF6B00" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#case-circuit)" />
              </svg>

              <div>
                {/* Header with Title and Left/Right Arrows */}
                <div className="flex items-center justify-between relative z-20">
                  <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-12 bg-accent/15 rounded-full blur-xl pointer-events-none z-0" />
                    <h3 className="relative z-10 text-2xl sm:text-3xl font-bold tracking-tight text-text-primary uppercase">
                      Case Study Highlight
                    </h3>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-[3px] w-20 bg-gradient-to-r from-[#FF6B00] to-[#FFA043] mt-2 rounded-full origin-left"
                    />
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleCasePrev}
                      className="trust-nav-btn"
                      aria-label="Previous Case Study"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleCaseNext}
                      className="trust-nav-btn"
                      aria-label="Next Case Study"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

                {/* Animated Carousel Slide Area */}
                <div
                  className="relative mt-6 overflow-hidden pt-2 px-1 pb-4 min-h-[290px] z-20"
                  onMouseEnter={() => setIsCaseHovered(true)}
                  onMouseLeave={() => setIsCaseHovered(false)}
                  onTouchStart={(e) => setCaseTouchStart(e.targetTouches[0].clientX)}
                  onTouchEnd={(e) => handleTouchEnd(caseTouchStart, e, handleCaseNext, handleCasePrev)}
                >
                  <AnimatePresence mode="wait" custom={caseDirection}>
                    <motion.article
                      key={caseIndex}
                      custom={caseDirection}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 280, damping: 28 },
                        opacity: { duration: 0.3 }
                      }}
                      className="trust-inner-card group"
                    >
                      {/* Subtle Faint Background Watermark Icon */}
                      <div className="absolute -right-3 -bottom-3 text-[#FF7A00] opacity-[0.06] pointer-events-none z-0">
                        <CurrentCaseIcon size={140} />
                      </div>

                      {/* Header with Top-Left Dark Orange-Glowing Icon Badge */}
                      <div className="relative flex items-center justify-between border-b border-white/10 pb-3.5 mb-4 z-10">
                        <div className="flex items-center gap-3.5">
                          {/* Dark Glowing Icon Badge */}
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FF7A00]/40 bg-[#1a1a1f] text-[#FF7A00] shadow-[0_0_15px_rgba(255,122,0,0.3)] pulse-glow-icon transition-transform duration-300 group-hover:scale-105 group-hover:border-[#FF7A00]/60">
                            <CurrentCaseIcon size={22} />
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-white leading-tight">
                              {caseStudies[caseIndex].title}
                            </h4>
                            <p className="text-[11px] font-bold text-[#FF7A00] tracking-widest uppercase mt-0.5">
                              {caseStudies[caseIndex].subtitle}
                            </p>
                          </div>
                        </div>

                        <span className="text-[10px] font-semibold text-[#FF7A00] tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/10">
                          #{caseIndex + 1}
                        </span>
                      </div>

                      <div className="space-y-3.5 relative z-10">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A00]">
                            Problem
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-text-secondary group-hover:text-text-primary transition-colors">
                            {caseStudies[caseIndex].problem}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A00]">
                            Solution
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-text-secondary group-hover:text-text-primary transition-colors">
                            {caseStudies[caseIndex].solution}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF7A00]">
                            Result
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-text-secondary group-hover:text-text-primary transition-colors font-medium">
                            {caseStudies[caseIndex].result}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </AnimatePresence>
                </div>
              </div>

              {/* Indicator Dots */}
              <div className="mt-6 flex justify-center items-center gap-2.5 relative z-20">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCaseDotClick(idx)}
                    className="relative h-2.5 w-2.5 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center p-0 border-0 bg-transparent"
                    aria-label={`Go to Case Study ${idx + 1}`}
                  >
                    {idx === caseIndex ? (
                      <motion.div
                        layoutId="caseActiveDot"
                        className="active-dot-pill"
                        transition={{ type: "spring", stiffness: 350, damping: 25 }}
                      />
                    ) : (
                      <div className="h-2.5 w-2.5 rounded-full bg-white/20 hover:bg-[#FF7A00]/50 transition-colors" />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
