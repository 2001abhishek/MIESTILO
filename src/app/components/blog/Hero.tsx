'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Hero = () => {
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
    <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, stories, and updates from Miestilo
          </p>
        </div>

        {/* Create Blog Button - Only show if authenticated */}
        {isAuthenticated && (
          <Link
            href="/pages/blog/create"
            className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 hover:scale-110 transition-all duration-300 z-50 group"
            title="Create New Blog Post"
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
    </div>
  );
};

export default Hero;
