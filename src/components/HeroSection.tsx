import { useEffect, useState } from 'react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Main Logo */}
        <div className="mb-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
            <div className="text-primary-foreground font-serif text-xl">B</div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-primary mb-6 animate-fade-in-up">
          BASHAR ART HOUZ
        </h1>

        {/* Subtitle */}
        <div className="text-xl md:text-2xl text-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <span className="text-spaced">STUDIO</span>
          <span className="mx-4 text-primary">×</span>
          <span className="text-spaced">CAFE</span>
          <span className="mx-4 text-primary">×</span>
          <span className="text-spaced">GALLERY</span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          Where art meets passion, tradition meets innovation, and every cup tells a story. 
          Experience the authentic taste of our heritage in a space designed for creation and connection.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <div className="w-10 h-10 border border-current rounded-full flex items-center justify-center">
              <span className="text-sm">T</span>
            </div>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <div className="w-10 h-10 border border-current rounded-full flex items-center justify-center">
              <span className="text-sm">F</span>
            </div>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <div className="w-10 h-10 border border-current rounded-full flex items-center justify-center">
              <span className="text-sm">I</span>
            </div>
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
            <div className="w-10 h-10 border border-current rounded-full flex items-center justify-center">
              <span className="text-sm">L</span>
            </div>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;