import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { flagshipMacroImg, mustardMacroImg, chilliMacroImg } from '../data/products';

interface IngredientData {
  id: string;
  name: string;
  hindi: string;
  descriptors: string[];
  description: string;
  origin: string;
  image: string;
  note: string;
}

const INGREDIENTS: IngredientData[] = [
  {
    id: 'mango',
    name: 'MANGO',
    hindi: 'कच्चा आम',
    descriptors: ['TANGY', 'SUN-RIPENED', 'SPICED'],
    description:
      'Firm, sour green Ramkela raw mangoes hand-harvested at the onset of summer. Sliced with heavy traditional iron blades, massaged with mountain rock salt and sun-dried until the moisture softens into pure concentrated tartness.',
    origin: 'Uttar Pradesh Orchards',
    image: flagshipMacroImg,
    note: 'The structural spine of authentic Indian homemade pickle.',
  },
  {
    id: 'mustard',
    name: 'MUSTARD',
    hindi: 'पीली सरसों व तेल',
    descriptors: ['COLD-PRESSED', 'PUNGENT', 'CRACKED'],
    description:
      'Stone-cracked yellow mustard seeds blended with unrefined, cold-pressed virgin mustard oil. The signature pungent bite awakens the palate and serves as centuries-proven natural preservation without chemicals.',
    origin: 'Rajasthan Cold-Pressed Mills',
    image: mustardMacroImg,
    note: 'Pure pungent warmth that deepens with age.',
  },
  {
    id: 'chilli',
    name: 'CHILLI',
    hindi: 'लाल मिर्च',
    descriptors: ['SUN-DRIED', 'AROMATIC', 'WARM'],
    description:
      'Plump Banarasi and Kashmiri red chillies sun-cured under open skies until their leathery skins soften. Gently roasted over embers to coax out fruitiness and gentle lingering warmth rather than harsh heat.',
    origin: 'Varanasi Heritage Belt',
    image: chilliMacroImg,
    note: 'Hand-slit and stuffed whole with aromatic roasted masalas.',
  },
];

export const TheIngredient: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = INGREDIENTS[activeIdx];

  return (
    <section id="ingredient" className="relative py-28 sm:py-36 md:py-44 bg-[#1E0F0A] text-[#F3EBDD] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Top Header Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#F3EBDD]/15 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#D69B2D]">
            <span className="w-6 h-[1px] bg-[#D69B2D]" />
            <span>03 / Hero Ingredients</span>
          </div>

          {/* Interactive Ingredient Selector (No Pills, Pure Editorial Tabs) */}
          <div className="flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            {INGREDIENTS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setActiveIdx(idx)}
                className={`py-1 relative transition-colors cursor-pointer focus:outline-hidden ${
                  activeIdx === idx
                    ? 'text-[#D69B2D] font-bold'
                    : 'text-[#F3EBDD]/50 hover:text-[#F3EBDD]'
                }`}
              >
                <span>{`0${idx + 1}. ${item.name}`}</span>
                {activeIdx === idx && (
                  <motion.span
                    layoutId="activeIngredientIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D69B2D]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Giant Visual Composition */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[580px]">
          
          {/* Left Column: Massive Editorial Typography & Raw Details */}
          <div className="lg:col-span-6 space-y-8 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                {/* Hindi Title Kicker */}
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase font-mono tracking-[0.25em] text-[#D69B2D]">
                    {current.origin}
                  </span>
                  <span className="text-[#F3EBDD]/30">·</span>
                  <span className="font-serif italic text-sm text-[#F3EBDD]/70">{current.hindi}</span>
                </div>

                {/* Enormous Serif Headline */}
                <h3 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold text-[#F3EBDD] leading-[0.88] tracking-tight">
                  {current.name}
                </h3>

                {/* Attributes: TANGY · SUN-RIPENED · SPICED */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono tracking-[0.22em] text-[#D69B2D]">
                  {current.descriptors.map((d, i) => (
                    <React.Fragment key={d}>
                      <span>{d}</span>
                      {i < current.descriptors.length - 1 && (
                        <span className="text-[#F3EBDD]/30">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Refined Description */}
                <p className="text-sm sm:text-base text-[#F3EBDD]/80 font-light leading-relaxed max-w-lg pt-2">
                  {current.description}
                </p>

                {/* Signature Note */}
                <div className="pt-4 border-t border-[#F3EBDD]/15 flex items-center gap-3 text-xs text-[#F3EBDD]/60 italic font-serif">
                  <span>“{current.note}”</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Giant Macro Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-16/11 sm:aspect-16/10 lg:aspect-4/3 overflow-hidden shadow-2xl bg-[#28150D]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={`Macro food photography of raw ${current.name}`}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover filter contrast-[1.08]"
                />
              </AnimatePresence>

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A]/70 via-transparent to-transparent pointer-events-none" />

              {/* Macro Watermark Number */}
              <div className="absolute bottom-6 right-6 font-mono text-xs uppercase tracking-widest text-[#D69B2D]">
                FIG. 0{activeIdx + 1}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
