import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { teachers } from '@/lib/data';
import { Sparkles, Award } from 'lucide-react';
import { TestimonialsSection } from '@/components/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Our Teachers & Mentors | A.K. Sunshine Convent School',
  description:
    'Meet the certified, experienced educators and school leaders at A.K. Sunshine Convent School, Tundla.',
};

export default function TeachersPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-school-primary py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-amber-300 font-bold uppercase tracking-wider text-xs">
            Faculty Directory
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Dedicated Teachers</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-base">
            Guiding, inspiring, and mentoring your children with expertise, kindness, and devotion.
          </p>
        </div>
      </section>

      {/* Teachers List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teachers.map((teacher) => (
              <div
                key={teacher.id}
                className="bg-white rounded-3xl p-6 text-center shadow-sm hover:shadow-xl border border-gray-100 flex flex-col items-center transition-all duration-300 transform hover:-translate-y-1.5 group"
              >
                <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-school-primary/20 group-hover:border-school-primary transition-colors shadow-md">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    sizes="160px"
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="space-y-2 w-full">
                  <h2 className="text-xl font-bold text-gray-900 group-hover:text-school-primary transition-colors">
                    {teacher.name}
                  </h2>
                  <p className="text-xs font-bold text-school-primary uppercase tracking-wider">
                    {teacher.role}
                  </p>

                  <div className="pt-2 flex flex-wrap justify-center gap-1.5">
                    {teacher.subjects.map((sub, idx) => (
                      <span
                        key={idx}
                        className="inline-block text-xs bg-school-primaryLight text-school-primary px-3 py-1 rounded-full font-semibold"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>

                  {teacher.bio && (
                    <p className="text-xs text-gray-500 pt-3 leading-relaxed">
                      {teacher.bio}
                    </p>
                  )}

                  {teacher.experience && (
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      <span>{teacher.experience} Teaching</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />
    </>
  );
}
