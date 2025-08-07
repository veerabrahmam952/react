import React, { useState } from "react";
import Student from "./Student";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');

    function handleIncrement() {
        setCounter(prevCounter => prevCounter + 1);
    }

    function handleDecrement() {
        setCounter(prevCounter => prevCounter - 1);
    }

    function handleReset() {
      setCounter(0)
    }

    function handleInputChange(event) {
        setText(event.target.value);
    }

    return(
        <>
        <label htmlFor="live-input">Type</label>
        <input
        type="text"
        id="unique"
        value={text}
        onChange={handleInputChange} />
        <p>You are typing {text}</p>
        Counter is {counter}
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <Student name="Harini" classText="React" grade="A" counter={counter}/>
        </>
    )
}

export default Counter;