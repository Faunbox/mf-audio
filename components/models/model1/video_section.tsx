'use client'

import { useRef, useEffect } from 'react'
import { useInView } from 'framer-motion'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(videoRef, { once: true })

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Error attempting to play video:", error)
      })
    }
  }, [isInView])

  return (
    <section className="w-full overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-auto"
        loop
        muted
        playsInline
        autoPlay
        // poster="/placeholder.svg"
      >
        <source src="../videos/glosnik.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  )
}

