import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    shippingFee,
    finalTotal,
    freeShippingThreshold,
    progressToFreeShipping,
    setIsCheckoutOpen,
    appliedPromo,
    applyPromoCode,
    removePromoCode,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput) {
      applyPromoCode(couponInput);
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col justify-between border-l border-[#E0D4C5]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-[#E8DFD5] bg-[#F5EFEB] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#8B1E13]" />
            <h3 className="font-serif text-lg font-bold text-[#241E1A]">Your Munjoy Basket</h3>
            <span className="text-xs text-[#7A6B5F] tabular-nums">
              ({cart.reduce((a, b) => a + b.quantity, 0)} items)
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-[#5A4E45] hover:text-[#8B1E13] rounded-xs hover:bg-[#EAE0D3] transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="p-4 bg-[#EDE4D8] border-b border-[#E0D4C5] space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            {progressToFreeShipping >= 100 ? (
              <span className="font-semibold text-[#15803D] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                Congratulations! You’ve unlocked FREE Indian delivery.
              </span>
            ) : (
              <span className="text-[#5A4E45]">
                Add <span className="font-semibold text-[#8B1E13] tabular-nums">₹{freeShippingThreshold - subtotal}</span> more for <span className="font-semibold">FREE Delivery</span>
              </span>
            )}
            <span className="text-[11px] font-mono text-[#7A6B5F] tabular-nums">
              {progressToFreeShipping}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-[#D5C7B7] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#8B1E13] transition-all duration-300"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 bg-[#F5EFEB] rounded-full flex items-center justify-center mx-auto text-[#B0A294]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-serif text-xl font-bold text-[#241E1A]">Your basket is empty</p>
              <p className="text-xs text-[#7A6B5F] max-w-xs mx-auto">
                No pickles selected yet. Explore our sun-cured varieties to bring warmth to your next meal.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById('pickles');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-2.5 bg-[#8B1E13] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer shadow-xs"
              >
                Browse Pickles
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.selectedWeight}`}
                className="flex items-center gap-4 p-3 bg-[#FAF7F2] border border-[#E8DFD5] rounded-xs"
              >
                {/* Product Image */}
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-xs border border-[#E0D4C5]"
                />

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-bold text-[#241E1A] truncate">
                    {item.product.name}
                  </h4>
                  <div className="text-xs text-[#7A6B5F] flex items-center gap-2 mt-0.5">
                    <span>Jar: {item.selectedWeight}</span>
                    <span>·</span>
                    <span className="font-medium text-[#241E1A] tabular-nums">₹{item.unitPrice} each</span>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-[#D5C7B7] rounded-xs bg-[#F5EFEB]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.selectedWeight, item.quantity - 1)}
                        className="px-2 py-0.5 text-xs text-[#5A4E45] hover:text-[#241E1A]"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-semibold tabular-nums text-[#241E1A]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.selectedWeight, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-[#5A4E45] hover:text-[#241E1A]"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.product.id, item.selectedWeight)}
                      className="p-1 text-[#8A7768] hover:text-[#8B1E13] transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Line total */}
                <div className="text-right">
                  <div className="font-serif font-bold text-sm text-[#241E1A] tabular-nums">
                    ₹{item.unitPrice * item.quantity}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#E8DFD5] bg-[#F5EFEB] space-y-4">
            {/* Promo Code Input */}
            {appliedPromo ? (
              <div className="flex items-center justify-between p-2.5 bg-[#FAF7F2] border border-[#15803D]/30 rounded-xs text-xs">
                <div className="flex items-center gap-2 text-[#15803D]">
                  <Tag className="w-3.5 h-3.5" />
                  <span className="font-semibold">{appliedPromo.code} ({appliedPromo.discountPercent}% OFF)</span>
                </div>
                <button
                  type="button"
                  onClick={removePromoCode}
                  className="text-xs text-[#8B1E13] hover:underline"
                >
                  Remove
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon code (e.g. FIRSTJAR)"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  className="flex-1 px-3 py-2 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-xs text-[#241E1A] uppercase focus:outline-hidden focus:border-[#8B1E13]"
                />
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-[#241E1A] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer hover:bg-[#3D332A]"
                >
                  Apply
                </button>
              </form>
            )}

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#5A4E45] pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="tabular-nums font-medium text-[#241E1A]">₹{subtotal}</span>
              </div>
              {appliedPromo && (
                <div className="flex justify-between text-[#15803D]">
                  <span>Promo Discount ({appliedPromo.discountPercent}%)</span>
                  <span className="tabular-nums font-medium">
                    -₹{Math.round((subtotal * appliedPromo.discountPercent) / 100)}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="tabular-nums font-medium text-[#241E1A]">
                  {shippingFee === 0 ? (
                    <span className="text-[#15803D] uppercase font-bold text-[10px]">Free</span>
                  ) : (
                    `₹${shippingFee}`
                  )}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-[#E0D4C5] text-sm">
                <span className="font-serif font-bold text-[#241E1A]">Total Payable</span>
                <span className="font-serif font-bold text-base text-[#8B1E13] tabular-nums">
                  ₹{finalTotal}
                </span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              type="button"
              onClick={handleProceedToCheckout}
              className="w-full py-3.5 bg-[#8B1E13] hover:bg-[#6E140B] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 shadow-md transition-colors cursor-pointer"
            >
              <span>Proceed to Checkout (₹{finalTotal})</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[11px] text-[#7A6B5F] text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#15803D]" />
              <span>Safe & Secure Packaging · Pan-India Dispatch</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
