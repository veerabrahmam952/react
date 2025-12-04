import React, { useRef } from "react";

function TimeIntervalUseRef() {
    const inputRef = useRef(null);
    function handleStartTimer() {
      inputRef.current = setInterval(()=> {
        //Assume certain executing after every second
        console.log('Timer Running');
      }, 1000);
      console.log('After Timer', inputRef.current)
    }

    function handleStopTimer() {
        if(inputRef.current !== null){
           clearInterval(inputRef.current);
           inputRef.current = null;
           console.log('Stopped');
        }
    }
    return(
        <>
        <button onClick={handleStartTimer} >Start Timer</button>
        <button onClick={handleStopTimer} >Stop Timer</button>
        </>
    )
}

export default TimeIntervalUseRef;