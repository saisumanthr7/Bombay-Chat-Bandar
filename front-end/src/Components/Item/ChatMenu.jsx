import React from 'react';
import './ChatMenu.css'; // Import ChatMenu specific styles

const ChatMenuItems = [
  { name: "Pani Puri", price: "20", description: "Crispy puris filled with tangy water and spicy fillings." },
  { name: "Masala Sev Puri", price: "40", description: "Crispy puris topped with spicy sev and chutneys." },
  // Add more ChatMenu items here...
];

const ChatMenu = () => {
  return (
    <div className="menu-grid">
      {ChatMenuItems.map((item, index) => (
        <div key={index} className="menu-item">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatMenu;
