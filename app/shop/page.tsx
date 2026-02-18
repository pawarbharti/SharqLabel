"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";

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
    name: "Luxury Leather Bag",
    price: "$120",
    image:
      "https://images.unsplash.com/photo-1600185363484-b0b746ff20c2?auto=format&fit=crop&w=500&q=80",
    description: "Elegant and premium leather bag perfect for daily use.",
    category: "Bags",
  },
  {
    id: 2,
    name: "Stylish Sunglasses",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1586864387333-1f0e1b48eb94?auto=format&fit=crop&w=500&q=80",
    description: "Trendy sunglasses to keep you stylish under the sun.",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Smartwatch Series 5",
    price: "$250",
    image:
      "https://images.unsplash.com/photo-1579660684393-1b9f7a3d2c17?auto=format&fit=crop&w=500&q=80",
    description: "Stay connected with the latest smartwatch technology.",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Elegant Sneakers",
    price: "$90",
    image:
      "https://images.unsplash.com/photo-1618354698195-3ed08e9e8a1b?auto=format&fit=crop&w=500&q=80",
    description: "Comfortable sneakers with a sleek modern design.",
    category: "Shoes",
  },
  {
    id: 5,
    name: "Classic Watch",
    price: "$180",
    image:
      "https://images.unsplash.com/photo-1519648023493-d82b5f8d7b9a?auto=format&fit=crop&w=500&q=80",
    description: "Timeless watch with a leather strap and metal finish.",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Denim Jacket",
    price: "$70",
    image:
      "https://images.unsplash.com/photo-1593032465177-fb217e9c6da0?auto=format&fit=crop&w=500&q=80",
    description: "Stylish denim jacket perfect for casual outings.",
    category: "Clothing",
  },
];

const categories = ["All", "Bags", "Accessories", "Electronics", "Shoes", "Clothing"];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold text-gray-800">Shop</h1>
          <p className="text-gray-600 mt-2">
            Browse all our products and find your favorite items!
          </p>

          {/* Category Filter */}
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full border transition ${
                  selectedCategory === category
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-purple-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-gray-600 mt-1">{product.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-gray-800 font-bold">{product.price}</span>
                  <button className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 col-span-full text-center mt-6">
              No products found in this category.
            </p>
          )}
        </div>
      </main>
    </div>
  );
};

export default ShopPage;
