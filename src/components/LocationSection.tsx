import React, { useState } from 'react';
import { MapPin, Navigation, Compass, ExternalLink, Copy, Check } from 'lucide-react';
import { DEFAULT_STUDIO_CONFIG } from '../config/studioConfig';
import { copyToClipboard } from '../utils/clipboard';

// Brand SVGs for Navigation Providers (Authentic Original Emblems)
const WazeIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 36 36" className={className} fill="none" aria-hidden="true">
    {/* Wheels */}
    <circle cx="11.5" cy="29" r="3.5" fill="#1E232A" />
    <circle cx="23.5" cy="29" r="3.5" fill="#1E232A" />
    <circle cx="11.5" cy="29" r="1.3" fill="#FFFFFF" />
    <circle cx="23.5" cy="29" r="1.3" fill="#FFFFFF" />
    {/* Cyan Car Body */}
    <path
      d="M30 15C30 21.6 24.6 27 18 27C14.7 27 11.7 25.7 9.5 23.6L5 25.2C4.1 25.5 3.3 24.7 3.6 23.8L4.6 20.1C3.6 18.2 3 16 3 13.5C3 6.9 9.7 1.5 18 1.5C24.6 1.5 30 6.9 30 13.5V15Z"
      fill="#33CCFF"
    />
    {/* Eyes */}
    <circle cx="13" cy="13" r="2.2" fill="#1E232A" />
    <circle cx="22" cy="13" r="2.2" fill="#1E232A" />
    {/* Smile */}
    <path
      d="M14.5 17.5C15.5 19 19.5 19 20.5 17.5"
      stroke="#1E232A"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const UberIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 36 36" className={className} aria-hidden="true">
    <rect width="36" height="36" rx="8" fill="#000000" />
    <text
      x="18"
      y="22.5"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      fontWeight="700"
      fontSize="11.5"
      letterSpacing="-0.2px"
    >
      Uber
    </text>
  </svg>
);

const GoogleMapsIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M12 2C7.58 2 4 5.58 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4.42-3.58-8-8-8zm0 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"
    />
  </svg>
);

export const LocationSection: React.FC = () => {
  // Routes links - Direct route using user's current GPS location
  const googleRouteUrl = 'https://www.google.com/maps/dir/?api=1&destination=Clara+Reis+Studio&destination_place_id=ChIJ6wRYl6N_mQAR3ajiX1piRfY';
  const wazeUrl = 'https://waze.com/ul?q=Clara%20Reis%20Studio&navigate=yes';
  const uberUrl = 'https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=Clara%20Reis%20Studio';

  const [copiedLocation, setCopiedLocation] = useState(false);

  const handleCopyLocation = async () => {
    // Copies the official Google Maps link / location info directly to clipboard
    const locationInfo = 'Clara Reis Studio: https://maps.app.goo.gl/e7eFqTGY1vUDkVaE7';
    const success = await copyToClipboard(locationInfo);
    if (success) {
      setCopiedLocation(true);
      setTimeout(() => {
        setCopiedLocation(false);
      }, 2500);
    }
  };

  return (
    <section className="w-full my-6 px-4">
      <div className="max-w-md mx-auto rounded-3xl bg-white border border-[#E7D3A0] p-5 shadow-sm hover:shadow-md transition-shadow">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#FAF8F3]">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FAF8F3] to-[#E7D3A0]/40 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#171717] tracking-wide">
                Como chegar
              </h3>
              <p className="text-[11px] text-[#77736D]">
                Trace sua rota com facilidade e conforto
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#C6A15B] font-medium">
            <Compass className="w-3.5 h-3.5" />
            <span>Navegação</span>
          </div>
        </div>

        {/* Location Map Image with 1-Second Propagating Small Waves at the Red Point */}
        <div className="relative mt-4 w-full rounded-2xl bg-[#F6F3EB] border border-[#E7D3A0]/70 overflow-hidden shadow-inner select-none">
          <img
            src="https://i.postimg.cc/cCd9KZYJ/Localizacao-Clara-Reis-Studio.jpg"
            alt="Mapa de Localização Clara Reis Studio"
            className="w-full h-auto block object-cover"
            loading="lazy"
          />

          {/* Compass / Active Status in Top Corner */}
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#E7D3A0]/60 shadow-sm flex items-center gap-1 text-[9px] font-semibold text-[#171717] tracking-wider pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] animate-ping" />
            MAPA ATIVO
          </div>

          {/* Propagating Waves & Studio Name Centered on the Red Point (X: 67.64%, Y: 70.56%) */}
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center z-10"
            style={{ left: '67.64%', top: '70.56%' }}
          >
            {/* Wave 1: 1-second propagating small wave */}
            <span
              aria-hidden="true"
              className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#E53E3E] animate-wave-small-1 pointer-events-none"
            />
            {/* Wave 2: Staggered 1-second propagating small wave */}
            <span
              aria-hidden="true"
              className="absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#C6A15B] animate-wave-small-2 pointer-events-none"
            />

            {/* Central Pin Dot Indicator */}
            <span className="relative w-3 h-3 rounded-full bg-[#E53E3E] ring-2 ring-white shadow-md z-10" />

            {/* Written: Clara Reis Studio */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#C6A15B] shadow-md whitespace-nowrap pointer-events-none">
              <span className="font-serif text-[10px] sm:text-[11px] font-bold text-[#171717] tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E53E3E] animate-pulse" />
                Clara Reis Studio
              </span>
            </div>
          </div>
        </div>

        {/* Route Options Header */}
        <div className="mt-4 pt-3 border-t border-[#FAF8F3]">
          <span className="block text-xs font-semibold text-[#171717] uppercase tracking-wider mb-2.5 text-center">
            Escolha seu aplicativo de rota favorito:
          </span>

          {/* 3 Route Provider Buttons: Google Maps, Waze, Uber */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {/* Google Maps Route */}
            <a
              href={googleRouteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white border border-[#E7D3A0] hover:border-[#C6A15B] hover:bg-[#FAF8F3] shadow-sm hover:shadow transition-all duration-200 active:scale-95 group text-center"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAF8F3] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <GoogleMapsIcon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-[#171717] group-hover:text-[#C6A15B] transition-colors">
                Google
              </span>
              <span className="text-[10px] text-[#77736D]">
                Iniciar Rota
              </span>
            </a>

            {/* Waze Route */}
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white border border-[#E7D3A0] hover:border-[#C6A15B] hover:bg-[#FAF8F3] shadow-sm hover:shadow transition-all duration-200 active:scale-95 group text-center"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAF8F3] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <WazeIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-[#171717] group-hover:text-[#C6A15B] transition-colors">
                Waze
              </span>
              <span className="text-[10px] text-[#77736D]">
                GPS Rota
              </span>
            </a>

            {/* Uber Ride */}
            <a
              href={uberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-white border border-[#E7D3A0] hover:border-[#C6A15B] hover:bg-[#FAF8F3] shadow-sm hover:shadow transition-all duration-200 active:scale-95 group text-center"
            >
              <div className="w-8 h-8 rounded-lg bg-[#FAF8F3] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                <UberIcon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-[#171717] group-hover:text-[#C6A15B] transition-colors">
                Uber
              </span>
              <span className="text-[10px] text-[#77736D]">
                Pedir Carro
              </span>
            </a>
          </div>

          {/* Primary Action Button: Copiar Local */}
          <div className="mt-3">
            <button
              type="button"
              onClick={handleCopyLocation}
              className={`group relative w-full py-3.5 px-4 rounded-xl border font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-all duration-300 active:scale-[0.97] ${
                copiedLocation
                  ? 'bg-[#171717] text-[#FAF8F3] border-[#C6A15B] shadow-md'
                  : 'bg-gradient-to-r from-white via-[#FAF8F3] to-white hover:bg-gradient-to-r hover:from-[#C6A15B] hover:via-[#E7D3A0] hover:to-[#C6A15B] active:bg-[#C6A15B] active:text-[#171717] border-[#C6A15B] text-[#171717] hover:shadow-md hover:shadow-[#C6A15B]/20'
              }`}
            >
              {copiedLocation ? (
                <>
                  <Check className="w-4 h-4 text-[#E7D3A0]" />
                  <span>Local copiado com sucesso!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#C6A15B] group-hover:text-[#171717] group-active:text-[#171717] transition-colors" />
                  <span>Copiar local</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
