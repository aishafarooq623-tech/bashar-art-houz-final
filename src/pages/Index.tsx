import { useState, useEffect } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import HorizontalNavigation from '@/components/HorizontalNavigation';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Handle scroll for navigation visibility and menu reveal
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      
      setScrollProgress(progress);
      setIsNavVisible(scrollTop > window.innerHeight * 0.3);
      setShowMenu(scrollTop > window.innerHeight * 0.7);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <HorizontalNavigation 
        isVisible={showMenu} 
      />
      
      <main>
        <div className="min-h-screen">
          <HeroSection />
        </div>
        
        {/* Spacer for scroll to reveal menu */}
        <div className="h-screen"></div>
      </main>
    </div>
  );
};

export default Index;
