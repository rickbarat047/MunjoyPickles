import React, { useState } from 'react';
import { Eye, ShoppingBag, Flame, Star, ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  layout?: 'default' | 'wide' | 'tall';
  onOpenDetail: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, layout = 'default', onOpenDetail }) => {
  const [selectedWeight, setSelectedWeight] = useState(product.sizes[0].weight);
  const { addToCart, setQuickViewProduct } = useCart();

  const currentSizeObj = product.sizes.find((s) => s.weight === selectedWeight) || product.sizes[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, selectedWeight, 1);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  if (layout === 'wide') {
    return (
      <div
        onClick={() => onOpenDetail(product)}
        className="group relative bg-[#F5EFEB] border border-[#E0D4C5] hover:border-[#8B1E13]/50 transition-all duration-500 overflow-hidden cursor-pointer grid grid-cols-1 md:grid-cols-12 shadow-xs hover:shadow-md"
      >
        <div className="md:col-span-6 relative aspect-16/11 sm:aspect-square overflow-hidden bg-[#E8DFD5]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 text-[11px] uppercase tracking-wider font-semibold text-[#8B1E13] border border-[#E0D4C5]">
            Featured Benchmark
          </div>
        </div>

        <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-[#7A6B5F]">
              <span className="uppercase tracking-wider font-medium">{product.categoryLabel}</span>
              <div className="flex items-center text-[#D97706]">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="ml-1 font-semibold text-[#241E1A]">{product.rating}</span>
                <span className="text-[#8A7768] ml-1">({product.reviewsCount})</span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E1A] group-hover:text-[#8B1E13] transition-colors leading-tight">
              {product.name}
            </h3>
            {product.hindiName && (
              <p className="font-serif italic text-xs text-[#8B1E13] -mt-1">{product.hindiName}</p>
            )}

            <p className="text-xs sm:text-sm text-[#5A4E45] leading-relaxed line-clamp-3">
              {product.description}
            </p>

            {/* Spice notes preview */}
            <div className="flex flex-wrap gap-1.5 pt-2">
              {product.spiceNotes.slice(0, 3).map((note) => (
                <span key={note} className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-[#FAF7F2] border border-[#E0D4C5] text-[#3A3027]">
                  {note}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#DFD3C3] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#7A6B5F]">Select Jar Size:</span>
              <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
                {product.sizes.map((s) => (
                  <button
                    key={s.weight}
                    type="button"
                    onClick={() => setSelectedWeight(s.weight)}
                    className={`px-2.5 py-1 text-xs transition-colors ${
                      selectedWeight === s.weight
                        ? 'bg-[#241E1A] text-[#FAF7F2] font-semibold'
                        : 'bg-[#FAF7F2] text-[#5A4E45] border border-[#D5C7B7] hover:bg-[#EFE8DF]'
                    }`}
                  >
                    {s.weight}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <div>
                <span className="text-2xl font-serif font-bold text-[#241E1A] tabular-nums">
                  ₹{currentSizeObj.price}
                </span>
                <span className="text-[11px] text-[#7A6B5F] block">{currentSizeObj.weight} jar</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleQuickView}
                  className="px-3 py-2 border border-[#D5C7B7] bg-[#FAF7F2] hover:bg-[#EAE0D3] text-[#241E1A] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Details</span>
                </button>

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="px-4 py-2 bg-[#8B1E13] hover:bg-[#A32216] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add To Bag</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Editorial Portrait Card
  return (
    <div
      onClick={() => onOpenDetail(product)}
      className="group relative bg-[#FAF7F2] border border-[#E8DFD5] hover:border-[#8B1E13]/50 transition-all duration-500 overflow-hidden cursor-pointer flex flex-col justify-between shadow-2xs hover:shadow-md"
    >
      {/* Photography */}
      <div className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-[#F0EAE1]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Heat tag */}
        <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 text-[10px] uppercase tracking-wider font-medium text-[#3A3027] border border-[#E8DFD5]">
          {product.categoryLabel}
        </div>

        <div className="absolute top-3 right-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-2 py-1 text-[10px] text-[#8B1E13] flex items-center gap-1 border border-[#E8DFD5]">
          <Flame className="w-3 h-3 fill-current" />
          <span className="font-mono">{product.heatLevel}/5</span>
        </div>

        {/* Quick view button on hover */}
        <div className="absolute inset-0 bg-[#1F1813]/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            type="button"
            onClick={handleQuickView}
            className="px-4 py-2 bg-[#FAF7F2] text-[#241E1A] text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-white flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5 text-[#8B1E13]" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-[#7A6B5F] mb-1">
            <span className="font-serif italic text-xs text-[#8B1E13]">{product.hindiName || 'पारंपरिक अचार'}</span>
            <div className="flex items-center text-[#D97706]">
              <Star className="w-3 h-3 fill-current" />
              <span className="ml-1 font-semibold text-[#241E1A]">{product.rating}</span>
            </div>
          </div>

          <h3 className="font-serif text-xl font-bold text-[#241E1A] group-hover:text-[#8B1E13] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-[#5A4E45] line-clamp-2 mt-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Interactive Controls */}
        <div className="pt-3 border-t border-[#EFE8DF] space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#7A6B5F]">Jar:</span>
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {product.sizes.map((s) => (
                <button
                  key={s.weight}
                  type="button"
                  onClick={() => setSelectedWeight(s.weight)}
                  className={`px-2 py-0.5 text-[11px] transition-colors ${
                    selectedWeight === s.weight
                      ? 'bg-[#241E1A] text-[#FAF7F2] font-semibold'
                      : 'bg-[#F0EAE1] text-[#5A4E45] hover:bg-[#E5DBCF]'
                  }`}
                >
                  {s.weight}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <span className="text-xl font-serif font-bold text-[#241E1A] tabular-nums">
              ₹{currentSizeObj.price}
            </span>

            <button
              type="button"
              onClick={handleAddToCart}
              className="px-3.5 py-1.5 bg-[#8B1E13] hover:bg-[#A32216] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <ShoppingBag className="w-3 h-3" />
              <span>Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
