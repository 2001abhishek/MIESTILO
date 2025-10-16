'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <div className="text-2xl font-bold tracking-wide">
                <span className="text-orange-500">MIES</span>
                <span className="text-white">TILO</span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                CE & ISO 9001 : 2015 Certified Company
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-3 mb-4">
              <div className="w-6 h-6 flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="text-sm text-gray-300 leading-relaxed">
                Corporate Office No 328, 29, 30, 3rd Floor, Dariyalal Square,
                <br />
                Above Axis Bank, Morbil-Bailkot Highway, At: Sanala,
                <br />
                Morbi - Pin: 363641 Gujarat, INDIA.
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">To Make Inquiry</div>
                  <div className="text-sm text-white font-medium">+91 931-608-1913</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-400">To Send Mail</div>
                  <div className="text-sm text-white font-medium">export@miestilo.in</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pages/workshop" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/pages/our-customers" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Our Customers
                </Link>
              </li>
              <li>
                <Link href="/pages/contact" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <ul className="space-y-3">
                <li>
                  <Link href="/pages/about" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/pages/why-us" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                    Why Us
                  </Link>
                </li>
                <li>
                  <Link href="/pages/csr" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                    CSR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Our Products */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/pages/products" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Ceramics & Bathware
                </Link>
              </li>
              <li>
                <Link href="/pages/products" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Wall Clocks & Gift Items
                </Link>
              </li>
              <li>
                <Link href="/pages/products" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Rubber Mats & Other Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">More</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/pages/blog" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pages/products" className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.linkedin.com/in/abhishek-ray-6ab2581a9/" className="text-sm text-gray-300 hover:text-orange-400 transition-colors ">
                  Credit
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              Copyright 2024 Miestilo Group all rights reserved.
            </div>
            <div className="text-sm text-gray-400">
              Powered By MikroMedia Digital Marketing Agency
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
