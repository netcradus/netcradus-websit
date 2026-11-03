import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";
import AmbientMesh from "./AmbientMesh";
import ImageLightbox from "./ImageLightbox";
import RadialPlatformWheel from "./RadialPlatformWheel";
import PlatformShowcaseSlider from "./PlatformShowcaseSlider";
import PlatformDirectory from "./PlatformDirectory";

const TYPING_SEQUENCES = [
  "Securing Enterprise AI...",
  "Monitoring Cloud...",
  "Stopping Ransomware...",
  "Correlating Threats...",
  "Powered by ACIS + CYRIX XDR"
];

export default function Platform() {
  usePageMeta({
    title: SEO_META.platform.title,
    description: SEO_META.platform.description,
  });

  const [translateXAmount, setTranslateXAmount] = useState(-150);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Typewriter effect states
  const [typingText, setTypingText] = useState("");
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTranslateXAmount(-20);
      } else if (window.innerWidth < 1024) {
        setTranslateXAmount(-50);
      } else if (window.innerWidth < 1280) {
        setTranslateXAmount(-100);
      } else {
        setTranslateXAmount(-150);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Typewriter effect hook
  useEffect(() => {
    const currentFullText = TYPING_SEQUENCES[sequenceIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypingText(currentFullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timer = setTimeout(() => {
        setTypingText(currentFullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 70);
    }

    if (!isDeleting && charIndex === currentFullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setSequenceIndex((prev) => (prev + 1) % TYPING_SEQUENCES.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, sequenceIndex]);

  return (
    <div className="bg-background transition-colors duration-500">
      
      {/* 1. Custom Hero section */}
      <section className="relative overflow-x-hidden bg-[#06030b] py-16 md:py-24 border-b border-white/5">
        <AmbientMesh />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
          {/* Header & Hero Text */}
          <div className="max-w-7xl mx-auto text-center mb-10 px-2">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#FF6B00]/25 bg-[#FF6B00]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-[#FF6B00] shadow-[0_0_20px_rgba(255,107,0,0.2)]">
              <span className="h-2 w-2 rounded-full bg-[#FF6B00] animate-ping" />
              Next-Generation Cyber Defence
            </div>

            {/* Primary Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-white drop-shadow-[0_0_40px_rgba(255,82,160,0.35)]">
              Unified &amp; Built to Secure the <span className="bg-gradient-to-r from-white via-[#ff8ad8] to-[#ff52a0] bg-clip-text text-transparent">AI Revolution</span>
            </h1>

            {/* Description paragraph */}
            <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-gray-300 md:text-lg">
              Experience the power of ACIS (Autonomous Cyber Immune System) and CYRIX XDR, combining AI-driven threat detection, autonomous response, real-time visibility, and intelligent cyber defence in one unified security platform.
            </p>

            {/* Typewriter sequence pill */}
            <div className="mt-4 flex items-center justify-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-[#FF6B00] shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                <span>{typingText}</span>
                <span className="animate-ping font-bold text-white">|</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/acis"
                className="btn-primary rounded-xl px-8 py-3.5 text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center"
              >
                Explore ACIS
              </Link>
              <Link
                to="/netxdr"
                className="rounded-xl border border-[#FF6B00]/50 bg-transparent px-8 py-3.5 text-sm font-bold text-[#FF6B00] transition-all duration-300 hover:bg-[#FF6B00]/10 hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                Discover CYRIX XDR
              </Link>
            </div>
          </div>

          {/* Radial Security Platform Wheel Component Showcase */}
          <div className="w-full mt-4">
            <RadialPlatformWheel />
          </div>
        </div>
      </section>

      {/* 2. Platform Directory Grid (7 NetCradus Platforms) */}
      <PlatformDirectory />

      {/* 3. Interactive Showcase Slider Section */}
      <PlatformShowcaseSlider onOpenLightbox={(img) => setLightboxImage(img)} />

      {/* Image Lightbox Modal */}
      <ImageLightbox
        src={lightboxImage?.src}
        alt={lightboxImage?.alt}
        isOpen={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
      />
    </div>
  );
}

