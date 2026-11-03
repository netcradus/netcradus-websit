import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ResponsiveVideo from "../../components/ResponsiveVideo";
import {
  BrainCircuit,
  Shield,
  Eye,
  Key,
  Lock,
  ArrowRight,
  Database,
  Radio,
  Monitor,
  Workflow,
  Cpu,
  Globe,
  CircleDollarSign,
  Zap,
  FileCheck,
  Users,
  TrendingUp,
  ShieldAlert,
  FileText,
  EyeOff,
  Network,
  Building2,
  Heart,
  Factory,
  Landmark,
  GraduationCap,
  ShoppingCart,
  PhoneCall,
  Truck,
  Flame,
  CheckCircle2,
  FileSpreadsheet,
  Settings,
  ShieldX,
  Bot,
  Terminal,
  Search,
  Cloud,
  Radar,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const AISecurityPage = () => {
  usePageMeta(SEO_META.services.title, SEO_META.services.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden">
      
      <section className="relative min-h-[50vh] lg:min-h-[90vh] flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden z-10">
        {/* Responsive Video System (Desktop Background / Mobile Card Box) */}
        <ResponsiveVideo src="/videos/ai security.mp4" mode="dual" />

        {/* Dynamic Light Gradient Overlay for High Visibility + Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-[#05060A] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(139,92,246,0.2)_0%,transparent_60%)] pointer-events-none z-0" />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10">
          <div className="max-w-4xl text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/40 bg-purple-500/15 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.25)]">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />
              <span className="text-xs font-black tracking-wider uppercase text-purple-300">
                AI Security Services
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] text-white tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              Secure Your Models. <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-[#FF6B00] bg-clip-text text-transparent">
                Protect Your Intelligent Future.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              As organizations integrate generative AI, LLMs, and automated agents into their core workflows, they introduce specialized security challenges. From prompt injection and data poisoning to model theft and compliance leaks, securing AI pipelines is essential.
            </p>
            

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex justify-center">
              <div className="relative w-full max-w-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent blur-3xl pointer-events-none" />
                <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface p-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  <img
                    src="/generated/ai_data_network_1773394527444.png"
                    alt="AI Security Definition"
                    className="w-full h-auto object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">
                New Perimeter
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                What is AI Security?
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                AI Security is the specialized branch of cybersecurity dedicated to safeguarding machine learning workflows, large language models (LLMs), training repositories, and automated agent environments from exploit vectors.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Traditional perimeters fail against semantic vulnerabilities (such as jailbreaks, prompt manipulation, or model extraction). Safeguarding AI requires real-time prompt filtering, robust training set protection, and pipeline isolation.
              </p>
              <p className="text-base text-text-secondary leading-relaxed font-semibold text-white/90">
                Securing AI is crucial to prevent leakage of intellectual property, model poisoning, privacy compromises, and unauthorized system access from compromised AI integrations.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Adversarial Risks</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why AI Security Matters
              </h2>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
                Generative AI applications have direct access to database structures, private user contexts, and operational code repositories. A single prompt injection can compromise database layers.
              </p>
              <p className="text-base text-text-secondary leading-relaxed">
                Additionally, employees using unauthorized AI models ("Shadow AI") regularly copy confidential company IP, proprietary analytics, or customer PII into public cloud caches.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                "As AI drives operations, model assurance and data guardrails are the only lines of defense against semantic exploitation."
              </p>
            </div>

            {/* Right Column: Statistics Card */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[24px] border border-accent/20 bg-gradient-to-br from-white/5 to-orange-500/5 p-8 backdrop-blur-md shadow-[0_15px_30px_rgba(255,107,0,0.03)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
                
                <h3 className="text-xl font-extrabold text-white mb-6">AI Attack Metrics</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">90%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Companies with Shadow AI Leaks</h4>
                      <p className="text-xs text-text-secondary mt-1">High majority of companies suffer from unapproved uploads of corporate data into public consumer models.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 pb-6 border-b border-border/10">
                    <span className="text-4xl md:text-5xl font-black text-accent">5x</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Increase in Automated Exploits</h4>
                      <p className="text-xs text-text-secondary mt-1">Hacker platforms are using LLMs to continuously rewrite and deliver targeted phishing payloads.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="text-4xl md:text-5xl font-black text-accent">74%</span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Vulnerability in Default LLM APIs</h4>
                      <p className="text-xs text-text-secondary mt-1">Most custom agent setups lack standard security safeguards against prompt injection exploits.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Defense Objectives</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Why Every Business Needs AI Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Enable continuous model verification, data protection, and prompt integrity across intelligent networks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Prompt Guardrails", desc: "Block semantic injection, prompt escapes, and system jailbreak commands at the API layer.", icon: Terminal },
              { title: "Data Leakage Prevention", desc: "Scan context histories to prevent customer PII or API secrets from reaching external model builders.", icon: Lock },
              { title: "Model Theft Isolation", desc: "Harden API access models to prevent parameter extraction and reverse-engineering of IP.", icon: Shield },
              { title: "Compliance Safeguards", desc: "Conform to regulatory framework guidelines (including EU AI Act, NIST AI Framework).", icon: FileCheck },
              { title: "Mitigate Model Poisoning", desc: "Audit and catalog input datasets to prevent malicious corruption of training sets.", icon: Database },
              { title: "Trust and Safety Auditing", desc: "Run continuous audits to eliminate hallucinations and secure AI decision logic.", icon: Eye }
            ].map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-8 shadow-sm hover:border-accent/30 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-xl bg-orange-500/10 text-accent mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Our AI Security Services</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We provide professional cybersecurity solutions to verify and secure generative AI deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "AI Security Assessments", desc: "Holistic vulnerability assessments mapping model architectures and permission scopes.", icon: Settings },
              { title: "AI Risk Audits", desc: "Mapping integration risks, shadow AI profiles and compliance posture metrics.", icon: FileSpreadsheet },
              { title: "Prompt Injection Testing", desc: "Simulated jailbreak assaults targeting custom LLM application layers.", icon: Terminal },
              { title: "AI Model Penetration Testing", desc: "Adversarial testing targeting model weights, parameter extraction, and extraction.", icon: Shield },
              { title: "LLM Security Reviews", desc: "Validating API configuration limits, data storage systems, and agent permissions.", icon: FileText },
              { title: "AI Data Leakage Testing", desc: "Tracking data ingestion and egress vectors to prevent compliance leaks.", icon: EyeOff },
              { title: "Secure AI Consulting", desc: "Strategic architecture design mapping model perimeters and secure host parameters.", icon: Users },
              { title: "AI Governance Frameworks", desc: "Formulating enterprise AI usage, logging, and security compliance programs.", icon: FileCheck },
              { title: "Shadow AI Discovery", desc: "Continuous network detection of unauthorized model traffic and API connections.", icon: Radar }
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative rounded-[20px] border border-border bg-surface p-8 shadow-sm hover:border-accent/25 hover:bg-orange-500/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-6 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Operational Cycle</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">How We Secure Your AI</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Our structured operational cycle ensures continuous protection from input capture to runtime verification.
            </p>
          </div>

          <div className="relative">
            {/* Desktop connector line */}
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-accent via-accent-bright to-orange-700 z-0 opacity-40" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", name: "Intercept", desc: "Filter and log user prompts and model parameters before execution.", icon: DownloadCloud },
                { step: "02", name: "Filter", desc: "Apply real-time sanitization, regex patterns, and jailbreak detection.", icon: Settings },
                { step: "03", name: "Sandbox", desc: "Execute model completions in isolated sandbox runtimes to prevent side-channel exploits.", icon: Lock },
                { step: "04", name: "Audit", desc: "Continuous logging and compliance checking of completed transactions.", icon: Eye },
                { step: "05", name: "Tune", desc: "Continuously update models, fine-tune safety guardrails, and retrain filters.", icon: Flame }
              ].map((process, idx) => {
                const Icon = process.icon || DownloadCloud;
                return (
                  <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full border-2 border-border bg-surface text-accent mb-6 shadow-lg shadow-black/30 group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <span className="text-xs font-black text-accent tracking-widest uppercase mb-1">
                      Step {process.step}
                    </span>
                    <h4 className="text-lg font-bold text-white mb-2">{process.name}</h4>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-[200px] mx-auto">
                      {process.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Tech Integrations</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Technologies We Support</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              We secure and integrate natively with leading AI pipelines, LLM APIs, and vector databases.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { title: "OpenAI API", desc: "Prompt inspection, GPT guardrails and audit logging.", icon: Bot },
              { title: "Anthropic Claude", desc: "Access telemetry analysis and compliance audits.", icon: Bot },
              { title: "LangChain Sec.", desc: "Pipeline isolation, agent sandboxing and flow checks.", icon: Settings },
              { title: "Hugging Face", desc: "Model registry testing and model scanning.", icon: Database },
              { title: "LlamaIndex", desc: "Context injection protection and database audits.", icon: Database },
              { title: "TensorFlow", desc: "Training set poisoning analysis and asset mapping.", icon: Cpu },
              { title: "PyTorch", desc: "Weights validation and adversarial model audits.", icon: Cpu },
              { title: "Pinecone DB", desc: "Vector store compliance, isolation and IAM control.", icon: Database },
              { title: "AWS Bedrock", desc: "Cloud endpoint hardening and trail monitoring.", icon: Cloud },
              { title: "Azure OpenAI", desc: "Entra access policy alignments and logging.", icon: Cloud }
            ].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 rounded-2xl border border-border bg-surface hover:border-accent/15 hover:bg-orange-500/5 transition-all duration-300 text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-108 group-hover:bg-accent group-hover:text-white">
                      <Icon size={16} />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{tech.title}</h4>
                    <p className="text-xs text-text-secondary leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Verticals Covered</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Industries We Secure</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Deploying secure AI models across regulated global industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: "Banking & Finance", icon: Building2 },
              { name: "Healthcare", icon: Heart },
              { name: "Manufacturing", icon: Factory },
              { name: "Government", icon: Landmark },
              { name: "Education", icon: GraduationCap },
              { name: "Retail & E-commerce", icon: ShoppingCart },
              { name: "IT & SaaS", icon: Monitor },
              { name: "Telecommunications", icon: PhoneCall },
              { name: "Logistics", icon: Truck },
              { name: "Energy & Utilities", icon: Flame }
            ].map((industry, idx) => {
              const Icon = industry.icon;
              return (
                <div
                  key={idx}
                  className="group flex flex-col items-center justify-center p-6 text-center rounded-2xl border border-border bg-surface hover:border-accent/20 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent mb-4 transition-all duration-300 group-hover:scale-115 group-hover:bg-accent group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">{industry.name}</h4>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Value Metric</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">Benefits of Investing in AI Security</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Protect your machine learning pipelines, LLM deployments, and enterprise AI agents from specialized threat vectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Complete protection against semantic prompt injections",
              "Ensured data privacy for LLM contexts",
              "Prevent unauthorized database access from agent nodes",
              "Eliminate Shadow AI risk and unapproved uploads",
              "Ensure compliance with the EU AI Act and local guidelines",
              "Block adversarial dataset poisoning vectors",
              "Safeguard proprietary model weights and logic",
              "Continuous testing for hallucinations and bias",
              "Secure deployment of intelligent workflow agents"
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-surface shadow-sm hover:border-accent/15 transition-all duration-300"
              >
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 text-accent shrink-0 mt-0.5">
                  <CheckCircle2 size={15} />
                </div>
                <span className="text-sm font-bold text-white leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Our Advantage</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                Why Choose Netcradus?
              </h2>
              <p className="text-base text-text-secondary leading-relaxed">
                At Netcradus, we bridge the gap between advanced data science and enterprise-grade security. Our custom guardrails and prompt filtering block semantic threats at scale.
              </p>
              <p className="text-base text-text-secondary leading-relaxed border-l-4 border-accent pl-4 italic text-white/90">
                Secure AI Deployment. Continuous Model Audits. Dedicated Adversarial Testing.
              </p>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Semantic Prompt Shielding", icon: Terminal },
                { title: "Automated Jailbreak Defense", icon: Zap },
                { title: "Compliance & Governance Logs", icon: FileCheck },
                { title: "Agent Permission Hardening", icon: Settings },
                { title: "Shadow AI network surveillance", icon: Radar },
                { title: "Model Weight & IP Protection", icon: Lock }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-accent/15 transition-all duration-300"
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500/10 text-accent shrink-0">
                      <Icon size={18} />
                    </div>
                    <span className="text-sm font-bold text-white">{item.title}</span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 border-t border-border/20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,107,0,0.12),transparent_60%)] pointer-events-none" />
        
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Secure Your AI Pipelines?
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            Ensure model safety and prevent compliance data leaks. Connect with our expert advisors to implement robust AI security guardrails today.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Start Your AI Risk Audit
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

const DownloadCloud = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default AISecurityPage;