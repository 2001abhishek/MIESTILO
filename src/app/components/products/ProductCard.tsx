'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    details: string;
  };
  isAuthenticated?: boolean;
  onDelete?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isAuthenticated = false, onDelete }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    router.push(`/pages/products/${product.id}`);
  };

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    
    if (!confirm(`Are you sure you want to delete "${product.name}"?`)) {
      return;
    }

    setIsDeleting(true);
    try {
      const response = await fetch(`/api/products/${product.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        onDelete?.(product.id);
      } else {
        const data = await response.json();
        alert(data.message || 'Failed to delete product');
      }
    } catch (error) {
      console.error('Delete error:', error);
      alert('Failed to delete product');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
    >
      {/* Product Image */}
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300"
        />
      </div>

      {/* Product Name - Always Visible */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">Click to view details</p>
      </div>

      {/* Hover Indicator */}
      <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity">
        View Details
      </div>

      {/* Delete Button - Only visible when authenticated */}
      {isAuthenticated && (
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="absolute top-4 left-4 w-8 h-8 bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 z-10"
          title="Delete Product"
        >
          {isDeleting ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default ProductCard;
