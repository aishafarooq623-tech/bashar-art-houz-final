import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
}

const AnimatedText = ({
    text,
    className = "",
    delay = 0,
    duration = 0.1,
    stagger = 0.005
}: AnimatedTextProps) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: stagger,
                delayChildren: delay,
            },
        },
    };

    const child = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: duration,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        variants={child}
                        style={{ transformOrigin: "bottom" }}
                    >
                        {word}
                        {wordIndex < words.length - 1 && "\u00A0"}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
};

export default AnimatedText;