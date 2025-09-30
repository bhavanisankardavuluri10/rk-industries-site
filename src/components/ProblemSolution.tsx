import { useEffect, useRef, useState } from 'react';
import { Trash2, Leaf, ArrowRight } from 'lucide-react';
import { QuotesCarousel } from './QuotesCarousel';

export const ProblemSolution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<'problem' | 'transition' | 'solution'>('problem');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Phase transitions
          setTimeout(() => setPhase('transition'), 1000);
          setTimeout(() => setPhase('solution'), 2500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-surface to-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          
          {/* Problem Side */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${
            phase === 'problem' ? 'opacity-100 scale-100' : 
            phase === 'transition' ? 'opacity-50 scale-95' : 
            'opacity-20 scale-90'
          }`}>
            <div className="mb-8">
              <Trash2 className="w-20 h-20 text-destructive mx-auto lg:mx-0 animate-pulse" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
              The Problem
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-destructive">500 billion</strong> plastic bags are used worldwide each year.
              </p>
              <p className="leading-relaxed">
                They take <strong className="text-destructive">1000+ years</strong> to decompose, polluting our oceans and harming wildlife.
              </p>
              <p className="leading-relaxed">
                Every minute, a garbage truck full of plastic enters our oceans.
              </p>
            </div>
          </div>

          {/* Transition Arrow */}
          <div className={`flex justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2 z-10 transition-all duration-1000 ${
            phase === 'transition' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}>
            <div className="bg-primary text-primary-foreground rounded-full p-6 shadow-glow animate-pulse-glow">
              <ArrowRight className="w-8 h-8" />
            </div>
          </div>

          {/* Solution Side */}
          <div className={`text-center lg:text-right transition-all duration-1000 ${
            phase === 'solution' ? 'opacity-100 scale-100' : 
            phase === 'transition' ? 'opacity-50 scale-95' : 
            'opacity-20 scale-90'
          }`}>
            <div className="mb-8">
              <Leaf className="w-20 h-20 text-primary-glow mx-auto lg:ml-auto lg:mr-0 animate-float" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-display">
              Our Solution
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="leading-relaxed">
                <strong className="text-primary">100% sustainable</strong> jute and non-woven bags that are durable and reusable.
              </p>
              <p className="leading-relaxed">
                <strong className="text-primary">Biodegradable</strong> materials that return safely to the earth.
              </p>
              <p className="leading-relaxed">
                Together, we're creating a <strong className="text-primary-glow">plastic-free future</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        {phase === 'solution' && (
          <div className="mt-16 animate-fade-in-up">
            <QuotesCarousel />
          </div>
        )}
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary-glow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-accent-warm/10 rounded-full blur-3xl" />
    </section>
  );
};