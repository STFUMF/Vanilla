import { renderNotifications } from "./notificationPage.js";

let cleanup;

export default {
    id: "notifications",
    version: "1.0.0.",
    slot: "notifications",
    menu: null,
    type: "global",
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