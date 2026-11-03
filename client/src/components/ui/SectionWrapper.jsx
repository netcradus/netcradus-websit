import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { staggerContainer } from "../../lib/motion";

export default function SectionWrapper({ children, className, id }) {
    return (
        <motion.section
            id={id}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className={cn("w-full max-w-7xl mx-auto px-6 py-12 md:py-32 relative z-10", className)}
        >
            {/* Target Corner Motifs */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[var(--border-color)] opacity-50 pointer-events-none" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[var(--border-color)] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[var(--border-color)] opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[var(--border-color)] opacity-50 pointer-events-none" />
            
            {children}
        </motion.section>
    );
}
