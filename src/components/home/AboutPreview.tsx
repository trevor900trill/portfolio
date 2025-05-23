import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Lightbulb } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const AboutPreview: React.FC = () => {
  const skills = [
    {
      title: 'Frontend Development',
      description: 'Creating responsive, accessible, and performant user interfaces using modern web technologies.',
      icon: <Code className="h-8 w-8 text-primary-600 dark:text-primary-400" />,
    },
    {
      title: 'Backend Development',
      description: 'Building robust, scalable server-side applications and APIs with a focus on security and performance.',
      icon: <Server className="h-8 w-8 text-secondary-600 dark:text-secondary-400" />,
    },
    {
      title: 'Problem Solving',
      description: 'Applying analytical thinking and creative solutions to overcome complex technical challenges.',
      icon: <Lightbulb className="h-8 w-8 text-accent-600 dark:text-accent-400" />,
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="about-preview" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <SectionHeading 
          title="About Me"
          subtitle="I'm a passionate full-stack developer with over 5 years of experience building web applications that deliver exceptional user experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              variants={animationVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Button to="/about">
            Learn More About Me
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;