import { element } from "@core/renderer";
import { component } from "@core/components";

import { TodoStats } from "../components/TodoStats.js";
import { TodoForm } from "../components/TodoForm.js";
import { TodoList } from "../components/TodoList.js"
import { Container, Input, Stack } from "../../../shared/components/index.js";
import { TodoFilter } from "../components/TodoFilter.js";
import { TodoSort } from "../components/TodoSort.js";
import { TodoPriorityFilter } from "../components/TodoPriorityFilter.js";
import { TodoDueDateFilter } from "../components/TodoDueDateFilter.js";

export function TodoPage({controller,}){

    const todos = controller.getVisibleTodos();

    const stats = controller.getStats();

    return component(Container, {
        children: [
            component(Stack, {
                gap: "1rem",

                children:[
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

                    component(TodoPriorityFilter, {controller}),

                    component(TodoDueDateFilter, {controller}),

                    component(TodoSort, {controller}),

                    component(TodoList, {
                        todos,
                        controller,
                    }),

                    component(TodoStats, stats),
                    ]
            })
        ]
    })

}