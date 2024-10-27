'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function WhyUsSection() {
  const cards = [
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "Quality Service",
      description: "We provide top-notch service that exceeds expectations.",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "Expert Team",
      description: "Our team consists of industry experts with years of experience.",
    },
    {
      image: "/placeholder.svg?height=200&width=300",
      title: "Innovative Solutions",
      description: "We offer cutting-edge solutions to complex problems.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6">Why Us?</h2>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardContent className="flex-grow p-6">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
                <CardFooter className="pt-0 pb-6 px-6">
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}