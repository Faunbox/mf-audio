'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type CategoryId = 'soundbars' | '5.1systems' | 'customstands' | 'cables'

type Offer = {
  name: string
  price: string
  image: string
}

type OffersByCategory = {
  [key in CategoryId]: Offer[]
}

export default function AudioEquipmentOfferSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('soundbars')

  const categories: { id: CategoryId; name: string }[] = [
    { id: 'soundbars', name: 'Soundbars' },
    { id: '5.1systems', name: '5.1 Systems' },
    { id: 'customstands', name: 'Custom Stands' },
    { id: 'cables', name: 'Cables' },
  ]

  const offers: OffersByCategory = {
    soundbars: [
      { name: 'Premium Soundbar', price: '$299.99', image: '/placeholder.svg?height=200&width=400' },
      { name: 'Mid-range Soundbar', price: '$199.99', image: '/placeholder.svg?height=200&width=400' },
      { name: 'Budget Soundbar', price: '$99.99', image: '/placeholder.svg?height=200&width=400' },
    ],
    '5.1systems': [
      { name: 'High-end 5.1 System', price: '$999.99', image: '/placeholder.svg?height=200&width=400' },
      { name: 'Mid-range 5.1 System', price: '$699.99', image: '/placeholder.svg?height=200&width=400' },
      { name: 'Entry-level 5.1 System', price: '$499.99', image: '/placeholder.svg?height=200&width=400' },
    ],
    customstands: [
      { name: 'Adjustable TV Stand', price: '$149.99', image: '/placeholder.svg?height=200&width=400' },
      { name: 'Corner Speaker Stand', price: '$79.99', image: '/placeholder.svg?height=200&width=400' },
      { name: 'Soundbar Wall Mount', price: '$39.99', image: '/placeholder.svg?height=200&width=400' },
    ],
    cables: [
      { name: 'Premium HDMI Cable', price: '$29.99', image: '/placeholder.svg?height=200&width=400' },
      { name: 'Optical Audio Cable', price: '$19.99', image: '/placeholder.svg?height=200&width=400' },
      { name: 'Speaker Wire (50ft)', price: '$24.99', image: '/placeholder.svg?height=200&width=400' },
    ],
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Audio Equipment Offers</h2>
        <div className="flex justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 mx-2 rounded-full ${
                activeCategory === category.id
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              {category.name}
            </button>
          ))}
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
                    style={{ objectFit: 'cover' }}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{offer.name}</h3>
                <p className="text-2xl font-bold text-center mb-4">{offer.price}</p>
                <button className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}