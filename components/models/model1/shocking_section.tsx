'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const features = [
  { title: "Immersive Sound", description: "Experience audio like never before" },
  { title: "Precision Engineering", description: "Crafted for audiophiles" },
  { title: "Smart Integration", description: "Seamlessly connects to your devices" },
  { title: "Aesthetic Design", description: "A visual masterpiece" },
]

export default function ShockingSection() {
  const [currentFeature, setCurrentFeature] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const positionsRef = useRef<{ left: string; top: string }[]>([])

  useEffect(() => {
    setIsClient(true)
    positionsRef.current = features.map(() => ({
      left: `${25 + Math.random() * 50}%`,
      top: `${25 + Math.random() * 50}%`,
    }))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-black py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative h-[80vh] flex items-center justify-center">
          {isClient && (
            <div className="absolute inset-0">
              {features.map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full"
                  initial={{ scale: 0, x: '-50%', y: '-50%' }}
                  animate={{
                    scale: [1, 2],
                    opacity: [0.7, 0],
                    transition: { duration: 4, repeat: Infinity, delay: index * 1 }
                  }}
                  style={positionsRef.current[index]}
                />
              ))}
            </div>
          )}
          <div className="relative z-10 text-white text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-5xl md:text-7xl font-bold mb-4">
                  {features[currentFeature].title}
                </h2>
                <p className="text-xl md:text-2xl text-gray-400">
                  {features[currentFeature].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

