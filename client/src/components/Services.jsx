import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./Services.css";

export const CYBER_RESILIENCE_CATEGORIES = [];

const Services = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may need to be muted to start in modern browsers
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch((err) => console.log("Autoplay error:", err));
        }
      });
    }
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section
      id="services"
      className="cyber-resilience-video-section relative w-full h-screen min-h-[100dvh] bg-black overflow-hidden flex items-center justify-center select-none"
      aria-label="Netcradus Cyber Resilience Video Showcase"
    >
      {/* Full-Page Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`services-fullscreen-video absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/videos/home video 2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback ambient glow while video initializes */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c0e1a] via-[#05060b] to-[#121626] flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-2 border-[#ff6b00]/30 border-t-[#ff6b00] animate-spin" />
        </div>
      )}

      {/* Subtle Bottom Ambient Gradient for smooth section transitions */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />

      {/* Sound Toggle Button (Bottom-Right) */}
      <button
        onClick={toggleSound}
        className="sound-toggle-btn absolute bottom-6 right-6 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/85 backdrop-blur-md border border-white/15 text-white/90 hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <>
            <VolumeX size={18} className="text-[#ff6b00]" />
            <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline">
              Sound Off
            </span>
          </>
        ) : (
          <>
            <Volume2 size={18} className="text-[#ff6b00]" />
            <span className="text-xs font-mono uppercase tracking-wider hidden sm:inline">
              Sound On
            </span>
          </>
        )}
      </button>
    </section>
  );
};

export default Services;
