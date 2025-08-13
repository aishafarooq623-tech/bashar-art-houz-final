import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "scale";
    duration?: number;
    once?: boolean;
}

const ScrollReveal = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.6,
    once = true,
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once,
        margin: "-100px 0px -100px 0px"
    });

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
            x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
            scale: direction === "scale" ? 0.8 : 1,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration,
                delay,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;