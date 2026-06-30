

export function createToast({ message, type = "info"}) {
    const el = document.createElement('div');
    el.className = `toast toast--${type}`;
    el.setAttribute("role", "status");
    el.setAttribute("aria-live", "polite");

    el.innerHTML = `
        <span class="toast__message"></span>
        <button class="toast__close" type="button" aria-label="Dismiss notification">×</button>
    `;

    el.querySelector(".toast__message").textContent = message;

    return el;
}