import React, { useEffect } from "react";
import Blog from "../components/Blog";
import { usePageMeta } from "../hooks/usePageMeta";
import { SEO_META } from "../data/seoMeta";

const BlogPage = () => {
  usePageMeta(SEO_META.blog.title, SEO_META.blog.description);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[#07070b]">
      {/* Crisp, Non-Pixelated Light Cybersecurity Hero Banner */}
      <section className="w-full bg-[#f4f7fc] py-4 sm:py-8 px-4 flex justify-center items-center overflow-hidden">
        <div className="w-full max-w-[1024px] mx-auto flex justify-center items-center">
          <img
            src="/blog-hero-banner.png"
            alt="Cybersecurity Blog: Threat Intelligence & Research"
            className="w-full max-w-[1024px] h-auto object-contain block mx-auto"
            style={{
              imageRendering: "-webkit-optimize-contrast",
            }}
          />
        </div>
      </section>

      {/* Main Blog Grid Section */}
      <Blog />
    </div>
  );
};

export default BlogPage;