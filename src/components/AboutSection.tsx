import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const AboutSection: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Banner 3 */}
          <div className="lg:col-span-5 text-center">
            <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src="/img/banner3.png"
                alt="About A.K. Sunshine School"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Learn About Us Content */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <p className="section-title pr-5 mb-2">
                <span>Learn About Us</span>
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-school-secondary mb-4">
                Best School For Your child
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              A.K. Sunshine Convent School is an educational institution located in Nagla Sikandar, Tundla, Firozabad, Uttar Pradesh. The school offers co-educational learning opportunities and emphasizes a holistic approach to education. It provides a range of academic and extracurricular activities aimed at fostering the intellectual and personal growth of its students.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block bg-school-primary hover:bg-school-primaryDark text-white font-bold py-2.5 px-6 rounded-full shadow-sm transition-all text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
