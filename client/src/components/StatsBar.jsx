import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import SectionWrapper from "./ui/SectionWrapper";

function Counter({ from, to, suffix = "", prefix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
        restDelta: 0.001
    });

    useEffect(() => {
        if (inView) {
            motionValue.set(to);
        }
    }, [inView, motionValue, to]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = `${prefix}${Intl.NumberFormat("en-US").format(latest.toFixed(0))}${suffix}`;
            }
        });
    }, [springValue, prefix, suffix]);

    return <span ref={ref} className="font-display font-black text-4xl md:text-6xl text-zinc-900 dark:text-white tracking-tighter leading-none">{from}</span>;
}

const stats = [
    { prefix: "", value: "99.9", suffix: "%", label: "Operational Uptime", count: false },
    { prefix: "<", value: 60, suffix: "s", label: "Response Latency", count: true },
    { prefix: "", value: 50, suffix: "+", label: "Security Operatives", count: true },
    { prefix: "", value: 12, suffix: "+", label: "Strategic Nodes", count: true },
];

export default function StatsBar() {
    return (
        <SectionWrapper className="z-10 bg-premium-radial py-24">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-px border-y border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-800/10">
                {stats.map((stat, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center justify-center text-center p-12 md:p-20 group relative bg-transparent hover:bg-zinc-100/50 dark:hover:bg-zinc-800/20 transition-all duration-700 overflow-hidden"
                    >
                        {/* Ignition Background Glow */}
                        <div className="absolute inset-x-0 bottom-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        
                        <div className="relative">
                            {stat.count ? (
                                <Counter from={0} to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            ) : (
                                <div className="text-5xl md:text-6xl font-display font-extrabold text-[var(--text-primary)] tracking-tighter">
                                    {stat.prefix}{stat.value}{stat.suffix}
                                </div>
                            )}
                        </div>
                        <div className="text-[10px] font-bold text-zinc-400 dark:text-zinc-600 mt-8 tracking-[0.4em] uppercase transition-colors group-hover:text-accent font-sans">
                            {stat.label.replace(" ", " ")}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
}
