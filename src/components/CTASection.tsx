import { useEffect, useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf, Mail, Phone, MessageCircle } from 'lucide-react';

export const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id.replace('contact-', '')]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(result.message);
        setFormData({ name: '', email: '', phone: '', requirements: '' }); // Clear form
      } else {
        setStatus('error');
        setMessage(result.message || 'An unknown error occurred.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Could not connect to the server. Please try again later.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white via-emerald-50 to-emerald-100 relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Elements */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Leaf 
              className="w-4 h-4 text-primary-foreground animate-float"
              style={{ 
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          </div>
        ))}
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent-warm/10 rounded-full blur-3xl" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: text */}
            <div className="text-left">
              {/* Icon */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center p-6 bg-primary-foreground/10 rounded-3xl backdrop-blur-sm border border-primary-foreground/20">
                  <Leaf className="w-12 h-12 text-primary-glow animate-float" />
                </div>
              </div>
              {/* Headline */}
              <h2 className="text-4xl md:text-7xl font-bold text-foreground mb-8 font-display leading-tight">
                Ready to Go
                <span className="block text-primary">Plastic-Free?</span>
              </h2>
              {/* Subheadline (moved above image) */}
              <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl leading-relaxed mb-6">
                Join thousands of eco-conscious individuals and businesses who have already made the sustainable switch with RK Industries.
              </p>
              {/* Illustrative Image with hover effects */}
              <div className="mb-8 inline-block group [perspective:1000px]">
                <img
                  src="/bag.png"
                  alt="Eco bag"
                  className="w-full max-w-md rounded-3xl shadow-elevated transition-transform duration-500 ease-out group-hover:scale-[1.04] group-hover:rotate-1"
                />
              </div>
            </div>
            {/* Right: form only */}
            <div>
              {/* Quick Contact Form */}
              <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/10 text-left">
                <h3 className="text-2xl font-bold text-foreground mb-6 font-display">Contact Us</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="col-span-1">
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="contact-name">Name</label>
                    <input id="contact-name" type="text" placeholder="Your full name" value={formData.name} onChange={handleChange} required className="w-full rounded-xl bg-white border border-foreground/10 px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  {/* Email */}
                  <div className="col-span-1">
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="contact-email">Email</label>
                    <input id="contact-email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} required className="w-full rounded-xl bg-white border border-foreground/10 px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div> 
                  {/* Phone */}
                  <div className="col-span-1">
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="contact-phone">Phone Number</label>
                    <input id="contact-phone" type="tel" placeholder="+1 555 123 4567" value={formData.phone} onChange={handleChange} className="w-full rounded-xl bg-white border border-foreground/10 px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  {/* Spacer for grid alignment */}
                  <div className="hidden md:block" />
                  {/* Requirements */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-foreground mb-2" htmlFor="contact-requirements">Tell us about your requirements</label>
                    <textarea id="contact-requirements" rows={5} placeholder="Bag types, quantities, custom printing needs, timelines..." value={formData.requirements} onChange={handleChange} required className="w-full rounded-xl bg-white border border-foreground/10 px-4 py-3 text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  {/* Submit */}
                  <div className="md:col-span-2">
                    <button type="submit" disabled={status === 'submitting'} className="w-full md:w-auto inline-flex items-center justify-center bg-primary hover:bg-primary-light text-primary-foreground font-bold px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.02] shadow-glow disabled:opacity-50 disabled:cursor-not-allowed">
                      {status === 'submitting' ? 'Submitting...' : 'Submit'}
                    </button>
                    {message && (
                      <p className={`mt-4 text-sm ${status === 'error' ? 'text-destructive' : 'text-primary'}`}>
                        {message}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
          {/* <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-primary-foreground/60">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary-glow rounded-full mr-2" />
              <span>Free Shipping Over $100</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary-glow rounded-full mr-2" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-primary-glow rounded-full mr-2" />
              <span>5-Year Durability Promise</span>
            </div>
          </div> */}
        </div>
    </section>
  );
};