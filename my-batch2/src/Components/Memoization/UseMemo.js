import React, { useMemo, useState } from "react";

function calculateFibonacci(n) {
    console.log('renders');
    let result = 1;
    for(let i=0; i< 1000000000; i++){
        result +=n;
    }
    return result;
}

function UseMemo() {
    const [count, setCount] = useState(1);
    const [toggle, setToggle] = useState(false)
    
    // const fibValue = calculateFibonacci(count);
    const fibValue = useMemo(()=> calculateFibonacci(count), [count]);
    
    function handleCount() {
        setCount(prev=> prev+1);
    }
    function handleToggle() {
        setToggle(!toggle);
    }
    return(
        <>
        Count: {count}
        <br />
        Fib value: {fibValue}
        <br />
        <button onClick={handleCount}>Increment Counter</button>
        <br />
        Toggle: {toggle ? 'ON': 'OFF'}
        <button onClick={handleToggle}>Toggle Does not re calculate</button>
        </>
    )
}

export default UseMemo;