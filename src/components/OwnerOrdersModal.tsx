import React, { useState, useEffect } from 'react';
import {
  X,
  PackageCheck,
  Mail,
  Phone,
  Clock,
  MapPin,
  RefreshCw,
  Search,
  ExternalLink,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import {
  getOrderHistory,
  updateOrderStatus,
  sendOrderEmailToOwner,
  getOwnerMailtoLink,
  STORE_OWNER_EMAIL,
  OrderNotificationData,
} from '../services/notificationService';

interface OwnerOrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerOrdersModal: React.FC<OwnerOrdersModalProps> = ({ isOpen, onClose }) => {
  const [orders, setOrders] = useState<OrderNotificationData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<OrderNotificationData | null>(null);
  const [resendingId, setResendingId] = useState<string | null>(null);
  const [resendStatus, setResendStatus] = useState<string | null>(null);

  const loadOrders = () => {
    const list = getOrderHistory();
    setOrders(list);
    if (list.length > 0 && !selectedOrder) {
      setSelectedOrder(list[0]);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadOrders();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredOrders = orders.filter((o) => {
    const query = searchQuery.toLowerCase();
    return (
      o.orderId.toLowerCase().includes(query) ||
      o.customerName.toLowerCase().includes(query) ||
      o.phone.toLowerCase().includes(query) ||
      o.city.toLowerCase().includes(query)
    );
  });

  const handleStatusChange = (orderId: string, newStatus: OrderNotificationData['status']) => {
    updateOrderStatus(orderId, newStatus);
    loadOrders();
    if (selectedOrder && selectedOrder.orderId === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const handleResendEmail = async (order: OrderNotificationData) => {
    setResendingId(order.orderId);
    setResendStatus(null);
    const result = await sendOrderEmailToOwner(order);
    setResendingId(null);
    if (result.success) {
      setResendStatus(`Email dispatched to ${STORE_OWNER_EMAIL}`);
      setTimeout(() => setResendStatus(null), 4000);
    } else {
      setResendStatus(`Dispatch error: ${result.message}`);
      setTimeout(() => setResendStatus(null), 5000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs">
      <div
        className="relative w-full max-w-5xl bg-[#FAF7F2] rounded-xs shadow-2xl border border-[#E0D4C5] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1F1813] text-[#FAF7F2] border-b border-[#3A2F27]">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-[#8B1E13] rounded-xs text-[#FAF7F2]">
              <PackageCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg font-bold tracking-wider">
                  Kitchen Orders Dispatch Portal
                </h2>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#8B1E13]/30 text-[#D97706] border border-[#8B1E13]/50">
                  Live Dispatch
                </span>
              </div>
              <p className="text-xs text-[#A89A8E] flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#D97706]" />
                All customer orders automatically forward to:
                <strong className="text-[#FAF7F2] underline underline-offset-2">{STORE_OWNER_EMAIL}</strong>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close portal"
            className="p-1.5 text-[#A89A8E] hover:text-[#FAF7F2] hover:bg-[#3A2F27] rounded-xs transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status notification banner if any */}
        {resendStatus && (
          <div className="bg-[#15803D] text-[#FAF7F2] text-xs px-6 py-2 flex items-center gap-2 font-medium">
            <CheckCircle className="w-4 h-4" />
            <span>{resendStatus}</span>
          </div>
        )}

        {/* Content Section: 2 Columns */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Column: Orders List */}
          <div className="w-full md:w-80 lg:w-96 border-r border-[#E0D4C5] bg-[#F5EFEB] flex flex-col">
            {/* Search Bar */}
            <div className="p-3 border-b border-[#E0D4C5] bg-[#EDE4D8]">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#7A6B5F]" />
                <input
                  type="text"
                  placeholder="Search by order ID, name, phone..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs focus:outline-hidden focus:border-[#8B1E13]"
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#7A6B5F] mt-2 px-1">
                <span>Total Orders: {orders.length}</span>
                <button
                  onClick={loadOrders}
                  className="text-[#8B1E13] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                >
                  <RefreshCw className="w-3 h-3" /> Refresh
                </button>
              </div>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto divide-y divide-[#E0D4C5]">
              {filteredOrders.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#7A6B5F]">
                  <p className="font-serif text-sm text-[#241E1A] font-semibold mb-1">
                    No orders found
                  </p>
                  <p>When visitors place orders through the website, they will appear here and send an email to {STORE_OWNER_EMAIL}.</p>
                </div>
              ) : (
                filteredOrders.map((o) => {
                  const isSelected = selectedOrder?.orderId === o.orderId;
                  return (
                    <button
                      key={o.orderId}
                      onClick={() => setSelectedOrder(o)}
                      className={`w-full text-left p-3.5 transition-colors cursor-pointer flex flex-col gap-1.5 ${
                        isSelected
                          ? 'bg-[#FAF7F2] border-l-4 border-l-[#8B1E13] shadow-xs'
                          : 'hover:bg-[#EAE0D3]'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-mono font-bold text-[#8B1E13]">{o.orderId}</span>
                        <span className="font-serif font-bold text-sm text-[#241E1A]">
                          ₹{o.finalTotal}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-[#241E1A] truncate max-w-[150px]">
                          {o.customerName}
                        </span>
                        <span
                          className={`text-[10px] px-1.5 py-0.5 rounded-xs font-semibold uppercase tracking-wider ${
                            o.status === 'Delivered'
                              ? 'bg-[#15803D]/10 text-[#15803D]'
                              : o.status === 'Dispatched'
                              ? 'bg-[#D97706]/10 text-[#D97706]'
                              : 'bg-[#8B1E13]/10 text-[#8B1E13]'
                          }`}
                        >
                          {o.status}
                        </span>
                      </div>
                      <div className="text-[11px] text-[#7A6B5F] flex items-center justify-between">
                        <span>{o.city}</span>
                        <span>{new Date(o.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Order Details */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#FAF7F2]">
            {selectedOrder ? (
              <div className="space-y-6">
                
                {/* Header card */}
                <div className="p-5 bg-[#F5EFEB] border border-[#E0D4C5] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest text-[#7A6B5F]">Order Details</span>
                      <span className="font-mono font-bold text-base text-[#8B1E13]">
                        #{selectedOrder.orderId}
                      </span>
                    </div>
                    <div className="text-xs text-[#5A4E45] mt-1 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{new Date(selectedOrder.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short' })}</span>
                    </div>
                  </div>

                  {/* Status Dropdown */}
                  <div className="flex items-center gap-2">
                    <label className="text-xs font-semibold text-[#5A4E45]">Status:</label>
                    <select
                      value={selectedOrder.status}
                      onChange={(e) =>
                        handleStatusChange(
                          selectedOrder.orderId,
                          e.target.value as OrderNotificationData['status']
                        )
                      }
                      className="px-3 py-1.5 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-xs font-semibold text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13] cursor-pointer"
                    >
                      <option value="Received">Received</option>
                      <option value="Packed">Packed</option>
                      <option value="Dispatched">Dispatched</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </div>
                </div>

                {/* Customer & Shipping Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Customer Info */}
                  <div className="p-4 bg-[#FAF7F2] border border-[#E0D4C5] rounded-xs space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A6B5F] block">
                      Customer Information
                    </span>
                    <h4 className="font-serif text-lg font-bold text-[#241E1A]">
                      {selectedOrder.customerName}
                    </h4>
                    <div className="space-y-1.5 text-xs text-[#5A4E45]">
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-[#8B1E13]" />
                        <a
                          href={`tel:${selectedOrder.phone}`}
                          className="font-medium text-[#241E1A] hover:underline"
                        >
                          {selectedOrder.phone}
                        </a>
                        <a
                          href={`https://wa.me/91${selectedOrder.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedOrder.customerName)},%20thank%20you%20for%20ordering%20Munjoy%20Pickles%20(Order%20%23${selectedOrder.orderId}).%20Your%20order%20is%20${selectedOrder.status}!`}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-2 inline-flex items-center gap-1 text-[11px] text-[#15803D] hover:underline font-semibold"
                        >
                          <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                        </a>
                      </div>
                      {selectedOrder.email && (
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-[#8B1E13]" />
                          <a
                            href={`mailto:${selectedOrder.email}`}
                            className="font-medium text-[#241E1A] hover:underline"
                          >
                            {selectedOrder.email}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="p-4 bg-[#FAF7F2] border border-[#E0D4C5] rounded-xs space-y-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7A6B5F] block">
                      Shipping Address
                    </span>
                    <div className="flex items-start gap-2 text-xs text-[#3D332A] leading-relaxed">
                      <MapPin className="w-4 h-4 text-[#8B1E13] shrink-0 mt-0.5" />
                      <div>
                        <p>{selectedOrder.address}</p>
                        <p className="font-semibold">{selectedOrder.city}, {selectedOrder.state} — {selectedOrder.pincode}</p>
                      </div>
                    </div>
                    {selectedOrder.deliveryNotes && (
                      <p className="text-[11px] text-[#7A6B5F] italic pt-1 border-t border-[#E8DFD5]">
                        Note: “{selectedOrder.deliveryNotes}”
                      </p>
                    )}
                  </div>
                </div>

                {/* Items Breakdown Table */}
                <div className="border border-[#E0D4C5] rounded-xs overflow-hidden">
                  <div className="bg-[#F5EFEB] px-4 py-2.5 border-b border-[#E0D4C5] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#3D332A]">
                    <span>Ordered Items ({selectedOrder.items.length})</span>
                    <span>Total</span>
                  </div>
                  <div className="divide-y divide-[#E0D4C5] bg-[#FAF7F2] text-xs">
                    {selectedOrder.items.map((item, idx) => (
                      <div key={idx} className="p-3.5 flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-[#241E1A]">{item.name}</p>
                          <p className="text-[#7A6B5F]">
                            Size: <span className="font-medium text-[#241E1A]">{item.weight}</span> · Qty: {item.quantity} · Rate: ₹{item.unitPrice}
                          </p>
                        </div>
                        <span className="font-serif font-bold text-sm text-[#241E1A] tabular-nums">
                          ₹{item.total}
                        </span>
                      </div>
                    ))}
                  </div>
                  {/* Financials footer */}
                  <div className="bg-[#F5EFEB] p-4 border-t border-[#E0D4C5] space-y-1.5 text-xs text-[#5A4E45]">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="tabular-nums font-medium text-[#241E1A]">₹{selectedOrder.subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee:</span>
                      <span className="tabular-nums font-medium text-[#241E1A]">
                        {selectedOrder.shippingFee === 0 ? 'FREE' : `₹${selectedOrder.shippingFee}`}
                      </span>
                    </div>
                    {selectedOrder.discount > 0 && (
                      <div className="flex justify-between text-[#15803D]">
                        <span>Coupon Discount ({selectedOrder.promoCode}):</span>
                        <span className="tabular-nums font-semibold">-₹{selectedOrder.discount}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm font-bold text-[#241E1A] pt-2 border-t border-[#E0D4C5]">
                      <span>Grand Total ({selectedOrder.paymentMethod.toUpperCase()}):</span>
                      <span className="font-serif text-[#8B1E13] text-base tabular-nums">
                        ₹{selectedOrder.finalTotal}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Email Dispatch Actions */}
                <div className="p-4 bg-[#EDE4D8] border border-[#D5C7B7] rounded-xs flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <span className="font-semibold text-[#241E1A] block">
                      Owner Notification Status
                    </span>
                    <span className="text-[#6B5D52]">
                      Automated order copy is sent to <strong className="text-[#241E1A]">{STORE_OWNER_EMAIL}</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      disabled={resendingId === selectedOrder.orderId}
                      onClick={() => handleResendEmail(selectedOrder)}
                      className="px-3.5 py-2 bg-[#8B1E13] hover:bg-[#6E140B] text-[#FAF7F2] font-semibold rounded-xs transition-colors cursor-pointer flex items-center gap-1.5 disabled:opacity-50"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{resendingId === selectedOrder.orderId ? 'Sending...' : 'Re-send Email to Rick'}</span>
                    </button>

                    <a
                      href={getOwnerMailtoLink(selectedOrder)}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-2 bg-[#FAF7F2] hover:bg-[#F5EFEB] border border-[#D5C7B7] text-[#241E1A] font-semibold rounded-xs transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#8B1E13]" />
                      <span>Open in Gmail / Client</span>
                    </a>
                  </div>
                </div>

              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center p-8 text-xs text-[#7A6B5F]">
                <p>Select an order from the left column to view its full details.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
