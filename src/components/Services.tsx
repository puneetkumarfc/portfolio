import { motion, useScroll, useTransform } from 'framer-motion'
import { services } from '../data/content'
import { ArrowRight, CheckCircle, Star, Clock, Users, Zap, Shield, Globe, Smartphone, Palette, Cloud, Wrench } from 'lucide-react'
import { useRef } from 'react'

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })



  // Map emoji icons to Lucide icons
  const iconMap = {
    '🌐': Globe,
    '📱': Smartphone,
    '🎨': Palette,
    '☁️': Cloud,
    '🔧': Wrench
  }

  const serviceBenefits = [
    { icon: Star, title: 'Quality Assured', description: 'Every project meets our high standards' },
    { icon: Clock, title: 'Fast Delivery', description: 'Quick turnaround without compromising quality' },
    { icon: Users, title: 'Expert Team', description: 'Skilled professionals with years of experience' },
    { icon: Shield, title: 'Secure & Reliable', description: 'Your data and projects are safe with us' }
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

  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-dark-900 dark:to-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4
            }}
            style={{
              left: `${15 + i * 14}%`,
              top: `${25 + i * 10}%`
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
            <Zap className="w-4 h-4 mr-3" />
            What We Offer
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 dark:text-white mb-8 font-display leading-[1.1] tracking-tight"
          >
            Comprehensive <span className="text-gradient font-medium">Digital</span> Solutions
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12"
          >
            From concept to deployment, we provide end-to-end digital solutions that drive growth, 
            enhance user experiences, and deliver measurable results for your business.
          </motion.p>

          {/* Service Benefits */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {serviceBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {benefit.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Globe
            return (
              <motion.div
                key={service.title}
                className="group"
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white dark:bg-dark-900 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-dark-700 h-full relative overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 font-display">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-light">
                      {service.description}
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                        Key Features:
                      </h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                          >
                            <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Our Process
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We follow a proven methodology to ensure your project's success from start to finish.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and strategy' },
              { step: '03', title: 'Development', description: 'Building your solution with best practices' },
              { step: '04', title: 'Launch', description: 'Deploying and supporting your project' }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 md:p-12 border border-purple-200 dark:border-purple-800/30 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
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
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 font-display">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto font-light">
                Let's discuss how we can help bring your vision to life with our comprehensive 
                development services. Get a free consultation today.
              </p>
              <motion.button
                onClick={scrollToContact}
                className="group flex items-center space-x-3 text-lg font-light text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 mx-auto"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="tracking-wide uppercase">Get Free Consultation</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
