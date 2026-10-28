import React, { useState, useEffect } from 'react';

export const FloatingTrinksButton: React.FC = () => {
  const [hasScrolledPastTop, setHasScrolledPastTop] = useState(false);
  const [isInsideTrinks, setIsInsideTrinks] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    // 1. Show floating button once user scrolls beyond top hero area (past 160px)
    const handleScroll = () => {
      setHasScrolledPastTop(window.scrollY > 160);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 2. Observer for the Trinks section (#trinks-section)
    // Whenever the user is inside or viewing the Trinks section, the button disappears
    let observer: IntersectionObserver | null = null;
    const trinksElem = document.getElementById('trinks-section');

    if (trinksElem) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsInsideTrinks(entry.isIntersecting);
          });
        },
        {
          // Trigger as soon as the Trinks section is in the viewport
          threshold: 0,
          rootMargin: '-20px 0px -20px 0px',
        }
      );
      observer.observe(trinksElem);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  const handleScrollToTrinks = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const target = document.getElementById('trinks-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Button is visible only if scrolled past top AND NOT currently inside the Trinks section
  const isVisible = hasScrolledPastTop && !isInsideTrinks;

  return (
    <aside
      aria-label="Atalho para o aplicativo Trinks"
      className={`fixed bottom-4 right-3 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 ease-out will-change-transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-6 scale-90 pointer-events-none'
      }`}
    >
      <a
        href="#trinks-section"
        onClick={handleScrollToTrinks}
        onTouchStart={() => setIsTouching(true)}
        onTouchEnd={() => setIsTouching(false)}
        onTouchCancel={() => setIsTouching(false)}
        aria-label="Ir direto para a seção do aplicativo Trinks"
        className={`fab-3d-trinks blade-light-3s group flex items-center gap-2 sm:gap-2.5 py-2 px-3 sm:py-2.5 sm:px-4 rounded-full text-[#171717] font-manrope font-bold shadow-xl cursor-pointer select-none transition-all duration-150 touch-manipulation active:scale-95 ${
          isTouching ? 'scale-95 translate-y-1' : ''
        }`}
      >
        {/* Trinks Icon in circular white backdrop */}
        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/95 border border-[#CFA049]/40 p-1 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 group-active:scale-95 transition-transform">
          <img
            src="https://i.postimg.cc/x1Y95b26/Trinks-sem-fundo.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-contain"
          />
        </span>

        {/* Text optimized for mobile screens */}
        <span className="flex flex-col text-left pr-0.5">
          <span className="text-[11px] sm:text-xs font-manrope font-extrabold tracking-tight text-[#171717] leading-none drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]">
            App Trinks
          </span>
          <span className="text-[9px] font-manrope font-semibold text-[#704F18] leading-tight mt-0.5">
            Avaliar & Agendar
          </span>
        </span>

        {/* Down Arrow Indicator */}
        <span
          aria-hidden="true"
          className="w-5 h-5 rounded-full bg-white/85 border border-[#CFA049]/40 flex items-center justify-center text-[10px] font-bold text-[#171717] shadow-2xs group-hover:translate-y-0.5 transition-transform shrink-0"
        >
          ↓
        </span>
      </a>
    </aside>
  );
};
