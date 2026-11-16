import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { AdmissionForm } from '@/components/AdmissionForm';
import { CheckCircle2, ShieldCheck, Clock, Award, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Online School Admission 2026-27 | A.K. Sunshine Convent School',
  description:
    'Apply online for student admission in Playgroup, Nursery, LKG, UKG, and Classes 1 to 5 at A.K. Sunshine Convent School, Tundla.',
};

export default function AdmissionPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-school-primary py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-amber-300 font-bold uppercase tracking-wider text-xs">
            Session 2026-27 Enrollments
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Online Student Admission
          </h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-base">
            Secure your child's seat in an enriching, value-driven educational environment. Fast, transparent online admission process.
          </p>
        </div>
      </section>

      {/* Intro info bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-school-primaryLight text-school-primary flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Quick Review</h4>
                <p className="text-xs text-gray-500 mt-0.5">Applications evaluated within 48 hours</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Safe & Transparent</h4>
                <p className="text-xs text-gray-500 mt-0.5">Zero hidden donation fees, direct admission</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-gray-50 border border-gray-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Welcome Kit</h4>
                <p className="text-xs text-gray-500 mt-0.5">Complimentary orientation bag for new admissions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Admission Interactive Form */}
      <section className="py-12 bg-gray-50" id="status">
        <Suspense fallback={<div className="text-center py-20 text-gray-500">Loading Admission Form...</div>}>
          <AdmissionForm />
        </Suspense>
      </section>
    </>
  );
}
