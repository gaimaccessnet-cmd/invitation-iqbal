import React from 'react';

// Elegant SVG botanical leaves, monograms, and flourishes for luxury wedding invitation
export const FloralTopBorder: React.FC<{ className?: string }> = ({ className = "w-48 h-12 text-[#C9A96E]" }) => (
  <svg viewBox="0 0 400 60" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M200 45C160 45 140 25 100 25C60 25 30 45 0 45"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray="2 3"
      opacity="0.6"
    />
    <path
      d="M200 45C240 45 260 25 300 25C340 25 370 45 400 45"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeDasharray="2 3"
      opacity="0.6"
    />
    {/* Center Blossom */}
    <circle cx="200" cy="45" r="3.5" fill="currentColor" />
    <path d="M200 32C197 38 194 41 200 45C206 41 203 38 200 32Z" fill="currentColor" opacity="0.8" />
    <path d="M200 58C197 52 194 49 200 45C206 49 203 52 200 58Z" fill="currentColor" opacity="0.8" />
    <path d="M187 45C193 42 196 39 200 45C196 51 193 48 187 45Z" fill="currentColor" opacity="0.8" />
    <path d="M213 45C207 42 204 39 200 45C204 51 207 48 213 45Z" fill="currentColor" opacity="0.8" />
    {/* Leaves left */}
    <path d="M150 33C142 28 136 29 135 37C142 37 147 35 150 33Z" fill="currentColor" opacity="0.75" />
    <path d="M165 37C158 35 153 38 155 45C161 43 164 40 165 37Z" fill="currentColor" opacity="0.75" />
    {/* Leaves right */}
    <path d="M250 33C258 28 264 29 265 37C258 37 253 35 250 33Z" fill="currentColor" opacity="0.75" />
    <path d="M235 37C242 35 247 38 245 45C239 43 236 40 235 37Z" fill="currentColor" opacity="0.75" />
  </svg>
);

export const FloralCorner: React.FC<{ className?: string; position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({
  className = "w-24 h-24 text-[#C9A96E]/70",
  position = 'top-left'
}) => {
  const getTransform = () => {
    switch (position) {
      case 'top-right': return 'scaleX(-1)';
      case 'bottom-left': return 'scaleY(-1)';
      case 'bottom-right': return 'scale(-1, -1)';
      default: return 'none';
    }
  };

  return (
    <div style={{ transform: getTransform() }} className="pointer-events-none select-none inline-block">
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M4 4C4 50 25 80 80 80" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        <path d="M10 10C10 40 25 65 65 65" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 3" opacity="0.4" />
        {/* Branch and delicate leaves */}
        <path d="M12 25C18 20 25 22 26 30C19 30 14 28 12 25Z" fill="currentColor" opacity="0.7" />
        <path d="M22 14C27 20 25 27 17 28C17 21 19 16 22 14Z" fill="currentColor" opacity="0.7" />
        <path d="M28 42C36 38 42 41 42 49C35 48 30 46 28 42Z" fill="currentColor" opacity="0.7" />
        <path d="M45 28C50 35 48 42 40 42C41 35 43 30 45 28Z" fill="currentColor" opacity="0.7" />
        <path d="M48 60C58 58 64 63 62 72C55 69 51 65 48 60Z" fill="currentColor" opacity="0.7" />
        <path d="M62 48C69 54 66 62 58 62C59 55 60 50 62 48Z" fill="currentColor" opacity="0.7" />
        {/* Little bud */}
        <circle cx="80" cy="80" r="2.5" fill="currentColor" opacity="0.8" />
      </svg>
    </div>
  );
};

export const MonogramCrest: React.FC<{ className?: string }> = ({ className = "w-28 h-28" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Outer luxury gold ring */}
    <div className="absolute inset-0 rounded-full border border-[#D4AF37]/40 shadow-[0_0_20px_rgba(212,175,55,0.15)] animate-pulse-gentle" />
    <div className="absolute inset-1.5 rounded-full border border-dashed border-[#C9A96E]/50" />
    <div className="relative text-center select-none pt-1">
      <span className="font-script text-3xl sm:text-4xl text-[#9E782F] tracking-wide font-normal">
        S <span className="font-serif-luxury text-xl sm:text-2xl text-[#C9A96E]">&</span> I
      </span>
    </div>
  </div>
);

export const BismillahCalligraphy: React.FC<{ className?: string }> = ({ className = "text-[#A27B38]" }) => (
  <div className={`text-center font-arabic text-2xl sm:text-3xl tracking-wide select-none ${className}`}>
    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
  </div>
);

export const WaveDivider: React.FC<{ className?: string }> = ({ className = "text-[#F1EBE1]" }) => (
  <div className={`w-full overflow-hidden leading-none ${className}`}>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-8 sm:h-12 fill-current">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.06,130.83,121.3,200.67,114,242.45,109.62,283.47,84.81,321.39,56.44Z" />
    </svg>
  </div>
);
