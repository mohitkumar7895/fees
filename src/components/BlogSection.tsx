import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogData } from '@/lib/data';
import { User, Folder, MessageSquare, ArrowRight } from 'lucide-react';

interface BlogSectionProps {
  limit?: number;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ limit = 3 }) => {
  const displayed = limit ? blogData.slice(0, limit) : blogData;

  return (
    <div className="pt-12 pb-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-8 animate-fade-in">
          <p className="section-title px-5 mb-2">
            <span>Latest Blog</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-school-secondary mb-3">
            Latest Articles From Blog
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Insights, school activities, academic tips, and stories from our vibrant learning community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayed.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 flex flex-col transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="bg-gray-50/70 text-center p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-school-secondary mb-3 group-hover:text-school-primary transition-colors">
                    {post.title}
                  </h3>

                  <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-school-primary" />
                      <span>{post.author}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Folder className="w-3.5 h-3.5 text-school-primary" />
                      <span>Education</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5 text-school-primary" />
                      <span>{post.commentsCount}</span>
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {post.content}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/blog#${post.id}`}
                    className="inline-flex items-center gap-1.5 bg-school-primary hover:bg-school-primaryDark text-white font-bold py-2.5 px-6 rounded-full shadow-sm hover:shadow-md text-sm transition-all transform hover:scale-105"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
