import React from "react";
import {
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Star,
  MapPin,
  Server,
} from "lucide-react";
import "./About.css";

import cehLogo from "../assets/certs/CEHPRACTICAL.png";
import comptiaLogo from "../assets/certs/Comptia.png";
import oscpLogo from "../assets/certs/oscp.png";
import cisaLogo from "../assets/certs/cisa.png";
import cismLogo from "../assets/certs/cism.png";
import crestLogo from "../assets/certs/crest.png";
import crtapLogo from "../assets/certs/crta.png";
import iscpLogo from "../assets/certs/iscp.png";
import leadauditorLogo from "../assets/certs/leadauditor.png";
import shieldLogo from "../assets/certs/shield.png";

const VALUES = [
  {
    name: "Integrity",
    desc: "Foundation of every engagement with complete transparency.",
    icon: <ShieldCheck size={20} />,
  },
  {
    name: "Innovation",
    desc: "Perpetually advancing and shaping the future of defense.",
    icon: <Zap size={20} />,
  },
  {
    name: "Excellence",
    desc: "Uncompromising standards consistently exceeding expectations.",
    icon: <Star size={20} />,
  },
];

const CERTS = [cehLogo, comptiaLogo, oscpLogo, shieldLogo, cisaLogo, cismLogo, crestLogo, iscpLogo, crtapLogo, leadauditorLogo];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.66), rgba(0,0,0,0.66)), url('/img/built on expertise bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute left-[-5rem] top-28 h-72 w-72 rounded-full bg-accent/8 blur-[120px]" />
      <div className="absolute right-[-6rem] bottom-20 h-80 w-80 rounded-full bg-accent/6 blur-[130px]" />

      <div className="relative container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="reveal space-y-12 lg:col-span-7">
            <span className="block text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px]"></span>

            <h2 className="text-4xl font-display font-black leading-none tracking-tighter text-zinc-900 dark:text-white md:text-7xl">
              Built on Expertise.
              <br />
              <span className="text-accent italic">Driven by Results.</span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg font-sans leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
                Founded by technology practitioners with deep operational experience, Netcradus emerged from the realization that modern enterprises are often over-leveraged and under-protected.
              </p>
              <p className="text-lg font-sans leading-relaxed text-zinc-600/85 dark:text-zinc-400/85">
                Today, we serve as the strategic technical authority for ambitious organizations globally, building the proprietary AI infrastructure that redefines digital defense.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200/70 bg-white/65 p-8 text-center shadow-[0_16px_42px_rgba(232,64,10,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 md:p-12">
              <h4 className="text-xl font-display font-black uppercase tracking-widest text-zinc-900 dark:text-white md:text-2xl">
                Elite Engineering
              </h4>
              <p className="mb-10 mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Our Security <span className="font-semibold text-accent">Professionals</span> with Top Certifications
              </p>

              <div className="grid max-w-3xl grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5">
                {CERTS.map((logo, index) => (
                  <div
                    key={index}
                    className="flex h-20 items-center justify-center rounded-2xl border border-zinc-200/80 bg-white/80 px-4 py-3 shadow-[0_10px_24px_rgba(232,64,10,0.05)] transition hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_0_28px_rgba(232,64,10,0.1)] dark:border-white/10 dark:bg-white/5"
                  >
                    <img src={logo} className="h-10 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-8 backdrop-blur transition-all hover:border-accent/40 hover:shadow-[0_0_28px_rgba(232,64,10,0.08)] dark:border-white/10 dark:bg-white/5">
                <Target className="mb-4 text-accent" />
                <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">Mission</h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  To empower organisations with intelligent, secure, and future-proof technology solutions, enabling growth without boundaries.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-100 p-8 backdrop-blur transition-all hover:border-accent/40 hover:shadow-[0_0_28px_rgba(232,64,10,0.08)] dark:border-white/10 dark:bg-white/5">
                <Eye className="mb-4 text-accent" />
                <h3 className="mb-2 text-lg font-bold text-zinc-900 dark:text-white">Vision</h3>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  To pioneer the next generation of autonomous defense through ACIS, making world-class protection the baseline for every enterprise.
                </p>
              </div>
            </div>
          </div>

          <div className="reveal relative lg:col-span-5 lg:mt-32">
            <div className="rounded-3xl border border-zinc-200 bg-zinc-100 p-10 backdrop-blur shadow-[0_16px_42px_rgba(232,64,10,0.06)] dark:border-white/10 dark:bg-white/5">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-400">Core Values</h3>
              <div className="space-y-6">
                {VALUES.map((val, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-xl border border-transparent bg-transparent p-4 transition-all hover:border-accent/20 hover:bg-zinc-100 dark:hover:bg-white/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent shadow-[0_0_18px_rgba(232,64,10,0.1)]">
                      {val.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">{val.name}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_18px_40px_rgba(232,64,10,0.06)] dark:border-white/10">
                <img
                  src="/generated/han.png"
                  alt="Netcradus Global Operations"
                  className="h-48 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent dark:from-black/70"></div>
              </div>

              <div className="space-y-4 rounded-2xl border border-zinc-200 bg-zinc-100 p-6 shadow-[0_16px_36px_rgba(232,64,10,0.06)] backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h3 className="mx-1 mb-2 text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                  Global Presence
                </h3>

                <div className="flex items-start gap-4 rounded-2xl border border-zinc-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent shadow-[0_0_18px_rgba(232,64,10,0.12)]">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">UK Headquarters</p>
                    <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      London Road, Leicester, LE2 0QS, England, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-zinc-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent shadow-[0_0_18px_rgba(232,64,10,0.12)]">
                    <Server size={16} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-zinc-900 dark:text-white">India Technology Node</p>
                    <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                      G-260, Sector 63, Noida, UP, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
