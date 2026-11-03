import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - 10);
            mouseY.set(e.clientY - 10);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            const isClickable = target.closest('button, a, input, textarea, .cursor-pointer');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-5 h-5 border-2 border-primary rounded-full pointer-events-none z-[99999] hidden md:block mix-blend-difference"
            style={{
                x,
                y,
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? 'rgba(0, 124, 255, 0.3)' : 'transparent',
                borderColor: isHovering ? 'rgba(0, 124, 255, 1)' : 'rgba(0, 124, 255, 0.5)',
            }}
        />
    );
}
