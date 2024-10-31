import PropTypes from "prop-types";
/**
 * A wrapper component for rendering Markdown content using Tailwind's prose class.
 *
 * This component is intended to be used as a direct child of a page component,
 * and should not be used as a direct child of a route component.
 *
 * @param {React.ReactNode} children The Markdown content to be rendered.
 * @returns {JSX.Element} The rendered Markdown content.
 */
export default function MarkDownWrapper({ children }) {
  return (
    <section className="prose prose-2xl prose-slate max-w-none dark:prose-invert prose-h2:underline prose-h3:underline prose-pre:overflow-hidden ">
      {children}
    </section>
  );
}

MarkDownWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
