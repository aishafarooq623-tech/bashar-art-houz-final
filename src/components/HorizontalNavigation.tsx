import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/about/about-hero.jpg";
import homeimage from "@/assets/home/home-main.png";
import studioImage from "@/assets/studio/studio-main.png"
import aboutImage from "@/assets/about/about-hero.jpg"
import cafeImage from "@/assets/cafe/hero image-2.png"
import galleryImage from "@/assets/gallery/Hero Image-3.png";
//contact



interface NavigationItem {
  id: string;
  number: string;
  title: string;
  image: string;
  href: string;
}

interface HorizontalNavigationProps {
  isExpanded: boolean;
  onToggle: () => void;
}

const HorizontalNavigation: React.FC<HorizontalNavigationProps> = ({
  isExpanded,
  onToggle,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const navigationItems: NavigationItem[] = [
    {
      id: "001",
      number: "001",
      title: "HOME",
      image: homeimage,
      href: "/",
    },
    {
      id: "002",
      number: "002",
      title: "ABOUT",
      image: aboutImage,
      href: "/about",
    },
    {
      id: "003",
      number: "003",
      title: "STUDIO",
      image: studioImage,
      href: "/studio",
    },
    {
      id: "004",
      number: "004",
      title: "CAFE",
      image: cafeImage,
      href: "/cafe",
    },
    {
      id: "005",
      number: "005",
      title: "GALLERY",
      image: galleryImage,
      href: "/gallery",
    },
    {
      id: "006",
      number: "006",
      title: "CONTACT",
      image: heroImage,
      href: "/contact",
    },
  ];

  // Horizontal scroll effect for expanded menu
  const x = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    const bounds = container.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left;
    const percent = mouseX / bounds.width;

    const maxScroll = container.scrollWidth - bounds.width;
    const targetOffset = -maxScroll * percent;

    x.set(targetOffset);
  };

  // Navigate using useNavigate and close menu
  const handleItemClick = (href: string) => {
    navigate(href);
  };

  // Framer Motion variants for staggered letters hover effect
  const containerVariants = {
    hover: {
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0,
      },
    },
    initial: {},
  };

  const letterVariants = {
    initial: { y: 0, opacity: 1 },
    hover: {
      y: -8,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 20,
      },
    },
  };

  // Split text into animated letters
  const renderStaggeredText = (text: string) => (
    <motion.div
      className="inline-block"
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          className="inline-block"
          style={{ display: "inline-block" }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-700 ease-in-out ${isExpanded ? "h-[80vh] bg-background shadow-xl" : "h-20 bg-background/90 backdrop-blur-md"
        }`}
    >
      {!isExpanded ? (
        <div className="h-full flex items-center justify-evenly select-none">
          {navigationItems.map((item) => (
            <div
              key={item.id}
              className="text-center cursor-pointer"
              onClick={() => handleItemClick(item.href)}
            >
              <div className="text-foreground text-sm tracking-widest mb-1">
                {renderStaggeredText(item.title)}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <button
              onClick={onToggle}
              className="text-foreground text-sm tracking-widest hover:text-primary transition-colors duration-300"
            >
              CLOSE
            </button>
            <div className="text-foreground font-light tracking-widest text-lg">BASHAR ART HOUZ</div>
            <div className="text-foreground text-sm tracking-widest hover:text-primary transition-colors duration-300 cursor-pointer">
              CONTACTS
            </div>
          </div>

          {/* Horizontal Navigation */}
          <div
            className="flex-1 flex items-center px-[15vw] overflow-hidden relative"
            onMouseMove={handleMouseMove}
            ref={containerRef}
          >
            <motion.div className="flex gap-8" style={{ x: smoothX }}>
              {navigationItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-[300px] group cursor-pointer transform transition-all duration-500 hover:scale-105"
                  onClick={() => handleItemClick(item.href)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Number and Title */}
                  <div className="text-center mb-4">
                    <div className="text-2xl font-light text-foreground tracking-wider mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.number}
                    </div>
                    <div className="text-sm text-foreground tracking-widest overflow-hidden">
                      <span
                        className={`inline-block transition-transform duration-500 ${hoveredItem === item.id ? "translate-x-2" : ""
                          }`}
                      >
                        {item.title}
                      </span>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-muted group-hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${hoveredItem === item.id ? "scale-110 brightness-110" : ""
                        }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent transition-opacity duration-500 ${hoveredItem === item.id ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-foreground text-xs tracking-widest opacity-90">
                          EXPLORE {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Footer Info */}
          <div className="px-6 py-6 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-muted-foreground space-y-4 md:space-y-0">
              <div className="space-y-1">
                <div>BASHAR ART HOUZ</div>
                <div>WHERE ART MEETS PASSION, TRADITION MEETS INNOVATION</div>
                <div>STUDIO × CAFE × GALLERY</div>
              </div>
              <div className="space-y-1 text-right">
                <div>CONTACT@BASHARTHOUZ.COM</div>
                <div>FOLLOW US ON SOCIAL MEDIA</div>
                <div>© 2025 BASHAR ART HOUZ</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HorizontalNavigation;