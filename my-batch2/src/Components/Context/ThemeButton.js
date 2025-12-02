import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
    const {theme, setTheme} = useContext(ThemeContext);
    
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark': 'light');
    }
    return(
        <>
         <button
          style={{
            background: theme === 'dark' ? '#333': '#fff',
            color: theme === 'dark' ? 'white': 'black'
            }}
          onClick={toggleTheme}
         >
            Current Theme: {theme}
         </button>
        </>
    )
}

export default ThemeButton