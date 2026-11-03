// import React from "react";
// import { Clock, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";
// import { BLOGS } from "../data/blogs";
// import "./Blog.css";

// const Blog = () => {
//   return (
//     <section id="blog" className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500">
//       <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
//         <div className="reveal mb-16 text-center">
//           <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.4em] text-accent md:text-[12px]">

//           </span>
//           <h2 className="mb-6 text-4xl font-display font-black text-zinc-900 dark:text-white md:text-6xl">
//             Latest from the <span className="text-accent italic">Lab.</span>
//           </h2>
//           <p className="mx-auto max-w-2xl text-lg font-sans leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
//             Expert perspectives, threat intelligence briefings, and architectural thought leadership from our engineers.
//           </p>
//         </div>

//         <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
//           <div className="blog-grid space-y-4 lg:col-span-8">
//             {BLOGS.map((blog, idx) => (
//               <Link
//                 key={blog.id}
//                 to={`/blog/${blog.id}`}
//                 className="blog-list-item reveal"
//                 style={{ transitionDelay: `${idx * 0.1}s` }}
//               >
//                 <div className="flex-grow">
//                   <div className="blog-item-meta mono">
//                     <span className="blog-item-cat">{blog.category}</span>
//                     <div className="blog-item-time">
//                       <Clock size={12} />
//                       {blog.readTime || "5 min read"}
//                     </div>
//                   </div>
//                   <h3 className="blog-item-title">{blog.title}</h3>
//                   <p className="blog-item-date mono">{blog.date}</p>
//                 </div>
//                 <div className="blog-item-arrow">
//                   <ChevronRight size={24} />
//                 </div>
//               </Link>
//             ))}
//           </div>

//           <div className="lg:col-span-4">
//             <div className="sticky top-24 rounded-2xl border border-border bg-[var(--color-surface)]/80 p-6 shadow-sm backdrop-blur-md">
//               <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-text-primary">
//                 Popular Topics
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {[
//                   "Cybersecurity",
//                   "Threat Intelligence",
//                   "Cloud Security",
//                   "AI Security",
//                   "Compliance",
//                   "Penetration Testing",
//                   "Incident Response",
//                   "Zero Trust"
//                 ].map((tag) => (
//                   <span
//                     key={tag}
//                     className="cursor-pointer rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-text-secondary transition hover:border-accent/40 hover:text-accent"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
import React from "react";
import { Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogs";
import "./Blog.css";

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-premium-radial py-24 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-16 xl:px-24">
        {/* Heading */}
        <div className="reveal mb-16 text-center">
          <h2 className="mb-6 text-4xl font-display font-black text-zinc-900 dark:text-white md:text-6xl">
            Latest from the <span className="text-accent italic">Lab.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-sans leading-relaxed text-zinc-600 dark:text-zinc-400 md:text-xl">
            Expert perspectives, threat intelligence briefings, and
            architectural thought leadership from our engineers.
          </p>
        </div>

        <div className="blog-grid">
          {BLOGS.map((blog, idx) => (
            <Link
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="blog-card reveal"
              style={{ transitionDelay: `${idx * 0.06}s` }}
            >
              {blog.heroImage && (
                <div className="blog-card-image">
                  <img src={blog.heroImage} alt={blog.title} loading="lazy" />
                </div>
              )}

              <div className="blog-card-meta">
                <span className="blog-card-category">{blog.category}</span>

                <div className="blog-card-time">
                  <Clock size={14} />
                  <span>{blog.readTime || "5 min read"}</span>
                </div>
              </div>

              <h3 className="blog-card-title">{blog.title}</h3>

              <p className="blog-card-date">{blog.date}</p>

              {blog.excerpt && (
                <p className="blog-card-excerpt">{blog.excerpt}</p>
              )}

              <div className="blog-card-arrow">
                <ChevronRight size={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
