import HorizontalNavigation from '@/components/HorizontalNavigation';
import { useState, useEffect } from 'react';

const Contact = () => {
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
            Contacts
          </h1>
          <h2 className="text-lg text-muted-foreground tracking-wider mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            GET IN TOUCH
          </h2>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            Visit us at our creative sanctuary. Experience art, culture, and community in the heart of the artistic quarter.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="text-left">
              <h3 className="font-serif text-2xl text-primary mb-6">Location</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-lg">BASHAR ART HOUZ</p>
                <p>123 Creative Street</p>
                <p>Artistic Quarter</p>
                <p>Cultural District</p>
              </div>
              
              <h3 className="font-serif text-2xl text-primary mb-6 mt-12">Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 10:00 AM - 9:00 PM</p>
                <p>Sunday: 11:00 AM - 6:00 PM</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="font-serif text-2xl text-primary mb-6">Contact Information</h3>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h4 className="text-foreground font-medium">General Inquiries</h4>
                  <p>hello@bashararthouz.com</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium">Gallery & Exhibitions</h4>
                  <p>gallery@bashararthouz.com</p>
                  <p>+1 (555) 123-4568</p>
                </div>
                <div>
                  <h4 className="text-foreground font-medium">Studio Rentals</h4>
                  <p>studio@bashararthouz.com</p>
                  <p>+1 (555) 123-4569</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 p-8 bg-card rounded-lg border border-border animate-fade-in-up" style={{ animationDelay: '800ms' }}>
            <h3 className="font-serif text-2xl text-primary mb-6">Connect With Us</h3>
            <p className="text-muted-foreground mb-6">
              Follow our journey and stay updated with the latest exhibitions, workshops, and artistic events.
            </p>
            <div className="flex justify-center space-x-8 text-muted-foreground">
              <span className="hover:text-primary transition-colors cursor-pointer">Instagram</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Facebook</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Twitter</span>
              <span className="hover:text-primary transition-colors cursor-pointer">Newsletter</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;