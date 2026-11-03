import { motion } from "framer-motion";
import { fadeUp } from "../../lib/motion";
import { cn } from "../../lib/utils";

export default function AnimatedReveal({ children, className, delay = 0 }) {
    return (
        <motion.div
            variants={{
                hidden: fadeUp.hidden,
                visible: {
                    ...fadeUp.visible,
                    transition: { ...fadeUp.visible.transition, delay }
                }
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
