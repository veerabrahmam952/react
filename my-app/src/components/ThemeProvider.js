import React from "react";
import { ThemeContext } from "./ThemeContext";
import UserComponent from "./UserComponent";

function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState('light');
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    
    const value = {theme, toggleTheme};
    return (
        <ThemeContext.Provider value={value}>
           { children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;