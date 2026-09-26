import React from 'react';
import { INGREDIENTS_SHOWCASE } from '../data/brandData';
import { Sparkles } from 'lucide-react';

export const IngredientsSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5EFEB] relative border-t border-b border-[#EADFD2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E0D4C5]">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8B1E13] font-semibold">
              Pure Provenance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#241E1A]">
              Good pickle starts long before the jar.
            </h2>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              We reject spice powders that have spent months in warehouse sacks. Our spices are whole, sun-warmed, and cracked fresh right before blending.
            </p>
          </div>

          <div className="text-xs uppercase tracking-[0.18em] text-[#7A6B5F] flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#8B1E13]" />
            <span>Unadulterated Indian Spices</span>
          </div>
        </div>

        {/* Ingredients Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {INGREDIENTS_SHOWCASE.map((item, idx) => (
            <div
              key={item.name}
              className="p-6 bg-[#FAF7F2] rounded-xs border border-[#E8DFD5] hover:border-[#D5C7B7] transition-all duration-300 hover:shadow-xs space-y-3"
            >
              <div className="flex items-center justify-between text-xs">
                <span className="text-[11px] font-mono text-[#8A7768] tabular-nums">0{idx + 1}</span>
                <span className="text-xs font-medium text-[#8B1E13]">{item.characteristic}</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-[#241E1A]">
                {item.name}
              </h3>
              <p className="font-serif italic text-xs text-[#8A7768]">{item.hindi}</p>

              <p className="text-xs text-[#5A4E45] leading-relaxed pt-2 border-t border-[#F0E8DD]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
