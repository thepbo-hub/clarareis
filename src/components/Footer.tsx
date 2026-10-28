import React from 'react';
import { MapPin } from 'lucide-react';
import { DEFAULT_STUDIO_CONFIG } from '../config/studioConfig';

const WhatsAppMiniIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.031 2C6.495 2 2 6.49 2 12.02c0 1.97.575 3.82 1.637 5.405L2 22l4.743-1.603A9.99 9.99 0 0012.03 22c5.536 0 10.03-4.49 10.03-10.02S17.567 2 12.031 2zm0 18.293c-1.748 0-3.411-.5-4.836-1.442l-.348-.228-2.822.955.962-2.75-.246-.368A8.257 8.257 0 013.75 12.02c0-4.568 3.714-8.28 8.28-8.28s8.28 3.712 8.28 8.28-3.712 8.273-8.28 8.273zm4.536-6.208c-.248-.124-1.467-.723-1.695-.806-.228-.083-.394-.124-.56.124-.166.248-.642.806-.787.971-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.232-.738-.658-1.236-1.472-1.38-1.72-.146-.248-.016-.382.108-.505.112-.11.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.042-.31-.02-.435-.063-.124-.56-1.35-.768-1.85-.202-.485-.407-.42-.56-.427-.145-.008-.31-.01-.476-.01-.166 0-.435.062-.663.31-.228.248-.87.85-.87 2.072 0 1.223.89 2.404 1.014 2.57.124.166 1.751 2.673 4.242 3.748.593.256 1.056.409 1.417.524.595.19 1.137.163 1.564.099.477-.072 1.467-.6 1.674-1.18.207-.58.207-1.077.145-1.18-.062-.103-.228-.166-.476-.29z" />
  </svg>
);

const InstagramMiniIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-10 pb-12 pt-8 px-4 border-t border-[#E7D3A0]/60 bg-gradient-to-b from-[#FAF8F3] to-white text-center">
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Brand Name */}
        <span className="font-serif text-lg tracking-[0.2em] font-semibold text-[#171717] uppercase">
          {DEFAULT_STUDIO_CONFIG.brandName}
        </span>

        {/* Short Self-Care Quote */}
        <p className="font-serif italic text-xs text-[#77736D] mt-1 max-w-xs">
          “Onde o cuidado se transforma em elegância e bem-estar.”
        </p>

        {/* Hairline Divider with Gold Center Accent */}
        <div className="flex items-center justify-center gap-2 my-4 w-28">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C6A15B]/50" />
          <span className="w-1 h-1 rotate-45 bg-[#C6A15B]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C6A15B]/50" />
        </div>

        {/* Quick Social & Action Nav Icons */}
        <div className="flex items-center gap-3 mb-6">
          <a
            href={DEFAULT_STUDIO_CONFIG.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-white border border-[#E7D3A0] text-[#77736D] hover:text-[#C6A15B] hover:border-[#C6A15B] flex items-center justify-center shadow-sm transition-all hover:scale-105"
          >
            <InstagramMiniIcon className="w-4 h-4" />
          </a>

          <a
            href={DEFAULT_STUDIO_CONFIG.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-10 h-10 rounded-full bg-white border border-[#E7D3A0] text-[#77736D] hover:text-[#C6A15B] hover:border-[#C6A15B] flex items-center justify-center shadow-sm transition-all hover:scale-105"
          >
            <WhatsAppMiniIcon className="w-4 h-4" />
          </a>

          <a
            href={DEFAULT_STUDIO_CONFIG.links.maps}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Localização no Mapa"
            className="w-10 h-10 rounded-full bg-white border border-[#E7D3A0] text-[#77736D] hover:text-[#C6A15B] hover:border-[#C6A15B] flex items-center justify-center shadow-sm transition-all hover:scale-105"
          >
            <MapPin className="w-4 h-4" />
          </a>
        </div>

        {/* Bottom Rights */}
        <div className="text-[11px] text-[#77736D]">
          <span>© {new Date().getFullYear()} Clara Reis Studio. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
