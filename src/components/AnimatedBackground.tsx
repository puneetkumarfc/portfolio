import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Very Subtle Mouse Follower - Simplified */}
      <motion.div
        className="absolute w-64 h-64 bg-black/1 dark:bg-white/1 rounded-full blur-2xl pointer-events-none"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.5,
        }}
      />

      {/* Minimal Floating Elements - Simplified */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-px h-16 bg-black/5 dark:bg-white/5"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-16 h-px bg-black/5 dark:bg-white/5"
        animate={{
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Subtle Corner Accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-black/5 dark:border-white/5"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-black/5 dark:border-white/5"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-black/5 dark:border-white/5"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-black/5 dark:border-white/5"></div>
    </div>
  )
}

export default AnimatedBackground
