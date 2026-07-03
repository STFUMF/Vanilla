// this will contain the application startup logic

import { render } from "../core/renderer";

/**
 * Creates the application
 */

export function createApp() {
    const heading = document.createElement("h1");
    heading.textContent = "Vanilla Todo";

    render(heading, "#app");
}

