import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from 'lucide-react';
import { DEFAULT_STUDIO_CONFIG } from '../config/studioConfig';

export const PortfolioCarousel: React.FC = () => {
  const images = DEFAULT_STUDIO_CONFIG.portfolio;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<number>(0);
  const [isDragging, setIsDragging] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const total = images.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Handle temporary pause and scheduled auto-resume after 3.5s of inactivity
  const triggerPause = useCallback(() => {
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3500);
  }, []);

  // 2-second auto-advance timer
  useEffect(() => {
    // Check user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused || selectedImage !== null) {
      return;
    }

    const timer = setInterval(() => {
      // Pause if tab/page is hidden
      if (document.visibilityState !== 'hidden') {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, selectedImage]);

  // Handle document visibility change
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden) {
        setIsPaused(true);
      } else {
        triggerPause();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    return () => document.removeEventListener('visibilitychange', handleVisibility);
  }, [triggerPause]);

  // Touch & Mouse Drag Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    triggerPause();
    setDragStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const currentX = e.touches[0].clientX;
    setDragOffset(currentX - dragStartX);
  };

  const handleTouchEnd = () => {
    if (dragOffset > 45) {
      prevSlide();
    } else if (dragOffset < -45) {
      nextSlide();
    }
    setDragStartX(null);
    setDragOffset(0);
    setIsDragging(false);
    triggerPause();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    triggerPause();
    setDragStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset > 45) {
      prevSlide();
    } else if (dragOffset < -45) {
      nextSlide();
    }
    setDragStartX(null);
    setDragOffset(0);
    setIsDragging(false);
    triggerPause();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setDragStartX(null);
      setDragOffset(0);
      setIsDragging(false);
    }
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="w-full my-8 px-2 sm:px-4">
      {/* Section Header */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#C6A15B] font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Trabalhos Exclusivos</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#171717] tracking-wide">
          Nosso Portfólio
        </h2>
        <p className="text-xs sm:text-sm text-[#77736D] mt-1 max-w-xs mx-auto">
          Confira alguns dos nossos trabalhos e inspire-se.
        </p>
      </div>

      {/* Main Carousel Wrapper */}
      <div 
        className="relative max-w-md mx-auto group select-none"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          handleMouseLeave();
        }}
      >
        {/* Navigation Arrows */}
        <button
          type="button"
          onClick={() => {
            triggerPause();
            prevSlide();
          }}
          aria-label="Foto anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#E7D3A0] shadow-md flex items-center justify-center text-[#171717] hover:bg-[#FAF8F3] hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-[#171717]" />
        </button>

        <button
          type="button"
          onClick={() => {
            triggerPause();
            nextSlide();
          }}
          aria-label="Próxima foto"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md border border-[#E7D3A0] shadow-md flex items-center justify-center text-[#171717] hover:bg-[#FAF8F3] hover:scale-105 active:scale-95 transition-all"
        >
          <ChevronRight className="w-5 h-5 text-[#171717]" />
        </button>

        {/* Carousel Viewport Container */}
        <div
          className="overflow-hidden rounded-3xl border border-[#E7D3A0]/70 bg-gradient-to-b from-white to-[#FAF8F3] shadow-lg shadow-[#C6A15B]/10 cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          {/* Slider track */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            }}
          >
            {images.map((item, index) => {
              const isLoaded = loadedImages[item.id];
              return (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 relative aspect-[4/5] sm:aspect-[3/4] bg-[#FAF8F3] overflow-hidden"
                >
                  {/* Loading placeholder skeleton */}
                  {!isLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F3] via-[#F3E5C8]/40 to-[#FAF8F3] animate-pulse flex items-center justify-center">
                      <span className="font-serif text-sm text-[#C6A15B] tracking-wider">
                        Carregando...
                      </span>
                    </div>
                  )}

                  <img
                    src={item.url}
                    alt={`${item.title} - Clara Reis Studio`}
                    referrerPolicy="no-referrer"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    onLoad={() => handleImageLoad(item.id)}
                    className={`w-full h-full object-cover object-center transition-all duration-700 ${
                      isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                  />

                  {/* Gradient Scrim for readable caption & luxury touch */}
                  <div className="absolute inset-x-0 bottom-0 pt-16 pb-4 px-4 bg-gradient-to-t from-black/75 via-black/35 to-transparent flex items-end justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase font-semibold tracking-wider text-[#E7D3A0] block">
                        {item.category}
                      </span>
                      <p className="font-serif text-base sm:text-lg font-medium text-white leading-tight">
                        {item.title}
                      </p>
                    </div>

                    {/* Zoom trigger icon */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(item);
                      }}
                      aria-label="Ver foto em tela cheia"
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/40 active:scale-95 transition-all text-white"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Dots & Counter */}
        <div className="flex items-center justify-between mt-3 px-2">
          {/* Counter */}
          <span className="text-xs font-medium text-[#77736D] tabular-nums tracking-wide">
            {currentIndex + 1} / {total}
          </span>

          {/* Indicators */}
          <div className="flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  triggerPause();
                  setCurrentIndex(idx);
                }}
                aria-label={`Ir para a foto ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-6 bg-[#C6A15B]'
                    : 'w-1.5 bg-[#C6A15B]/30 hover:bg-[#C6A15B]/60'
                }`}
              />
            ))}
          </div>

          {/* Quick status cue */}
          <span className="text-[10px] text-[#C6A15B] uppercase font-medium tracking-wider">
            {images[currentIndex].category}
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Fechar visualização"
              className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 active:scale-95 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E7D3A0]/40 shadow-2xl bg-black">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="p-4 bg-gradient-to-t from-black via-black/80 to-transparent text-white text-center">
                <span className="text-xs uppercase text-[#E7D3A0] tracking-widest font-semibold block mb-0.5">
                  {selectedImage.category}
                </span>
                <p className="font-serif text-lg font-medium">{selectedImage.title}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
