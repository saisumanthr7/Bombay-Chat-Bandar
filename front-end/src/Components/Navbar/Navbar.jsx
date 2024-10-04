import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("Home");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Bombay Chat Logo" />
                <p>BOMBAY CHAT</p>
            </div>

            <ul className='nav-menu'>
                <li onClick={() => setMenu("Home")}>
                    <Link to='/'>Home</Link>
                    {menu === "Home" && <hr />}
                </li>
                <li onClick={() => setMenu("Shop")}>
                    <Link to='/Shop'>Shop</Link>
                    {menu === "Shop" && <hr />}
                </li>
                <li onClick={() => setMenu("Blog")}>
                    <Link to='/Blog'>Blog</Link>
                    {menu === "Blog" && <hr />}
                </li>
                <li onClick={() => setMenu("Contact")}>
                    <Link to='/Contact'>Contact</Link>
                    {menu === "Contact" && <hr />}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
