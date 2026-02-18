"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeToggle from "./ThemeToggle";
import { Search, Heart, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  const { theme } = useTheme();

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "New Arrivals", href: "/new-arrivals" },
    { name: "Collections", href: "/collections" },
  ];

  const actionIcons = [
    { icon: Search, href: "/search" },
    { icon: Heart, href: "/wishlist" },
    { icon: ShoppingBag, href: "/cart" },
    { icon: User, href: "/account" },
  ];

  return (
    <nav
      className="flex items-center justify-between px-12 h-[75px] 
                    bg-bg border-b border-borderCustom 
                    transition-all duration-700 ease-in-out"
    >
      {/* Logo */}
      <Link href="/" className="relative h-[60px] aspect-square">
        <Image
          src={theme === "dark" ? "/logo-dark.png" : "/logo-light.png"}
          alt="Sharq Label"
          fill
          className="object-contain"
          priority
        />
      </Link>

      {/* Center Links */}
      <div
        className="hidden md:flex items-center gap-10 
                      text-sm tracking-[0.2em] uppercase 
                      text-textSecondary"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-textPrimary transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {actionIcons.map(({ icon: Icon, href }, index) => (
          <Link key={index} href={href}>
            <Icon
              size={20}
              className="text-icon hover:text-iconHover 
                         transition-colors duration-300 cursor-pointer"
            />
          </Link>
        ))}

        {/* Theme Toggle */}
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
