import React, { useState } from 'react';
import { Gift, Copy, Check } from 'lucide-react';
import { FloralTopBorder } from './Ornaments';

export const GiftSection: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const bankAccounts = [
    {
      bank: 'BCA',
      number: '4760617143',
      name: 'Syalwa Al Adawiyah',
      label: 'Mempelai Wanita',
      cardColor: 'from-[#1A2E40] via-[#102231] to-[#0A1620]',
    },
    {
      bank: 'BCA',
      number: '4760216866',
      name: 'Iqbal Jayadi',
      label: 'Mempelai Pria',
      cardColor: 'from-[#233526] via-[#162719] to-[#0E1A10]',
    },
  ];

  const handleCopy = (accountNum: string) => {
    navigator.clipboard.writeText(accountNum);
    setCopiedAccount(accountNum);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  return (
    <section id="hadiah" className="py-14 sm:py-20 px-3 sm:px-4 bg-[#F8F4EC] border-t border-[#ECE0CE]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#DFC9A4] text-[#A27B38] mb-3 shadow-sm">
            <Gift className="w-5 h-5" />
          </div>
          <p className="font-serif-luxury uppercase tracking-[0.25em] text-xs text-[#8C6425] font-semibold mb-1">
            Tanda Kasih & Amplop Digital
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#2B231D]">
            Wedding Gift
          </h2>
          <FloralTopBorder className="w-40 sm:w-44 h-6 sm:h-7 mx-auto text-[#C9A96E]/60 mt-1.5 mb-2.5" />
          <p className="text-xs sm:text-sm text-[#665447] max-w-md mx-auto leading-relaxed px-2">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih secara cashless / transfer digital, dengan sukacita kami sediakan informasi rekening berikut:
          </p>
        </div>

        {/* Bank Account Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {bankAccounts.map((acc, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-gradient-to-br ${acc.cardColor} text-white shadow-xl border border-white/10 flex flex-col justify-between min-h-[190px]`}
            >
              {/* Chip & Bank Logo */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-6 sm:w-9 sm:h-7 rounded bg-gradient-to-br from-amber-200 to-amber-400 opacity-90 border border-amber-500/40 shadow-inner flex items-center justify-center">
                    <div className="w-5 h-3 sm:w-6 sm:h-4 border border-amber-700/30 rounded-xs" />
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-amber-200/90 font-medium">
                    {acc.label}
                  </span>
                </div>
                <span className="font-bold tracking-widest text-base sm:text-lg text-white/95">
                  {acc.bank}
                </span>
              </div>

              {/* Account Number */}
              <div className="my-3 sm:my-4">
                <p className="text-[10px] uppercase tracking-wider text-slate-300 mb-0.5">
                  Nomor Rekening
                </p>
                <div className="font-mono text-xl sm:text-2xl font-bold tracking-wider text-amber-100">
                  {acc.number}
                </div>
                <p className="font-serif-luxury text-sm tracking-wide text-white/90 mt-0.5 capitalize">
                  a/n {acc.name}
                </p>
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopy(acc.number)}
                className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/15 hover:bg-white/25 active:scale-[0.98] backdrop-blur-sm text-xs font-medium text-white transition-all border border-white/20 cursor-pointer min-h-[44px]"
              >
                {copiedAccount === acc.number ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">Nomor Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-amber-300" />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
