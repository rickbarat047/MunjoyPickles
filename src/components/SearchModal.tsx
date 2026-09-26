import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';

interface SearchModalProps {
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ onSelectProduct }) => {
  const { isSearchOpen, setIsSearchOpen } = useCart();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false);
    };
    if (isSearchOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  if (!isSearchOpen) return null;

  const results = query.trim() === ''
    ? PRODUCTS
    : PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.tagline.toLowerCase().includes(query.toLowerCase()) ||
        p.ingredients.some((ing) => ing.toLowerCase().includes(query.toLowerCase())) ||
        (p.hindiName && p.hindiName.includes(query))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24 bg-black/60 backdrop-blur-xs">
      <div
        className="w-full max-w-2xl bg-[#FAF7F2] rounded-xs shadow-2xl border border-[#E0D4C5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-[#E8DFD5] flex items-center gap-3 bg-[#F5EFEB]">
          <Search className="w-5 h-5 text-[#8B1E13] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search by pickle, ingredient (e.g. mango, garlic, mustard), or spice..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-[#241E1A] placeholder-[#8A7768] focus:outline-hidden"
          />
          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#5A4E45] hover:text-[#8B1E13] rounded-xs transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-[#E8DFD5]">
          {results.length === 0 ? (
            <div className="py-12 text-center text-xs text-[#7A6B5F]">
              No pickles matching "{query}". Try "mango", "chilli", "garlic", or "lime".
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setIsSearchOpen(false);
                  onSelectProduct(product);
                }}
                className="py-3 px-2 flex items-center justify-between hover:bg-[#F5EFEB] rounded-xs transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-xs border border-[#E0D4C5]"
                  />
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#241E1A] group-hover:text-[#8B1E13] transition-colors">
                      {product.name}
                    </h4>
                    <span className="text-xs text-[#7A6B5F]">
                      From ₹{product.basePrice} · {product.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#8B1E13] opacity-0 group-hover:opacity-100 transition-opacity">
                    View
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#8B1E13] transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Quick Suggestions Footer */}
        <div className="p-3 bg-[#EDE4D8] border-t border-[#E0D4C5] flex items-center justify-between text-xs text-[#6B5D52]">
          <span>Popular Searches:</span>
          <div className="flex items-center gap-2">
            {['Mango', 'Red Chilli', 'Lime', 'Garlic'].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setQuery(tag)}
                className="hover:text-[#8B1E13] underline cursor-pointer"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
