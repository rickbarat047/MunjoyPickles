/**
 * Munjoy Order & Contact Notification Service
 * Dispatches automated order details and inquiry emails to rickbarat21@gmail.com
 */

export const STORE_OWNER_EMAIL = 'rickbarat21@gmail.com';

export interface OrderItemSummary {
  name: string;
  weight: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface OrderNotificationData {
  orderId: string;
  customerName: string;
  phone: string;
  email?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  deliveryNotes?: string;
  paymentMethod: string;
  items: OrderItemSummary[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  promoCode?: string;
  finalTotal: number;
  createdAt: string;
  status: 'Received' | 'Packed' | 'Dispatched' | 'Delivered';
}

/**
 * Dispatches an automated email to rickbarat21@gmail.com via FormSubmit AJAX API
 */
export async function sendOrderEmailToOwner(
  order: OrderNotificationData
): Promise<{ success: boolean; message: string }> {
  // Format items nicely for the email body
  const formattedItems = order.items
    .map(
      (item, idx) =>
        `${idx + 1}. ${item.quantity}x ${item.name} [${item.weight}] — ₹${item.total} (₹${item.unitPrice} each)`
    )
    .join('\n');

  const payload = {
    _subject: `🌶️ NEW MUNJOY ORDER #${order.orderId} · ₹${order.finalTotal} from ${order.customerName}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: order.email || STORE_OWNER_EMAIL,
    'Order ID': order.orderId,
    'Date & Time (IST)': new Date(order.createdAt).toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'medium',
    }),
    'Customer Full Name': order.customerName,
    'Customer Phone': order.phone,
    'Customer Email': order.email || 'None provided',
    'Delivery Address': `${order.address}, ${order.city}, ${order.state} - ${order.pincode}`,
    'Payment Method':
      order.paymentMethod === 'cod'
        ? 'Cash on Delivery (COD)'
        : order.paymentMethod === 'upi'
        ? 'Instant UPI / QR Code'
        : 'Credit / Debit Card',
    'Items Ordered': formattedItems,
    'Items Subtotal': `₹${order.subtotal}`,
    'Shipping Fee': order.shippingFee === 0 ? 'FREE (Special Offer)' : `₹${order.shippingFee}`,
    'Coupon / Promo Applied': order.promoCode ? `${order.promoCode} (-₹${order.discount})` : 'None',
    'TOTAL AMOUNT TO COLLECT': `₹${order.finalTotal}`,
    'Special Delivery Notes': order.deliveryNotes || 'None',
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${STORE_OWNER_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message || 'Email sent successfully to owner.' };
    } else {
      return { success: false, message: 'Server responded with error status.' };
    }
  } catch (error) {
    console.error('Error dispatching order notification to owner:', error);
    return {
      success: false,
      message: (error as Error).message || 'Network error while notifying owner.',
    };
  }
}

/**
 * Saves placed order to browser local storage archive so the owner can review all orders
 */
export function saveOrderToHistory(order: OrderNotificationData): void {
  try {
    const raw = localStorage.getItem('munjoy_orders_archive');
    const orders: OrderNotificationData[] = raw ? JSON.parse(raw) : [];
    orders.unshift(order);
    localStorage.setItem('munjoy_orders_archive', JSON.stringify(orders.slice(0, 150)));
  } catch (err) {
    console.error('Could not save to order archive:', err);
  }
}

/**
 * Retrieves all archived orders for the store owner
 */
export function getOrderHistory(): OrderNotificationData[] {
  try {
    const raw = localStorage.getItem('munjoy_orders_archive');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/**
 * Updates an order status (e.g. Received -> Dispatched)
 */
export function updateOrderStatus(orderId: string, status: OrderNotificationData['status']): void {
  try {
    const orders = getOrderHistory();
    const updated = orders.map((o) => (o.orderId === orderId ? { ...o, status } : o));
    localStorage.setItem('munjoy_orders_archive', JSON.stringify(updated));
  } catch (err) {
    console.error('Could not update order status:', err);
  }
}

/**
 * Generates an instant mailto link for direct verification or manual dispatch
 */
export function getOwnerMailtoLink(order: OrderNotificationData): string {
  const subject = encodeURIComponent(
    `[Munjoy Order #${order.orderId}] ₹${order.finalTotal} - ${order.customerName}`
  );
  const itemsText = order.items
    .map((i) => `• ${i.quantity}x ${i.name} (${i.weight}) - ₹${i.total}`)
    .join('\n');

  const body = encodeURIComponent(
    `MUNJOY PICKLE ORDER SUMMARY\n` +
      `===================================\n` +
      `Order ID: ${order.orderId}\n` +
      `Customer: ${order.customerName}\n` +
      `Phone: ${order.phone}\n` +
      `Email: ${order.email || 'N/A'}\n` +
      `Address: ${order.address}, ${order.city}, ${order.state} - ${order.pincode}\n` +
      `Payment: ${order.paymentMethod.toUpperCase()}\n` +
      `Total: ₹${order.finalTotal}\n\n` +
      `ITEMS ORDERED:\n${itemsText}\n` +
      `===================================\n` +
      `Placed on: ${new Date(order.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}\n`
  );

  return `mailto:${STORE_OWNER_EMAIL}?subject=${subject}&body=${body}`;
}

/**
 * Dispatches an automated contact inquiry email to rickbarat21@gmail.com
 */
export async function sendContactMessageToOwner(contact: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}): Promise<{ success: boolean; message?: string }> {
  const payload = {
    _subject: `💬 MUNJOY INQUIRY: ${contact.subject} from ${contact.name}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: contact.email,
    'Sender Name': contact.name,
    'Sender Email': contact.email,
    'Sender Phone': contact.phone || 'None provided',
    'Inquiry Subject': contact.subject,
    'Message Content': contact.message,
    'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${STORE_OWNER_EMAIL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      return { success: true };
    }
    return { success: false };
  } catch (error) {
    console.error('Error dispatching contact inquiry to owner:', error);
    return { success: false };
  }
}
