import { useState, useRef } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { projects } from '../data/content'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)


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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.screenshots.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.screenshots.length - 1 : prev - 1
      )
    }
  }

  const openProject = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
  }

  const closeProject = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-br from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="projects-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#projects-grid)" />
        </svg>
      </div>

      <div className="container mx-auto container-padding relative z-10" ref={containerRef}>
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
            Our Portfolio
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 font-display"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our portfolio of successful projects that showcase our expertise 
            across different industries and technologies.
          </motion.p>
        </motion.div>

        {/* Scroll Stack Container */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Scroll Stack */}
          <div className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide">
            {projects.map((project, index) => {
              const isHovered = hoveredIndex === index

              
              return (
                <motion.div
                  key={project.id}
                  className="flex-shrink-0 w-80 md:w-96"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ 
                    y: -20,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openProject(project)}
                >
                  <div className="relative group cursor-pointer">
                    {/* Project Card */}
                    <motion.div
                      className="bg-white dark:bg-dark-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-dark-700 group-hover:border-primary-200 dark:group-hover:border-primary-700 relative"
                      animate={{
                        scale: isHovered ? 1.05 : 1,
                        rotateY: isHovered ? 5 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Project Image */}
                      <div className="relative h-56 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30 flex items-center justify-center overflow-hidden">
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"
                          animate={{
                            scale: isHovered ? 1.1 : 1,
                            opacity: isHovered ? 0.8 : 0.4,
                          }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="text-6xl opacity-20 relative z-10">📱</div>
                        
                        {/* Hover Overlay */}
                        <motion.div
                          className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center"
                          animate={{
                            opacity: isHovered ? 1 : 0,
                          }}
                        >
                          <motion.div
                            className="flex items-center space-x-2 text-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              y: isHovered ? 0 : 20,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="text-sm font-medium">View Project</span>
                            <ArrowRight size={16} />
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Project Info */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-light">
                            {project.year}
                          </span>
                          <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                            {project.clientType}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className="px-3 py-1 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Results Preview */}
                        <div className="space-y-2">
                          {project.results.slice(0, 2).map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                              <div className="w-1 h-1 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                              <span className="line-clamp-1">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Floating Elements */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full opacity-60"
                        animate={{
                          scale: isHovered ? [1, 1.3, 1] : 1,
                          rotate: isHovered ? [0, 180, 360] : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isHovered ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex space-x-2">
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
            >
              <motion.div
                className="bg-white dark:bg-dark-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="p-8 border-b border-gray-200 dark:border-dark-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {selectedProject.clientType} • {selectedProject.year}
                      </p>
                    </div>
                    <button
                      onClick={closeProject}
                      className="p-3 rounded-xl bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                {/* Image Carousel */}
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/30 dark:to-primary-800/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl opacity-20">📱</div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  {selectedProject.screenshots.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-dark-800/90 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-800 transition-colors shadow-lg"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-dark-800/90 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-dark-800 transition-colors shadow-lg"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </>
                  )}
                  
                  {/* Image Indicators */}
                  {selectedProject.screenshots.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {selectedProject.screenshots.map((_, index) => (
                        <motion.div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                            index === currentImageIndex
                              ? 'bg-primary-600 dark:bg-primary-400'
                              : 'bg-gray-300 dark:bg-gray-600'
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="p-8 space-y-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Description
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Challenge
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Solution
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Results
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.results.map((result, index) => (
                        <motion.li
                          key={index}
                          className="flex items-center text-gray-600 dark:text-gray-300 text-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-4 flex-shrink-0"></div>
                          {result}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.tech.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
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

export default Projects
