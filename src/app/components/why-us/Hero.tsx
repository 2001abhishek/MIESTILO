import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative h-[400px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/why-us-hero.jpg"
          alt="Why Us Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <h1 className="text-5xl md:text-6xl font-light text-white mb-6">
          Why Us
        </h1>
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-white text-sm">
          <span className="hover:underline cursor-pointer">Home</span>
          <span>•</span>
          <span>Why Us</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
