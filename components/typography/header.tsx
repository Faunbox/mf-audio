import Image from 'next/image'
import { motion } from 'framer-motion'

interface HeaderProps {
  title: string
  backgroundImage?: string
}

export default function Header({ title, backgroundImage = "/placeholder.svg?height=400&width=1200" }: HeaderProps) {
  return (
    <header className="relative h-52 bg-black overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Header background image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="opacity-50"
      />
      <div className="absolute inset-0 flex items-end mb-6 justify-start px-8 md:px-16">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
      </div>
    </header>
  )
}