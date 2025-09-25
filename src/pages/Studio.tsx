import { motion } from "framer-motion";
import { useRef } from "react";
import { Palette, Music, Camera, PenTool, Mic, icons, Landmark, WandSparkles, PencilRuler, Sofa, Brush, } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import heroImage from "@/assets/studio/studio-main.png";
import { Description } from "@radix-ui/react-toast";
import { title } from "process";

const Studio = () => {
  const containerRef = useRef(null);

  const studioSpaces = [
    {
      title: "Art & Literature",
      description:
        "A space where creativity blossoms and minds intertwine. Experience the captivating fusion of art and literature in a vibrant, community-driven atmosphere.",
      icon: Palette,
    },
    {
      title: "Design & Fashion",
      description:
        "Where artistry meets the runway — bringing together the latest trends, inspiring collections, and thought-provoking design.",
      icon: PenTool,
    },
    {
      title: "Photography",
      description:
        "Capturing the beauty of moments frozen in time through curated displays and collaborative sessions.",
      icon: Camera,
    },
    {
      title: "Music",
      description:
        "Live performances, intimate concerts, and curated playlists that create a melodic ambiance throughout the studio.",
      icon: Music,
    },
    {
      title: "Architecture",
      description: "A realm where vision becomes structure and ideas turn into landmarks. Experience the creative fusion of art and engineering in a vibrant, collaborative atmosphere.",
      icon: Landmark,
    },
    {
      title: "Makeup Artistry",
      description: "A space where beauty transforms into expression and creativity blossoms on every face. Join us to witness the artistry of colors, textures, and bold imagination.",
      icon: WandSparkles,
    },
    {
      title: "Leather Craft",
      description: "Timeless artistry stitched with passion. Explore the craftsmanship of leatherwork, Step into a community that celebrates the timeless elegance of handcrafted leather artistry.",
      icon: PencilRuler,
    },
    {
      title: "Interior Design",
      description: "A space where imagination meets ambiance. Join us in exploring how interiors reflect personality, comfort, and artistry in a community that celebrates design innovation.",
      icon: Sofa,
    },
    {
      title: "Painting",
      description: "Brushstrokes that echo visions and bring emotions to life. Step into a realm where colors speak louder than words and every canvas tells a story.",
      icon: Brush,
    },
    {
      title: "Sculpture",
      description: "A space where raw forms are shaped into timeless expressions. Discover how creativity blossoms when imagination meets material in a shared artistic spirit.",
      icon: Mic,
    }

  ];

  const amenities = [
    {
      title: "Visual Arts Studio",
      description:
        "Professional painting, drawing, and illustration studios with easels, natural lighting, and art supply storage.",
      features: ["Professional Easels", "Natural Lighting", "Ventilation Systems", "Art Supply Storage"],
      icon: Palette,
    },
    {
      title: "Music & Recording Studio",
      description:
        "Soundproof recording spaces equipped with professional instruments, recording gear, and mixing capabilities.",
      features: ["Recording Equipment", "Soundproof Rooms", "Instrument Library", "Mixing Boards"],
      icon: Mic,
    },
    {
      title: "Community Spaces",
      description:
        "Comfortable lounges, café, and exhibition areas designed for collaboration, relaxation, and showcasing talent.",
      features: ["High-Speed WiFi", "Cozy Lounges", "Specialty Café", "Exhibition Space"],
      icon: Camera,
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Hero */}
      {/* Hero Section */}
      <ParallaxSection
        className="min-h-screen flex items-center justify-center"
        image={heroImage}
      >
        {/* Floating Particles */}
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
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-playfair">
              Studio
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Where art comes to life — a creative haven for artists across all disciplines.
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Introduction */}
      <ParallaxSection className="py-24 px-6" speed={0.2}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="space-y-6 text-lg text-cream/85 leading-relaxed font-light">
              <AnimatedText
                text="What Makes Us an Art Studio?"
                className="text-3xl lg:text-4xl font-serif font-bold text-gold mb-6"
              />
              <p>
                At Bashar Art Houz, our studios are designed to inspire and support diverse artistic practices.
                From private spaces for individual expression to collaborative hubs, every studio is equipped
                with the tools and materials suited to each medium.
              </p>
              <motion.div
                className="bg-warm-grey/30 backdrop-blur-sm p-6 rounded-xl border-l-4 border-gold"
                whileHover={{ x: 6 }}
              >
                <p className="italic text-cream/95 text-lg">
                  “A space created to nurture imagination and celebrate creativity.”
                </p>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <motion.img
              src={heroImage}
              alt="Studio workspace"
              className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
            />
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Studio Spaces */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <AnimatedText
            text="Our Studio Spaces"
            className="text-4xl font-serif font-bold text-gold"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {studioSpaces.map((space, i) => (
            <motion.div
              key={i}
              className="bg-charcoal-light rounded-xl p-8 flex flex-col items-start transition-colors duration-300 hover:bg-brown"
              whileHover={{ y: -6 }}
            >
              <div className="w-12 h-12 rounded-full bg-brown flex items-center justify-center mb-6">
                <space.icon className="w-6 h-6 text-cream" />
              </div>
              <h3 className="text-xl font-bold text-cream mb-4">{space.title}</h3>
              <p className="text-cream/80 text-sm leading-relaxed">{space.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Facilities & Amenities */}
      <section className="py-24 bg-warm-grey/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <AnimatedText
              text="Facilities & Amenities"
              className="text-4xl font-serif font-bold text-gold"
            />
          </div>

          <div className="space-y-20">
            {amenities.map((item, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className={`${i % 2 === 0 ? "" : "lg:order-2"} space-y-6`}>
                    <item.icon className="w-12 h-12 text-gold" />
                    <h3 className="text-2xl font-serif font-bold text-cream">
                      {item.title}
                    </h3>
                    <p className="text-cream/85 font-light">{item.description}</p>
                    <ul className="grid grid-cols-2 gap-3 pt-4">
                      {item.features.map((feature, f) => (
                        <li key={f} className="flex items-center text-cream/75 text-sm">
                          <div className="w-2 h-2 bg-gold rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <motion.div
                    className="bg-charcoal/70 p-10 rounded-2xl border border-gold/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-cream/70 text-center italic">
                      Space designed for {item.title.toLowerCase()}.
                    </p>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* Community & Events */}
      <section className="py-24 px-6 bg-warm-grey/10">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <AnimatedText
            text="Community & Events"
            className="text-4xl font-serif font-bold text-gold"
          />
          <p className="max-w-4xl mx-auto text-lg text-cream/80 font-light leading-relaxed">
            Bashar Art Houz is more than a studio — it’s a thriving community. Through exhibitions, live
            performances, and hands-on workshops, we bring people together to share, learn, and celebrate
            creativity across all disciplines.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Studio;
