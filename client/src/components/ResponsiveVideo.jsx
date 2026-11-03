import React, { useRef, useEffect } from "react";

export default function ResponsiveVideo({
  src,
  poster,
  className = "",
  containerClassName = "",
  mode = "dual", // "dual" = background on desktop, card box on mobile/tablet; "card" = card box only
}) {
  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    if (desktopRef.current) {
      desktopRef.current.play().catch(() => {});
    }
    if (mobileRef.current) {
      mobileRef.current.play().catch(() => {});
    }
  }, [src]);

  if (!src) return null;

  return (
    <>
      {/* 1. Desktop Background Mode (> 1024px) */}
      {mode === "dual" && (
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <video
            ref={desktopRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            className={`absolute inset-0 w-full h-full object-cover object-center filter brightness-[1.05] contrast-[1.08] ${className}`}
          >
            <source src={src} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-black/10 pointer-events-none" />
        </div>
      )}

      {/* 2. Mobile & Tablet Standalone Video Box (< 1024px) */}
      <div
        className={`${
          mode === "dual" ? "block lg:hidden" : "block"
        } relative z-10 mx-auto my-6 sm:my-8 px-4 w-full flex justify-center ${containerClassName}`}
      >
        <div className="relative overflow-hidden rounded-[16px] border border-white/15 bg-[#080c14] shadow-[0_12px_35px_rgba(0,0,0,0.5)] w-full max-w-4xl">
          <video
            ref={mobileRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={poster}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16 / 9",
              borderRadius: "16px",
              objectFit: "cover",
            }}
            className="block w-full h-auto rounded-[16px] object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
