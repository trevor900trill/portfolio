import React from 'react';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactPreview from '../components/home/Contact';
import CTABanner from '../components/home/CTABanner';
import PageTransition from '../components/ui/PageTransition';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <Hero />
      <AboutPreview />
      <FeaturedProjects />
      <CTABanner />
      <ContactPreview />
    </PageTransition>
  );
};

export default Home;