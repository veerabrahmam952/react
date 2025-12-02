import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemeButton from "./ThemeButton";

function ThemeProvider() {
    const [theme, setTheme] = useState('light');

    const themeData = {theme, setTheme};

    return(
        <>
         <ThemeContext.Provider value={themeData}>
            <ThemeButton />
            <ThemeButton />
            <ThemeButton />
            <ThemeButton />
         </ThemeContext.Provider>
        </>
    )
}

export default ThemeProvider