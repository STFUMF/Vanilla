import { renderFilter } from "./filterPage.js";

let cleanup;

export default {
    id: "filter",
    version: "1.0.0.",
    slot: "filter",
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