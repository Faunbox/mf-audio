'use client'

import { motion } from 'framer-motion'
import ScrollSection from './scroll_section'

const history = [
  {
    year: '2021',
    title: 'First Generation',
    description: 'The journey begins with our revolutionary acoustic design principles.',
  },
  {
    year: '2022',
    title: 'Refined Acoustics',
    description: 'Enhanced driver technology and cabinet construction for superior sound.',
  },
  {
    year: '2023',
    title: 'Perfect Harmony',
    description: 'The culmination of years of research and development.',
  },
]

export default function DesignHistory() {
  return (
    <div className="bg-white">
      <ScrollSection className="px-4">
        <div className="container mx-auto py-24">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            A Legacy of Innovation
          </motion.h2>
          
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200" />
            
            <div className="space-y-24">
              {history.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="space-y-4">
                      <div className="text-6xl font-bold text-gray-200">{item.year}</div>
                      <h3 className="text-2xl font-semibold">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </ScrollSection>
    </div>
  )
}

