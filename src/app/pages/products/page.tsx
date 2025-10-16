'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FullScreenLoader } from '@/app/components/ui/Loader';
import ProductCard from '@/app/components/products/ProductCard';

interface Product {
  id: number;
  name: string;
  image: string;
  details: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleDeleteProduct = (deletedId: number) => {
    setProducts(prev => prev.filter(product => product.id !== deletedId));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        }
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    fetchProducts();
    checkAuth();
  }, []);

  if (loading) {
    return <FullScreenLoader size="lg" />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our premium collection of intimate wear and linen products
            </p>
          </div>
        </div>
      </div>

      {/* Products Gallery */}
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isAuthenticated={isAuthenticated}
                onDelete={handleDeleteProduct}
              />
            ))}
          </div>

          {products.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products available yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Product Button - Only show if authenticated */}
      {isAuthenticated && (
        <Link
          href="/pages/products/create"
          className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-800 hover:scale-110 transition-all duration-300 z-50"
          title="Add New Product"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default Products;
