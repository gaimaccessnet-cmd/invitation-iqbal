import React from 'react';
import confetti from 'canvas-confetti';
import { MailOpen, Heart, Sparkles } from 'lucide-react';
import { FloralCorner, MonogramCrest } from './Ornaments';

interface OpeningModalProps {
  guestName: string;
  isOpen: boolean;
  onOpenInvitation: () => void;
}

export const OpeningModal: React.FC<OpeningModalProps> = ({
  guestName,
  isOpen,
  onOpenInvitation,
}) => {
  if (!isOpen) return null;

  const handleOpen = () => {
    // Elegant celebratory confetti with gold and champagne palette
    try {
      const count = 120;
      const defaults = {
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#F3E5AB', '#C59B42', '#E8D4B0', '#FFFFFF', '#D98282']
      };

      function fire(particleRatio: number, opts: confetti.Options) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    } catch {
      // Confetti fallback
    }

    onOpenInvitation();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto bg-[#1E1916]/90 backdrop-blur-md transition-all duration-700">
      {/* Background radial gradient & ambient gold dust */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A2E25]/60 via-[#1A1614] to-[#120F0D] opacity-95 pointer-events-none" />

      {/* Subtle floating gold particles / dots */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-[#C9A96E]/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-[#D4AF37]/15 blur-3xl" />
      </div>

      {/* Main Invitation Card Envelope */}
      <div className="relative w-full max-w-sm sm:max-w-md my-auto p-5 sm:p-8 rounded-3xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5EFE3] text-[#2C241E] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border border-[#E7D6BD] text-center overflow-hidden">
        {/* Corner Ornaments */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
          <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A96E]" position="top-left" />
        </div>
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
          <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A96E]" position="top-right" />
        </div>
        <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3">
          <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A96E]" position="bottom-left" />
        </div>
        <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3">
          <FloralCorner className="w-12 h-12 sm:w-16 sm:h-16 text-[#C9A96E]" position="bottom-right" />
        </div>

        {/* Inner subtle frame */}
        <div className="p-3 sm:p-4 border border-[#E6D4BD]/60 rounded-2xl">
          {/* Monogram */}
          <div className="flex justify-center mb-2.5 sm:mb-3">
            <MonogramCrest className="w-16 h-16 sm:w-20 sm:h-20" />
          </div>

          <p className="font-serif-luxury tracking-[0.25em] sm:tracking-[0.3em] uppercase text-[11px] sm:text-xs text-[#8C6B32] mb-1 font-medium">
            Walimatul &apos;Ursy
          </p>

          <h2 className="font-serif-luxury text-[11px] sm:text-xs tracking-[0.25em] text-[#635147] uppercase font-light mb-1">
            The Wedding Of
          </h2>

          <h1 className="font-script text-3xl sm:text-5xl text-[#2B231E] my-1 leading-tight">
            Syalwa <span className="font-serif-luxury text-xl sm:text-2xl text-[#C9A96E]">&</span> Iqbal
          </h1>

          <p className="text-[11px] sm:text-xs tracking-wider text-[#8A7261] mb-4 sm:mb-6 font-medium">
            Minggu, 15 November 2026
          </p>

          {/* Guest Name Envelope Card */}
          <div className="p-3.5 sm:p-5 rounded-xl bg-white/85 border border-[#E9DEC9] shadow-sm mb-5 sm:mb-6">
            <p className="text-[10px] sm:text-[11px] text-[#7A695E] uppercase tracking-widest mb-1 font-medium flex items-center justify-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              Kepada Yth. Bapak/Ibu/Saudara/i
            </p>
            <div className="font-serif-luxury text-lg sm:text-2xl font-semibold text-[#8C601F] tracking-wide my-1.5 py-1 border-b border-[#F0E4D2] inline-block max-w-full px-3 break-words whitespace-pre-line leading-relaxed text-center">
              {guestName || 'Tamu Undangan'}
            </div>
            <p className="text-[9px] sm:text-[10px] text-[#A38D7D] mt-1 italic">
              *Mohon maaf apabila ada kesalahan penulisan nama atau gelar
            </p>
          </div>

          {/* Open Button */}
          <button
            onClick={handleOpen}
            className="w-full group relative inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#A27B38] via-[#C9A96E] to-[#A27B38] text-white font-medium text-xs sm:text-sm shadow-[0_8px_20px_rgba(162,123,56,0.35)] hover:shadow-[0_10px_25px_rgba(162,123,56,0.45)] active:scale-[0.98] transition-all cursor-pointer min-h-[44px]"
          >
            <MailOpen className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 shrink-0" />
            <span className="tracking-wide">Buka Undangan</span>
            <Heart className="w-3.5 h-3.5 fill-white/80 text-white/80 group-hover:scale-125 transition-transform shrink-0" />
          </button>
        </div>
      </div>
    </div>
  );
};
