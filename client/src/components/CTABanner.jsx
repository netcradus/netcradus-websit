import React from "react";
import { Link } from "react-router-dom";
import "./CTABanner.css";

const CTABanner = () => {
  return (
    <section className="cta-banner-section py-24 relative overflow-hidden group">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      >
        <source src="/generated/banner bg video.mp4" type="video/mp4" />
      </video>

      <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 flex flex-col items-center text-center relative z-10">

        <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 tracking-tighter leading-none">
          Ready to Secure <br />
          <span>
            Your Organisation?
          </span>
        </h2>

        <p className="text-lg md:text-xl font-sans leading-relaxed max-w-2xl mb-12">
          Join leading enterprises who trust Netcradus for their most
          critical digital defence needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 items-center">
          <Link to="/contact" className="cta-banner-btn-primary text-white px-12 py-5 font-display font-semibold text-xs uppercase tracking-[0.3em] rounded-full shadow-2xl hover:scale-105 transition-all no-underline">
            Book a Free Consultation
          </Link>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;