import React from 'react';
import { motion } from 'framer-motion';
import { BriefcaseIcon } from 'lucide-react';
import { Experience } from '../../data/skillsData';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index }) => {
  return (
    <motion.div 
      className="mb-8 relative pl-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline dot and line */}
      <div className="absolute top-0 left-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center">
        <BriefcaseIcon className="w-3 h-3 text-primary-600 dark:text-primary-400" />
      </div>
      <div className="absolute top-6 left-3 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
          <h3 className="text-xl font-bold">{experience.title}</h3>
          <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full">
            {experience.period}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experience.company} • {experience.location}
        </p>
        
        <ul className="space-y-2">
          {experience.description.map((item, i) => (
            <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
              <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;