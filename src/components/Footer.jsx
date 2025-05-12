import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-primary-600 dark:text-primary-400 flex items-center">
              <span className="text-accent-500">{'<'}</span>
              <span>MS</span>
              <span className="text-accent-500">{'/>'}</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Front-end developer crafting beautiful web experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a 
                href="https://github.com/MalikSheryar" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 p-2 rounded-full transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/malik-sheryar-a048451b8/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 flex items-center">
              © {currentYear} Malik Sheryar Shoukat. Made with <FiHeart className="text-error-500 mx-1" /> using React & Tailwind
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <a href="#home" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;