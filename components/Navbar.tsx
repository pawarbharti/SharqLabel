"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b dark:border-gray-800">
      <Image
        src={theme === "dark" ? "/logo-dark.png" : "/logo-light.jpeg"}
        alt="Sharq Label"
        width={140}
        height={40}
      />

      <div className="flex items-center gap-6">
        <a className="hover:text-gray-500 transition">Shop</a>
        <a className="hover:text-gray-500 transition">New</a>
        <a className="hover:text-gray-500 transition">About</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
