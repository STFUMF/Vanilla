// this will contain the application startup logic

import { createRenderContext, createRenderer, element } from "../core/renderer";
import { component } from "../core/components/component.js";
import { registerRoutes } from "./registerRoutes.js";
import { createRouter } from "../core/router";


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

function Card(props) {
    return element(
        "div",
        {
            class: "card"
        },

        ...props.children
    );
}

export function createApp() {
    const root = document.querySelector("#app");

    if (!root) {
        throw new Error('Root element "#app" was not found.');
    }

    const renderer = createRenderer(root);

    const tree = App();

    const { routes, notFound, } = registerRoutes();

    const router = createRouter(
        routes,

        (route) => {
            const page = route?.component ?? notFound;

            renderer.render(
                createRenderContext(component(page))
            )
        }
    )

    
    
    router.start();
}
