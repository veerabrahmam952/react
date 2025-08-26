import React from "react";
import UsecallBackChild from "./UsecallBackChild.js";
import { set } from "react-hook-form";

function UseCallBackParent() {
    const [count, setCount] = React.useState(0);
    const [theme, setTheme] = React.useState('light');

    const handleClick = React.useCallback(()=> {
        setCount(count + 1);
        console.log("Button clicked - child");
    }, [count]);

    const handleOnClick = ()=> {
        setCount(count + 1);
    }

    return (
        <>
        <p>Count : {count}</p>
        <button onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme: ({theme})</button>
        <UsecallBackChild onClick={handleClick} />
        </>
    )
}

export default UseCallBackParent;