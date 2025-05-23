import React, { useEffect, useState } from 'react'; // ✅ Add useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import BookingForm from './components/BookingForm';
import Menu from './components/Menu';
import Cart from './components/Cart';

function HomePage() {
  return (
    <>
      <Hero />
      <HeroSection />
      <MapSection />
      <OpenHoursBanner />
      <BookingForm />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // ✅ Add cart state and function
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} /> {/* ✅ pass addToCart */}
        <Route path="/cart" element={<Cart cartItems={cartItems} />} /> {/* ✅ pass cartItems */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path="/map" element={<MapSection />} />  
        <Route path="/open-hours" element={<OpenHoursBanner />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/hero-section" element={<HeroSection />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
