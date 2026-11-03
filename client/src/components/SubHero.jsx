import React, { useEffect, useState } from "react";
import AmbientMesh from "./AmbientMesh";
import ResponsiveVideo from "./ResponsiveVideo";
import "./SubHero.css";

const SubHero = ({
  title,
  subtitle,
  label,
  actions,
  visual,
  align = "left",
  sectionClassName = "",
  backgroundImage,
  backgroundVideo,
  typingTitle = false,
  typingSpeed = 35,
}) => {
  const textAlign = align === "center" ? "mx-auto text-center" : "";
  const [typedTitle, setTypedTitle] = useState(typingTitle ? "" : title);

  useEffect(() => {
    if (!typingTitle) {
      setTypedTitle(title);
      return;
    }

    let index = 0;
    setTypedTitle("");

    const interval = setInterval(() => {
      setTypedTitle(title.slice(0, index + 1));
      index++;

      if (index >= title.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [title, typingTitle, typingSpeed]);

  return (
    <section
      className={`relative flex flex-col ${
        backgroundVideo ? "min-h-[50vh] lg:min-h-[75vh] pt-28 pb-16 lg:pt-40 lg:pb-32" : "min-h-[50vh] py-24"
      } items-center justify-center overflow-hidden bg-premium-radial transition-colors duration-500 ${sectionClassName}`}
      style={
        backgroundImage && !backgroundVideo
          ? {
              backgroundImage: `linear-gradient(rgba(0,0,0,0.64), rgba(0,0,0,0.64)), url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Responsive Video System (Desktop Background / Mobile Card Box) */}
      {backgroundVideo && <ResponsiveVideo src={backgroundVideo} mode="dual" />}

      {!backgroundVideo && <AmbientMesh />}

      {!backgroundVideo && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_28%,rgba(232,64,10,0.1),transparent_24%),radial-gradient(circle_at_76%_36%,rgba(232,64,10,0.06),transparent_24%)] dark:bg-[radial-gradient(circle_at_30%_28%,rgba(232,64,10,0.14),transparent_24%),radial-gradient(circle_at_76%_36%,rgba(232,64,10,0.1),transparent_24%)]" />
      )}

      <div className="container relative z-10 mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        <div
          className={
            visual && align !== "center"
              ? "grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
              : ""
          }
        >
          <div className={`reveal ${!visual ? "max-w-3xl" : ""} ${textAlign}`}>
            {label ? (
              <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px] drop-shadow-md">
                {label}
              </span>
            ) : null}

            <h1 className="mb-8 text-3xl sm:text-4xl font-display font-black leading-tight tracking-tighter text-text-primary md:text-7xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
              {typedTitle}
            </h1>

            {subtitle ? (
              <p className="text-base font-sans leading-relaxed text-text-secondary md:text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                {subtitle}
              </p>
            ) : null}

            {actions ? (
              <div
                className={`mt-8 flex flex-wrap gap-4 ${
                  align === "center" ? "justify-center" : ""
                }`}
              >
                {actions}
              </div>
            ) : null}
          </div>

          {visual ? (
            <div className={`relative z-10 ${align === "center" ? "mt-12" : ""}`}>
              {visual}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default SubHero;