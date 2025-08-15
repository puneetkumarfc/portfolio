import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  onClick?: () => void
}

const AnimatedCard = ({ children, className, delay = 0, onClick }: AnimatedCardProps) => {
  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-black/5 dark:border-white/5 transition-all duration-300 cursor-pointer",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.3 }
      }}
      onClick={onClick}
    >
      {/* Subtle Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
      
      {/* Content */}
      <div className="relative z-10 p-8">
        {children}
      </div>
    </motion.div>
  )
}

export default AnimatedCard
