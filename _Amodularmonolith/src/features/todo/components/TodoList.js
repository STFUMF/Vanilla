import { component } from "@core/components";

import { TodoItem } from "./TodoItem.js";

export function TodoList({todos, onToggle, onDelete}) {

    return todos.map(todo => 
        component(
            TodoItem,

            {
                todo,
                onToggle,
                onDelete,
            }
        )
    );
}