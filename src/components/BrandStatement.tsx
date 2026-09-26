import React from 'react';
import { motion } from 'motion/react';
import kitchenHeritageImg from '../assets/images/kitchen_heritage_light_1790438598874.jpg';

export const BrandStatement: React.FC = () => {
  return (
    <section id="statement" className="relative py-28 sm:py-36 md:py-48 bg-[#F3EBDD] text-[#1E0F0A] overflow-hidden">
      
      {/* Background Watermark Lettering */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.035] text-[#1E0F0A] font-serif text-[18vw] leading-none whitespace-nowrap -mr-20">
        MEMORIES
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Editorial Top Marker */}
        <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#7D2418] mb-12 sm:mb-16">
          <span className="w-6 h-[1px] bg-[#7D2418]" />
          <span>02 / The Munjoy Philosophy</span>
        </div>

        {/* Asymmetrical Magazine Spread Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Massive Editorial Typography */}
          <div className="lg:col-span-7 z-10 space-y-8 sm:space-y-12">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-[0.92] tracking-tight text-[#1E0F0A]">
              SOME FLAVOURS <br />
              <span className="italic text-[#7D2418]">ARE RECIPES.</span> <br />
              <span className="block mt-4 sm:mt-6">OTHERS ARE</span>
              <span className="italic font-light text-[#D69B2D]">MEMORIES.</span>
            </h2>

            <div className="max-w-xl pl-0 sm:pl-4 border-l-0 sm:border-l sm:border-[#7D2418]/30 space-y-4">
              <p className="text-base sm:text-lg text-[#1E0F0A]/85 font-light leading-relaxed">
                From the first crack of an oil-tempered mustard seed to the sharp, pungent tang of raw green mango curing beneath a harsh June sun, Munjoy is not manufactured in automated factories.
              </p>
              <p className="text-sm sm:text-base text-[#1E0F0A]/70 font-light leading-relaxed">
                It is cut by hand, tossed in brass utensils, and rested in glazed earthenware until time softens every skin into savory gold. Traditional Indian pickle-making, crafted with care and made for today's generation.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-[#7D2418]">
              <span>No Industrial Vinegar</span>
              <span>·</span>
              <span>Pure Kacchi Ghani Oil</span>
            </div>
          </div>

          {/* Right Column: Giant Close-Up Photograph Extending Outside the Grid */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative lg:-mr-16">
              
              <div className="relative aspect-4/5 sm:aspect-3/4 lg:aspect-4/5 overflow-hidden shadow-2xl bg-[#1E0F0A]">
                <img
                  src={kitchenHeritageImg}
                  alt="Traditional Indian Sunlit Kitchen and Curing Spices"
                  className="w-full h-full object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A]/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Photo Annotation Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-[#F3EBDD] flex items-end justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.24em] text-[#D69B2D] font-mono block">
                      Plate 01
                    </span>
                    <span className="font-serif italic text-base sm:text-lg">
                      Terrace Sunlight & Martaban Resting
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#F3EBDD]/60">14 Days</span>
                </div>
              </div>

              {/* Editorial Frame Offset Accent */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 border-b-2 border-l-2 border-[#7D2418]/40 -z-10 pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
