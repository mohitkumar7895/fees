import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const ClassesSection: React.FC = () => {
  const classes = [
    {
      title: 'Drawing Class',
      desc: 'Creative expression with watercolors, sketching, crafts, and spatial imagination.',
      image: '/img/class-1.jpg',
      age: '3 - 6 Years',
      badge: 'Creative Arts',
      color: 'bg-rose-500',
    },
    {
      title: 'Language Learning',
      desc: 'Phonics, vocabulary, spoken English fluency, and interactive storytelling.',
      image: '/img/class-2.jpg',
      age: '4 - 8 Years',
      badge: 'Communication',
      color: 'bg-teal-500',
    },
    {
      title: 'Basic Science',
      desc: 'Hands-on simple experiments, nature observation, and foundational curiosity.',
      image: '/img/class-3.jpg',
      age: '5 - 10 Years',
      badge: 'STEM & Logic',
      color: 'bg-amber-500',
    },
  ];

  return (
    <section className="pt-16 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-8 space-y-2">
          <p className="section-title px-5 mb-2">
            <span>Popular Classes</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-school-secondary font-heading">
            Classes for Your Kids
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Carefully curated learning modules balancing academic rigor, language proficiency, creativity, and values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((cls, idx) => (
            <div
              key={idx}
              className="group bg-gray-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-2"
            >
              <div>
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src={cls.image}
                    alt={cls.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className={`absolute top-4 left-4 ${cls.color} text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md`}>
                    {cls.badge}
                  </span>
                  <span className="absolute bottom-3 right-4 bg-white/90 backdrop-blur-xs text-gray-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {cls.age}
                  </span>
                </div>

                <div className="p-6 text-center space-y-2">
                  <h3 className="text-2xl font-bold text-school-secondary group-hover:text-school-primary transition-colors font-heading">
                    {cls.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cls.desc}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 text-center">
                <Link
                  href={`/admission?class=${encodeURIComponent(cls.title)}`}
                  className="inline-flex items-center gap-2 bg-school-primary hover:bg-school-primaryDark text-white font-extrabold py-2.5 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm uppercase tracking-wider group-hover:scale-105"
                >
                  <span>Join Now</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
