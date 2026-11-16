import React from 'react';
import { Metadata } from 'next';
import { AboutSection } from '@/components/AboutSection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { TeachersSection } from '@/components/TeachersSection';
import { schoolInfo } from '@/lib/data';
import { Target, Eye, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us | A.K. Sunshine Convent School',
  description:
    'Discover the vision, mission, and pedagogical philosophy behind A.K. Sunshine Convent School in Tundla, Firozabad.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header Banner */}
      <section className="bg-school-primary py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-amber-300 font-bold uppercase tracking-wider text-xs">
            Learn Our Story
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About Our School</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-base">
            Providing holistic education, strong moral foundations, and progressive academic training for young minds in Tundla and surrounding areas.
          </p>
        </div>
      </section>

      {/* Main About Component */}
      <AboutSection />

      {/* Mission & Vision Section */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-school-primaryLight/40 border border-school-primary/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-school-primary text-white flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-school-secondary">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To foster a safe, inclusive, and joyous environment where children build academic competence, scientific curiosity, artistic expression, and moral character to thrive in a dynamically evolving world.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-amber-50 border border-amber-200/60 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-school-accent text-gray-900 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-school-secondary">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                To be the benchmark rural-urban educational institution in Firozabad district, empowering students with modern digital tools, bilingual fluency, and empathetic leadership values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <FacilitiesSection />

      {/* Faculty */}
      <TeachersSection limit={4} showAllLink={true} />
    </>
  );
}
