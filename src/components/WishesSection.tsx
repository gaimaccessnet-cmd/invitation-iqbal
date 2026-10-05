import React, { useState, useEffect } from 'react';
import { MessageSquareHeart, Heart, Send, CheckCircle2, Clock } from 'lucide-react';
import { FloralTopBorder } from './Ornaments';

interface WishItem {
  id: string;
  name: string;
  attendance: 'hadir' | 'ragu' | 'tidak_hadir';
  pax: number;
  message: string;
  timestamp: string;
  likes: number;
}

const INITIAL_WISHES: WishItem[] = [
  {
    id: '1',
    name: 'Keluarga Besar Bani Zaelani',
    attendance: 'hadir',
    pax: 2,
    message: 'Barakallahu laka wa baraka alaika wa jamaa bainakuma fii khoir. Selamat untuk Syalwa & Iqbal, semoga menjadi keluarga sakinah mawaddah warahmah, langgeng sampai surga. Aamiin ya Rabbal alamin.',
    timestamp: 'Baru saja',
    likes: 8,
  },
  {
    id: '2',
    name: 'Rekan Alumni Ilmu Komputer',
    attendance: 'hadir',
    pax: 2,
    message: 'Alhamdulillah selamat Bro Iqbal Jayadi S.Kom & Mba Syalwa! Lancar sampai hari H akad dan resepsi di Tangerang Selatan. Siap hadir meramaikan hari bahagia kalian!',
    timestamp: '1 jam yang lalu',
    likes: 5,
  },
  {
    id: '3',
    name: 'Nabila & Suami',
    attendance: 'hadir',
    pax: 2,
    message: 'Happy wedding dear Syalwa & Iqbal! Ikut terharu dari awal kenal sampai akhirnya pelaminan. Bahagia selamanya yaa.',
    timestamp: '3 jam yang lalu',
    likes: 4,
  },
];

interface WishesSectionProps {
  initialGuestName?: string;
}

export const WishesSection: React.FC<WishesSectionProps> = ({ initialGuestName = '' }) => {
  const [wishes, setWishes] = useState<WishItem[]>(() => {
    try {
      const saved = localStorage.getItem('syalwa_iqbal_wishes');
      return saved ? JSON.parse(saved) : INITIAL_WISHES;
    } catch {
      return INITIAL_WISHES;
    }
  });

  const [name, setName] = useState(initialGuestName);
  const [attendance, setAttendance] = useState<'hadir' | 'ragu' | 'tidak_hadir'>('hadir');
  const [pax, setPax] = useState(1);
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [likedMap, setLikedMap] = useState<{ [id: string]: boolean }>({});

  useEffect(() => {
    if (initialGuestName && !name) {
      setName(initialGuestName);
    }
  }, [initialGuestName, name]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newWish: WishItem = {
      id: Date.now().toString(),
      name: name.trim(),
      attendance,
      pax,
      message: message.trim(),
      timestamp: 'Baru saja',
      likes: 0,
    };

    const updated = [newWish, ...wishes];
    setWishes(updated);
    try {
      localStorage.setItem('syalwa_iqbal_wishes', JSON.stringify(updated));
    } catch {
      // Storage error
    }

    setMessage('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleToggleLike = (id: string) => {
    const isLiked = likedMap[id];
    setLikedMap(prev => ({ ...prev, [id]: !isLiked }));
    const updated = wishes.map(w => {
      if (w.id === id) {
        return { ...w, likes: isLiked ? Math.max(0, w.likes - 1) : w.likes + 1 };
      }
      return w;
    });
    setWishes(updated);
    try {
      localStorage.setItem('syalwa_iqbal_wishes', JSON.stringify(updated));
    } catch {
      // Storage error
    }
  };

  return (
    <section id="ucapan" className="py-14 sm:py-20 px-3 sm:px-4 max-w-4xl mx-auto">
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-[#DFC9A4] text-[#A27B38] mb-3 shadow-sm">
          <MessageSquareHeart className="w-5 h-5" />
        </div>
        <p className="font-serif-luxury uppercase tracking-[0.25em] text-xs text-[#8C6425] font-semibold mb-1">
          RSVP & Buku Tamu
        </p>
        <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[#2B231D]">
          Doa & Ucapan Selamat
        </h2>
        <FloralTopBorder className="w-40 sm:w-44 h-6 sm:h-7 mx-auto text-[#C9A96E]/60 mt-1.5 mb-2.5" />
        <p className="text-xs sm:text-sm text-[#665448] max-w-md mx-auto px-2 leading-relaxed">
          Kehadiran dan untaian doa Anda merupakan kado terindah bagi kami. Mohon konfirmasikan kehadiran dan sampaikan doa terbaik Anda:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Form RSVP & Ucapan */}
        <div className="lg:col-span-5 p-5 sm:p-7 rounded-3xl bg-white border border-[#E8DDCC] shadow-sm h-fit">
          <h3 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#2E231D] mb-3 sm:mb-4 pb-2 border-b border-[#F2ECE0]">
            Konfirmasi Kehadiran
          </h3>

          {isSubmitted ? (
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center text-emerald-800 space-y-2 animate-in fade-in">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <p className="font-semibold text-sm">Terima Kasih!</p>
              <p className="text-xs text-emerald-700">
                Konfirmasi dan doa restu Anda telah berhasil tersimpan dan tampil di buku tamu.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-medium text-[#4C3E36] mb-1">
                  Nama Anda <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap / instansi"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD4C3] bg-[#FAF8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/60 text-base sm:text-sm"
                />
              </div>

              <div>
                <label className="block font-medium text-[#4C3E36] mb-1">
                  Konfirmasi Kehadiran <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => setAttendance('hadir')}
                    className={`py-2 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-semibold text-center border transition-all cursor-pointer min-h-[38px] ${
                      attendance === 'hadir'
                        ? 'bg-emerald-50 border-emerald-600 text-emerald-800 shadow-sm font-bold'
                        : 'border-[#E4D9C8] text-[#69584E] hover:bg-slate-50'
                    }`}
                  >
                    Hadir
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('ragu')}
                    className={`py-2 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-semibold text-center border transition-all cursor-pointer min-h-[38px] ${
                      attendance === 'ragu'
                        ? 'bg-amber-50 border-amber-500 text-amber-800 shadow-sm font-bold'
                        : 'border-[#E4D9C8] text-[#69584E] hover:bg-slate-50'
                    }`}
                  >
                    Masih Ragu
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttendance('tidak_hadir')}
                    className={`py-2 px-1 sm:px-2 rounded-xl text-[11px] sm:text-xs font-semibold text-center border transition-all cursor-pointer min-h-[38px] ${
                      attendance === 'tidak_hadir'
                        ? 'bg-rose-50 border-rose-500 text-rose-800 shadow-sm font-bold'
                        : 'border-[#E4D9C8] text-[#69584E] hover:bg-slate-50'
                    }`}
                  >
                    Tidak Hadir
                  </button>
                </div>
              </div>

              {attendance === 'hadir' && (
                <div>
                  <label className="block font-medium text-[#4C3E36] mb-1">
                    Jumlah Orang yang Hadir
                  </label>
                  <select
                    value={pax}
                    onChange={(e) => setPax(Number(e.target.value))}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD4C3] bg-[#FAF8F4] focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/60 text-base sm:text-sm"
                  >
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                    <option value={4}>4 Orang</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block font-medium text-[#4C3E36] mb-1">
                  Ucapan & Doa Restu <span className="text-rose-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan dan doa terbaik untuk Syalwa & Iqbal..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DFD4C3] bg-[#FAF8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C9A96E]/60 text-base sm:text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#A27B38] to-[#C9A96E] hover:opacity-95 text-white font-semibold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Ucapan & Konfirmasi</span>
              </button>
            </form>
          )}
        </div>

        {/* List Ucapan / Wishes Feed */}
        <div className="lg:col-span-7">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-serif-luxury text-xl font-bold text-[#2E231D]">
              Buku Ucapan ({wishes.length})
            </h3>
            <span className="text-xs text-[#8C7667]">Tersimpan & Real-time</span>
          </div>

          <div className="space-y-4 max-h-[520px] overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EDE2D2] shadow-sm text-xs sm:text-sm"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <span className="font-serif-luxury font-bold text-base text-[#2E231C] block">
                      {item.name}
                    </span>
                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-[#8C7667]">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {item.timestamp}
                      </span>
                      <span>•</span>
                      <span
                        className={`font-medium ${
                          item.attendance === 'hadir'
                            ? 'text-emerald-700'
                            : item.attendance === 'ragu'
                            ? 'text-amber-700'
                            : 'text-rose-700'
                        }`}
                      >
                        {item.attendance === 'hadir'
                          ? `Hadir (${item.pax || 1} orang)`
                          : item.attendance === 'ragu'
                          ? 'Masih Ragu'
                          : 'Berhalangan Hadir'}
                      </span>
                    </div>
                  </div>

                  {/* Heart like button */}
                  <button
                    onClick={() => handleToggleLike(item.id)}
                    className="flex items-center gap-1 text-xs text-[#8C7667] hover:text-rose-500 transition-colors p-1"
                    title="Beri like doa ini"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedMap[item.id] ? 'fill-rose-500 text-rose-500' : 'text-gray-400'
                      }`}
                    />
                    <span>{item.likes}</span>
                  </button>
                </div>

                <p className="text-[#55453B] leading-relaxed italic bg-[#FBF9F6] p-3 rounded-xl border border-[#F0E8DC]">
                  &ldquo;{item.message}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
