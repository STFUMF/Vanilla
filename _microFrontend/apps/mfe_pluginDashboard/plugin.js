import { renderPluginDashboard } from "./pluginPage.js";

let cleanup = null;

export default {
    
    id: "plugin-dashboard",

    version: "1.0.0",

    slot: "inspector",
    menu: null,
    type: "page",

    initialize() {},

    mount(root) {
        cleanup = renderPluginDashboard(root);
    },

    unmount() {
        cleanup?.();

        cleanup = null;
    },

    destroy() {},
}