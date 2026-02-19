"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-14">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold tracking-wider text-gray-900 dark:text-white">
              SHARQ LABEL
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Modern luxury fashion crafted for confidence and everyday elegance.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
              Shop
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
              <li>
                <Link href="/shop" className="hover:text-purple-600 transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/new-arrivals" className="hover:text-purple-600 transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-purple-600 transition">
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400 text-sm">
              <li>
                <Link href="/account" className="hover:text-purple-600 transition">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-purple-600 transition">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-purple-600 transition">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-900 dark:text-white mb-4">
              Follow Us
            </h3>
            <div className="flex gap-5 text-gray-600 dark:text-gray-400">
              <a href="#" className="hover:text-purple-600 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                <Facebook size={20} />
              </a>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Subscribe to our newsletter
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 text-sm bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white rounded-l-md outline-none"
                />
                <button className="bg-purple-600 text-white px-4 py-2 text-sm rounded-r-md hover:bg-purple-700 transition">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Sharq Label. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
