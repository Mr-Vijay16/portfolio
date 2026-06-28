import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

type ProjectTag = 'Web App' | 'Frontend' | 'Backend' | 'Full Stack';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: ProjectTag[];
  liveLink?: string;
  githubLink?: string;
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projects: Project[] = [

{
      title: 'Hostel Management System',
      description: 'A hostel management system that helps students and administrators manage room allocations, admissions, fee payments, and hostel records efficiently.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80',
      tags: ['Full Stack', 'Frontend', 'Backend'],
      liveLink: 'https://hostel-management-system-aawv.onrender.com/',
      githubLink: 'https://hostel-management-system-aawv.onrender.com/',
    },
    {
  title: 'College Admission System',
  description:
    'A full-stack web application that streamlines college admission management by enabling administrators to manage student registrations, admissions, reports, backups, and academic records through a secure and responsive dashboard.',

 image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&auto=format&fit=crop&q=80',

  tags: ['Frontend', 'Backend'],

  liveLink: 'https://mti-lms.onrender.com/',

  githubLink: 'https://github.com/Mr-Vijay16/MTI-LMS',
},
    {
      title: 'Tasty Recipes',
      description: 'A recipe-sharing platform that allows users to view, submit, and comment on recipes. Built entirely using Bolt.ai.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      tags: ['Web App', 'Frontend'],
      liveLink: 'https://mr-vijay16.github.io/TastyRecipes/',
      githubLink: 'https://github.com/Mr-Vijay16/TastyRecipes',
    },
    {
      title: 'Weather Application',
      description: 'A modern weather application that provides real-time weather information for any location. Features current weather conditions, forecasts, and an intuitive user interface with responsive design.',
      image: 'https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=1260&q=80',
      tags: ['Web App', 'Frontend'],
      liveLink: 'https://weather-application-pink-delta.vercel.app/',
      githubLink: 'https://github.com/user163737/Weather-Application/tree/main/Weather%20Application',
    },
    
  ];

  return (
    <section id="projects" className="section bg-primary-50">
      <div className="container-custom">
        <SectionHeading title="Projects" subtitle="My recent work" />
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl"
            >
              <div className="md:grid md:grid-cols-2">
                <div className="relative h-64 md:h-full overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 space-x-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-block px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm text-primary-900 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-medium text-primary-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-primary-700 mb-6">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary py-2 px-4"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a 
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline py-2 px-4"
                      >
                        <Github size={18} className="mr-2" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
