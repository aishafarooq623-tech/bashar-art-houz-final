import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SectionPreview from '@/components/SectionPreview';
import FooterMenu from '@/components/FooterMenu';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Handle scroll for navigation and footer visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      
      setScrollProgress(progress);
      setIsNavVisible(scrollTop > window.innerHeight * 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleSectionClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        isVisible={isNavVisible} 
        onSectionClick={handleSectionClick}
      />
      
      <main>
        <div id="home">
          <HeroSection />
        </div>

        <div id="about">
          <SectionPreview
            title="Roots"
            subtitle="HERITAGE"
            description="Rooted in tradition, growing through innovation. Our story began generations ago with a passion for craftsmanship and an unwavering commitment to quality. Every piece tells a story of heritage, authenticity, and the timeless pursuit of artistic excellence."
            isVisible={scrollProgress > 0.1}
          />
        </div>

        <div id="studio">
          <SectionPreview
            title="Territory"
            subtitle="CREATIVE SPACE"
            description="A sanctuary for artists and dreamers. Our studio provides the perfect environment where creativity flourishes. From traditional techniques to contemporary innovations, we offer a space where art comes alive through skilled hands and passionate hearts."
            isVisible={scrollProgress > 0.3}
          />
        </div>

        <div id="cafe">
          <SectionPreview
            title="Creations"
            subtitle="CULINARY ART"
            description="Where coffee becomes poetry and every cup is a masterpiece. Our cafe celebrates the art of slow brewing, premium beans, and the ritual of savoring each moment. Experience flavors that awaken the senses and inspire the soul."
            isVisible={scrollProgress > 0.5}
          />
        </div>

        <div id="gallery">
          <SectionPreview
            title="Experiences"
            subtitle="ARTISTIC JOURNEY"
            description="Immerse yourself in a world where art transcends boundaries. Our gallery showcases both emerging and established artists, creating a dialogue between tradition and contemporary expression. Each exhibition is carefully curated to inspire and provoke thought."
            isVisible={scrollProgress > 0.7}
          />
        </div>

        <div id="contact" className="min-h-screen flex items-center justify-center">
          <div className="text-center px-6">
            <h2 className="font-serif text-5xl md:text-6xl text-foreground mb-6">
              Contacts
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">Visit us at our creative sanctuary</p>
              <div className="text-sm tracking-wider">
                <p>BASHAR ART HOUZ</p>
                <p>123 CREATIVE STREET</p>
                <p>ARTISTIC QUARTER</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterMenu scrollProgress={scrollProgress} />
    </div>
  );
};

export default Index;
