'use client';

import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/app/hooks/useScrollAnimation';

const ManufacturingSlider = () => {
  const { createRef } = useScrollAnimation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: 'https://ibef.org/uploads/blog/1732870660_af89c35dd9c2ffd9afce.png',
      title: 'Advanced Manufacturing Facility',
      description: 'State-of-the-art production lines equipped with cutting-edge technology for premium textile manufacturing.',
      category: 'Production Floor'
    },
    {
      id: 2,
      image: 'https://ispf.co.in/wp-content/uploads/2019/08/11.jpg',
      title: 'Quality Control Laboratory',
      description: 'Comprehensive testing and quality assurance facilities ensuring every product meets international standards.',
      category: 'Quality Assurance'
    },
    {
      id: 3,
      image: 'https://in.apparelresources.com/wp-content/uploads/sites/3/2022/03/west.jpg',
      title: 'Automated Production Systems',
      description: 'Modern automated machinery and robotics for efficient, precise, and scalable manufacturing processes.',
      category: 'Automation'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full py-16 lg:py-24 bg-gray-900 text-white overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h2 ref={createRef()} className="text-4xl lg:text-5xl xl:text-6xl font-light mb-6 leading-tight animate-on-scroll scroll-fade-left">
            Explore our state-of-the-art manufacturing 
            <br />
            <span className="text-orange-400">infrastructure & production environments.</span>
          </h2>
          <p ref={createRef()} className="text-xl text-gray-300 max-w-3xl mx-auto animate-on-scroll scroll-fade-right">
            Take a virtual tour through our world-class facilities where innovation meets precision manufacturing.
          </p>
        </div>
      </div>

      {/* Slider Container */}
      <div 
        ref={createRef()}
        className="relative h-[500px] lg:h-[600px] animate-on-scroll scroll-pop"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Slides */}
        <div className="relative h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full' 
                    : 'opacity-0 translate-x-full'
              }`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content Overlay */}
              <div className="relative h-full flex items-end">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
                  <div className="max-w-2xl">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-sm text-orange-300 mb-4">
                      {slide.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-light text-white mb-4 leading-tight">
                      {slide.title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-200 leading-relaxed mb-6">
                      {slide.description}
                    </p>

                    {/* CTA Button */}
                    <button className="inline-flex items-center px-8 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors duration-300">
                      Learn More
                      <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-orange-400 scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
          <div 
            className="h-full bg-orange-400 transition-all duration-300 ease-out"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide Counter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-between">
          <div ref={createRef()} className="text-sm text-gray-400 animate-on-scroll scroll-fade-left">
            <span className="text-2xl font-light text-white">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="mx-2">/</span>
            <span>{String(slides.length).padStart(2, '0')}</span>
          </div>

          {/* Thumbnail Navigation */}
          <div ref={createRef()} className="hidden lg:flex space-x-4 animate-on-scroll scroll-fade-up">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`w-20 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentSlide 
                    ? 'border-orange-400 scale-110' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Auto-play Toggle */}
          <button
            ref={createRef()}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300 animate-on-scroll scroll-fade-right"
          >
            <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-400'}`} />
            <span>{isAutoPlaying ? 'Auto' : 'Manual'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManufacturingSlider;
