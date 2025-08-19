import React from "react";

function RefCounter() {
    const [email, setEmail] = React.useState('');
    const counterRef = React.useRef(0);

    const handleIncrementCounter = () => {
        counterRef.current = counterRef.current + 1;
        console.log(`Ref Counter: ${counterRef.current}`);
    }

    return (
        <>
            <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}></input>
            <p>
                Counter Value: {counterRef.current} <br />
            </p>

            <button onClick={handleIncrementCounter}>Increment</button>
        </>
    )
}

export default RefCounter;