'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OurMissionSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Mission</h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:items-start gap-8"
        >
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Empowering Innovation</h3>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-gray-600 mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Fostering creativity and innovation</li>
              <li>Delivering exceptional value to our clients</li>
              <li>Promoting sustainable practices</li>
              <li>Continuously improving our processes</li>
            </ul>
          </div>
          <div className="md:w-1/2 relative h-[400px] w-full">
          <Image
              src="/images/desing.jpg"
              alt="Our Mission"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                  objectFit: 'cover',
                }}
                className="rounded-lg"
                />
          </div>
        </motion.div>
      </div>
    </section>
  )
}