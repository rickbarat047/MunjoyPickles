import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { tableSpreadImg } from '../data/products';

const PAIRINGS = ['DAL', 'RICE', 'PARATHA', 'KHICHDI', 'ROTI'];

export const TheTable: React.FC = () => {
  const [activeWordIdx, setActiveWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveWordIdx((prev) => (prev + 1) % PAIRINGS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="table" className="relative py-28 sm:py-36 md:py-48 bg-[#1E0F0A] text-[#F3EBDD] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Header Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#F3EBDD]/15 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#D69B2D]">
            <span className="w-6 h-[1px] bg-[#D69B2D]" />
            <span>08 / Everyday Companion</span>
          </div>

          <span className="font-serif italic text-xs text-[#F3EBDD]/60 tracking-wider">
            At the Center of Every Meal
          </span>
        </div>

        {/* Cinematic Table Spread Banner */}
        <div className="relative aspect-16/10 sm:aspect-16/9 lg:aspect-21/9 overflow-hidden shadow-2xl bg-[#28150D] border border-[#F3EBDD]/15 mb-14 sm:mb-20">
          <img
            src={tableSpreadImg}
            alt="Traditional Indian dining table spread with steaming dal, rice, rotis and Munjoy pickles"
            className="w-full h-full object-cover object-center filter contrast-[1.1] brightness-[0.82]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A] via-transparent to-[#1E0F0A]/40" />

          {/* Overlaid Animated Meal Words: DAL · RICE · PARATHA · KHICHDI · ROTI */}
          <div className="absolute top-8 left-8 sm:top-12 sm:left-12 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-[#D69B2D]">
            {PAIRINGS.map((word, i) => {
              const isCurrent = activeWordIdx === i;
              return (
                <span
                  key={word}
                  className={`transition-all duration-500 ${
                    isCurrent
                      ? 'text-[#F3EBDD] font-bold scale-110 border-b-2 border-[#D69B2D]'
                      : 'text-[#F3EBDD]/40'
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* Central Overlay Quote */}
          <div className="absolute bottom-8 left-8 right-8 sm:bottom-14 sm:left-14 sm:right-14 max-w-2xl">
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.02] text-[#F3EBDD]">
              “Sometimes, all a meal needs is <span className="italic font-bold text-[#D69B2D]">one more spoonful.”</span>
            </h3>
          </div>
        </div>

        {/* Narrative Columns Underneath */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 pt-4 text-xs font-mono tracking-wider leading-relaxed text-[#F3EBDD]/70">
          <div className="space-y-2">
            <span className="text-[#D69B2D] uppercase block">[01] WITH ARHAR DAL & RICE</span>
            <p>
              A spoonful atop piping hot steamed rice bathed in cow ghee. The raw mango acidity cuts through the richness of yellow lentils like clockwork.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#D69B2D] uppercase block">[02] FOLDED IN HOT PARATHAS</span>
            <p>
              Spread directly into warm flaky ajwain flatbread straight off the cast iron tawa. The spiced oil melts into the crispy layers.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[#D69B2D] uppercase block">[03] RAINY EVENING KHICHDI</span>
            <p>
              Soft comfort of moong dal and rice porridge paired with the sharp, nose-tingling punch of cold-pressed mustard oil.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
