import React from 'react';
import { Landmark, HeartPulse, Scale, ShoppingBag, Factory, Rocket } from 'lucide-react';
import './Industries.css';

const industries = [
  { name: "Financial Services", icon: <Landmark size={24} />, desc: "Securing high-frequency trading and fintech infrastructure." },
  { name: "Healthcare", icon: <HeartPulse size={24} />, desc: "Protecting sensitive patient data and medical IoT devices." },
  { name: "Legal & Professional", icon: <Scale size={24} />, desc: "Ensuring attorney-client privilege through zero-trust architectures." },
  { name: "Retail & E-Commerce", icon: <ShoppingBag size={24} />, desc: "Defending global supply chains and consumer transaction data." },
  { name: "Manufacturing", icon: <Factory size={24} />, desc: "Protecting OT/ICS environments from targeted industrial sabotage." },
  { name: "SMEs & Startups", icon: <Rocket size={24} />, desc: "Enterprise-grade security scaled for rapid-growth organizations." }
];

const Industries = () => {
  return (
    <section id="industries" className="py-24 bg-premium-radial relative transition-colors duration-500">
      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 text-center">
        <div className="reveal mb-20">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent uppercase mb-6 block"></span>
          <h2 className="text-4xl md:text-7xl font-display font-black text-zinc-900 dark:text-white mb-6 tracking-tighter leading-none">Industries We <span className="text-accent italic">Empower.</span></h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg md:text-xl font-sans leading-relaxed max-w-2xl mx-auto">
            We don't believe in generic security. Our solutions are engineered for the specific regulatory and operational demands of your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, idx) => (
            <div key={idx} className="premium-card p-10 group hover:-translate-y-2 transition-all duration-500 text-left">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-white transition-all shadow-sm">{ind.icon}</div>
              <h3 className="text-xl font-display font-black text-zinc-900 dark:text-white mb-4 uppercase tracking-wider">{ind.name}</h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm leading-relaxed">{ind.desc}</p>
              <div className="w-12 h-[2px] bg-accent/30 mt-8 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

