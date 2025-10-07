import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Contact from '../components/Contact';

const AboutPage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Contact />
    </div>
  );
};

export default AboutPage;
