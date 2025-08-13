import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Palette, Music, Camera, PenTool, Brush, Mic } from "lucide-react";
import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import heroImage from "@/assets/hero-background.jpg"

const Studio = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  const studioSpaces = [
    {
      title: "Art & Literature",
      description: "A space where creativity blossoms and minds intertwine. Join us to experience the captivating fusion of art and literature in a vibrant, community-driven atmosphere.",
      icon: Palette
    },
    {
      title: "Design & Fashion",
      description: "Our design and fashion corner at BWXAC brings together the latest trends, inspiring collections, and thought-provoking discussions, creating a hub where artistry meets the runway.",
      icon: PenTool
    },
    {
      title: "Photography",
      description: "Our appreciation for the art of photography is evident through displays of captivating images that capture the beauty of moments frozen in time.",
      icon: Camera
    },
    {
      title: "Music",
      description: "Live music performances, intimate concerts, and curated playlists create a melodious ambiance at BWXAC.",
      icon: Music
    }
  ];

  const artSupplies = [
    {
      category: "PAINTS & BRUSHES",
      items: ["Acrylic, oil, and watercolor paints", "Professional brush sets", "Canvas and paper", "Palette knives"],
      icon: "🖌️"
    },
    {
      category: "DRAWING & ILLUSTRATION",
      items: ["Graphite and charcoal pencils", "Professional markers", "Colored pencils", "Sketchbooks"],
      icon: "✏️"
    },
    {
      category: "PRINTMAKING",
      items: ["Screen printing equipment", "Etching tools", "Relief printing", "Specialty inks"],
      icon: "🖨️"
    },
    {
      category: "MUSIC INSTRUMENTS",
      items: ["Pianos and keyboards", "Guitars and amplifiers", "Drum sets", "Recording equipment"],
      icon: "🎹"
    }
  ];

  const amenities = [
    {
      title: "HIGH-SPEED INTERNET",
      description: "Fast and reliable Wi-Fi throughout the entire space for seamless creativity.",
      icon: "📶"
    },
    {
      title: "COMFORTABLE SPACES",
      description: "Cozy seating areas, lounges, and outdoor spaces to relax and socialize.",
      icon: "🛋️"
    },
    {
      title: "CAFE & BAR",
      description: "Specialty coffee drinks, teas, and a selection of snacks and light meals.",
      icon: "☕"
    },
    {
      title: "EXHIBITION SPACE",
      description: "Regular exhibitions, performances, and events showcasing members' work.",
      icon: "🖼️"
    },
    {
      title: "WORKSHOPS & CLASSES",
      description: "Ongoing workshops, classes, and lectures in various art forms and skills.",
      icon: "🎓"
    },
    {
      title: "COMMUNITY & NETWORKING",
      description: "Opportunities to connect with fellow artists and collaborate on projects.",
      icon: "🤝"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section with Cinematic Parallax */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: heroY,
            scale: heroScale,
            opacity: heroOpacity,
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal/95"></div>
        </motion.div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <AnimatedText
              text="STUDIO"
              className="text-8xl md:text-[12rem] font-serif font-bold text-cream mb-8 tracking-[0.3em]"
              delay={1}
              stagger={0.1}
            />
          </motion.div>

          <motion.div
            className="w-48 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 2 }}
          />

          <AnimatedText
            // text="W H E R E   A R T   C O M E S   T O   L I F E"
            text="WHERE ART COMES TO LIFE"
            className="text-2xl md:text-3xl text-cream/90 font-light tracking-[0.2em]"
            delay={2.5}
            stagger={0.03}
          />
        </div>

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
      </section>

      {/* Introduction Section */}
      <ParallaxSection className="py-32 px-6" speed={0.3}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <ScrollReveal direction="up" delay={0.2}>
              <AnimatedText
                // text="W H A T   M A K E S   U S"
                text="WHAT MAKES US"
                className="text-xl text-gold/80 font-sans tracking-[0.3em] mb-4"
                delay={0.3}
              />
              <AnimatedText
                // text="A N   A R T   S T U D I O ?"
                text="AN ART STUDIO?"
                className="text-6xl lg:text-7xl font-serif font-bold text-cream mb-12 tracking-[0.1em]"
                delay={0.6}
                stagger={0.08}
              />
            </ScrollReveal>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="space-y-8 text-lg text-cream/85 leading-relaxed font-light">
                <p>
                  At Bashar Art Houz, we offer a variety of art studios and workspaces for various art forms for
                  artists from different backgrounds. An art studio and workspace is where artists create their art.
                </p>

                <p>
                  This can be a private space for an individual artist or a shared studio where multiple artists work
                  together. Studios often have the necessary tools, materials, and equipment tailored to the
                  specific medium an artist uses.
                </p>

                <motion.div
                  className="bg-warm-grey/30 backdrop-blur-sm p-8 rounded-xl border-l-4 border-gold"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-cream/95 font-light italic text-xl leading-relaxed">
                    "Our space is designed to inspire and support artists in their diverse artistic practices."
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.6}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    src={heroImage}
                    alt="Art Studio Workspace"
                    className="w-full h-[500px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Community Section */}
      <section className="py-32 px-6 bg-warm-grey/10">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <AnimatedText
              text="A COMMUNITY FOR ALL"
              className="text-5xl font-serif font-bold text-cream mb-16 tracking-[0.2em]"
              delay={0.3}
              stagger={0.08}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="max-w-5xl mx-auto space-y-8 text-lg text-cream/85 leading-relaxed font-light">
              <p>
                A space for all artists and non-artists from different backgrounds. Here you see artists from
                different fields on one platform. The idea is to make a community of artists where we can come
                together, share our thoughts, experience and learn from each other.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-charcoal/50 backdrop-blur-sm p-12 rounded-2xl border border-gold/20"
              >
                <AnimatedText
                  // text="G A I N   N E W   P E R S P E C T I V E S"
                  text="GAIN NEW PERSPECTIVES"
                  className="text-3xl text-gold font-light font-medium tracking-[0.15em] mb-6"
                  delay={1}
                  stagger={0.03}
                />
                <p className="text-xl text-cream/90 font-light">
                  A community concerned with a focused pursuit of knowledge, self-improvement, and personal
                  development through education and discipline.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Studio Spaces Grid - New Design */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.2}>
            <AnimatedText
              // text="O U R   S T U D I O   S P A C E S"
              text="OUR STUDIO SPACES"
              className="text-5xl font-serif font-bold text-center text-gold mb-20 tracking-[0.2em]"
              delay={0.3}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {studioSpaces.map((space, index) => (
              <ScrollReveal key={index} delay={index * 0.15} direction="up">
                <motion.div
                  className="
                    relative p-12 rounded-2xl min-h-[400px] flex flex-col justify-between
                    bg-gradient-to-br from-charcoal/90 to-charcoal/60
                    backdrop-blur-sm border border-white/10
                    hover:scale-[1.02] transition-all duration-500 group
                    overflow-hidden
                  "
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.2 },
                    backgroundColor: "rgba(255, 215, 0, 0.5)"
                  }}
                >
                  {/* Hover overlay effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-warm-grey to-warm-grey/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-warm-grey/20 backdrop-blur-sm flex items-center justify-center mb-8 group-hover:bg-charcoal/20 transition-colors duration-500"
                      whileHover={{
                        rotate: 360,
                        scale: 1.1,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <space.icon
                        className="w-8 h-8 text-cream group-hover:text-charcoal transition-colors duration-500"
                      />
                    </motion.div>

                    <AnimatedText
                      text={space.title}
                      className="text-2xl font-serif font-bold mb-6 tracking-[0.05em] text-cream group-hover:text-charcoal transition-colors duration-500"
                      delay={0.5 + index * 0.1}
                    />
                  </div>

                  <ScrollReveal delay={0.7 + index * 0.1}>
                    <p className="font-light leading-relaxed text-base text-cream/85 group-hover:text-charcoal/80 transition-colors duration-500 relative z-10">
                      {space.description}
                    </p>
                  </ScrollReveal>

                  {/* Subtle decoration */}
                  <motion.div
                    className="absolute top-6 right-6 w-2 h-2 rounded-full bg-cream/30 group-hover:bg-charcoal/30 transition-colors duration-500"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Facilities - Alternating Layout */}
      <section className="py-32 px-6 bg-warm-grey/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.2}>
            <AnimatedText
              // text="E Q U I P M E N T   &   F A C I L I T I E S"
              text="EQUIPMENT & FACILITIES"
              className="text-5xl font-serif font-bold text-center text-gold mb-32 tracking-[0.2em]"
              delay={0.3}
            />
          </ScrollReveal>

          {/* Visual Arts */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <ScrollReveal direction="left" delay={0.4}>
              <div className="space-y-8">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-gold/20 to-warm-grey/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Palette className="w-8 h-8 text-gold" />
                </motion.div>

                <AnimatedText
                  text="VISUAL ARTS STUDIO"
                  className="text-3xl font-serif font-bold text-gold tracking-[0.1em]"
                  delay={0.6}
                />

                <p className="text-cream/85 font-light leading-relaxed text-lg">
                  Professional painting, drawing, and illustration studios equipped with easels,
                  natural lighting, and comprehensive art supply storage. Our spaces feature
                  proper ventilation systems and flexible workspace configurations.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  {["Professional Easels", "Art Supply Storage", "Natural Lighting", "Ventilation Systems"].map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center text-cream/70"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.6}>
              <motion.div
                className="relative bg-gradient-to-br from-charcoal/40 to-warm-grey/20 p-12 rounded-3xl backdrop-blur-sm border border-white/10"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {["Acrylic Paints", "Oil Paints", "Watercolors", "Professional Brushes", "Canvas & Paper", "Palette Knives"].map((item, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 bg-cream/5 rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <p className="text-cream/80 font-sans text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Music & Sound - Reversed Layout */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left" delay={0.4} className="lg:order-2">
              <div className="space-y-8">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-gold/20 to-warm-grey/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Mic className="w-8 h-8 text-gold" />
                </motion.div>

                <AnimatedText
                  text="MUSIC & RECORDING STUDIO"
                  className="text-3xl font-serif font-bold text-gold tracking-[0.1em]"
                  delay={0.6}
                />

                <p className="text-cream/85 font-sans leading-relaxed text-lg">
                  State-of-the-art soundproof recording studios with professional equipment,
                  instruments, and mixing capabilities. Perfect for individual practice,
                  collaborative sessions, and professional recordings.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  {["Recording Equipment", "Soundproof Rooms", "Instrument Library", "Mixing Boards"].map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center text-cream/70"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.6} className="lg:order-1">
              <motion.div
                className="relative bg-gradient-to-br from-warm-grey/20 to-charcoal/40 p-12 rounded-3xl backdrop-blur-sm border border-white/10"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {["Digital Audio Workstations", "Professional Microphones", "Studio Monitors", "MIDI Controllers", "Guitar Amplifiers", "Drum Kits"].map((item, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 bg-cream/5 rounded-xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                    >
                      <p className="text-cream/80 font-sans text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community Events & Workshops */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal delay={0.2}>
            <AnimatedText
              // text="E V E N T S   &   W O R K S H O P S"
              text="EVENTS & WORKSHOPS"
              className="text-5xl font-serif font-bold text-gold mb-16 tracking-[0.2em]"
              delay={0.3}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <p className="text-xl text-cream/85 font-light leading-relaxed max-w-4xl mx-auto mb-20">
              At Bashar Art Houz, we host a variety of exciting events that bring our community together
              and foster a vibrant atmosphere of creativity, learning, and connection. Our events are
              carefully curated to cater to different interests and passions.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Regular Exhibitions",
                description: "Showcasing members' work and guest artists in our dedicated gallery space.",
                icon: "🖼️"
              },
              {
                title: "Live Performances",
                description: "Music concerts, theater performances, and poetry readings in our black box theater.",
                icon: "🎭"
              },
              {
                title: "Educational Workshops",
                description: "Hands-on classes and lectures across various art forms and creative disciplines.",
                icon: "🎓"
              }
            ].map((event, index) => (
              <ScrollReveal key={index} delay={0.7 + index * 0.2} direction="up">
                <motion.div
                  className="space-y-6"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="text-6xl"
                    whileHover={{
                      rotate: [0, -15, 15, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {event.icon}
                  </motion.div>

                  <AnimatedText
                    text={event.title}
                    className="text-xl font-serif font-bold text-gold tracking-[0.05em]"
                    delay={0.9 + index * 0.2}
                  />

                  <p className="text-cream/80 font-light leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities - Horizontal Layout */}
      <section className="py-32 px-6 bg-warm-grey/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.2}>
            <AnimatedText
              // text="A M E N I T I E S   &   S E R V I C E S"
              text="AMENITIES & SERVICES"
              className="text-5xl font-serif font-bold text-center text-gold mb-20 tracking-[0.2em]"
              delay={0.3}
            />
          </ScrollReveal>

          <div className="space-y-16">
            {[
              {
                title: "HIGH-SPEED CONNECTIVITY & COMFORT",
                items: ["Fast and reliable Wi-Fi throughout", "Cozy seating areas and lounges", "Outdoor relaxation spaces"]
              },
              {
                title: "CAFE & SOCIAL SPACES",
                items: ["Specialty coffee and tea selection", "Light meals and snacks", "Community gathering areas"]
              },
              {
                title: "LEARNING & NETWORKING",
                items: ["Regular workshops and classes", "Artist networking events", "Collaborative project opportunities"]
              }
            ].map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction="up">
                <motion.div
                  className="bg-gradient-to-r from-charcoal/30 to-warm-grey/20 p-12 rounded-3xl backdrop-blur-sm border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid lg:grid-cols-4 gap-8 items-center">
                    <div className="lg:col-span-1">
                      <AnimatedText
                        text={category.title}
                        className="text-2xl font-serif font-bold text-gold tracking-[0.05em]"
                        delay={0.5 + index * 0.2}
                      />
                    </div>

                    <div className="lg:col-span-3 grid md:grid-cols-3 gap-6">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.2 + itemIndex * 0.1 }}
                        >
                          <div className="w-3 h-3 bg-gold rounded-full flex-shrink-0" />
                          <p className="text-cream/85 font-sans">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-warm-grey/20 to-background">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <AnimatedText
              // text="E V E N T S   &   E X H I B I T I O N S"
              text="EVENTS & EXHIBITIONS"
              className="text-5xl font-serif font-bold text-cream mb-16 tracking-[0.2em]"
              delay={0.3}
              stagger={0.08}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="max-w-5xl mx-auto">
              <motion.p
                className="text-xl text-cream/85 leading-relaxed font-light mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                At Bashar Art Houz, we host a variety of exciting events that bring our community together and
                foster a vibrant atmosphere of creativity, learning, and connection. Our events are carefully
                curated to cater to different interests and passions, offering something for everyone to enjoy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="bg-charcoal/40 backdrop-blur-sm p-12 rounded-2xl border border-gold/30"
              >
                <AnimatedText
                  // text="J O I N   O U R   C R E A T I V E   C O M M U N I T Y"
                  text="JOIN OUR CREATIVE COMMUNITY"
                  className="text-3xl text-gold font-light font-medium tracking-[0.15em] mb-6"
                  delay={1.5}
                  stagger={0.03}
                />
                <p className="text-lg text-cream/90 font-light leading-relaxed">
                  Regular exhibitions, performances, workshops, and networking events that showcase talent,
                  inspire creativity, and build lasting connections within our artistic community.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Studio;