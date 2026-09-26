import React from 'react';
import craftImage from '../assets/images/craft_sundrying_spices_1790438200269.jpg';
import kitchenImage from '../assets/images/kitchen_heritage_light_1790438598874.jpg';

export const BrandIntro: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#F5EFEB] text-[#241E1A] relative overflow-hidden border-t border-b border-[#E8DFD5]">
      
      {/* Infinite Horizontal Editorial Marquee */}
      <div className="pb-16 sm:pb-24 border-b border-[#E0D4C5]/80 overflow-hidden select-none">
        <div className="animate-marquee-slow flex items-center whitespace-nowrap text-xs uppercase tracking-[0.3em] font-medium text-[#7A6B5F]">
          <span className="mx-6">Sun-Cured In Glazed Earthenware</span>
          <span className="mx-6 text-[#8B1E13]">✦</span>
          <span className="mx-6">Virgin Cold-Pressed Mustard Oil</span>
          <span className="mx-6 text-[#8B1E13]">✦</span>
          <span className="mx-6">Stone-Cracked Whole Spices</span>
          <span className="mx-6 text-[#8B1E13]">✦</span>
          <span className="mx-6">Zero Industrial Preservatives</span>
          <span className="mx-6 text-[#8B1E13]">✦</span>
          <span className="mx-6">Handcrafted In Small Batches</span>
          <span className="mx-6 text-[#8B1E13]">✦</span>
          <span className="mx-6">Sun-Cured In Glazed Earthenware</span>
          <span className="mx-6 text-[#8B1E13]">✦</span>
          <span className="mx-6">Virgin Cold-Pressed Mustard Oil</span>
          <span className="mx-6 text-[#8B1E13]">✦</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        
        {/* Enormous Dramatic Statement */}
        <div className="max-w-4xl space-y-6">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8B1E13] font-semibold block">
            A Return To Real Food
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.95] text-[#241E1A]">
            SOME FLAVOURS <br />
            <span className="italic text-[#8B1E13] font-light">TAKE YOU</span> HOME.
          </h2>

          <p className="text-lg sm:text-2xl font-serif italic text-[#5A4E45] max-w-2xl pt-2 leading-relaxed">
            Munjoy brings the character of traditional Indian pickle-making into a modern kitchen.
          </p>
        </div>

        {/* Dramatic Masked Image & Narrative Spread */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Expansive Editorial Photography */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden bg-[#FAF7F2] p-2 border border-[#DFD3C3] shadow-xl">
              <div className="aspect-16/10 sm:aspect-16/9 overflow-hidden">
                <img
                  src={kitchenImage}
                  alt="Traditional Indian heritage kitchen with glazed ceramic martaban jars and streaming golden morning sunlight"
                  className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-103"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#7A6B5F] uppercase tracking-[0.18em]">
              <span>Rooftop Terraces & Sunlit Kitchens</span>
              <span>Plate 02 · Heritage Light</span>
            </div>
          </div>

          {/* Right: Thoughtful Editorial Narrative */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-4 text-base sm:text-lg text-[#5A4E45] leading-relaxed">
              <p>
                From the first crack of a fresh red chilli to the pungent, golden aroma of stone-ground mustard, Munjoy is an ode to the jars that have quietly anchored Indian family meals for generations.
              </p>
              <p className="text-sm sm:text-base text-[#6B5D52]">
                We reject industrial short-cuts. Modern relishes rely on artificial vinegar and chemical thickeners to simulate age. At Munjoy, time itself is an ingredient: raw Ramkela mangoes rest for fourteen sunny days on rooftops, allowing naturally released juices to intermingle with cold-pressed mustard oil.
              </p>
            </div>

            {/* Editorial Contrast Statement */}
            <div className="p-6 bg-[#FAF7F2] border-l-2 border-[#8B1E13] border-t border-r border-b border-[#E0D4C5] space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B1E13] font-semibold block">
                The Munjoy Manifesto
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#241E1A] leading-snug">
                “Pickle is not a condiment to be tucked into the corner of a plate. It is the sharp, unforgettable heart of the meal.”
              </p>
            </div>

            {/* Key Quality Stamps */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#DFD3C3]">
              <div>
                <span className="font-serif text-2xl font-bold text-[#8B1E13] block">14–21 Days</span>
                <span className="text-xs text-[#7A6B5F] uppercase tracking-wider block mt-0.5">
                  Natural Sun-Curing
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold text-[#8B1E13] block">Zero Preservatives</span>
                <span className="text-xs text-[#7A6B5F] uppercase tracking-wider block mt-0.5">
                  Virgin Mustard Oil Only
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
