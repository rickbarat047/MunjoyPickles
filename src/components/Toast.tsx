import React from 'react';
import { useCart } from '../context/CartContext';
import { Check, ShoppingBag } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useCart();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in pointer-events-none">
      <div className="bg-[#241E1A] text-[#FAF7F2] px-4 py-3 rounded-xs shadow-xl border border-[#4A3E36] flex items-center gap-3 text-xs max-w-sm">
        <div className="w-5 h-5 bg-[#8B1E13] rounded-full flex items-center justify-center shrink-0">
          <Check className="w-3 h-3 text-white" />
        </div>
        <p className="font-medium">{toast}</p>
      </div>
    </div>
  );
};
