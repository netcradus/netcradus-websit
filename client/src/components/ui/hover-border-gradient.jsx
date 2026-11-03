import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export function HoverBorderGradient({
    children,
    containerClassName,
    className,
    as: Tag = "button",
    duration = 1,
    clockwise = true,
    ...props
}) {
    const [hovered, setHovered] = useState(false);
    const [direction, setDirection] = useState("TOP");

    const rotateDirection = (currentDirection) => {
        const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
        const currentIndex = directions.indexOf(currentDirection);
        const nextIndex = clockwise
            ? (currentIndex - 1 + directions.length) % directions.length
            : (currentIndex + 1) % directions.length;
        return directions[nextIndex];
    };

    const movingMap = {
        TOP: "radial-gradient(40% 60% at 50% 0%, #FF6B00 0%, rgba(255, 255, 255, 0) 100%)",
        LEFT: "radial-gradient(40% 60% at 0% 50%, #FF1F7A 0%, rgba(255, 255, 255, 0) 100%)",
        BOTTOM: "radial-gradient(40% 60% at 50% 100%, #FF6B00 0%, rgba(255, 255, 255, 0) 100%)",
        RIGHT: "radial-gradient(40% 60% at 100% 50%, #FF1F7A 0%, rgba(255, 255, 255, 0) 100%)",
    };

    useEffect(() => {
        if (hovered) {
            const interval = setInterval(() => {
                setDirection((prevState) => rotateDirection(prevState));
            }, duration * 400); // speed up slightly
            return () => clearInterval(interval);
        }
    }, [hovered]);

    return (
        <Tag
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={cn(
                "relative flex rounded-lg overflow-hidden border-none p-[1px] transition-all duration-300 shadow-[0_4px_15px_rgba(255,107,0,0.2)] hover:shadow-[0_0_30px_rgba(255,107,0,0.5)] hover:-translate-y-0.5",
                containerClassName
            )}
            {...props}
        >
            <div
                className={cn(
                    "w-full h-full relative z-10 rounded-[6px] overflow-hidden bg-gradient-to-r from-primary to-secondary",
                    className
                )}
            >
                {children}
            </div>

            {/* Default background fallback if no hover effect is playing */}
            <div className="absolute inset-0 bg-white/5 opacity-50 z-0 pointer-events-none" />

            <motion.div
                className="absolute inset-0 z-0 opacity-0 rounded-lg pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{
                    background: movingMap[direction],
                    opacity: hovered ? 1 : 0
                }}
                transition={{ ease: "linear", duration: duration ?? 1 }}
            />
        </Tag>
    );
}
