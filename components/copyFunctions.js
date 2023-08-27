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

export function addButtonToPre() {
  const copy = document.createElement("button");
  copy.innerHTML = "Copy";
  copy.classList.add("copy-button");
  copy.addEventListener("click", handleCopyClick);
  return copy;
}
