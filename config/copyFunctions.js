/**
 * Copies a given string to the user's clipboard.
 *
 * @param {string} str - The string to be copied.
 */
export const copyToClipboard = (str) => {
  navigator.clipboard.writeText(str);
};

/**
 * Handles the click event on a copy button. Copies the text content
 * of the first child of the clicked element's parent to the clipboard.
 * Temporarily changes the button text to indicate the action was successful.
 *
 * @param {Object} target - The event target, typically the button element.
 */
export function handleCopyClick({ target }) {
  const textContent = target.parentElement.firstChild.textContent;
  copyToClipboard(textContent);
  const originalText = target.textContent;
  target.textContent = "Copied!";
  const timeout = 2000;
  setTimeout(() => {
    target.textContent = originalText;
  }, timeout);
}

/**
 * Creates a copy button and adds it to the first <pre> element in the page.
 *
 * @returns {HTMLButtonElement} - The created button element.
 */
export function addButtonToPre() {
  const copy = document.createElement("button");
  copy.innerHTML = "Copy";
  copy.classList.add("copy-button");
  copy.addEventListener("click", handleCopyClick);
  return copy;
}
