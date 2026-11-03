import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Globe,
  BookOpen,
  Users,
  DollarSign,
  ArrowUpCircle,
  ShieldCheck,
  Bug,
  Cloud,
  Bot,
  Code2,
  ClipboardCheck,
  Briefcase,
  BarChart3,
  Blocks,
  Search,
  ArrowRight,
  Heart,
  Award,
  Zap,
  Star,
  MapPin,
  Linkedin,
  Mail,
  Sparkles,
  Coffee,
  Umbrella,
  GraduationCap,
  Cpu,
  DoorOpen,
  TrendingUp,
  MessageSquare,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";
import JobApplyModal from "../components/careers/JobApplyModal";
import "./CareersPage.css";

const JOURNEY_STAGES = [
  {
    step: "01",
    tag: "JOIN",
    title: "A Purposeful Beginning",
    description:
      "Start with structured onboarding, understand our mission and connect with the people and systems that support your work.",
    icon: DoorOpen,
  },
  {
    step: "02",
    tag: "LEARN",
    title: "Continuous Learning",
    description:
      "Develop practical skills through technical sessions, guided learning, knowledge sharing and exposure to evolving technologies.",
    icon: BookOpen,
  },
  {
    step: "03",
    tag: "BUILD",
    title: "Meaningful Work",
    description:
      "Contribute to cybersecurity, AI and digital solutions designed to solve relevant business and security challenges.",
    icon: Code2,
  },
  {
    step: "04",
    tag: "COLLABORATE",
    title: "Ideas Without Boundaries",
    description:
      "Work across teams, exchange perspectives and turn strong ideas into reliable outcomes through open collaboration.",
    icon: Users,
  },
  {
    step: "05",
    tag: "GROW",
    title: "Career Development",
    description:
      "Take ownership, strengthen your capabilities and explore opportunities aligned with your skills and long-term goals.",
    icon: TrendingUp,
  },
  {
    step: "06",
    tag: "IMPACT",
    title: "Secure the Digital Future",
    description:
      "Help build technology that strengthens organisations, protects digital systems and creates meaningful real-world impact.",
    icon: Globe,
  },
];

const WORKPLACE_SHAPES = [
  {
    title: "OPEN COMMUNICATION",
    description:
      "Ideas and feedback are encouraged through respectful and transparent collaboration.",
    icon: MessageSquare,
  },
  {
    title: "LEARNING MINDSET",
    description:
      "We value curiosity, experimentation and continuous improvement.",
    icon: Lightbulb,
  },
  {
    title: "OWNERSHIP WITH SUPPORT",
    description:
      "People are encouraged to take responsibility while receiving guidance from their teams.",
    icon: CheckCircle2,
  },
  {
    title: "INCLUSIVE COLLABORATION",
    description:
      "Different skills, backgrounds and perspectives help us build stronger solutions.",
    icon: Heart,
  },
];

const WHY_JOIN_US = [
  {
    title: "Career Growth",
    description: "Accelerate your career through certifications, mentorship, and challenging enterprise cybersecurity projects.",
    stat: "95%",
    statLabel: "Employees promoted internally",
    icon: ArrowUpCircle,
  },
  {
    title: "Work at the Frontier",
    description: "Contribute to ACIS — our flagship AI cybersecurity platform — and next-gen threat defense technologies.",
    stat: "100+",
    statLabel: "AI Security models deployed",
    icon: Rocket,
  },
  {
    title: "Global Exposure",
    description: "Work directly with enterprise clients across the UK, Europe, India, and North America gaining cross-border experience.",
    stat: "10+",
    statLabel: "Global regions served",
    icon: Globe,
  },
  {
    title: "Competitive Rewards",
    description: "Market-leading compensation packages, performance bonuses, equity incentives, and comprehensive family perks.",
    stat: "Top 5%",
    statLabel: "Industry compensation benchmarks",
    icon: DollarSign,
  },
  {
    title: "Continuous Learning",
    description: "100% company-sponsored certifications (CISSP, CEH, OSCP, AWS, Azure) with dedicated study hours and lab access.",
    stat: "₹2.5L",
    statLabel: "Annual learning budget / person",
    icon: BookOpen,
  },
  {
    title: "Empowered Culture",
    description: "Meritocratic, flat hierarchy where innovation is celebrated, ideas win, and individual impact is recognized.",
    stat: "4.9★",
    statLabel: "Glassdoor employee rating",
    icon: Users,
  },
];

const ALL_JOBS = [
  {
    id: 1,
    title: "Senior SOC Analyst (L2/L3)",
    department: "Cybersecurity",
    location: "Delhi NCR (Hybrid)",
    workType: "Hybrid",
    experience: "3 - 6 Years",
    type: "Full-Time",
    salary: "₹14L - ₹24L LPA",
    skills: ["SIEM", "SOAR", "Splunk", "Threat Hunting", "Incident Response"],
    description: "Lead 24/7 Security Operations Centre incident triage, deep-dive forensic analysis, and automated playbook creation across enterprise feeds.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Lead Penetration Tester / Red Teamer",
    department: "Offensive Security",
    location: "Remote / Hybrid",
    workType: "Remote",
    experience: "4 - 8 Years",
    type: "Full-Time",
    salary: "₹18L - ₹30L LPA",
    skills: ["OSCP", "Burp Suite", "Red Teaming", "Web & API VAPT", "Active Directory"],
    description: "Conduct high-impact offensive security assessments, cloud penetration tests, and custom exploit development for international clients.",
    icon: Bug,
  },
  {
    id: 3,
    title: "Enterprise Cloud Security Architect",
    department: "Cloud & Infrastructure",
    location: "Delhi NCR (Hybrid)",
    workType: "Hybrid",
    experience: "5 - 10 Years",
    type: "Full-Time",
    salary: "₹25L - ₹42L LPA",
    skills: ["AWS", "Azure Security", "Terraform", "Kubernetes", "DevSecOps"],
    description: "Design multi-cloud zero-trust architectures, automated compliance blueprints, and ongoing CloudOps hardening across AWS/Azure.",
    icon: Cloud,
  },
  {
    id: 4,
    title: "AI / ML Engineer (ACIS Platform)",
    department: "AI & Data",
    location: "Delhi NCR (On-site)",
    workType: "On-site",
    experience: "2 - 5 Years",
    type: "Full-Time",
    salary: "₹16L - ₹28L LPA",
    skills: ["Python", "PyTorch", "LLM Fine-tuning", "Vector DBs", "Anomaly Detection"],
    description: "Develop autonomous AI security agents, anomaly detection algorithms, and LLM-driven SOC automation for our proprietary ACIS platform.",
    icon: Bot,
  },
  {
    id: 5,
    title: "Senior Full-Stack Engineer (React & Node)",
    department: "Software Engineering",
    location: "Delhi NCR / Remote",
    workType: "Remote",
    experience: "3 - 7 Years",
    type: "Full-Time",
    salary: "₹15L - ₹26L LPA",
    skills: ["React 18", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL"],
    description: "Build high-throughput, low-latency cybersecurity dashboards, real-time telemetry visualizers, and scalable backend microservices.",
    icon: Code2,
  },
  {
    id: 6,
    title: "GRC & ISO 27001 Lead Consultant",
    department: "Governance & Risk",
    location: "Delhi NCR / London",
    workType: "Hybrid",
    experience: "4 - 8 Years",
    type: "Full-Time",
    salary: "₹16L - ₹28L LPA",
    skills: ["ISO 27001:2022", "GDPR", "SOC 2 Type II", "Cyber Essentials", "Risk Assessment"],
    description: "Drive enterprise information security audits, regulatory compliance frameworks, and CISO advisory across UK & global accounts.",
    icon: ClipboardCheck,
  },
  {
    id: 7,
    title: "DevSecOps Security Pipeline Engineer",
    department: "DevSecOps",
    location: "Remote",
    workType: "Remote",
    experience: "3 - 6 Years",
    type: "Full-Time",
    salary: "₹16L - ₹27L LPA",
    skills: ["Docker", "GitHub Actions", "SAST/DAST", "SonarQube", "Trivy"],
    description: "Integrate security checks directly into CI/CD pipelines, container registries, and Infrastructure-as-Code workflows.",
    icon: Blocks,
  },
  {
    id: 8,
    title: "Cybersecurity Account Executive (UK Market)",
    department: "Sales & Client Success",
    location: "London / Hybrid",
    workType: "Hybrid",
    experience: "3 - 6 Years",
    type: "Full-Time",
    salary: "£55K - £85K OTE",
    skills: ["Enterprise B2B Sales", "SOC Managed Services", "SaaS Sales", "C-Level Pitching"],
    description: "Expand Netcradus enterprise security solutions and SOC managed services across UK and European enterprise markets.",
    icon: BarChart3,
  },
];

const BENEFITS_LIST = [
  {
    title: "Health & Wellness Insurance",
    description: "Comprehensive medical cover up to ₹10 Lakhs for employees and dependent family members with zero co-pay.",
    icon: Heart,
  },
  {
    title: "Learning & Certifications Budget",
    description: "100% reimbursed professional certs (CISSP, CEH, OSCP, AWS) plus ₹2.5L annual training allowance.",
    icon: GraduationCap,
  },
  {
    title: "Flexible & Hybrid Working",
    description: "Choose your ideal work setup with remote options, flexible hours, and ergonomic home-office stipends.",
    icon: Coffee,
  },
  {
    title: "Quarterly Performance Bonus",
    description: "Direct revenue and project milestone profit-sharing bonuses paid out every quarter.",
    icon: Zap,
  },
  {
    title: "Paid Global Conference Trips",
    description: "Fully sponsored delegate passes, flights, and stay for Black Hat, DEFCON, Nullcon, and AWS Summits.",
    icon: Globe,
  },
  {
    title: "Generous Paid Time Off",
    description: "28 days annual leave, statutory holidays, birthday off, plus dedicated mental health wellness days.",
    icon: Umbrella,
  },
];

const HIRING_STEPS = [
  { step: "01", title: "Apply", desc: "Submit your CV & profile", icon: Mail },
  { step: "02", title: "HR Screening", desc: "Introductory culture call", icon: Users },
  { step: "03", title: "Tech Assessment", desc: "Practical hands-on challenge", icon: Cpu },
  { step: "04", title: "Final Discussion", desc: "Leadership alignment & offer", icon: Award },
  { step: "05", title: "Onboarding", desc: "Welcome to the Netcradus team!", icon: Rocket },
];

const TESTIMONIALS = [
  {
    name: "Shailendra Kumar",
    role: "Tech Head",
    department: "Cybersecurity Ops",
    photo: "/careerteam7.png",
    quote: "Leading our technology and cybersecurity operations at Netcradus has been an inspiring journey. Working alongside our engineering teams, we focus on turning complex security challenges into scalable, resilient solutions while cultivating a culture of technical excellence and continuous innovation.",
    rating: 5,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Poulomi Mondal",
    role: "Senior AI Engineer",
    department: "ACIS R&D Team",
    photo: "/careerteam6.png",
    quote: "Building autonomous AI security agents on the ACIS platform is the most challenging and rewarding software engineering work of my career.",
    rating: 5,
    linkedin: "https://linkedin.com",
  },
  {
    name: "Divyanshu Kumar",
    role: "Offensive Security Lead",
    department: "Red Teaming",
    photo: "/careerteam5.png",
    quote: "The hackathon culture and zero-bureaucracy environment means your ideas get implemented immediately into our client defense playbooks.",
    rating: 5,
    linkedin: "https://linkedin.com",
  },
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: "Netcradus Core Engineering & Operations Team",
    category: "Team Collaboration",
    image: "/careerteam.png",
    caption: "Our passionate engineers and SOC analysts collaborating on enterprise security playbooks in our Delhi office.",
  },
  {
    id: 2,
    title: "24/7 Global SOC Command Center",
    category: "Operations",
    image: "/careerteam2.png",
    caption: "Real-time threat monitoring and incident containment screens.",
  },
  {
    id: 3,
    title: "Annual Hackathon & AI Sprint",
    category: "Innovation",
    image: "/careerteam3.png",
    caption: "48-hour continuous coding and threat model development.",
  },
  {
    id: 4,
    title: "Certification Excellence Awards",
    category: "Celebration",
    image: "/careerteam4.png",
    caption: "Celebrating team members achieving CISSP & OSCP milestones.",
  },
];

export default function CareersPage() {
  usePageMeta(SEO_META.careers.title, SEO_META.careers.description);

  // States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedWorkType, setSelectedWorkType] = useState("All");
  const [savedJobs, setSavedJobs] = useState([]);
  const [activeModalJob, setActiveModalJob] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [activeJourneyStage, setActiveJourneyStage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter Jobs
  const filteredJobs = ALL_JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesWorkType = selectedWorkType === "All" || job.workType === selectedWorkType;

    return matchesSearch && matchesDept && matchesWorkType;
  });

  const toggleSaveJob = (id) => {
    if (savedJobs.includes(id)) {
      setSavedJobs(savedJobs.filter((item) => item !== id));
    } else {
      setSavedJobs([...savedJobs, id]);
    }
  };

  const scrollToOpenPositions = () => {
    const el = document.getElementById("open-positions");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToCulture = () => {
    const el = document.getElementById("company-culture");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="careers-wrapper-white min-h-screen">
      <section 
        className="relative flex min-h-[90vh] items-center overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cover bg-right lg:bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.96) 0%, rgba(255, 255, 255, 0.82) 32%, rgba(255, 255, 255, 0.15) 55%, rgba(255, 255, 255, 0) 75%), url('/career-team-hero.png')`
        }}
      >
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-xl lg:max-w-2xl">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-left space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FF6B00]/30 bg-[#FFF4EC]/90 text-[#FF6B00] text-xs font-extrabold uppercase tracking-widest backdrop-blur-sm shadow-sm">
                <Sparkles size={14} className="animate-spin text-[#FF6B00]" />
                <span>Careers at Netcradus</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] text-[#101828]">
                Build Your <span className="text-[#FF6B00]">Career.</span> <br />
                Protect The{" "}
                <span className="text-[#FF6B00]">
                  Digital World.
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl font-semibold leading-relaxed text-[#344054] max-w-xl leading-relaxed drop-shadow-sm">
                Join one of India's fastest-growing cybersecurity companies. Build cutting-edge security products, work alongside passionate innovators, and create technology that protects enterprises globally.
              </p>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
                <button
                  onClick={scrollToOpenPositions}
                  className="btn-orange-gradient w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  Explore Open Positions
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={scrollToCulture}
                  className="btn-white-secondary w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  Life at Netcradus
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section className="careers-section-spacing relative bg-[#FFFFFF] border-t border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
              // WHY NETCRADUS?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Why Build Your Career <span className="text-[#FF6B00]">With Us?</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              We offer extraordinary opportunities to solve enterprise security challenges in a high-growth, meritocratic culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_JOIN_US.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="careers-white-card p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="icon-badge-orange mb-6">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-[#101828] mb-3">{card.title}</h3>
                    <p className="text-sm text-[#667085] leading-relaxed mb-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Statistic Badge */}
                  <div className="pt-4 border-t border-[#EEF2F6] flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-[#FF6B00]">
                        {card.stat}
                      </div>
                      <div className="text-[11px] text-[#98A2B3] font-medium">{card.statLabel}</div>
                    </div>
                    <Sparkles size={16} className="text-[#FF6B00]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="company-culture" className="careers-section-spacing relative bg-[#FFF8F3] overflow-hidden py-20 lg:py-28">
        {/* Subtle Ambient Background Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,0,0.04),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(236,76,140,0.04),transparent_40%)] pointer-events-none" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
              OUR CULTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Life at <span className="text-[#FF6B00]">Netcradus</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
              Build meaningful technology, strengthen your expertise and grow alongside people committed to securing the digital future.
            </p>
            
            {/* Culture Value Pills */}
            <div className="pt-3 flex flex-wrap items-center justify-center gap-2.5">
              {["INNOVATION", "LEARNING", "OWNERSHIP", "RESPECT", "GROWTH", "DIVERSITY"].map((val) => (
                <span
                  key={val}
                  className="px-4 py-1.5 rounded-full border border-[#FF6B00]/25 bg-[#FFF4EC] text-[11px] font-extrabold uppercase tracking-widest text-[#FF6B00] shadow-sm"
                >
                  {val}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Journey Timeline */}
          <div className="relative">
            {/* Desktop Connected Line */}
            <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-[#FF6B00]/20 via-[#FF6B00]/60 via-50% to-[#ec4c8c]/40 z-0 pointer-events-none" />

            {/* Stages Grid (Desktop: 6 horizontal, Tablet: 3x2 grid, Mobile: Vertical timeline) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
              {JOURNEY_STAGES.map((stage, idx) => {
                const Icon = stage.icon;
                const isActive = activeJourneyStage === idx;
                return (
                  <motion.div
                    key={stage.step}
                    whileHover={{ y: -6 }}
                    onClick={() => setActiveJourneyStage(idx)}
                    onMouseEnter={() => setActiveJourneyStage(idx)}
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") setActiveJourneyStage(idx); }}
                    className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6B00] ${
                      isActive
                        ? "bg-white border-2 border-[#FF6B00] shadow-[0_16px_40px_rgba(255,107,0,0.18)]"
                        : "bg-white/80 border border-[#E9EDF2] hover:border-[#FF6B00]/50 hover:bg-white shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div
                          className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-[#FF6B00] to-[#ec4c8c] text-white shadow-lg shadow-[#FF6B00]/30 scale-105"
                              : "bg-[#FFF4EC] text-[#FF6B00] border border-[#FF6B00]/20"
                          }`}
                        >
                          <Icon size={24} />
                        </div>
                        <span
                          className={`text-xs font-mono font-bold tracking-widest px-2.5 py-1 rounded-md ${
                            isActive ? "bg-[#FF6B00] text-white" : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {stage.step}
                        </span>
                      </div>

                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#FF6B00] block mb-1">
                        {stage.tag}
                      </span>
                      <h3 className="text-base font-bold text-[#101828] mb-2 leading-snug">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-[#667085] leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="pt-8 border-t border-[#EEF2F6] space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
                CORE FOUNDATIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#101828] tracking-tight">
                What Shapes Our Workplace
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKPLACE_SHAPES.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-white border border-[#E9EDF2] shadow-sm hover:shadow-md transition-all space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4EC] text-[#FF6B00] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-xs font-extrabold text-[#101828] tracking-wide uppercase">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#667085] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* FINAL CTA IN CULTURE SECTION */}
          <div className="pt-4 text-center">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#101828] via-[#1D2939] to-[#101828] text-white space-y-6 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,107,0,0.15),transparent_70%)] pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
                  Build your next chapter with Netcradus.
                </h3>
                <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
                  Explore opportunities to learn, contribute and grow with a team focused on cybersecurity, AI and digital innovation.
                </p>
                <div className="pt-2">
                  <button
                    onClick={scrollToOpenPositions}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-[#ec4c8c] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF6B00]/30 transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore Open Positions</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="open-positions" className="careers-section-spacing relative bg-[#FFFFFF] border-t border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Open <span className="text-[#FF6B00]">Positions</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085]">
              Join our high-performing team across engineering, offensive security, SOC ops, and cloud architecture.
            </p>
          </div>

          {/* Search & Filters Controls */}
          <div className="mb-10 space-y-6">
            {/* Search Input Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]" size={20} />
              <input
                type="text"
                placeholder="Search by job title, skill (e.g. SIEM, OSCP, React, AWS)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#FAFAFA] border border-[#E9EDF2] text-[#101828] placeholder-[#98A2B3] focus:outline-none focus:border-[#FF6B00] shadow-md text-sm sm:text-base"
              />
            </div>

            {/* Department Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide py-2 px-2 careers-filter-scroll justify-start lg:justify-center">
              {["All", "Cybersecurity", "Offensive Security", "Cloud & Infrastructure", "AI & Data", "Software Engineering", "Governance & Risk", "DevSecOps", "Sales & Client Success"].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                    selectedDept === dept
                      ? "bg-[#FF6B00] border-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/25"
                      : "bg-[#FFFFFF] border-[#E9EDF2] text-[#667085] hover:border-[#FF6B00] hover:text-[#FF6B00]"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Work Type Filters */}
            <div className="flex items-center justify-center gap-4 text-xs font-semibold text-[#667085]">
              <span>Work Setup:</span>
              {["All", "Remote", "Hybrid", "On-site"].map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedWorkType(type)}
                  className={`px-3 py-1 rounded-lg transition-colors ${
                    selectedWorkType === type ? "text-[#FF6B00] bg-[#FFF4EC] font-bold" : "hover:text-[#101828]"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Job Listings Grid */}
          {filteredJobs.length === 0 ? (
            <div className="py-16 text-center text-[#667085] space-y-3">
              <Search size={40} className="mx-auto text-[#98A2B3]" />
              <p className="text-lg font-semibold">No positions found matching your search query.</p>
              <button
                onClick={() => { setSearchQuery(""); setSelectedDept("All"); setSelectedWorkType("All"); }}
                className="text-xs font-bold text-[#FF6B00] uppercase underline tracking-wider"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => {
                const Icon = job.icon;
                const isSaved = savedJobs.includes(job.id);

                return (
                  <motion.div
                    key={job.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="careers-white-card p-6 sm:p-8 flex flex-col justify-between h-full border border-[#E9EDF2] relative"
                  >
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Top Meta: Dept Tag & Bookmark */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="px-3.5 py-1 rounded-full bg-[#FFF4EC] border border-[#FF6B00]/30 text-[#FF6B00] text-[11px] font-extrabold uppercase tracking-widest">
                            {job.department}
                          </span>
                          <button
                            onClick={() => toggleSaveJob(job.id)}
                            className={`p-2 rounded-full border transition-all ${
                              isSaved ? "bg-[#FF6B00] border-[#FF6B00] text-white" : "border-[#E9EDF2] text-[#98A2B3] hover:text-[#FF6B00]"
                            }`}
                            title="Save Job"
                          >
                            <Heart size={16} fill={isSaved ? "#ffffff" : "none"} />
                          </button>
                        </div>

                        {/* Title & Icon */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="icon-badge-orange shrink-0">
                            <Icon size={24} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#101828] leading-snug">{job.title}</h3>
                          </div>
                        </div>

                        <p className="text-sm text-[#667085] leading-relaxed mb-6">{job.description}</p>
                      </div>

                      {/* Skill Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-md bg-[#FAFAFA] border border-[#E9EDF2] text-[11px] font-semibold text-[#667085]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-[#EEF2F6] flex items-center justify-end">
                      <button
                        onClick={() => setActiveModalJob(job)}
                        className="btn-orange-gradient w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                      >
                        Apply Now
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="careers-section-spacing relative bg-[#FFF8F3] border-t border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Designed For Your <span className="text-[#FF6B00]">Wellbeing</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085]">
              We invest holistically in your health, learning, financial growth, and career longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS_LIST.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="careers-white-card p-6 sm:p-8 flex items-start gap-4">
                  <div className="icon-badge-orange shrink-0">
                    <Icon size={26} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#101828] mb-2">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="careers-section-spacing relative bg-[#FFFFFF] border-t border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Our Hiring <span className="text-[#FF6B00]">Process</span>
            </h2>
            <p className="text-base sm:text-lg text-[#667085]">
              A transparent, candidate-first 5-step journey to joining the Netcradus team.
            </p>
          </div>

          <div className="hiring-process-track-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {HIRING_STEPS.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="careers-white-card p-6 text-center flex flex-col items-center relative">
                  <div className="w-12 h-12 rounded-full bg-[#FFF4EC] border border-[#FF6B00]/30 text-[#FF6B00] flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                    {s.step}
                  </div>
                  <Icon size={22} className="text-[#FF6B00] mb-2" />
                  <h3 className="text-base font-bold text-[#101828] mb-1">{s.title}</h3>
                  <p className="text-xs text-[#667085]">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="careers-section-spacing relative bg-[#FAFAFA]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#FF6B00]">
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
              Hear From Our <span className="text-[#FF6B00]">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="careers-white-card p-8 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-1 text-[#FF6B00] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FF6B00" />
                    ))}
                  </div>
                  <p className="text-sm italic text-[#667085] leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EEF2F6] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover object-top border-2 border-[#FF6B00] shadow-sm filter brightness-[1.03] contrast-[1.02] shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-[#101828]">{t.name}</div>
                      <div className="text-xs text-[#667085]">{t.role}</div>
                    </div>
                  </div>
                  <a
                    href={t.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-[#FAFAFA] border border-[#E9EDF2] text-[#667085] hover:text-[#FF6B00] hover:border-[#FF6B00] transition-all"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="careers-section-spacing relative bg-[#FFFFFF] border-y border-[#EEF2F6]">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { num: "100+", label: "Enterprise Clients" },
              { num: "10+", label: "Countries Served" },
              { num: "1,000+", label: "Vulnerabilities Fixed" },
              { num: "24×7", label: "SOC Monitoring" },
              { num: "500+", label: "Projects Delivered" },
              { num: "99.9%", label: "Satisfaction Rate" },
            ].map((stat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFF8F3] border border-[#FF6B00]/20">
                <div className="text-3xl sm:text-4xl font-black text-[#FF6B00] mb-1">{stat.num}</div>
                <div className="text-xs font-bold text-[#101828]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="relative overflow-hidden rounded-3xl cta-warm-banner p-10 sm:p-16 text-center shadow-xl">
            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#101828] tracking-tight">
                Ready to Secure the <span className="text-[#FF6B00]">Future With Us?</span>
              </h2>
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed">
                Join our mission to build the next generation of cybersecurity technology and enterprise defense.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={scrollToOpenPositions}
                  className="btn-orange-gradient w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase tracking-wider"
                >
                  Explore Open Positions
                </button>
                <a
                  href="mailto:hr@netcradus.com"
                  className="btn-white-secondary w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Mail size={16} />
                  Talk to HR (hr@netcradus.com)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <JobApplyModal
        job={activeModalJob}
        isOpen={Boolean(activeModalJob)}
        onClose={() => setActiveModalJob(null)}
      />

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm cursor-pointer"
        >
          <div className="relative max-w-5xl w-full">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-2xl border border-white/20 shadow-2xl"
            />
            <p className="mt-4 text-center text-sm font-semibold text-white">{lightboxImage.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
