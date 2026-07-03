// this will contain the application startup logic

import { render } from "../core/renderer";

/**
 * Creates the application
 */

function App(){
    const heading = document.createElement('h1');
    heading.textContent = "Vanilla Todo";

    return heading;
}
export function createApp() {
    const root = document.querySelector("#app");

    if (!root) {
        throw new Error('Root element "#app" was not found.');
    }

    const heading = document.createElement("h1");
    heading.textContent = "Vanilla Todo";

    render(App, root);
}

