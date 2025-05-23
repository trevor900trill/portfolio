import React from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/ui/PageTransition";
import SectionHeading from "../components/ui/SectionHeading";
// import ContactForm from "../components/contact/ContactForm";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact: React.FC = () => {
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
            Get In Touch
          </motion.h1>
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              Have a project in mind or want to discuss potential opportunities?
              I'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Email</h3>
                    <a
                      href="mailto:trevormugolawrence@gmail.com"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      trevormugolawrence@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Phone</h3>
                    <a
                      href="tel:+14155552671"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      (+254)724588363
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Connect</h2>
              <div className="flex gap-4">
                <a
                  href="https://github.com/trevor900trill"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/50 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={22} />
                </a>
                <a
                  href="https://linkedin.com/in/trevor-mugo-195a55193/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/50 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={22} />
                </a>
                <a
                  href="https://x.com/M_U_G_O_H"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/50 dark:hover:text-primary-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={22} />
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-8">Send me a message</h2>
              <ContactForm />
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container-custom">
          <SectionHeading
            title="Find Me"
            subtitle="Based in Nairobi, Kenya, but available for remote work worldwide."
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-80 bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md"
          >
            {/* This would typically be a map component */}
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/15496542/pexels-photo-15496542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
              }}
            ></div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
