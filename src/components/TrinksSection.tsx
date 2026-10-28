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
      <div className="trinks-card relative w-full max-w-[1060px] mx-auto rounded-[24px] sm:rounded-[30px] p-4 xs:p-5 sm:p-8 md:p-12 bg-gradient-to-br from-white via-[#FAF8F3] to-white border border-[#C6A15B]/48 shadow-[0_25px_65px_rgba(23,23,23,0.07)] overflow-hidden isolate">
        {/* Ambient Warm Golden Glow */}
        <div
          aria-hidden="true"
          className="card-glow pointer-events-none absolute -top-32 -right-24 w-80 h-80 rounded-full bg-[#E7D3A0]/22 blur-[75px] -z-10"
        />

        <div className="grid grid-cols-12 gap-x-2.5 xs:gap-x-3 gap-y-3.5 sm:gap-y-4 md:gap-y-0 md:gap-x-10 md:grid-cols-[1.08fr_0.92fr] items-start md:items-center">
          {/* 1. Left Content Area (Mobile: col-span-7 / Desktop: col 1 row 1) */}
          <div className="col-span-7 xs:col-span-7 sm:col-span-7 md:col-span-1 md:col-start-1 md:row-start-1 content relative z-10 flex flex-col text-left max-w-[480px]">
            {/* Brand Header */}
            <header className="brand flex items-center gap-2 xs:gap-2.5 sm:gap-3.5 mb-2 xs:mb-2.5 sm:mb-4 md:mb-6">
              <div className="brand-logo w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl sm:rounded-2xl bg-white border border-[#C6A15B]/30 p-1.5 sm:p-2 shadow-xs flex items-center justify-center shrink-0">
                {logoLoaded ? (
                  <img
                    src="https://i.postimg.cc/x1Y95b26/Trinks-sem-fundo.png"
                    alt="Logotipo Trinks"
                    className="w-full h-full object-contain"
                    onError={() => setLogoLoaded(false)}
                  />
                ) : (
                  <span className="font-manrope font-bold text-xs sm:text-sm text-[#171717]">Trinks</span>
                )}
              </div>
              <div className="brand-description flex flex-col min-w-0">
                <strong className="font-manrope font-bold text-xs xs:text-[13px] sm:text-base md:text-[17px] tracking-tight text-[#171717] leading-tight truncate">
                  Trinks
                </strong>
                <span className="font-manrope font-normal text-[9.5px] xs:text-[10px] sm:text-xs text-[#77736D] leading-tight truncate">
                  Seu salão, sua experiência
                </span>
              </div>
            </header>

            {/* Eyebrow */}
            <div className="flex items-center gap-1.5 sm:gap-2 mb-1.5 sm:mb-2.5 md:mb-3 text-[9px] xs:text-[9.5px] sm:text-[11px] font-manrope font-semibold tracking-[0.14em] sm:tracking-[0.2em] uppercase text-[#A98746]">
              <span className="w-3.5 sm:w-5 h-px bg-[#C6A15B]" />
              <span>Seu momento merece cuidado</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-manrope font-extrabold text-[17px] xs:text-[19px] sm:text-2xl md:text-3xl lg:text-[34px] tracking-tight text-[#171717] leading-[1.16] mb-1.5 sm:mb-3">
              Sua opinião{' '}
              <span className="font-manrope font-medium italic text-[#C6A15B] tracking-normal inline-block">
                faz a diferença.
              </span>
            </h2>

            {/* Explanatory Text */}
            <p className="font-manrope font-normal text-[11px] xs:text-[11.5px] sm:text-xs md:text-[13.5px] text-[#77736D] leading-relaxed mb-0 sm:mb-2 md:mb-0">
              Gostou da sua experiência no Clara Reis Studio? Avalie-nos em nosso aplicativo e ajude a tornar cada visita ainda mais especial.
            </p>
          </div>

          {/* 2. Phone Showcase (Mobile: col-span-5 near top border / Desktop: col 2 row 1-2 centered) */}
          <div
            className="col-span-5 xs:col-span-5 sm:col-span-5 md:col-span-1 md:col-start-2 md:row-start-1 md:row-span-2 phone-area relative flex items-start md:items-center justify-end md:justify-center min-h-[160px] xs:min-h-[180px] sm:min-h-[240px] md:min-h-[420px] py-0 md:py-4 -mt-1 xs:-mt-2 sm:-mt-4 md:mt-0"
            aria-label="Prévia do aplicativo Trinks com os serviços do Clara Reis Studio"
          >
            {/* Golden Diffuse Aura */}
            <div className="trinks-phone-aura absolute top-0 right-0 md:top-auto md:right-auto w-36 xs:w-44 sm:w-60 md:w-80 h-36 xs:h-44 sm:h-60 md:h-80 rounded-full pointer-events-none" />

            {/* Subtle Floating Sparkles */}
            <span className="trinks-floating-light light-1 hidden sm:block" aria-hidden="true" />
            <span className="trinks-floating-light light-2" aria-hidden="true" />
            <span className="trinks-floating-light light-3 hidden sm:block" aria-hidden="true" />

            {/* Phone Image with Gentle 6s Pulse and controlled overlap near top right */}
            {phoneLoaded ? (
              <img
                src="https://i.postimg.cc/xdJMP7YC/Celular-Clara-Reis-Studio.png"
                alt="Tela do aplicativo com os serviços do Clara Reis Studio"
                className="trinks-phone-image relative z-10 w-full max-w-[135px] xs:max-w-[155px] sm:max-w-[210px] md:max-w-[340px] h-auto object-contain drop-shadow-[0_14px_24px_rgba(23,23,23,0.13)] select-none pointer-events-none"
                onError={() => setPhoneLoaded(false)}
              />
            ) : (
              <div className="w-28 xs:w-36 sm:w-48 md:w-60 h-40 xs:h-48 sm:h-64 md:h-84 rounded-2xl md:rounded-3xl bg-white border border-[#E7D3A0] shadow-md flex items-center justify-center p-3 text-center">
                <span className="font-manrope text-[11px] md:text-xs text-[#77736D]">Prévia do aplicativo Trinks</span>
              </div>
            )}
          </div>

          {/* 3. Bottom Action: Full-width Button & Note (Mobile: col-span-12 / Desktop: col 1 row 2) */}
          <div className="col-span-12 md:col-span-1 md:col-start-1 md:row-start-2 w-full mt-2 sm:mt-4 md:mt-6">
            {/* Smart Dynamic Download/Review Button traversing the inner width of the card */}
            <a
              id="trinks-smart-button"
              className="review-button trinks-review-button group relative flex items-center justify-between gap-3 w-full py-3 sm:py-3.5 px-3.5 sm:px-5 rounded-xl sm:rounded-2xl text-[#171717] border border-[#C6A15B]/80 shadow-[0_10px_25px_rgba(198,161,91,0.22)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] overflow-hidden select-none"
              href={smartButton.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={smartButton.title}
            >
              <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
                <span className="button-icon w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/75 border border-white/80 p-1 sm:p-1.5 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src="https://i.postimg.cc/x1Y95b26/Trinks-sem-fundo.png"
                    alt=""
                    aria-hidden="true"
                    className="w-full h-full object-contain"
                  />
                </span>

                <span className="button-copy flex flex-col text-left min-w-0">
                  <strong
                    id="trinks-button-title"
                    className="font-manrope font-bold text-xs sm:text-[13.5px] text-[#171717] leading-snug truncate"
                  >
                    {smartButton.title}
                  </strong>
                  <span
                    id="trinks-button-subtitle"
                    className="font-manrope font-normal text-[10px] sm:text-[11.5px] text-[#171717]/80 truncate"
                  >
                    {smartButton.subtitle}
                  </span>
                </span>
              </div>

              <span
                className="button-arrow font-manrope text-base sm:text-lg font-bold text-[#171717] transition-transform duration-300 group-hover:translate-x-1 shrink-0"
                aria-hidden="true"
              >
                →
              </span>
            </a>

            {/* Secondary Footer Note */}
            <p className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 mt-2.5 sm:mt-3 md:mt-5 font-manrope font-normal text-[11px] sm:text-xs text-[#77736D] text-center md:text-left">
              <span className="text-[#C6A15B] text-xs sm:text-sm leading-none" aria-hidden="true">✦</span>
              <span>Agende também a sua próxima vinda pelo aplicativo.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
