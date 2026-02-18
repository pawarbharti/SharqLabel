"use client";
import { useState } from "react";
import Image from "next/image";

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
}

const WishlistPage: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: 1,
      name: "Luxury Leather Handbag",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1600180758890-8f90e187a2d2?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Elegant Wrist Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1616597324182-b6f2b9d1d7b1?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Stylish Sunglasses",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1580910051070-fd47d3ebd1d1?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Designer Sneakers",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1618354691046-bc7f79f1f54d?auto=format&fit=crop&w=500&q=80",
    },
  ]);

  const handleRemove = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <p className="text-gray-500 text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow p-4 flex flex-col"
            >
              <div className="relative w-full h-60 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                {item.name}
              </h2>
              <p className="text-gray-500 mb-4">${item.price.toFixed(2)}</p>
              <button
                onClick={() => handleRemove(item.id)}
                className="mt-auto bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
