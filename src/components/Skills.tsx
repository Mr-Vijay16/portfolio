import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from './common/SectionHeading';

type Skill = {
  name: string;
  icon: React.ReactNode;
  category: 'Languages' | 'Web Technologies' | 'Frameworks' | 'Tools' | 'Databases';
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  const skills: Skill[] = [
    {
      name: 'Python',
      category: 'Languages',
      icon: (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    alt="Python"
    className="w-8 h-8"
  />
),
    },
    {
      name: 'Java',
      category: 'Languages',
      icon: (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    alt="Java"
    className="w-8 h-8"
  />
),
    },
    {
      name: 'JavaScript',
      category: 'Languages',
      icon: (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    alt="JavaScript"
    className="w-8 h-8"
  />
),
    },
    
    {
      name: 'HTML',
      category: 'Web Technologies',
      icon: (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    alt="HTML"
    className="w-8 h-8"
  />
),
    },
    {
      name: 'CSS',
      category: 'Web Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      category: 'Web Technologies',
      icon: (
      <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
      alt="Tailwind CSS"
      className="w-8 h-8"
    />
  ),
},
    {
      name: 'React',
      category: 'Frameworks',
      icon: (
      <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
      alt="React"
      className="w-8 h-8" 
/>
  ),
},
    {
  name: 'Django',
  category: 'Frameworks',
  icon: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
      alt="Django"
      className="w-8 h-8"
    />
  ),
},

{
  name: 'Django',
  category: 'Frameworks',
  icon: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
      alt="Django"
      className="w-8 h-8"
    />
  ),
},
    
    {
      name: 'VSCode',
      category: 'Tools',
     icon: (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    alt="VS Code"
    className="w-8 h-8"
  />
),
    },
    {
      name: 'Git',
      category: 'Tools',
      icon: (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    alt="Git"
    className="w-8 h-8"
  />
),
    },
    {
      name: 'GitHub',
      category: 'Tools',
      icon: (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    alt="GitHub"
    className="w-8 h-8"
  />
),
    },
    {
      name: 'Eclipse',
      category: 'Tools',
      icon: (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg"
    alt="Eclipse"
    className="w-8 h-8"
  />
),
    },
    {
  name: 'MongoDB',
  category: 'Databases',
  icon: (
    <img 
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
      alt="MongoDB"
      className="w-8 h-8"
    />
  ),
},
    {
      name: 'MySQL',
      category: 'Databases',
      icon: (
  <img 
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    alt="MySQL"
    className="w-8 h-8"
  />
),
    },
    
  ];

  // Group skills by category
  const categories = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container-custom">
        <SectionHeading title="Skills" subtitle="Technologies I work with" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-10"
        >
          {Object.entries(categories).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-medium text-primary-800 mb-6">{category}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="card hover:shadow-md flex flex-col items-center text-center p-6"
                  >
                    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-accent/5 text-accent">
                      {skill.icon}
                    </div>
                    <h4 className="text-primary-900 font-medium">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
