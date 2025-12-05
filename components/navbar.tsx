"use client";

import {
  Home,
  LayoutGrid,
  FolderOpen,
  Info,
  Headphones,
  Phone,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="relative z-20 px-6 lg:px-16 py-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">

          {/* Logo */}
          <div className="text-[#4C5FFF] font-bold text-2xl leading-tight">
            SMART<br />LAUNCH
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 bg-white rounded-full px-3 py-2 shadow-sm">
            
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#4C5FFF] text-white rounded-full text-sm font-medium"
            >
              <Home size={18} /> Home
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 text-gray-700 rounded-full text-sm hover:bg-gray-50 transition"
            >
              <LayoutGrid size={18} /> Services
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 text-gray-700 rounded-full text-sm hover:bg-gray-50 transition"
            >
              <FolderOpen size={18} /> Case Studies
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 text-gray-700 rounded-full text-sm hover:bg-gray-50 transition"
            >
              <Info size={18} /> About Us
            </a>

            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 text-gray-700 rounded-full text-sm hover:bg-gray-50 transition"
            >
              <Headphones size={18} /> Contact Us
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <button className="hidden lg:flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition">
            <Phone size={18} />
            Schedule Call
          </button>

          {/* Mobile Hamburger */}
          <button className="lg:hidden p-2" onClick={() => setMenuOpen(true)}>
            <Menu size={30} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`lg:hidden fixed inset-0 bg-white z-50 px-6 py-8 transition-all duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Top Row */}
        <div className="flex justify-between items-center mb-10">
          <div className="text-[#4C5FFF] font-bold text-2xl leading-tight">
            SMART<br />LAUNCH
          </div>
          <button onClick={() => setMenuOpen(false)}>
            <X size={34} />
          </button>
        </div>

        {/* Links */}
        <div className="space-y-6 text-lg font-medium">
          <a className="flex items-center gap-3 text-gray-800" href="#"><Home /> Home</a>
          <a className="flex items-center gap-3 text-gray-800" href="#"><LayoutGrid /> Services</a>
          <a className="flex items-center gap-3 text-gray-800" href="#"><FolderOpen /> Case Studies</a>
          <a className="flex items-center gap-3 text-gray-800" href="#"><Info /> About Us</a>
          <a className="flex items-center gap-3 text-gray-800" href="#"><Headphones /> Contact Us</a>

          {/* CTA Button */}
          <button className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-full text-gray-700">
            <Phone size={18} /> Schedule Call
          </button>
        </div>
      </div>
    </>
  );
}
