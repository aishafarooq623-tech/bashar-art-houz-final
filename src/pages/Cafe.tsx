import ScrollReveal from "@/components/ScrollReveal";
import { motion, useScroll, useTransform } from "framer-motion";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedText from "@/components/AnimatedText";
import { Button } from "@/components/ui/button";
import { Coffee, Leaf, Heart, Users, Utensils, Recycle, Lightbulb, HandHeart } from "lucide-react";
import cafeImage from "@/assets/cafe/hero image-2.png"

const Cafe = () => {
  const ethicalPractices = [
    {
      icon: Utensils,
      title: "Menu Focus",
      description: "Feature a menu that emphasizes healthy, seasonal, and locally-sourced ingredients. Include options for various dietary preferences (vegan, gluten-free, paleo, etc.)"
    },
    {
      icon: Coffee,
      title: "Compostable Cups and Containers",
      description: "We use compostable cups, lids, and containers made from plant-based materials that can easily decompose and which are made by our local artisans at our foundation."
    },
    {
      icon: Recycle,
      title: "Recycling Program",
      description: "We have a thorough recycling program in place, ensuring that all paper, plastic, glass, and metal waste is properly sorted and recycled."
    },
    {
      icon: Leaf,
      title: "Food Waste Reduction",
      description: "We implement a food waste reduction strategy by planning our menu and inventory carefully, using up all ingredients, and donating excess food."
    },
    {
      icon: Lightbulb,
      title: "Energy-Efficient Equipment",
      description: "Our cafe is equipped with energy-efficient appliances, LED lighting, and eco-friendly equipment to minimize energy consumption."
    }
  ];

  const selfCookingFeatures = [
    {
      title: "Cold Cooking Options",
      description: "Include a salad bar with a variety of fresh greens, vegetables, proteins (like grilled chicken or tofu), and dressings, allowing guests to create their own salads or wraps."
    },
    {
      title: "Cooking Stations",
      description: "Offer grilling or pan-frying stations with healthy ingredients available (lean meats, fish, vegetables)."
    }
  ];

  const communityInitiatives = [
    {
      icon: HandHeart,
      title: "Pay-What-You-Can Model",
      description: "We offer a pay-what-you-can model for certain menu items, allowing customers to pay what they can afford, making healthy food more accessible to those in need."
    },
    {
      icon: Heart,
      title: "Free Meals for the Homeless",
      description: "We provide free meals for the homeless and those in need, using our excess food and resources."
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "We work with the foundation to provide food and support to low-income families, seniors, and other vulnerable populations."
    },
    {
      icon: Utensils,
      title: "Job Training and Placement",
      description: "We offer job training and placement programs for disadvantaged individuals, providing them with skills and opportunities to escape poverty."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <ParallaxSection
        className="min-h-screen flex items-center justify-center"
        image={cafeImage}
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
              Art Café
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Where creativity meets sustainability, and every cup tells a story of community and care
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.6}>
            <Button size="lg" className="bg-white text-charcoal hover:bg-white/90 px-8 py-4 text-lg">
              Explore Our Café
            </Button>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* What Makes Us An Art Cafe
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
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6 font-playfair">
              What Makes Us an Art Café
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At Bashar Art Houz, we serve a selection of specialty coffee drinks, teas, and delicious food
                  options with elements of art and creativity. These spaces feature artwork from local artists
                  on display, offer art-related events like painting nights, and allow patrons to enjoy food and
                  beverages while engaging in creative activities.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Art cafes often serve as community hubs where artists and art lovers can connect, socialize,
                  and inspire one another.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Combining an art café with self-cooking and cold cooking options designed for healthy eaters
                  creates a unique and engaging environment. The venue serves as a vibrant hub for creativity,
                  art appreciation, and healthy dining, encouraging patrons to engage in artistic activities
                  while enjoying nutritious, fresh food.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <Coffee className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">Specialty Drinks</h3>
                  <p className="text-sm text-muted-foreground">Artisanal coffee & tea selections</p>
                </div>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <Utensils className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">Healthy Options</h3>
                  <p className="text-sm text-muted-foreground">Fresh, nutritious food choices</p>
                </div>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <Users className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">Community Hub</h3>
                  <p className="text-sm text-muted-foreground">Where artists connect & create</p>
                </div>
                <div className="bg-card p-6 rounded-lg border space-y-4">
                  <Heart className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-semibold">Social Impact</h3>
                  <p className="text-sm text-muted-foreground">Supporting our community</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Photos Section */}
      <ParallaxSection className="py-24" image="/src/assets/book-collection.jpg">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal direction="scale" delay={0.2}>
            <h2 className="text-5xl font-bold text-white mb-8 font-playfair">
              Our Ethical Journey
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We're thrilled to share our approach to being an ethical cafe with zero wastage and our
              initiative to provide food offerings for the poor. We're committed to reducing our
              environmental footprint and we strongly believe that everyone deserves access to
              nutritious food, regardless of their financial situation.
            </p>
          </ScrollReveal>
        </div>
      </ParallaxSection>

      {/* Ethical Practices */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-playfair">
              Our Sustainable Practices
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Here are some ways we're achieving what we believe in
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ethicalPractices.map((practice, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <div className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow group">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                      <practice.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{practice.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{practice.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Cooking Stations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-playfair">
              Self-Cooking Stations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Implement self-cooking stations with equipment for patrons to prepare their meals
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {selfCookingFeatures.map((feature, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.2}>
                <div className="bg-card p-8 rounded-xl border">
                  <h3 className="text-2xl font-semibold mb-4 text-primary">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Initiatives */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-playfair">
              Community Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Making a difference in our community through sustainable practices and social responsibility
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {communityInitiatives.map((initiative, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 0.15}>
                <div className="bg-background p-8 rounded-xl border shadow-sm hover:shadow-lg transition-all group hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <initiative.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{initiative.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-playfair">
              Qurat-Al-Ain Bashar
            </h2>
            <h2 className="text-4xl font-bold text-foreground mb-6 font-playfair">
              Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We achieve our mission through our Qurat-Al-Ain Bashar Foundation, creating lasting
              positive impact in our community and beyond.
            </p>
          
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg" onClick={() => window.open("https://www.quratalainbashar.com", "_blank")}>
              Learn More About Our Foundation
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Cafe;
