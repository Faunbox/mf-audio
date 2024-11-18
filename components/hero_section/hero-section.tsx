'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function HeroSectionComponent() {
  const [isMounted, setIsMounted] = useState(false)
  

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  

  return (
    <div className="relative min-h-screen w-full flex flex-col">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="videos/glosnik.mp4" type="video/mp4" />

      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>
      

      {/* Hero Content */}
      <div className="relative z-20 flex-grow flex items-end justify-center px-4 min-h-screen pb-24">
        <div className="text-center">
          {isMounted && (
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Welcome to Our World
            </motion.h1>
          )}
          {isMounted && (
            <motion.p
              className="text-2xl md:text-3xl text-white mb-10"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Discover amazing experiences
            </motion.p>
          )}
          {isMounted && (
            <motion.button
              className="bg-white text-black py-3 px-8 rounded-full text-xl font-semibold hover:bg-opacity-90 transition duration-300"
              initial="hidden"
              animate="visible"
              variants={textVariants}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href={"/offert"}>
              Get Started
              </Link>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  )
}