import { renderTodo } from "./todoPage.js"

export default {
    id: "notifications",
    root: "#todo-root",
    route: "/",
    mount: renderTodo,
    unmount() {},
}