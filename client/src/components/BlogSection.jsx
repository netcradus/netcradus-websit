import React from 'react';
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";
import SectionWrapper from "./ui/SectionWrapper";
import GlassCard from "./ui/GlassCard";
import AnimatedReveal from "./ui/AnimatedReveal";
import { ArrowRight, Clock, User } from "lucide-react";
import { Link } from "react-router-dom";

const BLOG_POSTS = [
    {
        id: 1,
        title: "The Rise of Autonomous Cybersecurity: Why Static Rules Are Failing",
        excerpt: "As cyber threats mutate at machine speed, traditional rule-based SIEM and EDR platforms can no longer keep up. Discover how AI-driven autonomous systems represent the future of enterprise defense.",
        category: "Artificial Intelligence",
        author: "Chief Product Officer",
        date: "October 12, 2026",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Navigating ISO/IEC 27001:2022:2022 Transitions for Financial Institutions",
        excerpt: "The updated ISO/IEC 27001:2022:2022 standard introduces significant changes to organizational controls. Here is our comprehensive guide on achieving and maintaining compliance in highly regulated sectors.",
        category: "Compliance & GRC",
        author: "Lead Security Auditor",
        date: "September 28, 2026",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Zero Trust Architecture: Moving Beyond the Perimeter Myth",
        excerpt: "The 'trusted internal network' is a dangerous fallacy. Learn how to implement practical, continuous verification frameworks across identity, endpoints, and cloud workloads.",
        category: "Architecture",
        author: "Principal Cloud Architect",
        date: "September 15, 2026",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
    }
];

export default function BlogSection() {
    return (
        <SectionWrapper className="py-16 md:py-24 border-t border-[var(--border-color)] bg-surface-color/5 transition-colors duration-300">
            <AnimatedReveal className="flex flex-col md:flex-row md:items-end justify-between items-center text-center md:text-left gap-6 mb-16">
                <div className="flex flex-col items-center md:items-start">
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,245,160,0.2)]">
                        Insights & Intelligence
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-[var(--text-primary)] mb-4">
                        Latest from the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Netcradus Lab</span>
                    </h2>
                    <p className="text-[var(--text-secondary)] max-w-2xl font-sans text-sm md:text-base tracking-wide px-4 md:px-0">
                        Expert perspectives, threat intelligence briefings, and architectural thought leadership from our engineers and analysts.
                    </p>
                </div>
                <Link to="/blog" className="shrink-0 flex items-center justify-center gap-2 text-primary font-bold hover:text-[var(--text-primary)] transition-colors group px-6 py-3 border border-[var(--border-color)] rounded-lg hover:border-primary/50 bg-surface-color/10 text-xs md:text-sm">
                    View All Articles
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
            </AnimatedReveal>

            {/* <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {BLOG_POSTS.map((post, index) => (
                    <motion.div key={post.id} variants={fadeUp} className="h-full flex">
                        <GlassCard className="flex flex-col h-full overflow-hidden p-0 group hover:border-[var(--primary-accent)]/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <div className="relative h-48 overflow-hidden w-full">
                                <div className="absolute inset-0 bg-[var(--bg-color)]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-[var(--bg-color)]/60 backdrop-blur-md rounded border border-[var(--border-color)] text-xs font-bold text-[var(--text-primary)] tracking-wider">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-display font-bold text-[var(--text-primary)] mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] opacity-60 font-sans border-t border-[var(--border-color)] pt-4 mt-auto">
                                    <div className="flex items-center gap-2">
                                        <User size={14} className="text-primary/70" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={14} className="text-secondary/70" />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </motion.div> */}
        </SectionWrapper>
    );
}
