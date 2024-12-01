'use client'

import { motion } from 'framer-motion'

import Image from 'next/image'
import ScrollSection from './scroll_section'

const components = [
  {
    name: 'Custom Woofer',
    description: 'Experience deep, powerful bass with our custom-engineered woofer, featuring advanced cone materials and suspension design.',
    image: '/images/quality.jpg'
  },
  {
    name: 'Silk Dome Tweeter',
    description: 'Ultra-smooth high frequencies delivered through our precision-crafted silk dome tweeter with optimized waveguide.',
    image: '/images/quality.jpg'
  },
  {
    name: 'Precision Crossover',
    description: 'State-of-the-art crossover network ensures perfect integration between drivers for seamless sound reproduction.',
    image: '/images/quality.jpg'
  }
]

export default function TopComponents() {
  return (
    <div className="bg-black text-white">
      {components.map((component, index) => (
        <ScrollSection key={component.name} className="relative px-4">
          <div className="container mx-auto">
            <div className={`flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-4xl font-bold">{component.name}</h2>
                  <p className="text-xl text-gray-400 leading-relaxed">{component.description}</p>
                </motion.div>
              </div>
              <div className="w-1/2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative aspect-square"
                >
                  <Image
                    src={component.image}
                    alt={component.name}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollSection>
      ))}
    </div>
  )
}

