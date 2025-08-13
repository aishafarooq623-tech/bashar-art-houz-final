import React from "react";
import heroBackground from '@/assets/hero-background.jpg';
import { motion, useScroll, useTransform } from "framer-motion";


const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/30" />
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full flex items-center justify-center">
            <div className="text-primary font-serif text-2xl">B</div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground tracking-widest mb-8 animate-fade-in-up">
          BASHAR ART HOUZ
        </h1>

        {/* Subtitle */}
        <div className="text-xl md:text-2xl text-foreground/90 mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <span className="tracking-wider">STUDIO</span>
          <span className="mx-4 text-primary">×</span>
          <span className="tracking-wider">CAFE</span>
          <span className="mx-4 text-primary">×</span>
          <span className="tracking-wider">GALLERY</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-foreground/80 font-light tracking-wide mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          An innovative space where you can escape, explore and unleash your
          creativity. Whether you're an artist, writer, entrepreneur, or simply
          someone looking for a dose of inspiration, this new Houz is designed
          to nurture your imagination and spark new ideas.
        </p>

        {/* Decorative Lines */}
        {/* <div className="flex justify-center items-center space-x-4 mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary"></div>
          <div className="w-2 h-2 bg-primary rotate-45"></div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary"></div>
        </div> */}
      </div>

      {/* Side Decorations */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent ml-8"></div>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-primary to-transparent mr-8"></div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;