import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";
import GlassCard from "./ui/GlassCard";
import GradientButton from "./ui/GradientButton";
import MagneticWrapper from "./ui/MagneticWrapper";
import FormPrivacyNotice from "./ui/FormPrivacyNotice";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export default function ContactSection() {
    const formRef = useRef();
    const [status, setStatus] = useState("idle"); // idle, loading, success, error
    const [privacyConsent, setPrivacyConsent] = useState(false);
    const [formData, setFormData] = useState({
        user_name: "",
        user_company: "",
        user_phone: "",
        user_email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.user_name || !formData.user_email || !formData.message || !privacyConsent) {
            return;
        }

        setStatus("loading");

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_0b2gu7w",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_0eug8b5",
                {
                    to_email: "info@netcradus.com",
                    recipient_email: "info@netcradus.com",
                    to_name: "Netcradus Info",
                    name: formData.user_name,
                    user_name: formData.user_name,
                    email: formData.user_email,
                    user_email: formData.user_email,
                    reply_to: formData.user_email,
                    phone: formData.user_phone || "N/A",
                    user_phone: formData.user_phone || "N/A",
                    company: formData.user_company || "N/A",
                    user_company: formData.user_company || "N/A",
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "ezgqG6Hon-z8nuFTU"
            );

            setStatus("success");
            setFormData({ user_name: "", user_company: "", user_phone: "", user_email: "", message: "" });
            setPrivacyConsent(false);
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Email error:", error);
            setStatus("error");
            try {
                const mailtoSubject = encodeURIComponent(`Contact Enquiry from ${formData.user_name}`);
                const mailtoBody = encodeURIComponent(
                    `Name: ${formData.user_name}\nEmail: ${formData.user_email}\nPhone: ${formData.user_phone || "N/A"}\nCompany: ${formData.user_company || "N/A"}\n\nMessage:\n${formData.message}`
                );
                window.location.href = `mailto:info@netcradus.com?subject=${mailtoSubject}&body=${mailtoBody}`;
            } catch (e) {
                console.error("Mailto fallback error:", e);
            }
        }
    };

    return (
        <SectionWrapper id="contact" className="py-24 bg-premium-radial relative overflow-hidden transition-colors duration-500">
            {/* Atmospheric Background */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none -z-0" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,var(--color-border)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

            <div className="container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-16 xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
                {/* Left: Strategic Hook */}
                <AnimatedReveal>
                    <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-accent-bright uppercase mb-8 block">
                        Establish Connection
                    </span>
                    <h2 className="text-4xl md:text-7xl font-display font-extrabold text-zinc-900 dark:text-white mb-8 tracking-tighter leading-none">
                        Ready to <br />
                        <span className="text-zinc-400 dark:text-zinc-400 italic">fortify?</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 font-sans text-lg leading-relaxed mb-16 max-w-md">
                        Our strategists are standing by to engineer your digital shield. Initiate the 60-minute executive briefing.
                    </p>

                    <div className="space-y-12">
                        <div className="flex gap-6 group cursor-pointer">
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-accent group-hover:border-accent/20 transition-all duration-500">
                                <Mail size={18} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest block mb-2">Technical Liaison</span>
                                <h4 className="text-xl font-sans font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">info@netcradus.com</h4>
                            </div>
                        </div>

                        <div className="flex gap-6 group cursor-pointer">
                            <div className="w-12 h-12 rounded-2xl bg-surface-color/10 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-primary group-hover:border-primary/20 transition-all duration-500">
                                <Phone size={18} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-[var(--text-secondary)] opacity-50 uppercase tracking-widest block mb-2">Direct Operative</span>
                                <h4 className="text-xl font-display font-bold text-[var(--text-primary)] group-hover:text-primary transition-colors">1800 121 008800</h4>
                            </div>
                        </div>

                        <div className="flex gap-6 group cursor-pointer">
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 dark:text-zinc-400 group-hover:text-accent group-hover:border-accent/20 transition-all duration-500">
                                <MapPin size={18} />
                            </div>
                            <div>
                                <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-widest block mb-2">Operational Hubs</span>
                                <h4 className="text-xl font-sans font-bold text-zinc-900 dark:text-white group-hover:text-accent transition-colors">Leicester (HQ) / Noida (Node)</h4>
                            </div>
                        </div>
                    </div>
                </AnimatedReveal>

                {/* Right: Immersive Form */}
                <AnimatedReveal delay={0.2}>
                    <div className="relative p-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-200 dark:from-zinc-800 to-transparent">
                        <div className="glass-main p-8 md:p-12 rounded-2xl relative z-10 shadow-premium">
                            {/* Success Overlay */}
                            {status === "success" && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-[var(--color-bg)] rounded-xl p-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-8 shadow-red-glow">
                                        <CheckCircle2 className="text-accent-bright w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-[var(--text-primary)] mb-4">Transmission Received</h3>
                                    <p className="text-[var(--text-secondary)] font-sans max-w-xs mx-auto">Our security operatives are reviewing your dossier and will reach out shortly.</p>
                                    <button onClick={() => setStatus("idle")} className="mt-8 text-xs font-bold text-primary uppercase tracking-[0.2em] hover:text-[var(--text-primary)] transition-colors">Close Feed</button>
                                </motion.div>
                            )}

                            <h3 className="text-2xl font-display font-bold text-[var(--text-primary)] mb-10 tracking-tight">Technical Inquiry</h3>
                            <form className="space-y-8" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            required
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-zinc-200 dark:border-zinc-800 py-3 text-zinc-900 dark:text-white focus:outline-none focus:border-accent transition-colors font-sans placeholder:text-zinc-400 dark:placeholder:text-zinc-400"
                                            placeholder="FULL NAME"
                                        />
                                        <label className="absolute left-0 -top-4 text-[9px] font-bold text-zinc-500 uppercase tracking-[0.2em] group-focus-within:text-accent transition-all">NAME</label>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            id="user_company"
                                            name="user_company"
                                            value={formData.user_company}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-[var(--color-text-secondary)]/50"
                                            placeholder="ORGANIZATION"
                                        />
                                        <label className="absolute left-0 -top-4 text-[9px] font-bold text-[var(--color-text-secondary)] opacity-50 tracking-[0.2em] group-focus-within:text-primary transition-all">COMPANY</label>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <input
                                            required
                                            type="email"
                                            id="user_email"
                                            name="user_email"
                                            value={formData.user_email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-[var(--color-text-secondary)]/50"
                                            placeholder="OFFICIAL EMAIL"
                                        />
                                        <label className="absolute left-0 -top-4 text-[9px] font-bold text-[var(--color-text-secondary)] opacity-50 tracking-[0.2em] group-focus-within:text-primary transition-all">EMAIL</label>
                                    </div>
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            id="user_phone"
                                            name="user_phone"
                                            value={formData.user_phone}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-primary transition-colors font-sans placeholder:text-[var(--color-text-secondary)]/50"
                                            placeholder="+44 / +91"
                                        />
                                        <label className="absolute left-0 -top-4 text-[9px] font-bold text-[var(--color-text-secondary)] opacity-50 tracking-[0.2em] group-focus-within:text-primary transition-all">CONTACT_NO</label>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        required
                                        id="message"
                                        name="message"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[var(--color-text-primary)] focus:outline-none focus:border-primary transition-colors font-sans resize-none placeholder:text-[var(--color-text-secondary)]/50"
                                        placeholder="OUTLINE REQUIREMENTS..."
                                    ></textarea>
                                    <label className="absolute left-0 -top-4 text-[9px] font-bold text-[var(--color-text-secondary)] opacity-50 tracking-[0.2em] group-focus-within:text-accent transition-all">BRIEF</label>
                                </div>

                                <div className="pt-2 text-left">
                                    <FormPrivacyNotice
                                        purpose="responding to your enquiry or technical briefing request"
                                        requireConsent={true}
                                        consentChecked={privacyConsent}
                                        onConsentChange={setPrivacyConsent}
                                        id="contact-section-privacy-consent"
                                    />
                                </div>

                                <div className="pt-6">
                                    <MagneticWrapper strength={0.3}>
                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full flex items-center justify-between px-10 py-6 bg-zinc-900 dark:bg-white text-white dark:text-black font-display font-extrabold text-xs uppercase tracking-[0.3em] group disabled:opacity-50 transition-all shadow-xl rounded-2xl"
                                        >
                                            {status === "loading" ? (
                                                <div className="flex items-center gap-3">
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                    PROCCESSING_FEED
                                                </div>
                                            ) : (
                                                <>
                                                    SUBMIT_INTEL
                                                    <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </MagneticWrapper>
                                </div>
                            </form>
                        </div>
                    </div>
                </AnimatedReveal>
            </div>
        </div>
    </SectionWrapper>
    );
}

