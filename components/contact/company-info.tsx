'use client'

import { MapPin, Phone, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100
    }
  }
}

export default function CompanyInfo() {
  return (
    <motion.div
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 className="text-2xl font-semibold" variants={itemVariants}>
        Our Company
      </motion.h2>
      <motion.p className="text-muted-foreground" variants={itemVariants}>
        We`&#39;`re here to help! Feel free to reach out using the contact form or the information below.
      </motion.p>
      <motion.div className="space-y-2" variants={containerVariants}>
        <motion.div className="flex items-center space-x-2" variants={itemVariants}>
          <MapPin className="h-5 w-5 text-muted-foreground" />
          <span>123 Business St, City, State 12345</span>
        </motion.div>
        <motion.div className="flex items-center space-x-2" variants={itemVariants}>
          <Phone className="h-5 w-5 text-muted-foreground" />
          <span>(123) 456-7890</span>
        </motion.div>
        <motion.div className="flex items-center space-x-2" variants={itemVariants}>
          <Mail className="h-5 w-5 text-muted-foreground" />
          <span>contact@ourcompany.com</span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}