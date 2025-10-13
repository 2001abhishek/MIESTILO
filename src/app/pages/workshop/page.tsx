import React from 'react';

const WorkshopPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Workshops & Training
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enhance your skills and knowledge with our comprehensive workshops designed to empower professionals and teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Skills</h3>
            <p className="text-gray-600 mb-4">
              Master the latest technologies and tools with hands-on training sessions led by industry experts.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Web Development</li>
              <li>• Data Analytics</li>
              <li>• Cloud Computing</li>
              <li>• Cybersecurity</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership</h3>
            <p className="text-gray-600 mb-4">
              Develop essential leadership skills to guide teams and drive organizational success.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Team Management</li>
              <li>• Strategic Planning</li>
              <li>• Communication</li>
              <li>• Decision Making</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Business Skills</h3>
            <p className="text-gray-600 mb-4">
              Build fundamental business acumen to excel in today's competitive marketplace.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Project Management</li>
              <li>• Digital Marketing</li>
              <li>• Financial Planning</li>
              <li>• Customer Relations</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Upcoming Workshops
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
              <div>
                <h4 className="font-semibold text-gray-900">Advanced React Development</h4>
                <p className="text-gray-600 text-sm">Learn modern React patterns and best practices</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">March 15, 2024</p>
                <p className="text-sm text-gray-500">2 days</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-white rounded-lg border">
              <div>
                <h4 className="font-semibold text-gray-900">Leadership Excellence</h4>
                <p className="text-gray-600 text-sm">Transform your leadership capabilities</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900">March 22, 2024</p>
                <p className="text-sm text-gray-500">3 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopPage;
