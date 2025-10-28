import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import heroImage from "@/assets/about/about-hero.jpg";
import bodyImage1 from "@/assets/about/about1.jpg"
import bodyImage2 from "@/assets/about/about2.jpg"
import bodyImage3 from "@/assets/about/about3.png"

import basharPortrait from "@/assets/potrait.png"
import bookCollection from "@/assets/books.png"
import ParallaxSlideshow from "@/components/ParallaxSlideshow";

import LiterattureHeroImage from "@/assets/literature/Hero Image.png"
import lit1 from "@/assets/literature/Bookstore 1.png"
import lit2 from "@/assets/literature/Bookstore 2.png"
import lit3 from "@/assets/literature/Bookstore 3.png"
import lit4 from "@/assets/literature/Cozy Reading Nook 1.1.png"
import lit5 from "@/assets/literature/Cozy Reading Nook 1.2.png"
import lit6 from "@/assets/literature/Cozy Reading Nook 1.png"
import lit7 from "@/assets/literature/Reading Nook 1.png"
import lit8 from "@/assets/literature/Cozy Reading Nook 1.1.png"
import lit9 from "@/assets/literature/Cozy Reading Nook 1.2.png"

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section (Borrowed from Cafe styling) */}
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
              About Us
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
The artist playground.           </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.6}>
            <Button size="lg" className="bg-white text-charcoal hover:bg-white/90 px-8 py-4 text-lg">
              Explore Our Roots
            </Button>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Introduction Section */}
      <ParallaxSection className="py-32 px-6" speed={0.3}>
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          {/* Text Section */}
          <ScrollReveal direction="up" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <AnimatedText
                text="W E L C O M E   T O"
                className="text-xl text-gold/80 font-sans tracking-[0.3em] mb-4"
                delay={0.5}
              />
              <AnimatedText
                text="BASHAR ART HOUZ"
                className="text-5xl lg:text-6xl font-serif font-bold text-cream mb-8 tracking-[0.1em]"
                delay={0.8}
                stagger={0.08}
              />

              <div className="space-y-6 text-lg text-cream/85 leading-relaxed font-light max-w-3xl mx-auto">
                <ScrollReveal delay={1.2}>
                  <p>
                    Bashar Art Houz "The Artist's Playground" is an innovative space where you can escape, explore
                    and unleash your creativity. Whether you're an artist, writer, entrepreneur, or simply someone
                    looking for a dose of inspiration, this new Houz is designed to nurture your imagination and
                    spark new ideas.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={1.4}>
                  <p>
                    We're thrilled to introduce ourselves as a unique space that combines a cafe with a workspace –
                    studio and gallery catering to all art forms.
                  </p>
                </ScrollReveal>

                <ScrollReveal delay={1.6}>
                  <p>
                    Bashar Art Houz can be defined as a workspace for everyone with or without an art background who have an intense passion for learning art literature and have an admiration for different forms of art. It is about exploring art together and sharing our experiences with other artworks.{" "}
                    <span className="text-gold italic">
                      THIS IS WHY BASHAR ART HOUZ IS INCLUSIVE – "Everyone with or without a background in art is welcome."
                    </span>
                  </p>
                </ScrollReveal>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Image Section */}
      <ParallaxSlideshow
        images={[
          bodyImage1,
          bodyImage2,
          bodyImage3
        ]}
        height="500px"
      />
      {/* Philosophy Cards */}
      <section className="py-32 px-6 bg-warm-grey/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.2}>
            <AnimatedText
              text="OUR SPACES"
              className="text-4xl font-serif font-bold text-center text-gold mb-20 tracking-[0.3em]"
              delay={0.3}
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "ART STUDIO",
                description: "A workspace - studio for artists to create",
                icon: "🎨",
                delay: 0.1
              },
              {
                title: "ART CAFE",
                description: "A casual environment blending food, drinks, and art experiences",
                icon: "☕",
                delay: 0.2
              },
              {
                title: "ART GALLERY",
                description: "A curated space for displaying and making art and work available to the public",
                icon: "🖼️",
                delay: 0.3
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={item.delay} direction="up">
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-10 hover:border-gold/50 transition-all duration-700 group h-full">
                    <motion.div
                      className="text-5xl mb-6"
                      whileHover={{
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      {item.icon}
                    </motion.div>

                    <AnimatedText
                      text={item.title}
                      className="text-2xl font-serif font-bold text-gold mb-6 tracking-[0.15em]"
                      delay={0.5 + index * 0.1}
                    />

                    <ScrollReveal delay={0.7 + index * 0.1}>
                      <p className="text-cream/80 font-light leading-relaxed">
                        {item.description}
                      </p>
                    </ScrollReveal>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section >
      {/* Mission Section */}
      {/* < section className="py-32 px-6 bg-gradient-to-b from-warm-grey/20 to-background" >
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <AnimatedText
              text="OUR MISSION"
              className="text-6xl font-serif font-bold text-cream mb-16 tracking-[0.2em]"
              delay={0.3}
              stagger={0.1}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="max-w-5xl mx-auto space-y-8">
              <motion.p
                className="text-2xl text-cream/85 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Bashar Art Houz can be defined as a workspace for everyone with or without an art background
                who have an intense passion for learning art literature and have an admiration for different
                forms of art. It is about exploring art together and sharing our experiences with other artworks.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <AnimatedText
                  // text="T H I S   I S   W H Y   B A S H A R   A R T   H O U Z   I S   I N C L U S I V E"
                  text="THIS IS WHY BASHAR ART HOUZ IS INCLUSIVE "
                  className="text-3xl text-gold font-sans font-medium tracking-[0.15em] mt-12"
                  delay={1.5}
                  stagger={0.02}
                />
                <p className="text-xl text-cream/90 mt-6 font-light italic tracking-wider">
                  "Everyone with or without a background in art is welcome."
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section >  */}

      {/* Founder Section */}
      {/* < ParallaxSection className="py-32 px-6" image={basharPortrait} speed={0.4} > */}
      < ParallaxSection className="py-32 px-6" speed={0.4} >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={basharPortrait}
                    alt="BASHAR - Founder"
                    className="w-full h-[700px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-charcoal/30"></div>
                  {/* <motion.div
                    className="absolute bottom-8 left-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <AnimatedText
                      text="B A S H A R"
                      className="text-4xl font-serif font-bold text-cream tracking-[0.2em] mb-2"
                      delay={0.8}
                    />
                    <p className="text-gold font-sans tracking-[0.1em]">F O U N D E R  &  V I S I O N A R Y</p>
                  </motion.div> */}
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3}>
              <div>
                <AnimatedText
                  text="F R O M   T H E"
                  className="text-xl text-gold/80 font-sans tracking-[0.3em] mb-4"
                  delay={0.5}
                />
                <AnimatedText
                  text="F O U N D E R"
                  className="text-6xl font-serif font-bold text-cream mb-12 tracking-[0.1em]"
                  delay={0.8}
                  stagger={0.1}
                />

                <div className="space-y-8 text-lg text-cream/85 leading-relaxed font-light">
                  <ScrollReveal delay={1.2}>
                    <p>
                      I'm BASHAR the founder of Bashar Art Houz. Over the years, I have dedicated myself to honing a
                      diverse set of passions—blending the roles of an artist, athlete, and altruist. These experiences
                      have shaped who I am and inspired the creation of this space.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={1.4}>
                    <p>
                      As an artist, I value creativity, expression, and the beauty of ideas. My athletic background has
                      taught me discipline, resilience, and a commitment to continuous growth. And as an altruist, I
                      believe in giving back, fostering community, and making a positive impact on those around me.
                    </p>
                    &nbsp;
                  </ScrollReveal>
                  <ScrollReveal delay={1.4}>
                    By combining the transformative power of art with the benefits of
                    athleticism and altruism, this concept not only enriches lives but also fosters a culture of
                    creativity, well-being, community connection and over all human welfare.
                    Bashar Art Houz with being an artistic Houz also focuses on the concept of Athleticism and
                    Altruism. An innovative space that harmoniously blends creativity, athleticism, and altruism.
                    Our Art Café, Art Studio, and Art Gallery serve as a vibrant hub for artists, athletes, and the
                    community, promoting artistic vision, physical well-being, and social good. This unique concept
                    aims to inspire individuals to express themselves artistically while also fostering a healthy
                    lifestyle and a commitment to social causes.
                    <span className="text-gold italic"> <p>
                      Humanitarian commitment is fulfilled through our Qurat-Al-Ain Bashar foundation an initiative
                      yet again by BASHAR which simply stands on the fundamental principle of “The Art of giving.”
                    </p></span>
                  </ScrollReveal>

                  {/* Scroller text thingy  */}

                  {/* <ScrollReveal delay={1.6}>
                    <motion.div
                      className="bg-warm-grey/30 backdrop-blur-sm p-8 rounded-xl border-l-4 border-gold"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-cream/95 font-light italic text-xl leading-relaxed">
                        "Bashar represents a holistic approach to nurturing the artistic spirit, physical health and human
                        welfare of the community."
                      </p>
                    </motion.div>
                  </ScrollReveal> */}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection >

      {/* Book Collection */}
      < ParallaxSection className="py-32 px-6" speed={0.3} >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <AnimatedText
                  text="B I B L I O P H I L E ' S"
                  className="text-xl text-gold/80 font-sans tracking-[0.3em] mb-4"
                  delay={0.3}
                />
                <AnimatedText
                  text="HAVEN"
                  className="text-6xl font-serif font-bold text-cream mb-12 tracking-[0.1em]"
                  delay={0.6}
                  stagger={0.1}
                />

                <div className="space-y-8 text-lg text-cream/85 leading-relaxed font-light">

                  <ScrollReveal delay={1.4}>
                    <p>
                      Bibliophile’s Haven is a thoughtfully designed corner of the Art Houz, dedicated entirely to book
                      lovers and curious minds. This cozy literary nook blends the Art Houz creative atmosphere with
                      the timeless charm of books, offering guests a sanctuary where words, stories, and ideas come
                      alive.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={1.4}>
                    <p>
                      Here, shelves are filled with a curated collection of novels, poetry, short stories, and journals —
                      inviting visitors to pick up a book while sipping their favorite brew. Comfortable seating, soft
                      lighting, and a tranquil ambiance encourage slow reading, quiet reflection, or even shared
                      discussions about literature.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={1.4}>
                    <p>
                      More than just a reading space, Bibliophile’s Haven is an experience: a place where coffee
                      meets chapters, where writers find inspiration, and where readers escape into new worlds.
                      Whether guests want to lose themselves in a story, jot down thoughts in a journal, or simply
                      enjoy the calming presence of books, this haven is designed to nurture imagination and spark
                      creativity.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={1.4}>
                    <p>
                      At Bashar Art Houz, we have a diverse selection of books, spanning various genres and subjects.
                      Our collection is meticulously curated to include both popular titles and hidden gems, ensuring
                      there's something for every reader. From fiction to non-fiction, classics to contemporary works,
                      we prioritize inclusivity and aim to represent diverse voices and perspectives.
                      Additionally, we have sections dedicated to different languages this not only caters to
                      multilingual individuals but also fosters a multicultural and inclusive atmosphere.
                    </p>
                  </ScrollReveal>
                  {/* <ScrollReveal delay={1.4}>
                    <div className="flex flex-wrap gap-4 mt-10">
                      {['Fiction', 'Non-Fiction', 'Art History', 'Philosophy', 'Poetry', 'Multilingual'].map((genre, index) => (
                        <motion.span
                          key={index}
                          className="px-6 py-3 bg-warm-grey/30 backdrop-blur-sm text-gold border border-gold/30 rounded-full font-sans text-sm tracking-[0.1em] hover:bg-gold hover:text-charcoal transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {genre}
                        </motion.span>
                      ))}
                    </div>
                  </ScrollReveal> */}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <motion.img
                    src={LiterattureHeroImage}
                    alt="Book Collection"
                    className="w-full h-[500px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gold/20"
                    initial={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection >
      <ParallaxSlideshow
        images={[
          lit1,
          lit2,
          lit3,
          lit4,
          lit5,
          lit6,
          lit7,
          lit8,
          lit9
        ]}
        height="500px"
      />

      {/* Foundation Section */}
      {/* < section className="py-32 px-6 bg-gradient-to-t from-warm-grey/20 to-background" >
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <Card className="bg-card/60 backdrop-blur-xl border-gold/30 p-16 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"
                animate={{
                  x: [-200, 200, -200],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="relative z-10">
                <AnimatedText
                  text="QURAT-AL-AIN BASHAR FOUNDATION"
                  className="text-4xl font-serif font-bold text-gold mb-8 tracking-[0.1em]"
                  delay={0.3}
                  stagger={0.05}
                />

                <ScrollReveal delay={0.8}>
                  <p className="text-xl text-cream/85 leading-relaxed font-light mb-8">
                    Humanitarian commitment is fulfilled through our Qurat-Al-Ain Bashar foundation - an initiative
                    by BASHAR which simply stands on the fundamental principle of:
                  </p>
                </ScrollReveal>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <AnimatedText
                    text='"THE ART OF GIVING"'
                    className="text-5xl text-gold font-serif font-bold tracking-[0.2em]"
                    delay={1.5}
                    stagger={0.08}
                  />
                </motion.div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section > */}

      {/* Call to Action */}
      < section className="py-32 px-6" >
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <AnimatedText
              text="JOIN OUR COMMUNITY"
              className="text-6xl font-serif font-bold text-cream mb-12 tracking-[0.15em]"
              delay={0.3}
              stagger={0.08}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <p className="text-2xl text-cream/85 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
              Become part of a space where creativity, athleticism, and altruism converge to inspire and transform lives.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={1.2}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gold text-charcoal hover:bg-gold-light font-sans text-lg px-12 py-4 tracking-[0.1em]"
                >
                  VISIT US TODAY
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gold/50 text-gold hover:bg-gold hover:text-charcoal font-sans text-lg px-12 py-4 tracking-[0.1em] backdrop-blur-sm"
                >
                  LEARN MORE
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </section >
    </div >
  );
};

export default About;
