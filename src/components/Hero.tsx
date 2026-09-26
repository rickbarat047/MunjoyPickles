import React from 'react';
import { motion } from 'motion/react';
import heroImage from '../assets/images/hero_pickle_composition_1790438144628.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onStoryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onStoryClick }) => {
  return (
    <section className="relative h-screen min-h-[720px] w-full flex flex-col justify-between overflow-hidden bg-[#1E0F0A] text-[#F3EBDD] select-none">
      
      {/* Background Cinematic Food Photography with Luxury Vignette */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.88 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          src={heroImage}
          alt="Artisanal Indian Pickle in Glazed Ceramic Vessel"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.12]"
        />
        {/* Editorial Shadow Gradients & Film Grain */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A] via-[#1E0F0A]/35 to-[#1E0F0A]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E0F0A]/85 via-transparent to-[#1E0F0A]/60" />
        <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
      </div>

      {/* Top Header Eyebrow (Quiet Editorial Bar) */}
      <div className="relative z-10 pt-28 sm:pt-32 px-6 sm:px-12 lg:px-16 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.28em] text-[#F3EBDD]/70 border-b border-[#F3EBDD]/15 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D69B2D] animate-pulse" />
          <span className="text-[#F3EBDD]">MUNJOY / INDIAN PICKLE CO.</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[#F3EBDD]/55">
          <span>Sun-Cured In Glazed Martabans</span>
          <span>·</span>
          <span>Cold-Pressed Mustard Oil</span>
        </div>
        <span className="text-[#D69B2D] font-serif italic text-xs tracking-wider">
          Batch No. 24 · Harvest
        </span>
      </div>

      {/* Centerpiece: Dramatic Overlapping Editorial Typography */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-16 my-auto max-w-[1400px] w-full mx-auto">
        <div className="max-w-4xl space-y-4 sm:space-y-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.34em] text-[#D69B2D] font-medium block mb-2">
              The Art of Indian Pickling
            </span>

            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[112px] font-bold text-[#F3EBDD] leading-[0.88] tracking-tight">
              THE TASTE <br />
              <span className="italic font-light text-[#D69B2D]">OF HOME.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2 flex flex-col sm:flex-row sm:items-end justify-between gap-8 max-w-3xl"
          >
            <p className="text-sm sm:text-base text-[#F3EBDD]/80 max-w-md font-light leading-relaxed">
              Crafted under the Indian sun from family kitchens. Crisp seasonal mangoes and hand-slit chillies, slow-cured in raw cold-pressed mustard oil and stone-cracked spices.
            </p>

            {/* Understated Animated Line CTA (No generic pill button!) */}
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={onExploreClick}
                className="group relative inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.24em] uppercase text-[#F3EBDD] hover:text-[#D69B2D] transition-colors cursor-pointer focus:outline-hidden pb-1"
              >
                <span>Explore Pickles</span>
                <span className="transition-transform group-hover:translate-x-1.5 duration-300">→</span>
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D69B2D] scale-x-100 origin-left transition-transform duration-300 group-hover:scale-x-110" />
              </button>

              <button
                type="button"
                onClick={onStoryClick}
                className="group relative inline-flex items-center gap-2 text-xs sm:text-sm font-light tracking-[0.2em] uppercase text-[#F3EBDD]/70 hover:text-[#F3EBDD] transition-colors cursor-pointer focus:outline-hidden pb-1"
              >
                <span>Our Story</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#F3EBDD]/50 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar & Subtle Vertical Scroll Indicator */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-16 pb-8 flex items-end justify-between text-xs text-[#F3EBDD]/60 font-mono">
        <div className="flex items-center gap-6">
          <span>01 / 07 ARCHIVE</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">NATURAL OIL PRESERVATION</span>
        </div>

        {/* Vertical Scroll Indicator */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#D69B2D]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[1.5px] h-9 bg-gradient-to-b from-[#D69B2D] to-transparent"
          />
        </div>
      </div>

    </section>
  );
};
