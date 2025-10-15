import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[400px] w-full bg-[#0a1f2e]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/our-customer-hero.jpg"
          alt="Our Customers Hero"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="h-full flex items-center justify-between">
          {/* Left Side - Title and Breadcrumb */}
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
              Our Customers
            </h1>
            
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white text-sm border border-white/30 px-4 py-2 rounded-md w-fit">
              <span className="hover:underline cursor-pointer">Home</span>
              <span>•</span>
              <span>Our Customers</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
