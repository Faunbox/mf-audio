'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqData = [
  {
    question: "What is the meaning of life?",
    answer: "The answer to the ultimate question of life, the universe, and everything is 42."
  },
  {
    question: "How do I become a developer?",
    answer: "Start by learning the basics of programming, choose a language, practice regularly, build projects, and never stop learning."
  },
  {
    question: "Is AI going to take over the world?",
    answer: "While AI is advancing rapidly, it's designed to assist and augment human capabilities, not to replace humans entirely."
  },
  {
    question: "What's the best way to learn a new language?",
    answer: "Immerse yourself in the language, practice regularly, use language learning apps, and try to converse with native speakers."
  },{
    question: "What's the best way to learn a new language?",
    answer: "Immerse yourself in the language, practice regularly, use language learning apps, and try to converse with native speakers."
  },
  {
    question: "How can I improve my productivity?",
    answer: "Set clear goals, prioritize tasks, minimize distractions, take regular breaks, and use productivity techniques like the Pomodoro method."
  }
]
const FaqPage = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white p-8 md:p-16 lg:p-24">
      <h1 className="text-4xl font-bold mb-12 text-black">Frequently Asked Questions</h1>
      <motion.div
        initial="closed"
        animate="open"
        variants={{
          open: {
            transition: { staggerChildren: 0.1, delayChildren: 0.3 }
          },
          closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
          }
        }}
      >
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: 50 }
            }}
            className="border-b border-gray-200 mb-4"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="flex justify-between items-center w-full text-left py-4 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="text-lg font-semibold text-black">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-black transition-transform duration-300 ${
                  activeIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            {activeIndex === index && (
              <div
                id={`faq-answer-${index}`}
                className="py-6 text-black"
              >
                {item.answer}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} ;

 
export default FaqPage;