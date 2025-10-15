import React from 'react';
import Hero from '@/app/components/blog/Hero';
import BlogGrid from '@/app/components/blog/BlogGrid';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <BlogGrid />
    </div>
  );
};

export default BlogPage;
