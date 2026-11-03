import React from "react";
import AmbientMesh from "./AmbientMesh";

export default function PageHero({
  label,
  title,
  subtitle,
  actions,
  media,
  className = "",
  titleClassName = "",
  backgroundImage,
}) {
  return (
    <section
      className={`relative overflow-hidden bg-premium-radial py-24 md:py-32 ${className}`}
      style={backgroundImage ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.64), rgba(0,0,0,0.64)), url('${backgroundImage}')`, backgroundSize: "cover", backgroundPosition: "center" } : undefined}
    >
      <AmbientMesh />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(232,64,10,0.08),transparent_30%)] dark:bg-[radial-gradient(circle_at_50%_32%,rgba(232,64,10,0.12),transparent_28%)]" />
      <div className="container relative z-10 mx-auto grid max-w-screen-2xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 xl:px-24">
        <div className="max-w-3xl">
          {label ? (
            <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px]">
              {label}
            </span>
          ) : null}
          <h1 className={`text-4xl font-black leading-none tracking-tighter text-text-primary md:text-7xl ${titleClassName}`}>
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
              {subtitle}
            </p>
          ) : null}
          {actions ? <div className="mt-10 flex flex-wrap gap-4">{actions}</div> : null}
        </div>
        <div className="relative">{media}</div>
      </div>
    </section>
  );
}
