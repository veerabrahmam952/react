import React, {memo, useCallback, useState} from "react";

const Button = memo(({handleClick})=> {
    console.log('Button component triggered');
    return <button onClick={handleClick}>Click here</button>
})

function UseCallBack() {
    const [count, setCount] = useState(0);
    const [otherState, setOtherState] = useState(0);
    
    const handleClick = useCallback(()=> {
        setCount(prev=> prev+1);
    }, [count])
    return(
        <>
        Count: {count}
        <br />
        Other State: {otherState}
        <br />
        <Button handleClick={handleClick} />
        <br />
        <button onClick={()=> setOtherState(prev => prev+1)}>Update Other State</button>
        </>
    )
}

export default UseCallBack;