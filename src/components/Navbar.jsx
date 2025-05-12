import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Skills', path: '#skills' },
  { name: 'Projects', path: '#projects' },
  { name: 'Contact', path: '#contact' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e) => {
    const href = e.currentTarget.getAttribute('href')
    e.preventDefault()
    setIsOpen(false)
    
    const element = document.querySelector(href)
    const offset = 80
    const bodyRect = document.body.getBoundingClientRect().top
    const elementRect = element.getBoundingClientRect().top
    const elementPosition = elementRect - bodyRect
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <motion.a 
          href="#home"
          className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400 flex items-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={handleClick}
        >
          <span className="text-accent-500">{'<'}</span>
          <span>MS</span>
          <span className="text-accent-500">{'/>'}</span>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-10">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.path}
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm lg:text-base"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onClick={handleClick}
            >
              {link.name}
            </motion.a>
          ))}
          {/* <motion.a
            href="/resume.pdf"
            className="btn btn-primary py-2"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: navLinks.length * 0.1 }}
          >
            Resume
          </motion.a> */}
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-gray-700 dark:text-gray-300 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div 
        className={`md:hidden fixed inset-x-0 top-[57px] bg-white dark:bg-gray-900 shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="font-medium text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={handleClick}
            >
              {link.name}
            </a>
          ))}
          {/* <a
            href="/resume.pdf"
            className="btn btn-primary mx-4"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
          >
            Resume
          </a> */}
        </div>
      </motion.div>
    </header>
  )
}

export default Navbar