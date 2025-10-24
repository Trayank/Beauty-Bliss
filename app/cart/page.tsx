"use client";

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const DISCOUNT_PERCENT = 10; // Global discount percentage applied to all products

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const applyDiscount = (price: number) => {
    return +(price * (1 - DISCOUNT_PERCENT / 100)).toFixed(2);
  };

  const getCartTotalWithDiscount = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return +(total * (1 - DISCOUNT_PERCENT / 100)).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center">
        <div className="text-center space-y-6 px-4">
          <div className="flex justify-center">
            <div className="bg-pink-100 p-8 rounded-full">
              <ShoppingBag className="h-10 w-10 text-pink-600" />
            </div>
          </div>
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="text-gray-600">Add products from the shop to see them here.</p>
          <Link href="/shop" className="inline-block bg-pink-600 text-white px-6 py-2 rounded-md">
            Go to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                <div className="w-28 h-28 relative">
                  <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} className="rounded-md" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="flex items-center border rounded-md">
                      <button className="px-3" onClick={() => updateQuantity(item.id, item.quantity - 1)}><Minus /></button>
                      <div className="px-4">{item.quantity}</div>
                      <button className="px-3" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus /></button>
                    </div>
                    <button className="p-2" onClick={() => removeFromCart(item.id)} title="Remove"><Trash2 /></button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500">Original</div>
                  <div className="font-semibold">₹{(item.price * item.quantity).toFixed(2)}</div>
                  <div className="text-sm text-green-600">{DISCOUNT_PERCENT}% off</div>
                  <div className="mt-2 text-lg font-bold">₹{(applyDiscount(item.price) * item.quantity).toFixed(2)}</div>
                </div>
              </div>
            ))}
          </div>

          <aside className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-gray-600 mb-2">
              <div>Subtotal</div>
              <div>₹{getCartTotal().toFixed(2)}</div>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <div>Discount ({DISCOUNT_PERCENT}%)</div>
              <div>- ₹{(getCartTotal() - getCartTotalWithDiscount()).toFixed(2)}</div>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <div>Total</div>
              <div>₹{getCartTotalWithDiscount().toFixed(2)}</div>
            </div>

            <div className="mt-6 space-y-3">
              <Link href="/checkout" className="block w-full text-center bg-pink-600 text-white px-4 py-2 rounded-md">Proceed to Checkout</Link>
              <button onClick={() => clearCart()} className="w-full border py-2 rounded-md">Clear Cart</button>
            </div>

            <div className="mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                30-day money-back guarantee
              </div>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Secure checkout
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}