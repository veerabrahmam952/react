import React, { useRef } from "react";

function FocusUser() {
     const inputRef = useRef(null);
     function handleOnClick() {
        console.log(inputRef);
       if(inputRef.current.value){
        console.log(inputRef.current.value);
        inputRef.current.focus();
       }
     }
    return(
        <>
          {inputRef.current?.value ?? ''}
          <input type="text" ref={inputRef} />
          <button onClick={handleOnClick}>Focus Input</button>
        </>
    )
}

export default FocusUser;