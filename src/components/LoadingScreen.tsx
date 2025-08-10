import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-background flex flex-col items-center justify-center transition-opacity duration-500 ${isComplete ? 'opacity-0' : 'opacity-100'}`}>
      {/* Brand Logo/Text */}
      <div className="text-center mb-16">
        <h1 className="font-serif text-6xl md:text-8xl text-primary animate-letter-spacing mb-4">
          BASHAR
        </h1>
        <div className="text-xl md:text-2xl text-spaced text-muted-foreground font-sans">
          ART HOUZ
        </div>
        <div className="text-sm text-extra-spaced text-muted-foreground mt-2 font-sans tracking-widest">
          STUDIO × CAFE × GALLERY
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-80 md:w-96 h-px bg-border mb-8">
        <div 
          className="h-full bg-primary transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Text */}
      <div className="text-sm text-muted-foreground font-sans tracking-wider">
        Loading {progress}%
      </div>
    </div>
  );
};

export default LoadingScreen;