"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Header from "../typography/header";
import Link from "next/link";

type CategoryId = "bookshelf" | "woofers" | "Our systems" | "Custom stands";

type Offer = {
  name: string;
  price: string;
  image: string;
};

type OffersByCategory = {
  [key in CategoryId]: Offer[];
};

export default function AudioEquipmentOfferSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("bookshelf");
  const [isMobile, setIsMobile] = useState(false);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  const categories: { id: CategoryId; name: string }[] = [
    { id: "bookshelf", name: "Bookshelf" },
    { id: "woofers", name: "woofers" },
    { id: "Our systems", name: "Our systems" },
    { id: "Custom stands", name: "Custom stands" },
  ];

  const offers: OffersByCategory = {
    bookshelf: [
      {
        name: "model1",
        price: "$1500",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        name: "Mid-range Soundbar",
        price: "$199.99",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        name: "Budget Soundbar",
        price: "$99.99",
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
    "woofers": [
      {
        name: "High-end 5.1 System",
        price: "$999.99",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        name: "Mid-range 5.1 System",
        price: "$699.99",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        name: "Entry-level 5.1 System",
        price: "$499.99",
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
    "Our systems": [
      {
        name: "Adjustable TV Stand",
        price: "$149.99",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        name: "Corner Speaker Stand",
        price: "$79.99",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        name: "Soundbar Wall Mount",
        price: "$39.99",
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
    "Custom stands": [
      {
        name: "Premium HDMI Cable",
        price: "$29.99",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        name: "Optical Audio Cable",
        price: "$19.99",
        image: "/placeholder.svg?height=200&width=400",
      },
      {
        name: "Speaker Wire (50ft)",
        price: "$24.99",
        image: "/placeholder.svg?height=200&width=400",
      },
    ],
  };

  return (
    <div className="flex flex-col">
      <Header title="Our Audio Equipment Offers" />
      <section className="py-16 bg-gray-100 pt-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            {isMobile ? (
              <div className="relative">
                <motion.button
                  className="w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-gray-800 text-left"
                  onClick={() => setIsSelectOpen(!isSelectOpen)}
                  whileTap={{ scale: 0.98 }}
                >
                  {categories.find((cat) => cat.id === activeCategory)?.name}
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <motion.svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      animate={{ rotate: isSelectOpen ? 180 : 0 }}
                    >
                      <path
                        d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </span>
                </motion.button>
                <AnimatePresence>
                  {isSelectOpen && (
                    <motion.ul
                      className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {categories.map((category) => (
                        <motion.li
                          key={category.id}
                          className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                            activeCategory === category.id
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-900"
                          }`}
                          onClick={() => {
                            setActiveCategory(category.id);
                            setIsSelectOpen(false);
                          }}
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          whileTap={{ backgroundColor: "#e5e7eb" }}
                        >
                          {category.name}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <div className="flex justify-center">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 mx-2 rounded-full ${
                      activeCategory === category.id
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-800 hover:bg-gray-200"
                    } transition-colors`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.name}
                  </motion.button>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers[activeCategory].map((offer, index) => (
              <motion.div
                key={offer.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-full h-48 relative mb-4">
                    <Image
                      src={offer.image}
                      alt={offer.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2 capitalize">
                    {offer.name}
                  </h3>
                  <p className="text-2xl font-bold text-center mb-4">
                    {offer.price}
                  </p>
                  <Link href={`/offert/${offer.name}`}>
                  <motion.button
                    className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    Get more informations
                  </motion.button>
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
