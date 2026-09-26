import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import flagshipMacroImg from '../assets/images/flagship_mango_macro_1790438585195.jpg';

interface FinalCTAProps {
  onShopClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onShopClick }) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen bg-[#1A1411] text-[#FAF7F2] flex flex-col justify-between py-20 sm:py-28 overflow-hidden">
      
      {/* Background Subtle Integrated Macro Food Photography */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
        <img
          src={flagshipMacroImg}
          alt="Artisanal pickle macro texture"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411] via-[#1A1411]/80 to-[#1A1411]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-center text-center">
        
        {/* Subtle Brand Kicker */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-[0.35em] text-[#D97706] font-semibold block">
            The Invitation
          </span>

          {/* Monumental Headline */}
          <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-[0.92] text-[#FAF7F2] max-w-5xl mx-auto">
            BRING <br />
            <span className="italic text-[#D97706] font-light">A LITTLE JOY</span> <br />
            TO THE TABLE.
          </h2>

          <p className="font-serif italic text-lg sm:text-2xl text-[#D4C9BC] max-w-xl mx-auto pt-4 leading-relaxed">
            Authentic Indian homemade pickles, slow-cured under the sun and bottled for your family meals.
          </p>

          {/* Minimalist Editorial Action */}
          <div className="pt-8 sm:pt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              type="button"
              onClick={onShopClick}
              className="group px-8 py-4 bg-[#8B1E13] hover:bg-[#A32216] text-[#FAF7F2] text-xs uppercase tracking-[0.22em] font-semibold transition-all duration-300 flex items-center gap-3 cursor-pointer shadow-lg hover:shadow-xl"
            >
              <span>Shop Munjoy Pickles</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </button>

            <a
              href="#contact"
              className="text-xs uppercase tracking-[0.2em] text-[#D4C9BC] hover:text-[#FAF7F2] transition-colors hover-underline-editorial py-2"
            >
              Custom Gifting Enquiries
            </a>
          </div>
        </div>

      </div>

      {/* Footnote Trust Marks */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-8 border-t border-[#33261F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A7768] font-mono">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D97706]" />
          <span>Triple-Cushioned Leak-Proof Packaging Guarantee</span>
        </div>
        <div>
          <span>Pan-India Courier Dispatch in 24–48 Hours</span>
        </div>
      </div>

    </section>
  );
};
