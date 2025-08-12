import React, { useState, useEffect, useRef } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import LoadingScreen from "@/components/LoadingScreen";
import HorizontalNavigation from "@/components/HorizontalNavigation";
import Index from "./pages/Index";
import About from "./pages/About";
import Studio from "./pages/Studio";
import Cafe from "./pages/Cafe";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBottomNav, setShowBottomNav] = useState(false);

  const touchStartY = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Only activate scroll + swipe logic on home page
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      setShowBottomNav(scrollPosition > viewportHeight * 0.3);

      if (scrollPosition > viewportHeight * 0.5 && !isMenuOpen) {
        setIsMenuOpen(true);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY.current === null) return;
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - touchStartY.current;

      if (deltaY > 50 && !isMenuOpen) {
        setIsMenuOpen(true);
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = null;
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMenuOpen, location.pathname]);

  const handleLoadingComplete = () => setIsLoading(false);
  const handleBottomNavToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative min-h-screen">
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      <main
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Spacer for scroll effect only on home */}
        {location.pathname === "/" && (
          <div
            style={{
              backgroundColor: "black",
              height: isMenuOpen ? "0px" : "150vh",
              transition: "height 0.5s ease",
            }}
          ></div>
        )}
      </main>

      <HorizontalNavigation
        isExpanded={isMenuOpen}
        onToggle={handleBottomNavToggle}
      />
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
