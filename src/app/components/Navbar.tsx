'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCompanyDropdownOpen, setIsCompanyDropdownOpen] = useState(false);
  const [isMobileCompanyDropdownOpen, setIsMobileCompanyDropdownOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past 100px
      if (currentScrollY > 100) {
        setIsScrolled(true);
        
        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, [pathname]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      router.push('/pages/home');
      router.refresh();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const navItems = [
    { name: 'Home', href: '/pages/home' },
   {name: 'About Us', href: '/pages/company/about-us'},
    { name: 'Workshop', href: '/pages/workshop' },
    { name: 'Why Us', href: '/pages/why-us' },
    { name: 'Our Customers', href: '/pages/our-customers' },
    // { name: 'CSR', href: '/pages/csr' },
    { name: 'Blog', href: '/pages/blog' },
    { name: 'Products', href: '/pages/products' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCompanyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 py-2 sm:py-4 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg' 
          : 'bg-transparent border-b border-white/10'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-8">
            {/* Brand Logo - Outside Left */}
            <div className="flex items-center flex-shrink-0">
              <div className="text-lg sm:text-2xl font-bold tracking-wide">
                <span className="text-orange-500">MIES</span>
                <span className={isScrolled ? 'text-gray-900' : 'text-white'}>TILO</span>
              </div>
              <div className={`ml-1 sm:ml-2 text-xs leading-tight hidden sm:block ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>
                <div>Miestilo Lifestyle</div>
                <div>Private Limited</div>
              </div>
            </div>

            {/* Desktop Navigation Container with Border */}
            <div className="flex-1 hidden lg:block">
              <nav className="border border-white/20 bg-white/10 backdrop-blur-sm shadow-sm rounded-full">
                <div className="flex justify-between items-center px-6 py-3">
                  {/* Navigation Links - Centered */}
                  <div className="flex-1 flex justify-center">
                    <div className="flex space-x-6">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={cn(
                            'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full',
                            pathname === item.href
                              ? isScrolled 
                                ? 'bg-gray-100 text-gray-900'
                                : 'bg-white/20 text-white'
                              : isScrolled
                                ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                : 'text-gray-100 hover:text-white hover:bg-white/10'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                      
                      {/* Login/Logout Button */}
                      {isAuthenticated ? (
                        <button
                          onClick={handleLogout}
                          className="px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        >
                          Logout
                        </button>
                      ) : (
                        <Link
                          href="/pages/auth/login"
                          className={cn(
                            'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full',
                            pathname === '/pages/auth/login'
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          )}
                        >
                          Login
                        </Link>
                      )}
                    </div>
                  </div>

                  {/* Get in Touch Button */}
                  <div className="flex-shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
                    >
                      Get in Touch
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden ml-auto">
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </Link>
              <button
                onClick={toggleMobileMenu}
                className={`p-2 rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white hover:text-gray-200 hover:bg-white/10'
                } ${
                  isMobileMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'
                }`}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
                <div className="relative w-6 h-6">
                  {/* Hamburger Lines */}
                  <span className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'
                  }`} />
                  <span className={`absolute left-0 top-3 w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`} />
                  <span className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'
                  }`} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Backdrop */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? 'bg-opacity-60' : 'bg-opacity-0'
          }`}
          onClick={closeMobileMenu}
        ></div>
        
        {/* Sidebar */}
        <div className={`fixed top-0 right-0 bottom-0 w-80 bg-white shadow-2xl transform transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-gray-50">
            <div className="text-xl font-bold animate-fade-in-left">
              <span className="text-orange-500">MIES</span>
              <span className="text-gray-900">TILO</span>
              <div className="text-xs text-gray-500 font-normal mt-1">Miestilo Lifestyle Pvt Ltd</div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-white/80 transition-all duration-200 hover:rotate-90 animate-pop-in"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <div className="px-6 space-y-3">
             {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    'group flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-right',
                    pathname === item.href
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 hover:shadow-md'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="flex-1">{item.name}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${
                      pathname === item.href ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'
                    } group-hover:translate-x-1`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
              
              {/* Divider */}
              <div className="my-6 border-t border-gray-200"></div>
              
              {/* Mobile Login/Logout Button */}
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    handleLogout();
                    closeMobileMenu();
                  }}
                  className="group flex items-center w-full px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 text-red-600 hover:text-red-700 hover:bg-red-50 hover:shadow-md transform hover:scale-105 animate-fade-in-right animation-delay-600"
                >
                  <svg className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="flex-1 text-left">Logout</span>
                </button>
              ) : (
                <Link
                  href="/pages/auth/login"
                  onClick={closeMobileMenu}
                  className={cn(
                    'group flex items-center px-4 py-4 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-right animation-delay-600',
                    pathname === '/pages/auth/login'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                      : 'text-blue-600 hover:text-blue-700 hover:bg-blue-50 hover:shadow-md'
                  )}
                >
                  <svg className={`w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12 ${
                    pathname === '/pages/auth/login' ? 'text-white' : 'text-blue-500'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span className="flex-1 text-left">Login</span>
                </Link>
              )}
            </div>
          </nav>
          
          {/* Footer */}
          <div className="p-6 border-t border-gray-200 bg-gray-50">
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="group flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-black to-gray-800 text-white text-base font-medium rounded-xl hover:from-gray-800 hover:to-black transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-pop-in animation-delay-800"
            >
              <svg className="w-5 h-5 mr-3 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get in Touch
              <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
