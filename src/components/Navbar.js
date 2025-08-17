import React from 'react';
import './Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Webcafe AI</div>
    <ul className="navbar-links">
      <li><a href="#">Home</a></li>
      <li><a href="#features">Features</a></li>
      <li><a href="#portfolio">Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;

