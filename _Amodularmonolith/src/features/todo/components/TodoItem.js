import { element } from "@core/renderer";
import { component } from "@core/components";

import { Button, Card } from "../../../shared/components";

export function TodoItem({todo, controller}) {
    return component(Card, {

        children: [

            element(
                "div",
                {
                    class: "todo-item",
                },

                element(
                    "input",
                    {
                        type: "checkbox",
                        checked: todo.completed,
                        onChange: () => controller.toggleTodo(todo.id),
                    }
                ),

                element(
                    "span",
                    {},
                    todo.title
                ),

                component(Button, {
                    
                    onClick: () => controller.deleteTodo(todo.id),
                    children: ["Delete"],
                })
            )
        ]
    });
}