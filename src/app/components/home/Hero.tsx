'use client';

import React from 'react';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const Hero = () => {
  const { createRef } = useScrollAnimation();

  return (
    <div className="w-full bg-white py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Content - Building Image */}
          <div ref={createRef()} className="relative order-2 lg:order-1 animate-on-scroll scroll-fade-left">
            {/* Building Image Placeholder */}
            <div className="relative bg-gray-200 overflow-hidden aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Manufacturing Facility" 
                className="w-full h-full object-cover"
              />
              
              {/* Miestilo Logo on Building */}
              <div className="absolute top-6 left-6">
                <div className="bg-white px-6 py-3 shadow-lg">
                  <div className="text-2xl font-bold tracking-wide">
                    <span className="text-orange-500">MIES</span>
                    <span className="text-gray-900">TILO</span>
                  </div>
                  <div className="text-xs text-gray-500 text-center mt-1">Manufacturing Facility</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Text */}
          <div ref={createRef()} className="space-y-8 order-1 lg:order-2 relative animate-on-scroll scroll-fade-right">
            {/* About Us Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-600">
              About Us
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
                Miestilo: <span className="font-normal">Crafting Excellence</span>
                <br />
                <span className="text-gray-700">Across Industries</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-600 text-base leading-relaxed">
              <p>
                With over <span className="font-semibold text-gray-900">9 years of expertise</span> in 
                manufacturing, we excel in intimate wear production, premium linens, and textile products. 
                Our commitment to innovation and quality ensures that every product we 
                create is durable, stylish, and tailored to meet the diverse needs of our 
                global customers.
              </p>
              <p>
                Driven by a passion for excellence, we continually strive to exceed industry 
                standards and deliver solutions that enhance everyday life across the 
                markets we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Explore Now Badge - Positioned absolutely in top right */}
      <div ref={createRef()} className="absolute top-12 right-8 lg:right-24 animate-on-scroll scroll-pop">
        <div className="bg-white border-2 border-gray-300 w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center shadow-sm" 
             style={{borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'}}>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900">Explore</div>
            <div className="text-sm font-medium text-gray-900">Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;