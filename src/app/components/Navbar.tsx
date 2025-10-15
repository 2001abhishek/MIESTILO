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
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    { 
      name: 'Company', 
      href: '/pages/company',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/pages/company/about-us' },
        { name: 'Dealership', href: '/pages/company/dealership' },
      ]
    },
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
      <div className="w-full bg-white py-2 sm:py-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-8">
            {/* Brand Logo - Outside Left */}
            <div className="flex items-center flex-shrink-0">
              <div className="text-lg sm:text-2xl font-bold tracking-wide">
                <span className="text-orange-500">MIES</span>
                <span className="text-gray-900">TILO</span>
              </div>
              <div className="ml-1 sm:ml-2 text-xs text-gray-500 leading-tight hidden sm:block">
                <div>Miestilo Lifestyle</div>
                <div>Private Limited</div>
              </div>
            </div>

            {/* Desktop Navigation Container with Border */}
            <div className="flex-1 hidden lg:block">
              <nav className="border border-gray-200 bg-white shadow-sm">
                <div className="flex justify-between items-center px-6 py-3">
                  {/* Navigation Links - Centered */}
                  <div className="flex-1 flex justify-center">
                    <div className="flex space-x-6">
                      {navItems.map((item) => (
                        <div key={item.name} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                          {item.hasDropdown ? (
                            <div>
                              <button
                                onClick={() => setIsCompanyDropdownOpen(!isCompanyDropdownOpen)}
                                className={cn(
                                  'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full flex items-center',
                                  pathname.startsWith('/pages/company')
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                )}
                              >
                                {item.name}
                                <svg 
                                  className={cn(
                                    'ml-1 w-4 h-4 transition-transform duration-200',
                                    isCompanyDropdownOpen ? 'rotate-180' : ''
                                  )}
                                  fill="none" 
                                  stroke="currentColor" 
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </button>
                              
                              {/* Dropdown Menu */}
                              {isCompanyDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                  <div className="py-2">
                                    {item.dropdownItems?.map((dropdownItem) => (
                                      <Link
                                        key={dropdownItem.name}
                                        href={dropdownItem.href}
                                        onClick={() => setIsCompanyDropdownOpen(false)}
                                        className={cn(
                                          'block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200',
                                          pathname === dropdownItem.href ? 'bg-gray-50 text-gray-900' : ''
                                        )}
                                      >
                                        {dropdownItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className={cn(
                                'px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full',
                                pathname === item.href
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
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
                className="inline-flex items-center px-4 py-2 bg-black text-white text-xs font-medium rounded-full hover:bg-gray-800 transition-colors duration-200"
              >
                Contact
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50" 
            onClick={closeMobileMenu}
          ></div>
          
          {/* Sidebar */}
          <div className="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="text-lg font-bold">
                <span className="text-orange-500">MIES</span>
                <span className="text-gray-900">TILO</span>
              </div>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="mt-4">
              <div className="px-4 space-y-2">
                {navItems.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setIsMobileCompanyDropdownOpen(!isMobileCompanyDropdownOpen)}
                          className={cn(
                            'w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200',
                            pathname.startsWith('/pages/company')
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                          )}
                        >
                          {item.name}
                          <svg 
                            className={cn(
                              'w-5 h-5 transition-transform duration-200',
                              isMobileCompanyDropdownOpen ? 'rotate-180' : ''
                            )}
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        
                        {/* Mobile Dropdown Items */}
                        {isMobileCompanyDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-1">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={dropdownItem.href}
                                onClick={closeMobileMenu}
                                className={cn(
                                  'block px-4 py-2 text-sm rounded-lg transition-colors duration-200',
                                  pathname === dropdownItem.href
                                    ? 'bg-gray-100 text-gray-900'
                                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                )}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className={cn(
                          'block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200',
                          pathname === item.href
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        )}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Login/Logout Button */}
                {isAuthenticated ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      closeMobileMenu();
                    }}
                    className="block w-full text-left px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/pages/auth/login"
                    onClick={closeMobileMenu}
                    className={cn(
                      'block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200',
                      pathname === '/pages/auth/login'
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    )}
                  >
                    Login
                  </Link>
                )}
              </div>
              
              <div className="mt-6 px-4">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center px-4 py-3 bg-black text-white text-base font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
