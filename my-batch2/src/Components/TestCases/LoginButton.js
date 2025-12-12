import React from 'react';

function LoginButton() {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    const handleOnclick = ()=> {
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        <>
        <button onClick={handleOnclick}> {isLoggedIn ? 'Log Out' : 'Log In'}</button>
        </>
    )
}

function LoginWithProps({isLoggedIn}) {
    return (
        <button> {isLoggedIn ? 'Log Out' : 'Log In'}</button>
    )
}


export  {LoginButton, LoginWithProps};