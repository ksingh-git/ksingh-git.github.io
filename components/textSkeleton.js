import React from "react";

/**
 * A React component that displays a loading skeleton.
 *
 * This component renders a series of animated pulse divs
 * resembling lines of text to indicate loading state.
 * It is intended to be used as a placeholder while content
 * is being fetched or processed.
 *
 * @returns {ReactElement} A loading skeleton UI.
 */
function TextSkeleton() {
  return (
    <output className="max-w-sm animate-pulse">
      <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-600"></div>
      <div className="mb-2.5 h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-800"></div>
      <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-800"></div>
      <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-600"></div>
      <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-800"></div>
      <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-600"></div>
      <span className="sr-only">Loading...</span>
    </output>
  );
}

export default TextSkeleton;
