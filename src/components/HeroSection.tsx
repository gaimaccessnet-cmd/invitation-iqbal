import React from 'react';
import { Calendar, ChevronDown, Heart } from 'lucide-react';
import { FloralCorner, FloralTopBorder, MonogramCrest } from './Ornaments';

interface HeroSectionProps {
  guestName: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ guestName }) => {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 py-12 sm:py-16 overflow-hidden">
      {/* Decorative floral corners */}
      <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
        <FloralCorner className="w-14 h-14 sm:w-24 sm:h-24 text-[#C9A96E]/40" position="top-left" />
      </div>
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
        <FloralCorner className="w-14 h-14 sm:w-24 sm:h-24 text-[#C9A96E]/40" position="top-right" />
      </div>

      {/* Center content container with luxury parchment backdrop */}
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center my-auto">
        {/* Monogram */}
        <div className="mb-3 sm:mb-4">
          <MonogramCrest className="w-20 h-20 sm:w-28 sm:h-28" />
        </div>

        <FloralTopBorder className="w-44 sm:w-56 h-6 sm:h-8 text-[#C9A96E]/60 mb-2" />

        <p className="font-serif-luxury uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[11px] sm:text-xs text-[#8C6425] font-semibold mb-1">
          Walimatul &apos;Ursy
        </p>

        <h2 className="font-serif-luxury tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[11px] sm:text-sm text-[#735C4D] font-light mb-1 sm:mb-2">
          The Wedding Celebration Of
        </h2>

        {/* Couple Names */}
        <div className="my-1 sm:my-3">
          <h1 className="font-script text-3xl sm:text-6xl text-[#2C231D] tracking-wide leading-tight">
            Syalwa <span className="font-serif-luxury text-xl sm:text-3xl text-[#C9A96E] italic">&</span> Iqbal
          </h1>
        </div>

        <p className="font-serif-luxury text-xs sm:text-base text-[#614E42] italic max-w-sm sm:max-w-md mx-auto mb-4 leading-relaxed px-2">
          &ldquo;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya...&rdquo;
        </p>

        {/* Date badge */}
        <div className="inline-flex flex-wrap justify-center items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/85 border border-[#E4D5BE] shadow-sm text-xs sm:text-sm text-[#4E3D32] mb-5 sm:mb-6">
          <Calendar className="w-3.5 h-3.5 text-[#A27B38] shrink-0" />
          <span className="font-semibold text-[#8C601F]">Minggu, 15 November 2026</span>
          <span className="text-[#C9A96E]">•</span>
          <span>Tangerang Selatan</span>
        </div>

        {/* Guest welcoming tag */}
        {guestName && (
          <div className="p-3 px-5 sm:px-6 rounded-2xl bg-amber-50/80 border border-amber-200/60 text-xs text-[#6F5B4E] max-w-xs sm:max-w-sm mb-5 sm:mb-6">
            <span className="text-[11px] text-[#8C7667]">Yth. </span>
            <span className="font-serif-luxury font-bold text-sm sm:text-base text-[#8C601F] block whitespace-pre-line leading-snug my-0.5">{guestName}</span>
            <p className="text-[10px] sm:text-[11px] text-[#8C7667] mt-1">
              Merupakan suatu kehormatan & kebahagiaan bagi kami atas kehadiran Bapak/Ibu/Saudara/i.
            </p>
          </div>
        )}

        {/* Down indicator */}
        <a
          href="#ayat"
          className="inline-flex flex-col items-center gap-1 text-xs text-[#9E8777] hover:text-[#7A5B20] transition-colors mt-1"
        >
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-medium">Lihat Undangan</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
