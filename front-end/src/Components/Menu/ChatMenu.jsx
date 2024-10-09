import React, { useState } from 'react';
import './ChatMenu.css'; // Import ChatMenu specific styles

// Menu data separated by categories
const menuData = {
  "Chat Special": [
    { name: "Samosa Chaat", price: "50", description: "Samosa served with tangy Ragada." },
    { name: "Kachori Chaat", price: "50", description: "Kachori served with spicy Ragada." },
    { name: "Aloo Tikki Chaat", price: "50", description: "Crispy Aloo Tikki served with Ragada." },
    { name: "Papdi Ragada", price: "50", description: "Crispy Papdi served with Ragada." }
  ],
  "Pav Special": [
    { name: "Butter Pav Bhaji", price: "70", description: "Butter Pav Bhaji with a rich and spicy flavor." },
    { name: "Masala Pav Bhaji", price: "80", description: "Spicy Masala Pav Bhaji." },
    { name: "Cheese Pav Bhaji", price: "80", description: "Cheese-topped Pav Bhaji." },
    { name: "Wada Pav", price: "30", description: "Classic Wada Pav with spicy chutney." },
    { name: "Cheese Wada Pav", price: "40", description: "Cheese Wada Pav for extra indulgence." }
  ],
  "Dhai Special": [
    { name: "Raj Kachori", price: "60", description: "Stuffed Raj Kachori with yogurt and chutneys." },
    { name: "Dahi Kachori", price: "50", description: "Dahi-filled Kachori with chutneys." },
    { name: "Dahi Wada", price: "50", description: "Dahi Wada served with yogurt and spices." },
    { name: "Dahi Samosa", price: "50", description: "Samosa with a topping of dahi and chutneys." }
  ],
  "Snacks Special": [
    { name: "Pani Puri (6 pcs)", price: "20", description: "Crispy puris filled with tangy water." },
    { name: "Masala / Sev Puri (6 pcs)", price: "40", description: "Crispy puris topped with sev and chutneys." },
    { name: "Samosa", price: "20", description: "Deep-fried crispy pastry filled with spiced potatoes." },
    { name: "Bhel Puri", price: "50", description: "Spicy and tangy Bhel Puri with tamarind chutney." }
  ]
};

const ChatMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="chat-menu">
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

export default ChatMenu;
