import React from 'react';

export const MinimalSocialProof: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 md:py-44 bg-[#EDE4D8] text-[#1E0F0A] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-16 text-center space-y-10 sm:space-y-12 relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-[#7D2418]">
          <span className="w-6 h-[1px] bg-[#7D2418]" />
          <span>10 / Patron Reflections</span>
          <span className="w-6 h-[1px] bg-[#7D2418]" />
        </div>

        {/* The One Enormous Customer Quote in Serif */}
        <blockquote className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-normal leading-[1.12] tracking-tight text-[#1E0F0A]">
          “Opening the jar smelled exactly like my grandmother’s sun-drenched terrace in Varanasi. <span className="italic text-[#7D2418]">Nothing artificial</span>—just pure nostalgia, crunchy green mango, and sharp cold-pressed mustard oil.”
        </blockquote>

        {/* Small Attribution */}
        <div className="pt-4 flex flex-col items-center gap-1 font-mono text-xs">
          <span className="font-bold text-[#1E0F0A] tracking-wider uppercase">
            Dr. Ananya Sen
          </span>
          <span className="text-[#1E0F0A]/60 tracking-widest text-[11px]">
            Bengaluru, Karnataka · Verified Family Patron
          </span>
        </div>

      </div>
    </section>
  );
};
