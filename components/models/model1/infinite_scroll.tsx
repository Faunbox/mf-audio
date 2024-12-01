'use client'

import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'

export default function InfiniteScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-100%'])
  const smoothY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { scrollTop, scrollHeight, clientHeight } = ref.current
        if (scrollTop + clientHeight >= scrollHeight) {
          ref.current.scrollTop = 1
        } else if (scrollTop <= 0) {
          ref.current.scrollTop = scrollHeight - clientHeight - 1
        }
      }
    }

    ref.current?.addEventListener('scroll', handleScroll)
    return () => ref.current?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div ref={ref} className="h-screen overflow-y-scroll">
      <motion.div style={{ y: smoothY }}>
        {children}
        {children}
      </motion.div>
    </div>
  )
}

