import React from 'react';

const WhyMiestilo = () => {
  const features = [
    {
      id: '01',
      title: 'Diverse Expertise',
      description: 'Extensive experience across industries including intimate wear, hotel linens, towels & textile products.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'Innovation-Driven',
      description: 'Commitment to incorporating the latest technologies to deliver cutting-edge products.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'Quality First',
      description: 'Rigorous quality control processes ensure that all products meet the highest standards of performance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      id: '04',
      title: 'Customer Focused',
      description: 'Focused on understanding & exceeding customer needs, offering tailored solutions & service.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      id: '05',
      title: 'Sustainable Practices',
      description: 'Dedication to environmentally friendly manufacturing processes & product development.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: '06',
      title: 'Global Reach',
      description: 'Proven track record in global markets with products meeting international standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="w-full py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[12rem] lg:text-[16rem] font-bold text-gray-50 select-none opacity-30">
          IJARO
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
          <div className="lg:flex-1">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-600 mb-6">
              Why Choose Us
            </div>
            
            {/* Main Title */}
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 leading-tight max-w-4xl">
              Have Diverse Expertise & Cutting-Edge 
              <br />
              Solutions for Every Market Need.
            </h2>
          </div>

          {/* Explore More Button */}
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <button className="inline-flex items-center text-gray-900 font-medium hover:text-orange-500 transition-colors duration-300">
              Explore More
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`group relative ${index === 5 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Feature Card */}
              <div className={`p-8 transition-all duration-300 hover:bg-gray-50 ${
                index === 5 ? 'border-2 border-gray-900' : 'border border-gray-200'
              } rounded-lg`}>
                {/* Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-2xl font-light text-gray-400">{feature.id}</span>
                  <div className="text-gray-600 group-hover:text-orange-500 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </div>

              {/* Special styling for the last card */}
              {index === 5 && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyMiestilo;
