'use client';

import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ 
  size = 'md', 
  showText = true, 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Animated Brand Logo */}
      <div className="relative">
        {/* Pulsing background circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-orange-500/10 rounded-full animate-ping"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-orange-500/20 rounded-full animate-pulse"></div>
        </div>
        
        {/* Brand Logo */}
        <div className="relative z-10 flex items-center flex-shrink-0 p-8">
          <div className={`${sizeClasses[size]} font-bold tracking-wide animate-pulse`}>
            <span className="text-orange-500 animate-bounce" style={{ animationDelay: '0s' }}>M</span>
            <span className="text-orange-500 animate-bounce" style={{ animationDelay: '0.1s' }}>I</span>
            <span className="text-orange-500 animate-bounce" style={{ animationDelay: '0.2s' }}>E</span>
            <span className="text-orange-500 animate-bounce" style={{ animationDelay: '0.3s' }}>S</span>
            <span className="text-gray-900 animate-bounce" style={{ animationDelay: '0.4s' }}>T</span>
            <span className="text-gray-900 animate-bounce" style={{ animationDelay: '0.5s' }}>I</span>
            <span className="text-gray-900 animate-bounce" style={{ animationDelay: '0.6s' }}>L</span>
            <span className="text-gray-900 animate-bounce" style={{ animationDelay: '0.7s' }}>O</span>
          </div>
          
          {showText && (
            <div className={`ml-2 ${textSizeClasses[size]} leading-tight text-gray-500 animate-fade-in-up animation-delay-800`}>
              <div className="animate-pulse">Miestilo Lifestyle</div>
              <div className="animate-pulse animation-delay-200">Private Limited</div>
            </div>
          )}
        </div>
      </div>
      
      {/* Loading text */}
      <div className="mt-4 text-gray-600 text-sm animate-pulse">
        Loading...
      </div>
      
      {/* Loading dots */}
      <div className="flex space-x-1 mt-2">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

// Full screen loader variant
export const FullScreenLoader: React.FC<Omit<LoaderProps, 'className'>> = (props) => {
  return (
    <div className="fixed inset-0 bg-white/95 backdrop-blur-sm z-50 flex items-center justify-center">
      <Loader {...props} />
    </div>
  );
};

// Overlay loader variant
export const OverlayLoader: React.FC<LoaderProps> = (props) => {
  return (
    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-40">
      <Loader {...props} />
    </div>
  );
};

// Inline loader variant (smaller, for buttons or small sections)
export const InlineLoader: React.FC<Omit<LoaderProps, 'showText' | 'size'>> = ({ className = '' }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div className="flex items-center">
        <span className="text-sm font-bold text-orange-500 animate-pulse">MIES</span>
        <span className="text-sm font-bold text-gray-900 animate-pulse">TILO</span>
      </div>
      <div className="flex space-x-1">
        <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};

export default Loader;
