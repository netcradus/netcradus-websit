import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SubHero from '../components/SubHero';
import Services from "../components/Services";
import Industries from "../components/Industries";
import SolutionsCTABanner from "../components/SolutionsCTABanner";
import { usePageMeta } from '../hooks/usePageMeta';
import { SEO_META } from '../data/seoMeta';

const ABDMCard = () => {
  return (
    <div className="py-12 pb-24">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/services/abdm"
            className="group block relative overflow-hidden rounded-[20px] border border-border bg-[var(--color-surface)]/88 p-8 md:p-12 shadow-[0_15px_45px_rgba(0,0,0,0.15)] hover:border-accent/40 hover:shadow-[0_0_40px_rgba(232,64,10,0.12)] hover:scale-[1.01] transition-all duration-300 no-underline cursor-pointer"
          >
            {/* Soft inner glow gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(232,64,10,0.06),transparent_55%)] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              {/* Left Column: Content */}
              <div className="lg:col-span-7 text-left space-y-5">
                <div>
                  <span className="inline-block rounded-full border border-accent/20 bg-accent/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    Healthcare Digital Transformation
                  </span>
                </div>
                
                <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
                  Ayushman Bharat Digital Mission (ABDM)
                </h2>
                
                <p className="text-base leading-relaxed text-text-secondary md:text-lg max-w-2xl">
                  Build ABDM-compliant digital healthcare solutions that securely connect hospitals, clinics, laboratories, pharmacies, and patients with India's National Digital Health Ecosystem.
                </p>
                
                <div className="flex flex-wrap gap-2.5 pt-2">
                  {[
                    "ABHA Integration",
                    "HPR & HFR Registry",
                    "Health Records",
                    "Consent Management",
                    "NDHM APIs",
                    "ABDM Compliance"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-[var(--color-surface-raised)]/80 px-4 py-2 text-xs font-semibold text-text-secondary shadow-[0_0_15px_rgba(232,64,10,0.02)] transition-all duration-300 group-hover:border-accent/20 group-hover:text-white"
                    >
                      • {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-accent/25 hover:bg-accent-bright transition-all duration-300">
                    Explore ABDM
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              {/* Right Column: Hospital / Healthcare Illustration */}
              <div className="lg:col-span-5 flex justify-center items-center">
                <div className="relative w-full max-w-[400px] aspect-[4/3] rounded-[16px] overflow-hidden border border-border/40 bg-black/10 p-2">
                  <img
                    src="/img/visitor and hms.png"
                    alt="ABDM Healthcare Digital Transformation"
                    className="w-full h-full object-cover rounded-[12px] opacity-90 transition-transform duration-500 group-hover:scale-103"
                  />
                </div>
              </div>

            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const ServicesPage = () => {
    usePageMeta(SEO_META.services.title, SEO_META.services.description);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background transition-colors duration-500">
            <SubHero
                label=""
                title="Managed Security Services for Modern Enterprises"
                subtitle="From proactive defense and managed detection to cloud, network, and enterprise security, Netcradus delivers managed security services built for resilient growth."
                sectionClassName="solutions-hero"
                backgroundVideo="/assets/SOLUTION BG VIDEO.mp4"
            />
            <Services />
            <Industries />
            <SolutionsCTABanner />
            <ABDMCard />
        </div>
    );
};

export default ServicesPage;
