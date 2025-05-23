import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../../data/skillsData';

interface SkillBarProps {
  skill: Skill;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, index }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div 
          className={`h-full rounded-full ${
            skill.category === 'frontend'
              ? 'bg-primary-600 dark:bg-primary-500'
              : skill.category === 'backend'
              ? 'bg-secondary-600 dark:bg-secondary-500'
              : 'bg-accent-600 dark:bg-accent-500'
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;