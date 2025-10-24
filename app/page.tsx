"use client";

import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Sparkles, Award, ShieldCheck, Truck } from 'lucide-react';

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <section className="relative bg-gradient-to-br from-pink-50 via-white to-pink-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0ZDRTdGMyIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Premium Beauty Collection
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Enhance Your
                <span className="block bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                  Natural Beauty
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Discover our curated collection of premium cosmetics and skincare products.
                Quality ingredients, stunning results, and a touch of luxury in every product.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="bg-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="bg-white text-pink-500 px-8 py-3 rounded-lg font-medium hover:bg-pink-50 transition-colors border-2 border-pink-200"
                >
                  Learn More
                </Link>
              </div>
            </div>

            <div className="relative h-[500px] hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-200 rounded-3xl transform -rotate-3"></div>
              <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Beauty Products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-y border-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Award className="h-6 w-6 text-pink-500" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Premium Quality</h3>
              <p className="text-sm text-gray-600">Luxury ingredients</p>
            </div>

            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="bg-pink-100 p-3 rounded-full">
                  <ShieldCheck className="h-6 w-6 text-pink-500" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Cruelty Free</h3>
              <p className="text-sm text-gray-600">Never tested on animals</p>
            </div>

            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Truck className="h-6 w-6 text-pink-500" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>

            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <div className="bg-pink-100 p-3 rounded-full">
                  <Sparkles className="h-6 w-6 text-pink-500" />
                </div>
              </div>
              <h3 className="font-semibold text-gray-900">Natural Glow</h3>
              <p className="text-sm text-gray-600">Visible results</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of bestselling beauty essentials
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-pink-100 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Skincare"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-12 flex flex-col justify-center space-y-6">
                <h2 className="text-4xl font-bold text-gray-900">
                  Join Our Beauty Community
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Subscribe to our newsletter and get exclusive access to new product launches,
                  beauty tips, and special offers. Be the first to know about our latest collections.
                </p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-400"
                  />
                  <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-pink-600 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
