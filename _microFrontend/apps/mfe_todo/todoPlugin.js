import { renderTodo } from "./todoPage.js"

let cleanup;
export default {
    id: "todo",
    version: "1.0.0",
    slot: "todo",
    routes: [
        {
            path: "/",
            title: "Todo"
        },
        {
            path: "/todos",
            title: "Todo"
        }
    ],
    initialize() {},
    mount(root){
        cleanup = renderTodo(root);
    },
    unmount() {
        cleanup?.();
        cleanup = null;
    },
    destory(){},
}

