
import { renderStats } from "./statsPage.js"

let cleanup;

export default {
    id: "stats",
    version: "1.0.0.",
    
    slot: "main",
    menu: {
        label: "Statistics",
        icon: "📊",
        order: 2,
    },
    routes: [
        {
            path: "/stats",
            title: "Statistics"
        }
    ],
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