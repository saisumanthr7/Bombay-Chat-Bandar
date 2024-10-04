import React, { useState } from 'react';
import './Navbar.css'


import logo from '../Assets/logo.png'

const Navbar = () => {

    const [menu, setMenu] = useState("Home");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>BOMBAY CHAT</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Home")}}>Home{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Shop")}}>Shop{menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Blog")}}>Blog{menu==="Blog"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Contact")}}>Contact{menu==="Contact"?<hr/>:<></>}</li>
        </ul>
    </div>
  );
};

export default Navbar;
