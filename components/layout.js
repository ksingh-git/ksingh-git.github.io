import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  });
  return (
    <>
      <div id="main-container" className={theme}>
        {children}
      </div>
    </>
  );
}
