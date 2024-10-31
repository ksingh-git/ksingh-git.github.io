import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import TextSkeleton from "./textSkeleton";
import { fetchSummary } from "../config/summarizeService";

/**
 * A React component that provides a button to open a modal displaying a summary
 * of the provided content. The summary is fetched from an external API upon
 * clicking the button. The component manages loading state and handles modal
 * visibility. The modal can be dismissed by clicking outside or pressing the
 * close button.
 *
 * @param {Object} props
 * @param {string} props.content - The content to be summarized.
 * @returns {ReactElement} A button and modal interface for content summarization.
 */
const Summarize = ({ content }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [requestContent] = useState(
    "Give me a summary in not more than 100 words : "
  );
  const [summary, setSummary] = useState("");
  const modalRef = useRef(null); // Ref for modal content

  /**
   * Opens the modal, sets loading state to true, and fetches a summary from an
   * external API. If the request fails, it sets a default error message.
   * Finally, it sets loading state to false.
   */
  const openModal = async () => {
    setIsModalOpen(true);
    setIsLoading(true);
    const requestContentData = requestContent + content;
    try {
      const requestData = {
        text: requestContentData,
      };
      const data = await fetchSummary(requestData);
      setSummary(data.text);
    } catch (error) {
      console.error("Error fetching summary:", error);
      setSummary("SORRY!!! Something went wrong! Ah 404?");
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Closes the modal by setting isModalOpen to false.
   */
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    /**
     * Handles a click event outside the modal to close it. If the element clicked
     * is not the modal content and not a child of the modal, it calls closeModal
     * to close the modal.
     *
     * @param {Event} event - The click event.
     */
    const handleClickOutside = (event) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !event.target.closest(".modal")
      ) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Restore scrolling when modal is closed
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Ensure scrolling is restored on unmount
    };
  }, [isModalOpen]);

  return (
    <div className="flex justify-center">
      <button
        onClick={openModal}
        type="button"
        className="rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Summarize
      </button>

      {isModalOpen && (
        <>
          <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 backdrop-blur">
            {/* Background overlay with blur effect */}
          </div>
          <div className="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center">
            <div className="modal-overlay"></div>
            <div
              className="max-h-80vh scrollbar-hide relative max-h-full w-full max-w-2xl overflow-y-auto p-4"
              ref={modalRef}
            >
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <div className="space-y-4 p-4 md:p-5">
                  <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {isLoading ? (
                      <TextSkeleton />
                    ) : (
                      // Render summary when isLoading is false
                      <div className="flex h-full items-center justify-center">
                        <p className="text-center text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          {summary}
                        </p>
                      </div>
                    )}
                  </div>{" "}
                  <div className="flex items-center justify-center border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Summarize.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Summarize;
