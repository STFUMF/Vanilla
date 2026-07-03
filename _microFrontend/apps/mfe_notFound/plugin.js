import { renderNotFound } from "./index.js";

let cleanup = null;

export default {

    id: "not-found",

    version: "1.0.0",

    type: "page",

    slot: "main",

    routes: [],

    menu: null,

    initialize() {},

    mount(root) {
        cleanup = renderNotFound(root);
    },

    unmount() {
        cleanup?.();
        cleanup = null;
    },

    destroy() {}

};