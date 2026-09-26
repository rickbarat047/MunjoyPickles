/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CartProvider } from './context/CartContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntro } from './components/BrandIntro';
import { FlagshipPickleStory } from './components/FlagshipPickleStory';
import { TheStory } from './components/TheStory';
import { InteractiveIngredients } from './components/InteractiveIngredients';
import { ProcessSection } from './components/ProcessSection';
import { ProductShowcase } from './components/ProductShowcase';
import { HeritageTradition } from './components/HeritageTradition';
import { JournalSection } from './components/JournalSection';
import { Testimonials } from './components/Testimonials';
import { InstagramGrid } from './components/InstagramGrid';
import { FinalCTA } from './components/FinalCTA';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ProductDetailModal } from './components/ProductDetailModal';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { Toast } from './components/Toast';
import { Product } from './types';

const luxuryEase = [0.22, 1, 0.36, 1] as const;

// Cinematic page variants with subtle scale, opacity, and smooth easing
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 14,
    filter: 'blur(3px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.55,
      ease: luxuryEase,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: -14,
    filter: 'blur(3px)',
    transition: {
      duration: 0.38,
      ease: luxuryEase,
    },
  },
};

type ActiveView = 'home' | 'pickles' | 'story' | 'craft' | 'journal' | 'contact';

function MainApp() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleNavigate = (sectionId: string) => {
    // If it's a specific page tab request or anchor navigation:
    if (['pickles', 'story', 'craft', 'journal', 'contact'].includes(sectionId)) {
      setActiveView(sectionId as ActiveView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'home') {
      setActiveView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If currently on another view, return to home and scroll to that section
      if (activeView !== 'home') {
        setActiveView('home');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 320);
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#241E1A] flex flex-col font-sans selection:bg-[#8B1E13] selection:text-[#FAF7F2] overflow-x-hidden">
      {/* Luxury Brand Preloader Entrance */}
      <Preloader />

      {/* Cinematic Route Change Progress Bar */}
      <motion.div
        key={`nav-line-${activeView}`}
        initial={{ scaleX: 0, opacity: 0.9 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.6, ease: luxuryEase }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#8B1E13] via-[#D97706] to-[#8B1E13] origin-left z-50 pointer-events-none"
      />

      {/* Sticky Luxury Navigation */}
      <Navbar onNavigate={handleNavigate} activeView={activeView} />

      {/* Animated Page Layout Container with AnimatePresence */}
      <div className="flex-1 flex flex-col relative w-full">
        <AnimatePresence mode="wait">
          {activeView === 'home' && (
            <motion.main
              key="view-home"
              layout="position"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 w-full"
            >
              {/* 1. Full-Viewport Cinematic Hero */}
              <Hero
                onExploreClick={() => handleNavigate('pickles')}
                onStoryClick={() => handleNavigate('story')}
              />

              {/* 2. Editorial Transition: SOME FLAVOURS TAKE YOU HOME */}
              <BrandIntro />

              {/* 3. The Flagship Product Story: MANGO. MUSTARD. MEMORIES. */}
              <FlagshipPickleStory />

              {/* 4. The Story: Made the Way Memories are Made */}
              <TheStory />

              {/* 5. Interactive Culinary Ingredients Showcase */}
              <InteractiveIngredients />

              {/* 6. The 5-Step Craft: From Harvest to Jar */}
              <ProcessSection />

              {/* 7. Asymmetrical Editorial Product Collection */}
              <ProductShowcase onOpenDetail={(p) => setSelectedProduct(p)} />

              {/* 8. Indian Heritage, Terrace Sun-Curing & Folklore */}
              <HeritageTradition />

              {/* 9. The Munjoy Journal */}
              <JournalSection />

              {/* 10. Refined Patron Reflections */}
              <Testimonials />

              {/* 11. Editorial Instagram Photo Wall */}
              <InstagramGrid />

              {/* 12. The Grand Finale Invitation */}
              <FinalCTA onShopClick={() => handleNavigate('pickles')} />

              {/* 13. Direct Kitchen Contact & Bespoke Gifting */}
              <ContactSection />
            </motion.main>
          )}

          {activeView === 'pickles' && (
            <motion.main
              key="view-pickles"
              layout="position"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 w-full pt-20"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 border-b border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase tracking-widest text-[#8B1E13] font-semibold hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Home Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#241E1A]">
                    The Complete Pantry Collection
                  </h1>
                </div>
              </div>
              <ProductShowcase onOpenDetail={(p) => setSelectedProduct(p)} />
              <FlagshipPickleStory />
              <FinalCTA onShopClick={() => handleNavigate('pickles')} />
            </motion.main>
          )}

          {activeView === 'story' && (
            <motion.main
              key="view-story"
              layout="position"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 w-full pt-20"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 border-b border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase tracking-widest text-[#8B1E13] font-semibold hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Home Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#241E1A]">
                    Our Story & Philosophy
                  </h1>
                </div>
              </div>
              <BrandIntro />
              <TheStory />
              <HeritageTradition />
              <FinalCTA onShopClick={() => handleNavigate('pickles')} />
            </motion.main>
          )}

          {activeView === 'craft' && (
            <motion.main
              key="view-craft"
              layout="position"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 w-full pt-20"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 border-b border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase tracking-widest text-[#8B1E13] font-semibold hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Home Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#241E1A]">
                    The 5-Step Discipline & Ingredients
                  </h1>
                </div>
              </div>
              <ProcessSection />
              <InteractiveIngredients />
              <FinalCTA onShopClick={() => handleNavigate('pickles')} />
            </motion.main>
          )}

          {activeView === 'journal' && (
            <motion.main
              key="view-journal"
              layout="position"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 w-full pt-20"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 border-b border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase tracking-widest text-[#8B1E13] font-semibold hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Home Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#241E1A]">
                    The Munjoy Journal & Archive
                  </h1>
                </div>
              </div>
              <JournalSection />
              <InstagramGrid />
            </motion.main>
          )}

          {activeView === 'contact' && (
            <motion.main
              key="view-contact"
              layout="position"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 w-full pt-20"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 border-b border-[#E8DFD5] flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase tracking-widest text-[#8B1E13] font-semibold hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Home Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#241E1A]">
                    Connect With Our Kitchen
                  </h1>
                </div>
              </div>
              <ContactSection />
            </motion.main>
          )}
        </AnimatePresence>
      </div>

      {/* Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Interactive Overlays & Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <QuickViewModal
        onOpenFullDetail={(p) => setSelectedProduct(p)}
      />

      <CartDrawer />

      <CheckoutModal />

      <SearchModal
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <MainApp />
    </CartProvider>
  );
}

