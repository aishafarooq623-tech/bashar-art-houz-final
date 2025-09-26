import { motion } from "framer-motion";
import { useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import { Card, CardContent } from "@/components/ui/card";
import ParallaxSection from "@/components/ParallaxSection";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/about/about-hero.jpg";

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
                            Let’s Get in Touch. We would love to hear from you!
                        </p>
                    </ScrollReveal>
                </div>
            </ParallaxSection>

            {/* Reservation Banner */}
            <section className="py-16 bg-neutral-900 text-center">
                <ScrollReveal direction="up">
                    <p className="text-lg text-gray-300 mb-6">
                        Strictly a workspace entry by reservation only. Book your time slot:
                    </p>
                    <Button
                        size="lg"
                        className="bg-[#a5755f] hover:bg-[#8c5f4d] text-white px-8 py-4 text-lg"
                    >
                        <Phone className="mr-2 h-5 w-5" /> Call for Booking
                    </Button>
                </ScrollReveal>
            </section>

            {/* Contact Info + Map Section */}
            <section className="py-20 px-6 md:px-20 bg-black">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Info */}
                    <div className="space-y-10">
                        <ScrollReveal direction="left">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-neutral-800 rounded-full">
                                    <MapPin className="h-6 w-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-1">Location</h3>
                                    <p className="text-gray-400">
                                        No. 208/J, HBR Layout 2nd Block, 1st Stage,
                                        <br />
                                        Bengaluru, Karnataka 560043
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={0.2}>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-neutral-800 rounded-full">
                                    <Mail className="h-6 w-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-1">Email</h3>
                                    <p className="text-gray-400">hello@bwxac.com</p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal direction="left" delay={0.4}>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-neutral-800 rounded-full">
                                    <Phone className="h-6 w-6 text-gold" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-xl mb-1">Call</h3>
                                    <p className="text-gray-400">+91 81478 44020</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Map */}
                    <ScrollReveal direction="right">
                        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-neutral-800">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.726762302356!2d77.6229!3d13.0289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17470b64e5e9%3A0xabcdef!2sHBR%20Layout!5e0!3m2!1sen!2sin!4v1695739200000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Contact;
