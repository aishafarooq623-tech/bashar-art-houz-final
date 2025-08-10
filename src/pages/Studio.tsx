import HorizontalNavigation from '@/components/HorizontalNavigation';
import { useState, useEffect } from 'react';

const Studio = () => {
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
      <HorizontalNavigation isVisible={isNavVisible} />
      
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-6xl md:text-8xl text-primary mb-8 animate-fade-in-up">
            Territory
          </h1>
          <h2 className="text-lg text-muted-foreground tracking-wider mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            CREATIVE SPACE
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            A sanctuary for artists and dreamers. Our studio provides the perfect environment where creativity flourishes. From traditional techniques to contemporary innovations, we offer a space where art comes alive through skilled hands and passionate hearts.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-3xl text-primary mb-6">Creative Workshops</h3>
              <p className="text-muted-foreground mb-4">Immersive experiences where artists explore new techniques and push creative boundaries.</p>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• Traditional pottery and ceramics</li>
                <li>• Contemporary sculpture</li>
                <li>• Mixed media art</li>
                <li>• Digital art integration</li>
              </ul>
            </div>
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-3xl text-primary mb-6">Artist Residency</h3>
              <p className="text-muted-foreground mb-4">A dedicated space for emerging and established artists to develop their craft.</p>
              <ul className="text-left text-muted-foreground space-y-2">
                <li>• Private studio spaces</li>
                <li>• Mentorship programs</li>
                <li>• Community collaborations</li>
                <li>• Exhibition opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Studio;