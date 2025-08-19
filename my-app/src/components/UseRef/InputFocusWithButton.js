import React, {useEffect} from "react";

function InputFocusWithButton() {
    const [email, setEmail] = React.useState('');
    const [counter, setCounter] = React.useState(0);
    const [password, setPassword] = React.useState('');
    const inputRef = React.useRef(null);

    // useEffect(() => {
    //     if (inputRef.current) {
    //         inputRef.current.focus();
    //         console.log("Input focused on mount");
    //     }
    // }, []);
    useEffect(() => {
        setCounter((prevCounter) => prevCounter + 1);
        console.log("Counter updated:", counter);
    }, [email, password]);

    const handleButtonClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
            console.log("Input focused on button click");
            console.log(inputRef.current.value); // Log the current value of the input
            console.log(inputRef.current); // Log the input element itself

            console.log(`Password is: ${password}`); // Log the password state

        }
    };

    return (
        <div>
            {/* <input
                type="text"
                ref={inputRef}
                placeholder="Focus me on mount"
            /> */}
            {email && <p>Email: {email}</p>}
            //This input is using useState to manage its value
            <input
                type="text"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="text"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />

            //This Input is using useRef to manage its focus
            <input
                type="text"
                ref={inputRef}
                placeholder="Password with useRef"
            />
            <br />
            <button onClick={handleButtonClick}>
                Focus Input
            </button>
        </div>
    );
}

export default InputFocusWithButton;