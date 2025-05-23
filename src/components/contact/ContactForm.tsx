import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, MessageSquare, Send } from 'lucide-react';
import Button from '../ui/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  const inputClasses = "w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-gray-800 dark:text-gray-200 focus:border-primary-500 dark:focus:border-primary-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 dark:focus:ring-primary-400/50";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
      onSubmit={handleSubmit}
    >
      {submitSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-4 rounded-lg mb-6"
        >
          Thank you for your message! I'll get back to you soon.
        </motion.div>
      )}

      <div>
        <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Name
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 dark:text-gray-400">
            <User size={18} />
          </div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`${inputClasses} pl-10 ${errors.name ? 'border-red-500 dark:border-red-400' : ''}`}
            placeholder="Your name"
          />
        </div>
        {errors.name && <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 dark:text-gray-400">
            <Mail size={18} />
          </div>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`${inputClasses} pl-10 ${errors.email ? 'border-red-500 dark:border-red-400' : ''}`}
            placeholder="Your email"
          />
        </div>
        {errors.email && <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`${inputClasses} ${errors.subject ? 'border-red-500 dark:border-red-400' : ''}`}
          placeholder="What is this regarding?"
        />
        {errors.subject && <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
          Message
        </label>
        <div className="relative">
          <div className="absolute top-3 left-4 pointer-events-none text-gray-500 dark:text-gray-400">
            <MessageSquare size={18} />
          </div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className={`${inputClasses} pl-10 ${errors.message ? 'border-red-500 dark:border-red-400' : ''}`}
            placeholder="Your message"
          ></textarea>
        </div>
        {errors.message && <p className="mt-1 text-red-500 dark:text-red-400 text-sm">{errors.message}</p>}
      </div>

      <div>
        <Button
          type="submit"
          disabled={isSubmitting}
          icon={<Send size={18} />}
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </motion.form>
  );
};

export default ContactForm;