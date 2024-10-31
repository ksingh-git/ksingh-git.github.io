import Head from "next/head";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

/**
 * The main layout component for the site, setting the page title and theme,
 * and wrapping the children with a container element that is styled with
 * the current theme.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The children to be rendered.
 * @returns {ReactElement} - The rendered component.
 */
export default function Layout({ children }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
  });
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="https://img.icons8.com/emoji/256/four-leaf-clover.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Whisper&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div id="main-container" className={theme}>
        {children}
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
