import React, { useState } from 'react';
import classes from '../styles/button.module.css';

function loadDarkMode() {
    if (typeof localStorage === 'undefined') {
        return false;
    }
    const value = localStorage.getItem("darkMode");
    return (value === null) ? false : JSON.parse(value);
}

function ThemeSwitch() {
    const [darkMode, setDarkMode] = useState(loadDarkMode);

    const handleClick = () => {
        localStorage.setItem("darkMode", JSON.stringify(!darkMode));
        setDarkMode(!darkMode)
    }

    const buttonTitle = darkMode ? "Light mode" : "Dark mode"
    return (
        <>
            <button className={classes.button} onClick={handleClick} suppressHydrationWarning>{buttonTitle}</button>
            {
                darkMode && (
                    <style jsx global>{`
                        :root {
                            --background-color: rgb(19, 18, 18);
                            --text-color: rgb(223, 215, 215);
                            --link-color: rgb(115, 255, 0);
                        }
                    `}</style>
                )
            }
        </>
    );
}

export default ThemeSwitch;