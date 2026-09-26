import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/brandData';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import kitchenImg from '../assets/images/kitchen_heritage_light_1790438598874.jpg';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 sm:py-36 bg-[#231C18] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src={kitchenImg}
          alt="Atmospheric kitchen backdrop"
          className="w-full h-full object-cover filter blur-xs"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Pretitle */}
        <div className="text-center space-y-2 pb-8 sm:pb-12 border-b border-[#3D3128]">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D97706] font-semibold block">
            Patron Reflections
          </span>
          <span className="font-serif italic text-sm text-[#A89A8E]">
            From Family Tables Across India
          </span>
        </div>

        {/* Large Editorial Quote Presentation */}
        <div className="pt-12 sm:pt-16 text-center space-y-8">
          
          <div className="w-12 h-12 text-[#D97706] mx-auto opacity-70">
            <Quote className="w-full h-full stroke-[1.2]" />
          </div>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-[#FAF7F2] leading-[1.25] max-w-4xl mx-auto">
            "{current.quote.replace('Placeholder customer testimonial — replace with verified customer review. ', '')}"
          </blockquote>

          {/* Customer Attribution */}
          <div className="space-y-1 pt-4">
            <div className="font-serif text-lg font-bold text-[#D97706]">
              {current.customerName}
            </div>
            <div className="text-xs font-mono text-[#A89A8E] flex items-center justify-center gap-3">
              <span>{current.location}</span>
              <span>·</span>
              <span className="text-[#FAF7F2]">{current.favouritePickle}</span>
            </div>
          </div>

          {/* Quote Switcher Controls */}
          <div className="flex items-center justify-center gap-6 pt-6">
            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
              className="p-3 border border-[#4A3B31] text-[#D4C9BC] hover:text-[#FAF7F2] hover:border-[#FAF7F2] transition-colors cursor-pointer"
              aria-label="Previous quote"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono text-[#A89A8E]">
              0{activeIndex + 1} / 0{TESTIMONIALS.length}
            </span>

            <button
              type="button"
              onClick={() => setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
              className="p-3 border border-[#4A3B31] text-[#D4C9BC] hover:text-[#FAF7F2] hover:border-[#FAF7F2] transition-colors cursor-pointer"
              aria-label="Next quote"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[10px] text-[#7A6B5F] uppercase tracking-widest pt-4">
            Placeholder customer reflection — easily replaced with verified client review
          </p>

        </div>

      </div>
    </section>
  );
};
