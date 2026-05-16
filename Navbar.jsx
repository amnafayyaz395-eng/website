// components/Navbar.jsx
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Collections', href: '/collections' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Journal', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: isScrolled ? 0 : 0 }}
        className={cn(
          'glassmorphism fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/20 px-8 py-4',
          isScrolled && 'shadow-luxury backdrop-blur-xl'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-playfair text-2xl bg-gradient-to-r from-aurea-gold to-amber-500 bg-clip-text text-transparent">
            AUREA SOLE
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="font-avenir text-sm uppercase tracking-wider text-white/80 hover:text-white transition-colors group"
                >
                  {item.name}
                  <span className="block h-px bg-gradient-to-r from-aurea-gold to-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left mt-1" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/collections">
              <Button variant="ghost" size="sm">Shop</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glassmorphism border-t border-white/20"
          >
            <ul className="py-8 space-y-4 px-8">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="block py-3 font-avenir text-lg"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;