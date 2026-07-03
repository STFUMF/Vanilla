// this will contain the application startup logic

/**
 * Creates the application
 */

export function createApp() {
    const root = document.querySelector("#app");

    if (!root) {
        throw new Error('Root element "#app" was not found.');
    }

    root.textContent = "Vanilla Todo";
}