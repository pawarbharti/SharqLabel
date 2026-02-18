"use client";

import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-black transition-colors duration-500">
        <ThemeProvider attribute="class">
           <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
