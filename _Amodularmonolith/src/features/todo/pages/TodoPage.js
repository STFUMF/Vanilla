import { element } from "@core/renderer";
import { component } from "@core/components";

import { TodoStats } from "../components/TodoStats.js";
import { TodoForm } from "../components/TodoForm.js";
import { TodoList } from "../components/TodoList.js"

export function TodoPage({controller,}){

    const todos = controller.getTodos();

    const stats = controller.getStats();

    return element(
        "main",
        {
            class: "todo-page",
        },

        element("h1", {}, "Todo App"),

        component(TodoForm, {
            controller,
        }),

        component(TodoList, {
            todos,
            controller,
        }),

        component(TodoStats, stats)
    );
}