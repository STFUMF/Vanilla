import { component } from "@core/components";
import { element } from "@core/renderer";

import { Button, Input } from "../../../shared/components";

export function TodoForm({controller}) {

    return element(
        "div",
        {
            class: "todo-form",
        },

        component(Input, {
            value: controller.title,
            className: 'todoInput',
            placeholder: "Add a todo...",
            onInput: e => controller.setTitle(e.target.value)
        }),

        component(Button, 
            {
            onClick: () => controller.addTodo(),
            },
            "Add"
        ),
    )
}