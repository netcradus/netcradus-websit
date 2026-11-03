import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export default function GlassCard({ children, className, hover = true, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
            className={cn(
                "relative overflow-hidden rounded-[4px] bg-surface/40 backdrop-blur-xl border border-white/10 group transition-all duration-500",
                hover && "hover:border-primary/40 hover:bg-surface/60 hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]",
                className
            )}
        >
            {/* Corner Industrial Motifs */}
            <div className="absolute top-0 left-0 w-2 h-[1px] bg-white/20 group-hover:bg-primary/50 transition-colors" />
            <div className="absolute top-0 left-0 w-[1px] h-2 bg-white/20 group-hover:bg-primary/50 transition-colors" />
            
            <div className="absolute bottom-0 right-0 w-2 h-[1px] bg-white/20 group-hover:bg-primary/50 transition-colors" />
            <div className="absolute bottom-0 right-0 w-[1px] h-2 bg-white/20 group-hover:bg-primary/50 transition-colors" />

            {/* Ignition Pulse */}
            {hover && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0" />
            )}
            
            <div className="relative z-10 w-full h-full p-px">
                {children}
            </div>
        </motion.div>
    );
}
