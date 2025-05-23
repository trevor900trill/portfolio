import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon } from 'lucide-react';
import { Education } from '../../data/skillsData';

interface EducationCardProps {
  education: Education;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  return (
    <motion.div 
      className="mb-8 relative pl-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline dot and line */}
      <div className="absolute top-0 left-0 w-6 h-6 bg-accent-100 dark:bg-accent-900/50 rounded-full flex items-center justify-center">
        <GraduationCapIcon className="w-3 h-3 text-accent-600 dark:text-accent-400" />
      </div>
      {index !== 1 && <div className="absolute top-6 left-3 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />}

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
          <h3 className="text-xl font-bold">{education.degree}</h3>
          <span className="px-3 py-1 text-xs font-medium bg-accent-100 dark:bg-accent-900/50 text-accent-700 dark:text-accent-300 rounded-full">
            {education.period}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400">
          {education.institution} • {education.location}
        </p>
      </div>
    </motion.div>
  );
};

export default EducationCard;