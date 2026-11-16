import React from 'react';
import { Metadata } from 'next';
import { GallerySection } from '@/components/GallerySection';

export const metadata: Metadata = {
  title: 'School Photo Gallery | A.K. Sunshine Convent School',
  description:
    'Browse our vibrant gallery of school activities, sports days, science exhibitions, celebrations, and achievements.',
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-school-primary py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-amber-300 font-bold uppercase tracking-wider text-xs">
            Visual Highlights
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our School Gallery</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-base">
            Take a visual tour through our events, student achievements, celebrations, and campus life.
          </p>
        </div>
      </section>

      <GallerySection />
    </>
  );
}
