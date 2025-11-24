import React, { useState } from "react";

const Counter = ()=> {
    const [counter, setCounter] = useState(0);
    const [name, setName] = useState('');

    function handleIncermentCounter() {
        setCounter(prevCnt=> prevCnt + 1); //another best approach
    }

    function handleDecrementCounter() {
      setCounter(prevCnt=> prevCnt -1);
    }

    function handleResetCounter() {
      setCounter(0);
    }

    function handleInputBoxName(event) {
       setName(event.target.value)
    }

    return(
        <>
        <p>Counter value {counter}</p>
        <p>Counter value {name}</p>
        <button name="increment" onClick={handleIncermentCounter}>Increment Counter</button>
        <button name="increment" onClick={handleDecrementCounter}>Decrement Counter</button>
        <button name="increment" onClick={handleResetCounter}>Reset Counter</button>
        <input type="text" onChange={handleInputBoxName} value={name}/>
        </>
    )
}

export default Counter;