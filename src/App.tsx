/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { OpeningModal } from './components/OpeningModal';
import { HeroSection } from './components/HeroSection';
import { AyatSection } from './components/AyatSection';
import { CoupleSection } from './components/CoupleSection';
import { EventSection } from './components/EventSection';
import { StorySection } from './components/StorySection';
import { GiftSection } from './components/GiftSection';
import { WishesSection } from './components/WishesSection';
import { FooterSection } from './components/FooterSection';
import { AudioPlayer } from './components/AudioPlayer';
import { FloatingNav } from './components/FloatingNav';

// Contoh sampel default undangan sesuai permintaan pengguna jika tanpa parameter:
// Samsul
// &
// Partner
const DEFAULT_SAMPLE_GUEST = 'Samsul\n&\nPartner';

export default function App() {
  const [guestName, setGuestName] = useState(DEFAULT_SAMPLE_GUEST);
  const [isOpened, setIsOpened] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Parse guest name from URL search params (?to=..., ?tamu=..., ?guest=..., ?p=..., ?nama=...)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const nameParam =
        params.get('to') ||
        params.get('tamu') ||
        params.get('guest') ||
        params.get('nama') ||
        params.get('p');

      if (nameParam && nameParam.trim()) {
        // Replace literal string '\n' with real newline if passed via URL string
        const formatted = nameParam.trim().replace(/\\n/g, '\n');
        setGuestName(formatted);
      }
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlayingMusic(true);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleMusic = () => {
    setIsPlayingMusic(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#2C241E] selection:bg-[#C9A96E]/20 relative">
      {/* 1. Opening Cover Envelope (Covers screen until user clicks "Buka Undangan") */}
      <OpeningModal
        guestName={guestName}
        isOpen={!isOpened}
        onOpenInvitation={handleOpenInvitation}
      />

      {/* 2. Background Audio Player (Tiara Andini & Arsy Widianto - Lagu Pernikahan Kita Reff) */}
      <AudioPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={handleToggleMusic}
      />

      {/* Main Content Sections */}
      <main className="transition-opacity duration-700 pb-20 sm:pb-24">
        <HeroSection guestName={guestName} />
        <AyatSection />
        <CoupleSection />
        <EventSection />
        <StorySection />
        <GiftSection />
        <WishesSection initialGuestName={guestName !== DEFAULT_SAMPLE_GUEST ? guestName : ''} />
        <FooterSection />
      </main>

      {/* 3. Bottom Floating Navigation Dock */}
      {isOpened && <FloatingNav />}
    </div>
  );
}
