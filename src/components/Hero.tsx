import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { cn } from '../lib/utils'
import AnimatedButton from './AnimatedButton'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const headlineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.05
      }
    }
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-white dark:bg-black"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Minimal Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white text-sm font-light mb-12 tracking-wider uppercase"
          >
            <span className="w-1 h-1 bg-black dark:bg-white rounded-full mr-3"></span>
            Freelance Developer & Designer
          </motion.div>

          {/* Main Headline - Inspired by Dennis Snellenberg's typography */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-light text-black dark:text-white mb-8 font-display leading-tight tracking-tight"
            variants={headlineVariants}
          >
            {Array.from("We Build").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            <br />
            {Array.from("Digital").map((letter, index) => (
              <motion.span
                key={index + 8}
                variants={letterVariants}
                className="inline-block text-gradient font-medium"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
            <br />
            {Array.from("Experiences").map((letter, index) => (
              <motion.span
                key={index + 15}
                variants={letterVariants}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle - Clean and minimal */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Helping brands to stand out in the digital era. Together we will set the new status quo. 
            No nonsense, always on the cutting edge.
          </motion.p>

          {/* CTA Buttons - Minimal design */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <AnimatedButton
              onClick={scrollToContact}
              variant="primary"
              size="lg"
              className="group min-w-[200px]"
            >
              <span className="tracking-wide">Start Project</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </AnimatedButton>
            
            <AnimatedButton
              variant="ghost"
              size="lg"
              className="group min-w-[200px]"
            >
              <span className="tracking-wide">View Work</span>
            </AnimatedButton>
          </motion.div>

          {/* Stats - Minimal presentation */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto border-t border-black/10 dark:border-white/10 pt-8"
          >
            {[
              { number: '240+', label: 'Projects' },
              { number: '120+', label: 'Clients' },
              { number: '8+', label: 'Years' },
              { number: '18+', label: 'Countries' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <div className="text-2xl md:text-3xl font-light text-black dark:text-white group-hover:text-gradient transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-light tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-black/30 dark:bg-white/30"></div>
      </motion.div>
    </section>
  )
}

export default Hero
