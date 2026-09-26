import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, mangoImg } from '../data/products';

export const FlagshipHero: React.FC = () => {
  const { addToCart } = useCart();
  const flagship = PRODUCTS[0]; // Heritage Raw Mango Pickle
  const [selectedWeight, setSelectedWeight] = useState<'250g' | '500g' | '1kg'>('500g');
  const [added, setAdded] = useState(false);

  const currentSize = flagship.sizes.find((s) => s.weight === selectedWeight) || flagship.sizes[0];

  const handleAdd = () => {
    addToCart(flagship, selectedWeight, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <section id="flagship" className="relative min-h-screen py-28 sm:py-36 md:py-44 bg-[#1E0F0A] text-[#F3EBDD] flex flex-col justify-center overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-[#7D2418]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 w-full">
        
        {/* Eyebrow Label */}
        <div className="flex items-center justify-between border-b border-[#F3EBDD]/15 pb-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#D69B2D]">
            <span className="w-6 h-[1px] bg-[#D69B2D]" />
            <span>05 / The Flagship Monograph</span>
          </div>
          <span className="font-serif italic text-xs text-[#F3EBDD]/60 tracking-wider">
            Batch No. 24 Reserve
          </span>
        </div>

        {/* Central Composition */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Notes */}
          <div className="lg:col-span-3 space-y-12 order-2 lg:order-1">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#D69B2D] block">
                [01] THE FRUIT
              </span>
              <h4 className="font-serif text-2xl font-bold tracking-wide text-[#F3EBDD]">
                MANGO
              </h4>
              <p className="text-xs text-[#F3EBDD]/70 font-light leading-relaxed">
                Hand-cut crisp Ramkela raw mango. High natural acidity, firm crunch that never turns mushy.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#D69B2D] block">
                [02] THE PRESERVATIVE
              </span>
              <h4 className="font-serif text-2xl font-bold tracking-wide text-[#F3EBDD]">
                MUSTARD
              </h4>
              <p className="text-xs text-[#F3EBDD]/70 font-light leading-relaxed">
                Pungent yellow mustard dal & cold-pressed kacchi ghani oil. Natural antimicrobial warmth.
              </p>
            </div>
          </div>

          {/* Centerpiece Image & Overlapping Typography */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2 my-6 lg:my-0">
            
            {/* Watermark Behind Image */}
            <div className="absolute select-none pointer-events-none text-outline-light font-serif text-[18vw] lg:text-[14vw] leading-none whitespace-nowrap opacity-20 -z-0">
              MANGO
            </div>

            {/* Central Product Jar Vessel */}
            <div className="relative w-full max-w-md sm:max-w-lg aspect-4/5 overflow-hidden shadow-2xl z-10 bg-[#28150D] border border-[#F3EBDD]/15">
              <img
                src={mangoImg}
                alt="Heritage Raw Mango Pickle Flagship Jar"
                className="w-full h-full object-cover filter contrast-[1.08] hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A]/85 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Inset Title */}
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#D69B2D] block mb-1">
                  Our Benchmark Recipe
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#F3EBDD] tracking-tight">
                  Heritage Raw Mango Pickle
                </h3>
                <span className="font-serif italic text-xs text-[#F3EBDD]/70 block mt-1">
                  दादी का असली आम का अचार
                </span>
              </div>
            </div>

          </div>

          {/* Right Notes & Direct Cart Trigger */}
          <div className="lg:col-span-3 space-y-12 order-3">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#D69B2D] block">
                [03] THE HEAT
              </span>
              <h4 className="font-serif text-2xl font-bold tracking-wide text-[#F3EBDD]">
                CHILLI
              </h4>
              <p className="text-xs text-[#F3EBDD]/70 font-light leading-relaxed">
                Kashmiri chilli ground on stone. Vibrant deep red hue with aromatic fruitiness and mild sting.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#D69B2D] block">
                [04] THE ELEMENT
              </span>
              <h4 className="font-serif text-2xl font-bold tracking-wide text-[#F3EBDD]">
                TIME
              </h4>
              <p className="text-xs text-[#F3EBDD]/70 font-light leading-relaxed">
                14 continuous days under the summer sun. Zero artificial vinegar or industrial stabilizers.
              </p>
            </div>

            {/* Weight Selector & Minimal CTA */}
            <div className="pt-4 border-t border-[#F3EBDD]/15 space-y-4">
              <div className="flex items-center gap-2">
                {(['250g', '500g', '1kg'] as const).map((w) => (
                  <button
                    key={w}
                    type="button"
                    onClick={() => setSelectedWeight(w)}
                    className={`px-3 py-1 text-xs font-mono tracking-widest cursor-pointer transition-colors ${
                      selectedWeight === w
                        ? 'bg-[#D69B2D] text-[#1E0F0A] font-bold'
                        : 'text-[#F3EBDD]/60 hover:text-[#F3EBDD] border border-[#F3EBDD]/20'
                    }`}
                  >
                    {w}
                  </button>
                ))}
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl font-bold text-[#F3EBDD] tabular-nums">
                  ₹{currentSize.price}
                </span>
                <span className="text-xs font-mono text-[#F3EBDD]/50 uppercase tracking-widest">
                  / {selectedWeight} Jar
                </span>
              </div>

              {/* Minimal Line CTA */}
              <button
                type="button"
                onClick={handleAdd}
                className="group relative inline-flex items-center gap-3 text-xs uppercase font-semibold tracking-[0.24em] text-[#D69B2D] hover:text-[#F3EBDD] transition-colors cursor-pointer focus:outline-hidden pb-1"
              >
                <span>{added ? 'Added to Cart ✓' : 'Add To Cart →'}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#D69B2D] scale-x-100 origin-left transition-transform group-hover:scale-x-110" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
