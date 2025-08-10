import { useEffect, useState } from 'react';

interface FooterMenuProps {
  scrollProgress: number;
}

const FooterMenu = ({ scrollProgress }: FooterMenuProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show footer menu when user has scrolled past 50% of the page
    setIsVisible(scrollProgress > 0.5);
  }, [scrollProgress]);

  const menuItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ROOTS', href: '#about' },
    { label: 'TERRITORY', href: '#studio' },
    { label: 'CREATIONS', href: '#cafe' },
    { label: 'EXPERIENCES', href: '#gallery' },
    { label: 'CONTACTS', href: '#contact' }
  ];

  return (
    <footer className={`fixed bottom-0 left-0 right-0 z-30 bg-card border-t border-border transition-transform duration-700 ease-out ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container mx-auto px-6 py-6">
        <nav className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {menuItems.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-sans tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 group"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                }}
              >
                {item.label}
                <div className="h-px w-0 bg-primary transition-all duration-300 group-hover:w-full mt-1"></div>
              </a>
            ))}
          </div>
        </nav>
        
        {/* Credits */}
        <div className="text-center mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground tracking-wider">
            © 2025 BASHAR ART HOUZ
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMenu;