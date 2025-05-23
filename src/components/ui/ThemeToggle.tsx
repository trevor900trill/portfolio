import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <div className="relative">
        {theme === 'light' ? (
          <Moon className="h-5 w-5 text-gray-700 hover:text-primary-600 transition-colors" />
        ) : (
          <Sun className="h-5 w-5 text-gray-300 hover:text-primary-400 transition-colors" />
        )}
      </div>
    </motion.button>
  );
};

export default ThemeToggle;