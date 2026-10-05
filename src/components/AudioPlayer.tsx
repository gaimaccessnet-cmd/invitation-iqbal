import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Music, Volume2, VolumeX, Disc, Sparkles } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onRequestStart?: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  isPlaying,
  onTogglePlay,
}) => {
  const [showLyrics, setShowLyrics] = useState(false);
  const [audioMode, setAudioMode] = useState<'synth' | 'mp3'>('synth');
  const [volume, setVolume] = useState(0.85);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isSynthRunningRef = useRef(false);
  const synthTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Synthesize the romantic piano & string arrangement of "Lagu Pernikahan Kita" (Reff)
  // Chord progression & romantic notes (Reff section):
  // D -> A/C# -> Bm7 -> F#m/A -> G -> D/F# -> Em7 -> A7
  // Melodic notes of the chorus ("Cinta kita 'kan selalu terjaga...")
  const playSynthesizedChorusReff = useCallback(() => {
    try {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtxClass();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.4, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Reff notes:
      // "Cin-ta ki-ta 'kan se-la-lu ter-ja-ga"
      // "Hing-ga ak-hir ha-yat me-mi-sah-kan ki-ta"
      // "Eng-kau dan a-ku, se-la-ma-nya"
      // "Da-lam i-ka-tan su-ci per-ni-ka-han i-ni"
      
      const noteFreqs: { [key: string]: number } = {
        'D3': 146.83, 'F#3': 185.00, 'A3': 220.00,
        'C#3': 138.59, 'E3': 164.81, 'B2': 123.47,
        'G3': 196.00, 'F#2': 92.50, 'E2': 82.41,
        'A2': 110.00, 'D4': 293.66, 'E4': 329.63,
        'F#4': 369.99, 'G4': 392.00, 'A4': 440.00,
        'B4': 493.88, 'C#5': 554.37, 'D5': 587.33,
        'E5': 659.25, 'F#5': 739.99
      };

      // Sequence of notes for the chorus
      const melodySequence: Array<{ note: string; time: number; dur: number; type?: 'piano' | 'string' }> = [
        // Line 1: Cinta kita 'kan selalu terjaga (D - F#m/C#)
        { note: 'F#4', time: 0.0, dur: 0.6 },
        { note: 'G4', time: 0.6, dur: 0.5 },
        { note: 'A4', time: 1.1, dur: 0.8 },
        { note: 'D5', time: 1.9, dur: 1.0 },
        { note: 'C#5', time: 2.9, dur: 0.6 },
        { note: 'B4', time: 3.5, dur: 0.6 },
        { note: 'A4', time: 4.1, dur: 1.4 },

        // Line 2: Hingga akhir hayat memisahkan kita (Bm - F#m)
        { note: 'D4', time: 5.6, dur: 0.5 },
        { note: 'E4', time: 6.1, dur: 0.5 },
        { note: 'F#4', time: 6.6, dur: 0.8 },
        { note: 'B4', time: 7.4, dur: 1.0 },
        { note: 'A4', time: 8.4, dur: 0.6 },
        { note: 'G4', time: 9.0, dur: 0.6 },
        { note: 'F#4', time: 9.6, dur: 1.4 },

        // Line 3: Engkau dan aku, selamanya... (G - D/F#)
        { note: 'G4', time: 11.1, dur: 0.6 },
        { note: 'A4', time: 11.7, dur: 0.6 },
        { note: 'B4', time: 12.3, dur: 1.2 },
        { note: 'D5', time: 13.5, dur: 0.8 },
        { note: 'A4', time: 14.3, dur: 1.8 },

        // Line 4: Dalam ikatan suci pernikahan ini (Em7 - A7 - D)
        { note: 'G4', time: 16.2, dur: 0.6 },
        { note: 'F#4', time: 16.8, dur: 0.6 },
        { note: 'E4', time: 17.4, dur: 0.8 },
        { note: 'G4', time: 18.2, dur: 0.8 },
        { note: 'F#4', time: 19.0, dur: 0.8 },
        { note: 'E4', time: 19.8, dur: 0.8 },
        { note: 'D4', time: 20.6, dur: 2.8 },
      ];

      // Bass & chord pad accompaniment
      const chords: Array<{ notes: string[]; time: number; dur: number }> = [
        { notes: ['D3', 'F#3', 'A3'], time: 0.0, dur: 2.8 },
        { notes: ['C#3', 'E3', 'A3'], time: 2.8, dur: 2.8 },
        { notes: ['B2', 'D3', 'F#3'], time: 5.6, dur: 2.8 },
        { notes: ['A2', 'C#3', 'E3'], time: 8.4, dur: 2.7 },
        { notes: ['G3', 'B3', 'D4'], time: 11.1, dur: 2.4 },
        { notes: ['F#2', 'A3', 'D4'], time: 13.5, dur: 2.7 },
        { notes: ['E2', 'G3', 'B3'], time: 16.2, dur: 2.4 },
        { notes: ['A2', 'C#3', 'E3', 'G3'], time: 18.6, dur: 2.0 },
        { notes: ['D3', 'F#3', 'A3', 'D4'], time: 20.6, dur: 3.4 },
      ];

      const startTime = ctx.currentTime + 0.1;

      // Play chords (warm electric piano / celesta tone)
      chords.forEach(({ notes, time, dur }) => {
        notes.forEach(noteName => {
          const freq = noteFreqs[noteName];
          if (!freq) return;

          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, startTime + time);

          gain.gain.setValueAtTime(0.001, startTime + time);
          gain.gain.linearRampToValueAtTime(0.08, startTime + time + 0.1);
          gain.gain.exponentialRampToValueAtTime(0.001, startTime + time + dur);

          osc.connect(gain);
          gain.connect(masterGain);

          osc.start(startTime + time);
          osc.stop(startTime + time + dur + 0.1);
        });
      });

      // Play romantic melody (bell/grand piano tone with gentle attack)
      melodySequence.forEach(({ note, time, dur }) => {
        const freq = noteFreqs[note];
        if (!freq) return;

        const osc = ctx.createOscillator();
        const oscOvertone = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime + time);

        oscOvertone.type = 'triangle';
        oscOvertone.frequency.setValueAtTime(freq * 2, startTime + time);

        gain.gain.setValueAtTime(0.001, startTime + time);
        gain.gain.linearRampToValueAtTime(0.18, startTime + time + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + time + dur);

        osc.connect(gain);
        oscOvertone.connect(gain);
        gain.connect(masterGain);

        osc.start(startTime + time);
        oscOvertone.start(startTime + time);

        osc.stop(startTime + time + dur + 0.1);
        oscOvertone.stop(startTime + time + dur + 0.1);
      });

      const totalDuration = 24; // 24 seconds per loop of the reff
      isSynthRunningRef.current = true;

      // Repeat loop seamlessly
      synthTimerRef.current = setTimeout(() => {
        if (isSynthRunningRef.current) {
          playSynthesizedChorusReff();
        }
      }, totalDuration * 1000);
    } catch {
      // AudioContext fallback
    }
  }, [volume]);

  const stopSynthesizer = useCallback(() => {
    isSynthRunningRef.current = false;
    if (synthTimerRef.current) {
      clearTimeout(synthTimerRef.current);
      synthTimerRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
      audioCtxRef.current.suspend();
    }
  }, []);

  // Handle play/pause toggle
  useEffect(() => {
    if (isPlaying) {
      if (audioMode === 'mp3' && audioRef.current) {
        audioRef.current.play().catch(() => {
          // If mp3 fails to play or load, fallback to high-fidelity synthesized reff melody
          setAudioMode('synth');
          playSynthesizedChorusReff();
        });
      } else {
        playSynthesizedChorusReff();
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      stopSynthesizer();
    }

    return () => {
      stopSynthesizer();
    };
  }, [isPlaying, audioMode, playSynthesizedChorusReff, stopSynthesizer]);

  return (
    <>
      {/* Hidden audio element in case user provides mp3 source or browser supports direct stream */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onEnded={() => {
          if (audioRef.current && isPlaying) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
          }
        }}
      />

      {/* Floating Audio Controller */}
      <div className="fixed bottom-20 right-3 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
        {/* Lyrics / Song Info Popup */}
        {showLyrics && (
          <div className="w-72 sm:w-80 max-w-[calc(100vw-1.5rem)] p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl border border-[#C9A96E]/30 text-xs text-[#4A3E38] animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F0EBE1]">
              <div className="flex items-center gap-1.5 font-medium text-[#8C6425]">
                <Music className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span className="font-semibold">Lagu Pernikahan Kita</span>
              </div>
              <button
                onClick={() => setShowLyrics(false)}
                className="text-gray-400 hover:text-gray-700 font-bold p-1 text-base leading-none"
                aria-label="Tutup lirik"
              >
                ×
              </button>
            </div>
            
            <p className="text-[11px] text-[#8C7A70] mb-2 font-medium">
              Tiara Andini & Arsy Widianto (Bagian Reff)
            </p>

            <div className="p-2.5 rounded-xl bg-[#FBF9F5] border border-[#EBE4D8] italic text-center text-[#55463D] leading-relaxed my-2">
              &ldquo;Cinta kita &apos;kan selalu terjaga<br />
              Hingga akhir hayat memisahkan kita<br />
              Engkau dan aku selamanya<br />
              Dalam ikatan suci pernikahan ini...&rdquo;
            </div>

            <div className="flex items-center justify-between pt-2 text-[10px] text-gray-500">
              <span className="inline-flex items-center gap-1 text-[#8C6425]">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" /> Putar ulang otomatis (Loop)
              </span>
              <span className="text-[#A27B38] font-medium">
                {isPlaying ? 'Sedang Berputar' : 'Dijeda'}
              </span>
            </div>
          </div>
        )}

        {/* Floating Vinyl Button */}
        <div className="flex items-center gap-2">
          {/* Subtle song label pill */}
          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#C9A96E]/40 shadow-lg text-[11px] font-medium text-[#655246] hover:bg-white hover:text-[#8C6425] transition-all cursor-pointer"
            title="Klik untuk melihat lirik & info lagu"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Lagu Pernikahan Kita (Reff)</span>
          </button>

          {/* Disc Button */}
          <div className="relative group">
            <button
              onClick={onTogglePlay}
              className={`relative w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl transition-all transform active:scale-95 border-2 cursor-pointer ${
                isPlaying
                  ? 'bg-[#2C241E] text-[#D4AF37] border-[#D4AF37] ring-4 ring-[#D4AF37]/20 shadow-[0_4px_20px_rgba(212,175,55,0.3)]'
                  : 'bg-white text-[#7E6A5E] border-gray-200 shadow-md hover:border-[#C9A96E]'
              }`}
              aria-label={isPlaying ? 'Jeda Musik' : 'Putar Musik'}
              title={isPlaying ? 'Jeda Lagu Pernikahan' : 'Putar Lagu Pernikahan'}
            >
              {/* Disc vinyl groove effect */}
              <div
                className={`absolute inset-0 rounded-full flex items-center justify-center pointer-events-none ${
                  isPlaying ? 'animate-spin-slow' : ''
                }`}
              >
                <Disc className="w-full h-full opacity-60 p-0.5" />
                <div className="absolute w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-[#181310] border border-[#D4AF37]" />
              </div>

              {/* Center icon */}
              <div className="relative z-10">
                {isPlaying ? (
                  <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#F3E5AB]" />
                ) : (
                  <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                )}
              </div>
            </button>

            {/* Sound wave equalizer animation indicator */}
            {isPlaying && (
              <div className="absolute -top-1 -right-1 flex items-end gap-0.5 h-3 px-1 py-0.5 bg-[#8C6425] rounded-full">
                <span className="w-0.5 h-2 bg-amber-200 animate-pulse" />
                <span className="w-0.5 h-3 bg-amber-100 animate-pulse delay-75" />
                <span className="w-0.5 h-1.5 bg-amber-300 animate-pulse delay-150" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
