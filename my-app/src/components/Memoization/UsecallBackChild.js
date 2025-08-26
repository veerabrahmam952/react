import React from "react";

function UsecallBackChild({onClick}) {
    console.log("Child component rendered");
    return (
        <div>
            <button onClick={onClick}>Click Me - Child</button>
        </div>
    )
}

export default UsecallBackChild;