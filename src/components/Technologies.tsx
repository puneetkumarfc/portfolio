import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  X, 
  Globe, 
  Smartphone, 
  Code, 
  Database, 
  Zap, 
  Shield, 
  Rocket,
  Layers,
  Cpu,
  Palette,
  Cloud
} from 'lucide-react'

const Technologies = () => {
  const [selectedTech, setSelectedTech] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<'web' | 'mobile'>('web')

  const webTechnologies = [
    {
      name: 'React',
      icon: <Code className="w-8 h-8" />,
      description: 'Modern JavaScript library for building user interfaces',
      examples: ['Next.js', 'Gatsby', 'React Native'],
      projectSize: 'Small to Enterprise',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'Node.js',
      icon: <Database className="w-8 h-8" />,
      description: 'JavaScript runtime for server-side development',
      examples: ['Express.js', 'NestJS', 'Fastify'],
      projectSize: 'Small to Large',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      name: 'PHP',
      icon: <Layers className="w-8 h-8" />,
      description: 'Server-side scripting language for web development',
      examples: ['Laravel', 'CodeIgniter', 'WordPress'],
      projectSize: 'Small to Enterprise',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      name: 'Java',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Object-oriented programming for enterprise applications',
      examples: ['Spring Boot', 'Hibernate', 'Maven'],
      projectSize: 'Medium to Enterprise',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      name: 'C#',
      icon: <Shield className="w-8 h-8" />,
      description: 'Microsoft\'s language for .NET framework applications',
      examples: ['.NET Core', 'ASP.NET', 'Entity Framework'],
      projectSize: 'Medium to Enterprise',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      name: 'Python',
      icon: <Rocket className="w-8 h-8" />,
      description: 'Versatile language for web, data, and AI applications',
      examples: ['Django', 'Flask', 'FastAPI'],
      projectSize: 'Small to Large',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    }
  ]

  const mobileTechnologies = [
    {
      name: 'React Native',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Cross-platform mobile development with React',
      examples: ['Expo', 'Redux', 'React Navigation'],
      projectSize: 'Small to Large',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      name: 'Flutter',
      icon: <Zap className="w-8 h-8" />,
      description: 'Google\'s UI toolkit for cross-platform apps',
      examples: ['Dart', 'Material Design', 'Cupertino'],
      projectSize: 'Small to Large',
      color: 'from-teal-500 to-blue-500',
      bgColor: 'bg-teal-50 dark:bg-teal-900/20'
    },
    {
      name: 'Native Android',
      icon: <Cpu className="w-8 h-8" />,
      description: 'Native Android development with Java/Kotlin',
      examples: ['Kotlin', 'Java', 'Android SDK'],
      projectSize: 'Medium to Large',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      name: 'Native iOS',
      icon: <Palette className="w-8 h-8" />,
      description: 'Native iOS development with Swift',
      examples: ['Swift', 'SwiftUI', 'UIKit'],
      projectSize: 'Medium to Large',
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-50 dark:bg-gray-900/20'
    },
    {
      name: 'Ionic',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Cross-platform mobile app development framework',
      examples: ['Angular', 'React', 'Vue.js'],
      projectSize: 'Small to Medium',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      name: 'Xamarin',
      icon: <Layers className="w-8 h-8" />,
      description: 'Microsoft\'s cross-platform mobile development',
      examples: ['C#', '.NET', 'Xamarin.Forms'],
      projectSize: 'Medium to Large',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const tabVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <section id="technologies" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 text-black dark:text-white text-sm font-light mb-8 tracking-wider uppercase"
          >
            <span className="w-1 h-1 bg-black dark:bg-white rounded-full mr-3"></span>
            Our Tech Stack
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display"
          >
            Technologies We <span className="text-gradient">Master</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We leverage cutting-edge technologies to build robust, scalable, and innovative solutions 
            that drive digital transformation.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="bg-white dark:bg-dark-900 rounded-2xl p-2 shadow-lg border border-gray-100 dark:border-dark-700">
            <div className="flex space-x-2">
              {[
                { id: 'web', label: 'Web Development', icon: Globe },
                { id: 'mobile', label: 'Mobile Development', icon: Smartphone }
              ].map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as 'web' | 'mobile')}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-black dark:bg-white text-white dark:text-black shadow-lg'
                      : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {(activeTab === 'web' ? webTechnologies : mobileTechnologies).map((tech, index) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                className="group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedTech(tech)}
              >
                <div className={`${tech.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent group-hover:border-gray-200 dark:group-hover:border-dark-600 relative overflow-hidden`}>
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-white">
                        {tech.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                      {tech.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {tech.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {tech.examples.slice(0, 2).map((example, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/50 dark:bg-dark-800/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm"
                        >
                          {example}
                        </span>
                      ))}
                      {tech.examples.length > 2 && (
                        <span className="px-3 py-1 bg-white/50 dark:bg-dark-800/50 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium backdrop-blur-sm">
                          +{tech.examples.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Technology Modal */}
        <AnimatePresence>
          {selectedTech && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTech(null)}
            >
              <motion.div
                className="bg-white dark:bg-dark-900 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${selectedTech.color} rounded-2xl flex items-center justify-center`}>
                      <div className="text-white">
                        {selectedTech.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                        {selectedTech.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {selectedTech.projectSize} Projects
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTech(null)}
                    className="p-3 rounded-xl bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Description
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {selectedTech.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Frameworks & Tools
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedTech.examples.map((example, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-dark-800 dark:to-dark-700 text-gray-800 dark:text-gray-200 rounded-xl text-sm font-medium"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Project Size Range
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {selectedTech.projectSize}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Technologies
