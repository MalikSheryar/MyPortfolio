import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import img1 from "../assets/profile.png";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-5rem)] flex items-center pt-16 sm:pt-20 "
      ref={ref}
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.p 
              className="text-accent-500 font-medium mb-4 text-base sm:text-lg"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1
              className="text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[40px] font-bold mb-4 text-gray-900 dark:text-white leading-tight text-nowrap"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Malik Sheryar Shoukat 
              <span className="block text-primary-600 dark:text-primary-400 mt-2">
                Front-End Developer
              </span>
            </motion.h1>
            
            <motion.p
              className="text-[16px] text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              I build exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Let's create something amazing together.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <a href="#projects" className="btn btn-primary">
                View Projects <FiArrowRight className="ml-2" />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </motion.div>
            
            <motion.div
              className="flex space-x-5 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={24} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative  w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full opacity-20 blur-3xl"></div>
              <img 
                src={img1} 
                alt="John Doe" 
                className="relative z-10 rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;