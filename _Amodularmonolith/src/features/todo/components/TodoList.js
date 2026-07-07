import { component } from "@core/components";
import { element } from "@core/renderer";

import { TodoItem } from "./TodoItem.js";

export function TodoList({todos, controller}) {

    if (todos.length === 0) {

        return element(
            "p",
            {},
            "No todos yet."
        );
    }

    return element( 
        
            "div",
            {
                class: "todo-list",
            },
        ...todos.map(todo => 
            component(
                TodoItem,{todo,controller,}
            )
        )
    );
}