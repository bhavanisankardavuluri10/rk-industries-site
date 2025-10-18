import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Sprout, ShoppingBag, Globe, Users, Award, TreePine } from 'lucide-react';

interface TimelineStep {
  icon: ReactNode;
  title: string;
  description: string;
  metric: string;
  value: string;
}

const timelineSteps: TimelineStep[] = [
  {
  icon: <TreePine className="w-6 h-6" />,
  title: "Eco Material Sourcing",
  description: "We use 100% biodegradable and compostable raw materials sourced from certified eco-friendly suppliers.",
  metric: "Sustainable Materials Used",
  value: "5+ Types"
},
{
  icon: <Sprout className="w-6 h-6" />,
  title: "Green Manufacturing",
  description: "Our advanced zero-waste production ensures every biodegradable bag is made with minimal carbon emissions.",
  metric: "Carbon Footprint Reduction",
  value: "85%"
},
{
  icon: <ShoppingBag className="w-6 h-6" />,
  title: "Eco Durability",
  description: "Designed for strength and reliability — every bag is durable, reusable, and safe for the environment after disposal.",
  metric: "Reusability",
  value: "1000+ Uses"
},
{
  icon: <Globe className="w-6 h-6" />,
  title: "Planet Impact",
  description: "With every biodegradable bag, we reduce plastic waste and move closer to a cleaner, greener planet.",
  metric: "Plastic Bags Replaced",
  value: "10000+"
}
];

export const SustainabilityTimeline = () => {
  const [visibleSteps, setVisibleSteps] = useState<Set<number>>(new Set());
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleSteps(prev => new Set([...prev, index]));
                // Start counter animation
                animateCounter(index);
              }, index * 300);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const animateCounter = (stepIndex: number) => {
    const step = timelineSteps[stepIndex];
    const numericValue = parseInt(step.value.replace(/\D/g, '')) || 0;
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      setCounters(prev => ({ ...prev, [stepIndex]: Math.floor(current) }));
    }, duration / steps);
  };

  const formatValue = (stepIndex: number, originalValue: string) => {
    const counter = counters[stepIndex];
    if (counter === undefined) return "0";
    
    if (originalValue.includes('+')) {
      return `${counter.toLocaleString()}+`;
    }
    if (originalValue.includes('%')) {
      return `${counter}%`;
    }
    if (originalValue.includes('Years')) {
      return `${counter} Years`;
    }
    return counter.toLocaleString();
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-surface to-primary/5 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-primary-glow/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-accent-warm/8 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-display">
            Our Sustainability Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From seed to bag to a better world. Follow our commitment to environmental responsibility at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-glow via-primary to-accent-warm" />
          
          {/* Steps */}
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                ref={(el) => stepRefs.current[index] = el}
                className={`relative flex flex-col md:flex-row items-start md:items-center transition-all duration-1000 ${
                  visibleSteps.has(index) ? 'animate-slide-in-left' : 'opacity-0'
                } ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-primary-glow rounded-full shadow-glow flex-shrink-0 z-10" />
                
                {/* Content */}
                <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                  <div className="bg-card rounded-2xl p-8 shadow-earth border border-border group hover:shadow-elevated transition-all duration-300">
                    
                    {/* Icon & Title */}
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary-glow/10 rounded-xl text-primary mr-4 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground font-display">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Metric */}
                    <div className="flex items-center justify-between bg-primary-glow/5 rounded-xl p-4">
                      <span className="text-sm font-medium text-accent-foreground">
                        {step.metric}
                      </span>
                      <span className="text-2xl font-bold text-primary-glow">
                        {formatValue(index, step.value)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Side Icons (Desktop) */}
                <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'pl-16' : 'pr-16'}`}>
                  <div className="text-center">
                    {index === 0 && <TreePine className="w-16 h-16 mx-auto text-primary-glow/30 animate-float" />}
                    {index === 1 && <Sprout className="w-16 h-16 mx-auto text-primary-glow/30 animate-float" style={{ animationDelay: '0.5s' }} />}
                    {index === 2 && <Award className="w-16 h-16 mx-auto text-primary-glow/30 animate-float" style={{ animationDelay: '1s' }} />}
                    {index === 3 && <Users className="w-16 h-16 mx-auto text-primary-glow/30 animate-float" style={{ animationDelay: '1.5s' }} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16 bg-gradient-earth text-primary-foreground rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-3 font-display">Together, We're Making a Difference</h3>
          <p className="text-lg opacity-90">
            Every bag you choose helps build a more sustainable future for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
};