import React, { useState } from 'react';
import { X, ShoppingBag, ArrowRight, Star, Flame } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../types';

interface QuickViewModalProps {
  onOpenFullDetail: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ onOpenFullDetail }) => {
  const { quickViewProduct, setQuickViewProduct, addToCart, setIsCartOpen } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>('');

  if (!quickViewProduct) return null;

  const currentWeight = selectedWeight || quickViewProduct.sizes[0].weight;
  const currentSizeObj = quickViewProduct.sizes.find((s) => s.weight === currentWeight) || quickViewProduct.sizes[0];

  const handleAddToCart = () => {
    addToCart(quickViewProduct, currentWeight, 1);
    setQuickViewProduct(null);
  };

  const handleFullDetail = () => {
    const prod = quickViewProduct;
    setQuickViewProduct(null);
    onOpenFullDetail(prod);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-xs shadow-2xl border border-[#E0D4C5] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 text-[#5A4E45] hover:text-[#8B1E13] rounded-xs hover:bg-[#EAE0D3] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="aspect-square bg-[#F0EAE1] overflow-hidden">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="p-6 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-[#7A6B5F] mb-1">
                <span className="uppercase tracking-wider font-semibold text-[#8B1E13]">
                  {quickViewProduct.categoryLabel}
                </span>
                <div className="flex items-center text-[#D97706]">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="ml-1 font-semibold text-[#241E1A]">{quickViewProduct.rating}</span>
                </div>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#241E1A]">
                {quickViewProduct.name}
              </h3>
              <p className="text-xs text-[#5A4E45] mt-2 line-clamp-3 leading-relaxed">
                {quickViewProduct.tagline}
              </p>

              {/* Price & Size Selector */}
              <div className="mt-4 pt-3 border-t border-[#E8DFD5] space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-2xl font-bold text-[#241E1A] tabular-nums">
                    ₹{currentSizeObj.price}
                  </span>
                  <span className="text-xs text-[#7A6B5F]">{currentWeight}</span>
                </div>

                <div className="flex items-center gap-1.5 pt-1">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s.weight}
                      type="button"
                      onClick={() => setSelectedWeight(s.weight)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-xs border transition-colors cursor-pointer ${
                        currentWeight === s.weight
                          ? 'bg-[#241E1A] text-[#FAF7F2] border-[#241E1A]'
                          : 'bg-[#FAF7F2] text-[#5A4E45] border-[#D5C7B7] hover:bg-[#EFE8DF]'
                      }`}
                    >
                      {s.weight}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-[#E8DFD5]">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full py-2.5 bg-[#8B1E13] hover:bg-[#6E140B] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-xs"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Cart (₹{currentSizeObj.price})</span>
              </button>

              <button
                type="button"
                onClick={handleFullDetail}
                className="w-full py-2 bg-transparent hover:bg-[#EFE8DF] text-[#3D332A] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-1 transition-colors cursor-pointer"
              >
                <span>View Full Details & Ingredients</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
