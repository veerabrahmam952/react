import React from "react";

function ConditionalRendering(props) {
    
    if(props.isLoggedIn === 'ADMIN') {
       return(
        <>
         <p>Logged in User is Admin</p>
        </>
    )
    }
    return(
        <>
        <p>Logged in User is General User</p>
        </>
    )
}

function TerniaryCondition(props) {
    return(
        <>
          <p>{props.isLoggedIn === 'ADMIN' ? 'Logged in User is Admin' : 'Logged in User is General User'}</p>
        </>
    )
}

function AndOperator(props) {
    return (
        <>
        {props.isLoggedIn === 'ADMIN' && <p>Logged in User is Admin</p> }
        </>
    )
}

export {ConditionalRendering, TerniaryCondition, AndOperator};