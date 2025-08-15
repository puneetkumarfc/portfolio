import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Sparkles, Smartphone, Globe, Zap, ArrowUpRight } from 'lucide-react'

const Hero = () => {
  const [currentDemo, setCurrentDemo] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const controls = useAnimation()

  const scrollToContact = () => {
    const element = document.querySelector('#contact') as HTMLElement
    if (element) {
      const headerHeight = 96
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  const demos = [
    {
      title: "Web Applications",
      description: "Modern, responsive web apps",
      icon: <Globe className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      features: ["React", "Next.js", "Node.js", "TypeScript"]
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile solutions",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      features: ["React Native", "Flutter", "iOS", "Android"]
    },
    {
      title: "E-commerce",
      description: "Scalable online stores",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      features: ["Shopify", "WooCommerce", "Custom", "Payment APIs"]
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDemo((prev) => (prev + 1) % demos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    })
  }, [controls])

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
    hidden: { opacity: 0, y: 60, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const demoVariants = {
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
         <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-dark-900 dark:to-black"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`
            }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

                           <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
                                       {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white text-xs font-light mb-4 tracking-wider uppercase"
              >
                <Sparkles className="w-3 h-3 mr-2" />
                Leading IT Development Agency
              </motion.div>

              {/* News Ticker - Compact */}
              <motion.div
                variants={itemVariants}
                className="mb-6 overflow-hidden bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl py-2 px-4 border border-blue-100 dark:border-blue-800/30"
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5 }}
             >
               <motion.div
                 className="flex items-center space-x-8 whitespace-nowrap"
                 animate={{ x: [0, -1200] }}
                 transition={{
                   duration: 25,
                   repeat: Infinity,
                   ease: "linear"
                 }}
               >
                 <span className="text-sm font-medium text-blue-800 dark:text-blue-200">🚀 Latest: New AI-powered web solutions launched</span>
                 <span className="text-sm font-medium text-purple-800 dark:text-purple-200">💡 Innovation: React Native mobile apps with 50% faster performance</span>
                 <span className="text-sm font-medium text-green-800 dark:text-green-200">🌟 Success: 100+ projects delivered on time</span>
                 <span className="text-sm font-medium text-orange-800 dark:text-orange-200">🔥 Trending: Next.js 14 with App Router integration</span>
                 <span className="text-sm font-medium text-indigo-800 dark:text-indigo-200">⚡ Update: Flutter 3.16 with enhanced UI components</span>
                 <span className="text-sm font-medium text-pink-800 dark:text-pink-200">🎯 Achievement: 98% client satisfaction rate</span>
               </motion.div>
             </motion.div>

                                                     {/* Main Headline - Reduced size */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-black dark:text-white mb-8 font-display leading-[1.1] tracking-tight"
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

                                                   {/* Subtitle - Reduced size */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed font-light"
              >
                Helping brands to stand out in the digital era. Together we will set the new status quo. 
                No nonsense, always on the cutting edge.
              </motion.p>

              {/* CTA Buttons - Dennis Snellenberg inspired */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-start gap-8 mb-12"
             >
              <motion.button
                onClick={scrollToContact}
                className="group flex items-center space-x-4 text-lg font-light text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="tracking-wide uppercase">Let's work together</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
              
              <motion.button
                className="group flex items-center space-x-4 text-lg font-light text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="tracking-wide uppercase">View work</span>
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>

                         {/* Stats - Dennis Snellenberg inspired */}
             <motion.div
               variants={itemVariants}
               className="flex flex-wrap gap-8 max-w-4xl border-t border-black/10 dark:border-white/10 pt-8"
            >
              {[
                { number: '30+', label: 'Projects' },
                { number: '15+', label: 'Clients' },
                { number: '5+', label: 'Years' },
                { number: '5+', label: 'Countries' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="text-3xl md:text-4xl font-light text-black dark:text-white group-hover:text-gradient transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 font-light tracking-wider uppercase mt-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Demo */}
          <motion.div
            className="relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Demo Card */}
            <motion.div
              className="relative bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-dark-700"
              variants={demoVariants}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Demo Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${demos[currentDemo].color} rounded-2xl flex items-center justify-center`}>
                    <div className="text-white">
                      {demos[currentDemo].icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {demos[currentDemo].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {demos[currentDemo].description}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isHovered ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowUpRight size={24} className="text-gray-400" />
                </motion.div>
              </div>

              {/* Demo Content */}
              <div className="space-y-6">
                {/* Code Preview */}
                <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <motion.div
                    className="font-mono text-sm text-gray-700 dark:text-gray-300"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-blue-600 dark:text-blue-400">const</div>
                    <div className="text-purple-600 dark:text-purple-400">app</div>
                    <div className="text-gray-600 dark:text-gray-500">=</div>
                    <div className="text-green-600 dark:text-green-400">createApp</div>
                    <div className="text-gray-600 dark:text-gray-500">();</div>
                  </motion.div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {demos[currentDemo].features.map((feature, index) => (
                      <motion.span
                        key={feature}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-dark-800 dark:to-dark-700 text-gray-800 dark:text-gray-200 rounded-xl text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Development Progress</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-80"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-60"
                animate={{
                  scale: [1, 1.5, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>

            {/* Background Elements */}
            <div className="absolute -z-10 inset-0">
              <motion.div
                className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1.5, 1, 1.5],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
