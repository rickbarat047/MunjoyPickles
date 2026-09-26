import React from 'react';
import kitchenImg from '../assets/images/kitchen_heritage_light_1790438598874.jpg';
import tableSpreadImg from '../assets/images/table_pairing_spread_1790438612173.jpg';

export const HeritageTradition: React.FC = () => {
  return (
    <section id="heritage" className="py-24 sm:py-36 bg-[#F5EFEB] text-[#241E1A] relative overflow-hidden border-t border-b border-[#E8DFD5]">
      
      {/* Background Subtle Paper Texture */}
      <div className="absolute inset-0 bg-grain opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pre-Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#8B1E13] font-semibold block">
            Memory & Kitchen Folklore
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#241E1A] leading-[1]">
            The pickle jar was always the truest compass of an Indian home.
          </h2>
          <p className="font-serif text-lg sm:text-xl italic text-[#5A4E45] pt-2 max-w-2xl mx-auto">
            Long before refrigerators hummed in kitchens, Indian families gathered on terraces to preserve the fleeting abundance of seasonal harvests.
          </p>
        </div>

        {/* Narrative Vignettes Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Handwritten Recipe Note & Editorial Still Life */}
          <div className="lg:col-span-6 space-y-8">
            <div className="relative bg-[#FAF7F2] p-4 sm:p-5 border border-[#DFD3C3] shadow-xl">
              <div className="aspect-16/11 overflow-hidden">
                <img
                  src={tableSpreadImg}
                  alt="Hot ghee layered paratha with yellow dal and rich red Indian pickle on brass plates"
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-102"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Handwritten Note Style Box */}
            <div className="p-6 sm:p-8 bg-[#FAF7F2] border border-[#E0D4C5] shadow-sm relative">
              <div className="absolute -top-3 left-6 px-3 bg-[#8B1E13] text-[#FAF7F2] text-[10px] uppercase tracking-[0.2em] font-semibold">
                Kitchen Archive Notes
              </div>

              <blockquote className="font-serif italic text-base sm:text-lg text-[#3A3027] leading-relaxed pt-2">
                “Never touch the jar with wet fingers. Let the sun warm the glass till noon. Add mustard oil until the mango sleeps beneath the surface. Trust the warmth of the seasons.”
              </blockquote>

              <div className="mt-4 pt-4 border-t border-[#E8DFD5] flex items-center justify-between text-xs text-[#7A6B5F]">
                <span>Traditional Indian Household Wisdom</span>
                <span>Unwritten Oral Recipes</span>
              </div>
            </div>
          </div>

          {/* Right: 3 Rich Pillars of Tradition */}
          <div className="lg:col-span-6 space-y-8 sm:space-y-10">
            
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B1E13]">
                01 / The Seasonal Cycle
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E1A]">
                Harvested When Nature Demands
              </h3>
              <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
                Pickle-making was never an arbitrary factory schedule. It waited for the raw Ramkela mangoes in early summer, the sunniest weeks of June for terrace drying, and the winter dew for plump Banarasi red chillies. Munjoy adheres strictly to this seasonal calendar.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#DFD3C3]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B1E13]">
                02 / Muslin, Clay & Natural Warmth
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E1A]">
                The Terraces as Living Ovens
              </h3>
              <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
                In place of artificial autoclaves and heat lamps, we swaddle our heavy glazed earthenware jars in pure white muslin. Placed on open rooftops, the sun gently breaks down tough fruit skins while activating the enzymatic sharp notes of yellow mustard seeds.
              </p>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#DFD3C3]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B1E13]">
                03 / The Anchor of Every Thali
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E1A]">
                The Little Spoon That Unites The Table
              </h3>
              <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
                Whether alongside comforting khichuri on rainy evenings, rolled into hot flaky ajwain parathas, or paired with soothing cold curd rice in the heat of May—a single spoonful of good pickle has the power to transform the humblest meal into a feast.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
