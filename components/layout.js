import { useEffect, useState } from "react";

export default function Layout({ children }) {
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
  });

  return (
    <>
      <>{theme}</>
      <button
        onClick={() => {
          darkMode();
        }}
      >
        Dark Mode
      </button>
      <div id="main-container">{children}</div>
    </>
  );
}
