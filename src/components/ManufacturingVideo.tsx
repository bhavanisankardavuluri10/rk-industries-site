import { useEffect, useState } from 'react';
import { Play, Factory } from 'lucide-react';

export const ManufacturingVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('manufacturing-video');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="manufacturing-video"
      className="py-24 bg-gradient-to-b from-background via-primary-glow/5 to-background relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-glow rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent-warm rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center p-6 bg-primary-glow/10 rounded-3xl backdrop-blur-sm border border-primary-glow/20 mb-8">
            <Factory className="w-12 h-12 text-primary-glow animate-float" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 font-display">
            How We Make Our
            <span className="block text-primary-glow">Biodegradable Bags</span>
          </h2>

          {/* Description */}
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed">
              Take a behind-the-scenes look at our eco-friendly manufacturing process.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Every W-cut, D-cut, grocery, and garbage bag is produced in our own facility using sustainable materials and advanced compostable technology.
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
              From raw material to finished product — see how we turn innovation into biodegradable solutions that protect our planet.
            </p>
          </div>
        </div>

        {/* Video Container */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative group">
            {/* Video wrapper with decorative border */}
            <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-primary-glow/20 bg-gradient-to-br from-primary-glow/10 to-accent-warm/10 p-2">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] md:aspect-video">
                {/* YouTube Embed */}
                <iframe
                  src="https://www.youtube.com/embed/BfTWtin9z_g?si=SwbvkEIO7QN0Oxy1"
                  title="How We Make Our Biodegradable Bags"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  onLoad={() => setIsPlaying(true)}
                />

                {/* Loading overlay */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary to-primary-glow">
                    <div className="text-center text-white">
                      <Play className="w-20 h-20 mx-auto mb-4 animate-pulse" />
                      <p className="text-lg font-semibold">Loading video...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary-glow rounded-tl-3xl opacity-50" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-primary-glow rounded-br-3xl opacity-50" />
          </div>

          {/* CTA below video */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Want to learn more about our sustainable manufacturing?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-glow"
            >
              <Factory className="w-5 h-5" />
              Get in Touch
            </a>
          </div>
        </div>

        {/* Process highlights */}
        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            {
              icon: '🌱',
              title: 'Sustainable Materials',
              description: 'Using 100% biodegradable and compostable raw materials',
            },
            {
              icon: '⚙️',
              title: 'Advanced Technology',
              description: 'State-of-the-art machinery for precision manufacturing',
            },
            {
              icon: '♻️',
              title: 'Zero Waste Process',
              description: 'Complete recycling and reuse of production materials',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-primary-glow/10 hover:border-primary-glow/30 transition-all duration-300 hover:shadow-elevated group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-display">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
