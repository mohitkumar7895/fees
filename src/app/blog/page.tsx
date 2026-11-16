import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { blogData } from '@/lib/data';
import { Calendar, User, MessageSquare, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'School News & Blog Articles | A.K. Sunshine Convent School',
  description:
    'Read articles, event highlights, educational stories, and student achievements from A.K. Sunshine Convent School.',
};

export default function BlogPage() {
  return (
    <>
      {/* Banner */}
      <section className="bg-school-primary py-16 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <span className="text-amber-300 font-bold uppercase tracking-wider text-xs">
            School Chronicles
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Blog & Articles</h1>
          <p className="text-teal-100 max-w-2xl mx-auto text-base">
            Inspiring thoughts on parenting, pedagogy, festival celebrations, and child development.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <article
                key={post.id}
                id={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col transition-all duration-300 scroll-mt-24"
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-school-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    {post.category}
                  </div>
                </div>

                <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-school-primary" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-school-primary" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5 text-school-primary" />
                        {post.commentsCount}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {post.content}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Tag className="w-3.5 h-3.5 text-school-primary" />
                      <span>{post.category}</span>
                    </span>
                    <span className="font-semibold text-school-primary">A.K. Sunshine Press</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
