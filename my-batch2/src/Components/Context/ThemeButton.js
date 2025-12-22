import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./ThemeButton.css";

function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    const isDark = theme === "dark";

    return (
        <div className="theme-button__wrap">
            <button
                type="button"
                className={`theme-button ${isDark ? "theme-button--dark" : "theme-button--light"}`}
                onClick={toggleTheme}
                aria-pressed={isDark}
                title={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
                <span className="theme-button__icon" aria-hidden>
                    {isDark ? "🌙" : "☀️"}
                </span>
                <span className="theme-button__label">{isDark ? "Dark" : "Light"} Mode</span>
                <span className="theme-button__meta">Current: {theme}</span>
            </button>
        </div>
    );
}

export default ThemeButton;