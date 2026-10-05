import React, { useState, useEffect } from 'react';
import { Home, Users, Calendar, Heart, Gift, MessageSquare } from 'lucide-react';

export const FloatingNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'pasangan', 'acara', 'kisah', 'hadiah', 'ucapan'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Awal', icon: Home },
    { id: 'pasangan', label: 'Mempelai', icon: Users },
    { id: 'acara', label: 'Acara', icon: Calendar },
    { id: 'kisah', label: 'Kisah', icon: Heart },
    { id: 'hadiah', label: 'Hadiah', icon: Gift },
    { id: 'ucapan', label: 'Ucapan', icon: MessageSquare },
  ];

  return (
    <nav className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[96vw] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#DECDB5]/90 shadow-[0_6px_25px_rgba(0,0,0,0.12)] flex items-center justify-center gap-0.5 sm:gap-1.5">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            aria-label={item.label}
            className={`flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-1.5 py-1.5 px-2 sm:px-3 rounded-full text-[10px] sm:text-xs font-medium transition-all min-h-[38px] ${
              isActive
                ? 'bg-gradient-to-r from-[#A27B38] to-[#C9A96E] text-white shadow-sm font-semibold'
                : 'text-[#6F5B4E] hover:text-[#8C601F] hover:bg-[#FAF4E9]'
            }`}
          >
            <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span className="text-[9px] sm:text-xs leading-none sm:leading-normal">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
};
