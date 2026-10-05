import React from 'react';
import { Heart } from 'lucide-react';
import { FloralTopBorder, MonogramCrest } from './Ornaments';

export const FooterSection: React.FC = () => {
  return (
    <footer className="py-16 px-4 bg-[#231C18] text-[#E4D5C7] text-center border-t border-[#3A2F29] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C9A96E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto space-y-6">
        <MonogramCrest className="w-20 h-20 mx-auto text-[#C9A96E]" />

        <p className="font-serif-luxury text-base sm:text-lg italic text-[#D8C7B5] px-4 leading-relaxed">
          &ldquo;Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.&rdquo;
        </p>

        <FloralTopBorder className="w-36 h-6 mx-auto text-[#C9A96E]/40" />

        <div className="space-y-1">
          <p className="text-xs uppercase tracking-widest text-[#A89482]">Kami yang berbahagia,</p>
          <h2 className="font-script text-3xl sm:text-4xl text-[#F0E6D8]">
            Syalwa <span className="font-serif-luxury text-xl text-[#C9A96E]">&</span> Iqbal
          </h2>
          <p className="text-xs text-[#958172]">Beserta segenap keluarga besar kedua mempelai</p>
        </div>

        <div className="pt-6 border-t border-[#382D26] text-[11px] text-[#78675B] flex items-center justify-center gap-1.5">
          <span>Dibuat dengan penuh cinta</span>
          <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
          <span>• Syalwa & Iqbal 2026</span>
        </div>
      </div>
    </footer>
  );
};
