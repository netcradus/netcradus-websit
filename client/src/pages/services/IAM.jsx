import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Lock,
  UserCheck,
  Eye,
  RefreshCw,
  UserPlus,
  UserMinus,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  ShieldAlert,
  Users,
  Building2,
  Key,
  Cpu,
  Globe,
  Database,
  Smartphone,
  Layers,
  Activity,
  Check,
  ExternalLink,
  AlertCircle,
  Scale,
  Clock,
  Zap,
  Server,
  Code,
  Network,
  Cloud,
  CreditCard,
  Award,
  Laptop,
  ChevronRight,
  Fingerprint,
  FileText,
  Sliders,
  ShieldCheck,
  Workflow,
  HelpCircle,
  AlertTriangle,
  UserX,
  KeyRound,
  FileSearch,
  CheckCircle,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const IAMPage = () => {
  usePageMeta(
    SEO_META.iam?.title || "Identity & Access Management (IAM) Services | Netcradus",
    SEO_META.iam?.description || "Secure every identity, control every access, and continuously govern who can access what across the enterprise."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const heroTrustPoints = [
    { title: "Centralized identity control", desc: "Single pane of glass for all enterprise user accounts" },
    { title: "Secure authentication", desc: "Adaptive MFA, SSO and Passwordless validation" },
    { title: "Least-privilege access", desc: "Minimal permission scoping to mitigate blast radius" },
    { title: "Continuous access visibility", desc: "Real-time auditing & automated anomaly detection" },
  ];

  const whatIsIamCards = [
    {
      step: "01",
      title: "Identify",
      desc: "Create and manage digital identities for employees, customers, partners, devices and services across multi-cloud environments.",
      icon: Fingerprint,
      accent: "from-blue-500/20 to-cyan-500/10",
      iconBg: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    },
    {
      step: "02",
      title: "Authenticate",
      desc: "Verify identity using passwords, multi-factor authentication (MFA), biometrics or hardware security keys.",
      icon: KeyRound,
      accent: "from-[#FF6B00]/20 to-amber-500/10",
      iconBg: "bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/20",
    },
    {
      step: "03",
      title: "Authorize",
      desc: "Determine which applications, systems, databases, files and API actions an identity is permitted to access.",
      icon: ShieldCheck,
      accent: "from-purple-500/20 to-indigo-500/10",
      iconBg: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    },
    {
      step: "04",
      title: "Monitor",
      desc: "Track access activity, identify unusual behavior, generate real-time alerts and maintain immutable audit records.",
      icon: Eye,
      accent: "from-emerald-500/20 to-teal-500/10",
      iconBg: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    },
  ];

  const identityRisks = [
    {
      title: "Stolen or compromised credentials",
      desc: "Stolen passwords and session tokens are the #1 entry point for enterprise breaches.",
      icon: UserX,
      glow: "hover:border-red-500/40 hover:shadow-red-500/10",
    },
    {
      title: "Weak or reused passwords",
      desc: "Unenforced credential policies allow easy brute-force and credential-stuffing attacks.",
      icon: Key,
      glow: "hover:border-amber-500/40 hover:shadow-amber-500/10",
    },
    {
      title: "Excessive user privileges",
      desc: "Over-provisioned accounts increase blast radius when compromised by threat actors.",
      icon: ShieldAlert,
      glow: "hover:border-[#FF6B00]/40 hover:shadow-[#FF6B00]/10",
    },
    {
      title: "Unauthorized access to sensitive data",
      desc: "Lack of granular authorization policies leads to unrecorded data exfiltration.",
      icon: Lock,
      glow: "hover:border-blue-500/40 hover:shadow-blue-500/10",
    },
    {
      title: "Inactive and orphaned accounts",
      desc: "Former employees or abandoned service accounts left un-revoked create stealth entryways.",
      icon: UserMinus,
      glow: "hover:border-purple-500/40 hover:shadow-purple-500/10",
    },
    {
      title: "Limited visibility into user activity",
      desc: "Absence of centralized access logs makes incident detection and forensics impossible.",
      icon: FileSearch,
      glow: "hover:border-emerald-500/40 hover:shadow-emerald-500/10",
    },
  ];

  const iamUseCases = [
    {
      title: "Workforce Access",
      desc: "Secure employee access to internal systems, applications, VPNs and corporate data.",
      icon: Users,
    },
    {
      title: "Customer Identity",
      desc: "Provide secure registration, friction-free login and account access for digital customers.",
      icon: UserCheck,
    },
    {
      title: "Partner & Vendor Access",
      desc: "Control third-party contractor access to specific business resources with zero excess visibility.",
      icon: Building2,
    },
    {
      title: "Cloud Access",
      desc: "Manage identities and permissions seamlessly across AWS, Azure, GCP and SaaS platforms.",
      icon: Cloud,
    },
    {
      title: "Privileged Access",
      desc: "Protect administrator accounts, root credentials and other high-risk administrative identities.",
      icon: Shield,
    },
    {
      title: "Machine Identities",
      desc: "Manage non-human access for applications, APIs, microservices, IoT devices and service accounts.",
      icon: Cpu,
    },
  ];

  const coreCapabilities = [
    {
      num: "01",
      title: "Single Sign-On (SSO)",
      desc: "Allow users to securely access multiple enterprise applications through one authenticated session.",
      icon: KeyRound,
      color: "border-blue-500/30 text-blue-400",
    },
    {
      num: "02",
      title: "Multi-Factor Authentication (MFA)",
      desc: "Require additional verification factors beyond passwords to stop 99.9% of automated attacks.",
      icon: ShieldCheck,
      color: "border-[#FF6B00]/30 text-[#FF6B00]",
    },
    {
      num: "03",
      title: "Role-Based Access Control (RBAC)",
      desc: "Assign permissions dynamically based on verified job roles, departments and responsibilities.",
      icon: Users,
      color: "border-purple-500/30 text-purple-400",
    },
    {
      num: "04",
      title: "Least-Privilege Access",
      desc: "Grant users only the bare minimum permissions necessary to perform their immediate tasks.",
      icon: Lock,
      color: "border-emerald-500/30 text-emerald-400",
    },
    {
      num: "05",
      title: "Identity Lifecycle Management",
      desc: "Automate account provisioning and revocation from onboarding through role changes and offboarding.",
      icon: RefreshCw,
      color: "border-cyan-500/30 text-cyan-400",
    },
    {
      num: "06",
      title: "Access Requests & Approvals",
      desc: "Provide self-service request portals with multi-level manager approvals and audit trails.",
      icon: Workflow,
      color: "border-indigo-500/30 text-indigo-400",
    },
    {
      num: "07",
      title: "Password & Credential Controls",
      desc: "Apply strict password complexity rules, breach checking, and automated credential rotation.",
      icon: Sliders,
      color: "border-amber-500/30 text-amber-400",
    },
    {
      num: "08",
      title: "Identity Federation",
      desc: "Enable trusted SAML 2.0 and OIDC authentication across connected external organizations.",
      icon: Network,
      color: "border-teal-500/30 text-teal-400",
    },
    {
      num: "09",
      title: "Access Reviews",
      desc: "Conduct scheduled recertification campaigns to verify whether users still require assigned rights.",
      icon: FileCheck,
      color: "border-rose-500/30 text-rose-400",
    },
    {
      num: "10",
      title: "Audit & Compliance Reporting",
      desc: "Maintain comprehensive access logs and export compliance reports for ISO 27001, SOC 2, and DPDP.",
      icon: FileSearch,
      color: "border-blue-400/30 text-blue-300",
    },
  ];

  const accessDecisionSteps = [
    {
      step: "01",
      title: "User Requests Access",
      desc: "A user attempts to open an application, file, database or enterprise system.",
    },
    {
      step: "02",
      title: "Identity Is Verified",
      desc: "IAM checks credentials, MFA method, biometrics, device health or security keys.",
    },
    {
      step: "03",
      title: "Context Is Evaluated",
      desc: "The system evaluates role, IP location, device posture, time and real-time risk score.",
    },
    {
      step: "04",
      title: "Access Is Authorized",
      desc: "The exact permitted access level is dynamically granted or denied.",
    },
    {
      step: "05",
      title: "Activity Is Monitored",
      desc: "The session is continuously logged and scanned for anomalous or suspicious behavior.",
    },
    {
      step: "06",
      title: "Access Is Reviewed",
      desc: "Permissions are periodically re-verified and instantly revoked when no longer needed.",
    },
  ];

  const lifecycleStages = [
    { stage: "01", name: "Join", desc: "Create a verified identity when a person joins the organization." },
    { stage: "02", name: "Provision", desc: "Assign applications and permissions based on approved role." },
    { stage: "03", name: "Change", desc: "Update access immediately when team, role or location changes." },
    { stage: "04", name: "Review", desc: "Regularly audit permissions and remove unnecessary access." },
    { stage: "05", name: "Exit", desc: "Instantly revoke all access and archive accounts upon departure." },
  ];

  const zeroTrustPrinciples = [
    { title: "Verify Every Identity", desc: "Never assume trust based on network location; validate every user and device explicitly." },
    { title: "Apply Least Privilege", desc: "Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA) policies." },
    { title: "Evaluate Access Context", desc: "Inspect user location, device security posture, and threat risk prior to granting access." },
    { title: "Monitor Every Session", desc: "Continuously audit user sessions for lateral movement or data exfiltration attempts." },
  ];

  const businessBenefits = [
    "Reduce unauthorized access and data breaches",
    "Improve user login experience with frictionless SSO",
    "Protect sensitive IP, customer records and financials",
    "Simplify employee onboarding and offboarding workflows",
    "Effortlessly support GRC audits and regulatory compliance",
    "Gain complete visibility into identities and active rights",
  ];

  const approachSteps = [
    { num: "1", title: "Assess", desc: "Review existing identities, directories, authentication mechanisms and policy gaps." },
    { num: "2", title: "Design", desc: "Architect a customized IAM blueprint aligned with business roles and Zero Trust principles." },
    { num: "3", title: "Integrate", desc: "Connect directories, cloud platforms, SaaS applications and MFA infrastructure smoothly." },
    { num: "4", title: "Govern", desc: "Implement access request workflows, lifecycle automation, and continuous audit controls." },
    { num: "5", title: "Improve", desc: "Continuously monitor identity health, refine access policies and adapt to emerging threats." },
  ];

  const indiaIndustries = [
    { name: "Banking & Financial Services", desc: "Secure workforce, customer and privileged access to core banking systems and UPI endpoints." },
    { name: "Healthcare & Life Sciences", desc: "Control access to sensitive electronic health records (EHR) and clinical applications under ABDM guidelines." },
    { name: "Government & Public Sector", desc: "Manage identity validation for citizen portals and confidential government databases." },
    { name: "Technology & SaaS", desc: "Protect developer environments, cloud infrastructure, CI/CD pipelines and customer tenant data." },
    { name: "Retail & E-commerce", desc: "Protect customer accounts, seller management portals and payment gateway APIs." },
    { name: "Education & Academics", desc: "Manage student, faculty and administrator identities across campus systems." },
    { name: "Manufacturing & Supply Chain", desc: "Secure operational technology (OT), ERP networks and supplier portal access." },
    { name: "Professional Services", desc: "Enforce client data isolation and control third-party consultant access." },
  ];

  return (
    <div className="bg-[#050505] text-white transition-colors duration-500 overflow-x-hidden relative">

      <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#050505] text-white z-10">
        
        {/* Background Ambient Glow Effects (Blue & Violet) */}
        <div className="absolute top-[10%] -left-[10%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_center,#3B82F6_0%,rgba(59,130,246,0.15)_40%,transparent_70%)] opacity-30 blur-[130px] pointer-events-none z-0" />
        <div className="absolute top-[35%] -right-[10%] w-[750px] h-[750px] rounded-full bg-[radial-gradient(circle_at_center,#8B5CF6_0%,rgba(139,92,246,0.15)_40%,transparent_70%)] opacity-30 blur-[140px] pointer-events-none z-0" />

        {/* Animated Cyber Identity Grid / Node Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_70%,transparent_100%)] opacity-40 pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.25)]">
                <Key size={16} className="text-blue-400" />
                <span className="text-xs font-black tracking-wider uppercase text-blue-400">
                  IDENTITY & ACCESS MANAGEMENT
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight">
                Secure Every Identity. <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-[#FF6B00] bg-clip-text text-transparent">
                  Control Every Access.
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-normal max-w-2xl">
                Netcradus IAM helps organizations manage digital identities, control access to critical resources and ensure that every user receives the right level of access at the right time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm tracking-wide shadow-[0_10px_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 no-underline"
                >
                  Request an IAM Assessment
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/40 transition-all duration-300 no-underline"
                >
                  Talk to an Expert
                </Link>
              </div>

              {/* 4 Trust Points Grid */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                {heroTrustPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white leading-tight">{item.title}</h4>
                      <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hero Column: Premium Interactive Identity Node Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[480px] p-8 rounded-3xl bg-[#101114] border border-blue-500/30 shadow-[0_0_60px_rgba(59,130,246,0.2)] backdrop-blur-xl">
                {/* Central Control Point */}
                <div className="relative z-10 text-center p-6 rounded-2xl bg-gradient-to-b from-blue-600/30 to-indigo-900/40 border border-blue-400/40 shadow-inner">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-3 shadow-[0_0_25px_rgba(59,130,246,0.6)]">
                    <Shield size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-white">Central Identity Shield</h3>
                  <p className="text-xs text-blue-200 mt-1">Zero Trust Authorization Engine</p>
                </div>

                {/* Satellite Identity Nodes */}
                <div className="grid grid-cols-2 gap-3 mt-6 relative z-10">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <Cloud size={20} className="text-cyan-400 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">Cloud Apps</span>
                      <span className="text-[10px] text-gray-400">AWS / Azure / SaaS</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <Laptop size={20} className="text-purple-400 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">Endpoints</span>
                      <span className="text-[10px] text-gray-400">Laptops / Mobile</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <Database size={20} className="text-emerald-400 shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">Databases</span>
                      <span className="text-[10px] text-gray-400">SQL / Data Lakes</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <Server size={20} className="text-[#FF6B00] shrink-0" />
                    <div>
                      <span className="text-xs font-bold text-white block">Enterprise</span>
                      <span className="text-[10px] text-gray-400">On-Prem AD / LDAP</span>
                    </div>
                  </div>
                </div>

                {/* Animated Connecting Ring */}
                <div className="absolute inset-0 border border-blue-500/20 rounded-3xl pointer-events-none animate-pulse" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section 
        className="py-20 lg:py-24 relative z-10 overflow-hidden shadow-[inset_0_10px_25px_rgba(0,0,0,0.03),inset_0_-10px_25px_rgba(0,0,0,0.03)]"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f6f7f9 50%, #fff7f2 100%)",
        }}
      >
        {/* Soft Orange & Cyan Radial Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(255,107,0,0.07)_0%,transparent_60%)] pointer-events-none z-0" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_right,rgba(6,182,212,0.07)_0%,transparent_60%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-gray-900">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              IAM EXPLAINED
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              What Is Identity and Access Management?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              Identity and Access Management is a framework of technologies, policies and processes used to create and manage digital identities. It verifies who a user is, determines which resources they can access and controls what actions they are allowed to perform.
            </p>
            
            {/* Highlighted Banner */}
            <div className="mt-6 p-4 rounded-2xl bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] font-bold text-sm sm:text-base max-w-2xl mx-auto shadow-sm">
              “IAM ensures that the right person receives the right access to the right resource at the right time.”
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatIsIamCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.step}
                  className="group relative rounded-3xl bg-white/85 backdrop-blur-md border border-gray-900/10 p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-black text-gray-400 uppercase tracking-wider">
                      PHASE {card.step}
                    </span>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${card.iconBg} shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon size={22} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-[#FF6B00] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#050505] text-white border-t border-white/10 relative z-10">
        
        {/* Background Glows (Green & Electric-Blue) */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_65%)] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12)_0%,transparent_65%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              THE IDENTITY CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Why Modern Organizations Need IAM
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              Users now access business resources from offices, homes, mobile devices and cloud platforms. Without centralized identity controls, excessive privileges, compromised credentials and unmanaged accounts can expose critical systems.
            </p>
          </div>

          {/* 6 Risk Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {identityRisks.map((risk, idx) => {
              const Icon = risk.icon;
              return (
                <div
                  key={idx}
                  className={`p-7 rounded-2xl bg-[#101114] border border-white/10 shadow-lg transition-all duration-300 group ${risk.glow} hover:-translate-y-1`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-red-400 mb-5 group-hover:bg-red-500/10 transition-colors">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">{risk.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{risk.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Highlighted Statistic Statement */}
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-[#101114] to-indigo-950/40 border border-blue-500/30 text-center shadow-xl">
            <p className="text-base sm:text-lg font-bold text-blue-200">
              “Many cyber incidents begin with a compromised identity or misused access.”
            </p>
          </div>

        </div>
      </section>

      <section 
        className="py-20 lg:py-24 relative z-10 overflow-hidden shadow-[inset_0_10px_25px_rgba(0,0,0,0.03),inset_0_-10px_25px_rgba(0,0,0,0.03)]"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #fafafa 50%, #f5f3ff 100%)",
        }}
      >
        {/* Subtle Violet & Orange Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.07)_0%,transparent_60%)] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(255,107,0,0.07)_0%,transparent_60%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-gray-900">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              CONNECTED ACCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              IAM Across Your Digital Environment
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              A comprehensive IAM strategy secures every entry point across your workforce, customers, cloud workloads, and connected machine identities.
            </p>
          </div>

          {/* 6 Use Case Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {iamUseCases.map((useCase, idx) => {
              const Icon = useCase.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-purple-500/30 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full pointer-events-none" />

                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-purple-700 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {useCase.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#050505] text-white border-t border-white/10 relative z-10">
        
        {/* Background Accents (Cyan, Blue, Violet, Green) */}
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_60%)] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1)_0%,transparent_60%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Complete Identity Control
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              10 modular capabilities designed to establish bulletproof authentication, granular authorization, and continuous governance.
            </p>
          </div>

          {/* 10 Responsive Capability Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {coreCapabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.num}
                  className="p-6 rounded-2xl bg-[#101114] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs font-mono font-bold ${cap.color}`}>
                        {cap.num}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
                        <Icon size={18} />
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-[#FF6B00] transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-gray-400 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <section 
        className="py-20 lg:py-24 relative z-10 overflow-hidden shadow-[inset_0_10px_25px_rgba(0,0,0,0.03),inset_0_-10px_25px_rgba(0,0,0,0.03)]"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f6f7f9 50%, #eff6ff 100%)",
        }}
      >
        {/* Cyan & Violet Connection Effects */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.07)_0%,transparent_60%)] pointer-events-none z-0" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-gray-900">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              ACCESS DECISION FLOW
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              How IAM Controls Access
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              A 6-step decision pipeline that evaluates every access attempt before granting system permissions.
            </p>
          </div>

          {/* Horizontal Process Grid on Desktop, Vertical Timeline on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 relative">
            {accessDecisionSteps.map((step, idx) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 text-[#FF6B00] font-black text-sm font-mono flex items-center justify-center mb-4 shadow-xs">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>

                {/* Arrow connector on desktop */}
                {idx < accessDecisionSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-gray-300 font-bold z-10 pointer-events-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#050505] text-white border-t border-white/10 relative z-10">
        
        {/* Violet & Orange Light Trails */}
        <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.12)_0%,transparent_65%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              IDENTITY LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Manage Access from Joiner to Leaver
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal max-w-2xl mx-auto">
              Automating the identity lifecycle reduces manual work, prevents access gaps and helps eliminate inactive or orphaned accounts.
            </p>
          </div>

          {/* 5-Stage Lifecycle Process */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
            {lifecycleStages.map((stage) => (
              <div
                key={stage.stage}
                className="p-7 rounded-3xl bg-[#101114] border border-white/10 hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-blue-400 block mb-2">
                    STAGE {stage.stage}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{stage.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section 
        className="py-20 lg:py-24 relative z-10 overflow-hidden shadow-[inset_0_10px_25px_rgba(0,0,0,0.03),inset_0_-10px_25px_rgba(0,0,0,0.03)]"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f6f7f9 50%, #e0f2fe 100%)",
        }}
      >
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-gray-900">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              ZERO TRUST ACCESS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Never Trust. Always Verify.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              IAM supports a Zero Trust approach by continuously verifying identities, devices, access context and risk before allowing access to business resources.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            
            {/* 4 Principle Cards */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {zeroTrustPrinciples.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Identity Shield Visual */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="p-8 rounded-3xl bg-white border border-blue-200 shadow-xl text-center w-full max-w-[340px]">
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Lock size={36} />
                </div>
                <h4 className="text-lg font-bold text-gray-900">Zero Trust Perimeter</h4>
                <p className="text-xs text-gray-500 mt-1 leading-relaxed">Continuous Context Validation Engine</p>
              </div>
            </div>

          </div>

          {/* Highlighted Statement */}
          <div className="max-w-3xl mx-auto p-5 rounded-2xl bg-blue-900 text-white text-center font-semibold text-sm sm:text-base shadow-md">
            “Access should be based on verified identity, approved need and current risk—not network location alone.”
          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#050505] text-white border-t border-white/10 relative z-10">
        
        {/* Emerald, Cyan, Violet Effects */}
        <div className="absolute top-0 left-0 w-[550px] h-[550px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_65%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              BUSINESS VALUE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Stronger Security. Simpler Access.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              Balancing stringent security policies with seamless employee and customer login experiences.
            </p>
          </div>

          {/* 6 Benefit Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {businessBenefits.map((b, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#101114] border border-white/10 flex items-center gap-4 hover:border-emerald-500/40 transition-colors">
                <CheckCircle2 size={22} className="text-emerald-400 shrink-0" />
                <span className="text-sm font-bold text-white leading-snug">{b}</span>
              </div>
            ))}
          </div>

          {/* 2 Side-by-Side Audience Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#101114] to-blue-950/30 border border-blue-500/30">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-2">FOR SECURITY TEAMS</span>
              <h3 className="text-xl font-bold text-white mb-3">Centralized Governance & Control</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                “Gain centralized visibility, stronger policy enforcement and faster investigation.”
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#101114] to-purple-950/30 border border-purple-500/30">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-2">FOR BUSINESS USERS</span>
              <h3 className="text-xl font-bold text-white mb-3">Frictionless Workspace Access</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                “Receive faster and more convenient access to the applications required for work.”
              </p>
            </div>
          </div>

        </div>
      </section>

      <section 
        className="py-20 lg:py-24 relative z-10 overflow-hidden shadow-[inset_0_10px_25px_rgba(0,0,0,0.03),inset_0_-10px_25px_rgba(0,0,0,0.03)]"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f6f7f9 50%, #fff7f2 100%)",
        }}
      >
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-gray-900">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Identity Security Built Around Your Business
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
              Netcradus helps organizations improve identity security without creating unnecessary complexity for employees, customers and administrators.
            </p>
          </div>

          {/* 5 Implementation Roadmap Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {approachSteps.map((step) => (
              <div key={step.num} className="p-7 rounded-3xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <span className="w-9 h-9 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] font-black text-sm flex items-center justify-center mb-4">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-20 lg:py-24 bg-[#050505] text-white border-t border-white/10 relative z-10">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              INDIA USE CASES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Identity Protection for India’s Digital Economy
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
              Tailored identity governance solutions designed for Indian enterprises, healthcare providers, financial institutions and public sector frameworks.
            </p>
          </div>

          {/* 8 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {indiaIndustries.map((ind, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#101114] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">{ind.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section 
        className="py-24 relative z-10 text-center text-gray-900"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f6f7f9 50%, #fff7f2 100%)",
        }}
      >
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF6B00]">
              SECURE EVERY IDENTITY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
              Take Control of Access
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal max-w-2xl mx-auto">
              Build a secure and manageable identity foundation for your employees, customers, partners, applications and digital services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#FF6B00] text-white font-bold text-sm shadow-lg shadow-[#FF6B00]/25 hover:bg-[#ff7a1a] hover:scale-[1.02] transition-all duration-300 no-underline"
              >
                Request an IAM Assessment
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 font-bold text-sm hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 no-underline"
              >
                Contact Netcradus
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IAMPage;
