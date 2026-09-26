import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, ArrowRight, Star, Flame, ChevronDown, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const { addToCart, setIsCartOpen, setIsCheckoutOpen } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product.sizes[1]?.weight || product.sizes[0].weight);
  const [quantity, setQuantity] = useState(1);
  const [activeAccordion, setActiveAccordion] = useState<string>('ingredients');

  const currentSizeObj = product.sizes.find((s) => s.weight === selectedWeight) || product.sizes[0];

  useEffect(() => {
    // Reset weight and qty when product opens
    setSelectedWeight(product.sizes[1]?.weight || product.sizes[0].weight);
    setQuantity(1);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  const handleAddToCart = () => {
    addToCart(product, selectedWeight, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedWeight, quantity);
    setIsCheckoutOpen(true);
    onClose();
  };

  const toggleAccordion = (id: string) => {
    setActiveAccordion(prev => (prev === id ? '' : id));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-xs">
      <div
        className="relative w-full max-w-4xl bg-[#FAF7F2] rounded-xs shadow-2xl border border-[#E0D4C5] overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar with close button */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFD5] bg-[#F5EFEB]">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8B1E13] font-semibold">
            {product.categoryLabel}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#5A4E45] hover:text-[#8B1E13] rounded-xs hover:bg-[#EAE0D3] transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: Product Photography & Badges */}
            <div className="md:col-span-5 space-y-4">
              <div className="relative aspect-square sm:aspect-4/5 overflow-hidden rounded-xs border border-[#E0D4C5] bg-[#EFE8DF]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-3 left-3 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#E0D4C5] flex items-center gap-1 text-xs">
                  <span className="text-[#6B5D52]">Heat:</span>
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Flame
                        key={i}
                        className={`w-3 h-3 ${
                          i < product.heatLevel ? 'text-[#8B1E13] fill-[#8B1E13]' : 'text-[#D5C7B7]'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Spice Profile Notes */}
              <div className="p-4 bg-[#F5EFEB] rounded-xs border border-[#E8DFD5] space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#7A6B5F] font-semibold block">
                  Aromatic Notes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.spiceNotes.map((note) => (
                    <span
                      key={note}
                      className="text-xs px-2.5 py-1 bg-[#FAF7F2] text-[#3D332A] rounded-xs border border-[#E0D4C5]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Information, Pricing, Size Selection & Purchasing */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#7A6B5F] mb-1">
                  <div className="flex items-center text-[#D97706]">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="ml-1 font-semibold text-[#241E1A]">{product.rating}</span>
                  </div>
                  <span>·</span>
                  <span>{product.reviewsCount} verified reviews</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#241E1A]">
                  {product.name}
                </h2>
                {product.hindiName && (
                  <p className="font-serif italic text-sm text-[#8B1E13] mt-0.5">
                    {product.hindiName}
                  </p>
                )}
                
                <p className="text-sm text-[#5A4E45] mt-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price Display */}
              <div className="flex items-baseline gap-3 pt-2 border-t border-[#E8DFD5]">
                <span className="font-serif text-3xl font-bold text-[#241E1A] tabular-nums">
                  ₹{currentSizeObj.price}
                </span>
                <span className="text-xs text-[#7A6B5F]">
                  for {currentSizeObj.weight} ({currentSizeObj.servings})
                </span>
              </div>

              {/* Jar Size Selection */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                  Select Jar Size:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s.weight}
                      type="button"
                      onClick={() => setSelectedWeight(s.weight)}
                      className={`p-2.5 text-left border rounded-xs transition-all cursor-pointer ${
                        selectedWeight === s.weight
                          ? 'border-[#8B1E13] bg-[#8B1E13]/5 shadow-xs'
                          : 'border-[#E0D4C5] bg-[#FAF7F2] hover:bg-[#F5EFEB]'
                      }`}
                    >
                      <div className="font-semibold text-xs text-[#241E1A]">{s.weight}</div>
                      <div className="text-[11px] text-[#7A6B5F] mt-0.5 tabular-nums">₹{s.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Stepper & Add to Cart / Buy Now */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-4">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#D5C7B7] rounded-xs bg-[#FAF7F2]">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="px-3 py-2 text-[#5A4E45] hover:text-[#241E1A] hover:bg-[#EFE8DF] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 py-2 text-xs font-semibold text-[#241E1A] tabular-nums min-w-8 text-center">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="px-3 py-2 text-[#5A4E45] hover:text-[#241E1A] hover:bg-[#EFE8DF] transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Add to Cart */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 py-3 bg-[#FAF7F2] hover:bg-[#F5EFEB] border border-[#8B1E13] text-[#8B1E13] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Cart (₹{currentSizeObj.price * quantity})</span>
                  </button>
                </div>

                {/* Instant Buy Now Button */}
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full py-3.5 bg-[#8B1E13] hover:bg-[#6E140B] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Buy Now — Fast Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Pairs Beautifully With */}
              <div className="pt-4 border-t border-[#E8DFD5] space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#7A6B5F] font-semibold block">
                  Pairs Beautifully With:
                </span>
                <div className="space-y-1.5">
                  {product.pairings.map((p) => (
                    <div key={p.name} className="text-xs text-[#5A4E45]">
                      <span className="font-semibold text-[#241E1A]">{p.name}: </span>
                      <span>{p.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Expandable Accordions */}
              <div className="pt-2 border-t border-[#E8DFD5] divide-y divide-[#E8DFD5]">
                {/* Accordion 1: Ingredients */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleAccordion('ingredients')}
                    className="w-full py-3 flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#241E1A] hover:text-[#8B1E13]"
                  >
                    <span>Ingredients & Heritage Spices</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'ingredients' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === 'ingredients' && (
                    <div className="pb-3 text-xs text-[#5A4E45] space-y-1.5">
                      <p>Carefully blended with unadulterated ingredients:</p>
                      <ul className="list-disc pl-4 space-y-1">
                        {product.ingredients.map((ing) => (
                          <li key={ing}>{ing}</li>
                        ))}
                      </ul>
                      <p className="text-[11px] text-[#7A6B5F] pt-1">
                        Contains no artificial colourings, synthetic preservatives, or industrial vinegar.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 2: Method & Curing */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleAccordion('curing')}
                    className="w-full py-3 flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#241E1A] hover:text-[#8B1E13]"
                  >
                    <span>Traditional Method & Curing</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'curing' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === 'curing' && (
                    <div className="pb-3 text-xs text-[#5A4E45] space-y-2">
                      <p>{product.curingMethod}</p>
                      <p className="text-[11px] text-[#7A6B5F]">
                        Natural maturation in glazed earthenware ensures flavours deepen over months.
                      </p>
                    </div>
                  )}
                </div>

                {/* Accordion 3: Storage & Shelf Life */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleAccordion('storage')}
                    className="w-full py-3 flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#241E1A] hover:text-[#8B1E13]"
                  >
                    <span>Storage & Shelf Life</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'storage' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === 'storage' && (
                    <div className="pb-3 text-xs text-[#5A4E45] space-y-2">
                      <p>{product.storage}</p>
                      <p className="font-medium text-[#241E1A]">Shelf Life: {product.shelfLife}</p>
                    </div>
                  )}
                </div>

                {/* Accordion 4: Shipping & Safe Transit */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleAccordion('shipping')}
                    className="w-full py-3 flex items-center justify-between text-left text-xs font-semibold uppercase tracking-wider text-[#241E1A] hover:text-[#8B1E13]"
                  >
                    <span>Shipping & Transit Safety</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeAccordion === 'shipping' ? 'rotate-180' : ''}`} />
                  </button>
                  {activeAccordion === 'shipping' && (
                    <div className="pb-3 text-xs text-[#5A4E45] space-y-2">
                      <div className="flex items-start gap-2">
                        <Truck className="w-4 h-4 text-[#8B1E13] shrink-0 mt-0.5" />
                        <span>Dispatched within 24–48 hours across all Indian pincodes in triple-cushioned leak-proof protective packaging.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <RefreshCw className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" />
                        <span>100% Replacement Guarantee if jar arrives damaged in transit.</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
