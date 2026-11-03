import React, { useState } from "react";

export default function InfiniteMarquee({ images }) {
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedImages = [...images, ...images];

  return (
    <div 
      className="relative w-full overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Inject Keyframe Animation */}
      <style>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll-ltr {
          display: flex;
          width: max-content;
          animation: scroll-ltr 30s linear infinite;
        }
      `}</style>

      <div
        className="animate-scroll-ltr gap-6"
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            className="relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-md transition-all duration-300 hover:border-accent/40"
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
