/**
 * Copies a given string to the user's clipboard.
 *
 * @param {string} str - The string to be copied.
 *
 * @returns {Promise<void>} - A promise that resolves when the string has been
 *   successfully copied to the clipboard, and rejects if the copy operation
 *   fails.
 */
export const copyToClipboard = (str) => {
  navigator.clipboard
    .writeText(str)
    .then(() => {
      console.log("Text copied to clipboard:", str);
    })
    .catch((error) => {
      console.error("Unable to copy text:", error);
    });
};

/**
 * Handles a click event on a copy button. When the event is triggered, the
 * method copies the innerText of the first child element of the parent element
 * to the user's clipboard. It also changes the innerHTML of the button itself
 * to "Copied!" and changes it back to "Copy" after 2 seconds.
 *
 * @param {Event} evt - The event that triggered the method.
 */
export function handleCopyClick(evt) {
  const { children } = evt.target.parentElement;
  const { innerText } = Array.from(children)[0];
  copyToClipboard(innerText);
  this.innerHTML = "Copied!";
  // After 2 seconds, change the innerHTML back to "Copy"
  setTimeout(() => {
    this.innerHTML = "Copy";
  }, 2000);
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
