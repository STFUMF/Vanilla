import { renderNavigation } from "./navigationPage.js";


let cleanup = null;

export default {

    id: "navigation",

    version: "1.0.0",

    slot: "navigation",

    type: "global",

    initialize(){},

    mount(root) {
        cleanup = renderNavigation(root);
    },

    unmount() {
        cleanup?.();
        cleanup = null;
    },
    destroy(){}
}