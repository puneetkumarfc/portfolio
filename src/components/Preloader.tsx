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
          setTimeout(() => setIsComplete(true), 600)
          return prev
        }
      })
    }, 500) // Each word shows for 500ms

    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  }

  const textVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const skipButtonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5
      }
    }
  }

  const handleSkip = () => {
    setIsComplete(true)
  }

  return (
    <AnimatePresence mode="wait">
      {!isComplete ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 bg-dark-900 flex items-center justify-center z-50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="text-6xl md:text-8xl font-bold text-white mb-4"
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {helloLanguages[currentIndex].text}
              </motion.div>
            </AnimatePresence>
            
            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-8"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              {helloLanguages[currentIndex].lang}
            </motion.p>

            <motion.button
              onClick={handleSkip}
              className="text-sm text-gray-500 hover:text-white transition-colors duration-300 underline"
              variants={skipButtonVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skip intro
            </motion.button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Preloader
