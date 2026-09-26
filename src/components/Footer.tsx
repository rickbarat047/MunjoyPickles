import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Instagram, Facebook, ShieldCheck } from 'lucide-react';
import { STORE_OWNER_EMAIL } from '../services/notificationService';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenOwnerPortal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenOwnerPortal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#140F0D] text-[#FAF7F2] pt-24 pb-14 border-t border-[#291F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#291F1A]">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <span className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.22em] text-[#FAF7F2] uppercase block">
              MUNJOY
            </span>
            <p className="text-xs sm:text-sm text-[#A89A8E] leading-relaxed max-w-sm">
              Traditional Indian pickle-making, crafted with care and made for today’s generation. Small-batch recipes prepared with sun-cured seasonal produce and virgin cold-pressed oils.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#8A7768] font-mono">
              <span>Handcrafted in India</span>
              <span>·</span>
              <span>Est. Family Tradition</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#D4C9BC]">
              <li>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Return to Top
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('story')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Our Philosophy & Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('flagship')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Flagship Mango Pickle Story
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('pickles')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  The Pickle Pantry Collection
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('ingredients')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Interactive Ingredients
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  The 5-Step Craft
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('heritage')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Indian Heritage & Folklore
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('journal')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  The Munjoy Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-semibold block">
              Assurance
            </span>
            <ul className="space-y-2.5 text-xs text-[#A89A8E]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#FAF7F2] transition-colors cursor-pointer"
                >
                  Direct Kitchen Contact
                </button>
              </li>
              <li>
                <span>Pan-India Transit</span>
              </li>
              <li>
                <span>Triple Leak-Proof Cushioning</span>
              </li>
              <li>
                <span>Ceramic Festive Gifting</span>
              </li>
              <li>
                <span>Wholesale & Cafe Partner</span>
              </li>
              {onOpenOwnerPortal && (
                <li className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenOwnerPortal}
                    className="text-[#D97706] hover:text-[#FAF7F2] transition-colors cursor-pointer flex items-center gap-1.5 font-semibold text-[11px]"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#8B1E13]" />
                    <span>Kitchen Orders Portal</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-semibold block">
              The Table Dispatch
            </span>
            <p className="text-xs text-[#D4C9BC] leading-relaxed">
              Receive seasonal harvest batch notifications and culinary stories from our terrace kitchen.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#1F1813] border border-[#15803D]/50 text-xs text-[#15803D] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>You are subscribed to the table.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email for batch alerts"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-[#201814] border border-[#3D2E24] text-xs text-[#FAF7F2] placeholder-[#7A6B5F] focus:outline-hidden focus:border-[#D97706]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#8B1E13] hover:bg-[#A32216] text-[#FAF7F2] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="flex items-center gap-4 pt-2 text-[#A89A8E]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF7F2] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FAF7F2] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A6B5F] font-mono">
          <div>
            © {new Date().getFullYear()} MUNJOY Artisanal Foods. All rights reserved.
          </div>
          <div>
            Honouring traditional Indian culinary wisdom & small-batch craft.
          </div>
        </div>

      </div>
    </footer>
  );
};
