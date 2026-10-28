import React from 'react';
import { ChevronRight } from 'lucide-react';
import { DEFAULT_STUDIO_CONFIG } from '../config/studioConfig';
import { ScrollReveal } from './ScrollReveal';

// Custom Authentic Brand SVGs
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.031 2C6.495 2 2 6.49 2 12.02c0 1.97.575 3.82 1.637 5.405L2 22l4.743-1.603A9.99 9.99 0 0012.03 22c5.536 0 10.03-4.49 10.03-10.02S17.567 2 12.031 2zm0 18.293c-1.748 0-3.411-.5-4.836-1.442l-.348-.228-2.822.955.962-2.75-.246-.368A8.257 8.257 0 013.75 12.02c0-4.568 3.714-8.28 8.28-8.28s8.28 3.712 8.28 8.28-3.712 8.273-8.28 8.273zm4.536-6.208c-.248-.124-1.467-.723-1.695-.806-.228-.083-.394-.124-.56.124-.166.248-.642.806-.787.971-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.232-.738-.658-1.236-1.472-1.38-1.72-.146-.248-.016-.382.108-.505.112-.11.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.042-.31-.02-.435-.063-.124-.56-1.35-.768-1.85-.202-.485-.407-.42-.56-.427-.145-.008-.31-.01-.476-.01-.166 0-.435.062-.663.31-.228.248-.87.85-.87 2.072 0 1.223.89 2.404 1.014 2.57.124.166 1.751 2.673 4.242 3.748.593.256 1.056.409 1.417.524.595.19 1.137.163 1.564.099.477-.072 1.467-.6 1.674-1.18.207-.58.207-1.077.145-1.18-.062-.103-.228-.166-.476-.29z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const GoogleIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.067 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export const ContactButtons: React.FC = () => {
  return (
    <section className="w-full my-6 px-4">
      <div className="max-w-md mx-auto flex flex-col gap-3.5">
        {/* 1. WhatsApp */}
        <ScrollReveal delayMs={0} distance={20} className="w-full">
          <a
            href={DEFAULT_STUDIO_CONFIG.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between w-full p-4 rounded-2xl bg-white border border-[#E7D3A0] shadow-sm hover:shadow-md hover:border-[#C6A15B] transition-all duration-300 active:scale-[0.98] active:border-[#C6A15B] active:bg-[#FAF8F3]/70 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF8F3] to-[#E7D3A0]/60 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] shadow-inner group-hover:scale-105 group-active:scale-105 group-hover:bg-[#C6A15B] group-active:bg-[#C6A15B] group-hover:text-white group-active:text-white transition-all duration-300">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-sm sm:text-base font-semibold text-[#171717] tracking-tight group-hover:text-[#C6A15B] group-active:text-[#C6A15B] transition-colors">
                  Falar pelo WhatsApp
                </span>
                <span className="block text-xs text-[#77736D]">
                  Tire dúvidas e consulte horários
                </span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#77736D] group-hover:text-[#C6A15B] group-active:text-[#C6A15B] group-hover:translate-x-1 group-active:translate-x-1 transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </a>
        </ScrollReveal>

        {/* 2. Instagram */}
        <ScrollReveal delayMs={120} distance={20} className="w-full">
          <a
            href={DEFAULT_STUDIO_CONFIG.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between w-full p-4 rounded-2xl bg-white border border-[#E7D3A0] shadow-sm hover:shadow-md hover:border-[#C6A15B] transition-all duration-300 active:scale-[0.98] active:border-[#C6A15B] active:bg-[#FAF8F3]/70 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF8F3] to-[#E7D3A0]/60 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] shadow-inner group-hover:scale-105 group-active:scale-105 group-hover:bg-[#C6A15B] group-active:bg-[#C6A15B] group-hover:text-white group-active:text-white transition-all duration-300">
                <InstagramIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-sm sm:text-base font-semibold text-[#171717] tracking-tight group-hover:text-[#C6A15B] group-active:text-[#C6A15B] transition-colors">
                  Conheça nosso Instagram
                </span>
                <span className="block text-xs text-[#77736D]">
                  @clarareisstudio · Fotos & Novidades
                </span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#77736D] group-hover:text-[#C6A15B] group-active:text-[#C6A15B] group-hover:translate-x-1 group-active:translate-x-1 transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </a>
        </ScrollReveal>

        {/* 3. Google Avaliação */}
        <ScrollReveal delayMs={240} distance={20} className="w-full">
          <a
            href={DEFAULT_STUDIO_CONFIG.links.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between w-full p-4 rounded-2xl bg-white border border-[#E7D3A0] shadow-sm hover:shadow-md hover:border-[#C6A15B] transition-all duration-300 active:scale-[0.98] active:border-[#C6A15B] active:bg-[#FAF8F3]/70 hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FAF8F3] to-[#E7D3A0]/60 border border-[#C6A15B]/30 flex items-center justify-center text-[#C6A15B] shadow-inner group-hover:scale-105 group-active:scale-105 group-hover:bg-[#C6A15B] group-active:bg-[#C6A15B] group-hover:text-white group-active:text-white transition-all duration-300">
                <GoogleIcon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <span className="block text-sm sm:text-base font-semibold text-[#171717] tracking-tight group-hover:text-[#C6A15B] group-active:text-[#C6A15B] transition-colors">
                  Avalie-nos no Google
                </span>
                <span className="block text-xs text-[#77736D]">
                  Compartilhe sua experiência no Studio
                </span>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-[#77736D] group-hover:text-[#C6A15B] group-active:text-[#C6A15B] group-hover:translate-x-1 group-active:translate-x-1 transition-all">
              <ChevronRight className="w-5 h-5" />
            </div>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};
