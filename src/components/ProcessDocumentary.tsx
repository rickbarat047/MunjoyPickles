import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { craftImg, kitchenHeritageImg, flagshipMacroImg, mustardMacroImg, chilliMacroImg } from '../data/products';

interface Step {
  num: string;
  title: string;
  hindi: string;
  description: string;
  detail: string;
  image: string;
  duration: string;
}

const PROCESS_STEPS: Step[] = [
  {
    num: '01',
    title: 'SELECT',
    hindi: 'सख्त कच्चे फल का चयन',
    description:
      'We never use cold-storage fruits. Peak raw green Ramkela mangoes and thick-fleshed Banarasi chillies are harvested at sunrise directly from heritage orchards.',
    detail: 'Inspected by hand for crispness, tight skin, and zero blemishes.',
    image: craftImg,
    duration: 'Dawn Harvest',
  },
  {
    num: '02',
    title: 'PREPARE',
    hindi: 'पारंपरिक कटाई व नमक धूप',
    description:
      'Wiped dry with unbleached cotton cloths—never touched by running tap water. Sliced using traditional iron blades into uniform geometric cubes, then rubbed with coarse mountain rock salt.',
    detail: 'Rested on clean linen sheets under the morning sun to draw out natural bitter water.',
    image: kitchenHeritageImg,
    duration: '24 Hours Resting',
  },
  {
    num: '03',
    title: 'SPICE',
    hindi: 'ताज़ा पिसे भुने मसाले',
    description:
      'Spices are gently dry-toasted over low embers to awaken essential oils, then coarsely cracked on heavy stone sil-battas rather than pulverized into industrial dust.',
    detail: 'Yellow mustard dal, roasted fenugreek, nigella, and Kashmiri chillies folded gently by hand.',
    image: mustardMacroImg,
    duration: 'Artisanal Blending',
  },
  {
    num: '04',
    title: 'REST',
    hindi: 'धूप में मर्तबान पकाना',
    description:
      'Transferred into traditional glazed ceramic martabans. The jars are positioned on sunny rooftops, turned by hand twice daily under the bright summer sun.',
    detail: 'Sunlight slowly breaks down tough fruit fibres while infusing the pungent warmth of cold-pressed oil.',
    image: flagshipMacroImg,
    duration: '14 to 21 Sunny Days',
  },
  {
    num: '05',
    title: 'JAR',
    hindi: 'शुद्ध तेल में सुरक्षित संचय',
    description:
      'Submerged beneath a protective layer of virgin kacchi ghani mustard oil. Sealed tightly with unbleached muslin cloth and tied with natural jute string.',
    detail: 'No artificial acidifiers, no chemical preservatives, no stabilizers.',
    image: chilliMacroImg,
    duration: 'Hand-Numbered Batch',
  },
];

export const ProcessDocumentary: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = PROCESS_STEPS[activeStep];

  return (
    <section id="process" className="relative py-28 sm:py-36 md:py-48 bg-[#F3EBDD] text-[#1E0F0A] overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#1E0F0A]/15 pb-8 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.28em] text-[#7D2418] mb-3">
              <span className="w-6 h-[1px] bg-[#7D2418]" />
              <span>04 / The Munjoy Discipline</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1E0F0A]">
              From Sunlight to Martaban.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#1E0F0A]/70 max-w-sm font-light font-mono leading-relaxed">
            The unhurried methodology of authentic Indian pickle craft. Each batch takes three weeks of natural curing.
          </p>
        </div>

        {/* Sticky Split Documentary Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Pinned Large Photograph */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative aspect-4/5 sm:aspect-1/1 lg:aspect-4/5 overflow-hidden shadow-2xl bg-[#1E0F0A]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.num}
                  src={current.image}
                  alt={`The Munjoy Process — Step ${current.num} ${current.title}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full object-cover filter contrast-[1.08]"
                />
              </AnimatePresence>

              {/* Shadow vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E0F0A]/75 via-transparent to-transparent pointer-events-none" />

              {/* Stamp Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-[#F3EBDD] flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D69B2D] block">
                    STAGE {current.num} / 05
                  </span>
                  <p className="font-serif italic text-lg sm:text-xl text-[#F3EBDD]">
                    {current.title} · {current.hindi}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#D69B2D] tracking-wider">
                  {current.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 01 to 05 Documentary Chapter Steps */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`group p-6 sm:p-8 transition-all duration-300 cursor-pointer border-b border-[#1E0F0A]/10 ${
                    isSelected
                      ? 'bg-[#1E0F0A] text-[#F3EBDD] shadow-xl'
                      : 'hover:bg-[#1E0F0A]/5 text-[#1E0F0A]'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`font-mono text-sm sm:text-base font-bold tracking-widest ${
                          isSelected ? 'text-[#D69B2D]' : 'text-[#7D2418]'
                        }`}
                      >
                        {step.num}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                        {step.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs font-mono tracking-wider ${
                        isSelected ? 'text-[#D69B2D]' : 'text-[#7D2418]'
                      }`}
                    >
                      {step.duration}
                    </span>
                  </div>

                  <p
                    className={`text-sm sm:text-base font-light leading-relaxed mb-3 ${
                      isSelected ? 'text-[#F3EBDD]/90' : 'text-[#1E0F0A]/75'
                    }`}
                  >
                    {step.description}
                  </p>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="pt-3 border-t border-[#F3EBDD]/15 text-xs text-[#D69B2D] font-mono"
                    >
                      ✦ {step.detail}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
