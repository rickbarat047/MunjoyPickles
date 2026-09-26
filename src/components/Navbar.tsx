import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeView?: string;
}

const navLinks = [
  { id: 'home', label: 'Overview' },
  { id: 'statement', label: 'Philosophy' },
  { id: 'ingredient', label: 'Ingredients' },
  { id: 'process', label: 'The Craft' },
  { id: 'collection', label: 'Collection' },
  { id: 'table', label: 'The Table' },
  { id: 'journal', label: 'Journal' },
  { id: 'contact', label: 'Kitchen' },
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

  const isDarkNav = activeView === 'home' && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#F3EBDD]/92 backdrop-blur-md py-4 border-b border-[#1E0F0A]/10 shadow-xs'
            : activeView === 'home'
            ? 'bg-transparent py-6 sm:py-8'
            : 'bg-[#F3EBDD]/92 backdrop-blur-md py-5 border-b border-[#1E0F0A]/10'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">
          
          {/* Brand Wordmark: Editorial High-Contrast Serif */}
          <button
            onClick={() => handleLinkClick('home')}
            className="group text-left focus:outline-hidden cursor-pointer"
          >
            <span
              className={`font-serif text-2xl sm:text-3xl font-bold tracking-[0.28em] block transition-colors ${
                isDarkNav
                  ? 'text-[#F3EBDD] group-hover:text-[#D69B2D]'
                  : 'text-[#1E0F0A] group-hover:text-[#7D2418]'
              }`}
            >
              MUNJOY
            </span>
            <span
              className={`text-[9px] uppercase tracking-[0.32em] block -mt-0.5 font-medium transition-colors ${
                isDarkNav ? 'text-[#D69B2D]' : 'text-[#7D2418]'
              }`}
            >
              Indian Pickle Co. · Est. Heritage
            </span>
          </button>

          {/* Minimal Floating Navigation (No Pills, Pure Editorial Underlines) */}
          <nav
            className={`hidden lg:flex items-center gap-9 text-[12px] font-medium tracking-[0.18em] uppercase transition-colors ${
              isDarkNav ? 'text-[#F3EBDD]/80' : 'text-[#1E0F0A]/80'
            }`}
          >
            {navLinks.map((link) => {
              const isActive = activeView === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-1 transition-colors cursor-pointer focus:outline-hidden ${
                    isDarkNav
                      ? isActive
                        ? 'text-[#D69B2D] font-semibold'
                        : 'hover:text-[#D69B2D]'
                      : isActive
                      ? 'text-[#7D2418] font-semibold'
                      : 'hover:text-[#7D2418]'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                        isDarkNav ? 'bg-[#D69B2D]' : 'bg-[#7D2418]'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center gap-5 sm:gap-7">
            {/* Search */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search collection"
              className={`p-1 transition-colors cursor-pointer focus:outline-hidden ${
                isDarkNav
                  ? 'text-[#F3EBDD] hover:text-[#D69B2D]'
                  : 'text-[#1E0F0A] hover:text-[#7D2418]'
              }`}
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Shopping Bag Counter */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping bag"
              className={`relative p-1 transition-colors cursor-pointer focus:outline-hidden flex items-center gap-1.5 ${
                isDarkNav
                  ? 'text-[#F3EBDD] hover:text-[#D69B2D]'
                  : 'text-[#1E0F0A] hover:text-[#7D2418]'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span
                className={`text-xs font-mono tabular-nums font-semibold transition-colors ${
                  isDarkNav ? 'text-[#D69B2D]' : 'text-[#7D2418]'
                }`}
              >
                [{totalItems}]
              </span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden p-1 cursor-pointer focus:outline-hidden transition-colors ${
                isDarkNav
                  ? 'text-[#F3EBDD] hover:text-[#D69B2D]'
                  : 'text-[#1E0F0A] hover:text-[#7D2418]'
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen Editorial Mobile Menu Curtain */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#1E0F0A] text-[#F3EBDD] flex flex-col justify-between p-8 sm:p-14 overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#F3EBDD]/15 pb-6">
              <div>
                <span className="font-serif text-3xl font-bold tracking-[0.28em] text-[#F3EBDD]">
                  MUNJOY
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#D69B2D] block mt-1">
                  The Art of Indian Pickling
                </span>
              </div>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 text-[#F3EBDD]/70 hover:text-[#F3EBDD] cursor-pointer"
              >
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Enormous Editorial Links */}
            <div className="py-12 space-y-6 flex-1 flex flex-col justify-center">
              {[
                { id: 'statement', num: '01', title: 'Philosophy' },
                { id: 'ingredient', num: '02', title: 'The Ingredient' },
                { id: 'process', num: '03', title: 'The 5-Step Craft' },
                { id: 'flagship', num: '04', title: 'The Flagship' },
                { id: 'collection', num: '05', title: 'Pantry Archive' },
                { id: 'table', num: '06', title: 'The Table' },
                { id: 'journal', num: '07', title: 'The Journal' },
                { id: 'contact', num: '08', title: 'Contact Kitchen' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className="group flex items-baseline gap-4 text-left cursor-pointer transition-transform hover:translate-x-2"
                >
                  <span className="text-xs font-mono text-[#D69B2D] tracking-widest">
                    {item.num}
                  </span>
                  <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#F3EBDD] group-hover:text-[#D69B2D] transition-colors">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Mobile Footer Note */}
            <div className="border-t border-[#F3EBDD]/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#F3EBDD]/60 font-mono">
              <p className="italic font-serif text-sm text-[#F3EBDD]/80">
                “Traditional Indian pickle-making, crafted with care and made for today's generation.”
              </p>
              <span>Bengaluru, India · Small-Batch Only</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

