import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Flame, Sparkles } from 'lucide-react';
import { PRODUCTS, flagshipMacroImg } from '../data/products';
import mangoImg from '../assets/images/product_mango_pickle_1790438158089.jpg';
import craftImg from '../assets/images/craft_sundrying_spices_1790438200269.jpg';
import heroImg from '../assets/images/hero_pickle_composition_1790438144628.jpg';
import { useCart } from '../context/CartContext';

export const FlagshipPickleStory: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState('500g');
  const { addToCart, setIsCartOpen } = useCart();

  const flagshipProduct = PRODUCTS[0]; // Heritage Raw Mango Pickle
  const currentSizeObj = flagshipProduct.sizes.find(s => s.weight === selectedWeight) || flagshipProduct.sizes[1];

  const chapters = [
    {
      step: '01 / THE FRUIT',
      title: 'Ramkela Raw Green Mango',
      subtitle: 'Crisp, dense flesh harvested at early morning prime',
      description: 'Not all mangoes are born for the jar. Ramkela possesses dense fibrous pulp and a vibrant, assertive acidity that refuses to soften into mush over twelve months of curing.',
      image: mangoImg,
      accent: 'Natural Tartness'
    },
    {
      step: '02 / THE SPICES',
      title: 'Stone-Cracked Yellow Mustard',
      subtitle: 'Yellow rai dal, slow-roasted fenugreek, and nigella',
      description: 'Spices are never pulverized into inert dust. We crack whole yellow mustard dal and roast fenugreek on iron tawas just enough to release their essential oils and nutty bitterness.',
      image: craftImg,
      accent: 'Cracked Aroma'
    },
    {
      step: '03 / THE GOLDEN OIL',
      title: 'Kacchi Ghani Mustard Oil',
      subtitle: 'Single-origin virgin mustard oil pressed in wooden mills',
      description: 'The golden lifeblood of traditional Indian preservation. Its pungent allyl isothiocyanate creates an organic antimicrobial seal, allowing the pickle to mature purely in natural sunlight.',
      image: heroImg,
      accent: 'Pungent Warmth'
    },
    {
      step: '04 / THE FINISHED RELISH',
      title: 'Aged Heritage Mango Pickle',
      subtitle: 'Glistening in cold-pressed oil, ready for your lunch table',
      description: 'After fourteen sunny days in glazed martaban jars, the raw fruit yields to the oil and spice. Crisp, pungent, and deeply satisfying—the benchmark of home cooking.',
      image: flagshipMacroImg,
      accent: 'The Finished Masterpiece'
    }
  ];

  const handleQuickAdd = () => {
    addToCart(flagshipProduct, selectedWeight, 1);
  };

  return (
    <section id="flagship" className="py-24 sm:py-36 bg-[#1F1813] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background ambient warmth */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 rounded-full bg-[#8B1E13]/25 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 rounded-full bg-[#D97706]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pre-Title */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-[#382C25] text-xs uppercase tracking-[0.25em] text-[#D97706]">
          <span>The Flagship Narrative · Single Origin</span>
          <span>दादी का आम का अचार</span>
        </div>

        {/* Grand Headline: MANGO. MUSTARD. MEMORIES. */}
        <div className="pt-10 sm:pt-14 space-y-4 max-w-4xl">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4C9BC] font-medium block">
            Product In Focus
          </span>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF7F2] leading-[0.95]">
            MANGO. <br />
            <span className="text-[#D97706] italic">MUSTARD.</span> <br />
            MEMORIES.
          </h2>
          <p className="font-serif text-lg sm:text-xl italic text-[#D4C9BC] max-w-2xl pt-2">
            The benchmark of Indian home cooking. An intimate journey from orchard to ceramic jar.
          </p>
        </div>

        {/* Interactive Visual Narrative Grid */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Dynamic Photography Canvas */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden bg-[#261E19] p-3 border border-[#4A3B31] shadow-2xl">
              <div className="aspect-16/11 sm:aspect-16/10 overflow-hidden relative">
                <img
                  src={chapters[activeStage].image}
                  alt={chapters[activeStage].title}
                  className="w-full h-full object-cover transition-all duration-700 ease-out transform scale-100 hover:scale-102"
                />
                
                {/* Visual Label Tag */}
                <div className="absolute bottom-4 left-4 bg-[#1F1813]/85 backdrop-blur-xs px-3.5 py-1.5 border border-[#4A3B31] text-xs text-[#FAF7F2] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                  <span className="font-mono text-[11px] uppercase tracking-wider">{chapters[activeStage].accent}</span>
                </div>
              </div>
            </div>

            {/* Tasting Note Chips */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-[#D4C9BC]">
              <span className="px-3 py-1.5 bg-[#2E241E] border border-[#45372D]">
                Sharp Raw Mango Acid
              </span>
              <span className="px-3 py-1.5 bg-[#2E241E] border border-[#45372D]">
                Golden Kacchi Ghani Pungency
              </span>
              <span className="px-3 py-1.5 bg-[#2E241E] border-[#45372D] border">
                Roasted Fenugreek Note
              </span>
            </div>
          </div>

          {/* Right: Chapter Steps & Direct Add To Cart */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Step Selector Tabs */}
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-widest text-[#D97706]">
                {chapters[activeStage].step}
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF7F2] leading-tight">
                {chapters[activeStage].title}
              </h3>

              <p className="font-serif italic text-base text-[#D4C9BC]">
                "{chapters[activeStage].subtitle}"
              </p>

              <p className="text-sm sm:text-base text-[#A89A8E] leading-relaxed pt-2">
                {chapters[activeStage].description}
              </p>
            </div>

            {/* Chapter Stepper Buttons */}
            <div className="grid grid-cols-4 gap-2 pt-4 border-t border-[#382C25]">
              {chapters.map((ch, idx) => (
                <button
                  key={ch.step}
                  type="button"
                  onClick={() => setActiveStage(idx)}
                  className={`py-2 text-left text-xs transition-all cursor-pointer border-t-2 ${
                    activeStage === idx
                      ? 'border-[#D97706] text-[#FAF7F2] font-semibold'
                      : 'border-transparent text-[#7A6B5F] hover:text-[#D4C9BC]'
                  }`}
                >
                  <span className="block font-mono text-[10px]">0{idx + 1}</span>
                  <span className="truncate block text-[11px] mt-0.5">{ch.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Quick Purchase Widget For Flagship */}
            <div className="p-6 bg-[#2B211A] border border-[#45372D] rounded-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#A89A8E] block">
                    Heritage Raw Mango Jar
                  </span>
                  <span className="font-serif text-2xl font-bold text-[#FAF7F2] tabular-nums">
                    ₹{currentSizeObj.price}
                  </span>
                </div>

                {/* Weight selector */}
                <div className="flex items-center gap-1.5">
                  {flagshipProduct.sizes.map((s) => (
                    <button
                      key={s.weight}
                      type="button"
                      onClick={() => setSelectedWeight(s.weight)}
                      className={`px-2.5 py-1 text-xs font-medium border transition-colors cursor-pointer ${
                        selectedWeight === s.weight
                          ? 'bg-[#D97706] text-[#1F1813] border-[#D97706] font-semibold'
                          : 'bg-transparent text-[#D4C9BC] border-[#524337] hover:border-[#D4C9BC]'
                      }`}
                    >
                      {s.weight}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleQuickAdd}
                className="w-full py-3.5 bg-[#8B1E13] hover:bg-[#A32216] text-[#FAF7F2] text-xs font-semibold uppercase tracking-[0.16em] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Bag Flagship Batch ({selectedWeight} — ₹{currentSizeObj.price})</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
