import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface HorizontalNavigationProps {
  isVisible: boolean;
  onSectionClick?: (section: string) => void;
}

const HorizontalNavigation = ({ isVisible, onSectionClick }: HorizontalNavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const sections = [
    { id: 'home', label: 'HOME', subtitle: 'ROOTS', route: '/' },
    { id: 'about', label: 'About', subtitle: 'ROOTS', route: '/about' },
    { id: 'studio', label: 'Studio', subtitle: 'TERRITORY', route: '/studio' },
    { id: 'cafe', label: 'Cafe', subtitle: 'CREATIONS', route: '/cafe' },
    { id: 'gallery', label: 'Gallery', subtitle: 'EXPERIENCES', route: '/gallery' },
    { id: 'contact', label: 'Contact', subtitle: 'CONTACTS', route: '/contact' }
  ];

  const handleSectionClick = (section: any) => {
    navigate(section.route);
    setIsMenuOpen(false);
    if (onSectionClick) {
      onSectionClick(section.id);
    }
  };

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    if (!scrollRef.current) return;
    
    const container = scrollRef.current;
    const containerRect = container.getBoundingClientRect();
    const mouseX = e.clientX - containerRect.left;
    const containerWidth = containerRect.width;
    const scrollWidth = container.scrollWidth;
    const maxScroll = scrollWidth - containerWidth;
    
    // Calculate scroll position based on mouse position
    const scrollPosition = (mouseX / containerWidth) * maxScroll;
    container.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    
    setHoveredIndex(index);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl text-primary cursor-pointer" onClick={() => navigate('/')}>
            BASHAR ART HOUZ
          </div>
          
          <Button
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground hover:text-primary"
          >
            <span className="text-sm font-sans tracking-wider">
              {isMenuOpen ? 'CLOSE' : 'MENU'}
            </span>
          </Button>
        </div>
      </nav>

      {/* Horizontal Menu */}
      <div className={`fixed inset-0 z-50 bg-background transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="h-full flex flex-col">
          {/* Menu Header */}
          <div className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-border">
            <div className="font-serif text-2xl text-primary cursor-pointer" onClick={() => navigate('/')}>
              BASHAR ART HOUZ
            </div>
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(false)}
              className="text-foreground hover:text-primary"
            >
              <span className="text-sm font-sans tracking-wider">CLOSE</span>
            </Button>
          </div>

          {/* Horizontal Menu Content */}
          <div className="flex-1 flex items-center justify-center overflow-hidden">
            <div 
              ref={scrollRef}
              className="flex gap-8 px-12 overflow-x-auto horizontal-scroll"
              style={{ width: '100vw', paddingLeft: '50vw', paddingRight: '50vw' }}
            >
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="group cursor-pointer flex-shrink-0 animate-fade-in-up transition-all duration-500"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
                    opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.6 : 1
                  }}
                  onClick={() => handleSectionClick(section)}
                  onMouseMove={(e) => handleMouseMove(e, index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="w-80 h-96 bg-muted rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-gradient-to-b from-muted to-muted-foreground/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-sm text-muted-foreground mb-2">
                          00{index + 1}
                        </div>
                        <div className="text-xs text-muted-foreground tracking-wider">
                          {section.subtitle}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-300 text-center">
                    {section.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalNavigation;