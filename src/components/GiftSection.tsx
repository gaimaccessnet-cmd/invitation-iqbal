import React, { useState } from 'react';
import { Gift, Copy, Check, Send, CreditCard, Home } from 'lucide-react';
import { FloralTopBorder } from './Ornaments';

export const GiftSection: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);
  const [copiedAddress, setCopiedAddress] = useState(false);

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

  const giftAddress =
    'Jalan Masjid Al Abror RT 001 RW 001, Pd. Karya, Pd. Aren, Kota Tangerang Selatan (Penerima: Syalwa Al Adawiyah / Ibu Rohati)';

  const handleCopy = (accountNum: string) => {
    navigator.clipboard.writeText(accountNum);
    setCopiedAccount(accountNum);
    setTimeout(() => setCopiedAccount(null), 2500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(giftAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="hadiah" className="py-14 sm:py-20 px-3 sm:px-4 bg-[#F8F4EC] border-t border-[#ECE0CE]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#DFC9A4] text-[#A27B38] mb-3 shadow-sm">
            <Gift className="w-5 h-5" />
          </div>
          <p className="font-serif-luxury uppercase tracking-[0.25em] text-xs text-[#8C6425] font-semibold mb-1">
            Tanda Kasih & Hadiah
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#2B231D]">
            Wedding Gift
          </h2>
          <FloralTopBorder className="w-40 sm:w-44 h-6 sm:h-7 mx-auto text-[#C9A96E]/60 mt-1.5 mb-2.5" />
          <p className="text-xs sm:text-sm text-[#665447] max-w-md mx-auto leading-relaxed px-2">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih secara digital maupun fisik, dengan sukacita kami sediakan informasi berikut:
          </p>
        </div>

        {/* Bank Account Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10">
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

        {/* Physical Gift Delivery Card */}
        <div className="p-5 sm:p-7 rounded-2xl bg-white border border-[#E8DDCC] shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-[#FAF3E7] text-[#8C6425] flex items-center justify-center shrink-0">
              <Home className="w-5 h-5" />
            </div>
            <div className="flex-1 w-full">
              <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#2E231C] mb-1">
                Kirim Kado Fisik
              </h3>
              <p className="text-xs sm:text-sm text-[#665448] mb-2 sm:mb-3 leading-relaxed">
                Bagi yang berkenan mengirimkan kado fisik secara langsung, dapat dialamatkan ke:
              </p>
              <div className="p-3 sm:p-3.5 rounded-xl bg-[#FAF7F1] border border-[#E9DFC] text-xs text-[#4A3D35] font-medium mb-3 leading-relaxed">
                {giftAddress}
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={handleCopyAddress}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-[#DECDB3] bg-white text-xs font-semibold text-[#8C6425] hover:bg-[#FBF8F2] transition-colors cursor-pointer min-h-[44px]"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Alamat Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Alamat Pengiriman</span>
                    </>
                  )}
                </button>
                <a
                  href={`https://wa.me/6281290000000?text=${encodeURIComponent(
                    'Halo Syalwa & Iqbal, saya bermaksud konfirmasi pengiriman kado pernikahan.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors min-h-[44px]"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Konfirmasi Hadiah via WA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
