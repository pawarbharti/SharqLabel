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
    name: "Luxury Leather Bag",
    description: "High-quality leather bag perfect for daily use.",
    price: 199,
    image: "/images/bag1.jpg",
  },
  {
    id: 2,
    name: "Stylish Sneakers",
    description: "Comfortable and trendy sneakers for all occasions.",
    price: 129,
    image: "/images/shoes1.jpg",
  },
  {
    id: 3,
    name: "Elegant Watch",
    description: "Classic design watch with premium finish.",
    price: 299,
    image: "/images/watch1.jpg",
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    description: "Protect your eyes with style.",
    price: 99,
    image: "/images/sunglasses1.jpg",
  },
  {
    id: 5,
    name: "Casual T-Shirt",
    description: "Soft cotton t-shirt for everyday comfort.",
    price: 39,
    image: "/images/tshirt1.jpg",
  },
];

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = dummyProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-600">Search Products</h1>

      <div className="max-w-xl mx-auto mb-8 text-gray-600">
        <input
          type="text"
          placeholder="Search for products..."
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 text-gray-600"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-1">{product.description}</p>
              <p className="text-purple-600 font-bold mt-2">${product.price}</p>
              <button className="mt-3 w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
