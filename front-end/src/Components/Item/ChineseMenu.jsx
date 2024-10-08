import React from 'react';
import './ChineseMenu.css'; // Import ChineseMenu specific styles

const ChineseMenuItems = [
  { name: "Veg Spring Rolls", price: "50", description: "Crispy rolls filled with mixed vegetables." },
  { name: "Paneer Manchurian", price: "70", description: "Paneer cubes in a spicy Manchurian sauce." },
  // Add more ChineseMenu items here...
];

const ChineseMenu = () => {
  return (
    <div className="menu-grid">
      {ChineseMenuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ChineseMenu;
