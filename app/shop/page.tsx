"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  category: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: "$30",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Soft premium cotton t-shirt for everyday comfort.",
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "Oversized Graphic T-Shirt",
    price: "$35",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Trendy oversized t-shirt with bold graphic print.",
    category: "T-Shirts",
  },
  {
    id: 3,
    name: "Formal Slim Fit Shirt",
    price: "$55",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Elegant slim fit shirt perfect for formal occasions.",
    category: "Shirts",
  },
  {
    id: 4,
    name: "Casual Linen Shirt",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    description: "Breathable linen shirt ideal for summer styling.",
    category: "Shirts",
  },
];

const categories = ["All", "T-Shirts", "Shirts"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-gray-900 transition-colors duration-300">
      
      {/* Header */}
      <header className="bg-white dark:bg-gray-950 shadow-md py-8">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white tracking-wide">
            Shop
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Discover premium T-Shirts and Shirts curated for style.
          </p>

          {/* Category Buttons */}
          <div className="mt-6 flex justify-center flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white border-purple-600 shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-purple-100 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Products */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
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

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 col-span-full text-center mt-6">
              No products found in this category.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
