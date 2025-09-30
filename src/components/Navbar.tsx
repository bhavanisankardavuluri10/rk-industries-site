import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'Products', href: 'products' },
  { name: 'About', href: 'about' },
  { name: 'Impact', href: 'impact' },
  { name: 'Contact', href: 'contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.href));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3 relative">
            {/* Main Logo */}
            <div className="relative z-10">
              <img
                src="/LOGO.png"
                alt="RK Eco Bags"
                className="w-20 h-20 object-contain transition-all duration-500 hover:scale-110 animate-grow drop-shadow-2xl"
              />
            </div>

            {/* Text with Glow */}
            <div className="relative z-10">
              <span
                className={`text-2xl font-bold transition-all duration-300 animate-fade-in-up ${scrolled
                    ? 'text-foreground'
                    : 'text-primary-glow drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                  }`}
                style={{ animationDelay: '0.2s' }}
              >
                RK Industries
              </span>
              {/* Subtle underline effect */}
              <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-glow to-transparent opacity-60 animate-pulse" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.href}`}
                className={`relative transition-all duration-300 font-medium text-lg ${scrolled ? 'text-foreground' : 'text-white'} ${activeSection === item.href ? 'text-primary-glow drop-shadow-[0_0_5px_hsl(var(--primary-glow))]' : 'hover:text-primary-glow hover:drop-shadow-[0_0_5px_hsl(var(--primary-glow))]'}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${activeSection === item.href ? 'text-primary-glow bg-primary/10' : 'text-foreground hover:text-primary-glow hover:bg-primary/5'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
