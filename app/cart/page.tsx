// pages/cart.js (Next.js with Tailwind CSS)
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
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-500">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mb-4 sm:mb-0"
                  />
                  <div className="flex-1 sm:ml-6">
                    <h2 className="text-xl font-semibold text-gray-500">{item.name}</h2>
                    <p className="text-gray-500">{item.description}</p>
                    <p className="mt-2 font-bold text-gray-500">${item.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center space-x-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, -1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, 1)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="ml-4 text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <p className="text-2xl font-bold text-gray-500">
                Total: ${totalAmount.toFixed(2)}
              </p>
              <button className="mt-4 sm:mt-0 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
