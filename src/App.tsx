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
import { BrandStatement } from './components/BrandStatement';
import { TheIngredient } from './components/TheIngredient';
import { ProcessDocumentary } from './components/ProcessDocumentary';
import { FlagshipHero } from './components/FlagshipHero';
import { EditorialCollection } from './components/EditorialCollection';
import { HeritageArchive } from './components/HeritageArchive';
import { TheTable } from './components/TheTable';
import { JournalEditorial } from './components/JournalEditorial';
import { MinimalSocialProof } from './components/MinimalSocialProof';
import { GrandFinale } from './components/GrandFinale';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ProductDetailModal } from './components/ProductDetailModal';
import { QuickViewModal } from './components/QuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { SearchModal } from './components/SearchModal';
import { OwnerOrdersModal } from './components/OwnerOrdersModal';
import { Toast } from './components/Toast';
import { Product } from './types';

const luxuryEase = [0.22, 1, 0.36, 1] as const;

// Cinematic page variants with subtle scale, opacity, and smooth easing
const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.985,
    y: 12,
    filter: 'blur(3px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: luxuryEase,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    y: -12,
    filter: 'blur(3px)',
    transition: {
      duration: 0.4,
      ease: luxuryEase,
    },
  },
};

type ActiveView = 'home' | 'collection' | 'statement' | 'process' | 'journal' | 'contact';

function MainApp() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOwnerPortalOpen, setIsOwnerPortalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    // If it's a specific page tab request or anchor navigation:
    if (['collection', 'statement', 'process', 'journal', 'contact'].includes(sectionId)) {
      setActiveView(sectionId as ActiveView);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'home') {
      setActiveView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Return to home and scroll to section
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
    <div className="min-h-screen bg-[#F3EBDD] text-[#1E0F0A] flex flex-col font-sans selection:bg-[#7D2418] selection:text-[#F3EBDD] overflow-x-hidden">
      {/* Luxury Brand Preloader Entrance */}
      <Preloader />

      {/* Cinematic Route Change Hairline Indicator */}
      <motion.div
        key={`nav-line-${activeView}`}
        initial={{ scaleX: 0, opacity: 0.9 }}
        animate={{ scaleX: 1, opacity: 0 }}
        transition={{ duration: 0.65, ease: luxuryEase }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#7D2418] via-[#D69B2D] to-[#7D2418] origin-left z-50 pointer-events-none"
      />

      {/* Minimal Floating Luxury Navigation */}
      <Navbar onNavigate={handleNavigate} activeView={activeView} />

      {/* Main Content Area */}
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
              {/* SECTION 1: HERO — THE MONEY SHOT */}
              <Hero
                onExploreClick={() => {
                  const el = document.getElementById('collection');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onStoryClick={() => {
                  const el = document.getElementById('statement');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* SECTION 2: THE STATEMENT */}
              <BrandStatement />

              {/* SECTION 3: THE INGREDIENT (MANGO, MUSTARD, CHILLI) */}
              <TheIngredient />

              {/* SECTION 4: THE MUNJOY PROCESS (STICKY 01-05 DOCUMENTARY) */}
              <ProcessDocumentary />

              {/* SECTION 5: FLAGSHIP PRODUCT (MANGO PICKLE VIEWPORT) */}
              <FlagshipHero />

              {/* SECTION 6: PRODUCT COLLECTION (ASYMMETRIC EDITORIAL) */}
              <EditorialCollection onOpenDetail={(p) => setSelectedProduct(p)} />

              {/* SECTION 7: HERITAGE (INDIAN KITCHEN TEXTURES & FOLKLORE) */}
              <HeritageArchive />

              {/* SECTION 8: THE TABLE (EVERYDAY MEALS & OVERLAID TYPOGRAPHY) */}
              <TheTable />

              {/* SECTION 9: JOURNAL (MAGAZINE-STYLE MONOGRAPH) */}
              <JournalEditorial />

              {/* SECTION 10: SOCIAL PROOF (ONE MINIMAL CUSTOMER QUOTE) */}
              <MinimalSocialProof />

              {/* FINAL SECTION: BRING JOY TO THE TABLE */}
              <GrandFinale
                onShopClick={() => {
                  const el = document.getElementById('collection');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onContactClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* KITCHEN CONTACT & BESPOKE GIFTING (CONNECTED TO rickbarat21@gmail.com) */}
              <ContactSection />
            </motion.main>
          )}

          {activeView === 'collection' && (
            <motion.main
              key="view-collection"
              layout="position"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 w-full pt-24"
            >
              <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-6 border-b border-[#1E0F0A]/15 flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase font-mono tracking-widest text-[#7D2418] hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E0F0A]">
                    The Pantry Archive
                  </h1>
                </div>
              </div>
              <EditorialCollection onOpenDetail={(p) => setSelectedProduct(p)} />
              <FlagshipHero />
            </motion.main>
          )}

          {activeView === 'statement' && (
            <motion.main
              key="view-statement"
              layout="position"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 w-full pt-24"
            >
              <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-6 border-b border-[#1E0F0A]/15 flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase font-mono tracking-widest text-[#7D2418] hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E0F0A]">
                    Philosophy & Memory
                  </h1>
                </div>
              </div>
              <BrandStatement />
              <HeritageArchive />
            </motion.main>
          )}

          {activeView === 'process' && (
            <motion.main
              key="view-process"
              layout="position"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex-1 w-full pt-24"
            >
              <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-6 border-b border-[#1E0F0A]/15 flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase font-mono tracking-widest text-[#7D2418] hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E0F0A]">
                    The 5-Step Craft
                  </h1>
                </div>
              </div>
              <ProcessDocumentary />
              <TheIngredient />
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
              className="flex-1 w-full pt-24"
            >
              <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-6 border-b border-[#1E0F0A]/15 flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase font-mono tracking-widest text-[#7D2418] hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E0F0A]">
                    The Munjoy Journal
                  </h1>
                </div>
              </div>
              <JournalEditorial />
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
              className="flex-1 w-full pt-24"
            >
              <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-6 border-b border-[#1E0F0A]/15 flex items-center justify-between">
                <div>
                  <motion.button
                    whileHover={{ x: -4 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleNavigate('home')}
                    className="text-xs uppercase font-mono tracking-widest text-[#7D2418] hover:underline mb-2 inline-flex items-center gap-1 cursor-pointer"
                  >
                    ← Return to Overview
                  </motion.button>
                  <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#1E0F0A]">
                    Direct Kitchen Contact
                  </h1>
                </div>
              </div>
              <ContactSection />
            </motion.main>
          )}
        </AnimatePresence>
      </div>

      {/* Luxury Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenOwnerPortal={() => setIsOwnerPortalOpen(true)}
      />

      {/* Interactive Overlays & Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />

      <QuickViewModal
        onOpenFullDetail={(p) => setSelectedProduct(p)}
      />

      <CartDrawer />

      {/* Checkout Modal (Triggers email to rickbarat21@gmail.com on order) */}
      <CheckoutModal />

      <SearchModal
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Kitchen Orders Portal for Rick */}
      <OwnerOrdersModal
        isOpen={isOwnerPortalOpen}
        onClose={() => setIsOwnerPortalOpen(false)}
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
