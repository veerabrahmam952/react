import React from "react";
import Counter from "./Counter";

function UserStatus({isLoggedIn}) {
    if(isLoggedIn) {
        return( 
        <div>
            <p>User is logged in:</p>
            <Counter />
        </div>
        
       )
    }
    return(
        <div>
            <p>User is not logged in:</p>
        </div>
    ) 
}

//Function using ternary operator
function UserStatusTernary({isLoggedIn}) {
    return (
        <div>
            <p>User is {isLoggedIn ? "logged in" : "not logged in"}:</p>
            {/* {isLoggedIn && <Counter />} */}
            {isLoggedIn ? <Counter /> : <p>Please log in to see the counter.</p>}
        </div>
    );
}

//Function using logical AND operator
function UserStatusLogicalAnd({isLoggedIn}) {
    return (
        <div>
            {isLoggedIn && <p>User is logged in</p>}
            {!isLoggedIn && <p>User is not logged in</p>}
            {isLoggedIn && <Counter />}
            {!isLoggedIn && <p>Please log in to see the counter.</p>}
        </div>
    );
}

export {UserStatus, UserStatusTernary, UserStatusLogicalAnd}