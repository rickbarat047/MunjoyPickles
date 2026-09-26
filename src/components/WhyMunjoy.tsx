import React from 'react';
import { Sparkles, Sun, Heart, Flame } from 'lucide-react';

export const WhyMunjoy: React.FC = () => {
  const features = [
    {
      icon: Sun,
      title: 'Authentic Indian Flavours',
      description: 'Zero adulteration. We follow ancestral regional formulations with genuine kacchi ghani mustard oil and stone-cracked whole spices.'
    },
    {
      icon: Sparkles,
      title: 'Small-Batch Craft',
      description: 'Prepared in limited vessels of 40–60 jars at a time to ensure complete quality control, crisp texture, and aromatic potency.'
    },
    {
      icon: Heart,
      title: 'Made With Care',
      description: 'Every mango is sliced by hand, every Banarasi chilli is carefully slit and stuffed, and every jar is rested under real Indian sunlight.'
    },
    {
      icon: Flame,
      title: 'Bold, Nostalgic Taste',
      description: 'Deep, multi-dimensional flavour that awakens everyday meals—the comforting tang and warmth that instantly transports you home.'
    }
  ];

  return (
    <section id="why-munjoy" className="py-24 sm:py-32 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8B1E13] font-semibold">
            The Munjoy Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#241E1A]">
            Why Discerning Tables Choose Munjoy
          </h2>
          <p className="text-sm sm:text-base text-[#5A4E45] leading-relaxed">
            Crafted for those who can immediately tell the difference between factory relishes and genuine homemade preservation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="p-8 bg-[#F5EFEB] rounded-xs border border-[#E8DFD5] hover:border-[#D5C7B7] transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xs bg-[#FAF7F2] border border-[#E0D4C5] flex items-center justify-center text-[#8B1E13] shadow-2xs">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#241E1A] leading-snug">
                    {f.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5A4E45] leading-relaxed">
                    {f.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E5DACD] text-[11px] font-mono text-[#8A7768] tabular-nums">
                  0{i + 1} / 04
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
