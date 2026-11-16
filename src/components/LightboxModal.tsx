'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export const LightboxModal: React.FC = () => {
  const { activeLightboxImg, closeLightbox } = useApp();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    if (activeLightboxImg) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeLightboxImg, closeLightbox]);

  if (!activeLightboxImg) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
      onClick={closeLightbox}
    >
      <button
        onClick={closeLightbox}
        aria-label="Close image preview"
        className="absolute top-5 right-5 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full min-h-[300px]">
          <Image
            src={activeLightboxImg}
            alt="Gallery view"
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
};
