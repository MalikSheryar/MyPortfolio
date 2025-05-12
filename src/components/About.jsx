import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDownload } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800/30" ref={ref}>
      <div className="container-custom">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-600/20 to-accent-600/20 rounded-lg blur-lg"></div>
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Working on code" 
                className="rounded-lg shadow-lg relative z-10 w-full"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Front-end Developer
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm Malik Sheryar Shoukat, a passionate Front-end Developer with 2 years of experience building 
              modern web applications. I specialize in React and have a strong foundation in 
              HTML, CSS,Bootstrap, tailwind css  and JavaScript.
            </p>      
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  B.S. Computer Science<br />
                  Comsat University Islamabad 
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  2+ Years<br />
                  Professional Experience
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;