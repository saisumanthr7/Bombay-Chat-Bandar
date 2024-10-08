import React, { useState } from 'react';
import './DrinksMenu.css'; // Import DrinksMenu specific styles

// Menu data for drinks
const menuData = {
  "Fresh Lime Soda": [
    { name: "Sweet", price: "40", description: "Refreshing sweet lime soda." },
    { name: "Salt", price: "40", description: "Tangy and salty lime soda." },
    { name: "Sweet & Salt", price: "40", description: "A mix of sweet and salty lime soda." },
    { name: "Masala", price: "40", description: "Spicy masala lime soda." }
  ]
};

const DrinksMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="drinks-menu">
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

export default DrinksMenu;
