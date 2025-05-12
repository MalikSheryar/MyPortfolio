import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayout, FiDatabase, FiTool } from 'react-icons/fi';

const skills = [
  {
    category: 'Frontend',
    icon: <FiCode size={36} />,
    items: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3 ', level: 90 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'React.js', level: 90 },
    ],
  },
  {
    category: 'UI Frameworks',
    icon: <FiLayout size={36} />,
    items: [
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Bootstrap', level: 90 },
      { name: 'Styled Components', level: 90 },
    ],
  },
  // {
  //   category: 'Backend Knowledge',
  //   icon: <FiDatabase size={36} />,
  //   items: [
  //     { name: 'Node.js', level: 20 },
  //     { name: 'Express', level: 20 },
  //     { name: 'Firebase', level: 20 },
  //     { name: 'MongoDB', level: 20 },
  //     { name: 'RESTful APIs', level: 20 },
  //   ],
  // },
  {
    category: 'Tools & Others',
    icon: <FiTool size={36} />,
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'Figma', level: 80 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
];

const SkillCategory = ({ category, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="card p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex items-center mb-6">
        <div className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 p-3 rounded-lg mr-4">
          {category.icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {category.category}
        </h3>
      </div>
      <div className="space-y-5">
        {category.items.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: delay + 0.1 * index }}
          >
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                initial={{ width: 0 }}
                animate={inView ? { width: `${skill.level}%` } : {}}
                transition={{ duration: 0.8, delay: delay + 0.1 * index, ease: "easeOut" }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container-custom">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        
        <motion.p
          className="text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          As a front-end developer, I've honed my skills across various technologies and frameworks.
          Here's my technical toolkit that I use to build beautiful, responsive, and user-friendly web applications.
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category, index) => (
            <SkillCategory 
              key={category.category} 
              category={category} 
              delay={0.2 + index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;