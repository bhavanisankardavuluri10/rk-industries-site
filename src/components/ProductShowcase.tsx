import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Recycle, Heart } from 'lucide-react';
import ecoCollection from '@/assets/eco-bags-collection.jpg';

interface Product {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const products: Product[] = [
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Jute Tote Bags",
    description: "Premium handwoven jute bags perfect for daily shopping and style.",
    features: ["100% Natural Jute", "Reinforced Handles", "Multiple Sizes", "Custom Printing"]
  },
  {
    icon: <Recycle className="w-8 h-8" />,
    title: "Non-Woven Bags",
    description: "Durable polypropylene alternatives that replace hundreds of plastic bags.",
    features: ["Waterproof", "Easy to Clean", "Lightweight", "Long-lasting"]
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Cotton Canvas",
    description: "Soft, organic cotton bags for the environmentally conscious consumer.",
    features: ["Organic Cotton", "Soft Touch", "Machine Washable", "Elegant Design"]
  }
];

export const ProductShowcase = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleItems(prev => new Set([...prev, index]));
              }, index * 200);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-24 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-display">
            Our Eco-Friendly Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our range of sustainable bags designed to replace plastic while elevating your style.
          </p>
        </div>

        {/* Hero Product Image */}
        <div className="mb-16 relative">
          <div className="rounded-3xl overflow-hidden shadow-elevated max-w-4xl mx-auto">
            <img 
              src={ecoCollection} 
              alt="RK Eco Bags Collection - Premium sustainable bags"
              className="w-full h-[400px] object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-organic opacity-20 rounded-3xl max-w-4xl mx-auto" />
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => itemRefs.current[index] = el}
              className={`group bg-card rounded-2xl p-8 shadow-earth hover:shadow-elevated transition-all duration-500 border border-border hover:border-primary-glow/30 ${
                visibleItems.has(index) ? 'animate-rotate-in' : 'opacity-0'
              }`}
            >
              {/* Icon */}
              <div className="mb-6 p-4 bg-primary-glow/10 rounded-2xl w-fit text-primary group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
                {product.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex}
                    className="flex items-center text-sm text-accent-foreground"
                  >
                    <div className="w-2 h-2 bg-primary-glow rounded-full mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-1 bg-gradient-earth rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to make the switch to sustainable bags?
          </p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center space-x-2 bg-primary-glow hover:bg-primary-light text-primary-foreground font-semibold px-6 py-3 rounded-full transition-colors"
          >
            <span>Order Now</span>
            <ShoppingBag className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};