import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { sendContactMessageToOwner, STORE_OWNER_EMAIL } from '../services/notificationService';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSending(true);
    await sendContactMessageToOwner({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });
    setIsSending(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Brand Info & Placeholders */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8B1E13] font-semibold">
                Direct Kitchen Access
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#241E1A]">
                Let’s talk pickle.
              </h2>
              <p className="text-base text-[#5A4E45] leading-relaxed">
                Whether you have a question about seasonal batch availability, bespoke wedding gifting hampers, or simply want to share a family pickle memory—we'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-[#E8DFD5] text-sm text-[#4A3E36]">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#F5EFEB] rounded-xs text-[#8B1E13] border border-[#E0D4C5]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#241E1A]">Email Us</div>
                  <p className="text-xs text-[#7A6B5F] mt-0.5">Placeholder email for client contact:</p>
                  <p className="text-sm font-medium text-[#241E1A]">care@munjoypickles.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#F5EFEB] rounded-xs text-[#8B1E13] border border-[#E0D4C5]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#241E1A]">Direct Hotline</div>
                  <p className="text-xs text-[#7A6B5F] mt-0.5">Mon–Sat, 10:00 AM – 6:00 PM IST</p>
                  <p className="text-sm font-medium text-[#241E1A]">+91 98765 43210 (Placeholder)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#F5EFEB] rounded-xs text-[#8B1E13] border border-[#E0D4C5]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-[#241E1A]">Artisanal Kitchen</div>
                  <p className="text-sm text-[#5A4E45] mt-0.5">
                    Munjoy Foods Heritage Unit, Traditional Food District, India (Placeholder address)
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#F5EFEB] border border-[#E0D4C5] rounded-xs text-xs text-[#6B5D52] space-y-1">
              <span className="font-semibold text-[#241E1A] block">Looking for Corporate or Wedding Hampers?</span>
              <p>We provide custom embossed wooden boxes with brass spoons for bulk and festive gifting.</p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#F5EFEB] p-8 sm:p-10 rounded-xs border border-[#E0D4C5] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 bg-[#15803D]/10 text-[#15803D] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#241E1A]">
                  Thank you for reaching out!
                </h3>
                <p className="text-sm text-[#5A4E45] max-w-md mx-auto">
                  Your message has been received by our kitchen team. We will get back to you within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 bg-[#8B1E13] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Radhika Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-sm text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. radhika@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-sm text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-sm text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-sm text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13] transition-colors"
                    >
                      <option value="General Inquiry">General Pickle Inquiry</option>
                      <option value="Festive / Wedding Gifting">Festive & Wedding Gifting</option>
                      <option value="Bulk Order">Wholesale / Cafe Partnership</option>
                      <option value="Feedback">Recipe Feedback</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-[#3D332A] uppercase tracking-wider">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us what pickle flavours you cherish or details of your order requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF7F2] border border-[#D5C7B7] rounded-xs text-sm text-[#241E1A] focus:outline-hidden focus:border-[#8B1E13] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 bg-[#8B1E13] hover:bg-[#6E140B] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSending ? 'Sending to Kitchen...' : 'Send Message to Kitchen'}</span>
                </button>

                <p className="text-[11px] text-[#7A6B5F] text-center">
                  Direct dispatch to kitchen inbox at {STORE_OWNER_EMAIL}. No promotional spam, ever.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
