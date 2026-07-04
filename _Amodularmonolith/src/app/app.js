// this will contain the application startup logic

import { createRenderContext, createRenderer, element } from "../core/renderer";


/**
 * Creates the application
 */


function App(){
    return element(
        "main",
        {},
        
        element(
            "h1",
            {},
            "Vanilla Todo",
        ),
        element("p", {}, "Hello Framework")
    )
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
