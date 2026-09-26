import React from 'react';
import craftImage from '../assets/images/craft_sundrying_spices_1790438200269.jpg';
import kitchenImage from '../assets/images/kitchen_heritage_light_1790438598874.jpg';

export const TheStory: React.FC = () => {
  return (
    <section id="story" className="py-24 sm:py-36 bg-[#1A1411] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#8B1E13]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#D97706]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Story Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97706] font-semibold block">
            Generations of Craft
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#FAF7F2] leading-[1]">
            Made the way memories are made.
          </h2>
          <p className="font-serif italic text-lg sm:text-xl text-[#D4C9BC] font-light leading-relaxed max-w-2xl mx-auto">
            In every Indian household, pickle-making has never been a hurried task. It is a slow, rhythmic ritual guided by weather, patience, and the wisdom of family kitchens.
          </p>
        </div>

        {/* Narrative Flow: Cinematic Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-[#261E19] p-3 border border-[#4A3B31] shadow-2xl">
              <div className="aspect-16/11 overflow-hidden relative">
                <img
                  src={craftImage}
                  alt="Rooftop terrace sun-drying spices and mango pieces"
                  className="w-full h-full object-cover filter brightness-95 contrast-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1614]/85 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#D97706] font-semibold block">
                    Terrace Rituals
                  </span>
                  <p className="font-serif italic text-base text-[#FAF7F2] mt-0.5">
                    “The sun does what no industrial oven ever could.”
                  </p>
                </div>
              </div>
            </div>

            {/* Inset Note Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 max-w-xs p-5 bg-[#2B211A] border border-[#4D3A2F] shadow-xl">
              <p className="font-serif text-xs text-[#D4C9BC] leading-relaxed italic">
                “Every summer was marked by white sheets on the terrace, heavy stone mortars cracking mustard, and the intoxicating scent of raw mustard oil in the afternoon breeze.”
              </p>
              <div className="mt-2 text-[9px] uppercase tracking-widest text-[#D97706] font-mono">
                Kitchen Archive Memoir
              </div>
            </div>
          </div>

          {/* Editorial Text Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-[#D4C9BC]">
            <div className="space-y-3">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                Patience as an Ingredient
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#BFB2A3]">
                Before factory conveyor lines began bottling relishes with synthetic vinegar and artificial enhancers, pickles were patient creations. Green mangoes waited for their crisp prime. Banarasi chillies waited for the winter morning sun. Jars waited beneath swaddled cotton cloths on quiet terrace rooftops.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#382B24]">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF7F2]">
                Honouring the Family Table
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-[#BFB2A3]">
                Munjoy was born to preserve this unhurried connection. We do not cut corners with preservatives, nor do we compromise on the robust punch of pure, unrefined mustard oil. When you open a jar of Munjoy, you are unwrapping a slice of home—ground in stone, tempered with care, and made to bring people together.
              </p>
            </div>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#382B24]">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D97706] font-semibold block">
                  Family Recipes
                </span>
                <p className="text-xs text-[#A89A8E] mt-1">
                  Passed down through hands, tasted and perfected over decades.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#D97706] font-semibold block">
                  Pure Kacchi Ghani
                </span>
                <p className="text-xs text-[#A89A8E] mt-1">
                  Virgin cold-pressed oil that naturally matures each fruit.
                </p>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#D97706] font-semibold block">
                  Small-Batch
                </span>
                <p className="text-xs text-[#A89A8E] mt-1">
                  Crafted in tight batches of 40 to 60 jars at a time.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Final Editorial Brand Statement */}
        <div className="mt-20 sm:mt-28 p-8 sm:p-12 text-center bg-[#241C17] border border-[#3D2E24] max-w-4xl mx-auto shadow-md">
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-[#FAF7F2] leading-snug">
            “Traditional Indian pickle-making, crafted with care and made for today’s generation.”
          </p>
          <div className="mt-4 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-[#D97706] font-mono">
            <span>Munjoy Artisanal Kitchen</span>
            <span>·</span>
            <span>Est. Family Tradition</span>
          </div>
        </div>

      </div>
    </section>
  );
};
