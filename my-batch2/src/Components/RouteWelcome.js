import React from "react";
import { Link } from "react-router-dom";

function RouteWelcome() {
    return(
        <>
        <p>Welcome to the Router concept</p>
        <Link to='/counter'>Move to Counter Page</Link>
        <br />
        <Link to='/record/1'>Move to Record Page with params</Link>
        <br />
        <a href="/counter">Move counter with anchor tag</a>
        </>
    )
}

export default RouteWelcome;