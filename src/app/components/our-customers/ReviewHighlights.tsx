import React from 'react';
import Image from 'next/image';

const ReviewHighlights = () => {
  // Array of review screenshot images
  const reviewImages = [
    '/customer-review-sc/01.png',
    '/customer-review-sc/02.png',
    '/customer-review-sc/03.png',
    '/customer-review-sc/04.png',
    '/customer-review-sc/05.png',
    '/customer-review-sc/06.png',
    '/customer-review-sc/07.png',
    '/customer-review-sc/08.png',
    '/customer-review-sc/09.png',
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 border border-gray-300 rounded-full text-sm text-gray-700">
                Review Highlights
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
              Read Our Customer Reviews and Testimonials
            </h2>

            {/* CTA Button */}
            <button className="bg-black text-white px-8 py-4 rounded-md font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 group">
              Inquiry Now
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Side - Review Screenshots Grid */}
          <div className="grid grid-cols-3 gap-4">
            {reviewImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Customer Review ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewHighlights;
