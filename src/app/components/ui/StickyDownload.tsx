'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const StickyDownload = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [pdfFiles, setPdfFiles] = useState<string[]>([]);

  useEffect(() => {
    // Fetch available PDF files from the profile_pdf directory
    const fetchPdfFiles = async () => {
      try {
        const response = await fetch('/api/pdf-files');
        if (response.ok) {
          const data = await response.json();
          setPdfFiles(data.files || []);
        }
      } catch (error) {
        console.error('Error fetching PDF files:', error);
      }
    };

    fetchPdfFiles();
  }, []);

  const handleDownload = () => {
    if (pdfFiles.length > 0) {
      // Download the first available PDF file
      const link = document.createElement('a');
      link.href = `/profile_pdf/${pdfFiles[0]}`;
      link.download = pdfFiles[0];
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className="relative cursor-pointer group w-20 h-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleDownload}
      >
        {/* Rotating Text Circle */}
        <div className="absolute inset-0 w-20 h-20 animate-rotate-text-slow">
          <svg
            className="w-full h-full"
            viewBox="0 0 80 80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <path
                id="textCircle"
                d="M 40 40 m -32 0 a 32 32 0 1 1 64 0 a 32 32 0 1 1 -64 0"
              />
            </defs>
            <text 
              fill="#374151" 
              fontSize="9" 
              fontWeight="700" 
              letterSpacing="0.5" 
              fontFamily="system-ui, -apple-system, sans-serif"
            >
              <textPath href="#textCircle" startOffset="0%">
                _____DOWNLOAD_____COMPANY_____PROFILE_____ 
              </textPath>
            </text>
          </svg>
        </div>

        {/* Center Icon Container */}
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'scale-105 shadow-xl border-orange-300' : ''
        }`}>
          <div className={`transition-transform duration-300 ${
            isHovered ? 'scale-110' : ''
          }`}>
            <Image
              src="/footer-circle-shape-2.png"
              alt="Download Profile"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Hover Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap animate-fade-in-up shadow-lg">
            Download Company Profile
            <div className="absolute top-full right-4 w-0 h-0 border-l-3 border-r-3 border-t-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StickyDownload;
