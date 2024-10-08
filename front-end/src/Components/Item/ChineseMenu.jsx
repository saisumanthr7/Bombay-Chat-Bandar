import React, { useState } from 'react';
import './ChineseMenu.css'; // Import ChineseMenu specific styles

// Menu data separated by categories
const menuData = {
  "Rice": [
    { name: "Veg Fried Rice", price: "90", description: "Classic vegetable fried rice with soy sauce." },
    { name: "Schezwan Fried Rice", price: "100", description: "Spicy Schezwan-style fried rice." },
    { name: "Manchurian Fried Rice", price: "120", description: "Fried rice with Manchurian sauce." }
  ],
  "Noodles": [
    { name: "Veg Noodles", price: "90", description: "Classic stir-fried noodles with vegetables." },
    { name: "Schezwan Noodles", price: "100", description: "Spicy Schezwan-style noodles." },
    { name: "Manchurian Noodles", price: "120", description: "Noodles with Manchurian sauce." }
  ],
  "Rolls": [
    { name: "Veg Spring Roll", price: "70", description: "Crispy vegetable spring rolls." },
    { name: "Paneer Spring Roll", price: "90", description: "Spring rolls stuffed with paneer." }
  ],
  "Momos": [
    { name: "Veg Momo", price: "80", description: "Steamed vegetable dumplings." },
    { name: "Veg Fried Momo", price: "100", description: "Crispy fried vegetable dumplings." }
  ],
  "Manchuria": [
    { name: "Veg Manchuria", price: "120", description: "Crispy vegetable Manchurian balls in sauce." },
    { name: "Schezwan Manchuria", price: "130", description: "Spicy Schezwan-style Manchurian." }
  ]
};

const ChineseMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="chinese-menu">
      {Object.keys(menuData).map((category, index) => (
        <div key={index} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-grid">
            {menuData[category].map((item, idx) => (
              <div key={idx} className="menu-item" onClick={() => handleClick(item)}>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal for displaying item details */}
      {selectedItem && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <p><strong>Price:</strong> ₹{selectedItem.price}</p>
            <button className="close-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChineseMenu;
