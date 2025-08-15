import { motion } from 'framer-motion'
import { Target, Users, Zap, Shield } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and close collaboration with our clients.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We build robust, scalable solutions that you can depend on for years to come.'
    }
  ]

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
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto container-padding">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About <span className="text-gradient">TechFlow</span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
          >
            We are a passionate team of developers, designers, and innovators dedicated to 
            transforming businesses through exceptional digital experiences. With over 8 years 
            of experience, we've helped hundreds of companies achieve their digital goals.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              To empower businesses with innovative, scalable, and user-centric digital solutions 
              that drive growth and create lasting impact in the digital landscape.
            </p>
          </motion.div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              100%
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Client Satisfaction Rate
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Support & Maintenance
            </div>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300">
              Team Members
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
