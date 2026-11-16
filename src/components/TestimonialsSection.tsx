import React from 'react';
import { testimonialsData } from '@/lib/data';
import { Sparkles, Quote, MapPin } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-school-primaryLight text-school-primary px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Parent Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-school-secondary tracking-tight">
            What Parents Say About Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Real feedback from proud parents across Tundla, Firozabad whose children learn and flourish every day at A.K. Sunshine Convent School.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-school-primary/20 absolute top-6 right-6 group-hover:text-school-primary/40 transition-colors" />

              <p className="text-gray-700 italic text-base leading-relaxed mb-6 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-200/60">
                <div className="w-12 h-12 rounded-full bg-school-primary text-white font-black text-lg flex items-center justify-center shrink-0 shadow-sm">
                  {t.parentName.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-base">{t.parentName}</h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <MapPin className="w-3 h-3 text-school-primary" />
                    <span>{t.location}</span>
                  </div>
                  {t.studentClass && (
                    <span className="inline-block text-[11px] font-semibold text-school-primary mt-1">
                      {t.studentClass}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
