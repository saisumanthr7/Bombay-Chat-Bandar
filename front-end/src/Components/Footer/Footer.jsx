import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Menu */}
      <div className="footer-menu">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
