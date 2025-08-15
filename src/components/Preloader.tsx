import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { helloLanguages } from '../data/content'

const Preloader = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < helloLanguages.length - 1) {
          return prev + 1
        } else {
          clearInterval(interval)
          // Wait a bit before completing
          setTimeout(() => setIsComplete(true), 800)
          return prev
        }
      })
    }, 600) // Each word shows for 600ms

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -30,
      scale: 0.9,
      transition: {
        duration: 0.4,
        ease: "easeIn"
      }
    }
  }

  const backgroundVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  return (
    <AnimatePresence mode="wait">
      {!isComplete ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 bg-gradient-to-br from-black via-dark-900 to-black flex items-center justify-center z-50 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Animated Background Elements */}
          <motion.div
            className="absolute inset-0"
            variants={backgroundVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
                style={{
                  left: `${20 + i * 10}%`,
                  top: `${30 + i * 8}%`
                }}
              />
            ))}

            {/* Gradient Orbs */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
              animate={{
                scale: [1.5, 1, 1.5],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
          </motion.div>

          <div className="text-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="text-7xl md:text-9xl lg:text-[12rem] font-light text-white mb-8 font-display tracking-tight"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                  letterSpacing: '-0.02em'
                }}
              >
                {helloLanguages[currentIndex].text}
              </motion.div>
            </AnimatePresence>
            
            {/* Progress Indicator */}
            <motion.div
              className="flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {helloLanguages.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index <= currentIndex 
                      ? 'bg-white scale-125' 
                      : 'bg-white/20 scale-100'
                  }`}
                  animate={{
                    scale: index === currentIndex ? [1, 1.3, 1] : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: index === currentIndex ? Infinity : 0
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Preloader
