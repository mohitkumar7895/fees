import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const ClassesSection: React.FC = () => {
  const classes = [
    {
      title: 'Drawing Class',
      image: '/img/class-1.jpg',
    },
    {
      title: 'Language Learning',
      image: '/img/class-2.jpg',
    },
    {
      title: 'Basic Science',
      image: '/img/class-3.jpg',
    },
  ];

  return (
    <div className="pt-12 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-6">
          <p className="section-title px-5 mb-2">
            <span>Popular Classes</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-school-secondary mb-4">
            Classes for Your Kids
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((cls, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow pb-4 flex flex-col items-center border border-gray-100"
            >
              <div className="relative w-full h-64 overflow-hidden mb-3">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-2xl font-bold text-school-secondary mb-3">
                  {cls.title}
                </h3>
              </div>
              <Link
                href={`/admission?class=${encodeURIComponent(cls.title)}`}
                className="inline-block bg-school-primary hover:bg-school-primaryDark text-white font-bold py-2 px-8 rounded-full shadow-sm transition-all text-sm mb-4"
              >
                Join Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
