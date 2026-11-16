'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sparkles, ArrowRight, Star, Award, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#17a2b8] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Ambient Playful Floating Bubbles & Sparkles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Background Glows */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-bubble" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-[#ffc107]/15 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-6 left-1/3 w-72 h-72 bg-teal-300/10 rounded-full blur-2xl animate-float-slow" />

        {/* Floating Bubble Rings */}
        <div className="absolute top-10 left-[12%] w-6 h-6 rounded-full border-2 border-white/25 animate-float" />
        <div className="absolute top-1/3 left-[6%] w-12 h-12 rounded-full bg-white/10 backdrop-blur-xs animate-float-reverse" />
        <div className="absolute bottom-20 left-[18%] w-5 h-5 rounded-full bg-[#ffc107]/35 animate-wiggle" />
        <div className="absolute top-14 right-[25%] w-8 h-8 rounded-full border-2 border-white/20 animate-float" />
        <div className="absolute top-1/2 right-[4%] w-14 h-14 rounded-full bg-white/10 animate-float-slow" />
        <div className="absolute bottom-16 right-[28%] w-4 h-4 rounded-full bg-white/30 animate-wiggle" />

        {/* Cute Sparkles */}
        <span className="absolute top-24 left-[42%] text-amber-300 text-lg animate-wiggle opacity-80">✦</span>
        <span className="absolute bottom-28 left-[8%] text-amber-200 text-2xl animate-float-slow opacity-80">★</span>
        <span className="absolute top-16 right-[14%] text-white text-lg animate-pulse-glow opacity-75">✦</span>
        <span className="absolute bottom-24 right-[16%] text-amber-300 text-xl animate-float opacity-80">★</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading, Text & CTAs */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-5 animate-fade-in">
            {/* Subtitle Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-md px-4 py-1.5 rounded-full shadow-xs transition-colors">
              <span className="flex h-2 w-2 rounded-full bg-[#ffc107] animate-ping" />
              <Sparkles className="w-4 h-4 text-[#ffc107] animate-wiggle" />
              <h4 className="text-white text-xs sm:text-sm font-extrabold uppercase tracking-widest">
                Child Learning Center
              </h4>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1
                style={{ fontFamily: "'Handlee', cursive, sans-serif" }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-[62px] font-bold text-white leading-[1.18] tracking-tight drop-shadow-sm"
              >
                New Approach to child Education
              </h1>
              <p className="text-teal-50/95 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Nurturing young minds through creative play, smart interactive classrooms, STEM curiosity, and holistic development in a caring environment.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-2 bg-[#00394f] hover:bg-[#002838] text-white font-extrabold py-3.5 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-sm uppercase tracking-wider overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-300 ease-out" />
              </Link>

              <Link
                href="/admission"
                className="group relative inline-flex items-center gap-2 bg-[#ffc107] hover:bg-amber-400 text-gray-950 font-black py-3.5 px-8 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-sm uppercase tracking-wider"
              >
                <span>Online Admission</span>
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              </Link>
            </div>

            {/* Quick Feature Tickers */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs font-bold text-teal-100">
              <span className="inline-flex items-center gap-1.5 bg-black/15 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc107]" />
                Smart AV Classes
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/15 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc107]" />
                GPS Safe Buses
              </span>
              <span className="inline-flex items-center gap-1.5 bg-black/15 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffc107]" />
                15:1 Mentor Ratio
              </span>
            </div>
          </div>

          {/* Right Column: School Banner Image (banner1.png) with Elegant Showcase Styling */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-xl flex items-center justify-center">
              {/* Radial Backdrop Glow */}
              <div className="absolute inset-2 bg-white/20 rounded-full blur-3xl animate-pulse-glow -z-10" />

              {/* Main Banner Showcase with Float Animation & Rounded Frame */}
              <div className="relative animate-float duration-1000 z-10 w-full group">
                <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl border-4 border-white/30 bg-white/10 backdrop-blur-xs transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="/img/banner1.png"
                    alt="A.K. Sunshine Convent School Banner"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover block"
                    priority
                  />
                </div>
              </div>

              {/* Floating Badge 1: Top Left (Rating) */}
              <div className="absolute -top-4 -left-2 sm:left-2 z-20 bg-white/95 backdrop-blur-md text-gray-800 p-2.5 sm:p-3 rounded-2xl shadow-xl border border-white/40 flex items-center gap-2.5 animate-float-slow">
                <div className="w-9 h-9 rounded-xl bg-amber-400 text-white flex items-center justify-center shadow-sm shrink-0">
                  <Star className="w-5 h-5 fill-white text-white" />
                </div>
                <div className="text-left pr-2">
                  <div className="flex items-center gap-1 text-xs font-black text-gray-900 leading-none">
                    <span>4.9 / 5.0</span>
                    <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                  </div>
                  <span className="text-[10px] font-semibold text-gray-500">Trusted by Parents</span>
                </div>
              </div>

              {/* Floating Badge 2: Top Right (CBSE 100% Results) */}
              <div className="absolute -top-3 -right-2 sm:right-2 z-20 bg-white/95 backdrop-blur-md text-gray-800 p-2.5 sm:p-3 rounded-2xl shadow-xl border border-white/40 flex items-center gap-2.5 animate-float-reverse">
                <div className="w-9 h-9 rounded-xl bg-[#17a2b8] text-white flex items-center justify-center shadow-sm shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-left pr-2">
                  <span className="block text-xs font-black text-gray-900 leading-none">CBSE Board</span>
                  <span className="text-[10px] font-bold text-[#17a2b8]">100% Results</span>
                </div>
              </div>

              {/* Floating Badge 3: Bottom Right (Playgroup to XII) */}
              <div className="absolute -bottom-5 right-2 sm:right-8 z-20 bg-white/95 backdrop-blur-md text-gray-800 p-2.5 sm:p-3 rounded-2xl shadow-xl border border-white/40 flex items-center gap-2.5 animate-float">
                <div className="w-9 h-9 rounded-xl bg-[#00394f] text-white flex items-center justify-center shadow-sm shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#ffc107]" />
                </div>
                <div className="text-left pr-2">
                  <span className="block text-xs font-black text-gray-900 leading-none">Playway to 8th</span>
                  <span className="text-[10px] font-semibold text-gray-500">Co-Ed English Medium</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
