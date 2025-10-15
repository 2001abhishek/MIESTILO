import React from 'react';
import Hero from '@/app/components/our-customers/Hero';
import ReviewHighlights from '@/app/components/our-customers/ReviewHighlights';

const OurCustomersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ReviewHighlights />
    </div>
  );
};

export default OurCustomersPage;
