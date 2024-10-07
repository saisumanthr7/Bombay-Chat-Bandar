import React from 'react';
import './TopSellers.css';
import panipuri from '../Assets/pp.png';
import bhelpuri from '../Assets/bp.png';
import manchurian from '../Assets/man.png';


const TopSellers = () => {
  return (
    <section className="top-sellers">
      <h2>Top Sellers</h2>
      <div className="sellers-container">
        <div className="seller-item">
          <img src={panipuri} alt="Chat Item" />
          <h3>Pani Puri</h3>
        </div>
        <div className="seller-item">
          <img src={bhelpuri} alt="Chat Item" />
          <h3>Bhel Puri</h3>
        </div>
        <div className="seller-item">
          <img src={manchurian} alt="Chinese Item" />
          <h3>Manchurian</h3>
        </div>
      </div>
      <button className="explore-btn">Explore Shop</button>
    </section>
    
  );
};

export default TopSellers;
