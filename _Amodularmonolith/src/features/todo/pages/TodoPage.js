import { element } from "@core/renderer";
import { component } from "@core/components";

import { TodoStats } from "../components/TodoStats.js";
import { TodoForm } from "../components/TodoForm.js";
import { TodoList } from "../components/TodoList.js"
import { Input } from "../../../shared/components/index.js";
import { TodoFilter } from "../components/TodoFilter.js";
import { TodoSort } from "../components/TodoSort.js";

export function TodoPage({controller,}){

    const todos = controller.getVisibleTodos();

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

        component(Input, {
            value: controller.search,
            placeholder: "Search todos...",
            onInput: e =>
                controller.setSearch(e.target.value)
        }),
        component(TodoFilter, {controller}),
        component(TodoSort, {controller}),
        
        component(TodoList, {
            todos,
            controller,
        }),

        component(TodoStats, stats),
        
    );
}