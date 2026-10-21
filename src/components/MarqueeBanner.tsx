import React from 'react';

const WORDS = [
  'ELEGÂNCIA',
  'CABELOS',
  'UNHAS',
  'BELEZA',
  'AUTOESTIMA',
  'CUIDADO',
];

export const MarqueeBanner: React.FC = () => {
  // Repeat words sequence multiple times to guarantee seamless infinite looping
  const repeatedWords = [...WORDS, ...WORDS, ...WORDS, ...WORDS];

  return (
    <div className="w-full bg-white border-y border-[#E7D3A0]/70 py-3 sm:py-3.5 overflow-hidden shadow-xs relative select-none">
      {/* Subtle edge fade overlays */}
      <div 
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" 
      />
      <div 
        aria-hidden="true"
        className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" 
      />

      <div className="animate-marquee items-center gap-6 sm:gap-8">
        {repeatedWords.map((word, index) => (
          <div key={index} className="flex items-center gap-6 sm:gap-8 flex-shrink-0">
            <span className="font-serif italic font-medium text-[#171717] text-base sm:text-lg tracking-[0.2em] uppercase">
              {word}
            </span>
            <span className="text-[#C6A15B] text-xs sm:text-sm select-none" aria-hidden="true">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
