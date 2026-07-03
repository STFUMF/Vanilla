import { renderFilter } from "./filterPage.js";

let cleanup;

export default {
    id: "filter",
    version: "1.0.0.",
    
    type: "global",
    slot: "filter",
    menu: null,
    routes: [],

    initialize(){},
    mount(root) {
        cleanup = renderFilter(root);
    },
    unmount() {
        cleanup?.();
        cleanup = null;
    },
    destory(){},
}