import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Loader2,
  ArrowRight,
  ShieldCheck,
  Clock3,
  FileLock2,
  Wrench,
  Siren,
  Handshake,
  Radar,
  Cloud,
  BrainCircuit,
  Network,
  Landmark,
  ShieldAlert,
  Cpu,
  ClipboardList,
  Lock,
  UploadCloud,
  X,
  FileText,
  User,
  Building2,
  MessageSquare,
  Clock,
  Timer,
  Navigation,
  ChevronDown,
  ArrowUpRight,
  Users,
  Calendar,
  Settings
} from 'lucide-react';
import './Contact.css';
import LocationMap from './LocationMap';
import CountryDropdown from './CountryDropdown';
import FormPrivacyNotice from './ui/FormPrivacyNotice';

// Import certifications/trust logos
import isoLogo from '../assets/ISO-Loogo-removebg.png';
import certinLogo from '../assets/certin.png';
import iso27701Logo from '../assets/iso-27701-removebg.png';
import msmeLogo from '../assets/msme-removebg.png';
import udyamLogo from '../assets/udyam.png';
import soc2Logo from '../assets/soc2.png';
import gdprLogo from '../assets/gdpr.jpeg';

// ─────────────────────────────────────────────────────────────────────────
// Config & Data Lists
// ─────────────────────────────────────────────────────────────────────────
const trustPoints = [
  { icon: Phone, label: "24x7 Support" },
  { icon: Clock3, label: "1 Hour Response" },
  { icon: ShieldCheck, label: "NDA Available" },
  { icon: Settings, label: "ISO-Compliant Engagements" },
];

const contactOptions = [
  {
    id: "sales",
    icon: ShieldCheck,
    title: "Sales & Consulting",
    description: "Discuss enterprise security, VAPT, SOC and compliance requirements.",
    cta: "Contact Sales",
    color: "#E8400A",
    rgb: "232, 64, 10",
    bgLight: "rgba(232, 64, 10, 0.08)",
  },
  {
    id: "support",
    icon: Wrench,
    title: "Technical Support",
    description: "Existing customers can raise and track support requests.",
    cta: "Get Support",
    color: "#3B82F6",
    rgb: "59, 130, 246",
    bgLight: "rgba(59, 130, 246, 0.08)",
  },
  {
    id: "incident",
    icon: Siren,
    title: "Incident Response",
    description: "Immediate assistance during cybersecurity incidents.",
    cta: "Report Incident",
    color: "#10B981",
    rgb: "16, 185, 129",
    bgLight: "rgba(16, 185, 129, 0.08)",
  },
  {
    id: "partnerships",
    icon: Handshake,
    title: "Partnerships",
    description: "Become a technology or channel partner and grow with Netcradus.",
    cta: "Partner With Us",
    color: "#8B5CF6",
    rgb: "139, 92, 246",
    bgLight: "rgba(139, 92, 246, 0.08)",
  },
];

const serviceOptions = [
  { id: "managed-soc", label: "Managed SOC" },
  { id: "vapt", label: "VAPT Services" },
  { id: "cloud-security", label: "Cloud Security" },
  { id: "ai-security", label: "AI Security" },
  { id: "network-security", label: "Network Security" },
  { id: "compliance", label: "Compliance & Governance" },
  { id: "enterprise-software", label: "Enterprise Software Solutions" },
  { id: "other", label: "Other" },
];

const faqItems = [
  {
    question: "How quickly will someone contact me?",
    answer: "Our team responds to standard enquiries within one business hour. Incident response requests are triaged immediately, 24/7.",
  },
  {
    question: "Do you provide 24/7 incident response?",
    answer: "Yes. Our SOC operates around the clock with a dedicated incident response track for active breaches and critical alerts.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes. We routinely sign mutual NDAs before any discovery call that involves sensitive infrastructure or security details.",
  },
  {
    question: "Do you provide free security consultations?",
    answer: "Yes. Every engagement starts with a complimentary strategic consultation to understand your environment and goals.",
  },
  {
    question: "What should I include when reaching out?",
    answer: "A short description of your environment, the service you're interested in, and your timeline helps us route your enquiry to the right specialist faster.",
  },
];

// ─────────────────────────────────────────────────────────────────────────
// UI Sub-Elements
// ─────────────────────────────────────────────────────────────────────────

function Magnetic({ children, className = "", strength = 14 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 16, mass: 0.4 });

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set((relX / rect.width) * strength);
    y.set((relY / rect.height) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({ isActive, onClick, color, rgb, bgLight, children }) {
  const ref = useRef(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 220, damping: 20 });

  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        "--accent-color": color,
        "--accent-color-rgb": rgb,
        "--bg-accent-light": bgLight
      }}
      whileTap={{ scale: 0.98 }}
      aria-pressed={isActive}
      className={`card-premium card-sheen group card-option-btn ${isActive ? "active" : ""
        }`}
    >
      {children}
    </motion.button>
  );
}

function AmbientBackground() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    function handleMove(e) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        spotlightRef.current?.style.setProperty("--x", `${e.clientX}px`);
        spotlightRef.current?.style.setProperty("--y", `${e.clientY}px`);
      });
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  const particles = Array.from({ length: 18 }, (_, i) => {
    const seed = (i * 37) % 100;
    return {
      id: i,
      left: `${(i * 5.7 + seed * 0.6) % 100}%`,
      size: 1.5 + (seed % 3) * 0.6,
      delay: (i % 9) * 1.6,
      duration: 16 + (seed % 10),
      drift: (i % 2 === 0 ? 1 : -1) * (8 + (seed % 14)),
      opacity: 0.25 + (seed % 5) * 0.08,
      cyan: i % 3 === 0,
    };
  });

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: p.left,
              bottom: "-6%",
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: p.cyan ? "#C2410C" : "#FDBA74",
              boxShadow: p.cyan ? "0 0 6px 1px #C2410C99" : "0 0 5px 1px #FDBA7488",
              ["--particle-opacity"]: p.opacity,
              ["--particle-drift"]: `${p.drift}px`,
              animation: `float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
              position: 'absolute'
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute h-[560px] w-[560px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(closest-side, #E8400A3d, transparent 70%)",
          position: 'absolute',
          top: "-8%",
          left: "5%"
        }}
        animate={{
          x: ["-10%", "18%", "-6%"],
          y: ["-8%", "10%", "-4%"],
        }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(closest-side, #C2410C33, transparent 70%)",
          position: 'absolute',
          top: "35%",
          right: "0%"
        }}
        animate={{
          x: ["6%", "-14%", "8%"],
          y: ["6%", "-10%", "4%"],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div
        ref={spotlightRef}
        className="absolute inset-0 opacity-70"
        style={{
          background: "radial-gradient(480px circle at var(--x, 50%) var(--y, 20%), rgba(194, 65, 12, 0.05), transparent 70%)",
          position: 'absolute'
        }}
      />
      <div className="bg-grain" />
      <div className="bg-vignette" />
    </div>
  );
}

const FloatingShieldVisual = () => {
  return (
    <div className="podium-container">
      {/* Background radial glow */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-radial-glow blur-[80px] opacity-40 z-0"></div>

      {/* Podium Rings */}
      <div className="podium-base" />
      <div className="podium-glow-ring" />

      {/* Main Shield */}
      <motion.div
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="shield-3d-wrapper"
      >
        <div className="shield-container">
          <div className="shield-inner">
            <ShieldCheck size={56} className="shield-logo-mark" strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>

      {/* Floating Orbit Nodes */}
      <motion.div
        animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="orbit-node"
        style={{ top: "18%", left: "15%", borderColor: "#E8400A", borderStyle: "solid", borderWidth: "1.5px" }}
      >
        <Lock size={18} className="text-[#E8400A]" />
      </motion.div>

      <motion.div
        animate={{ y: [8, -8, 8], x: [4, -4, 4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="orbit-node"
        style={{ top: "15%", right: "15%", borderColor: "#3B82F6", borderStyle: "solid", borderWidth: "1.5px" }}
      >
        <Cloud size={18} className="text-[#3B82F6]" />
      </motion.div>

      <motion.div
        animate={{ y: [-10, 10, -10], x: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="orbit-node"
        style={{ bottom: "25%", left: "12%", borderColor: "#10B981", borderStyle: "solid", borderWidth: "1.5px" }}
      >
        <Users size={18} className="text-[#10B981]" />
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="orbit-node"
        style={{ bottom: "22%", right: "12%", borderColor: "#8B5CF6", borderStyle: "solid", borderWidth: "1.5px" }}
      >
        <Cpu size={18} className="text-[#8B5CF6]" />
      </motion.div>
    </div>
  );
};

// ─────────────────────────────────────────────────────────────────────────
// Primary Contact Component
// ─────────────────────────────────────────────────────────────────────────
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [status, setStatus] = useState("idle");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    phone: "",
    email: "",
    message: ""
  });

  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [faqOpenIndex, setFaqOpenIndex] = useState(0);

  const [captchaToken, setCaptchaToken] = useState("");
  const turnstileContainerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!turnstileSiteKey) return;

    let isMounted = true;

    const renderTurnstile = () => {
      if (window.turnstile && turnstileContainerRef.current && widgetIdRef.current === null) {
        try {
          widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: turnstileSiteKey,
            callback: (token) => {
              if (isMounted) {
                setCaptchaToken(token);
                setErrors((prev) => ({ ...prev, captchaToken: undefined }));
              }
            },
            'expired-callback': () => {
              if (isMounted) setCaptchaToken('');
            },
            'error-callback': () => {
              if (isMounted) setCaptchaToken('');
            },
            theme: 'dark',
          });
        } catch (e) {
          console.error('Turnstile render exception:', e);
        }
      }
    };

    if (window.turnstile) {
      renderTurnstile();
    } else {
      const scriptId = 'cf-turnstile-script';
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          if (isMounted) renderTurnstile();
        };
        document.head.appendChild(script);
      } else {
        const interval = setInterval(() => {
          if (window.turnstile) {
            clearInterval(interval);
            if (isMounted) renderTurnstile();
          }
        }, 100);
        return () => clearInterval(interval);
      }
    }

    return () => {
      isMounted = false;
      if (window.turnstile && widgetIdRef.current !== null) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (_err) {
          // Ignore widget removal errors on unmount
        }
        widgetIdRef.current = null;
      }
    };
  }, [turnstileSiteKey]);

  const resetCaptcha = () => {
    setCaptchaToken('');
    if (window.turnstile && widgetIdRef.current !== null) {
      try {
        window.turnstile.reset(widgetIdRef.current);
      } catch (_err) {
        // Ignore reset errors
      }
    }
  };

  const optionToService = {
    sales: "vapt",
    support: "enterprise-software",
    incident: "managed-soc",
    partnerships: "other",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.first_name.trim()) {
      nextErrors.first_name = "First name is required.";
    }
    if (!formData.last_name.trim()) {
      nextErrors.last_name = "Last name is required.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Business email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      nextErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.company.trim()) {
      nextErrors.company = "Company name is required.";
    }
    if (!selectedService) {
      nextErrors.service = "Please select a service.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Message details are required.";
    }
    if (!privacyConsent) {
      nextErrors.privacyConsent = "You must agree to the Privacy Policy to submit your request.";
    }
    if (turnstileSiteKey && !captchaToken) {
      nextErrors.captchaToken = "Please complete the security verification.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    if (!validate()) return;

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";
    const endpoint = `${API_BASE_URL}/api/v1/contact`;

    const payload = {
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      company: formData.company.trim(),
      service: selectedService,
      country: selectedCountry || undefined,
      message: formData.message.trim(),
      page_url: window.location.href,
      referrer_url: document.referrer || undefined,
      captcha_token: captchaToken,
    };

    try {
      setStatus("loading");
      setErrorMessage("");

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setReferenceId(result.referenceCode || "NC-CONFIRMED");
        setStatus("success");
        setFormData({
          first_name: "",
          last_name: "",
          company: "",
          phone: "",
          email: "",
          message: ""
        });
        setSelectedService("");
        setSelectedCountry("");
        setSelectedOptionId(null);
        setPrivacyConsent(false);
        resetCaptcha();
        setErrors({});
      } else {
        const errorMsg =
          result.error ||
          result.message ||
          (result.details && Object.values(result.details).join(" ")) ||
          "Unable to submit your request. Please try again.";
        throw new Error(errorMsg);
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      setErrorMessage(error.message || "Unable to submit your request. Please try again.");
      setStatus("error");
      resetCaptcha();
    }
  };

  function handleOptionSelect(id) {
    setSelectedOptionId(id);
    setSelectedService(optionToService[id] ?? "");
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function resetForm() {
    setFormData({
      first_name: "",
      last_name: "",
      company: "",
      phone: "",
      email: "",
      message: ""
    });
    setSelectedService("");
    setSelectedCountry("");
    setSelectedOptionId(null);
    setPrivacyConsent(false);
    resetCaptcha();
    setStatus("idle");
    setErrors({});
  }

  return (
    <div className="contact-section-wrapper">
      <AmbientBackground />

      {/* Hero Section Split Layout */}
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="hero-section-grid">
          {/* Left Column: Heading, buttons and indicators */}
          <div className="hero-content">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="kicker"
            >
              <span className="hero-pulse-dot">
                <span className="hero-pulse-ping" />
                <span className="hero-pulse-core" />
              </span>
              CONTACT NETCRADUS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="hero-title"
            >
              Enterprise Cybersecurity <br />
              Starts With a <span>Conversation</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hero-checklist-bar"
            >
              {trustPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <span key={index} className="checklist-item">
                    <Icon size={14} className="text-[var(--nc-cyan)]" />
                    {point.label}
                  </span>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hero-image-container"
          >
            <img
              src="/img/india_hero_bg.jpg"
              alt="Cybersecurity Shield Visual"
              className="hero-mobile-only-image"
            />
          </motion.div>
        </div>
      </section>

      <section id="contact-form" className="main-contact-section">
        <div className="main-contact-container">
          {/* Left Column: Contact Form */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="card-premium card-sheen success-container"
                >
                  <div className="success-badge-wrapper">
                    <span className="success-badge-ping" />
                    <CheckCircle2 size={48} className="relative text-nc-success" strokeWidth={1.5} />
                  </div>
                  <h3 className="success-title">Thank you!</h3>
                  <p className="success-desc">
                    Your consultation request has been submitted successfully. Our team will contact you shortly.
                  </p>
                  <div className="success-reference">
                    Reference&nbsp;<span className="text-[#C2410C]">{referenceId}</span>
                  </div>
                  <button type="button" onClick={resetForm} className="success-reset-btn">
                    Submit another request
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="contact-form-body"
                  onSubmit={handleSubmit}
                  noValidate
                  className="card-premium card-sheen contact-form-card"
                >
                  <div className="form-header">
                    <h2>Let's Secure Your Business</h2>
                    <p>
                      Fields marked with <span className="text-[#C2410C]">*</span> are required.
                    </p>
                  </div>

                  <div className="form-fields-grid">
                    {/* First Name */}
                    <div className="form-field-container">
                      <label htmlFor="first_name" className="field-label">
                        First Name<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="first_name"
                          name="first_name"
                          type="text"
                          value={formData.first_name}
                          onChange={handleChange}
                          placeholder="First Name*"
                          aria-invalid={!!errors.first_name}
                          className={`field-input ${errors.first_name ? "border-error" : ""}`}
                        />
                      </div>
                      <div className="error-area">
                        {errors.first_name && <p className="text-error">{errors.first_name}</p>}
                      </div>
                    </div>

                    {/* Last Name */}
                    <div className="form-field-container">
                      <label htmlFor="last_name" className="field-label">
                        Last Name<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="last_name"
                          name="last_name"
                          type="text"
                          value={formData.last_name}
                          onChange={handleChange}
                          placeholder="Last Name*"
                          aria-invalid={!!errors.last_name}
                          className={`field-input ${errors.last_name ? "border-error" : ""}`}
                        />
                      </div>
                      <div className="error-area">
                        {errors.last_name && <p className="text-error">{errors.last_name}</p>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-field-container">
                      <label htmlFor="email" className="field-label">
                        Business Email<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Business Email*"
                          aria-invalid={!!errors.email}
                          className={`field-input ${errors.email ? "border-error" : ""}`}
                        />
                      </div>
                      <div className="error-area">
                        {errors.email && <p className="text-error">{errors.email}</p>}
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="form-field-container">
                      <label htmlFor="phone" className="field-label">
                        Phone Number*
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number*"
                          aria-invalid={!!errors.phone}
                          className={`field-input ${errors.phone ? "border-error" : ""}`}
                        />
                      </div>
                      <div className="error-area">
                        {errors.phone && <p className="text-error">{errors.phone}</p>}
                      </div>
                    </div>

                    {/* Company */}
                    <div className="form-field-container">
                      <label htmlFor="company" className="field-label">
                        Company Name*
                      </label>
                      <div className="input-wrapper">
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Company Name*"
                          aria-invalid={!!errors.company}
                          className={`field-input ${errors.company ? "border-error" : ""}`}
                        />
                      </div>
                      <div className="error-area">
                        {errors.company && <p className="text-error">{errors.company}</p>}
                      </div>
                    </div>

                    {/* Service Dropdown */}
                    <div className="form-field-container">
                      <label htmlFor="selectedService" className="field-label">
                        Service Required<span className="text-[#C2410C]">*</span>
                      </label>
                      <div className="input-wrapper">
                        <select
                          id="selectedService"
                          name="service"
                          value={selectedService}
                          onChange={(e) => {
                            setSelectedService(e.target.value);
                            setErrors({ ...errors, service: undefined });
                          }}
                          aria-invalid={!!errors.service}
                          className={`field-input field-select ${errors.service ? "border-error" : ""}`}
                        >
                          <option value="" disabled>Service Required*</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt.id} value={opt.id}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-nc-muted" />
                      </div>
                      <div className="error-area">
                        {errors.service && <p className="text-error">{errors.service}</p>}
                      </div>
                    </div>

                    {/* Country / Region Dropdown */}
                    <div className="form-field-container">
                      <CountryDropdown
                        value={selectedCountry}
                        onChange={(val) => setSelectedCountry(val)}
                        label="Country / Region"
                        placeholder="Select Country / Region"
                        searchPlaceholder="Find a country or region"
                      />
                      <input type="hidden" name="country" value={selectedCountry} />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-field-container mt-4">
                    <label htmlFor="message" className="field-label">
                      How can we help you?
                    </label>
                    <div className="input-wrapper">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={(e) => {
                          if (e.target.value.length <= 600) handleChange(e);
                        }}
                        placeholder="How can we help you?"
                        aria-invalid={!!errors.message}
                        className={`field-input field-textarea ${errors.message ? "border-error" : ""}`}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <p className="text-error" style={{ margin: 0 }}>{errors.message}</p>
                      ) : (
                        <p className="text-xs text-nc-muted/70" style={{ margin: 0 }}>
                          A short summary of your environment and timeline helps us route this faster.
                        </p>
                      )}
                      <span className="text-xs text-nc-muted/70 font-mono">
                        {formData.message.length}/600
                      </span>
                    </div>
                  </div>

                  {/* Point-of-Collection Privacy Notice */}
                  <div className="my-3 text-left">
                    <FormPrivacyNotice
                      purpose="responding to your enquiry, consultation request, or requested information"
                      requireConsent={true}
                      consentChecked={privacyConsent}
                      onConsentChange={(val) => {
                        setPrivacyConsent(val);
                        setErrors({ ...errors, privacyConsent: undefined });
                      }}
                      id="contact-privacy-consent"
                    />
                    {errors.privacyConsent && (
                      <p className="text-error text-xs mt-1" style={{ margin: 0 }}>{errors.privacyConsent}</p>
                    )}
                  </div>

                  {/* Cloudflare Turnstile CAPTCHA Security Challenge */}
                  {turnstileSiteKey && (
                    <div className="my-4 flex flex-col items-center justify-center min-h-[65px]">
                      <div ref={turnstileContainerRef} />
                      {errors.captchaToken && (
                        <p className="text-error text-xs mt-1.5" style={{ margin: 0 }}>
                          {errors.captchaToken}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="submit-btn-wrapper">
                    <Magnetic strength={8}>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="submit-btn"
                      >
                        <span className="btn-sheen" />
                        {status === "loading" ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Request Consultation
                            <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>

                  {status === "error" && (
                    <div className="p-4 my-4 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-xs space-y-2 shadow-md">
                      <div className="flex items-start gap-2.5 text-[#991B1B]">
                        <ShieldAlert size={18} className="shrink-0 mt-0.5 text-[#DC2626]" />
                        <div>
                          <p className="font-bold text-[#7F1D1D] text-sm">Unable to Submit Request</p>
                          <p className="text-[#991B1B] mt-1 text-xs leading-relaxed font-medium">
                            {errorMessage || "An unexpected error occurred while processing your request. Your entered details have been preserved. Please try again."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="security-footer">
                    <ShieldCheck size={14} className="text-nc-success" />
                    Transmitted over an encrypted, secure connection.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Get In Touch (Mockup Blue Gradient Panel) */}
          <div className="info-panel">
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4 }}
              className="get-in-touch-card"
            >
              {/* Map Outline Overlay - Dotted grid world map aesthetic */}
              <div className="get-in-touch-map-bg">
                <svg width="100%" height="100%" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: 0, left: 0, opacity: 0.12 }}>
                  <circle cx="200" cy="150" r="2" fill="#3b82f6" opacity="0.3" />
                  <circle cx="210" cy="160" r="3" fill="#3b82f6" opacity="0.4" />
                  <circle cx="250" cy="180" r="2" fill="#3b82f6" opacity="0.3" />
                  <circle cx="300" cy="120" r="4" fill="#3b82f6" opacity="0.2" />
                  {/* US Map dots */}
                  <circle cx="240" cy="170" r="4" fill="#E8400A" opacity="0.8" />
                  <circle cx="240" cy="170" r="8" stroke="#E8400A" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ transformOrigin: "240px 170px" }} />
                  {/* UK Map dots */}
                  <circle cx="480" cy="140" r="4" fill="#E8400A" opacity="0.8" />
                  <circle cx="480" cy="140" r="8" stroke="#E8400A" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ transformOrigin: "480px 140px" }} />
                  {/* India Map dots */}
                  <circle cx="680" cy="220" r="4" fill="#E8400A" opacity="0.8" />
                  <circle cx="680" cy="220" r="8" stroke="#E8400A" strokeWidth="1" opacity="0.4" className="animate-ping" style={{ transformOrigin: "680px 220px" }} />
                  {/* Grid lines */}
                  <path d="M100,50 L900,50 M100,100 L900,100 M100,150 L900,150 M100,200 L900,200 M100,250 L900,250 M100,300 L900,300 M100,350 L900,350" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.1" />
                  <path d="M150,20 L150,450 M250,20 L250,450 M350,20 L350,450 M450,20 L450,450 M550,20 L550,450 M650,20 L650,450 M750,20 L750,450 M850,20 L850,450" stroke="#3b82f6" strokeWidth="0.5" strokeDasharray="3 6" opacity="0.1" />
                </svg>
              </div>

              <div className="get-in-touch-content">
                <div className="get-in-touch-header">
                  <h2>Get In Touch</h2>
                  <p>Speak to our global engineering offices or reach our dispatch desk directly.</p>
                </div>

                <div className="get-in-touch-info-list">
                  {/* Call Us (Clickable Phone Number Card) */}
                  <div className="get-in-touch-item hover:shadow-[0_0_15px_rgba(232,64,10,0.15)] transition-all duration-300">
                    <div className="get-in-touch-icon-box" style={{ borderColor: "#E8400A" }}>
                      <Phone size={18} className="text-[#E8400A]" />
                    </div>
                    <div className="get-in-touch-details">
                      <p className="get-in-touch-label">Call Us</p>
                      <a href="tel:+917290909571" className="get-in-touch-value hover:text-[#E8400A] transition-colors" style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
                        +91 72909 09571
                      </a>
                      <p className="get-in-touch-value-desc">24×7 Emergency Incident Response</p>
                    </div>
                  </div>

                  {/* Email Us (3 professional contact emails) */}
                  <div className="get-in-touch-item" style={{ flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
                    <div className="flex items-center gap-3">
                      <div className="get-in-touch-icon-box">
                        <Mail size={18} />
                      </div>
                      <p className="get-in-touch-label" style={{ marginBottom: 0 }}>Email Us</p>
                    </div>
                    <div className="w-full pl-11 space-y-4">
                      <div>
                        <p className="get-in-touch-label" style={{ fontSize: "0.75rem", opacity: 0.7 }}>General Enquiries</p>
                        <a href="mailto:info@netcradus.com" className="get-in-touch-value hover:text-[#E8400A] transition-colors" style={{ fontSize: "0.95rem" }}>
                          info@netcradus.com
                        </a>
                      </div>
                      <div>
                        <p className="get-in-touch-label" style={{ fontSize: "0.75rem", opacity: 0.7 }}>Emergency Support (24×7)</p>
                        <a href="mailto:support@netcradus.com" className="get-in-touch-value hover:text-[#E8400A] transition-colors" style={{ fontSize: "0.95rem" }}>
                          support@netcradus.com
                        </a>
                      </div>
                      <div>
                        <p className="get-in-touch-label" style={{ fontSize: "0.75rem", opacity: 0.7 }}>Sales & Business Enquiries</p>
                        <a href="mailto:sales@netcradus.com" className="get-in-touch-value hover:text-[#E8400A] transition-colors" style={{ fontSize: "0.95rem" }}>
                          sales@netcradus.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* India Node Address */}
                  <div className="get-in-touch-item">
                    <div className="get-in-touch-icon-box">
                      <MapPin size={18} />
                    </div>
                    <div className="get-in-touch-details">
                      <p className="get-in-touch-label">India Node</p>
                      <p className="get-in-touch-value" style={{ fontSize: '0.85rem' }}>
                        G-260, Sector 63<br />
                        Noida, UP, India
                      </p>
                    </div>
                  </div>

                  {/* UK Headquarters Address */}
                  <div className="get-in-touch-item">
                    <div className="get-in-touch-icon-box">
                      <MapPin size={18} />
                    </div>
                    <div className="get-in-touch-details">
                      <p className="get-in-touch-label">UK Headquarters</p>
                      <p className="get-in-touch-value" style={{ fontSize: '0.85rem' }}>
                        Netcradus Ltd.<br />
                        London Road, Leicester, LE2 0QS, England, United Kingdom
                      </p>
                    </div>
                  </div>

                  {/* US Office Address */}
                  <div className="get-in-touch-item">
                    <div className="get-in-touch-icon-box">
                      <MapPin size={18} />
                    </div>
                    <div className="get-in-touch-details">
                      <p className="get-in-touch-label">US Office</p>
                      <p className="get-in-touch-value" style={{ fontSize: '0.85rem' }}>
                        Netcradus Inc.<br />
                        8 The Green, Suite B<br />
                        Dover, DE 19901, United States
                      </p>
                    </div>
                  </div>

                  {/* Business Hours (24x7 Security Operations) */}
                  <div className="get-in-touch-item">
                    <div className="get-in-touch-icon-box">
                      <Clock size={18} />
                    </div>
                    <div className="get-in-touch-details">
                      <p className="get-in-touch-label">24×7 Security Operations</p>
                      <p className="get-in-touch-value-desc" style={{ marginTop: '4px', fontSize: '0.8rem', lineHeight: '1.4' }}>
                        Our Security Operations Center (SOC) provides continuous monitoring, incident response, and enterprise cybersecurity support around the clock.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="get-in-touch-secure-badge">
                  <ShieldCheck size={16} className="text-[#3b82f6] shrink-0" style={{ marginTop: '2px' }} strokeWidth={1.75} />
                  <p>
                    Your information is securely transmitted and handled confidentially in accordance with our data policy.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <LocationMap />
      </div>

      {/* FAQs Section */}
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-kicker">FAQ</span>
            <h2 className="faq-title">Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion">
            {faqItems.map((item, i) => {
              const isOpen = faqOpenIndex === i;
              return (
                <div key={item.question} className="card-premium faq-item">
                  <button
                    type="button"
                    onClick={() => setFaqOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="faq-trigger"
                  >
                    <span className="faq-question">{item.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="faq-icon-wrapper"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="faq-answer-wrapper"
                      >
                        <p className="faq-answer">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="faq-footer"
          >
            Still have questions?{" "}
            <a href="#contact-form" className="faq-footer-link">
              Send us a message
            </a>
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
