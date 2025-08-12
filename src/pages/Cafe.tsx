import HorizontalNavigation from '@/components/HorizontalNavigation';
import { useState, useEffect } from 'react';

const Cafe = () => {
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
            Creations
          </h1>
          <h2 className="text-lg text-muted-foreground tracking-wider mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            CULINARY ART
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Where coffee becomes poetry and every cup is a masterpiece. Our cafe celebrates the art of slow brewing, premium beans, and the ritual of savoring each moment. Experience flavors that awaken the senses and inspire the soul.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-xl text-primary mb-4">Artisan Coffee</h3>
              <p className="text-muted-foreground text-sm">Hand-selected beans from around the world, roasted to perfection.</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-xl text-primary mb-4">Curated Pastries</h3>
              <p className="text-muted-foreground text-sm">Delicate pastries crafted by local artisans to complement our coffee.</p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-xl text-primary mb-4">Creative Atmosphere</h3>
              <p className="text-muted-foreground text-sm">A space designed to inspire creativity and meaningful conversations.</p>
            </div>
          </div>
          <div className="mt-12 p-8 bg-card rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h3 className="font-serif text-2xl text-primary mb-4">Signature Blends</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-foreground font-medium mb-2">Heritage Blend</h4>
                <p className="text-muted-foreground text-sm">A timeless combination of Ethiopian and Colombian beans with notes of chocolate and caramel.</p>
              </div>
              <div>
                <h4 className="text-foreground font-medium mb-2">Artist's Inspiration</h4>
                <p className="text-muted-foreground text-sm">A bold espresso blend with hints of dark fruit and a smooth, creamy finish.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cafe;