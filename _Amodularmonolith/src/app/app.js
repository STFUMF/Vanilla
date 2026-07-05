// this will contain the application startup logic

import { createRenderContext, createRenderer, element } from "../core/renderer";
import { component } from "../core/components/component.js";

/**
 * Creates the application
 */

function Button({ label }) {
    return element("button", {}, label);
}

function Header() {
    return element(
        "header",
        {},
        component(Button, {
            label: "Add Todo"
        })
    );
}

function App() {
    return element(
        "main",
        {},
        component(Header)
    );
}

export function createApp() {
    const root = document.querySelector("#app");

    if (!root) {
        throw new Error('Root element "#app" was not found.');
    }

    const renderer = createRenderer(root);

    const tree = App();

    renderer.render(
        createRenderContext(tree)
    );

    setTimeout(() => {
        renderer.render(
            createRenderContext(
                element(
                    "main",
                    {},

                    element(
                        "h1",
                        {},
                        "Vanilla todo updated"
                    ),

                    element(
                        "p",
                        {},
                        "Renderer is working!"
                    )
                )
            )
        )
    }, 2000)
}
