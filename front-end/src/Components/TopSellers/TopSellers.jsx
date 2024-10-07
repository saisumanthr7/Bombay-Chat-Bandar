import React from 'react';
import './TopSellers.css';

const TopSellers = () => {
  return (
    <section className="top-sellers">
      <h2>Top Sellers</h2>
      <div className="sellers-container">
        <div className="seller-item">
          <img src="none.png" alt="Chat Item" />
          <h3>Pani Puri</h3>
        </div>
        <div className="seller-item">
          <img src="none.png" alt="Chat Item" />
          <h3>Bhel Puri</h3>
        </div>
        <div className="seller-item">
          <img src="none.png" alt="Chinese Item" />
          <h3>Hakka Noodles</h3>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
