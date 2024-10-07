import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");

    return (
        <nav className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Bombay Chat Logo" />
                <p>BOMBAY CHAT</p>
            </div>

            <ul className='nav-menu'>
                <li className={menu === "Home" ? 'active' : ''} onClick={() => setMenu("Home")}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={menu === "Shop" ? 'active' : ''} onClick={() => setMenu("Shop")}>
                    <Link to='/Shop'>Shop</Link>
                </li>
                <li className={menu === "Blog" ? 'active' : ''} onClick={() => setMenu("Blog")}>
                    <Link to='/Blog'>Blog</Link>
                </li>
                <li className={menu === "Contact" ? 'active' : ''} onClick={() => setMenu("Contact")}>
                    <Link to='/Contact'>Contact</Link>
                </li>
            </ul>

            <Link to='/Shop'>
                <button className="order-online-btn">
                    Order Online
                </button>
            </Link>
        </nav>
    );
};

export default Navbar;
