'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  content: string;
}

const BlogDetailPage = () => {
  const params = useParams();
  const blogId = params.id as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${blogId}`);
        const data = await response.json();
        
        if (data.success) {
          setPost(data.blog);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch blog:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link href="/pages/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[500px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative h-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-16">
          <div className="mb-4">
            <span className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-900">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-white text-sm">
            <span>By {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div 
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-li:text-gray-700
            prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Back to Blog Button */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link
            href="/pages/blog"
            className="inline-flex items-center gap-2 text-gray-900 font-medium hover:gap-3 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogDetailPage;
