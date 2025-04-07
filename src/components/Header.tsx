"use client";

import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg border-b border-gray-800 shadow-lg z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent transition-all duration-700 ease-out translate-x-0 opacity-100">
          Spot
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["/", "/features", "/pricing", "/contact"].map((path, i) => (
            <Link
              key={i}
              href={path}
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </nav>

        {/* Call to Action */}
        <Button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md text-sm font-medium transition-transform transform hover:scale-105">
          <Link href="/auth/login">Get Started</Link>
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 z-60"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={clsx(
          "fixed top-0 right-0 h-screen w-full bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 shadow-lg z-50 transform transition-transform duration-500",
          menuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <X size={28} />
        </button>

        {["/", "/features", "/pricing", "/contact"].map((path, i) => (
          <Link
            key={i}
            href={path}
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-white text-2xl transition-colors duration-200"
          >
            {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </Link>
        ))}

        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium transition-transform transform hover:scale-105"
          onClick={() => setMenuOpen(false)}
        >
          <Link href="/auth/login">Get Started</Link>
        </Button>
      </nav>
    </header>
  );
}
