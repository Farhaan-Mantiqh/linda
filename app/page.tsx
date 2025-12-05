"use client";

import Background from "@/components/background";
import Navbar from "@/components/navbar";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {motion} from 'motion/react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F3EF] relative overflow-hidden w-full">
      {/* NAVBAR */}
      <Navbar />
      <div className="z-1 absolute right-0">
        <Background />
      </div>

      {/* MAIN CONTENT */}
      <main className="relative z-10 px-6 lg:px-16 py-12">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT TEXT */}
          <div className="space-y-8">
            <h1 className="text-5xl  font-semibold font-grotesk text-gray-900 leading-tight">
              Launch, Manage & Scale Your Brand Across Every Marketplace
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl font-grotesk">
              Smart Launch empowers brands with end-to-end ecommerce solutions
              from setup to global expansion supported by technology, strategy,
              and expert execution
            </p>

            <div className="flex flex-wrap gap-4">
              {/* Primary Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition">
                Get Started
                <ArrowRight size={18} />
              </button>

              {/* Secondary Button */}
              <button className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:bg-white transition">
                Explore Services
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE OR CARDS */}
          <motion.div
            className="relative space-y-6 justify-end flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/Group1.png"
              width={647}
              height={757}
              alt=""
              className="aspect-auto"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
