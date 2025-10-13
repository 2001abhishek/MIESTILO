import React from 'react';

const DealershipPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Dealership Opportunities
          </h1>
          
          <div className="text-center mb-12">
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the Miestilo family and become a part of our growing network of authorized dealers. 
              Expand your business with our premium interior design solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Partner With Us?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Established Brand</h3>
                    <p className="text-gray-600">
                      Partner with a recognized name in the interior design industry with a proven track record.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Support</h3>
                    <p className="text-gray-600">
                      Get complete training, marketing support, and ongoing assistance to grow your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Products</h3>
                    <p className="text-gray-600">
                      Access to premium quality furniture, fixtures, and design solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold">✓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Profitable Returns</h3>
                    <p className="text-gray-600">
                      Competitive margins and multiple revenue streams to maximize your profitability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Dealership Benefits</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium text-gray-900">Initial Investment</span>
                  <span className="text-orange-600 font-semibold">Flexible Options</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium text-gray-900">Territory Rights</span>
                  <span className="text-orange-600 font-semibold">Exclusive Areas</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium text-gray-900">Training Program</span>
                  <span className="text-orange-600 font-semibold">Comprehensive</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium text-gray-900">Marketing Support</span>
                  <span className="text-orange-600 font-semibold">Full Support</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                  <span className="font-medium text-gray-900">ROI Timeline</span>
                  <span className="text-orange-600 font-semibold">12-18 Months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Requirements Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
              Dealership Requirements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Space Requirements</h3>
                <p className="text-gray-600 text-sm">Minimum 1000 sq ft showroom space in prime location</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Investment Capacity</h3>
                <p className="text-gray-600 text-sm">Financial capability for initial setup and working capital</p>
              </div>
              <div className="text-center p-6 border border-gray-200 rounded-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Team & Experience</h3>
                <p className="text-gray-600 text-sm">Dedicated team with sales and customer service experience</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-orange-500 to-gray-900 rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-orange-100 mb-6">
              Take the first step towards a profitable partnership with Miestilo Lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Apply Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealershipPage;
