import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Leaf, ChevronDown } from 'lucide-react';
import heroTexture from '@/assets/hero-jute-texture.jpg';

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const quotes = [
    "Choose reusable, not disposable.",
    "Sustainability starts with small choices.",
    "Carry change. Carry jute.",
    "Style that respects the earth.",
    "Better bags. Better planet.",
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const typeMs = 45;
  const deleteMs = 24;
  const holdMs = 1400;
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Typewriter for quotes
  useEffect(() => {
    const current = quotes[quoteIndex % quotes.length];
    if (!deleting && typed.length < current.length) {
      const t = setTimeout(() => setTyped(current.slice(0, typed.length + 1)), typeMs);
      return () => clearTimeout(t);
    }
    if (!deleting && typed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), holdMs);
      return () => clearTimeout(t);
    }
    if (deleting && typed.length > 0) {
      const t = setTimeout(() => setTyped(current.slice(0, typed.length - 1)), deleteMs);
      return () => clearTimeout(t);
    }
    if (deleting && typed.length === 0) {
      setDeleting(false);
      setQuoteIndex((i) => (i + 1) % quotes.length);
    }
  }, [typed, deleting, quoteIndex, quotes]);

  // Letter-by-letter headline renderer
  const renderAnimatedText = (text: string) => (
    <span aria-label={text} className="inline-block">
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className={`inline-block ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-3'}`}
          style={{ animationDelay: `${i * 35}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroTexture})`,
          filter: 'brightness(0.4) contrast(1.1)'
        }}
      />
      
      {/* Animated Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary-glow/30 rounded-full animate-float`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 text-center text-primary-foreground px-6 max-w-4xl mx-auto">
        {/* Animated Logo Image */}
        <div className="mb-8">
          <img
            src="/LOGO.png"
            alt="Logo"
            className={`mx-auto w-[260px] h-[260px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] object-contain transition-all duration-1200 ${
              isLoaded ? 'animate-logo-flip-outside-in' : 'opacity-0 scale-0'
            }`}
            onAnimationEnd={(e) => {
              if (e.animationName === 'logo-flip-outside-in') {
                // After flip in, start the flip out animation after a delay
                setTimeout(() => {
                  (e.target as HTMLElement).style.animation = 'animate-logo-flip-to-text 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards';
                }, 2000);
              }
            }}
          />
        </div>

        {/* Main Headline */}
        <div className="space-y-6">
          <h1 
            className={`text-5xl md:text-7xl font-extrabold font-display leading-tight ${
              isLoaded ? '' : 'opacity-0'
            }`}
          >
            {renderAnimatedText("Bags That Don't")}
            <span className="block text-primary-glow">{renderAnimatedText("Cost the Earth")}</span>
          </h1>
          
          <p 
            className={`text-xl md:text-2xl text-accent/90 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            Discover premium eco-friendly bags crafted from sustainable materials. 
            Beautiful, durable, and kind to our planet.
          </p>
          
          <div 
            className={`mt-12 transition-all duration-1000 delay-700 ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
          >
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary-glow hover:bg-primary-light text-primary-foreground font-semibold px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-glow animate-pulse-glow"
            >
              Explore Products
              <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Rotating Typewriter Quotes */}
          <div 
            className={`mt-10 text-lg md:text-xl text-primary-foreground/90 font-mono tracking-tight h-8 transition-all duration-700 ${
              isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
            }`}
            aria-live="polite"
          >
            <span>{typed}</span>
            <span className={`ml-1 inline-block w-2 ${deleting ? 'opacity-40' : 'opacity-90'} bg-primary-foreground`} style={{ height: '1em' }} />
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-primary-glow/70" />
      </div>
    </section>
  );
};