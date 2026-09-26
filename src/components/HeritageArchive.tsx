import React from 'react';
import { motion } from 'motion/react';
import { kitchenHeritageImg, craftImg } from '../data/products';

export const HeritageArchive: React.FC = () => {
  return (
    <section id="heritage" className="relative py-28 sm:py-36 md:py-48 bg-[#EDE4D8] text-[#1E0F0A] overflow-hidden">
      
      {/* Subtle Linen / Aged Paper Texture */}
      <div className="absolute inset-0 bg-grain opacity-35 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#7D2418] mb-12 sm:mb-16 border-b border-[#1E0F0A]/15 pb-6">
          <span className="w-6 h-[1px] bg-[#7D2418]" />
          <span>07 / The Kitchen Folklore</span>
        </div>

        {/* Narrative Magazine Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Kitchen Still Life */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 overflow-hidden shadow-2xl bg-[#1E0F0A] border border-[#1E0F0A]/15">
              <img
                src={craftImg}
                alt="Sun drying whole raw spices on traditional Indian linen"
                className="w-full h-full object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A]/70 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-[#F3EBDD] font-mono text-xs flex justify-between">
                <span>TERRACE CURING</span>
                <span>FIG. ARCHIVE</span>
              </div>
            </div>

            {/* Handwritten Recipe Notebook Card Inset */}
            <div className="absolute -bottom-8 -right-6 sm:-bottom-10 sm:-right-8 bg-[#F3EBDD] p-6 shadow-xl border border-[#1E0F0A]/15 max-w-[260px] hidden sm:block">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#7D2418] block mb-2">
                Handwritten Family Ledger
              </span>
              <p className="font-serif italic text-sm text-[#1E0F0A]/85 leading-snug">
                “Never touch the jar with wet hands. Let the sun drink the morning moisture before adding oil.”
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Essay & Textural Elements */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10 pl-0 lg:pl-6">
            <span className="text-xs uppercase font-mono tracking-[0.3em] text-[#D69B2D] block">
              The Chemistry of Sunlight
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal leading-[0.95] tracking-tight text-[#1E0F0A]">
              Where time is the <br />
              <span className="italic font-bold text-[#7D2418]">principal chef.</span>
            </h2>

            <div className="space-y-4 max-w-xl text-base sm:text-lg text-[#1E0F0A]/85 font-light leading-relaxed">
              <p>
                In every traditional Indian home, pickle-making was never treated as cooking. It was a calendar season. An annual rhythm orchestrated around peak summer temperatures and rooftop breezes.
              </p>
              <p className="text-sm sm:text-base text-[#1E0F0A]/70">
                The glazed clay martaban keeps the contents at an even temperature. The raw mustard oil acts as a living shield against oxygen. The whole spices do not overpower the fruit—they marry it over months.
              </p>
            </div>

            {/* 3 Authentic Material Anchors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#1E0F0A]/15">
              <div className="space-y-1">
                <span className="font-serif text-lg font-bold text-[#7D2418]">01. Glazed Clay</span>
                <p className="text-xs text-[#1E0F0A]/70 leading-relaxed font-mono">
                  Martaban ceramic pots resist acid corrosion and regulate natural fermentation heat.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-lg font-bold text-[#7D2418]">02. Virgin Oil</span>
                <p className="text-xs text-[#1E0F0A]/70 leading-relaxed font-mono">
                  Cold-pressed kacchi ghani mustard oil creates a natural sterile oxygen seal.
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-serif text-lg font-bold text-[#7D2418]">03. Muslin Seal</span>
                <p className="text-xs text-[#1E0F0A]/70 leading-relaxed font-mono">
                  Unbleached cotton cloth breathes moisture out while locking out airborne dust.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
