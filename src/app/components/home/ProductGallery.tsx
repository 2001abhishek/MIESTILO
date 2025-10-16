'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  image: string;
}

const ProductGallery = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Fetch products data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handle scroll-based horizontal movement
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sliderRef.current) return;

      const container = containerRef.current;
      const slider = sliderRef.current;
      const containerRect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate when container is in viewport
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      
      // Start animation when container enters viewport
      if (containerTop <= windowHeight && containerTop + containerHeight >= 0) {
        // Calculate scroll progress (0 to 1)
        const progress = Math.max(0, Math.min(1, (windowHeight - containerTop) / (windowHeight + containerHeight)));
        
        // Calculate horizontal scroll distance
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const scrollDistance = progress * maxScroll;
        
        slider.scrollLeft = scrollDistance;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [products]);

  return (
    <div className="w-full py-16 lg:py-24 bg-black text-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-light mb-4">
          Our Products
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Discover our premium range of products designed for various industries
        </p>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="relative h-[80vh] w-full"
      >
        <div 
          ref={sliderRef}
          className="flex gap-8 h-full overflow-x-hidden px-8"
          style={{ 
            width: `${products.length * 400}px`,
            transition: 'none' // Disable CSS transitions for smooth scroll control
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className="relative flex-shrink-0 w-[400px] h-full group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative w-full h-full overflow-hidden rounded-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Category Label */}
                  <div className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-sm text-gray-300 tracking-wide uppercase">
                      Concept
                    </span>
                  </div>
                  
                  {/* Product Name */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {product.name}
                  </h3>
                  
                  {/* View Button */}
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <button className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition-colors duration-300">
                      View Details
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-2">
            <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-100"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>
            <span className="text-sm text-gray-400 ml-4">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
          <div className="flex flex-col items-center text-white/60">
            <div className="text-sm mb-2 rotate-90 whitespace-nowrap">Scroll to explore</div>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
