import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { classesData } from '@/lib/data';
import { Users, Clock, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Classes & Curriculum | A.K. Sunshine Convent School',
  description:
    'Explore classes and programs offered at A.K. Sunshine Convent School from Playgroup to Grade 5.',
};

export default function ClassesPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-school-primary py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-amber-300 font-bold uppercase tracking-wider text-xs">
            Academic Programs
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Classes For Your Kids</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-base">
            Carefully curated learning modules balancing academic rigor, language proficiency, creativity, and values.
          </p>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classesData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-school-secondary/90 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {item.ageGroup}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold text-school-secondary">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-bold text-gray-800 uppercase tracking-wider">
                        Key Features:
                      </div>
                      {item.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2 text-xs text-gray-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-school-primary shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-4">
                    <div className="flex items-center justify-between text-xs text-gray-500 font-semibold">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-school-primary" />
                        <span>{item.totalSeats} Total Seats</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-school-primary" />
                        <span>{item.classTime}</span>
                      </div>
                    </div>

                    <Link
                      href={`/admission?class=${encodeURIComponent(item.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 bg-school-primary hover:bg-school-primaryDark text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all"
                    >
                      <BookOpen className="w-4 h-4" />
                      <span>Enroll in {item.title}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
