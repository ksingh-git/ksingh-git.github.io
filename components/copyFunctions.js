/**
 * Copies the given string to the clipboard.
 *
 * @param {string} str - The string to be copied to the clipboard.
 * @return {Promise<void>} A promise that resolves when the text has been successfully copied to the clipboard.
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
 * Handles the click event for the copy button.
 *
 * @param {Event} evt - The click event object.
 * @return {undefined} This function does not return any value.
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
 * Creates a new button element and adds it to the pre element.
 *
 * @return {HTMLButtonElement} The newly created button element.
 */
export function addButtonToPre() {
  const copy = document.createElement("button");
  copy.innerHTML = "Copy";
  copy.classList.add("copy-button");
  copy.addEventListener("click", handleCopyClick);
  return copy;
}
