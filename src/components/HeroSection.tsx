import React from "react";
import heroBackground from "@/assets/home/home-main.png";
import logoImage from "@/assets/logo-cropped.png";
import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import AnimatedText from "@/components/AnimatedText"; // your existing AnimatedText

interface HeroSectionProps {
  onMenuClick: () => void; // we pass this down from AppLayout/Header
}

const HeroSection: React.FC<HeroSectionProps> = ({ onMenuClick }) => {
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

      {/* Top Bar (Menu + Socials) */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
        {/* Menu Text */}
        <div onClick={onMenuClick} className="cursor-pointer">
          <AnimatedText
          text=""
            className="text-lg md:text-xl font-light tracking-widest text-white hover:text-gold transition-colors duration-300"
            delay={0.2}
          />
        </div>

        {/* Social Icons (animated like text) */}
        <div className="flex space-x-6 text-white text-xl">
          {[
            { Icon: FaInstagram, href: "http://instagram.com/" },
            { Icon: FaFacebookF, href: "https://www.facebook.com/" },
            // { Icon: FaWhatsapp, href: "http://www.whatsapp.com/" },
            { Icon: FaTwitter, href: "http://x.com/" },
          ].map(({ Icon, href }, idx) => (
            <a key={idx} href={href} target="_blank" rel="noopener noreferrer">
              <Icon className="hover:text-gold transition-colors duration-300" />

            </a>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img
            src={logoImage}
            alt="Bashar Art Houz Logo"
            className="mx-auto max-w-[360px] md:max-w-[480px] lg:max-w-[600px] h-auto mb-4"
          />
        </div>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-white font-light tracking-wide max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "400ms" }}
        >
          An innovative space where you can escape, explore and unleash your
          creativity. Whether you're an artist, writer, entrepreneur, or simply
          someone looking for a dose of inspiration, this new Houz is designed
          to nurture your imagination and spark new ideas.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
