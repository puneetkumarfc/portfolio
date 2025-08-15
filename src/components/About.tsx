import { motion, useScroll, useTransform } from 'framer-motion'
import { Target, Users, Zap, Shield, ArrowRight, Star, Award, Clock, CheckCircle } from 'lucide-react'
import { useRef } from 'react'

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })



  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients.',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We build robust, scalable solutions that you can depend on for years to come.',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    }
  ]

  const achievements = [
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '50+', label: 'Team Experts', icon: Users },
    { number: '100+', label: 'Projects Delivered', icon: CheckCircle }
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
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-dark-900 dark:to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 10 + i * 2,
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
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white text-sm font-light mb-8 tracking-wider uppercase"
          >
            <Award className="w-4 h-4 mr-3" />
            About Our Agency
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-8 font-display leading-[1.1] tracking-tight"
          >
            We Build <span className="text-gradient font-medium">Digital</span> Futures
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            A passionate team of developers, designers, and innovators dedicated to transforming 
            businesses through exceptional digital experiences. We don't just build websites—we 
            create digital solutions that drive growth and innovation.
          </motion.p>

          {/* Mission Statement */}
          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto bg-gradient-to-r from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-3xl p-8 border border-gray-100 dark:border-dark-700"
          >
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses with innovative, scalable, and user-centric digital solutions 
                  that drive growth and create lasting impact in the digital landscape. We believe in 
                  the power of technology to transform ideas into reality.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-dark-700 h-full">
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
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
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-800 dark:to-dark-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-gray-600 dark:text-gray-400" />
              </div>
              <div className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white group-hover:text-gradient transition-colors duration-300">
                {achievement.number}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wider uppercase mt-2">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Founded with a vision to bridge the gap between technology and business, we've grown 
              from a small startup to a trusted partner for companies worldwide. Our journey has been 
              marked by continuous learning, innovation, and an unwavering commitment to excellence.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Today, we're proud to have delivered over 100 successful projects, helping businesses 
              of all sizes achieve their digital transformation goals. Our team of experts brings 
              together diverse skills and perspectives to create solutions that truly make a difference.
            </p>
            <motion.button
              className="group flex items-center space-x-3 text-lg font-light text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 mx-auto"
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="tracking-wide uppercase">Learn More</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
