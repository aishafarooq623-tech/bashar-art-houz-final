import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface ParallaxSlideshowProps {
    images: string[];
    height?: string;
    className?: string;
}

const ParallaxSlideshow: React.FC<ParallaxSlideshowProps> = ({
    images,
    height = "600px",
    className = "",
}) => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
    const goToSlide = (i: number) => setIndex(i);

    return (
        <div
            className={`relative w-full max-w-5xl mx-auto overflow-hidden`}
            style={{ height }}
        >
            {/* Image */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-xl ${className}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.7 }}
                />
            </AnimatePresence>

            {/* Overlay gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition"
            >
                ◀
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition"
            >
                ▶
            </button>

            {/* Pagination dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goToSlide(i)}
                        className={`w-3 h-3 rounded-full transition ${i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ParallaxSlideshow;
