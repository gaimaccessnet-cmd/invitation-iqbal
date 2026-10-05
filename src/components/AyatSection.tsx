import React from 'react';
import { BismillahCalligraphy, FloralTopBorder } from './Ornaments';

export const AyatSection: React.FC = () => {
  return (
    <section id="ayat" className="py-16 px-4 bg-gradient-to-b from-[#FBF9F5] via-[#F7F2E8] to-[#FBF9F5] border-y border-[#EDE3D3] relative">
      <div className="max-w-2xl mx-auto text-center">
        {/* Bismillah */}
        <BismillahCalligraphy className="mb-4" />

        <FloralTopBorder className="w-40 h-6 mx-auto text-[#C9A96E]/50 mb-6" />

        {/* Arabic Verse (QS Ar-Rum : 21) */}
        <div className="font-arabic text-xl sm:text-2xl text-[#2F2620] leading-loose sm:leading-[2.4] mb-6 px-2 sm:px-6 select-text" dir="rtl">
          وَمِنْ اٰيٰتِهٖٓ اَنْ خَلَقَ لَكُمْ مِّنْ اَنْفُسِكُمْ اَزْوَاجًا لِّتَسْكُنُوْٓا اِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَّوَدَّةً وَّرَحْمَةً ۗاِنَّ فِيْ ذٰلِكَ لَاٰيٰتٍ لِّقَوْمٍ يَّتَفَكَّرُوْنَ
        </div>

        {/* Translation */}
        <p className="font-serif-luxury text-sm sm:text-base text-[#524339] italic leading-relaxed px-3 sm:px-6 mb-4">
          &ldquo;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.&rdquo;
        </p>

        <p className="text-xs uppercase tracking-widest font-semibold text-[#8C601F]">
          (QS. Ar-Rum : 21)
        </p>
      </div>
    </section>
  );
};
