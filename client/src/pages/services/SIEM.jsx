import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Database,
  Activity,
  Shield,
  Search,
  Zap,
  FileText,
  Radio,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Server,
  Cloud,
} from "lucide-react";
import { usePageMeta } from "../../hooks/usePageMeta";
import { SEO_META } from "../../data/seoMeta";

const SIEMPage = () => {
  usePageMeta(
    SEO_META.siem?.title || "NetCradus SIEM | AI-Powered Log Management & Threat Detection",
    SEO_META.siem?.description || "Real-time log ingestion, event correlation, and autonomous threat detection across cloud, network, and endpoints."
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Real-Time Log Ingestion",
      desc: "Sub-second parsing and indexing of security logs across servers, firewalls, endpoints, and multi-cloud environments.",
      icon: Database,
    },
    {
      title: "AI-Driven Event Correlation",
      desc: "Machine learning algorithms correlate telemetry across fragmented data streams to uncover complex attack patterns.",
      icon: Cpu,
    },
    {
      title: "Automated Compliance Auditing",
      desc: "Pre-built, continuous reporting templates for ISO 27001, SOC 2, PCI DSS, GDPR, and DPDP Act 2023.",
      icon: FileText,
    },
    {
      title: "Zero-Trust Telemetry Engine",
      desc: "Unified visibility across hybrid infrastructure with contextual behavior scoring and threat intelligence enrichment.",
      icon: Activity,
    },
  ];

  return (
    <div className="bg-background text-text-primary transition-colors duration-500 overflow-x-hidden min-h-screen">
      
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/20">
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse at 50% 20%, rgba(255,107,0,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 80%, rgba(59,130,246,0.06) 0%, transparent 50%)
            `,
          }}
        />

        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-accent/20 bg-accent/8">
            <Radio size={14} className="text-accent" />
            <span className="text-xs font-bold tracking-wider uppercase text-accent">
              NetCradus SIEM Platform
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            AI-Powered Log Management & <br />
            <span className="bg-gradient-to-r from-accent to-accent-bright bg-clip-text text-transparent">
              Threat Correlation
            </span>
          </h1>

          <p className="text-base sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Unified security intelligence across cloud, network, and endpoints with sub-second event correlation, continuous log archiving, and automated threat hunting.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/20 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Request SIEM Demo
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/acis"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-border bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition-all duration-300 no-underline"
            >
              Explore ACIS Platform
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 border-b border-border/20 bg-black/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-accent">Platform Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Next-Generation SIEM Features</h2>
            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
              Designed for high-throughput enterprise environments with petabyte-scale search performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl border border-border bg-surface hover:border-accent/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent/10 text-accent mb-6">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-surface to-orange-950/20">
        <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Ready to Unify Your Security Telemetry?</h2>
          <p className="text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Get started with NetCradus SIEM for real-time visibility and automated threat response.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300 no-underline"
            >
              Contact Our Engineers
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SIEMPage;
