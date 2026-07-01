import { renderTodo } from "./todoPage.js"

let cleanup;
export default {
    id: "todo",
    version: "1.0.0",
    slot: "todo",
    initialize() {},
    mount(root){
        cleanup = renderTodo(root);
    },
    unmount() {
        cleanup?.();
        cleanup = null;
    },
}

