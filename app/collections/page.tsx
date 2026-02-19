"use client";
import React from "react";

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
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
    description: "Soft premium cotton tee crafted for everyday comfort.",
    category: "T-Shirts",
  },
  {
    id: 2,
    name: "Oversized Street T-Shirt",
    price: "$38",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
    description: "Relaxed oversized fit with bold street aesthetic.",
    category: "T-Shirts",
  },
  {
    id: 3,
    name: "Minimal Black T-Shirt",
    price: "$28",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
    description: "Classic black essential tee with premium finish.",
    category: "T-Shirts",
  },
  {
    id: 4,
    name: "Slim Fit Formal Shirt",
    price: "$55",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
    description: "Tailored slim fit shirt perfect for formal occasions.",
    category: "Shirts",
  },
  {
    id: 5,
    name: "Casual Linen Shirt",
    price: "$60",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
    description: "Breathable linen shirt for effortless summer style.",
    category: "Shirts",
  },
  {
    id: 6,
    name: "Striped Casual Shirt",
    price: "$52",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?auto=format&fit=crop&w=800&q=80",
    description: "Modern striped design for smart-casual styling.",
    category: "Shirts",
  },
];

export default function CollectionsPage() {
  const tshirts = products.filter((p) => p.category === "T-Shirts");
  const shirts = products.filter((p) => p.category === "Shirts");

  const renderGrid = (items: Product[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {items.map((product) => (
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
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-gray-900 transition-colors duration-300">
      
      {/* Header */}
      <header className="py-14 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white tracking-wide">
          Collections
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Explore curated T-Shirts and Shirts designed for modern style.
        </p>
      </header>

      <main className="container mx-auto px-6 pb-16 space-y-16">
        
        {/* T-Shirts Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            T-Shirts Collection
          </h2>
          {renderGrid(tshirts)}
        </section>

        {/* Shirts Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
            Shirts Collection
          </h2>
          {renderGrid(shirts)}
        </section>

      </main>
    </div>
  );
}
