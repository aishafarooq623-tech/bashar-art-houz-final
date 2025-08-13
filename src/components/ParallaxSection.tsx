import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
    children: React.ReactNode;
    className?: string;
    speed?: number;
    image?: string;
    overlay?: boolean;
}

const ParallaxSection = ({
    children,
    className = "",
    speed = 0.5,
    image,
    overlay = true,
}: ParallaxSectionProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            {image && (
                <motion.div
                    className="absolute inset-0 z-0"
                    style={{
                        y,
                        scale,
                        backgroundImage: `url(${image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                    }}
                >
                    {overlay && (
                        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
                    )}
                </motion.div>
            )}
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default ParallaxSection;