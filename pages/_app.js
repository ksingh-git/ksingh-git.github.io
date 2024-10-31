import "../styles/globals.css";
import propTypes from "prop-types";

/**
 * The main entry point for the Next.js application.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.ComponentType} props.Component - The active page component to render.
 * @param {Object} props.pageProps - The initial props that were preloaded for the page.
 * @returns {ReactElement} The rendered component for the active page.
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: propTypes.elementType.isRequired,
  pageProps: propTypes.object.isRequired,
};
