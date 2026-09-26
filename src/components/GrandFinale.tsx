import React from 'react';
import { motion } from 'motion/react';
import { tableSpreadImg } from '../data/products';

interface GrandFinaleProps {
  onShopClick: () => void;
  onContactClick: () => void;
}

export const GrandFinale: React.FC<GrandFinaleProps> = ({ onShopClick, onContactClick }) => {
  return (
    <section className="relative min-h-screen py-28 sm:py-36 md:py-44 bg-[#1E0F0A] text-[#F3EBDD] flex flex-col justify-between overflow-hidden">
      
      {/* Background Ambience & Grain */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      {/* Top Quiet Marker */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-[0.28em] text-[#F3EBDD]/50 border-b border-[#F3EBDD]/15 pb-6">
        <span>MUNJOY / BATCH 24</span>
        <span>DELIVERED PAN-INDIA</span>
      </div>

      {/* Central Viewport Composition */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Enormous Headline */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-bold text-[#F3EBDD] leading-[0.88] tracking-tight">
              BRING <br />
              <span className="italic font-light text-[#D69B2D]">JOY</span> <br />
              TO THE <br />
              TABLE.
            </h2>

            <p className="text-sm sm:text-base text-[#F3EBDD]/75 font-light leading-relaxed max-w-md">
              Small batches cured with sunlight, memory, and cold-pressed mustard oil. Shipped in cushioned glass and ceramic containers straight to your doorstep.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-8">
              <button
                type="button"
                onClick={onShopClick}
                className="group relative inline-flex items-center gap-3 text-sm sm:text-base font-semibold tracking-[0.24em] uppercase text-[#D69B2D] hover:text-[#F3EBDD] transition-colors cursor-pointer focus:outline-hidden pb-1"
              >
                <span>Shop Munjoy →</span>
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D69B2D] scale-x-100 origin-left transition-transform group-hover:scale-x-110" />
              </button>

              <button
                type="button"
                onClick={onContactClick}
                className="text-xs font-mono tracking-widest uppercase text-[#F3EBDD]/60 hover:text-[#F3EBDD] transition-colors cursor-pointer hover-underline-editorial pb-0.5"
              >
                Wedding & Festive Gifting →
              </button>
            </div>
          </div>

          {/* Right Column: Close-Up Food Image Integrated Into Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 overflow-hidden shadow-2xl bg-[#28150D] border border-[#F3EBDD]/20">
              <img
                src={tableSpreadImg}
                alt="Munjoy Artisanal Homemade Pickles"
                className="w-full h-full object-cover filter contrast-[1.1] hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between font-mono text-xs text-[#F3EBDD]">
                <div>
                  <span className="text-[10px] text-[#D69B2D] block uppercase tracking-widest">
                    HAND-PACKED
                  </span>
                  <span className="font-serif italic text-base">Pure Kitchen Spirit</span>
                </div>
                <span className="text-[#D69B2D]">₹349+</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Quiet Baseline */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[#F3EBDD]/45 pt-6 border-t border-[#F3EBDD]/15">
        <p className="italic font-serif text-sm text-[#F3EBDD]/70">
          “Traditional Indian pickle-making, crafted with care and made for today's generation.”
        </p>
        <span>Small batches rested in Bengaluru, India</span>
      </div>

    </section>
  );
};
