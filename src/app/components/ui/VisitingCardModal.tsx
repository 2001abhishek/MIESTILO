'use client';

import React from 'react';
import Image from 'next/image';

interface VisitingCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VisitingCardModal: React.FC<VisitingCardModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm animate-fade-in-up"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative z-10 animate-pop-in">
        {/* Visiting Card */}
        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-md w-full mx-4">
          {/* Header with Company Branding */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-2xl font-bold tracking-wide mb-1">
                <span className="text-white">MIES</span>
                <span className="text-orange-100">TILO</span>
              </div>
              <div className="text-sm text-orange-100 font-medium">
                Miestilo Lifestyle Private Limited
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="px-8 py-8">
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Phone</div>
                  <div className="text-gray-900 font-semibold">+91 98765 43210</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Email</div>
                  <div className="text-gray-900 font-semibold">info@miestilo.com</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Address</div>
                  <div className="text-gray-900 font-semibold leading-relaxed">
                    123 Business District,<br />
                    Corporate Plaza, Floor 5,<br />
                    Mumbai, Maharashtra 400001
                  </div>
                </div>
              </div>

              {/* Website */}
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-medium">Website</div>
                  <div className="text-gray-900 font-semibold">www.miestilo.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-200 text-white hover:scale-110"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitingCardModal;
