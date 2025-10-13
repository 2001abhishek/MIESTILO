import React from 'react';

const AboutUsPage = () => {
  const advantages = [
    'Quality Assurance',
    'Unparalleled Selection', 
    'Long-Term Business Vision',
    'Endless Product Variety',
    'Explore Before You Buy',
    'Custom Packaging',
    'Quick Delivery',
    'Eco-Friendly Practices'
  ];

  const coreBeliefs = [
    { title: 'Quality', description: 'Uncompromising commitment to excellence in every product we manufacture.' },
    { title: 'Innovation', description: 'Continuously evolving our processes and products to meet market demands.' },
    { title: 'Sustainability', description: 'Environmental responsibility in all our manufacturing practices.' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6 leading-tight">
              About Us
            </h1>
            <h2 className="text-2xl lg:text-3xl font-light text-orange-500 mb-8">
              Manufacturing Quality Products for Global Markets with Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Miestilo Lifestyle Private Limited is a prominent conglomerate excelling in intimate wear and linen 
                manufacturing, textile production, and hospitality products. With a strong commitment to innovation 
                and quality, we design products that are both durable and stylish, catering to the diverse needs 
                of global customers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our focus on excellence drives us to consistently exceed industry standards, providing solutions 
                that enhance everyday living. At Miestilo, we prioritize customer satisfaction and strive to create 
                products that enrich lives across all markets we serve.
              </p>

              {/* Statistics */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Delivering Quality Worldwide</h3>
                <p className="text-gray-600 mb-6">
                  With over 9 years of experience, Miestilo has mastered innovation and quality, 
                  delivering exceptional products worldwide.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">25+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">150+</div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl">🏭</span>
                    </div>
                    <p className="text-sm">Manufacturing Facility Image</p>
                    <p className="text-xs text-gray-400 mt-1">Placeholder for company image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              We are defined by our commitment to quality, innovation, and exceptional customer satisfaction.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our mission is to deliver innovative, high-quality textile and linen products that enhance everyday life. 
                We are dedicated to exceeding industry standards through exceptional craftsmanship and sustainability, 
                focusing on meeting the diverse needs of our global customers in hospitality, healthcare, and retail sectors.
              </p>
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xl">🎯</span>
                  </div>
                  <p className="text-sm">Mission Image Placeholder</p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-orange-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our vision is to be a global leader in textile manufacturing, recognized for our commitment to 
                innovation and quality. We aim to set new benchmarks in product excellence, fostering a positive 
                impact on communities and industries worldwide through sustainable manufacturing practices.
              </p>
              <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="w-12 h-12 bg-gray-300 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <span className="text-xl">🌟</span>
                  </div>
                  <p className="text-sm">Vision Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advantages Section */}
      <div className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Discover the Key Benefits of Choosing Us for Your Needs
            </h2>
            <h3 className="text-xl text-orange-500 font-medium">Our Advantages:</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">{index + 1}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900">{advantage}</h4>
              </div>
            ))}
          </div>

          {/* Consulting Rate Placeholder */}
          <div className="bg-white rounded-2xl p-8 mb-16">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Consulting Rate (in percentage)
            </h3>
            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="w-16 h-16 bg-gray-300 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <p className="text-sm">Chart/Graph Placeholder</p>
                <p className="text-xs text-gray-400 mt-1">Consulting rate visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Beliefs Section */}
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-8">Core Beliefs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreBeliefs.map((belief, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gray-50 rounded-2xl p-8 hover:bg-orange-50 transition-colors duration-300">
                  <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                    <span className="text-2xl">
                      {index === 0 ? '⭐' : index === 1 ? '💡' : '🌱'}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{belief.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{belief.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 lg:py-24 bg-gradient-to-r from-orange-500 to-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-light text-white mb-6">
            Connect with Our Global Business Head
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Inquire Now For Personalized Assistance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Get In Touch
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300">
              View Our Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
