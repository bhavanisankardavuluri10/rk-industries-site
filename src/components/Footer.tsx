import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-warm rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="relative z-10 p-2 bg-gradient-to-br from-white/10 to-transparent rounded-2xl backdrop-blur-sm border border-white/20 hover:border-primary-glow/50 transition-all duration-500">
              <img
                src="/LOGO.png"
                alt="RK Eco Bags"
                className="w-16 h-16 object-contain transition-all duration-500 hover:scale-110 animate-fade-in-up drop-shadow-2xl"
              />
            </div>
              <span className="text-2xl font-bold font-display">RK Industries</span>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Leading the sustainable revolution with premium eco-friendly bags that don't compromise on style, durability, or environmental responsibility.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-primary-foreground/70">
                <Phone className="w-5 h-5 mr-3 text-primary-glow flex-shrink-0" />
                <a href="tel:+919573138858" className="text-sm hover:text-primary-glow transition-colors">
                  +91 95731 38858
                </a>
              </div>
              <div className="flex items-center text-primary-foreground/70">
                <Mail className="w-5 h-5 mr-3 text-primary-glow flex-shrink-0" />
                <a href="mailto:rkindustriespdp@gmail.com" className="text-sm hover:text-primary-glow transition-colors">
                  rkindustriespdp@gmail.com
                </a>
              </div>
              <div className="flex items-start text-primary-foreground/70 mt-4 pt-4 border-t border-primary-foreground/10">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-primary-glow rounded-full" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-semibold text-primary-foreground">Contact Person:</p>
                  <p className="text-sm">MR PV Rao</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Products', href: '#products' },
                { name: 'About', href: '#about' },
                { name: 'Impact', href: '#impact' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-glow transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-6 font-display">Support</h3>
            <ul className="space-y-3">
              {[
                'Order Tracking',
                'Return Policy',
                'Size Guide',
                'FAQ',
                'Care Instructions',
                'Wholesale Inquiry'
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/70 hover:text-primary-glow transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 py-8">
          
          {/* Social & Bottom Info */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/70 mr-4">Follow Us:</span>
              {[
                { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/_rk_industries_", label: "Twitter" },
                { icon: <Youtube className="w-5 h-5" />, href: "https://www.youtube.com/@R.K_INDUSTRIES_OFFICAL", label: "YouTube" },
                { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/rk_industries_offical/", label: "Instagram" },
                { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 bg-primary-foreground/10 rounded-lg text-primary-foreground/70 hover:text-primary-glow hover:bg-primary-foreground/15 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-6 text-xs text-primary-foreground/60">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary-glow rounded-full mr-2" />
                B-Corp Certified
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary-glow rounded-full mr-2" />
                Carbon Neutral
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-primary-glow rounded-full mr-2" />
                Fair Trade
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 RK Industries. All rights reserved to HacknCrafts. Made with Integrity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};