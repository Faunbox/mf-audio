'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Award, ThumbsUp, Scale, Quote } from 'lucide-react'
import Header from '@/components/typography/header'

// Placeholder data
const founders = [
  { name: 'Jane Doe', role: 'CEO & Co-founder', bio: 'Visionary leader with 15 years of industry experience.', avatar: '/placeholder.svg?height=100&width=100' },
  { name: 'John Smith', role: 'CTO & Co-founder', bio: 'Tech innovator with a passion for cutting-edge solutions.', avatar: '/placeholder.svg?height=100&width=100' },
]

const reviews = [
  { name: 'Alice Johnson', company: 'Tech Innovators Inc.', review: 'Their speakers are truly inspiring and knowledgeable.', rating: 5, logo: '/placeholder.svg?height=50&width=50' },
  { name: 'Bob Williams', company: 'Future Enterprises', review: 'Every event with their speakers is a game-changer for our team.', rating: 4, logo: '/placeholder.svg?height=50&width=50' },
  { name: 'Carol Brown', company: 'Visionary Solutions', review: 'Insightful presentations that drive real business growth.', rating: 5, logo: '/placeholder.svg?height=50&width=50' },
]

const mission = "Our mission is to inspire and educate through powerful speeches, connecting visionary ideas with eager minds to shape a better future."

const whyWeDoIt = "We believe in the transformative power of ideas. By bringing exceptional speakers to diverse audiences, we aim to spark innovation, foster understanding, and drive positive change in businesses and communities worldwide."

const goals = [
  { icon: Award, title: 'Premium Quality', description: 'We deliver top-tier speakers and content.' },
  { icon: ThumbsUp, title: 'Maximum Satisfaction', description: 'Our events consistently exceed expectations.' },
  { icon: Scale, title: 'Best Price-Quality Ratio', description: 'Unmatched value for your investment.' },
]



function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
      ))}
    </div>
  )
}

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: '-30% 0px',
  })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      {children}
    </motion.section>
  )
}

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <Header title="About Us" />

      <main className=" mx-auto px-4 py-12 items-center justify-center">
        <div className="items-center justify-center container mx-auto">
          <AnimatedSection>
            <div className=" mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-black pt-8">Our Founders</h2>
              <div className="grid md:grid-cols-2 gap-8 pb-8">
                {founders.map((founder, index) => (
                  <div key={founder.name+index} className="flex flex-col md:flex-row items-center md:items-start bg-transparent border-none shadow-none">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 flex justify-center items-center">
                      <Image
                        src={founder.avatar}
                        alt={`${founder.name}'s avatar`}
                        width={120}
                        height={120}
                        className="rounded-full"
                      />
                    </div>
                    <div className="flex-grow text-center md:text-left">
                      <div>
                        <h3 className="text-black">{founder.name}</h3>
                        <p className="text-gray-600">{founder.role}</p>
                      </div>
                      <div>
                        <p className="text-black">{founder.bio}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className=" mx-auto">
              <div className=" text-black py-8">
                <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl leading-relaxed font-medium">{mission}</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="relative h-64 mb-16 -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-16 inset-x-0 z-10">
          <Image
            src="/images/logo_zdjecie.jpg"
            alt="Separator image"
            layout="fill"
            objectFit="cover"
            className="w-full"
          />
        </div>

        <AnimatedSection>
<div className="flex flex-col container mx-auto">

          <h2 className="text-3xl font-bold mb-4 ">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={review.name+index} className="relative shadow-xl">
                <CardHeader className="flex flex-row items-center space-x-4 pb-4">
                  <Image
                    src={review.logo}
                    alt={`${review.company} logo`}
                    width={50}
                    height={50}
                    className="rounded-full"
                    />
                  <div>
                    <CardTitle>{review.name}</CardTitle>
                    <CardDescription>{review.company}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="w-8 h-8 text-primary opacity-20 absolute top-12 left-4" />
                  <p className="mb-2 pl-8 italic">`&#34;`{review.review}`&#34;`</p>
                  <StarRating rating={review.rating} />
                </CardContent>
              </Card>
            ))}
          </div>
            </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Why We Do It</h2>
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/2 mb-4 md:mb-0 md:mr-8">
                <Image
                  src="/images/glosnik.jpg"
                  alt="Why We Do It"
                  width={400}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="md:w-1/2">
                <p className="text-xl leading-relaxed">{whyWeDoIt}</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-col container mx-auto">

          <h2 className="text-3xl font-bold mb-4 text-center">Our Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {goals.map((goal, index) => (
              <Card key={index} className="flex flex-col md:flex-row items-center md:items-start">
                <div className="md:w-1/4 flex items-center justify-center p-4">
                  <goal.icon className="w-12 h-12 text-primary" />
                </div>
                <div className="flex-grow md:w-3/4">
                  <CardHeader>
                    <CardTitle>{goal.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{goal.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
                </div>
        </AnimatedSection>
      </main>
    </div>
  )
}