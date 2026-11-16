'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { ZoomIn, Sparkles } from 'lucide-react';

const galleryItems = [
  { id: '1', category: 'first', image: '/img/travel.jpg', title: 'Travel & Fun' },
  { id: '2', category: 'first', image: '/img/pool.jpg', title: 'Pool & Splash' },
  { id: '3', category: 'second', image: '/img/festival.jpg', title: 'Festival Celebration' },
  { id: '4', category: 'second', image: '/img/function1.jpg', title: 'Annual Function 1' },
  { id: '5', category: 'second', image: '/img/function2.jpg', title: 'Annual Function 2' },
  { id: '6', category: 'third', image: '/img/achievements.jpg', title: 'Student Achievements' },
  { id: '7', category: 'third', image: '/img/achieve1.jpg', title: 'Sports Achievements' },
  { id: '8', category: 'third', image: '/img/achieve2.jpg', title: 'Award Ceremony' },
  { id: '9', category: 'second', image: '/img/holi.jpg', title: 'Holi Festival' },
  { id: '10', category: 'second', image: '/img/republic.jpg', title: 'Republic Day' },
  { id: '11', category: 'second', image: '/img/yoga.jpg', title: 'Yoga Session' },
  { id: '12', category: 'first', image: '/img/brighton-college-boarding-school-uk-classroom.jpg', title: 'Classroom Activity' },
];

interface GallerySectionProps {
  limit?: number;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ limit }) => {
  const [filter, setFilter] = useState('*');
  const { openLightbox } = useApp();

  const filters = [
    { key: '*', label: 'All Photos' },
    { key: 'first', label: 'Fun & Play' },
    { key: 'second', label: 'Activities & Events' },
    { key: 'third', label: 'Achievements' },
  ];

  const filtered = filter === '*' ? galleryItems : galleryItems.filter((i) => i.category === filter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <section className="pt-16 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-8 space-y-2">
          <p className="section-title px-5 mb-2">
            <span>Our Gallery</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-school-secondary font-heading">
            Our Children School Gallery
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Glimpses of joyful campus life, annual days, athletic victories, and creative classroom moments.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold tracking-wide border transition-all duration-300 transform active:scale-95 ${
                filter === f.key
                  ? 'bg-school-primary border-school-primary text-white shadow-md scale-105'
                  : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-teal-50 hover:border-school-primary hover:text-school-primary'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayed.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.image)}
              className="group relative h-64 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 cursor-pointer transition-all duration-300 transform hover:-translate-y-1.5"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center shadow-sm">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="text-white text-base font-bold drop-shadow-md">
                    {item.title}
                  </h4>
                  <span className="text-[11px] font-semibold text-amber-300">Click to enlarge</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
