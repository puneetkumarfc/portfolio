import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { cn } from '../lib/utils'

interface NavigationProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
}

const Navigation = ({ isDarkMode, toggleDarkMode }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'technologies', label: 'Technologies', href: '#technologies' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems])

  const scrollToSection = (href: string) => {
    console.log('Scrolling to:', href)
    const element = document.querySelector(href)
    console.log('Element found:', element)
    if (element) {
      const headerHeight = 96 // Height of the fixed header
      const elementPosition = (element as HTMLElement).offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    } else {
      console.error('Element not found for:', href)
    }
    setIsMobileMenuOpen(false)
  }

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.nav
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        isScrolled 
          ? "bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/5 dark:border-white/5" 
          : "bg-transparent"
      )}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo - Minimal design */}
          <motion.div
            className="text-xl font-light text-black dark:text-white tracking-wider"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            TechFlow
          </motion.div>

          {/* Desktop Navigation - Clean and minimal */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "relative text-sm font-light transition-colors duration-300 tracking-wide uppercase",
                  activeSection === item.id
                    ? "text-black dark:text-white"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                )}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-black dark:bg-white"
                    layoutId="activeSection"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Desktop Theme Toggle and CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors duration-300"
              whileHover={{ scale: 1.05, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="px-6 py-2 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-sm font-light tracking-wide uppercase"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 text-black dark:text-white"
              whileTap={{ scale: 0.95, rotate: 180 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-black dark:text-white"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Minimal design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-white/98 dark:bg-black/98 backdrop-blur-md border-t border-black/5 dark:border-white/5"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      "text-left py-3 text-sm font-light tracking-wide uppercase transition-colors duration-300",
                      activeSection === item.id
                        ? "text-black dark:text-white"
                        : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                    )}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.button
                  onClick={() => scrollToSection('#contact')}
                  className="mt-6 px-6 py-3 border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-sm font-light tracking-wide uppercase text-center"
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
