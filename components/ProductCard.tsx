"use client";

import Image from 'next/image';
import { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { ShoppingBag, Check } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

const DISCOUNT_PERCENT = 10;

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, cart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const isInCart = cart.some((item) => item.id === product.id);

  // Ensure price is numeric
  const numericPrice =
    typeof product.price === "number"
      ? product.price
      : parseFloat(String(product.price).replace(/[^0-9.]/g, "")) || 0;

  const discountedPrice =
    numericPrice - (numericPrice * DISCOUNT_PERCENT) / 100;

  const handleAddToCart = () => {
    // Optional: send discounted price to cart
    addToCart({ ...product, price: discountedPrice });
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-pink-50 relative">
      {/* Discount badge */}
      <div className="absolute top-3 left-3 z-10 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow">
        {DISCOUNT_PERCENT}% OFF
      </div>

      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-pink-50 to-white">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-pink-600 text-xs font-semibold px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-lg text-gray-900 group-hover:text-pink-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col items-start">
            <span className="text-gray-400 text-sm line-through">
              ${numericPrice.toFixed(2)}
            </span>
            <span className="text-2xl font-bold text-green-600">
              ${discountedPrice.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isAdded
                ? 'bg-green-500 text-white'
                : isInCart
                ? 'bg-pink-100 text-pink-600 hover:bg-pink-200'
                : 'bg-pink-500 text-white hover:bg-pink-600'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="h-4 w-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
