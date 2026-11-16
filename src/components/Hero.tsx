import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <div className="bg-school-primary px-4 sm:px-8 lg:px-16 mb-12 py-10 lg:py-16 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column */}
        <div className="lg:col-span-6 text-center lg:text-left space-y-4">
          <h4 className="text-white text-xl sm:text-2xl font-bold tracking-wide">
            Child Learning Center
          </h4>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            New Approach to child Education
          </h1>
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="/about"
              className="inline-block bg-school-secondary hover:bg-school-secondaryDark text-white font-bold py-3.5 px-8 rounded-full shadow-md transition-all text-sm uppercase tracking-wider"
            >
              Learn More
            </Link>
            <Link
              href="/admission"
              className="inline-block bg-school-accent hover:bg-amber-400 text-gray-900 font-bold py-3.5 px-8 rounded-full shadow-md transition-all text-sm uppercase tracking-wider"
            >
              Online Admission
            </Link>
          </div>
        </div>

        {/* Right Column: Hero Banner Image */}
        <div className="lg:col-span-6 text-center lg:text-right flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-4/3 lg:aspect-square flex items-center justify-center">
            <Image
              src="/img/banner1.png"
              alt="A.K. Sunshine Convent School Banner"
              width={800}
              height={700}
              className="object-contain max-h-[460px] w-auto drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
