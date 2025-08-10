import HorizontalNavigation from '@/components/HorizontalNavigation';
import { useState, useEffect } from 'react';

const Gallery = () => {
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
            Experiences
          </h1>
          <h2 className="text-lg text-muted-foreground tracking-wider mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            ARTISTIC JOURNEY
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Immerse yourself in a world where art transcends boundaries. Our gallery showcases both emerging and established artists, creating a dialogue between tradition and contemporary expression. Each exhibition is carefully curated to inspire and provoke thought.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-2xl text-primary mb-6">Current Exhibition</h3>
              <h4 className="text-foreground font-medium mb-4">"Echoes of Heritage"</h4>
              <p className="text-muted-foreground mb-4">A stunning collection that explores the intersection of traditional craftsmanship with contemporary artistic vision.</p>
              <p className="text-sm text-muted-foreground">Featured Artists: Maria Santos, Ahmed Al-Rashid, Elena Kozlova</p>
            </div>
            <div className="p-8 bg-card rounded-lg border border-border">
              <h3 className="font-serif text-2xl text-primary mb-6">Upcoming Events</h3>
              <div className="space-y-4 text-left">
                <div>
                  <h4 className="text-foreground font-medium">Artist Talk Series</h4>
                  <p className="text-sm text-muted-foreground">Monthly conversations with featured artists</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium">Workshop Weekends</h4>
                  <p className="text-sm text-muted-foreground">Hands-on creative experiences for all levels</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium">Opening Receptions</h4>
                  <p className="text-sm text-muted-foreground">Celebrate new exhibitions with the community</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Featured Artwork 1</span>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Featured Artwork 2</span>
              </div>
            </div>
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Featured Artwork 3</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;