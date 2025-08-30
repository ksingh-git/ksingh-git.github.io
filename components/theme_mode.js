import {useEffect, useState} from "react";
import LightModeSvgComponent from "../icons/sunLight";
import DarkModeSvgComponent from "../icons/nightDark";

// Theme mode svg component
function ThemeModeSvgComponent(props) {
    const [theme, setTheme] = useState("light");
    const darkMode = () => {
        let element = document.getElementById("main-container");
        element.classList.toggle("dark");
        if (localStorage.getItem("theme") === "dark") {
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    useEffect(() => {
        setTheme(localStorage.getItem("theme"));
        const element = document.getElementById("main-container");
        element.classList.add(theme);
        if (element.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    return (<>
        <button
            onClick={() => {
                darkMode();
            }}
        >
            {theme === "light" ? (<DarkModeSvgComponent/>) : (<LightModeSvgComponent/>)}
        </button>
    </>);
}

export default ThemeModeSvgComponent;
