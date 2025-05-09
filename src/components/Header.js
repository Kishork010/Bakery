import React, { useEffect, useState } from 'react';
import './Header.css';
import logo from '../assets/images/Logo.jpg';
import logo1 from '../assets/images/veg-logo.png';

function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop && scrollTop > 100) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <header className={`header ${showHeader ? 'show' : 'hide'}`}>
      <div className="header-top">
        <div className="logo-bakery-name">
          <img src={logo} alt="Logo" className="logo" />
          <span className="bakery-name">Shah Sweet & Baker's</span>
        </div>
        <div className="right-logo">
          <img src={logo1} alt="Right Logo" className="logo1" />
        </div>
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
