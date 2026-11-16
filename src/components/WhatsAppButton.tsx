'use client';

import React from 'react';
import Image from 'next/image';
import { schoolInfo } from '@/lib/data';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/${schoolInfo.contact.whatsapp}?text=Hello%20A.K.%20Sunshine%20Convent%20School,%20I%20would%20like%20to%20inquire%20about%20admissions.`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 left-6 z-50 group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-2.5 rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-110 active:scale-95"
    >
      {/* Animated Ping Aura */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

      <div className="relative w-12 h-12 flex items-center justify-center">
        <Image
          src="/img/whatsapp.webp"
          alt="WhatsApp"
          width={48}
          height={48}
          className="object-contain drop-shadow-md"
        />
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-sm font-extrabold pr-2">
        Chat with Us
      </span>
    </a>
  );
};
