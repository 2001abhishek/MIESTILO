'use client';

import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://www.ijarogroup.com/rubber/public/imgs/menu/gym.jpg',
      title: 'Gym Mats',
      subtitle: 'Premium Quality Fitness Solutions'
    },
    {
      id: 2,
      image: 'https://www.ijarogroup.com/rubber/public/imgs/menu/cow.jpg',
      title: 'Cow Mats',
      subtitle: 'Comfort for your livestock'
    },
    {
      id: 3,
      image: 'https://www.ijarogroup.com/rubber/public/imgs/menu/hollow.jpg',
      title: 'Hollow Mats',
      subtitle: 'Innovative Design Solutions'
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className={`w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out ${
              index === currentSlide ? 'scale-110' : 'scale-100'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-end pb-32">
        <div className="px-8 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="text-left text-white max-w-2xl">
            {/* Subtitle - Small text above */}
            <p className="text-sm md:text-base text-gray-300 mb-3 transition-all duration-500 tracking-wide">
              {slides[currentSlide].subtitle}
            </p>
            
            {/* Current Slide Title - Large Bold */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-500 leading-tight">
              {slides[currentSlide].title}
            </h2>
          </div>
        </div>
      </div>

      {/* Status Bar - Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative w-16 h-1 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-orange-500' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            >
              {/* Progress bar for current slide */}
              {index === currentSlide && (
                <div 
                  className="absolute top-0 left-0 h-full bg-orange-400 rounded-full transition-all duration-5000 ease-linear"
                  style={{ 
                    width: '100%',
                    animation: 'progress 5s linear infinite'
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;