import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import SectionHeading from './common/SectionHeading';

type Certificate = {
  title: string;
  organization: string;
  date: string;
  image: string;
};

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const certificates: Certificate[] = [
    {
      title: 'Introduction to Data Science',
      organization: 'IBM / edX',
      date: 'April 12, 2024',
      image: '/portfolio/certificates/ibm-data-science.jpg',
    },
    {
      title: 'Frontend Web Development Internship',
      organization: 'Sattva Infotech',
      date: 'May 01 – June 30, 2024',
      image: '/portfolio/certificates/sattva-frontend.jpg',
    },
    {
      title: 'Data Science Internship',
      organization: 'SkillDzire',
      date: 'December 16, 2024 – April 12, 2025',
      image: '/portfolio/certificates/skilldzire-data-science.jpg',
    },
    {
      title: 'Full Stack Web Development',
      organization: 'TAP Academy',
      date: 'June 28, 2025',
      image: '/portfolio/certificates/tap-full-stack.jpg',
    },
  ];

  return (
    <section id="certificates" className="section">
      <div className="container">
        <SectionHeading
          title="Certificates"
          subtitle="Professional certifications, internships, and training achievements."
        />

        <motion.div
  ref={ref}
  initial="hidden"
  animate={inView ? 'visible' : 'hidden'}
  variants={containerVariants}
  className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
>
  {certificates.map((certificate, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="bg-white rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-xl flex flex-col h-full"
    >
      {/* Certificate Preview */}
      <div className="w-full h-56 bg-gray-50 flex items-center justify-center p-4">
        <img
          src={certificate.image}
          alt={certificate.title}
          className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Certificate Details */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-medium text-primary-900 mb-2">
          {certificate.title}
        </h3>

        <p className="text-primary-700 font-medium mb-1">
          {certificate.organization}
        </p>

        <p className="text-primary-600 text-sm mb-5">
          {certificate.date}
        </p>

        <a
          href={certificate.image}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-2 px-4 inline-flex items-center self-start mt-auto"
        >
          <ExternalLink size={18} className="mr-2" />
          <span>View Certificate</span>
        </a>
      </div>
    </motion.div>
  ))}
</motion.div>
      </div>
    </section>
  );
};

export default Certificates;