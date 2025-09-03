import React from "react";
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Cart from './Cart.js';

function Header() {
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        borderBottom: '1px solid #e7e7e7'
    };

    const linkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontSize: '16px',
        marginLeft: '15px'
    };
     return(
        <header style={headerStyle}>
            <h1>My Product Store</h1>
            <div style={linkStyle}>
                <Link style={{'color': 'white'}} to="/cart">Cart</Link>
            </div>
             
        </header>
     )
}

export default Header;