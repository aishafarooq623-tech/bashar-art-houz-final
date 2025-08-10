import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  isVisible: boolean;
  onSectionClick: (section: string) => void;
}

const Navigation = ({ isVisible, onSectionClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'HOME', subtitle: 'ROOTS' },
    { id: 'about', label: 'About', subtitle: 'ROOTS' },
    { id: 'studio', label: 'Studio', subtitle: 'TERRITORY' },
    { id: 'cafe', label: 'Cafe', subtitle: 'CREATIONS' },
    { id: 'gallery', label: 'Gallery', subtitle: 'EXPERIENCES' },
    { id: 'contact', label: 'Contact', subtitle: 'CONTACTS' }
  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-sm border-b border-border transition-transform duration-500 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl text-primary">
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

      {/* Full Screen Menu */}
      <div className={`fixed inset-0 z-50 bg-background transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="h-full flex flex-col">
          {/* Menu Header */}
          <div className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-border">
            <div className="font-serif text-2xl text-primary">
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

          {/* Menu Content */}
          <div className="flex-1 container mx-auto px-6 py-12">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-primary mb-4">Menu page</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="group cursor-pointer animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
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
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
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

export default Navigation;