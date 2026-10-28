import React, { useState, useEffect } from 'react';

const ANDROID_URL = 'https://play.google.com/store/apps/details?id=com.trinks.m';
const IPHONE_URL = 'https://apps.apple.com/br/app/trinks-com/id628518776';

export const TrinksSection: React.FC = () => {
  const [logoLoaded, setLogoLoaded] = useState(true);
  const [phoneLoaded, setPhoneLoaded] = useState(true);

  // Smart Button state: detects Apple mobile, Android, or default desktop
  const [smartButton, setSmartButton] = useState({
    url: ANDROID_URL,
    title: 'Baixar o aplicativo Trinks',
    subtitle: 'Disponível para Android e iPhone',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Identifica iPhone, iPad e iPod (contempla iPads que se identificam como Mac)
    const isAppleMobile =
      /iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

    const isAndroid = /Android/i.test(navigator.userAgent);

    if (isAppleMobile) {
      setSmartButton({
        url: IPHONE_URL,
        title: 'Baixar na App Store',
        subtitle: 'Disponível para iPhone e iPad',
      });
    } else if (isAndroid) {
      setSmartButton({
        url: ANDROID_URL,
        title: 'Baixar no Google Play',
        subtitle: 'Disponível para Android',
      });
    } else {
      setSmartButton({
        url: ANDROID_URL,
        title: 'Baixar o aplicativo Trinks',
        subtitle: 'Disponível para Android e iPhone',
      });
    }
  }, []);

  return (
    <section id="trinks-section" className="w-full my-8 px-4 font-manrope scroll-mt-6">
      {/* Outer Card with Animated Gold Contour & Wide Banner Proportions */}
      <div className="trinks-card relative w-full max-w-[1060px] mx-auto rounded-[30px] p-6 sm:p-10 md:p-12 bg-gradient-to-br from-white via-[#FAF8F3] to-white border border-[#C6A15B]/48 shadow-[0_25px_65px_rgba(23,23,23,0.07)] overflow-hidden isolate">
        {/* Ambient Warm Golden Glow */}
        <div
          aria-hidden="true"
          className="card-glow pointer-events-none absolute -top-32 -right-24 w-80 h-80 rounded-full bg-[#E7D3A0]/22 blur-[75px] -z-10"
        />

        <div className="grid grid-cols-1 md:grid-cols-[1.08fr_0.92fr] gap-8 md:gap-10 items-center">
          {/* Left: Content Area */}
          <div className="content relative z-10 flex flex-col text-left max-w-[480px]">
            {/* Brand Header */}
            <header className="brand flex items-center gap-3.5 mb-6">
              <div className="brand-logo w-14 h-14 rounded-2xl bg-white border border-[#C6A15B]/30 p-2 shadow-sm flex items-center justify-center shrink-0">
                {logoLoaded ? (
                  <img
                    src="https://i.postimg.cc/x1Y95b26/Trinks-sem-fundo.png"
                    alt="Logotipo Trinks"
                    className="w-full h-full object-contain"
                    onError={() => setLogoLoaded(false)}
                  />
                ) : (
                  <span className="font-manrope font-bold text-sm text-[#171717]">Trinks</span>
                )}
              </div>
              <div className="brand-description flex flex-col">
                <strong className="font-manrope font-bold text-[17px] tracking-tight text-[#171717]">
                  Trinks
                </strong>
                <span className="font-manrope font-normal text-xs text-[#77736D]">
                  Seu salão, sua experiência
                </span>
              </div>
            </header>

            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-3 text-[11px] font-manrope font-semibold tracking-[0.2em] uppercase text-[#A98746]">
              <span className="w-5 h-px bg-[#C6A15B]" />
              <span>Seu momento merece cuidado</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-manrope font-extrabold text-2xl sm:text-3xl lg:text-[34px] tracking-tight text-[#171717] leading-[1.18] mb-3">
              Sua opinião{' '}
              <span className="font-manrope font-medium italic text-[#C6A15B] tracking-normal inline-block">
                faz a diferença.
              </span>
            </h2>

            {/* Explanatory Text */}
            <p className="font-manrope font-normal text-xs sm:text-[13.5px] text-[#77736D] leading-relaxed mb-6">
              Gostou da sua experiência no Clara Reis Studio? Avalie-nos em nosso aplicativo e ajude a tornar cada visita ainda mais especial.
            </p>

            {/* Smart Dynamic Download/Review Button (Integrated Without Duplication) */}
            <a
              id="trinks-smart-button"
              className="review-button trinks-review-button group relative flex items-center justify-between gap-3 w-full py-3.5 px-4 sm:px-5 rounded-2xl text-[#171717] border border-[#C6A15B]/80 shadow-[0_10px_25px_rgba(198,161,91,0.22)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] overflow-hidden select-none"
              href={smartButton.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={smartButton.title}
            >
              <div className="flex items-center gap-3.5">
                <span className="button-icon w-10 h-10 rounded-xl bg-white/70 border border-white/80 p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src="https://i.postimg.cc/x1Y95b26/Trinks-sem-fundo.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </span>

                <span className="button-copy flex flex-col text-left">
                  <strong
                    id="trinks-button-title"
                    className="font-manrope font-bold text-xs sm:text-[13.5px] text-[#171717] leading-snug"
                  >
                    {smartButton.title}
                  </strong>
                  <span
                    id="trinks-button-subtitle"
                    className="font-manrope font-normal text-[10.5px] sm:text-[11.5px] text-[#171717]/80"
                  >
                    {smartButton.subtitle}
                  </span>
                </span>
              </div>

              <span
                className="button-arrow font-manrope text-lg font-bold text-[#171717] transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            {/* Secondary Footer Note */}
            <p className="flex items-center gap-2 mt-5 font-manrope font-normal text-xs text-[#77736D]">
              <span className="text-[#C6A15B] text-sm leading-none" aria-hidden="true">✦</span>
              <span>Agende também a sua próxima vinda.</span>
            </p>
          </div>

          {/* Right: Phone Showcase with Golden Diffuse Aura and Subtle Pulse */}
          <div
            className="phone-area relative flex items-center justify-center min-h-[300px] sm:min-h-[380px] lg:min-h-[420px] py-4"
            aria-label="Prévia do aplicativo Trinks com os serviços do Clara Reis Studio"
          >
            {/* Golden Diffuse Aura */}
            <div className="trinks-phone-aura absolute w-64 sm:w-80 h-64 sm:h-80 rounded-full pointer-events-none" />

            {/* Subtle Floating Sparkles */}
            <span className="trinks-floating-light light-1" aria-hidden="true" />
            <span className="trinks-floating-light light-2" aria-hidden="true" />
            <span className="trinks-floating-light light-3" aria-hidden="true" />

            {/* Phone Image with Gentle 6s Pulse */}
            {phoneLoaded ? (
              <img
                src="https://i.postimg.cc/xdJMP7YC/Celular-Clara-Reis-Studio.png"
                alt="Tela do aplicativo com os serviços do Clara Reis Studio"
                className="trinks-phone-image relative z-10 w-full max-w-[270px] sm:max-w-[320px] lg:max-w-[340px] h-auto object-contain drop-shadow-[0_20px_28px_rgba(23,23,23,0.12)] select-none pointer-events-none"
                onError={() => setPhoneLoaded(false)}
              />
            ) : (
              <div className="w-60 h-84 rounded-3xl bg-white border border-[#E7D3A0] shadow-md flex items-center justify-center p-4 text-center">
                <span className="font-manrope text-xs text-[#77736D]">Prévia do aplicativo Trinks</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
