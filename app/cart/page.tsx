"use client";
import { useState } from "react";

const dummyCartItems = [
  {
    id: 1,
    name: "Stylish Sneakers",
    description: "Comfortable and trendy sneakers",
    price: 59.99,
    quantity: 1,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Leather Jacket",
    description: "Premium leather jacket for men",
    price: 199.99,
    quantity: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Smart Watch",
    description: "Fitness and notification tracker",
    price: 129.99,
    quantity: 1,
    image: "https://via.placeholder.com/150",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(dummyCartItems);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#0f172a] py-10 px-4 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Cart Items */}
        <div className="md:col-span-2 bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-slate-700">
          <h1 className="text-3xl font-bold mb-6">
            Your Cart ({cartItems.length})
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg">🛒 Your cart is empty.</p>
              <button className="mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-xl font-semibold">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-6 border-b border-slate-700 pb-6"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-xl border border-slate-600"
                  />

                  <div className="flex-1">
                    <h2 className="text-xl font-semibold">
                      {item.name}
                    </h2>

                    <p className="text-slate-400 text-sm mt-1">
                      {item.description}
                    </p>

                    <p className="mt-2 text-lg font-bold text-indigo-400">
                      ${item.price.toFixed(2)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="mt-3 flex items-center gap-3">
                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, -1)
                        }
                        disabled={item.quantity === 1}
                        className={`px-3 py-1 rounded border ${
                          item.quantity === 1
                            ? "bg-slate-800 text-slate-500 border-slate-700 cursor-not-allowed"
                            : "bg-slate-700 hover:bg-slate-600 border-slate-600"
                        }`}
                      >
                        -
                      </button>

                      <span className="font-medium">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          handleQuantityChange(item.id, 1)
                        }
                        className="px-3 py-1 bg-slate-700 hover:bg-slate-600 rounded border border-slate-600"
                      >
                        +
                      </button>

                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="ml-4 text-red-400 hover:text-red-500 text-sm"
                      >
                        Remove
                      </button>
                    </div>

                    <p className="mt-3 text-sm text-slate-400">
                      Subtotal: $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Summary */}
        {cartItems.length > 0 && (
          <div className="bg-[#1e293b] p-6 rounded-2xl shadow-lg border border-slate-700 h-fit sticky top-10">
            <h2 className="text-xl font-semibold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2 text-slate-400">
              <span>Subtotal</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-4 text-slate-400">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <hr className="my-4 border-slate-700" />

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-indigo-400">
                ${totalAmount.toFixed(2)}
              </span>
            </div>

            <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 transition py-3 rounded-xl font-semibold shadow-md">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
