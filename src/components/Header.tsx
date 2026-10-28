import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { DEFAULT_STUDIO_CONFIG } from '../config/studioConfig';
import { calculateBusinessStatus, BusinessStatusResult } from '../utils/businessHours';

export const Header: React.FC = () => {
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const [status, setStatus] = useState<BusinessStatusResult>(calculateBusinessStatus());

  useEffect(() => {
    setStatus(calculateBusinessStatus());
    const interval = setInterval(() => {
      setStatus(calculateBusinessStatus());
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative w-full overflow-hidden text-center bg-gradient-to-b from-[#F5E6C5] via-[#E9D09A] to-[#D5AF6B] min-h-screen min-h-[100dvh] py-10 px-4 flex flex-col items-center justify-between shadow-sm">
      {/* Concentric Light White Decorative Circles in the Background */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center -z-0"
      >
        {/* Medium Circle with delicate white hairline border */}
        <div className="w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] rounded-full border border-white/45" />
        
        {/* Large Circle covering right down to the bottom golden section */}
        <div className="absolute w-[580px] h-[580px] sm:w-[820px] sm:h-[820px] rounded-full border border-white/35" />
      </div>

      {/* Spacer for vertical balance */}
      <div className="w-full h-2 pointer-events-none" />

      {/* Main Hero Content Block */}
      <div className="relative z-10 flex flex-col items-center my-auto w-full max-w-sm">

      {/* Official Logo in Rounded Golden Plaque */}
      <div className="relative z-10 group">
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-3xl p-3 flex items-center justify-center bg-gradient-to-b from-[#F5E2B8] via-[#E8CB8E] to-[#D5AE69] shadow-xl shadow-[#9E7736]/20 border border-white/60 transition-transform duration-500 hover:scale-[1.02]">
          {!logoLoaded && !logoError && (
            <div className="absolute inset-0 flex items-center justify-center bg-[#FAF8F3]/50 animate-pulse rounded-3xl">
              <span className="font-serif text-xl font-bold tracking-widest text-[#171717]">CR</span>
            </div>
          )}

          {logoError ? (
            <div className="flex flex-col items-center justify-center p-2 text-center">
              <span className="font-serif text-3xl font-bold text-[#171717] tracking-wider">CR</span>
              <span className="text-[10px] uppercase font-semibold text-[#171717]/80 tracking-widest mt-1">
                Clara Reis
              </span>
            </div>
          ) : (
            <img
              src={DEFAULT_STUDIO_CONFIG.logoUrl}
              alt="Logotipo Oficial Clara Reis Studio"
              referrerPolicy="no-referrer"
              onLoad={() => setLogoLoaded(true)}
              onError={() => setLogoError(true)}
              className={`relative z-10 w-full h-full object-contain filter drop-shadow-xs transition-all duration-700 ${
                logoLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            />
          )}

          {/* Delicate inner white hairline contour */}
          <div 
            aria-hidden="true"
            className="absolute inset-1 rounded-2xl border border-white/40 pointer-events-none"
          />
        </div>
      </div>

      {/* Typography Exactly Matching Reference: CLARA REIS / STUDIO */}
      <div className="relative z-10 mt-6 flex flex-col items-center">
        <h1 className="font-serif text-3xl sm:text-4xl tracking-[0.16em] uppercase text-[#171717] font-normal sm:font-medium leading-none">
          CLARA REIS
        </h1>
        <span className="font-serif italic text-2xl sm:text-3xl tracking-[0.38em] uppercase text-[#8F6B2E] mt-1.5 font-normal">
          S T U D I O
        </span>

        {/* Delicate Tagline */}
        <p className="font-serif italic text-sm sm:text-base text-[#5C451D] mt-2 tracking-wide">
          “{DEFAULT_STUDIO_CONFIG.tagline}”
        </p>
      </div>

      {/* Real-time Status Badge (Open / Closed) */}
      <div className="relative z-10 mt-4">
        <div
          className={`inline-flex items-center gap-2 px-4 py-1 rounded-full border shadow-xs backdrop-blur-xs transition-all duration-300 ${
            status.isOpen
              ? 'bg-[#F2ECCB]/75 border-[#C4B76B] text-[#3D4C15]'
              : 'bg-[#F7DEC7]/75 border-[#DDB08A] text-[#69291D]'
          }`}
        >
          {/* Status Indicator Dot */}
          <span className="relative flex h-2 w-2 items-center justify-center">
            {status.isOpen ? (
              <>
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
              </>
            ) : (
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B83826]" />
            )}
          </span>

          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-sans">
            {status.isOpen ? (
              <>ABERTO AGORA · {status.nextOpenText.toUpperCase()}</>
            ) : (
              <>{status.nextOpenText.toUpperCase()}</>
            )}
          </span>
        </div>
      </div>

      {/* 3D Shiny Embossed Button to Trinks App Section (Blade Sweep Every 3s) */}
      <div className="relative z-10 mt-5 w-full max-w-[290px] px-2">
        <a
          href="#trinks-section"
          onClick={(e) => {
            e.preventDefault();
            const target = document.getElementById('trinks-section');
            if (target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          aria-label="Ir para o aplicativo Trinks"
          className="btn-3d-trinks blade-light-3s group flex items-center justify-between gap-3 w-full py-3 px-4 sm:px-4.5 rounded-2xl cursor-pointer select-none"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-white/95 border border-[#D4A853]/40 p-1 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
              <img
                src="https://i.postimg.cc/x1Y95b26/Trinks-sem-fundo.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain"
              />
            </span>
            <div className="flex flex-col text-left">
              <strong className="font-manrope font-extrabold text-[13px] sm:text-[14px] text-[#171717] tracking-tight leading-tight drop-shadow-[0_1px_0_rgba(255,255,255,0.7)]">
                Aplicativo Trinks
              </strong>
              <span className="font-manrope font-medium text-[10.5px] text-[#704F18]">
                Avalie & Agende Online
              </span>
            </div>
          </div>

          <span
            aria-hidden="true"
            className="w-7 h-7 rounded-full bg-white/85 border border-[#CFA049]/40 flex items-center justify-center font-manrope font-bold text-xs text-[#171717] shadow-2xs group-hover:translate-x-0.5 transition-transform shrink-0"
          >
            ↓
          </span>
        </a>
      </div>
    </div>

    {/* "DESLIZE v" hint anchored at the bottom of the golden header */}
    <div className="relative z-10 mt-auto pt-4 flex flex-col items-center gap-0.5 text-[#735520] select-none">
      <span className="text-[10px] tracking-[0.3em] font-medium uppercase font-sans">
        DESLIZE
      </span>
      <ChevronDown className="w-3.5 h-3.5 animate-bounce opacity-85 text-[#735520]" />
    </div>
    </header>
  );
};
