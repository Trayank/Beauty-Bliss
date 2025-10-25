"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CartBar() {
  const { cart } = useCart();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  // Calculate total
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = subtotal * 0.9; // 10% off

  // Show bar only if cart is not empty
  useEffect(() => {
    setIsVisible(cart.length > 0);
  }, [cart]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-pink-600 text-white py-3 px-5 flex items-center justify-between shadow-lg z-50">
      <div>
        <p className="font-semibold text-base">
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </p>
        <p className="text-sm text-white/90">Total: ₹{discountedTotal.toFixed(2)}</p>
      </div>

      <button
        onClick={() => router.push("/cart")}
        className="bg-white text-pink-600 px-5 py-2 rounded-full font-medium hover:bg-pink-100 transition-all"
      >
        Go to Checkout →
      </button>
    </div>
  );
}
