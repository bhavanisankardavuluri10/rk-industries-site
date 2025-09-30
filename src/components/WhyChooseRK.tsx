import { useEffect, useRef, useState } from 'react';
import { Leaf, Shield, Palette, Star, CheckCircle } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "100% Eco-Friendly",
    description: "Made from renewable materials that biodegrade naturally without harming the environment.",
    benefits: ["Biodegradable materials", "Zero plastic waste", "Sustainable production", "Carbon neutral shipping"]
  },
 
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Fully Customizable", 
    description: "Express your brand with custom colors, logos, and designs that make your bags uniquely yours.",
    benefits: ["Custom printing", "Multiple sizes", "Brand colors", "Logo placement"]
  }
];

export const WhyChooseRK = () => {
  const [visibleFeatures, setVisibleFeatures] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = featureRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleFeatures(prev => new Set([...prev, index]));
              }, index * 200);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-glow/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-primary-glow/10 rounded-2xl mb-6">
            <Star className="w-8 h-8 text-primary-glow" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-display">
            Why Choose RK Industries?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just make bags—we craft sustainable solutions that align with your values and exceed your expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16 justify-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(el) => featureRefs.current[index] = el}
              className={`group relative transition-all duration-700 ${
                visibleFeatures.has(index) ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Card */}
              <div className="bg-card rounded-3xl p-8 shadow-earth hover:shadow-elevated transition-all duration-500 border border-border hover:border-primary-glow/30 h-full w-full max-w-md mx-auto">
                
                {/* Icon */}
                <div className="mb-6 p-4 bg-gradient-earth text-primary-foreground rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li 
                      key={benefitIndex}
                      className="flex items-center text-sm text-accent-foreground group-hover:text-foreground transition-colors duration-300"
                    >
                      <CheckCircle className="w-4 h-4 text-primary-glow mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Hover Gradient Bar */}
                <div className="mt-6 h-1 bg-gradient-earth rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left" />
              </div>

              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-earth opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="text-center bg-gradient-earth text-primary-foreground rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-foreground rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary-foreground rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-display">
              Join 10,000+ Happy Customers
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Who have already made the switch to sustainable, stylish, and durable eco-friendly bags.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              {/* <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>30-Day Guarantee</span>
              </div> */}
              <div className="flex items-center">
                <Leaf className="w-5 h-5 mr-2" />
                <span>Carbon Neutral</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};