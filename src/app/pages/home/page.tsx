'use client';

import React, { useState, useEffect } from 'react';
import Hero from '../../components/home/Hero';
import ProductGallery from '../../components/home/ProductGallery';
import WhyMiestilo from '../../components/home/WhyMiestilo';
import ManufacturingSlider from '../../components/home/ManufacturingSlider';
import { FullScreenLoader } from '@/app/components/ui/Loader';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simple 2-second loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <FullScreenLoader size="xl" />;
  }

  return (
    <div className="min-h-screen bg-white">
        <Hero />
      
      {/* Product Gallery Section */}
      <ProductGallery />
      
      {/* Why Miestilo Section */}
      <WhyMiestilo />
      
      {/* Manufacturing Infrastructure Slider */}
      <ManufacturingSlider />
      
      {/* Additional Content Section */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-6">
            Why Choose Miestilo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence and innovation sets us apart in the textile manufacturing industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              Cutting-edge manufacturing techniques and quality materials that meet the highest industry standards for intimate wear and linens.
            </p>
          </div>
          
          <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
            <p className="text-gray-600">
              Rigorous quality control processes ensure every product meets our exceptional standards, trusted by hotels, hospitals, and retailers.
            </p>
          </div>
          
          <div className="p-8 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Focus</h3>
            <p className="text-gray-600">
              Flexible pricing and low minimum order quantities, with customization options to meet your specific business requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
