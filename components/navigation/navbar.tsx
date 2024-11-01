'use client'
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuOptions = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Offert", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-30 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center w-1/3">
            <Image
              src="/placeholder.svg"
              alt="Logo"
              width={120}
              height={40}
              className="mr-4 "
            />
          </div>
          <div className="hidden md:flex justify-center space-x-4 w-1/3">
            {menuOptions.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="w-1/3 flex justify-end">
            <button
              className="md:hidden text-white z-50"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <button
              className="absolute top-6 right-4 text-white"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {menuOptions.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-white text-2xl hover:text-gray-300"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
