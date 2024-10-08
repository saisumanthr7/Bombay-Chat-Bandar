import React from 'react';
import './DrinksMenu.css'; // Import DrinksMenu specific styles

const DrinksMenuItems = [
  { name: "Chocolate Shake", price: "80", description: "Rich and creamy chocolate shake." },
  { name: "Mango Smoothie", price: "70", description: "Fresh mango smoothie with yogurt." },
  // Add more DrinksMenu and shakes here...
];

const DrinksMenu = () => {
  return (
    <div className="menu-grid">
      {DrinksMenuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DrinksMenu;
