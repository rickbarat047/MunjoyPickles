import React, { useEffect, useState } from 'react';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Only run if not already shown in session to respect returning users
    const hasSeen = sessionStorage.getItem('munjoy_loader_seen');
    if (hasSeen) {
      setVisible(false);
      return;
    }

    const timer1 = setTimeout(() => {
      setFade(true);
    }, 1100);

    const timer2 = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('munjoy_loader_seen', 'true');
    }, 1600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1F1813] text-[#FAF7F2] transition-opacity duration-700 ease-in-out ${
        fade ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center space-y-3 px-6">
        <span className="text-[11px] uppercase tracking-[0.3em] text-[#D97706] font-medium block">
          Artisanal Indian Kitchen
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-[0.2em] text-[#FAF7F2]">
          MUNJOY
        </h1>
        <div className="w-24 h-[1px] bg-[#8B1E13] mx-auto mt-4 overflow-hidden relative">
          <div className="w-full h-full bg-[#D97706] animate-[pulse_1s_ease-in-out_infinite]" />
        </div>
        <p className="font-serif italic text-xs text-[#A89A8E] pt-2">
          Pickled with love, cured in the sun.
        </p>
      </div>
    </div>
  );
};
