import { cn } from "../../lib/utils";
import { HoverBorderGradient } from "./hover-border-gradient";

export default function GradientButton({ children, className, onClick, type = "button", disabled = false, variant = 'primary', ...props }) {
    if (variant === 'secondary') {
        return (
            <button
                type={type}
                disabled={disabled}
                onClick={onClick}
                className={cn(
                    "relative px-8 py-3 font-mono text-[10px] uppercase tracking-[0.2em] text-gray-400 transition-all rounded-[4px] border border-white/10 hover:border-primary/50 hover:bg-white/5 hover:text-white", 
                    className
                )}
                {...props}
            >
                {children}
            </button>
        )
    }

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cn(
                "relative inline-flex items-center justify-center overflow-hidden rounded-[4px] group transition-all duration-500",
                className
            )}
            {...props}
        >
            {/* Base border background when hovered */}
            <span className="absolute inset-0 bg-transparent group-hover:bg-white/10 transition-colors duration-500 z-0" />

            {/* The traveling glow light on hover */}
            <span className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#00E5FF_15%,transparent_50%)] opacity-0 group-hover:opacity-100 group-hover:animate-[spin_2s_linear_infinite] transition-opacity duration-500 z-0" />

            {/* Main button body */}
            <span className="absolute inset-[1px] bg-gradient-to-r from-primary to-secondary rounded-[3px] transition-all duration-300 z-10" />

            {/* The content */}
            <span className="relative z-20 w-full h-full flex items-center justify-center text-white font-mono text-[10px] font-bold uppercase tracking-[0.2em] px-8 py-4">
                {children}
            </span>
        </button>
    );
}
