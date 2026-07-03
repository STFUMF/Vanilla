import { renderTodo } from "./todoPage.js"

let cleanup;
export default {
    id: "todo",
    version: "1.0.0",
    slot: "todo",
    menu: {
        label: "Todos",
        icon: "📝",
        order: 1
    },
    routes: [
        {
            path: "/",
            title: "Todo"
        },
        {
            path: "/todos",
            title: "Todo"
        },
        {
            path: "/todos/:id",
            title: "Todo Details"
        }
    ],
    type: "page",
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

