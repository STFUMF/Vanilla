
import { renderStats } from "./statsPage.js"

let cleanup;

export default {
    id: "stats",
    version: "1.0.0.",
    slot: "main",
    type: "page",

    initialize(){},
    mount(root) {
        cleanup = renderStats(root);
    },
    unmount() {
        cleanup?.();
        cleanup = null;
    },
    destory(){},
}