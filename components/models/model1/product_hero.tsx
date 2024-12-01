"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const colors = [
  {
    name: "Matte Black",
    value: "bg-black",
    hex: "#000000",
    description: "Sleek and modern, perfect for any decor",
  },
  {
    name: "Pure White",
    value: "bg-white",
    hex: "#FFFFFF",
    description: "Clean and crisp, brightens any space",
  },
  {
    name: "Vibrant Red",
    value: "bg-red-600",
    hex: "#DC2626",
    description: "Bold and energetic, makes a statement",
  },
];

export default function ProductHero() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ backgroundColor: selectedColor.hex }}
        transition={{ duration: 0.6 }}
      />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          {/* <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{ color: selectedColor.value === 'bg-white' ? '#000000' : '#FFFFFF' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Pro Audio Bookshelf Speaker
          </motion.h1> */}

          <div className="relative w-full max-w-2xl aspect-square">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedColor.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src="/placeholder.svg"
                  alt="Pro Audio Bookshelf Speaker"
                  fill
                  className="object-contain p-8"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          className="w-full md:w-1/2 flex flex-col items-start gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col items-start gap-4">
            <h2
              className="text-2xl font-medium"
              style={{
                color:
                  selectedColor.value === "bg-white" ? "#000000" : "#FFFFFF",
              }}
            >
              Choose Your Color
            </h2>
            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 ${
                    color.value
                  } transition-transform duration-200 hover:scale-110 ${
                    selectedColor.name === color.name
                      ? "ring-2 ring-offset-2 ring-gray-500"
                      : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select ${color.name}`}
                />
              ))}
            </div>
            <p
              className="text-lg"
              style={{
                color:
                  selectedColor.value === "bg-white" ? "#000000" : "#FFFFFF",
              }}
            >
              {selectedColor.name}: {selectedColor.description}
            </p>
          </div>
          <Button
            className={`px-8 py-3 text-lg font-semibold transition-colors ${
              selectedColor.value === "bg-white"
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            <Link href="/contact">Ask for Price</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
