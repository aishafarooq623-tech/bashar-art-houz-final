import HorizontalNavigation from '@/components/HorizontalNavigation';
import { useState, useEffect } from 'react';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      
      setScrollProgress(progress);
      setIsNavVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background animate-page-slide">
      {/* Navigation removed - handled by App.tsx */}
      
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-6xl md:text-8xl text-primary mb-8 animate-fade-in-up">
            Roots
          </h1>
          <h2 className="text-lg text-muted-foreground tracking-wider mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            HERITAGE
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Rooted in tradition, growing through innovation. Our story began generations ago with a passion for craftsmanship and an unwavering commitment to quality. Every piece tells a story of heritage, authenticity, and the timeless pursuit of artistic excellence.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-2xl text-primary mb-4">Heritage</h3>
              <p className="text-muted-foreground">Generations of artistic tradition passed down through skilled hands and passionate hearts.</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-2xl text-primary mb-4">Authenticity</h3>
              <p className="text-muted-foreground">Every creation reflects genuine artistry and authentic craftsmanship values.</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-2xl text-primary mb-4">Excellence</h3>
              <p className="text-muted-foreground">Unwavering commitment to quality in every detail and every creation.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;