import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroImage from '../assets/images/hero_pickle_composition_1790438144628.jpg';

interface HeroProps {
  onExploreClick: () => void;
  onStoryClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onStoryClick }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-12 overflow-hidden bg-[#FAF7F2]">
      
      {/* Background Subtle Warmth Gradients */}
      <div className="absolute top-10 right-0 w-[55vw] h-[55vw] rounded-full bg-[#E8DDD0]/50 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] rounded-full bg-[#8B1E13]/5 blur-3xl -z-10 pointer-events-none" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Top Editorial Kicker & Batch Indicator */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#E8DFD5] text-[11px] uppercase tracking-[0.25em] text-[#7A6B5F]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8B1E13]" />
            <span className="font-semibold text-[#241E1A]">Batch No. 24 / Seasonal Harvest</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>Sun-Cured In Glazed Earthenware</span>
            <span>·</span>
            <span>Virgin Mustard Oil</span>
          </div>
          <span className="font-serif italic text-xs tracking-normal text-[#8B1E13]">
            Traditional Indian Recipes
          </span>
        </div>

        {/* Central Cinematic Composition: Oversized Type Overlapping Rich Photography */}
        <div className="relative mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Left / Overlay Typography Block */}
          <div className="lg:col-span-6 z-20 space-y-6 sm:space-y-8">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.3em] text-[#8B1E13] font-semibold block">
                Artisanal Pantry · Made By Hand
              </span>
              
              <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#241E1A] leading-[0.92]">
                THE <br />
                <span className="italic font-light text-[#8B1E13]">TASTE</span> <br />
                OF HOME.
              </h1>
            </div>

            {/* Asymmetrical Supporting Copy */}
            <div className="max-w-md pt-2 space-y-3">
              <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed font-normal">
                Traditional Indian flavours, handcrafted in small batches and made to bring a little more joy to every meal. Prepared with unhurried rooftop sun-curing, hand-cracked spices, and cold-pressed mustard oil.
              </p>
              
              <div className="text-xs text-[#8A7768] flex items-center gap-2 pt-1 font-mono">
                <span>0% ARTIFICIAL PRESERVATIVES</span>
                <span>·</span>
                <span>100% RAW INGREDIENTS</span>
              </div>
            </div>

            {/* Minimal Editorial CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-8">
              <button
                type="button"
                onClick={onExploreClick}
                className="group inline-flex items-center gap-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#241E1A] hover:text-[#8B1E13] transition-colors cursor-pointer"
              >
                <span className="border-b border-[#241E1A] group-hover:border-[#8B1E13] pb-1 transition-colors">
                  Explore The Collection
                </span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 text-[#8B1E13]" />
              </button>

              <button
                type="button"
                onClick={onStoryClick}
                className="text-xs uppercase tracking-[0.18em] text-[#7A6B5F] hover:text-[#241E1A] transition-colors hover-underline-editorial cursor-pointer"
              >
                The Craft Archive
              </button>
            </div>
          </div>

          {/* Right / Visual Centerpiece: Rich Editorial Photography */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Backing warm paper texture mat */}
              <div className="relative overflow-hidden bg-[#FAF7F2] p-2 sm:p-3 shadow-2xl border border-[#E0D4C5]">
                <div className="relative aspect-4/5 sm:aspect-16/13 lg:aspect-4/5 overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Authentic Indian homemade pickle in glazed ceramic martaban jar with cold-pressed mustard oil and raw ingredients"
                    className="w-full h-full object-cover transform transition-transform duration-1000 ease-out hover:scale-103"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle warm sunlight vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1813]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Photography Inset Stamp */}
                  <div className="absolute bottom-5 left-5 right-5 text-white flex items-end justify-between pointer-events-none">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[#D97706] font-medium block">
                        Composition
                      </span>
                      <p className="font-serif italic text-base sm:text-lg text-[#FAF7F2]">
                        Ramkela Mango · Kashmiri Chilli · Mustard Oil
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#D4C9BC] hidden sm:block">
                      Fig. 01 / Heritage
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tangible Detail Card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 max-w-[220px] bg-[#FAF7F2] p-4 border border-[#D5C7B7] shadow-lg hidden sm:block">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B1E13] font-semibold block">
                  Family Table Secret
                </span>
                <p className="font-serif text-xs italic text-[#3A3027] mt-1 leading-snug">
                  “Cured in ceramic martabans under two weeks of summer sunlight.”
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Bottom Vertical Scroll Indicator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#8A7768]">
        <div className="flex items-center gap-2">
          <span>Est. 2024</span>
          <span>·</span>
          <span>Pure Craftsmanship</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">Scroll To Discover</span>
          <div className="w-5 h-8 border border-[#B0A294] rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#8B1E13] rounded-full animate-bounce" />
          </div>
        </div>
      </div>

    </section>
  );
};
