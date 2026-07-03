import { renderTheme } from "./themePage.js";


let cleanup;

export default {
    id: "theme",
    version: "1.0.0.",
    slot: "header",
    menu: {
        label: "Settings",
        icon: "⚙️",
        order: 3
    },
    routes:[
        {
            path: "/settings",
            title: "Theme"
        }
    ],
    type: "page",
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