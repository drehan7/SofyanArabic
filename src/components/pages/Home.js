import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import About from '../About';
import Contact from '../Contact';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
