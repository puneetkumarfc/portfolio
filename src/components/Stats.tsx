import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { stats } from '../data/content'

const Stats = () => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({})
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  useEffect(() => {
    if (isInView) {
      // Animate counters
      stats.forEach((stat) => {
        const targetValue = parseInt(stat.value)
        const duration = 2000 // 2 seconds
        const steps = 60
        const increment = targetValue / steps
        let currentValue = 0

        const timer = setInterval(() => {
          currentValue += increment
          if (currentValue >= targetValue) {
            currentValue = targetValue
            clearInterval(timer)
          }
          
          setCounters(prev => ({
            ...prev,
            [stat.label]: Math.floor(currentValue)
          }))
        }, duration / steps)

        return () => clearInterval(timer)
      })
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container mx-auto container-padding">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-yellow-300">Achievements</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-primary-100 max-w-3xl mx-auto"
          >
            Numbers that speak for themselves - our track record of delivering exceptional results.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                <motion.div
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: index * 0.1
                  }}
                >
                  {counters[stat.label] || 0}{stat.suffix}
                </motion.div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose TechFlow?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">99.9%</div>
                <div className="text-primary-100">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">24/7</div>
                <div className="text-primary-100">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-2">100%</div>
                <div className="text-primary-100">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
