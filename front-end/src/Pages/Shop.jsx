import React, { useState } from 'react';
import Chat from '../Components/Menu/ChatMenu';
import Chinese from '../Components/Menu/ChineseMenu'; 
import Drinks from '../Components/Menu/DrinksMenu'; 
import './Shop.css'; 

const Shop = () => {
  const [activeTab, setActiveTab] = useState(''); // State to keep track of selected tab

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab when clicked
  };

  return (
    <div className="shop">
      <h1 className="shop-title">MENU</h1>

      {/* Tabs Section with background images */}
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'chat' ? 'active' : ''}`}
          style={{ backgroundImage: 'url("/images/chat-background.jpg")' }}  // Update image paths
          onClick={() => handleTabClick('chat')}
        >
          Chat
        </div>
        <div
          className={`tab ${activeTab === 'chinese' ? 'active' : ''}`}
          style={{ backgroundImage: 'url("/images/chinese-background.jpg")' }}  // Update image paths
          onClick={() => handleTabClick('chinese')}
        >
          Chinese
        </div>
        <div
          className={`tab ${activeTab === 'shakes' ? 'active' : ''}`}
          style={{ backgroundImage: 'url("/images/shakes-background.jpg")' }}  // Update image paths
          onClick={() => handleTabClick('shakes')}
        >
          Drinks & Shakes
        </div>
      </div>

      {/* Render the corresponding menu based on the selected tab */}
      <div className="menu-content">
        {activeTab === 'chat' && <Chat/>}
        {activeTab === 'chinese' && <Chinese/>}
        {activeTab === 'shakes' && <Drinks/>}
      </div>
    </div>
  );
};

export default Shop;
