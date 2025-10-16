import React from 'react';
import Image from 'next/image';

// Hero Component for About Us
const AboutUsHero = () => {
  return (
    <div className="relative h-[600px] w-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
          alt="MIESTILO Manufacturing Facility"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-orange-400 mb-8">
            Manufacturing Quality Products for Global Markets with Excellence
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Over 9 years of expertise in intimate wear and premium linen manufacturing, 
            trusted by top hotels, hospitals & retailers worldwide.
          </p>
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white text-sm">
            <span className="hover:underline cursor-pointer">Home</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Company</span>
            <span>•</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      {/* Hero Banner */}
      <AboutUsHero />
      
      {/* Company Overview Section */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6 leading-tight">
              Miestilo Lifestyle Private Limited
            </h2>
            <p className="text-xl text-orange-500 font-medium">
              Leading Manufacturer of Intimate Wear & Premium Linen Products
            </p>
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

            {/* Manufacturing Facility Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="MIESTILO Textile Manufacturing Facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
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
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&q=80"
                  alt="Our Mission - Quality Manufacturing"
                  width={600}
                  height={200}
                  className="object-cover w-full h-full"
                />
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
              <div className="w-full h-48 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Our Vision - Global Leadership"
                  width={600}
                  height={200}
                  className="object-cover w-full h-full"
                />
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

          {/* Global Reach & Impact */}
          <div className="bg-white rounded-2xl p-8 mb-16 border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Our Global Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">25+</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">9+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
            </div>
            <div className="mt-8 h-48 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
                alt="Global Team Collaboration"
                width={800}
                height={200}
                className="object-cover w-full h-full"
              />
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
