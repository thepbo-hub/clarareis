import React, { useState, useEffect } from 'react';

export const FloatingTrinksButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button after user scrolls past 180px
      if (window.scrollY > 180) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTrinks = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('trinks-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside
      aria-label="Atalho para aplicativo Trinks"
      className={`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-500 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <a
        href="#trinks-section"
        onClick={handleScrollToTrinks}
        aria-label="Ir direto para o aplicativo Trinks"
        className="fab-3d-trinks blade-light-3s group flex items-center gap-2.5 py-2.5 px-3.5 sm:py-3 sm:px-4 rounded-full text-[#171717] font-manrope font-bold text-xs shadow-xl cursor-pointer select-none"
      >
        {/* Trinks Icon in circular white backdrop */}
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-[#CFA049]/40 p-1 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
          <img
            src="https://i.postimg.cc/x1Y95b26/Trinks-sem-fundo.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </span>

        {/* Text */}
        <span className="flex flex-col text-left pr-0.5">
          <span className="text-[11px] sm:text-xs font-manrope font-extrabold tracking-tight text-[#171717] leading-none drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]">
            App Trinks
          </span>
          <span className="text-[9px] font-manrope font-semibold text-[#704F18] leading-tight">
            Avaliar & Agendar
          </span>
        </span>

        {/* Down Arrow Indicator */}
        <span
          aria-hidden="true"
          className="w-5 h-5 rounded-full bg-white/80 border border-[#CFA049]/40 flex items-center justify-center text-[10px] font-bold text-[#171717] shadow-2xs group-hover:translate-y-0.5 transition-transform"
        >
          ↓
        </span>
      </a>
    </aside>
  );
};
