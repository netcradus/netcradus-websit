import React, { useRef, useEffect } from "react";

export default function HowItWorks() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section id="how-it-works" className="w-full relative overflow-hidden bg-black">
      <div className="w-full relative overflow-hidden flex items-center justify-center">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-auto min-h-[360px] md:min-h-[600px] lg:min-h-screen object-cover block"
        >
          <source src="/videos/path%20immunity.mp4" type="video/mp4" />
          <source src="/videos/path immunity.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

