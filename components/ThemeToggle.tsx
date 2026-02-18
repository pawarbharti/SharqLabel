"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:scale-110 transition"
    >
      {theme === "dark" ? (
        <Sun className="text-white" size={20} />
      ) : (
        <Moon className="text-black" size={20} />
      )}
    </button>
  );
}
