import { motion } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";
import ParallaxSection from "@/components/ParallaxSection";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/studio/studio-main.png";


const Contact = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="w-full bg-black text-white">
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
              Contact Us
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Lets Get in Touch. We would love to hear from you!
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>


      {/* Section 1 - What makes us a Mixture of all Three */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-neutral-900 border border-neutral-700 rounded-2xl shadow-lg">
            <CardContent className="p-10 space-y-6 text-gray-200">
              <AnimatedText
                className="text-3xl font-bold text-gold"
                text="What makes us a Mixture of all Three" />
              <p>
                At Artistic Workspace Cafe, we seamlessly blend the boundaries
                between art studio, art cafe, and art gallery, creating a vibrant
                and dynamic atmosphere that fosters creativity, collaboration,
                and community. By providing a comprehensive space that meets the
                needs of artists, art enthusiasts, and the local community, we aim
                to inspire and nurture the artistic spirit in everyone who visits
                us.
              </p>
              <p>
                At Bashar Art Houz, we proudly showcase a captivating gallery that
                embraces the world of art and creativity. Our gallery space serves
                as a platform for both emerging and established artists to exhibit
                their works and engage with art enthusiasts.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="py-20 px-6 md:px-20 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gold mb-10 text-center">
            Gallery Showcase
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card
                key={i}
                className="overflow-hidden bg-neutral-800 border border-neutral-700 rounded-2xl"
              >
                <CardContent className="p-0">
                  <div className="w-full h-60 bg-neutral-700 flex items-center justify-center text-gray-400">
                    Image {i + 1}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 - Closing Message */}
      <section className="py-20 px-6 md:px-20 bg-black">
        <div className="max-w-4xl mx-auto text-center space-y-6 text-gray-200">
          <p className="text-xl">
            Come and experience the unique blend of art, creativity, and
            community that is Bashar Art Houz.
          </p>
          <p className="text-lg">We can't wait to welcome you to our space!</p>
        </div>
      </section>

      {/* Section 3 - Social Media */}
      <section className="py-20 px-6 md:px-20 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center text-gray-300 space-y-4">
          <h2 className="text-2xl font-bold text-gold mb-6">Connect With Us</h2>
          <p>Facebook: @artisticworkspacecafe Bashararthouz</p>
          <p>Instagram: @artisticworkspacecafe Bashararthouz</p>
          <p>Twitter: @artisticworkspace Bashararthouz</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
