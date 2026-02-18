// app/collections/page.tsx
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
    name: "Classic Leather Jacket",
    price: "$120",
    image: "https://via.placeholder.com/300x300.png?text=Jacket",
    description: "High-quality leather jacket for men and women.",
  },
  {
    id: 2,
    name: "Elegant Watch",
    price: "$80",
    image: "https://via.placeholder.com/300x300.png?text=Watch",
    description: "Stylish watch with premium leather strap.",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    price: "$60",
    image: "https://via.placeholder.com/300x300.png?text=Sneakers",
    description: "Comfortable sneakers for daily wear.",
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: "$50",
    image: "https://via.placeholder.com/300x300.png?text=Jeans",
    description: "Classic blue denim jeans with a modern fit.",
  },
  {
    id: 5,
    name: "Summer Dress",
    price: "$70",
    image: "https://via.placeholder.com/300x300.png?text=Dress",
    description: "Light and comfortable summer dress.",
  },
];

const CollectionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">{product.price}</span>
                <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsPage;
