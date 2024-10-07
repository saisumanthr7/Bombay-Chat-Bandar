import React from 'react';
import './Hero.css';
import backgroundImage from '../Assets/Chatbackgroudimage.png'

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h2><span className="highlight">WELCOME TO</span></h2>
           <h1><span className="highlight">BOMBAY CHAT BANDAR</span> </h1>
        <p><span className="highlight">Explore the best of street food and tantalizing Chinese flavors!</span></p>
        <button className="explore-btn">Explore Shop</button>
      </div>
    </div>
  );
};

export default Hero;
