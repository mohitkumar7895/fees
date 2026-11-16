import React from 'react';
import { Metadata } from 'next';
import { ContactSection } from '@/components/ContactSection';
import { schoolInfo } from '@/lib/data';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | A.K. Sunshine Convent School',
  description:
    'Get in touch with A.K. Sunshine Convent School in Nagla Sikandar, Tundla, Firozabad. Inquire about admissions, syllabus, or school visits.',
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-school-primary py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-amber-300 font-bold uppercase tracking-wider text-xs">
            Reach Out To Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact Our Admissions Desk</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-base">
            We are always delighted to welcome prospective parents and answer questions about enrollment.
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Embedded Location Map Information */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 text-center space-y-4">
            <h3 className="text-xl font-bold text-school-secondary">Campus Direction & Landmark</h3>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              Our school is situated conveniently in <strong>Nagla Sikandar, opposite Punjab National Bank Road, Tundla, District Firozabad (UP) 283204</strong>. Our campus is accessible via major transport routes with school van stops across town.
            </p>
            <div className="pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  'A.K. Sunshine Convent School Nagla Sikandar Tundla Firozabad'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-school-secondary hover:bg-school-secondaryDark text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-school-accent" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
