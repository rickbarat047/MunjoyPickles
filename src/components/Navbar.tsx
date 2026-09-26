import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeView?: string;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'pickles', label: 'Collection' },
  { id: 'story', label: 'Story' },
  { id: 'craft', label: 'The Craft' },
  { id: 'journal', label: 'Journal' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeView = 'home' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen, setIsSearchOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#E8DFD5] py-3.5 shadow-xs'
            : 'bg-transparent py-5 sm:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Minimal Luxury Brand Wordmark */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('home');
              }}
              className="group flex flex-col focus:outline-hidden"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.22em] text-[#8B1E13] transition-colors group-hover:text-[#6E140B]">
                MUNJOY
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#7A6B5F] -mt-0.5 font-medium">
                Artisanal Pickles · Est. India
              </span>
            </a>
          </div>

          {/* Center: Refined Editorial Navigation Links with Framer Motion layoutId */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-[0.14em] uppercase text-[#3A3027]">
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1.5 transition-colors cursor-pointer focus:outline-hidden ${
                    isActive ? 'text-[#8B1E13] font-semibold' : 'text-[#3A3027] hover:text-[#8B1E13]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#8B1E13]"
                      transition={{
                        type: 'spring',
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Search Trigger */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search collection"
              className="p-1.5 text-[#3A3027] hover:text-[#8B1E13] transition-colors focus:outline-hidden cursor-pointer"
            >
              <Search className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>

            {/* Shopping Basket Trigger */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="View shopping bag"
              className="relative p-1.5 text-[#3A3027] hover:text-[#8B1E13] transition-colors focus:outline-hidden cursor-pointer flex items-center gap-1.5"
            >
              <ShoppingBag className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              <span className="text-xs font-semibold tabular-nums text-[#241E1A]">
                [{totalItems}]
              </span>
            </button>

            {/* Minimal Editorial CTA */}
            <button
              type="button"
              onClick={() => handleLinkClick('pickles')}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#FAF7F2] bg-[#8B1E13] hover:bg-[#6E140B] px-4 py-2 transition-all cursor-pointer shadow-2xs hover:shadow-xs"
            >
              <span>Order A Batch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-1.5 text-[#3A3027] hover:text-[#8B1E13] focus:outline-hidden cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#1F1813] text-[#FAF7F2] flex flex-col justify-between p-6 sm:p-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#3A2F27] pb-6">
              <div>
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-[#FAF7F2]">
                  MUNJOY
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#D97706] block mt-0.5">
                  Traditional Indian Pickles
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
                className="p-2 text-[#D4C9BC] hover:text-[#FAF7F2] cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-8 space-y-5 flex-1 flex flex-col justify-center">
              {[
                { id: 'home', label: '01. Home Overview' },
                { id: 'pickles', label: '02. The Pantry Collection' },
                { id: 'story', label: '03. Our Story & Philosophy' },
                { id: 'craft', label: '04. The 5-Step Discipline' },
                { id: 'journal', label: '05. The Munjoy Journal' },
                { id: 'contact', label: '06. Contact Our Kitchen' },
              ].map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left font-serif text-2xl sm:text-3xl transition-colors cursor-pointer ${
                    activeView === link.id ? 'text-[#D97706] font-semibold' : 'text-[#E8DFD5] hover:text-[#D97706]'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Bottom Footer Stamp */}
            <div className="border-t border-[#3A2F27] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A89A8E]">
              <p className="font-serif italic">
                “Traditional Indian pickle-making, crafted with care and made for today's generation.”
              </p>
              <div className="flex items-center gap-4">
                <span>Free delivery on orders ₹799+</span>
                <span>·</span>
                <span>Small-batch only</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
