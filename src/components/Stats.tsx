import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { stats } from '../data/content'
import { Trophy, Award, Star, Target, TrendingUp, Users, Globe, Clock } from 'lucide-react'

const Stats = () => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({})
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])

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

  const achievements = [
    { icon: Trophy, title: 'Excellence Award', description: 'Recognized for outstanding quality' },
    { icon: Star, title: 'Top Rated', description: 'Consistently high client ratings' },
    { icon: Target, title: 'Goal Achiever', description: '100% project success rate' },
    { icon: TrendingUp, title: 'Growth Partner', description: 'Driving business growth' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.2
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stats-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stats-grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        {/* Header Section */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-light mb-8 tracking-wider uppercase border border-white/20"
          >
            <Award className="w-4 h-4 mr-3" />
            Our Achievements
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8 font-display leading-[1.1] tracking-tight"
          >
            Numbers That <span className="text-gradient font-medium">Speak</span> Volumes
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            Our track record of delivering exceptional results and building lasting partnerships 
            with clients worldwide. Every number represents a success story.
          </motion.p>

          {/* Achievement Highlights */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {achievement.title}
                </h4>
                <p className="text-xs text-gray-400">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={cardVariants}
              className="text-center group"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:bg-white/20 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  <motion.div
                    className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 group-hover:text-gradient transition-colors duration-300"
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
                  <div className="text-gray-300 font-light tracking-wider uppercase text-sm">
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Why Choose TechFlow?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-light text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                    99.9%
                  </div>
                  <div className="text-gray-300 font-light">Uptime Guarantee</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-light text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                    24/7
                  </div>
                  <div className="text-gray-300 font-light">Support Available</div>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-light text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                    100%
                  </div>
                  <div className="text-gray-300 font-light">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Global Reach */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Globe className="w-8 h-8 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">
                Global Reach
              </h3>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Serving clients across multiple countries with our expertise in digital solutions, 
              we bring global best practices to every project while maintaining local relevance.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
