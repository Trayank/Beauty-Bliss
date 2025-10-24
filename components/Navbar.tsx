"use client";

import Link from 'next/link';
import { ShoppingBag, Menu, X, Sparkles } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';

export default function Navbar() {
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-pink-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <Sparkles className="h-7 w-7 text-pink-400 group-hover:text-pink-500 transition-colors" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Beauty Bliss
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Shop
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors font-medium">
              Contact
            </Link>
            <Link href="/cart" className="relative">
              <div className="p-2 hover:bg-pink-50 rounded-full transition-colors">
                <ShoppingBag className="h-6 w-6 text-gray-700 hover:text-pink-500 transition-colors" />
                {getCartCount() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </div>
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:bg-pink-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-pink-100">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-pink-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block py-2 text-gray-700 hover:text-pink-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-pink-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block py-2 text-gray-700 hover:text-pink-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="flex items-center py-2 text-gray-700 hover:text-pink-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Cart {getCartCount() > 0 && `(${getCartCount()})`}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
