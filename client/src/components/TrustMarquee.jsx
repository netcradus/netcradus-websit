import React from "react";
import "./TrustMarquee.css";

const TrustMarquee = () => {
  return (
    <section className="trust-marquee">
      
      <p className="trust-heading">
        Trusted by Organizations Across Critical Infrastructure & Global Markets
      </p>

      <div className="marquee-wrapper">
        <div className="marquee-track">

          {[
            "Financial Services",
            "Healthcare",
            "Government",
            "Energy & Utilities",
          ].map((item, i) => (
            <div key={i} className="marquee-item">
              [{item}]
            </div>
          ))}

          {/* DUPLICATE for seamless loop */}
          {[
            "Financial Services",
            "Healthcare",
            "Government",
            "Energy & Utilities",
          ].map((item, i) => (
            <div key={`dup-${i}`} className="marquee-item">
              [{item}]
            </div>
          ))}

          {[
            "AWS Partner",
            "Microsoft Solutions Partner",
            "Google Cloud",
            "Cisco",
          ].map((partner, i) => (
            <div key={`partner-${i}`} className="marquee-badge">
              {partner}
            </div>
          ))}

          {/* DUPLICATE again */}
          {[
            "AWS Partner",
            "Microsoft Solutions Partner",
            "Google Cloud",
            "Cisco",
          ].map((partner, i) => (
            <div key={`dup-partner-${i}`} className="marquee-badge">
              {partner}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TrustMarquee;