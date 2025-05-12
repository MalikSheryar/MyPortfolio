import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'A Studio',
    description: 'A Studio is a creative production house offering services in filmmaking, video production, and post-production. Their website showcases professional services, recent projects, pricing packages, and client feedback, making it a one-stop platform for visual content creation.',
    image: 'https://images.stockcake.com/public/3/d/b/3db607e2-272d-4423-9bc7-63bac2b0259f/studio-recording-session-stockcake.jpg',
    technologies: ['HTML','CSS','BootStrap','JavaScript'],
    category: 'BootStrap',
    demoLink: 'https://a-studioapp.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Studio',
  },
  {
    id: 2,
    title: 'lighting-technicians',
    description: 'Lighting Technicians is a professional website likely dedicated to lighting solutions for events, film, theater, or architectural projects. It may offer services such as lighting design, technical setups, and equipment support, along with a portfolio showcasing past work.',
    image: 'https://www.budapestreporter.com/wp-content/uploads/2022/08/btl-workers-of-the-film-industry-the-lighting-technician-budapestreporter-2022-08-11_050002.png',
    technologies: ['HTML', 'CSS', 'Tailwind CSS'],
    category: 'Tailwind CSS',
    demoLink: 'https://lighting-technicians.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/LightingTechnicians',
  },
  {
    id: 3,
    title: 'We Trainers',
    description: 'We Trainers  is a professional fitness and training platform designed for personal trainers, gym instructors, and fitness enthusiasts. The website likely offers workout programs, training tips, and coaching services to help users achieve their fitness goals.',
    image: 'https://www.canfitpro.com/wp-content/uploads/2020/10/personal-trainer-testimonial-bg.jpg',
    technologies: ['HTML', 'CSS', 'Tailwind CSS'],
    category: 'Tailwind CSS',
    demoLink: 'https://we-trainers.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Trainers',
  },
  {
    id: 4,
    title: 'Resume Builder',
    description: 'Resume Builder  is a  user-friendly platform that helps users create professional portfolios with ease. Featuring customizable templates and a simple interface, it enables anyone even without technical skills to showcase their skills, projects, and experience effectively. It’s an ideal tool for professionals who want to present their work in a structured and visually appealing way.',
    image: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Tailwind CSS', 'React'],
    category: 'Tailwind & React',
    demoLink: 'https://profolio-builder-app.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Resume',
  },
  {
    id: 5,
    title: 'Linkly',
    description: 'Linkly is an advanced link management platform that lets businesses and marketers create, shorten, and track branded URLs. It supports custom domains, smart redirects by location or device, retargeting pixels, and detailed analytics. With features like QR codes, expiring links, A/B testing, and Google Sheets integration, it’s ideal for optimizing marketing campaigns.',
    image: 'https://linklyhq.com/static/b44178de58e12c40ea76a531273be0df/0ee99/hero-image.png',
    technologies: ['Tailwind CSS','React', ],
    category: 'Tailwind & React',
    demoLink: 'https://linklyapp.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Linkly',
  },
  {
    id: 6,
    title: 'Barbar Shop',
    description: 'Barbar Shop is an online platform that offers various beauty-related services such as hair styling, makeup, skincare, and more. The website provides a user-friendly interface for users to explore and choose services that suit their needs.',
    image: 'https://m.media-amazon.com/images/I/51+EfdX2CVL._AC_SL1001_.jpg',
    technologies: ['Tailwind CSS','React',],
    category: 'Tailwind & React',
    demoLink: 'https://beauty-services.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Barbershop',
  },
  
  {
    id: 7,
    title: 'Film Locations',
    description: 'Film Locations is an online platform that showcases iconic filming spots from popular movies around the world. The website allows users to explore real-world locations featured in famous films like Harry Potter, with visual references and direct links to Google Maps and Instagram posts. Its a great resource for movie lovers and travel enthusiasts who want to experience cinematic destinations in real life.',
    image: 'https://www.filmskills.com/fs-blogging-content/uploads/2022/05/Locations-Course-Banner-1024x341.jpg',
    technologies: ['Tailwind CSS','React',],
    category: 'Tailwind & React',
    demoLink: 'https://film-locations.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Filmlocation',
  },
  {
    id: 8,
    title: 'Calculator',
    description: 'The is a simple calculator application developed using HTML, CSS, and JavaScript. It provides users with basic arithmetic functionalities, including addition, subtraction, multiplication, and division. The interface is user-friendly and responsive, ensuring compatibility across various devices.',
    image: 'https://raw.githubusercontent.com/siddharth9300/Calculator-using-HTML-CSS-JavaScript/main/calculator.png',
    technologies: ['HTML','CSS','JavaScript',],
    category: 'JavaScript',
    demoLink: 'https://calculator-site-app.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Calculator',
  },
  {
    id: 9,
    title: 'Digital Clock',
    description: 'Digital clock  displays the current time in a 12-hour format with hours, minutes, seconds, and an AM/PM indicator. The clock updates every second  ensuring accurate timekeeping. The design is clean and responsive, making it suitable for various devices.',
    image: 'https://m.media-amazon.com/images/I/61MuSYQ7yhL.jpg',
    technologies: ['HTML','CSS','JavaScript',],
    category: 'JavaScript',
    demoLink: 'https://digitalclock-site-js.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Calculator',
  },
  {
    id: 10,
    title: 'Counter',
    description: 'Digital clock  displays the current time in a 12-hour format with hours, minutes, seconds, and an AM/PM indicator. The clock updates every second  ensuring accurate timekeeping. The design is clean and responsive, making it suitable for various devices.',
    image: 'https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fi.ibb.co%2F0BcFhHN%2Fproject-1.png',
    technologies: ['HTML','CSS','JavaScript',],
    category: 'JavaScript',
    demoLink: 'https://counterapp-site.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/CounterApp',
  },
  {
    id: 11,
    title: 'Hair Studio',
    description: 'The Hair Studio is a modern and responsive online platform designed for a barber shop. It offers essential features such as online pre-booking, service listings, and contact information. The site emphasizes affordability and experienced staff, aiming to provide a seamless user experience for clients seeking hair styling services.',
    image: 'https://images.newrepublic.com/9bba0e56c589fb3e06191969202abb446327a86a.jpeg?auto=format&fit=crop&crop=faces&q=65&w=1000&ar=3%3A2&ixlib=react-9.10.0',
    technologies: ['HTML','CSS'],
    category: 'HTML CSS',
    demoLink: 'https://hair-studio-app.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Hair-Studio',
  },
  {
    id: 12,
    title: 'Plants',
    description: 'The Plants Site App is a modern and user-friendly website dedicated to indoor plant lovers. It showcases a variety of affordable and popular indoor plants such as Boston Fern, Rubber Plant, Peace Lily, and Desert Rose. The website is designed to promote the benefits of having greenery indoors, such as improving air quality and enhancing home décor.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmeSpgqqzs-SCBZbebOvJCIWyOzo7dOFltSQ&s',
    technologies: ['HTML','CSS','JavaScript'],
    category: 'HTML CSS',
    demoLink: 'https://plants-site-app.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/Plants',
  },
  {
    id: 13,
    title: 'Shoes Brand',
    description: 'Shoes Brand is a modern and stylish online shoe store designed with a clean and user-friendly interface. It offers a wide range of footwear for men, women, and children, combining fashion with comfort and quality',
    image: 'https://i5.walmartimages.com/seo/Dumajo-Mens-Shoes-Fashion-Running-Sneaker-Casual-Leather-Sport-Shoes-Breathable-Comfortable-Walking-Shoes_61aded78-ba79-4b63-95af-8d3ba15d6eac.6466ccd16eec3b797d1e5ed526148b83.jpeg',
    technologies: ['HTML','CSS',],
    category: 'HTML CSS',
    demoLink: 'https://shoes-brand-site.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/ShoesBrand',
  },
  {
    id: 14,
    title: 'Rock Paper Scissors Game',
    description: 'The Rock Paper Scissors website is a simple and engaging online game where users can play the classic game against a computer. It features a clean and user-friendly interface with clear options for Rock, Paper, and Scissors. Each time a user makes a selection, the computer responds instantly, and the result is displayed along with updated scores.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4kYD4NKkaNaZDdFYuroKv-bjsx92Fk-onQ&s',
    technologies: ['HTML','CSS','JavaScript',],
    category: 'JavaScript',
    demoLink: 'https://rock-paper-scissors-site-app.netlify.app/',
    codeLink: 'https://github.com/MalikSheryar/RockPaperScissors-Game',
  },
  {
    id: 15,
    title: 'Tic Tac Toe Game',
    description: 'The Tic‑Tac‑Toe website is a simple two‑player game played on a 3×3 grid where players take turns placing  “X” and “O” marks.  After each move, the current game state updates instantly, and the “Winner” section displays the result when someone wins or the game ends in a draw. You can start over at any time using the “New Game” or “Reset Game” buttons. ',
    image: 'https://schoolmall.pk/cdn/shop/files/1-89_533x.jpg?v=1724153044',
    technologies: ['HTML','CSS','JavaScript',],
    category: 'JavaScript',
    demoLink: 'https://tic-tac-toe-game-mu-swart.vercel.app/',
    codeLink: 'https://github.com/MalikSheryar/Tic-Tac-Toe-Game',
  },
  {
    id: 16,
    title: 'Foodie',
    description: 'This website is a simple and responsive food ordering web application where users can browse a variety of food items displayed with images, names, and prices. Each item has an "Add to Cart" button, allowing users to select their desired food. A cart icon at the top shows the number of items added. ',
    image: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1273516682.jpg?c=original',
    technologies: ['Tailwind CSS','React',],
    category: 'Tailwind & React',
    demoLink: 'https://food-app-ashen-seven.vercel.app/',
    codeLink: 'https://github.com/MalikSheryar/FoodApp',
  },
];

const categories = ['all','HTML CSS', 'JavaScript','BootStrap', 'Tailwind CSS','Tailwind & React' ];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="card overflow-hidden group"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <div className="flex justify-between items-center">
              <a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-50 transition-colors"
                aria-label="View live demo"
              >
                <FiExternalLink size={20} />
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 p-2 rounded-full hover:bg-primary-50 transition-colors"
                aria-label="View source code"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 py-1 px-2 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = 
    activeCategory === 'all' 
      ? projects 
      : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section bg-gray-50 dark:bg-gray-800/30" ref={ref}>
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-md flex flex-wrap justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md font-medium transition-all mx-1 my-1 ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;