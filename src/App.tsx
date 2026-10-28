import React from 'react';
import { Header } from './components/Header';
import { MarqueeBanner } from './components/MarqueeBanner';
import { PortfolioCarousel } from './components/PortfolioCarousel';
import { ContactButtons } from './components/ContactButtons';
import { TrinksSection } from './components/TrinksSection';
import { WifiSection } from './components/WifiSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ScrollReveal } from './components/ScrollReveal';
import { FloatingTrinksButton } from './components/FloatingTrinksButton';

export default function App() {
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
      <main className="w-full max-w-5xl mx-auto flex flex-col items-center px-0 pb-16">
        {/* Portfolio Carousel (3s Auto-advance & Touch/Drag, Corrected Descriptions) */}
        <ScrollReveal className="w-full">
          <PortfolioCarousel />
        </ScrollReveal>

        {/* Contact & Socials: WhatsApp -> Instagram -> Avalie no Google */}
        <ScrollReveal className="w-full">
          <ContactButtons />
        </ScrollReveal>

        {/* Trinks Application Card (Downloads, Review, Subtle 3D, Phone Pulse) */}
        <ScrollReveal className="w-full">
          <TrinksSection />
        </ScrollReveal>

        {/* Wi-Fi for Clients (Static Generic Password, Exclusive Copy Function) */}
        <ScrollReveal className="w-full">
          <WifiSection />
        </ScrollReveal>

        {/* Location with Map Image, 1s Propagating Small Waves, & Route Options (Google, Waze, Uber, Copiar Local) */}
        <ScrollReveal className="w-full">
          <LocationSection />
        </ScrollReveal>

        {/* Minimalist Feminine Footer */}
        <ScrollReveal className="w-full">
          <Footer />
        </ScrollReveal>
      </main>

      {/* Floating Action Button (Bottom Right) to scroll to Trinks rectangle */}
      <FloatingTrinksButton />
    </div>
  );
}
