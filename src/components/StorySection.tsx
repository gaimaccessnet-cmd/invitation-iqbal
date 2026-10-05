import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { FloralTopBorder } from './Ornaments';

export const StorySection: React.FC = () => {
  const stories = [
    {
      date: 'Juli 2024',
      title: 'Awal Perkenalan',
      desc: 'Pertemuan pertama yang ditakdirkan oleh Sang Pencipta. Dari sebuah perkenalan sederhana, tumbuh percakapan yang penuh makna dan rasa nyaman satu sama lain.',
    },
    {
      date: 'Oktober 2026',
      title: 'Hari Lamaran',
      desc: 'Dengan niat tulus dan restu kedua orang tua, kami mengikat janji suci dalam acara lamaran hangat di hadapan keluarga besar tercinta.',
    },
    {
      date: '15 November 2026',
      title: 'Menuju Pernikahan',
      desc: 'Babak baru kehidupan kami dimulai. Bersatu dalam ikatan suci pernikahan untuk saling melengkapi, saling menjaga, dan menua bersama hingga ke jannah-Nya.',
    },
  ];

  return (
    <section id="kisah" className="py-20 px-4 max-w-3xl mx-auto">
      <div className="text-center mb-14">
        <p className="font-serif-luxury uppercase tracking-[0.25em] text-xs text-[#8C6425] font-semibold mb-1">
          Kisah Cinta Kami
        </p>
        <h2 className="font-serif-luxury text-3xl sm:text-4xl text-[#2C231C]">
          Our Love Story
        </h2>
        <FloralTopBorder className="w-44 h-7 mx-auto text-[#C9A96E]/60 mt-2 mb-3" />
        <p className="text-xs sm:text-sm text-[#6A574A] max-w-md mx-auto">
          Setiap kisah cinta itu indah, namun kisah cinta kami adalah yang paling kami syukuri.
        </p>
      </div>

      {/* Classy Timeline */}
      <div className="relative border-l-2 border-[#E5D7C2] ml-4 sm:ml-32 space-y-10">
        {stories.map((item, index) => (
          <div key={index} className="relative pl-6 sm:pl-8 group">
            {/* Timeline bullet / Heart */}
            <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-white border-2 border-[#C9A96E] shadow-sm flex items-center justify-center text-[#A27B38] group-hover:scale-110 transition-transform">
              {index === 2 ? (
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              ) : (
                <Heart className="w-3.5 h-3.5 fill-[#C9A96E]/30 text-[#C9A96E]" />
              )}
            </div>

            {/* Date Tag on Desktop (positioned left) */}
            <div className="hidden sm:block absolute -left-36 top-1.5 w-28 text-right font-serif-luxury font-bold text-sm text-[#8C601F]">
              {item.date}
            </div>

            {/* Content card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EBE1D0] shadow-sm hover:shadow-md transition-shadow">
              <span className="sm:hidden inline-block px-2.5 py-0.5 rounded-full bg-[#FAF3E7] text-[11px] font-semibold text-[#8C6425] mb-2">
                {item.date}
              </span>
              <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#2B221B] mb-1.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#635146] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
