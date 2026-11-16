import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Banner Image with Floating Badge */}
          <div className="lg:col-span-5 text-center relative">
            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100 group">
              <Image
                src="/img/banner3.png"
                alt="About A.K. Sunshine School"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-5 -left-2 sm:left-4 bg-school-secondary text-white p-3.5 sm:p-4 rounded-2xl shadow-2xl border-2 border-white flex items-center gap-3 animate-float-slow">
              <div className="w-10 h-10 rounded-xl bg-[#ffc107] text-gray-950 flex items-center justify-center font-black text-lg shadow-sm shrink-0">
                <Award className="w-6 h-6 text-gray-950" />
              </div>
              <div className="text-left">
                <span className="block text-sm sm:text-base font-black leading-none">Est. 1999</span>
                <span className="text-[11px] text-teal-200 font-semibold">26+ Yrs Academic Trust</span>
              </div>
            </div>
          </div>

          {/* Right: Learn About Us Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <p className="section-title pr-5 mb-2">
                <span>Learn About Us</span>
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-school-secondary font-heading leading-tight">
                Best School For Your child
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              A.K. Sunshine Convent School is an educational institution located in Nagla Sikandar, Tundla, Firozabad, Uttar Pradesh. The school offers co-educational learning opportunities and emphasizes a holistic approach to education. It provides a range of academic and extracurricular activities aimed at fostering the intellectual and personal growth of its students.
            </p>

            {/* Core Feature Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-sm font-bold text-gray-800 bg-gray-50 p-2.5 rounded-xl border border-gray-100 hover:border-school-primary/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-school-primary shrink-0" />
                <span>Interactive Smart Classes</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-gray-800 bg-gray-50 p-2.5 rounded-xl border border-gray-100 hover:border-school-primary/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-school-primary shrink-0" />
                <span>Playground & Athletic Track</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-gray-800 bg-gray-50 p-2.5 rounded-xl border border-gray-100 hover:border-school-primary/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-school-primary shrink-0" />
                <span>Safe AC Buses with GPS</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm font-bold text-gray-800 bg-gray-50 p-2.5 rounded-xl border border-gray-100 hover:border-school-primary/40 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-school-primary shrink-0" />
                <span>15:1 Student-Teacher Mentorship</span>
              </div>
            </div>

            <div className="pt-3">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 bg-school-primary hover:bg-school-primaryDark text-white font-extrabold py-3.5 px-8 rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-sm uppercase tracking-wider"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
