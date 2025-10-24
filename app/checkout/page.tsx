"use client";

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/navigation';

const DISCOUNT_PERCENT = 10;

export default function CheckoutPage() {
  const { cart, getCartTotalWithDiscount, clearCart } = useCart();
  const router = useRouter();

  // Fallback if CartContext doesn't provide getCartTotalWithDiscount, compute here:
  const computeTotal = () => {
    const subtotal = cart.reduce((s, it) => s + it.price * it.quantity, 0);
    return +(subtotal * (1 - DISCOUNT_PERCENT / 100)).toFixed(2);
  };

  const total = (typeof getCartTotalWithDiscount === 'function') ? getCartTotalWithDiscount() : computeTotal();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    postal: '',
    payment: 'cod',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs: any = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.address) errs.address = 'Address required';
    if (!form.city) errs.city = 'City required';
    if (!form.postal) errs.postal = 'Postal code required';
    return errs;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // Construct order payload (here we simply show confirmation)
    const order = {
      id: 'ORD' + Date.now(),
      customer: form,
      items: cart,
      total,
      createdAt: new Date().toISOString(),
    };

    // In a real app you would send `order` to backend.
    console.log('Order placed:', order);
    setSubmitted(true);
    clearCart && clearCart();

    // Optionally redirect to a thank you page after brief delay
    setTimeout(() => {
      router.push('/');
    }, 3000);
  };

  if (cart.length === 0 && !submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="text-gray-600">Add items to your cart before checking out.</p>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-xl bg-white p-8 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4">Thank you — order received!</h2>
          <p className="text-gray-600">We received your order and will contact you at the provided email.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded">
            <div>
              <label className="block text-sm font-medium">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
              {errors.name && <div className="text-red-600 text-sm">{errors.name}</div>}
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
              {errors.email && <div className="text-red-600 text-sm">{errors.email}</div>}
            </div>
            <div>
              <label className="block text-sm font-medium">Address</label>
              <textarea name="address" value={form.address} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
              {errors.address && <div className="text-red-600 text-sm">{errors.address}</div>}
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Postal / ZIP</label>
                <input name="postal" value={form.postal} onChange={handleChange} className="mt-1 block w-full rounded border p-2" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Payment Method</label>
              <select name="payment" value={form.payment} onChange={handleChange} className="mt-1 block w-full rounded border p-2">
                <option value="cod">Cash on Delivery</option>
                <option value="upi">UPI</option>
                <option value="card">Card (test)</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded">Place Order</button>
          </form>

          <aside className="bg-gray-100 p-6 rounded">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3">
              {cart.map((it: any) => (
                <div key={it.id} className="flex justify-between">
                  <div>
                    <div className="font-medium">{it.name} x{it.quantity}</div>
                    <div className="text-sm text-gray-600">₹{it.price.toFixed(2)} each</div>
                  </div>
                  <div className="font-semibold">₹{(it.price * it.quantity * (1 - DISCOUNT_PERCENT/100)).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 border-t pt-4">
              <div className="flex justify-between text-gray-600">
                <div>Subtotal</div>
                <div>₹{cart.reduce((s:any, it:any) => s + it.price * it.quantity, 0).toFixed(2)}</div>
              </div>
              <div className="flex justify-between text-gray-600">
                <div>Discount ({DISCOUNT_PERCENT}%)</div>
                <div>- ₹{(cart.reduce((s:any, it:any) => s + it.price * it.quantity, 0) * (DISCOUNT_PERCENT/100)).toFixed(2)}</div>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <div>Total</div>
                <div>₹{total.toFixed(2)}</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}