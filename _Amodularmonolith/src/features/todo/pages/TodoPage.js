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

        component(TodoStats, stats),

        component(TodoForm, {
            onSubmit: controller.addTodo.bind(controller),
        }),

        component(TodoList, {
            todos,
            onToggle: controller.toggleTodo.bind(controller),
            onDelete: controller.deleteTodo.bind(controller),
        })
    )
}