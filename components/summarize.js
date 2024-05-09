import React, { useState, useEffect } from "react";

const Summarize = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Close the modal if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".modal")) {
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
            <div className="relative max-h-full w-full max-w-2xl p-4">
              <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
                <div className="space-y-4 p-4 md:p-5">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    Summary comes hereSummary comes hereSummary comes here
                  </p>
                </div>
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
        </>
      )}
    </div>
  );
};

export default Summarize;
