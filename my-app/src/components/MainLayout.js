import React from "react";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
        <header>
            <h1>My Application</h1>
        </header>
        <Outlet />
        <footer>
            <p>&copy; 2023 My Application</p>
        </footer>
        </>
        
    )
}

export default MainLayout;