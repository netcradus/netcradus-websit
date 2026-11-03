import React from "react";
import InfiniteMarquee from "./ui/InfiniteMarquee";

const galleryImages = [
  "/generate1.png",
  "/generate2.png",
  "/generate3.png",
  "/generate4.png",
  "/generate5.png",
  "/generate6.png",
  "/generate7.png",
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-premium-radial py-24"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 block text-[11px] font-bold uppercase tracking-[0.35em] text-accent">
          
          </span>

          <h2 className="text-4xl font-black tracking-tight text-text-primary md:text-6xl">
            Our Gallery
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-text-secondary md:text-lg">
            Explore moments, collaborations, workspace culture, and highlights
            from Netcradus.
          </p>
        </div>

        {/* Infinite Auto-Scrolling Marquee */}
        <InfiniteMarquee images={galleryImages} />

      </div>
    </section>
  );
}