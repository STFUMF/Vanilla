import { renderTheme } from "./themePage.js";


let cleanup;

export default {
    id: "theme",
    version: "1.0.0.",
    slot: "theme",
    initialize(){},
    mount(root) {
        cleanup = renderTheme(root);
    },
    unmount() {
        cleanup?.();
        cleanup = null;
    },
    destory(){},
}