import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

function MainLayout() {
    return (
        <>
        <header>
            <h1>My Application</h1>
            <Link to="/welcome">Welcome</Link>
            <Link to="/member">Navigate to Member Page</Link>
            <Link to="/form">Form</Link>
        </header>
        <Outlet />
        <footer>
            <p>&copy; 2023 My Application</p>
        </footer>
        </>
        
    )
}

export default MainLayout;