'use client';

import React, { useState } from 'react';

const ProductGallery = () => {
  const [hoveredSection, setHoveredSection] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      title: 'Hotel Bedding',
      subtitle: 'Premium & Comfortable',
      description: 'Our premium hotel bedding designed for luxury, comfort, and durability in hospitality industry.',
      image: 'https://miestilo.in/assets/imgs/works/hotel%20bed.png',
      category: 'Hotel Linen'
    },
    {
      id: 2,
      title: 'Premium Towels',
      subtitle: 'Soft & Absorbent',
      description: 'High-quality towels crafted for hotels, spas, and healthcare facilities with superior absorbency.',
      image: 'https://miestilo.in/assets/imgs/works/towel.png',
      category: 'Bath Linen'
    },
    {
      id: 3,
      title: 'Bed Runners',
      subtitle: 'Elegant & Stylish',
      description: 'Decorative bed runners that add elegance and style to hotel rooms and luxury accommodations.',
      image: 'https://miestilo.in/assets/imgs/works/runner22.jpg',
      category: 'Decorative Linen'
    }
  ];

  const backgroundImage = hoveredSection !== null ? products[hoveredSection - 1]?.image : '';

  return (
    <div className="w-full py-16 lg:py-24 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4">
          Our Products
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our premium range of textile products designed for hospitality, healthcare, and retail industries.
        </p>
      </div>

      {/* Gallery Container */}
      <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: hoveredSection ? 0.3 : 0
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/20" />

        {/* Product Sections */}
        <div className="relative h-full flex">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex-1 relative transition-all duration-500 ease-in-out cursor-pointer ${
                hoveredSection === product.id ? 'flex-[2]' : 'flex-1'
              }`}
              onMouseEnter={() => setHoveredSection(product.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Section Content */}
              <div className="h-full flex flex-col justify-end p-8 lg:p-12 relative z-10">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-xs font-medium text-gray-700">
                    {product.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`font-light text-gray-900 mb-2 transition-all duration-300 ${
                  hoveredSection === product.id 
                    ? 'text-3xl lg:text-4xl' 
                    : 'text-2xl lg:text-3xl'
                }`}>
                  {product.title}
                </h3>

                {/* Subtitle */}
                <p className={`text-gray-700 font-medium mb-4 transition-all duration-300 ${
                  hoveredSection === product.id 
                    ? 'text-lg opacity-100' 
                    : 'text-base opacity-80'
                }`}>
                  {product.subtitle}
                </p>

                {/* Description - Only show on hover */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  hoveredSection === product.id 
                    ? 'max-h-32 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-md">
                    {product.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-300">
                    View Products
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Section Divider */}
              {index < products.length - 1 && (
                <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300/50" />
              )}

              {/* Hover Indicator */}
              <div className={`absolute bottom-8 left-8 w-12 h-1 bg-orange-500 transition-all duration-300 ${
                hoveredSection === product.id ? 'w-24' : 'w-12'
              }`} />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {products.map((product) => (
            <button
              key={product.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                hoveredSection === product.id 
                  ? 'bg-orange-500 scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              onMouseEnter={() => setHoveredSection(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
