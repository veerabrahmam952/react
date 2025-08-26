import React from 'react';

function UseMemo({number}) {
    const calculateFactoral = (n)=> {
       let i = 1;
       for(let j=1; j<=n; j++) {
         i = i * j;
       }
       return i;
    }

    const factorial = React.useMemo(()=> calculateFactoral(number), [number]);

    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h2>UseMemo</h2>
            <p>Factorial of 5 is {factorial}</p>
            <button onClick={()=> setCount(count + 1)}>Increment ({count})</button>
        </div>
    )
}

export default UseMemo;