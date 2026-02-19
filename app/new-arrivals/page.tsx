"use client";
import React from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: "$30",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Soft premium cotton t-shirt crafted for everyday comfort.",
  },
  {
    id: 2,
    name: "Oversized Graphic T-Shirt",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Bold street-style oversized tee with graphic print.",
  },
  {
    id: 3,
    name: "Formal Slim Fit Shirt",
    price: "$55",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Sharp tailored shirt for formal and business wear.",
  },
  {
    id: 4,
    name: "Casual Linen Shirt",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Breathable summer linen shirt with relaxed fit.",
  },
  {
    id: 5,
    name: "Minimal Black T-Shirt",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Classic black tee with premium fabric finish.",
  },
  {
    id: 6,
    name: "Striped Casual Shirt",
    price: "$52",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Modern striped shirt designed for smart casual styling.",
  },
];

export default function NewArrivalsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-gray-900 transition-colors duration-300">
      
      {/* Header */}
      <header className="bg-white dark:bg-gray-950 shadow-md py-10">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white tracking-wide">
            New Arrivals
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-3">
            Fresh styles just dropped. Elevate your wardrobe today.
          </p>
        </div>
      </header>

      {/* Products Grid */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {product.name}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white font-bold text-lg">
                    {product.price}
                  </span>

                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
