import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Navigation, Copy, Check, CalendarPlus } from 'lucide-react';
import { FloralTopBorder } from './Ornaments';

export const EventSection: React.FC = () => {
  // Target date: 15 November 2026 at 08:00 WIB (UTC+7)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPassed: false,
  });

  const [addressCopied, setAddressCopied] = useState(false);

  useEffect(() => {
    // 2026-11-15 08:00:00 WIB is 2026-11-15 01:00:00 UTC
    const targetDate = new Date('2026-11-15T08:00:00+07:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPassed: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isPassed: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const fullAddress = 'Jalan Masjid Al Abror RT 001 RW 001, Pd. Karya, Pd. Aren, Kota Tangerang Selatan';
  // Google Maps search query URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Masjid Al Abror, Jalan Masjid Al Abror RT 001 RW 001, Pondok Karya, Pondok Aren, Kota Tangerang Selatan'
  )}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2500);
  };

  // Google Calendar Link generator
  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent('Pernikahan Syalwa & Iqbal');
    const details = encodeURIComponent(
      'Akad Nikah: 08:00 WIB | Resepsi: 10:00 - Selesai WIB. Kediaman Mempelai Wanita.'
    );
    const location = encodeURIComponent(fullAddress);
    // 20261115T010000Z to 20261115T100000Z (08:00 - 17:00 WIB)
    const dates = '20261115T010000Z/20261115T100000Z';
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section id="acara" className="py-14 sm:py-20 px-3 sm:px-4 bg-gradient-to-b from-[#FAF7F0] via-white to-[#FAF7F0]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <p className="font-serif-luxury uppercase tracking-[0.25em] text-xs text-[#8C6425] font-semibold mb-1">
            Waktu & Tempat
          </p>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#2C231C]">
            Rangkaian Acara
          </h2>
          <FloralTopBorder className="w-40 sm:w-44 h-6 sm:h-7 mx-auto text-[#C9A96E]/60 mt-1.5 mb-2.5" />
          <p className="text-xs sm:text-sm text-[#6A584C] max-w-md mx-auto px-2">
            Dengan penuh rasa syukur, kami mengundang Anda untuk hadir dan memberikan doa restu pada acara kami:
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-xl mx-auto mb-10 sm:mb-14 p-4 sm:p-8 rounded-3xl bg-gradient-to-b from-white to-[#FBF8F2] border border-[#E9DDC9] shadow-sm text-center">
          <p className="font-serif-luxury uppercase tracking-widest text-[11px] sm:text-xs text-[#8C6425] mb-3 sm:mb-4 font-semibold">
            {timeLeft.isPassed ? 'Hari Bahagia Telah Tiba' : 'Menghitung Hari Menuju Hari Bahagia'}
          </p>

          <div className="grid grid-cols-4 gap-1.5 sm:gap-4 max-w-md mx-auto">
            <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#EDE2D0] shadow-xs">
              <span className="block font-serif-luxury text-xl sm:text-4xl font-bold text-[#8C601F]">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs text-[#7F6B5F] uppercase tracking-wider">Hari</span>
            </div>
            <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#EDE2D0] shadow-xs">
              <span className="block font-serif-luxury text-xl sm:text-4xl font-bold text-[#8C601F]">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs text-[#7F6B5F] uppercase tracking-wider">Jam</span>
            </div>
            <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#EDE2D0] shadow-xs">
              <span className="block font-serif-luxury text-xl sm:text-4xl font-bold text-[#8C601F]">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs text-[#7F6B5F] uppercase tracking-wider">Menit</span>
            </div>
            <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-[#EDE2D0] shadow-xs">
              <span className="block font-serif-luxury text-xl sm:text-4xl font-bold text-[#8C601F]">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[9px] sm:text-xs text-[#7F6B5F] uppercase tracking-wider">Detik</span>
            </div>
          </div>

          {/* Add to Calendar Button */}
          <div className="mt-5 sm:mt-6">
            <a
              href={createGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#FAF4E8] border border-[#DFC9A4] text-xs font-semibold text-[#8C6425] hover:bg-[#F3E5CA] hover:border-[#C9A96E] transition-all cursor-pointer min-h-[42px]"
            >
              <CalendarPlus className="w-4 h-4 text-[#8C6425] shrink-0" />
              <span>Simpan ke Google Calendar</span>
            </a>
          </div>
        </div>

        {/* Schedule Cards: Akad & Resepsi */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Akad Nikah */}
          <div className="p-5 sm:p-8 rounded-3xl bg-white border border-[#EBE0CF] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-bl-full pointer-events-none" />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3E7] text-[11px] font-semibold text-[#8C6425] mb-3 sm:mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>Sakral & Khidmat</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#2F241C] mb-2">
              Akad Nikah
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#614F44] my-3 sm:my-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span>Minggu, 15 November 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span className="font-semibold text-[#2F241C]">Pukul 08:00 WIB</span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#F2ECE0] text-[11px] sm:text-xs text-[#7F6B5E] leading-relaxed">
              Khusus keluarga & kerabat terdekat demi kekhidmatan prosesi ijab kabul.
            </div>
          </div>

          {/* Resepsi Pernikahan */}
          <div className="p-5 sm:p-8 rounded-3xl bg-white border border-[#EBE0CF] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-100/50 to-transparent rounded-bl-full pointer-events-none" />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF3E7] text-[11px] font-semibold text-[#8C6425] mb-3 sm:mb-4">
              <Clock className="w-3.5 h-3.5" />
              <span>Syukuran & Silaturahmi</span>
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-semibold text-[#2F241C] mb-2">
              Resepsi Pernikahan
            </h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#614F44] my-3 sm:my-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span>Minggu, 15 November 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#C9A96E] shrink-0" />
                <span className="font-semibold text-[#2F241C]">Pukul 10:00 WIB – Selesai</span>
              </div>
            </div>
            <div className="pt-3 border-t border-[#F2ECE0] text-[11px] sm:text-xs text-[#7F6B5E] leading-relaxed">
              Merupakan kehormatan bagi kami atas kehadiran Bapak/Ibu/Saudara/i sekalian.
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="p-5 sm:p-8 rounded-3xl bg-white border border-[#E8DDCC] shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#8C6425]">
                <MapPin className="w-4 h-4 text-[#C9A96E]" />
                <span>Lokasi Acara</span>
              </div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#2C231C]">
                Kediaman Mempelai Wanita
              </h3>
              <p className="text-xs sm:text-sm text-[#665448] max-w-lg leading-relaxed">
                Jalan Masjid Al Abror RT 001 RW 001, Pondok Karya, Pondok Aren, Kota Tangerang Selatan
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                onClick={handleCopyAddress}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 sm:py-2.5 rounded-xl border border-[#DECDB3] bg-[#FAF6EE] text-xs font-semibold text-[#685244] hover:bg-white transition-all cursor-pointer min-h-[44px]"
              >
                {addressCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Alamat Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8C6425]" />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#A27B38] to-[#C9A96E] text-white text-xs font-semibold shadow-md hover:shadow-lg transition-all cursor-pointer min-h-[44px]"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Buka Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
