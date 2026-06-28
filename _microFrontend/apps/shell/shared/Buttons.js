export function createButton({text, onClick, className = "", disabled = false,}) {

    const button = document.createElement("button");

    button.textContent = text;
    button.disabled = disabled;
    button.className = className;

    button.addEventListener('click', onClick);

    return button;
}