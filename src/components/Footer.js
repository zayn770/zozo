import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="main-footer">
    <div className="footer-content-wrapper">
      <div className="footer-brand">Webcafe AI</div>
      <div className="footer-social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p className="footer-copyright">&copy; {new Date().getFullYear()} Webcafe AI. All rights reserved.</p>
    </div>
    {/* Back to Top button is now handled in HomePage.js */}
  </footer>
);

export default Footer;

