import SectionWrapper from "./ui/SectionWrapper";
import AnimatedReveal from "./ui/AnimatedReveal";
import { LayoutTemplate, Blocks, Workflow, AppWindow } from "lucide-react";

const software = [
    { name: "CRM Systems", desc: "Customer Relationship Management tailored to your enterprise workflow.", icon: LayoutTemplate },
    { name: "ERP Systems", desc: "Enterprise Resource Planning for total operational visibility.", icon: Blocks },
    { name: "KO Systems", desc: "Knowledge Operations systems for intelligent data classification.", icon: Workflow },
    { name: "Custom Applications", desc: "Bespoke software development engineered for security and scale.", icon: AppWindow },
];

export default function SoftwareSection() {
    return (
        <SectionWrapper className="py-16 md:py-24 relative overflow-hidden">
            {/* Background Tech Image */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&q=80&w=2000"
                    alt="Code Background"
                    className="w-full h-full object-cover opacity-[0.05] mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
            </div>

            <AnimatedReveal className="mb-12 md:mb-16 relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-[var(--text-primary)]">Enterprise Software</h2>
                <p className="text-[var(--text-secondary)] max-w-2xl font-sans">
                    Secure, scalable, and tailored software solutions that drive business efficiency.
                </p>
            </AnimatedReveal>

            {/* Horizontal Scroll Carousel */}
            <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide relative z-10" style={{ scrollbarWidth: 'none' }}>
                {software.map((item, idx) => (
                    <div
                        key={idx}
                        className="min-w-[80vw] sm:min-w-[400px] snap-center bg-surface-color/80 backdrop-blur-md border border-[var(--border-color)] rounded-2xl p-8 hover:bg-surface-color/10 hover:border-primary/30 transition-all duration-300 group"
                    >
                        <item.icon className="text-[var(--text-secondary)] opacity-50 group-hover:text-secondary transition-colors w-10 h-10 mb-6" strokeWidth={1.5} />
                        <h3 className="text-xl md:text-2xl font-display font-bold text-[var(--text-primary)] mb-3">{item.name}</h3>
                        <p className="text-[var(--text-secondary)] font-sans leading-relaxed text-sm md:text-base">{item.desc}</p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
