import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem } from '../types';
import { PRODUCTS } from '../data/products';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, weight?: string, quantity?: number) => void;
  updateQuantity: (productId: string, weight: string, quantity: number) => void;
  removeFromCart: (productId: string, weight: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  shippingFee: number;
  finalTotal: number;
  freeShippingThreshold: number;
  progressToFreeShipping: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  toast: string | null;
  showToast: (message: string) => void;
  appliedPromo: { code: string; discountPercent: number } | null;
  applyPromoCode: (code: string) => boolean;
  removePromoCode: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const FREE_SHIPPING_THRESHOLD = 799;
const STANDARD_SHIPPING = 60;

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Pre-seed with 1 item so the client immediately sees a realistic cart on click if desired, or empty
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('munjoy_cart');
      if (saved) return JSON.parse(saved);
    } catch {
      // Fallback
    }
    // Default starter cart item to demonstrate e-commerce state immediately
    const firstProduct = PRODUCTS[0];
    const size = firstProduct.sizes[1]; // 500g
    return [
      {
        product: firstProduct,
        selectedWeight: size.weight,
        unitPrice: size.price,
        quantity: 1,
      },
    ];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discountPercent: number } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('munjoy_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => {
      setToast((prev) => (prev === message ? null : prev));
    }, 3500);
  };

  const addToCart = (product: Product, weight?: string, quantity: number = 1) => {
    const targetWeight = weight || product.sizes[0].weight;
    const sizeObj = product.sizes.find((s) => s.weight === targetWeight) || product.sizes[0];
    const price = sizeObj.price;

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedWeight === targetWeight
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [
        ...prev,
        {
          product,
          selectedWeight: targetWeight,
          unitPrice: price,
          quantity,
        },
      ];
    });

    showToast(`Added ${quantity} × ${product.name} (${targetWeight}) to cart`);
  };

  const updateQuantity = (productId: string, weight: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, weight);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedWeight === weight
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string, weight: string) => {
    setCart((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.selectedWeight === weight))
    );
    showToast('Item removed from cart');
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyPromoCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === 'FIRSTJAR' || clean === 'MUNJOY10') {
      setAppliedPromo({ code: clean, discountPercent: 10 });
      showToast('10% promotional discount applied!');
      return true;
    }
    if (clean === 'TRADITION15') {
      setAppliedPromo({ code: clean, discountPercent: 15 });
      showToast('15% festival discount applied!');
      return true;
    }
    showToast('Invalid or expired coupon code. Try FIRSTJAR');
    return false;
  };

  const removePromoCode = () => {
    setAppliedPromo(null);
    showToast('Coupon removed');
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

  const discountAmount = appliedPromo ? Math.round((subtotal * appliedPromo.discountPercent) / 100) : 0;
  const discountedSubtotal = subtotal - discountAmount;

  const shippingFee = subtotal === 0 || discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING;
  const finalTotal = subtotal === 0 ? 0 : discountedSubtotal + shippingFee;

  const progressToFreeShipping = Math.min(100, Math.round((discountedSubtotal / FREE_SHIPPING_THRESHOLD) * 100));

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
        shippingFee,
        finalTotal,
        freeShippingThreshold: FREE_SHIPPING_THRESHOLD,
        progressToFreeShipping,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        quickViewProduct,
        setQuickViewProduct,
        isSearchOpen,
        setIsSearchOpen,
        toast,
        showToast,
        appliedPromo,
        applyPromoCode,
        removePromoCode,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
