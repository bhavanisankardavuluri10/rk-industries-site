import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Globe, Users, Leaf, TrendingUp, Heart } from 'lucide-react';

interface Stat {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
  color: string;
}

const stats: Stat[] = [
  {
    icon: <Globe className="w-6 h-6" />,
    value: "10000+",
    label: "Plastic Bags Replaced",
    description: "Every bag saves hundreds of plastic bags from polluting our planet.",
    color: "text-primary-glow"
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: "1000+",
    label: "Happy Customers",
    description: "Families and businesses worldwide trust RK for their eco-friendly needs.",
    color: "text-accent-warm"
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    value: "85%",
    label: "Carbon Footprint Reduced",
    description: "Compared to traditional plastic bag production and disposal.",
    color: "text-primary"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: "200+",
    label: "Partner Farmers",
    description: "Supporting sustainable agriculture and fair trade practices.",
    color: "text-secondary-dark"
  }
];

export const ImpactStats = () => {
  const [visibleStats, setVisibleStats] = useState<Set<number>>(new Set());
  const [counters, setCounters] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === statsRef.current) {
            // Animate all stats with staggered timing
            stats.forEach((_, index) => {
              setTimeout(() => {
                setVisibleStats(prev => new Set([...prev, index]));
                animateCounter(index);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounter = (statIndex: number) => {
    const stat = stats[statIndex];
    const numericValue = parseInt(stat.value.replace(/\D/g, '')) || 0;
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
      setCounters(prev => ({ ...prev, [statIndex]: Math.floor(current) }));
    }, duration / steps);
  };

  const formatValue = (statIndex: number, originalValue: string) => {
    const counter = counters[statIndex];
    if (counter === undefined) return "0";
    
    if (originalValue.includes('M+')) {
      return counter >= 1000000 ? `${(counter / 1000000).toFixed(1)}M+` : `${Math.floor(counter / 1000)}K+`;
    }
    if (originalValue.includes('K+')) {
      return counter >= 1000 ? `${Math.floor(counter / 1000)}K+` : `${counter}+`;
    }
    if (originalValue.includes('%')) {
      return `${counter}%`;
    }
    return `${counter}+`;
  };

  return (
    <section id="impact"
      ref={sectionRef}
      className="py-32 md:py-40 min-h-[80vh] bg-gradient-organic text-primary-foreground relative overflow-hidden"
      style={{
        backgroundImage: 'url("/background%20img.avif")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Leaves */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          >
            <Leaf 
              className="w-8 h-8 animate-float" 
              style={{ 
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.2}s`
              }}
            />
          </div>
        ))}
        
        {/* Glow Orbs */}
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-accent-warm/10 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-primary-foreground/10 rounded-2xl mb-6">
            <Heart className="w-8 h-8 text-primary-glow animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-display drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Our Environmental Impact
          </h2>
          <p className="text-xl md:text-2xl font-bold text-white max-w-3xl mx-auto leading-relaxed drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
            Together, we're creating measurable change for our planet. Here's the difference we're making, one bag at a time.
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 ${
                visibleStats.has(index) ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Card */}
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/30 hover:border-white/60 transition-all duration-500 hover:bg-white/30 group-hover:scale-105 shadow-lg">
                
                {/* Icon */}
                <div className="mb-6 p-4 bg-primary-foreground/10 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white drop-shadow-[0_0_8px_var(--icon-glow-color)]" style={{ '--icon-glow-color': `hsl(var(--${stat.color.replace('text-', '')}))` } as React.CSSProperties}>
                    {stat.icon}
                  </div>
                </div>

                {/* Value */}
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold font-display text-white drop-shadow-xl">
                    {formatValue(index, stat.value)}
                  </span>
                </div>

                {/* Label */}
                <h3 className="text-lg font-bold text-white mb-3 drop-shadow-lg">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-white leading-relaxed drop-shadow-md">
                  {stat.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100 shadow-lg" />
              </div>

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-white/30 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-500 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
      </div>
    </section>
  );

};