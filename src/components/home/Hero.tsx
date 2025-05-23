import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about-preview");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-gray-50 dark:from-gray-900 dark:to-gray-950 -z-10" />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary-300 dark:bg-secondary-900 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent-300 dark:bg-accent-900 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300 rounded-full mb-4">
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Crafting Digital
              <br />
              <span className="text-primary-600 dark:text-primary-400">
                Experiences
              </span>{" "}
              That Matter
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I build elegant, high-performance web applications that deliver
              exceptional user experiences and solve real business problems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                to="/projects"
                icon={<ArrowRight size={18} />}
                iconPosition="right"
              >
                View My Work
              </Button>
              <Button to="/contact" variant="outline">
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Developer coding"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold">Trevor Mugo</h3>
                <p className="text-gray-200">Full-Stack Developer</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-64 h-64 bg-secondary-200 dark:bg-secondary-800 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-primary-200 dark:bg-primary-800 rounded-full -z-10" />
          </motion.div>
        </div>

        {/* Scroll Down Button */}
        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          onClick={scrollToNextSection}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ y: 5 }}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
