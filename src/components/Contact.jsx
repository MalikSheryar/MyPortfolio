import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Set loading state
    setFormStatus({
      submitted: false,
      success: false,
      message: 'Sending your message...',
      loading: true
    });

    try {
      const response = await fetch('https://formsubmit.co/ajax/sherrymalik2002@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _template: 'table'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setFormStatus({ 
          submitted: true, 
          success: true, 
          message: 'Thank you! Your message has been sent successfully. I will reply soon!',
          loading: false
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setFormStatus({ 
        submitted: true, 
        success: false, 
        message: 'Something went wrong. Please try again or email me directly at sherrymalik2002@gmail.com',
        loading: false
      });
    }
  };

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'sherrymalik2002@gmail.com',
    },
    {
      icon: <FiPhone size={24} />,
      title: 'Phone',
      value: '03135811474',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      value: 'Islamabad, PK',
      link: 'https://www.google.com/maps/place/Islamabad/',
    },
  ];

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Let's work together
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Have a project in mind or just want to chat? Feel free to reach out. 
              I'm currently available for freelance work and open to discussing new opportunities.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link || `mailto:${info.value}`}
                  target={info.title === 'Location' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800/40 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send me a message
              </h3>
              
              {formStatus.submitted && (
                <div className={`p-4 rounded-lg mb-6 ${formStatus.success ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-6"
                action="https://formsubmit.co/sherrymalik2002@gmail.com" 
                method="POST"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Your Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label 
                    htmlFor="subject" 
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label 
                    htmlFor="message" 
                    className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn btn-primary w-full flex justify-center items-center"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FiSend className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;