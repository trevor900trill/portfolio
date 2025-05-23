import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const CTABanner: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-800 dark:to-accent-800 -z-10" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 right-0 h-px bg-white" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white" />
        <div className="absolute inset-0 grid grid-cols-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-white/20 h-full" />
          ))}
        </div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center text-white max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to bring your project to life?
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's collaborate to create something exceptional that meets your business goals and delights your users.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              to="/contact" 
              variant="secondary"
              icon={<ArrowRight size={18} />}
              iconPosition="right"
              className="text-white bg-white/20 hover:bg-white/30 border-white/30 backdrop-blur-sm"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;