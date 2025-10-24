"use client";

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Skincare', 'Makeup'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-5xl font-bold text-gray-900">Our Collection</h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Browse our complete range of premium beauty products
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-pink-500 text-white shadow-lg shadow-pink-200'
                  : 'bg-white text-gray-700 hover:bg-pink-50 border-2 border-pink-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-6 text-center text-gray-600">
          Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
