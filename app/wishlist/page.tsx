"use client";
import { useState } from "react";
import Image from "next/image";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 39.99,
      image:
         "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      name: "Slim Fit Formal Shirt",
      price: 79.99,
      image:
         "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Oversized Street T-Shirt",
      price: 45.99,
      image:
         "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      name: "Casual Linen Shirt",
      price: 89.99,
      image:
        "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?auto=format&fit=crop&w=800&q=80",
    },
  ]);

  const handleRemove = (id: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-black dark:to-gray-900 transition-colors duration-300 p-6">
      
      {/* Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          My Wishlist
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Your saved favorites, ready when you are.
        </p>
      </div>

      {/* Empty State */}
      {wishlistItems.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Your wishlist is empty.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Start adding your favorite pieces.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative w-full h-60 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.name}
                </h2>

                <p className="text-purple-600 font-bold mt-2 text-lg">
                  ${item.price.toFixed(2)}
                </p>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-auto bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-300"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
