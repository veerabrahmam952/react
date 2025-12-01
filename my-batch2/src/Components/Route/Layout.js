import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
         <header>Header Component</header>

         <Outlet />

         <footer>Footer component</footer>
        </>
    )
}

export default Layout;