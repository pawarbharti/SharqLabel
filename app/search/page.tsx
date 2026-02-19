"use client";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const dummyProducts: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    description: "Soft cotton tee crafted for everyday comfort.",
    price: 39,
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Slim Fit Formal Shirt",
    description: "Tailored shirt perfect for business occasions.",
    price: 79,
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Oversized Street T-Shirt",
    description: "Relaxed fit with bold modern aesthetic.",
    price: 45,
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Casual Linen Shirt",
    description: "Breathable linen fabric for summer styling.",
    price: 89,
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Minimal Black T-Shirt",
    description: "Classic black essential with premium finish.",
    price: 35,
    image: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
  },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-gray-900 transition-colors duration-300 p-6">
      
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Search Products
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Find your perfect T-Shirt or Shirt instantly.
        </p>
      </div>

      {/* Search Input */}
      <div className="max-w-xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-600 shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Products Grid */}
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
                className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {product.name}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                {product.description}
              </p>

              <p className="text-purple-600 font-bold mt-3 text-lg">
                ${product.price}
              </p>

              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center py-16">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No products found.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Try searching with a different keyword.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
