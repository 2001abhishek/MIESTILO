import React from 'react';

const OurCustomersPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Valued Customers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with industry leaders and innovative companies across various sectors.
          </p>
        </div>

        {/* Customer Logos Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Trusted by Leading Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-24">
                <span className="text-gray-400 font-medium">Company {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Exceptional service and innovative solutions. They transformed our business operations completely."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">CEO, TechCorp</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Professional team with deep expertise. They delivered exactly what we needed, on time and on budget."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-500">CTO, InnovateLab</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="mb-4">
                <div className="flex text-yellow-400 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Outstanding support and cutting-edge solutions. Highly recommend their services."
                </p>
                <div>
                  <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                  <p className="text-sm text-gray-500">Director, GlobalTech</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Sectors */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Technology</h3>
              <p className="text-gray-600 text-sm">Software companies, startups, and tech enterprises</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600 text-sm">Hospitals, clinics, and medical device companies</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Finance</h3>
              <p className="text-gray-600 text-sm">Banks, fintech, and financial service providers</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Retail</h3>
              <p className="text-gray-600 text-sm">E-commerce, retail chains, and consumer brands</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Join Our Growing Family of Satisfied Customers
          </h2>
          <p className="text-gray-600 mb-6">
            Ready to transform your business? Let's discuss how we can help you achieve your goals.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Become Our Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurCustomersPage;
