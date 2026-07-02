import { renderNotifications } from "./notificationPage.js";

let cleanup;

export default {
    id: "notifications",
    version: "1.0.0.",
    slot: "notifications",
    routes:[],
    initialize(){},
    mount(root) {
        cleanup = renderNotifications(root);
    },
    unmount() {
        cleanup?.();
        cleanup = null;
    },
}