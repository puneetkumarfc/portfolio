import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '../lib/utils'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
}

const AnimatedButton = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className,
  disabled = false
}: AnimatedButtonProps) => {
  const baseClasses = "relative overflow-hidden font-light transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide"
  
  const variants = {
    primary: "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-black dark:focus:ring-white",
    secondary: "bg-transparent border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black focus:ring-black dark:focus:ring-white",
    ghost: "bg-transparent text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 focus:ring-black dark:focus:ring-white"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm"
  }

  return (
    <motion.button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ 
        scale: 0.98,
        transition: { duration: 0.1 }
      }}
    >
      {/* Subtle Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center uppercase">
        {children}
      </span>
    </motion.button>
  )
}

export default AnimatedButton
