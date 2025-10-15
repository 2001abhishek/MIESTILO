import React from 'react';

const CSRPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Corporate Social Responsibility
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We believe in making a positive impact on society and the environment through our business practices and community initiatives.
          </p>
        </div>

        {/* Our Commitment */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Our Commitment to Society
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Support</h3>
              <p className="text-gray-600">
                Supporting local communities through education, healthcare, and infrastructure development programs.
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Environmental Care</h3>
              <p className="text-gray-600">
                Implementing sustainable practices and reducing our carbon footprint through green technologies and initiatives.
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Education & Skills</h3>
              <p className="text-gray-600">
                Providing educational opportunities and skill development programs to empower individuals and communities.
              </p>
            </div>
          </div>
        </div>

        {/* Our Initiatives */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Current Initiatives
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Literacy Program</h3>
                  <p className="text-gray-600 mb-4">
                    Teaching digital skills to underserved communities, helping bridge the digital divide and create new opportunities for economic growth.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">📍 5 Cities</span>
                    <span className="mr-4">👥 500+ Beneficiaries</span>
                    <span>📅 Ongoing</span>
                  </div>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 md:text-right">
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Green Technology Initiative</h3>
                  <p className="text-gray-600 mb-4">
                    Developing and implementing eco-friendly technology solutions to reduce environmental impact and promote sustainable development.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">🌱 Carbon Neutral</span>
                    <span className="mr-4">♻️ 50% Waste Reduction</span>
                    <span>🔋 Renewable Energy</span>
                  </div>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 md:text-right">
                  <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Active
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Healthcare Access Program</h3>
                  <p className="text-gray-600 mb-4">
                    Partnering with healthcare providers to improve access to medical services in remote and underserved areas.
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-4">🏥 10 Clinics</span>
                    <span className="mr-4">👨‍⚕️ 25 Doctors</span>
                    <span>📈 Growing</span>
                  </div>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 md:text-right">
                  <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Expanding
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="mb-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg p-8 text-white">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Lives Impacted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-green-100">Communities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">$2M+</div>
              <div className="text-green-100">Invested in CSR</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25%</div>
              <div className="text-green-100">Carbon Footprint Reduced</div>
            </div>
          </div>
        </div>

        {/* Get Involved */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get Involved</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in making a difference. Whether you&apos;re an individual, organization, or community group, there are many ways to participate in our CSR initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Partner With Us
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSRPage;
