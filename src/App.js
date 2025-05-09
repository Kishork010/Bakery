import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import HeroSection from './components/HeroSection';
import MapSection from './components/MapSection';  
import OpenHoursBanner from './components/OpenHoursBanner';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // smooth animation time in ms
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <HeroSection />
      <MapSection />
      <OpenHoursBanner />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
