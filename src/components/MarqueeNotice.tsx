'use client';

import React, { useState } from 'react';
import { Bell } from 'lucide-react';

export const MarqueeNotice: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const announcements = [
    '🔔 Admissions Open for Session 2026-27 (Playgroup to Grade 5) — Apply Online Today!',
    '🏆 Congratulations to our students for winning First Prize in the District Athletic Championship!',
    '📅 Annual Sports & Cultural Meet scheduled for next month. Details will be sent to parents.',
    '🌟 Free Health & Dental Checkup Camp on Saturday at School Health Wing.',
  ];

  return (
    <div
      className="bg-amber-100/90 border-y border-amber-200 text-amber-950 text-xs md:text-sm py-2 px-4 overflow-hidden relative flex items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider bg-amber-200 text-amber-900 px-2.5 py-0.5 rounded text-[11px] shrink-0 z-10 shadow-sm mr-3">
        <Bell className="w-3.5 h-3.5 animate-bounce" />
        Latest Notice:
      </div>

      <div className="overflow-hidden w-full whitespace-nowrap">
        <div
          className={`inline-block whitespace-nowrap font-medium text-gray-800 ${
            isPaused ? '' : 'animate-marquee'
          }`}
          style={{ animationDuration: '30s' }}
        >
          {announcements.map((item, index) => (
            <span key={index} className="inline-block mx-6">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
