"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-lg border-b border-gray-800 shadow-lg z-50 h-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
        >
          Spot
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button className="hidden md:block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md text-sm font-medium transition-transform transform hover:scale-105">
            Get Started
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 z-60"
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: menuOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`fixed top-0 right-0 h-screen w-full bg-black/90 backdrop-blur-md flex flex-col items-center justify-center space-y-6 shadow-lg z-50`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <X size={28} />
        </button>

        {/* Navigation Links */}
        <Link
          href="#"
          className="text-gray-300 hover:text-white text-2xl transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="#features"
          className="text-gray-300 hover:text-white text-2xl transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="text-gray-300 hover:text-white text-2xl transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href="#contact"
          className="text-gray-300 hover:text-white text-2xl transition-colors duration-200"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

        {/* Call to Action in Mobile Menu */}
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium transition-transform transform hover:scale-105"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </Button>
      </motion.nav>
    </header>
  );
}
