import { useEffect, useState } from 'react';

interface SectionPreviewProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl?: string;
  isVisible: boolean;
}

const SectionPreview = ({ title, subtitle, description, imageUrl, isVisible }: SectionPreviewProps) => {
  return (
    <section className={`min-h-screen flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="text-sm text-primary tracking-wider font-sans">
              {subtitle}
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-foreground">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>
            <div className="pt-4">
              <div className="inline-block border-b border-primary pb-1">
                <span className="text-sm tracking-wider text-primary">
                  DISCOVER MORE
                </span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
            {imageUrl ? (
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="font-serif text-2xl text-muted-foreground mb-2">
                    {title}
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wider">
                    {subtitle}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionPreview;