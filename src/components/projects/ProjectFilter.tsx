import React from 'react';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
  projectCount: Record<string, number>;
}

const ProjectFilter: React.FC<ProjectFilterProps> = ({ 
  activeFilter, 
  setActiveFilter,
  projectCount 
}) => {
  const filters = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeFilter === filter.id
              ? 'text-white'
              : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
          }`}
        >
          {activeFilter === filter.id && (
            <motion.span
              layoutId="filterPill"
              className="absolute inset-0 bg-primary-600 dark:bg-primary-700 rounded-full -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
          {filter.label} {projectCount[filter.id] ? `(${projectCount[filter.id]})` : ''}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;