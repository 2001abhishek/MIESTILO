'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    details: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/pages/products/${product.id}`);
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
    </div>
  );
};

export default ProductCard;
