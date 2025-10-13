import React from 'react';

const CompanyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            About Our Company
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a vision to transform businesses through innovative solutions, our company has been at the forefront of technological advancement for over a decade. We believe in creating value through excellence, integrity, and continuous innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with cutting-edge solutions that drive growth, efficiency, and success in an ever-evolving digital landscape.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading provider of innovative business solutions, recognized for our commitment to excellence and customer success.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2">Excellence:</span>
                  We strive for the highest quality in everything we do.
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2">Innovation:</span>
                  We embrace new ideas and technologies to stay ahead.
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2">Integrity:</span>
                  We conduct business with honesty and transparency.
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-900 mr-2">Collaboration:</span>
                  We work together to achieve common goals.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
