let timeoutId = null;

export function renderToast(root, message) {

    root.innerHTML = `
        <div class="toast">
            ${message}
        </div>
    `;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        root.innerHTML = "";
    }, 3000);

}