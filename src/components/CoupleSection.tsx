import React from 'react';
import { Heart } from 'lucide-react';
import { FloralTopBorder } from './Ornaments';

export const CoupleSection: React.FC = () => {
  return (
    <section id="pasangan" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-14">
        <p className="font-serif-luxury uppercase tracking-[0.25em] text-xs text-[#8C6425] font-semibold mb-1">
          Mempelai Pengantin
        </p>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2B221B]">
          Pasangan Mempelai
        </h2>
        <FloralTopBorder className="w-44 h-7 mx-auto text-[#C9A96E]/60 mt-2 mb-3" />
        <p className="text-xs sm:text-sm text-[#6C594D] max-w-lg mx-auto">
          Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho-Nya, kami bermaksud melangsungkan pernikahan putra-putri kami:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center relative">
        {/* Bride Card (Mempelai Wanita) */}
        <div className="relative group p-5 sm:p-8 rounded-3xl bg-white border border-[#E9DDC9] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all text-center">
          {/* Subtle gold badge */}
          <div className="inline-block px-3 py-1 rounded-full bg-[#FAF3E7] border border-[#E4D1B2] text-[10px] sm:text-[11px] font-semibold text-[#8C6425] tracking-widest uppercase mb-4">
            Mempelai Wanita
          </div>

          {/* Profile Frame with floral border */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 sm:mb-5 rounded-full p-1.5 bg-gradient-to-tr from-[#C9A96E] via-[#F3E5AB] to-[#A27B38] shadow-md">
            <div className="w-full h-full rounded-full bg-[#FBF9F5] border-2 border-white flex flex-col items-center justify-center overflow-hidden">
              <span className="font-script text-3xl sm:text-4xl text-[#8C6425]">S</span>
              <span className="text-[9px] sm:text-[10px] text-[#A68F80] tracking-widest uppercase mt-[-4px]">Bride</span>
            </div>
          </div>

          <h3 className="font-serif-luxury text-xl sm:text-3xl font-semibold text-[#2D231D] mb-1.5 sm:mb-2 tracking-wide">
            Syalwa Al Adawiyah
          </h3>

          <div className="text-xs sm:text-sm text-[#6A574A] space-y-1 mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-[#F2ECE0]">
            <p className="font-medium text-[#8C601F]">Putri Pertama dari:</p>
            <p className="text-[#3E3129] font-medium">Bpk. Isrofil Zaelani <span className="text-[#8C7667] text-xs font-normal">(alm)</span></p>
            <p className="text-[#3E3129] font-medium">Ibu Rohati</p>
          </div>
        </div>

        {/* Center decorative heart divider (both mobile and desktop) */}
        <div className="flex md:hidden justify-center -my-3 z-10">
          <div className="w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] shadow-sm flex items-center justify-center text-[#D4AF37]">
            <Heart className="w-4 h-4 fill-[#D4AF37]" />
          </div>
        </div>
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white border-2 border-[#D4AF37] shadow-md items-center justify-center text-[#D4AF37]">
          <Heart className="w-5 h-5 fill-[#D4AF37]" />
        </div>

        {/* Groom Card (Mempelai Pria) */}
        <div className="relative group p-5 sm:p-8 rounded-3xl bg-white border border-[#E9DDC9] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all text-center">
          {/* Subtle gold badge */}
          <div className="inline-block px-3 py-1 rounded-full bg-[#FAF3E7] border border-[#E4D1B2] text-[10px] sm:text-[11px] font-semibold text-[#8C6425] tracking-widest uppercase mb-4">
            Mempelai Pria
          </div>

          {/* Profile Frame with floral border */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mb-4 sm:mb-5 rounded-full p-1.5 bg-gradient-to-tr from-[#A27B38] via-[#F3E5AB] to-[#C9A96E] shadow-md">
            <div className="w-full h-full rounded-full bg-[#FBF9F5] border-2 border-white flex flex-col items-center justify-center overflow-hidden">
              <span className="font-script text-3xl sm:text-4xl text-[#8C6425]">I</span>
              <span className="text-[9px] sm:text-[10px] text-[#A68F80] tracking-widest uppercase mt-[-4px]">Groom</span>
            </div>
          </div>

          <h3 className="font-serif-luxury text-xl sm:text-3xl font-semibold text-[#2D231D] mb-1.5 sm:mb-2 tracking-wide">
            Iqbal Jayadi, S.Kom
          </h3>

          <div className="text-xs sm:text-sm text-[#6A574A] space-y-1 mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-[#F2ECE0]">
            <p className="font-medium text-[#8C601F]">Putra ke-enam dari:</p>
            <p className="text-[#3E3129] font-medium">Bpk. H. Kana</p>
            <p className="text-[#3E3129] font-medium">Ibu Hj. Ermi Deti <span className="text-[#8C7667] text-xs font-normal">(almh)</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};
