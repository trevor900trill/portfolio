import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/ui/PageTransition';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectFilter from '../components/projects/ProjectFilter';
import { projects } from '../data/projectsData';

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projects;
    }
    return projects.filter(project => project.category === activeFilter);
  }, [activeFilter]);

  // Count projects by category for the filter
  const projectCount = useMemo(() => {
    const counts: Record<string, number> = {
      all: projects.length,
      frontend: 0,
      backend: 0,
      fullstack: 0,
      mobile: 0,
    };

    projects.forEach(project => {
      counts[project.category]++;
    });

    return counts;
  }, []);

  return (
    <PageTransition>
      {/* Header */}
      <header className="pt-32 pb-20 bg-gradient-to-br from-primary-50 to-gray-50 dark:from-gray-900 dark:to-gray-950">
        <div className="container-custom">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Projects
          </motion.h1>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Browse through my recent projects that showcase my skills and expertise across various technologies and domains.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <ProjectFilter 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
            projectCount={projectCount}
          />
          
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          ) : (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found with the selected filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;