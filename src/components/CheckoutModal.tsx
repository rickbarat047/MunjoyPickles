import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, ArrowLeft, CreditCard, Banknote } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const CheckoutModal: React.FC = () => {
  const { isCheckoutOpen, setIsCheckoutOpen, cart, finalTotal, subtotal, shippingFee, appliedPromo, clearCart } = useCart();
  
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'upi' | 'card'>('cod');
  const [orderId, setOrderId] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: 'Karnataka',
    pincode: '',
    deliveryNotes: ''
  });

  if (!isCheckoutOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.pincode) return;

    const generatedId = `MUN-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderId(generatedId);
    setStep('confirmed');
    clearCart();
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('form');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-xs shadow-2xl border border-[#E0D4C5] overflow-hidden my-6 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8DFD5] bg-[#F5EFEB]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-bold text-[#8B1E13] tracking-wider">MUNJOY</span>
            <span className="text-[#B0A294]">/</span>
            <span className="text-xs uppercase tracking-wider font-semibold text-[#3D332A]">
              {step === 'form' ? 'Checkout & Delivery' : 'Order Receipt'}
            </span>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 text-[#5A4E45] hover:text-[#8B1E13] rounded-xs hover:bg-[#EAE0D3] transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8">
          {step === 'confirmed' ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-[#15803D]/10 text-[#15803D] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#15803D] font-semibold">
                  Order Successfully Placed
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#241E1A]">
                  Thank you, {formData.fullName}!
                </h2>
                <p className="text-sm text-[#5A4E45] max-w-md mx-auto">
                  Your batch of handcrafted pickles is being packed at our kitchen. You will receive SMS & WhatsApp tracking updates at <span className="font-semibold text-[#241E1A]">{formData.phone}</span>.
                </p>
              </div>

              <div className="p-5 bg-[#F5EFEB] border border-[#E0D4C5] rounded-xs text-left max-w-md mx-auto space-y-3">
                <div className="flex justify-between text-xs pb-2 border-b border-[#E0D4C5]">
                  <span className="text-[#7A6B5F]">Order ID:</span>
                  <span className="font-mono font-bold text-[#241E1A]">{orderId}</span>
                </div>
                <div className="flex justify-between text-xs pb-2 border-b border-[#E0D4C5]">
                  <span className="text-[#7A6B5F]">Payment Method:</span>
                  <span className="font-medium text-[#241E1A] uppercase">
                    {paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : paymentMethod === 'upi' ? 'UPI / QR Code' : 'Debit/Credit Card'}
                  </span>
                </div>
                <div className="flex justify-between text-xs pb-2 border-b border-[#E0D4C5]">
                  <span className="text-[#7A6B5F]">Delivery Address:</span>
                  <span className="font-medium text-[#241E1A] text-right truncate max-w-[200px]">
                    {formData.address}, {formData.city} - {formData.pincode}
                  </span>
                </div>
                <div className="flex justify-between text-sm pt-1">
                  <span className="font-bold text-[#241E1A]">Total Amount:</span>
                  <span className="font-serif font-bold text-[#8B1E13] text-base tabular-nums">₹{finalTotal}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-8 py-3 bg-[#8B1E13] hover:bg-[#6E140B] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer shadow-md"
                >
                  Return to Kitchen Store
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="space-y-6">
              {/* Order Summary Miniature */}
              <div className="p-4 bg-[#F5EFEB] rounded-xs border border-[#E0D4C5] space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#3D332A]">
                  <span>Items in order ({cart.length})</span>
                  <span className="text-[#8B1E13] tabular-nums font-bold">Total: ₹{finalTotal}</span>
                </div>
                <div className="divide-y divide-[#E5DACD] text-xs text-[#5A4E45]">
                  {cart.map((item) => (
                    <div key={`${item.product.id}-${item.selectedWeight}`} className="py-1.5 flex justify-between">
                      <span className="truncate max-w-[260px]">
                        {item.quantity} × {item.product.name} ({item.selectedWeight})
                      </span>
                      <span className="tabular-nums font-medium text-[#241E1A]">
                        ₹{item.unitPrice * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Details */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-[#241E1A] border-b border-[#E8DFD5] pb-2">
                  1. Shipping & Delivery Address
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikramaditya Rao"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-xs text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                      Mobile Number (for delivery SMS) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-xs text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                    Complete Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="House/Flat number, Building name, Street, Landmark"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-xs text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Bengaluru"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-xs text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                      State *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-2.5 py-2.5 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-xs text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13]"
                    >
                      <option value="Karnataka">Karnataka</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Other">Other States</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      placeholder="e.g. 560001"
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-xs text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13]"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-2">
                <h3 className="font-serif text-lg font-bold text-[#241E1A] border-b border-[#E8DFD5] pb-2">
                  2. Select Payment Method
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 text-left border rounded-xs transition-all cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'cod'
                        ? 'border-[#8B1E13] bg-[#8B1E13]/5 shadow-xs'
                        : 'border-[#E0D4C5] bg-[#FAF7F2] hover:bg-[#F5EFEB]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Banknote className="w-4 h-4 text-[#8B1E13]" />
                      <span className="font-semibold text-xs text-[#241E1A]">Cash on Delivery</span>
                    </div>
                    <span className="text-[11px] text-[#7A6B5F] mt-1">Pay in cash or UPI at delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 text-left border rounded-xs transition-all cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'upi'
                        ? 'border-[#8B1E13] bg-[#8B1E13]/5 shadow-xs'
                        : 'border-[#E0D4C5] bg-[#FAF7F2] hover:bg-[#F5EFEB]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#15803D]" />
                      <span className="font-semibold text-xs text-[#241E1A]">Instant UPI / QR</span>
                    </div>
                    <span className="text-[11px] text-[#7A6B5F] mt-1">GPay, PhonePe, Paytm</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 text-left border rounded-xs transition-all cursor-pointer flex flex-col justify-between ${
                      paymentMethod === 'card'
                        ? 'border-[#8B1E13] bg-[#8B1E13]/5 shadow-xs'
                        : 'border-[#E0D4C5] bg-[#FAF7F2] hover:bg-[#F5EFEB]'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-[#B45309]" />
                      <span className="font-semibold text-xs text-[#241E1A]">Card / NetBanking</span>
                    </div>
                    <span className="text-[11px] text-[#7A6B5F] mt-1">Visa, Mastercard, RuPay</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#E8DFD5] space-y-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#8B1E13] hover:bg-[#6E140B] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confirm Order · Pay ₹{finalTotal}</span>
                </button>
                <p className="text-[11px] text-[#7A6B5F] text-center">
                  By confirming, you agree to Munjoy's handcrafted small-batch shipping terms.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
