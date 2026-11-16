'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { Plus } from 'lucide-react';

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
    { key: '*', label: 'All' },
    { key: 'first', label: 'Fun' },
    { key: 'second', label: 'Activity' },
    { key: 'third', label: 'Achievements' },
  ];

  const filtered = filter === '*' ? galleryItems : galleryItems.filter((i) => i.category === filter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;

  return (
    <div className="pt-12 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-6">
          <p className="section-title px-5 mb-2">
            <span>Our Gallery</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-school-secondary mb-4">
            Our children School Gallery
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${
                filter === f.key
                  ? 'bg-school-primary text-white border-school-primary'
                  : 'bg-white text-school-primary border-school-primary hover:bg-school-primary hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Portfolio / Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((item) => (
            <div
              key={item.id}
              className="relative group h-64 overflow-hidden rounded-xl shadow-sm border border-gray-100 cursor-pointer"
              onClick={() => openLightbox(item.image)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay with Plus icon matching original portfolio-btn */}
              <div className="absolute inset-0 bg-school-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-white transform scale-75 group-hover:scale-100 transition-transform">
                  <Plus className="w-8 h-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
