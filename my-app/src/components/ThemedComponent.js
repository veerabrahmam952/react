import React from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedComponent() {
    const { theme, toggleTheme } = React.useContext(ThemeContext);

    const style = {
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
    };

    return (
        <div style={style}>
            <h2>This is a themed component</h2>
            <p>The current theme is: {theme}</p>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
}

export default ThemedComponent;