import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import mangoImg from '../assets/images/product_mango_pickle_1790438158089.jpg';
import chilliImg from '../assets/images/product_chilli_pickle_1790438176331.jpg';
import limeImg from '../assets/images/product_lime_pickle_1790438189105.jpg';
import heroImg from '../assets/images/hero_pickle_composition_1790438144628.jpg';
import craftImg from '../assets/images/craft_sundrying_spices_1790438200269.jpg';
import flagshipMacroImg from '../assets/images/flagship_mango_macro_1790438585195.jpg';

interface Ingredient {
  id: string;
  name: string;
  hindi: string;
  quote: string;
  role: string;
  origin: string;
  flavorProfile: string;
  description: string;
  image: string;
}

export const InteractiveIngredients: React.FC = () => {
  const ingredients: Ingredient[] = [
    {
      id: 'mango',
      name: 'Ramkela Raw Mango',
      hindi: 'रामकेला कच्चा आम',
      quote: 'Bright, tangy and unmistakably Indian.',
      role: 'Crisp Architectural Crunch',
      origin: 'Orchards of Uttar Pradesh',
      flavorProfile: 'Sharp Malic Acidity · Firm Fiber · Unyielding Crunch',
      description: 'Selected while the inner stone has just hardened. Sliced with heavy carbon-steel blades into even cubes that absorb spices without collapsing into brine.',
      image: mangoImg,
    },
    {
      id: 'mustard',
      name: 'Virgin Kacchi Ghani Mustard',
      hindi: 'कच्ची घानी सरसों का तेल',
      quote: 'Deep, pungent, earthy heat.',
      role: 'Living Preservative & Body',
      origin: 'Cold-pressed in traditional wooden mills',
      flavorProfile: 'Pungent Allyl Sting · Golden Texture · Warming Finish',
      description: 'The soul of Indian preservation. Virgin mustard oil possesses natural antimicrobial properties that keep pickles alive and maturing for years without chemical stabilizers.',
      image: heroImg,
    },
    {
      id: 'chilli',
      name: 'Banarasi Red Chilli',
      hindi: 'बनारसी मोटी लाल मिर्च',
      quote: 'A little fire goes a long way.',
      role: 'Crimson Pods for Whole Stuffing',
      origin: 'Varanasi Valley',
      flavorProfile: 'Rich Dried Pepper Fruitiness · Slow Creeping Heat',
      description: 'Plump, broad crimson chillies hollowed by hand and packed generously with dry-roasted fennel and dry mango powder. Softens in oil to a melt-in-mouth relish.',
      image: chilliImg,
    },
    {
      id: 'seeds',
      name: 'Coarse Yellow Mustard Dal (Rai)',
      hindi: 'पीली सरसों / राई दाल',
      quote: 'Sharp crackle and enzymatic tang.',
      role: 'Enzyme Catalyst & Body',
      origin: 'Certified Rajasthan Heritage Farms',
      flavorProfile: 'Nutty · Sharp Tang upon contacting moisture',
      description: 'Never powdered. Split into golden halves on stone chakki mills. When Rai meets salt and mango juices, it ferments slightly, creating the iconic tangy sharpness.',
      image: craftImg,
    },
    {
      id: 'lime',
      name: 'Kagzi Thin-Skinned Lime',
      hindi: 'कागज़ी नींबू',
      quote: 'Sun-mellowed citrus nectar.',
      role: 'Natural Ascorbic Acidity',
      origin: 'Sun-drenched Deccan Groves',
      flavorProfile: 'High Citrus Essential Oils · Amber Aged Bitterness',
      description: 'Thin-skinned country limes cured with mountain rock salt until the rind turns amber brown. Over months, the tart juice turns into a fragrant medicinal nectar.',
      image: limeImg,
    },
    {
      id: 'fenugreek',
      name: 'Toasted Fenugreek & Kalonji',
      hindi: 'मेथी दाना और कलौंजी',
      quote: 'The bittersweet backbone of heritage pickling.',
      role: 'Aromatic Balance & Digestif',
      origin: 'Sun-toasted Spices of Northern Plains',
      flavorProfile: 'Toasted Maple Bitterness · Herbal Earthiness',
      description: 'Gentle dry-roasting converts the raw bitterness of methi seeds into a deeply savoury, complex undertone that cuts through rich Indian flatbreads and rice.',
      image: flagshipMacroImg,
    },
  ];

  const [activeId, setActiveId] = useState<string>('mango');
  const active = ingredients.find((i) => i.id === activeId) || ingredients[0];

  return (
    <section id="ingredients" className="py-24 sm:py-36 bg-[#FAF7F2] text-[#241E1A] relative border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E0D4C5]">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8B1E13] font-semibold block">
              Sensory Exploration
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#241E1A] leading-[1]">
              Good pickle starts long before the jar.
            </h2>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              Touch an ingredient to explore its provenance, traditional role, and sensory character in the Munjoy pantry.
            </p>
          </div>

          <div className="text-xs font-mono uppercase tracking-[0.2em] text-[#7A6B5F] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8B1E13]" />
            <span>06 Pure Elements</span>
          </div>
        </div>

        {/* Interactive Master Grid */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Interactive Ingredient Navigation Selector */}
          <div className="lg:col-span-5 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#7A6B5F] block mb-4">
              Select An Ingredient:
            </span>

            <div className="space-y-2">
              {ingredients.map((item, index) => {
                const isSelected = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`w-full text-left p-4 sm:p-5 border transition-all duration-300 flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#F5EFEB] border-[#8B1E13] text-[#241E1A] shadow-xs translate-x-2'
                        : 'bg-[#FAF7F2] border-[#E8DFD5] text-[#5A4E45] hover:border-[#D5C7B7] hover:bg-[#FAF7F2]/80'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#8A7768] tabular-nums">0{index + 1}</span>
                        <span className="font-serif text-lg font-bold">{item.name}</span>
                      </div>
                      <span className="font-serif italic text-xs text-[#8B1E13] ml-6 block mt-0.5">
                        {item.hindi}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] font-mono text-[#7A6B5F] block">{item.role.split(' ')[0]}</span>
                      <ArrowRight className={`w-4 h-4 ml-auto mt-1 transition-transform ${isSelected ? 'text-[#8B1E13] translate-x-1' : 'text-[#C5B7A6]'}`} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-Drama Visual Showcase Panel */}
          <div className="lg:col-span-7 bg-[#F5EFEB] p-6 sm:p-10 border border-[#E0D4C5] shadow-lg relative">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Image Preview */}
              <div className="aspect-square bg-[#FAF7F2] border border-[#E0D4C5] p-2 overflow-hidden relative shadow-md">
                <img
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-[#1F1813]/80 backdrop-blur-xs text-white p-2.5 text-xs font-serif italic text-center">
                  "{active.quote}"
                </div>
              </div>

              {/* Editorial Breakdown */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B1E13] font-semibold block">
                    Culinary Character
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E1A] mt-1">
                    {active.name}
                  </h3>
                  <p className="font-serif italic text-xs text-[#7A6B5F] mt-0.5">
                    {active.hindi}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#DFD3C3] space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-[#241E1A] uppercase tracking-wider block text-[10px]">
                      Pantry Role
                    </span>
                    <span className="text-[#5A4E45]">{active.role}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-[#241E1A] uppercase tracking-wider block text-[10px]">
                      Sourced From
                    </span>
                    <span className="text-[#5A4E45]">{active.origin}</span>
                  </div>

                  <div>
                    <span className="font-semibold text-[#241E1A] uppercase tracking-wider block text-[10px]">
                      Flavor Chemistry
                    </span>
                    <span className="text-[#8B1E13] font-medium">{active.flavorProfile}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#5A4E45] leading-relaxed pt-2 border-t border-[#DFD3C3]">
                  {active.description}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DFD3C3] flex items-center justify-between text-xs text-[#7A6B5F]">
              <span>Handpicked at seasonal prime</span>
              <span>100% Unadulterated</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
