import React from 'react';
import { MapPin, Navigation, Compass, ExternalLink } from 'lucide-react';
import { DEFAULT_STUDIO_CONFIG } from '../config/studioConfig';

// Brand SVGs for Navigation Providers
const WazeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.54 10.42c-.22-4.66-4.04-8.38-8.77-8.38-4.85 0-8.77 3.92-8.77 8.77 0 1.95.64 3.76 1.73 5.22L3.1 19.34a.75.75 0 00.94.94l3.31-1.63c1.33.74 2.86 1.16 4.42 1.16 3.1 0 5.86-1.6 7.45-4.02.1-.15.2-.3.29-.46 1.25-2.06 1.34-3.52 1.03-4.91zm-11.8 1.34a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm6.52 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm-5.06 3.86a.75.75 0 011.06 0 2.25 2.25 0 003.18 0 .75.75 0 111.06 1.06 3.75 3.75 0 01-5.3 0 .75.75 0 010-1.06z" />
  </svg>
);

const UberIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.2c3.756 0 6.8 3.044 6.8 6.8s-3.044 6.8-6.8 6.8-6.8-3.044-6.8-6.8S8.244 5.2 12 5.2zm-2.8 4.4v4.8h5.6v-1.6h-3.6V9.6H9.2z" />
  </svg>
);

const GoogleMapsIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
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

        {/* Realistic Stylized Map Canvas with Radar Waves */}
        <div className="relative mt-4 w-full h-52 rounded-2xl bg-[#F6F3EB] border border-[#E7D3A0]/70 overflow-hidden shadow-inner flex items-center justify-center select-none">
          {/* SVG Map Layout (Streets, Blocks, Avenues, Buildings) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-85"
            viewBox="0 0 400 220"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Base Block Parcels */}
            <rect x="10" y="10" width="85" height="60" rx="6" fill="#EDE7DC" />
            <rect x="105" y="10" width="95" height="60" rx="6" fill="#EDE7DC" />
            <rect x="210" y="10" width="180" height="60" rx="6" fill="#EDE7DC" />

            <rect x="10" y="80" width="85" height="65" rx="6" fill="#EDE7DC" />
            <rect x="105" y="80" width="95" height="65" rx="6" fill="#E6DFD2" stroke="#E7D3A0" strokeWidth="1" />
            <rect x="210" y="80" width="180" height="65" rx="6" fill="#EDE7DC" />

            <rect x="10" y="155" width="85" height="55" rx="6" fill="#EDE7DC" />
            <rect x="105" y="155" width="95" height="55" rx="6" fill="#EDE7DC" />
            <rect x="210" y="155" width="180" height="55" rx="6" fill="#EDE7DC" />

            {/* Subtle Green Park Area */}
            <rect x="220" y="18" width="60" height="44" rx="8" fill="#E0EBD9" opacity="0.8" />
            <circle cx="235" cy="35" r="4" fill="#C9DEBD" />
            <circle cx="255" cy="42" r="5" fill="#C9DEBD" />

            {/* Minor Streets */}
            <line x1="0" y1="75" x2="400" y2="75" stroke="#FFFFFF" strokeWidth="10" />
            <line x1="0" y1="150" x2="400" y2="150" stroke="#FFFFFF" strokeWidth="10" />
            <line x1="100" y1="0" x2="100" y2="220" stroke="#FFFFFF" strokeWidth="10" />
            <line x1="205" y1="0" x2="205" y2="220" stroke="#FFFFFF" strokeWidth="12" />

            {/* Main Avenue intersecting near the salon */}
            <line x1="0" y1="112" x2="400" y2="112" stroke="#FFFFFF" strokeWidth="16" />
            <line x1="0" y1="112" x2="400" y2="112" stroke="#FAF8F3" strokeWidth="14" />
            {/* Center Dashed Lane */}
            <line x1="0" y1="112" x2="400" y2="112" stroke="#E7D3A0" strokeWidth="1.5" strokeDasharray="6,8" />

            {/* Secondary Cross Avenue */}
            <line x1="205" y1="0" x2="205" y2="220" stroke="#FFFFFF" strokeWidth="16" />
            <line x1="205" y1="0" x2="205" y2="220" stroke="#FAF8F3" strokeWidth="14" />
            <line x1="205" y1="0" x2="205" y2="220" stroke="#E7D3A0" strokeWidth="1.5" strokeDasharray="6,8" />

            {/* Street Names (Discreet & Aesthetic) */}
            <text x="25" y="115" fill="#77736D" fontSize="8" fontFamily="system-ui" letterSpacing="1">
              AVENIDA PRINCIPAL
            </text>
            <text x="215" y="45" fill="#77736D" fontSize="7" fontFamily="system-ui" letterSpacing="0.5">
              PRAÇA DAS FLORES
            </text>
          </svg>

          {/* Compass Rose Indicator in Top Corner */}
          <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#E7D3A0]/60 shadow-sm flex items-center gap-1 text-[9px] font-semibold text-[#171717] tracking-wider pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            MAPA ATIVO
          </div>

          {/* Golden Radar Wave Rings (Spaced out at 3-second intervals) */}
          <div
            aria-hidden="true"
            className="absolute w-28 h-28 rounded-full border-2 border-[#C6A15B] animate-radar-1 pointer-events-none"
          />
          <div
            aria-hidden="true"
            className="absolute w-28 h-28 rounded-full border border-[#E7D3A0] animate-radar-2 pointer-events-none"
          />

          {/* Central Map Pin on Clara Reis Studio Location */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Subtle glow */}
            <div className="absolute w-12 h-12 rounded-full bg-[#C6A15B]/30 blur-md pointer-events-none" />

            {/* Pin Node */}
            <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#E7D3A0] via-[#C6A15B] to-[#997736] p-0.5 shadow-xl shadow-[#C6A15B]/40 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#171717] flex items-center justify-center text-[#E7D3A0]">
                <MapPin className="w-5 h-5 fill-[#E7D3A0] text-[#171717]" />
              </div>
            </div>

            {/* Studio Badge on Map */}
            <div className="mt-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-[#E7D3A0] shadow-md">
              <span className="font-serif text-xs font-bold text-[#171717] tracking-wider whitespace-nowrap">
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
                <GoogleMapsIcon className="w-4 h-4" />
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
              <div className="w-8 h-8 rounded-lg bg-[#FAF8F3] flex items-center justify-center mb-1 text-[#33CCFF] group-hover:scale-110 transition-transform">
                <WazeIcon className="w-5 h-5 text-[#33CCFF]" />
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
              <div className="w-8 h-8 rounded-lg bg-[#FAF8F3] flex items-center justify-center mb-1 text-[#171717] group-hover:scale-110 transition-transform">
                <UberIcon className="w-5 h-5 text-[#171717]" />
              </div>
              <span className="text-xs font-semibold text-[#171717] group-hover:text-[#C6A15B] transition-colors">
                Uber
              </span>
              <span className="text-[10px] text-[#77736D]">
                Pedir Carro
              </span>
            </a>
          </div>

          {/* Primary Action Button: Traçar Rota no Google Maps */}
          <div className="mt-3">
            <a
              href={googleRouteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full py-3 px-4 rounded-xl bg-gradient-to-r from-white via-[#FAF8F3] to-white hover:bg-gradient-to-r hover:from-[#C6A15B] hover:via-[#E7D3A0] hover:to-[#C6A15B] border border-[#C6A15B] text-[#171717] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:shadow-[#C6A15B]/20 transition-all duration-300 active:scale-[0.98]"
            >
              <Navigation className="w-4 h-4 text-[#C6A15B] group-hover:text-[#171717] transition-colors" />
              <span>Traçar Rota no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#77736D] group-hover:text-[#171717] transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
