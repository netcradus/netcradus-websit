import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";
import GlassCard from "./ui/GlassCard";
import { CloudCog, Boxes, BrainCircuit, Bot, MessageSquare } from "lucide-react";

const cards = [
    { name: "Cloud Migration", icon: CloudCog },
    { name: "Multi-Cloud Architecture", icon: Boxes },
    { name: "AI Model Integration", icon: BrainCircuit },
    { name: "Intelligent Process Automation", icon: Bot },
    { name: "Conversational AI", icon: MessageSquare },
];

export default function CloudAISection() {
    return (
        <section className="relative py-16 md:py-24 bg-background overflow-hidden transition-colors duration-300">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1620825937374-87fc1d6aaf2c?auto=format&fit=crop&q=80&w=2000"
                    alt="AI Abstract"
                    className="w-full h-full object-cover opacity-20 mix-blend-screen"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#07090d]/95 via-[#0a0e14]/80 to-[#07090d]/100" />
            </div>

            <div className="relative z-10">
                <SectionWrapper>
                    <AnimatedReveal className="mb-12 md:mb-16 text-center">
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-[var(--text-primary)]">Cloud & AI Solutions</h2>
                        <p className="text-[var(--text-secondary)] max-w-2xl mx-auto font-sans text-sm md:text-base">
                            Scale seamlessly and intelligently with next-generation cloud architectures and integrated AI models.
                        </p>
                    </AnimatedReveal>

                    <div className="flex flex-wrap justify-center gap-6">
                        {cards.map((card, idx) => (
                            <GlassCard
                                key={idx}
                                delay={idx * 0.1}
                                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] animate-float backdrop-blur-xl bg-[#0a0e14]/60"
                                style={{ animationDelay: `${idx * 0.5}s` }}
                            >
                                <div className="flex flex-col items-center text-center p-4">
                                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 ring-1 ring-primary/20">
                                        <card.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-display font-semibold text-[var(--text-primary)]">{card.name}</h3>
                                </div>
                            </GlassCard>
                        ))}
                    </div>
                </SectionWrapper>
            </div>
        </section>
    );
}
