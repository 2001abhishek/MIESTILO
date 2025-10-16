'use client';

import React, { useEffect, useState } from 'react';
import Hero from '@/app/components/blog/Hero';
import BlogGrid from '@/app/components/blog/BlogGrid';
import Link from 'next/link';

const BlogPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <BlogGrid isAuthenticated={isAuthenticated} />
      
      {/* Add Blog Button - Only show if authenticated */}
      {isAuthenticated && (
        <Link
          href="/pages/blog/create"
          className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 hover:scale-110 transition-all duration-300 z-50"
          title="Add New Blog"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default BlogPage;
