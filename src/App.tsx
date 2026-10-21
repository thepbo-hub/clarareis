import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles } from 'lucide-react';
import { Header } from './components/Header';
import { MarqueeBanner } from './components/MarqueeBanner';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { ContactButtons } from './components/ContactButtons';
import { WifiSection } from './components/WifiSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { DEFAULT_STUDIO_CONFIG } from './config/studioConfig';

export default function App() {
  const [showStickyBooking, setShowStickyBooking] = useState(false);

  // Show floating booking button when user scrolls past the hero section
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBooking(true);
      } else {
        setShowStickyBooking(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-[#171717] font-sans relative overflow-x-hidden selection:bg-[#E7D3A0] selection:text-[#171717]">
      {/* Background Subtle Luxury Ambience Mesh */}
      <div 
        aria-hidden="true" 
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      >
        <div className="absolute top-[50%] right-0 w-[450px] h-[450px] bg-gradient-to-bl from-[#E7D3A0]/15 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-[#C6A15B]/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* 1. Full-Screen Edge-to-Edge Hero Layout */}
      <Header />

      {/* 2. Full-Screen Edge-to-Edge Slower Infinite Marquee Ticker */}
      <MarqueeBanner />

      {/* 3. Main Centered Biosite Content Sections with Gentle Scroll Reveal */}
      <main className="w-full max-w-lg mx-auto flex flex-col items-center px-0 pb-16">
        {/* Portfolio Carousel (3s Auto-advance & Touch/Drag, Corrected Descriptions) */}
        <ScrollReveal className="w-full">
          <PortfolioCarousel />
        </ScrollReveal>

        {/* Contact & Socials: WhatsApp -> Instagram -> Avalie no Google */}
        <ScrollReveal className="w-full">
          <ContactButtons />
        </ScrollReveal>

        {/* Wi-Fi for Clients (Static Generic Password, Exclusive Copy Function) */}
        <ScrollReveal className="w-full">
          <WifiSection />
        </ScrollReveal>

        {/* Location with Realistic Map, 3s Golden Waves, & Route Options (Google, Waze, Uber) */}
        <ScrollReveal className="w-full">
          <LocationSection />
        </ScrollReveal>

        {/* Minimalist Feminine Footer */}
        <ScrollReveal className="w-full">
          <Footer />
        </ScrollReveal>
      </main>

      {/* Discreet Floating Booking Button (Thumb-Zone) */}
      <div
        className={`fixed bottom-4 inset-x-0 z-30 flex justify-center px-4 transition-all duration-500 pointer-events-none ${
          showStickyBooking
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
      >
        <a
          href={DEFAULT_STUDIO_CONFIG.links.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C6A15B] via-[#E7D3A0] to-[#C6A15B] text-[#171717] font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xl shadow-[#C6A15B]/35 border border-white/60 active:scale-95 hover:scale-105 transition-all max-w-xs w-full"
        >
          <Calendar className="w-4 h-4 text-[#171717]" />
          <span>Agendar Meu Horário</span>
          <Sparkles className="w-3.5 h-3.5 text-[#171717]/80" />
        </a>
      </div>
    </div>
  );
}
