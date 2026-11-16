import React from 'react';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { ClassesSection } from '@/components/ClassesSection';
import { TeachersSection } from '@/components/TeachersSection';
import { GallerySection } from '@/components/GallerySection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { BlogSection } from '@/components/BlogSection';
import { ContactSection } from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FacilitiesSection />
      <ClassesSection />
      <TeachersSection limit={4} showAllLink={true} />
      <GallerySection limit={8} />
      <TestimonialsSection />
      <BlogSection limit={3} />
      <ContactSection />
    </>
  );
}
