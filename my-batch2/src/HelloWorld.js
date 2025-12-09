import React, { useState } from "react";

function DisplayIncrementCounter() {
    const [count, setCount] = useState(1);
    const [incerement, setIncrement] = useState("1");
    let timerId = null;

    function handleStartCounter() {
        timerId = setInterval(()=>{
           setCount((prev)=> prev+ incerement );
        }, 1000)
    }

    function handlePauseCounter() {
        console.log(timerId);
        clearInterval(timerId);
    }

    function handleResetCounter() {
        setCount(1);
    }
    
    return(
        <>
         Count: {count}
         <input onChange={(e)=> setIncrement(e.target.value)} type="text" value={incerement}/>
         <br />
         <button onClick={handleStartCounter} >Start</button>
         <button onClick={handlePauseCounter} >Pause</button>
         <button onClick={handleResetCounter} >Reset</button>
        </>
    )
}

export default DisplayIncrementCounter;