const readClipboardText = () => {
  return navigator.clipboard
    .readText()
    .then((clipText) => {
      return clipText;
    })
    .catch((err) => console.error("Error reading clipboard contents: ", err));
};

export default readClipboardText;
