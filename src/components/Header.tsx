import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
  className={`fixed w-full z-50 transition-all duration-300 ${
    isScrolled 
      ? 'py-3 bg-white/90 backdrop-blur-sm shadow-sm'
      : 'py-5 bg-transparent'
  }`}
>
  <div className="container-custom flex items-center justify-between">

    {/* LEFT SIDE */}
    <div className="flex items-center gap-3">
      {/* Logo */}
      <a href="#" className="flex items-center gap-3">
  <img
    src="/portfolio/profile.jpeg"
    alt="H S Vijay"
    className="w-8 h-8 rounded-full object-cover"
  />
  <span className="font-medium text-xl">H S Vijay</span>
</a>

      {/* Resume Button */}
      <a
<<<<<<< HEAD
  href="/portfolio/H_S_Vijay_Frontend_Developer_1.pdf"
=======
  href={`${import.meta.env.BASE_URL}H_S_Vijay_Frontend_Developer_1.pdf`}
>>>>>>> de1ffbfd62b842ecb494c6e9428c37e212e99f10
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white text-sm font-medium hover:bg-accent/90 transition"
>
  <Eye size={16} />
  Resume
</a>
    </div>

    {/* RIGHT SIDE (Desktop Menu) */}
    <div className="hidden md:flex items-center gap-6">
      <nav>
        <ul className="flex space-x-8 relative">
          {navItems.map((item) => (
            <li key={item.name} className="relative">
              <a
                href={item.href}
                className={`nav-link text-sm font-medium block pb-1 transition-colors ${
                  activeSection === item.id ? 'text-accent' : ''
                }`}
              >
                {item.name}
              </a>

              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30
                  }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      className="inline-flex items-center p-2 md:hidden text-primary-800"
      aria-expanded={isMobileMenuOpen ? "true" : "false"}
    >
      <span className="sr-only">Open main menu</span>
      {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>

  </div>

  {/* Mobile Navigation */}
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg"
    >
      <div className="container-custom py-4">
        <ul className="flex flex-col space-y-3">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="block py-2 nav-link text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )}
</header>
  );
};

export default Header;
