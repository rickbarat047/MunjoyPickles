import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProductShowcaseProps {
  onOpenDetail: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onOpenDetail }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'Complete Collection' },
    { id: 'classic', label: 'Sun-Cured Classics' },
    { id: 'spicy', label: 'Fiery & Bold' },
    { id: 'tangy', label: 'Tangy Citron' },
    { id: 'heritage', label: 'Heritage Relishes' },
  ];

  const flagshipProduct = PRODUCTS[0];
  const secondaryProducts = PRODUCTS.slice(1);

  return (
    <section id="pickles" className="py-24 sm:py-36 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E8DFD5]">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8B1E13] font-semibold block">
              The Munjoy Pantry
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#241E1A] leading-[1]">
              Explore Our Pickles.
            </h2>
            <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
              Every jar is cured in natural daylight, packed by hand, and steeped in aromatic virgin mustard oil. No chemical stabilizers or artificial acidity.
            </p>
          </div>

          {/* Minimalist Editorial Category Filter */}
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#241E1A] text-[#FAF7F2] font-semibold shadow-xs'
                    : 'bg-[#F5EFEB] text-[#5A4E45] hover:text-[#241E1A] hover:bg-[#EAE0D3]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Product Layout */}
        {activeCategory === 'all' ? (
          <div className="pt-12 sm:pt-16 space-y-10">
            {/* Top: Wide Featured Flagship Product */}
            <ProductCard
              product={flagshipProduct}
              layout="wide"
              onOpenDetail={onOpenDetail}
            />

            {/* Middle: 2 Large Staggered Portrait Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {secondaryProducts.slice(0, 2).map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  layout="default"
                  onOpenDetail={onOpenDetail}
                />
              ))}
            </div>

            {/* Bottom: Remaining Heritage Jars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {secondaryProducts.slice(2).map((prod) => (
                <ProductCard
                  key={prod.id}
                  product={prod}
                  layout="default"
                  onOpenDetail={onOpenDetail}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                layout="default"
                onOpenDetail={onOpenDetail}
              />
            ))}
          </div>
        )}

        {/* Gifting & Celebration Hamper Callout */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 bg-[#F5EFEB] border border-[#E0D4C5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B1E13] font-semibold block">
              Bespoke Gifting
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E1A]">
              Wedding & Festive Ceramic Hampers
            </h3>
            <p className="text-xs sm:text-sm text-[#6B5D52] max-w-xl">
              Delivered in handcrafted teakwood gift boxes with embossed brass serving spoons, personalized calligraphy gift notes, and triple-cushioned protective sealing.
            </p>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-[#8B1E13] hover:bg-[#6E140B] text-[#FAF7F2] text-xs uppercase tracking-[0.16em] font-semibold transition-colors flex items-center gap-2 whitespace-nowrap shadow-xs cursor-pointer"
          >
            <span>Inquire for Gift Boxes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
