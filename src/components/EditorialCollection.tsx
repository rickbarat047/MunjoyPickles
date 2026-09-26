import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface EditorialCollectionProps {
  onOpenDetail: (product: Product) => void;
}

export const EditorialCollection: React.FC<EditorialCollectionProps> = ({ onOpenDetail }) => {
  const { addToCart } = useCart();
  const [filter, setFilter] = useState<'all' | 'classic' | 'spicy' | 'citrus'>('all');
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filtered = PRODUCTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const p1 = PRODUCTS[1]; // Stuffed Red Chilli (Hero Large)
  const p2 = PRODUCTS[2]; // Aged Lime (Medium)
  const p3 = PRODUCTS[3]; // Whole Garlic (Medium)
  const p4 = PRODUCTS[4]; // Mixed Vegetable (Wide)

  return (
    <section id="collection" className="relative py-28 sm:py-36 md:py-48 bg-[#F3EBDD] text-[#1E0F0A] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Editorial Top Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#1E0F0A]/15 pb-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#7D2418] mb-3">
              <span className="w-6 h-[1px] bg-[#7D2418]" />
              <span>06 / The Pantry Archive</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1E0F0A]">
              Traditional Curing, Bottled.
            </h2>
          </div>

          {/* Interactive Editorial Filter (Text Only, No Pills) */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-mono tracking-widest uppercase">
            {[
              { id: 'all', label: 'All Recipes' },
              { id: 'classic', label: 'Sun-Cured' },
              { id: 'spicy', label: 'Fiery & Bold' },
              { id: 'citrus', label: 'Aged Citrus' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`py-1 relative transition-colors cursor-pointer focus:outline-hidden ${
                  filter === tab.id ? 'text-[#7D2418] font-bold' : 'text-[#1E0F0A]/50 hover:text-[#1E0F0A]'
                }`}
              >
                <span>{tab.label}</span>
                {filter === tab.id && (
                  <motion.span
                    layoutId="activeCollectionFilter"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#7D2418]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Composition Grid */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Row 1: One Huge Product (7 cols) + Two Stacked Products (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* HUGE PRODUCT (7 Cols): Stuffed Red Chilli */}
            {p1 && (
              <div
                className="lg:col-span-7 group relative overflow-hidden bg-[#1E0F0A] text-[#F3EBDD] cursor-pointer min-h-[520px] flex flex-col justify-between p-8 sm:p-12 shadow-2xl"
                onClick={() => onOpenDetail(p1)}
                onMouseEnter={() => setHoveredId(p1.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Background Image Dominates */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={p1.image}
                    alt={p1.name}
                    className="w-full h-full object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A] via-[#1E0F0A]/40 to-transparent" />
                </div>

                {/* Top Info */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#D69B2D]">
                  <span>FIG. 02 · BANARAS</span>
                  <span>{p1.categoryLabel}</span>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 space-y-4 max-w-lg">
                  <span className="font-serif italic text-xs text-[#F3EBDD]/70">{p1.hindiName}</span>
                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EBDD] leading-[0.95]">
                    {p1.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F3EBDD]/80 font-light leading-relaxed line-clamp-2">
                    {p1.tagline}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-[#F3EBDD]/20">
                    <span className="font-serif text-2xl font-bold text-[#F3EBDD] tabular-nums">
                      ₹{p1.basePrice} <span className="text-xs font-mono font-normal text-[#F3EBDD]/50">/ 250g</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p1, '250g', 1);
                      }}
                      className="text-xs uppercase font-mono tracking-widest text-[#D69B2D] hover:text-[#F3EBDD] cursor-pointer hover-underline-editorial pb-0.5"
                    >
                      Quick Add to Bag →
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* STACKED TWO SMALLER PRODUCTS (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
              
              {/* Product 2: Aged Lime */}
              {p2 && (
                <div
                  className="group relative overflow-hidden bg-[#241710] text-[#F3EBDD] cursor-pointer flex-1 min-h-[250px] p-6 sm:p-8 flex flex-col justify-between shadow-xl"
                  onClick={() => onOpenDetail(p2)}
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={p2.image}
                      alt={p2.name}
                      className="w-full h-full object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A]/90 via-[#1E0F0A]/40 to-transparent" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#D69B2D]">
                    <span>FIG. 03 · CITRUS</span>
                    <span className="font-serif font-bold text-lg text-[#F3EBDD]">₹{p2.basePrice}</span>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <span className="font-serif italic text-xs text-[#F3EBDD]/70">{p2.hindiName}</span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3EBDD]">
                      {p2.name}
                    </h4>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p2, '250g', 1);
                      }}
                      className="text-[11px] font-mono uppercase tracking-widest text-[#D69B2D] hover:underline pt-2 block cursor-pointer"
                    >
                      Add To Cart →
                    </button>
                  </div>
                </div>
              )}

              {/* Product 3: Whole Garlic */}
              {p3 && (
                <div
                  className="group relative overflow-hidden bg-[#241710] text-[#F3EBDD] cursor-pointer flex-1 min-h-[250px] p-6 sm:p-8 flex flex-col justify-between shadow-xl"
                  onClick={() => onOpenDetail(p3)}
                >
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <img
                      src={p3.image}
                      alt={p3.name}
                      className="w-full h-full object-cover filter contrast-[1.08] group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A]/90 via-[#1E0F0A]/40 to-transparent" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#D69B2D]">
                    <span>FIG. 04 · WHOLE CLOVE</span>
                    <span className="font-serif font-bold text-lg text-[#F3EBDD]">₹{p3.basePrice}</span>
                  </div>

                  <div className="relative z-10 space-y-1">
                    <span className="font-serif italic text-xs text-[#F3EBDD]/70">{p3.hindiName}</span>
                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#F3EBDD]">
                      {p3.name}
                    </h4>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(p3, '250g', 1);
                      }}
                      className="text-[11px] font-mono uppercase tracking-widest text-[#D69B2D] hover:underline pt-2 block cursor-pointer"
                    >
                      Add To Cart →
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

          {/* Row 2: WIDE PRODUCT BANNER (Pachranga Mixed Vegetable Pickle) */}
          {p4 && (
            <div
              className="group relative overflow-hidden bg-[#1E0F0A] text-[#F3EBDD] cursor-pointer min-h-[380px] p-8 sm:p-14 flex flex-col justify-between shadow-2xl"
              onClick={() => onOpenDetail(p4)}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={p4.image}
                  alt={p4.name}
                  className="w-full h-full object-cover object-center filter contrast-[1.1] group-hover:scale-103 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1E0F0A]/95 via-[#1E0F0A]/70 to-[#1E0F0A]/40" />
              </div>

              <div className="relative z-10 flex items-center justify-between text-xs font-mono uppercase tracking-[0.25em] text-[#D69B2D]">
                <span>FIG. 05 · PANTRY RESERVE</span>
                <span>{p4.categoryLabel}</span>
              </div>

              <div className="relative z-10 max-w-xl space-y-3">
                <span className="font-serif italic text-xs text-[#F3EBDD]/70">{p4.hindiName}</span>
                <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#F3EBDD]">
                  {p4.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#F3EBDD]/80 font-light leading-relaxed">
                  {p4.description}
                </p>

                <div className="pt-4 flex items-center gap-6">
                  <span className="font-serif text-3xl font-bold text-[#F3EBDD] tabular-nums">
                    ₹{p4.basePrice}
                  </span>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(p4, '250g', 1);
                    }}
                    className="text-xs uppercase font-mono tracking-widest text-[#D69B2D] hover:text-[#F3EBDD] cursor-pointer hover-underline-editorial pb-0.5"
                  >
                    Add To Pantry Order →
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
