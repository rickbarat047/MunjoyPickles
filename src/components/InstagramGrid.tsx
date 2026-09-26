import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';
import mangoImg from '../assets/images/product_mango_pickle_1790438158089.jpg';
import chilliImg from '../assets/images/product_chilli_pickle_1790438176331.jpg';
import limeImg from '../assets/images/product_lime_pickle_1790438189105.jpg';
import heroImg from '../assets/images/hero_pickle_composition_1790438144628.jpg';
import tableSpreadImg from '../assets/images/table_pairing_spread_1790438612173.jpg';

export const InstagramGrid: React.FC = () => {
  return (
    <section className="py-24 sm:py-36 bg-[#FAF7F2] text-[#241E1A] relative border-b border-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#E0D4C5]">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8B1E13] font-semibold block">
              The Munjoy Table
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-[#241E1A] leading-[1]">
              Made for your table.
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#8B1E13] hover:text-[#6E140B] transition-colors hover-underline-editorial"
          >
            <Instagram className="w-4 h-4" />
            <span>Follow @MunjoyTable (Placeholder)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Asymmetrical Editorial Photo Wall */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Item 1: Large Featured Portrait (5 cols) */}
          <div className="md:col-span-5 group relative overflow-hidden bg-[#E8DFD5] border border-[#E0D4C5] shadow-xs">
            <div className="aspect-4/5 w-full h-full overflow-hidden">
              <img
                src={tableSpreadImg}
                alt="Dining spread with paratha and pickle"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-[#1F1813]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-[#FAF7F2]">
              <Instagram className="w-5 h-5 text-[#D97706]" />
              <p className="font-serif italic text-base leading-snug">
                “Hot crispy ajwain parathas with a generous dollop of raw mango pickle.”
              </p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#D4C9BC]">
                #MunjoyTable
              </span>
            </div>
          </div>

          {/* Item 2 & 3: Two Stacked Photos (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="group relative overflow-hidden bg-[#E8DFD5] border border-[#E0D4C5] flex-1 shadow-xs">
              <div className="aspect-16/10 w-full h-full overflow-hidden">
                <img
                  src={chilliImg}
                  alt="Banarasi stuffed red chillies"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-[#1F1813]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-[#FAF7F2]">
                <Instagram className="w-4 h-4 text-[#D97706]" />
                <p className="font-serif italic text-xs leading-relaxed">
                  “Banarasi red chillies cooling after being packed with dry-roasted saunf.”
                </p>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#D4C9BC]">
                  #HandcraftedPickles
                </span>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-[#E8DFD5] border border-[#E0D4C5] flex-1 shadow-xs">
              <div className="aspect-16/10 w-full h-full overflow-hidden">
                <img
                  src={limeImg}
                  alt="Sun-aged lime pickle"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute inset-0 bg-[#1F1813]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-between text-[#FAF7F2]">
                <Instagram className="w-4 h-4 text-[#D97706]" />
                <p className="font-serif italic text-xs leading-relaxed">
                  “Thin-skinned Kagzi limes curing under bright afternoon sun.”
                </p>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#D4C9BC]">
                  #SunCuredHeritage
                </span>
              </div>
            </div>
          </div>

          {/* Item 4: Tall Graphic Photo (3 cols) */}
          <div className="md:col-span-3 group relative overflow-hidden bg-[#E8DFD5] border border-[#E0D4C5] shadow-xs">
            <div className="aspect-4/5 w-full h-full overflow-hidden">
              <img
                src={heroImg}
                alt="Pickle in ceramic martaban"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-[#1F1813]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between text-[#FAF7F2]">
              <Instagram className="w-5 h-5 text-[#D97706]" />
              <p className="font-serif italic text-sm leading-snug">
                “Glazed ceramic martaban jars awaiting dispatch to family homes.”
              </p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[#D4C9BC]">
                #MadeInIndia
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
