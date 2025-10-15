import React from 'react';
import Hero from '@/app/components/why-us/Hero';
import VerticalCards from '@/app/components/why-us/VerticalCards';

const WhyUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <VerticalCards />
    </div>
  );
};

export default WhyUsPage;
