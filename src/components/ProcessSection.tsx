import React, { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { PROCESS_STEPS } from '../data/brandData';
import craftImg from '../assets/images/craft_sundrying_spices_1790438200269.jpg';
import kitchenImg from '../assets/images/kitchen_heritage_light_1790438598874.jpg';
import heroImg from '../assets/images/hero_pickle_composition_1790438144628.jpg';
import mangoImg from '../assets/images/product_mango_pickle_1790438158089.jpg';
import tableSpreadImg from '../assets/images/table_pairing_spread_1790438612173.jpg';

export const ProcessSection: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const stageImages = [
    craftImg,        // 01 SELECT: Handpicking raw produce
    kitchenImg,      // 02 PREPARE: Slicing on teak table & moisture wipe
    mangoImg,        // 03 SPICE: Stone-cracked mustard, methi, kalonji
    heroImg,         // 04 REST: Muslin wrapped jars under terrace sun
    tableSpreadImg   // 05 JAR: Sealed in glazed earthenware ready for meals
  ];

  const currentStep = PROCESS_STEPS[currentStepIndex];

  return (
    <section id="process" className="py-24 sm:py-36 bg-[#1A1411] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background ambient warmth */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-[#8B1E13]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#382B24]">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#D97706] font-semibold block">
              The 5-Step Craft
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF7F2] leading-[1]">
              From Harvest to Jar.
            </h2>
            <p className="text-sm sm:text-base text-[#D4C9BC] font-light leading-relaxed">
              We never rush nature. Each batch moves through five careful stages, guided by touch, fragrance, and sunny skies.
            </p>
          </div>

          <div className="text-xs font-mono text-[#A89A8E] flex items-center gap-2">
            <span>Stage 0{currentStepIndex + 1} of 05</span>
          </div>
        </div>

        {/* Process Timeline Bar */}
        <div className="mt-12 grid grid-cols-5 gap-2 sm:gap-4 pb-6 border-b border-[#2E231D]">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setCurrentStepIndex(idx)}
              className={`text-left transition-all duration-300 pb-3 cursor-pointer group ${
                currentStepIndex === idx
                  ? 'border-b-2 border-[#D97706] text-[#FAF7F2]'
                  : 'border-b-2 border-transparent text-[#7A6B5F] hover:text-[#D4C9BC]'
              }`}
            >
              <span className="font-mono text-xs block text-[#D97706]">0{idx + 1}</span>
              <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider block truncate mt-0.5">
                {step.title}
              </span>
            </button>
          ))}
        </div>

        {/* Large Cinematic Presentation */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left: Monumental Stage Number & Editorial Description */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <span className="font-serif text-7xl sm:text-8xl md:text-9xl font-bold text-[#382A22] block leading-none select-none">
                {currentStep.number}
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#D97706] font-semibold block">
                Stage {currentStep.number} — {currentStep.title}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#FAF7F2] leading-tight">
                {currentStep.headline}
              </h3>
            </div>

            <p className="text-base sm:text-lg text-[#D4C9BC] leading-relaxed font-light">
              {currentStep.description}
            </p>

            <div className="p-4 bg-[#261D18] border border-[#3D2E24] text-xs text-[#A89A8E] leading-relaxed">
              <span className="font-semibold text-[#FAF7F2] block mb-1">Ancestral Technique:</span>
              {currentStep.detail}
            </div>

            {/* Stepper Navigation Controls */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#382B24]">
              <button
                type="button"
                disabled={currentStepIndex === 0}
                onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
                className="px-4 py-2 border border-[#4A392E] text-xs uppercase tracking-wider text-[#FAF7F2] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#2E231D] transition-colors flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                type="button"
                disabled={currentStepIndex === PROCESS_STEPS.length - 1}
                onClick={() => setCurrentStepIndex(prev => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className="px-5 py-2 bg-[#8B1E13] hover:bg-[#A32216] text-xs uppercase tracking-wider text-[#FAF7F2] disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Next Stage</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Rich Large Photography */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-[#261D18] p-3 border border-[#3D2E24] shadow-2xl">
              <div className="aspect-16/11 sm:aspect-16/10 overflow-hidden relative">
                <img
                  src={stageImages[currentStepIndex]}
                  alt={currentStep.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1411]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-5 left-5 right-5 text-xs text-[#FAF7F2] flex items-center justify-between pointer-events-none">
                  <span className="font-serif italic text-base text-[#D4C9BC]">
                    “Traditional methods perfected over generations.”
                  </span>
                  <span className="font-mono text-[10px] text-[#A89A8E]">MUNJOY CRAFT ARCHIVE</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
