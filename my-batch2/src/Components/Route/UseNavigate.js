import React from "react";
import { useNavigate } from "react-router-dom";

function UseNavigate() {
    const navigate = useNavigate();
    const handleClick = ()=> {
        //Form valid
       navigate('/record/2');
    }
    return (
        <>
        <p>This is my form</p>
        <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default UseNavigate