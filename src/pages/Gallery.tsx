import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedText from "@/components/AnimatedText";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxSection from "@/components/ParallaxSection";
import ParallaxSlideshow from "@/components/ParallaxSlideshow";
import { Phone, Mail, MapPin, Flower, TreePine, Coffee } from "lucide-react";

import heroImage from "@/assets/gallery/Hero Image-3.png"
import galleryImage1 from "@/assets/gallery/gallery1.png"
import galleryImage2 from "@/assets/gallery/gallery2.png"
import galleryImage3 from "@/assets/gallery/gallery3.png"
import galleryImage4 from "@/assets/gallery/gallery4.png"
import galleryImage5 from "@/assets/gallery/gallery5.png"
import galleryImage6 from "@/assets/gallery/gallery6.png"
import galleryImage7 from "@/assets/gallery/gallery7.png"
import galleryImage8 from "@/assets/gallery/gallery8.png"

import workshopImage1 from "@/assets/gallery/Bookfairworkshoppic1.png"
import workshopImage2 from "@/assets/gallery/Bookfairworkshoppic2.png"
import workshopImage3 from "@/assets/gallery/Ceramic pottery workshop.png"
import workshopImage4 from "@/assets/gallery/Leather craft workshop.png"
import workshopImage5 from "@/assets/gallery/Literary workshop.png"
import workshopImage6 from "@/assets/gallery/Painting Workshop.png"
import workshopImage7 from "@/assets/gallery/Plant workshop.png"
import workshopImage8 from "@/assets/gallery/Pottery Workshop.png"
import workshopImage9 from "@/assets/gallery/Sculpting Workshop.png"
import workshopImage10 from "@/assets/gallery/Terrarium Workshop.png"

import nature1 from "@/assets/nature/Floristry 1.jpg"
import nature2 from "@/assets/nature/Floristry 2.jpg"
import nature3 from "@/assets/nature/Floristry 3.jpg"
import nature4 from "@/assets/nature/Floristry 4.jpg"
import nature5 from "@/assets/nature/Nuresry 1.jpg"
import nature6 from "@/assets/nature/Nursery 2.jpg"
import nature7 from "@/assets/nature/Nursery 3.jpg"
import nature8 from "@/assets/nature/Nursery 4.jpg"

import wall1 from "@/assets/gallery/Wall 1.jpg"
import wall2 from "@/assets/gallery/Wall 2.jpg"
import wall3 from "@/assets/gallery/Wall 3.jpg"
import wall4 from "@/assets/gallery/Wall 4.png"
import wall5 from "@/assets/gallery/Workstation 1.png"
import wall6 from "@/assets/gallery/Workstation 2.png"


const Gallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  // Sample gallery images for the photo grid sections
  const galleryImages = [
    galleryImage1,
    galleryImage2,
    galleryImage3,
    galleryImage4,
    galleryImage5,
    galleryImage6,
    galleryImage7,
    galleryImage8,
  ];
  const workshopImages = [
    workshopImage1,
    workshopImage2,
    workshopImage3,
    workshopImage4,
    workshopImage5,
    workshopImage6,
    workshopImage7,
    workshopImage8,
    workshopImage9,
    workshopImage10,
  ];

  const naturesHavenImages = [
    nature1,
    nature2,
    nature3,
    nature4,
    nature5,
    nature6,
    nature7,
    nature8,
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section with Cinematic Parallax */}
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
              Gallery
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Where Local Artistry Meets Community
            </p>
          </ScrollReveal>
           <ScrollReveal direction="up" delay={0.6}>
            <Button size="lg" className="bg-white text-charcoal hover:bg-white/90 px-8 py-4 text-lg">
              Explore Our Work
            </Button>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* What Makes Us An Art Gallery Section */}
      <ParallaxSection className="py-32 px-6" speed={0.3}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedText
                  text="W H A T   M A K E S   U S"
                  className="text-xl text-gold/80 font-sans tracking-[0.3em] mb-4"
                  delay={0.5}
                />
                <AnimatedText
                  text="AN ART GALLERY"
                  className="text-5xl lg:text-5xl font-serif font-bold text-cream mb-8 tracking-[0.1em]"
                  delay={0.8}
                  stagger={0.08}
                />

                <div className="space-y-6 text-lg text-cream/85 leading-relaxed font-light">
                  <ScrollReveal delay={1.2}>
                    <p>
                      At Bashar Art Houz, we showcase the work of local and emerging artists, it is a space specifically designed to showcase artworks for public viewing. Galleries may represent individual artists or host group exhibitions, providing a platform for artists to present their work to potential buyers and the public. Galleries can vary in size and may focus on specific types of art, such as contemporary, modern, or traditional. Some galleries also hold opening receptions, artist talks, and events that foster a deeper connection between artists and the community.
                    </p>
                  </ScrollReveal>

                  <ScrollReveal delay={1.4}>
                    <p className="text-gold font-light">
                      Our mission is to provide a platform for talented artists to exhibit their creations, share their stories, and connect with our community.
                    </p>
                  </ScrollReveal>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <ParallaxSlideshow
                    images={[
                      wall5,
                      wall1,
                      wall2,
                      wall3,
                      wall4,
                      wall6
                    ]}
                    height="600px"
                  />
                  {/* <motion.img
                    src={heroImage}
                    alt="Art Gallery Interior"
                    className="w-full h-[600px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.2 }}
                    transition={{ duration: 0.5 }}
                  /> */}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Photo Gallery Grid Section - SPACES*/}
      <section className="py-32 px-6 bg-warm-grey/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.2}>
            <AnimatedText
              text="OUR SPACES"
              className="text-4xl font-serif font-bold text-center text-gold mb-20 tracking-[0.3em]"
              delay={0.3}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl group"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={image}
                    alt={`Gallery artwork ${index + 1}`}
                    className="w-full h-80 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Photo Gallery Grid Section  - WORKSHOPS*/}
      <section className="py-32 px-6 bg-warm-grey/20">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal delay={0.2}>
            <AnimatedText
              text="OUR WORKSHOPS"
              className="text-4xl font-serif font-bold text-center text-gold mb-20 tracking-[0.3em]"
              delay={0.3}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {workshopImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl group"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={image}
                    alt={`Gallery artwork ${index + 1}`}
                    className="w-full h-80 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ethical Approach Section */}
      <ParallaxSection className="py-32 px-6" speed={0.4}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <AnimatedText
              text="OUR ETHICAL APPROACH"
              className="text-6xl font-serif font-bold text-center text-cream mb-16 tracking-[0.2em]"
              delay={0.3}
              stagger={0.1}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="max-w-5xl mx-auto mb-16 text-center">
              <p className="text-xl text-cream/85 leading-relaxed font-light">
                At our gallery, we celebrate and honor the diverse talents of artists, artisans, laborers, and workers from all work categories. We believe that every form of creative and manual work holds intrinsic value and contributes to the rich tapestry of human expression.
              </p>
              <p className="text-xl text-cream/85 leading-relaxed font-light mt-6">
                We're committed to transparency, fair trade, and community engagement. Here are some key aspects of our ethical approach:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Artist-Centric",
                description: "We prioritize the artists' needs, ensuring they receive a fair share of the sales revenue. Our commission rates are lower than traditional galleries, allowing artists to retain more of their earnings."
              },
              {
                title: "Sustainable Practices",
                description: "We strive to minimize our environmental footprint by using eco-friendly materials, reducing waste, and promoting sustainable art practices."
              },
              {
                title: "Community-Driven",
                description: "Our gallery is designed to be a hub for the local art community. We host regular events, workshops, and exhibitions that foster connections between artists, art enthusiasts, and the broader community."
              },
              {
                title: "Diverse and Inclusive",
                description: "We actively seek out diverse and underrepresented voices in the art world. Our exhibitions feature a range of artistic mediums, styles, and perspectives, reflecting the richness of our local art scene."
              },
              {
                title: "Inclusivity",
                description: "We provide a platform for individuals from all backgrounds and professions to showcase their art and craftsmanship."
              },
              {
                title: "Valuing Work and Art",
                description: "We do not charge any fees for participation or exhibition because we deeply value the effort, skill, and creativity of each individual worker and artist."
              },
              {
                title: "Respect and Dignity",
                description: "We aim to uplift the work of every individual, recognizing their contributions as vital to society and culture."
              },
              {
                title: "Community and Collaboration",
                description: "Our space fosters a sense of community where art, work, and shared values come together to inspire and empower."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8 hover:border-gold/50 transition-all duration-700 group h-full">
                    <AnimatedText
                      text={`${index + 1}. ${item.title}`}
                      className="text-xl font-serif font-bold text-gold mb-4 tracking-[0.1em]"
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
      </ParallaxSection>

      {/* Mission Statement */}
      <section className="py-32 px-6 bg-gradient-to-b from-warm-grey/20 to-background">
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
                  text="OUR MISSION"
                  className="text-4xl font-serif font-bold text-gold mb-8 tracking-[0.1em]"
                  delay={0.3}
                  stagger={0.05}
                />

                <ScrollReveal delay={0.8}>
                  <p className="text-xl text-cream/85 leading-relaxed font-light mb-8">
                    To promote ethical appreciation of all forms of work and art, ensuring that every individual's effort is recognized and celebrated without commercial barriers. We believe that art and labor are fundamental human rights and deserve respect and acknowledgment.
                  </p>
                  <p className="text-lg text-cream/85 leading-relaxed font-light">
                    We connect you with a diverse range of artists, artisans, laborers, and workers across all categories. You can hire any individual you need, and we do not charge any commission or fees because we truly value and support art and craftsmanship.
                  </p>
                </ScrollReveal>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 text-center p-12">
              <AnimatedText
                text="GET IN TOUCH"
                className="text-3xl font-serif font-bold text-gold mb-8 tracking-[0.2em]"
                delay={0.3}
              />
              <div className="space-y-4 text-lg">
                <div className="flex items-center justify-center gap-4">
                  <Mail className="h-5 w-5 text-gold" />
                  <span className="text-cream/85">Email: info@bashararthouz.com/span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Phone className="h-5 w-5 text-gold" />
                  <span className="text-cream/85">Phone: +91 76988 10804</span>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <MapPin className="h-5 w-5 text-gold" />
                  <span className="text-cream/85">Address: HBR Bangalore</span>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* Nature's Haven Section */}
      <ParallaxSection className="py-32 px-6" speed={0.4}>
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Flower className="h-8 w-8 text-gold" />
                <AnimatedText
                  text="NATURE'S HAVEN"
                  className="text-5xl font-serif font-bold text-cream tracking-[0.2em]"
                  delay={0.3}
                />
                <TreePine className="h-8 w-8 text-gold" />
              </div>
              <p className="text-xl text-cream/85 mb-8 max-w-4xl mx-auto font-light leading-relaxed">
                A section in the Art Houz dedicated to Floristry and greenery. Fresh flowers, potted plants, and artistic botanical arrangements. It blends the calming vibe of nature with the Art Houz creative atmosphere.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 mb-12 p-8">
              <div className="text-lg text-cream/85 leading-relaxed space-y-6 font-light">
                <p>
                  This special corner of the Art Houz is designed as a blend of floristry and greenery, bringing together the charm of a flower shop and the freshness of a plant nursery. fresh cut flowers, artistic floral arrangements, and vibrant potted plants, displayed in a way that feels both inspiring and calming.
                </p>
                <p>
                  The corner offers more than just flowers and plants—it's a creative extension of the Art Houz spirit. The floral arrangements serve as living art pieces, while the nursery-style display of indoor plants, succulents, and herbs adds a natural touch of life to the space. Visitors can sip coffee surrounded by blooms, choose a bouquet for a loved one, or even pick a plant to take home, making the experience interactive and memorable.
                </p>
              </div>
            </Card>
          </ScrollReveal>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Flower className="h-6 w-6" />,
                title: "Flower Display Wall",
                description: "Seasonal fresh-cut flowers in minimalist stands or vases, doubling as living art."
              },
              {
                icon: <TreePine className="h-6 w-6" />,
                title: "Mini Plant Nursery",
                description: "A corner with shelves of small potted plants (succulents, bonsai, herbs, air plants) for sale."
              },
              {
                icon: <Coffee className="h-6 w-6" />,
                title: "Artistic Pots & Planters",
                description: "Locally crafted ceramic pots, hand-painted planters, or upcycled art-inspired containers."
              },
              {
                icon: <Flower className="h-6 w-6" />,
                title: "Workshops & DIY Kits",
                description: "Flower arrangement classes, 'paint your own pot' sessions, or herb-growing kits."
              },
              {
                icon: <Coffee className="h-6 w-6" />,
                title: "Integration with Café Menu",
                description: "Herbal teas made from the same plants grown, edible flowers as garnish, or fresh table décor."
              },
              {
                icon: <TreePine className="h-6 w-6" />,
                title: "Mood & Aesthetic",
                description: "A mix of natural light, earthy wooden textures, and subtle floral fragrance to blend art, coffee, and nature."
              }
            ].map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-6 hover:border-gold/50 transition-all duration-700 group h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-gold">{feature.icon}</div>
                      <h4 className="text-lg font-serif font-semibold text-gold">• {feature.title}</h4>
                    </div>
                    <p className="text-cream/80 font-light leading-relaxed">{feature.description}</p>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          {/* Nature's Haven Photo Grid */}
          <ScrollReveal delay={0.6}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {naturesHavenImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative overflow-hidden rounded-2xl group"
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={image}
                    alt={`Nature's Haven ${index + 1}`}
                    className="w-full h-64 object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 p-8 text-center">
              <p className="text-xl text-cream/85 leading-relaxed font-light">
                Ultimately, this space is not just a shop, but a haven where art, nature, and relaxation come together, inviting people to slow down, breathe in freshness, and feel inspired.
              </p>
            </Card>
          </ScrollReveal>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Gallery;
