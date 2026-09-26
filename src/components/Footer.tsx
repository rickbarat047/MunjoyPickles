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
    <footer className="bg-[#140A07] text-[#F3EBDD] pt-24 pb-14 border-t border-[#F3EBDD]/15">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#F3EBDD]/15">
          
          {/* Brand Column (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <span className="font-serif text-3xl sm:text-4xl font-bold tracking-[0.28em] text-[#F3EBDD] uppercase block">
              MUNJOY
            </span>
            <p className="text-xs sm:text-sm text-[#F3EBDD]/70 leading-relaxed max-w-sm font-light">
              Traditional Indian pickle-making, crafted with care and made for today’s generation. Small-batch recipes prepared with sun-cured seasonal produce and virgin cold-pressed oils.
            </p>
            <div className="pt-2 flex items-center gap-3 text-xs text-[#D69B2D] font-mono">
              <span>Handcrafted in India</span>
              <span>·</span>
              <span>Est. Family Tradition</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D69B2D] font-mono font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-mono tracking-wider text-[#F3EBDD]/75">
              <li>
                <button
                  type="button"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="hover:text-[#D69B2D] transition-colors cursor-pointer"
                >
                  Return to Top
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('statement')}
                  className="hover:text-[#D69B2D] transition-colors cursor-pointer"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('ingredient')}
                  className="hover:text-[#D69B2D] transition-colors cursor-pointer"
                >
                  Hero Ingredients
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="hover:text-[#D69B2D] transition-colors cursor-pointer"
                >
                  The 5-Step Craft
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('flagship')}
                  className="hover:text-[#D69B2D] transition-colors cursor-pointer"
                >
                  Flagship Mango Pickle
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('collection')}
                  className="hover:text-[#D69B2D] transition-colors cursor-pointer"
                >
                  Pantry Archive
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('table')}
                  className="hover:text-[#D69B2D] transition-colors cursor-pointer"
                >
                  The Table
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('journal')}
                  className="hover:text-[#D69B2D] transition-colors cursor-pointer"
                >
                  The Journal
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care & Assurance (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D69B2D] font-mono font-semibold block">
              Assurance
            </span>
            <ul className="space-y-2.5 text-xs text-[#F3EBDD]/70 font-mono tracking-wider">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#D69B2D] transition-colors cursor-pointer text-left"
                >
                  Kitchen Contact
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
                <li className="pt-3">
                  <button
                    type="button"
                    onClick={onOpenOwnerPortal}
                    className="text-[#D69B2D] hover:text-[#F3EBDD] transition-colors cursor-pointer flex items-center gap-1.5 font-semibold text-[11px]"
                  >
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D69B2D]" />
                    <span>Kitchen Orders Portal</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D69B2D] font-mono font-semibold block">
              The Batch Dispatch
            </span>
            <p className="text-xs text-[#F3EBDD]/70 leading-relaxed font-light">
              Receive seasonal harvest batch notifications and culinary stories from our terrace kitchen.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#1E0F0A] border border-[#D69B2D]/40 text-xs text-[#D69B2D] flex items-center gap-2">
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
                  className="w-full px-3.5 py-2.5 bg-[#1E0F0A] border border-[#F3EBDD]/20 text-xs text-[#F3EBDD] placeholder-[#F3EBDD]/40 focus:outline-hidden focus:border-[#D69B2D]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#7D2418] hover:bg-[#992C1E] text-[#F3EBDD] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer font-mono"
                >
                  Subscribe to Dispatch
                </button>
              </form>
            )}

            <div className="flex items-center gap-4 pt-2 text-[#F3EBDD]/60">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F3EBDD] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#F3EBDD] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EBDD]/50 font-mono">
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
