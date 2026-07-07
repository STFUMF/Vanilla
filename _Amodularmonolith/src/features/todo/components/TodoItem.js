import { element } from "@core/renderer";
import { component } from "@core/components";

import { Button, Card, Input } from "../../../shared/components";

export function TodoItem({todo, controller}) {

    if (controller.isEditing(todo.id)){
        
        return component(Card, {

    children: [
                element(
                    "div",
                    {
                        class: "todo-item",
                    },

                    component(Input, {
                        value: controller.editTitle,

                        onInput: e =>
                            controller.setEditTitle(
                                e.target.value
                            ),
                    }),

                    component(Button, {

                        children: ["Save"],

                        onClick: () =>
                            controller.saveEdit(todo),
                    }),

                    component(Button, {

                        children: ["Cancel"],

                        onClick: () =>
                            controller.cancelEditing(),
                    }),
                )
            ]
        });
    }
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
                        onChange: () => controller.toggleTodoc(todo.id),
                    }
                ),

                element(
                    "span",
                    {},
                    todo.title
                ),

                component(Button, {
                    children: ["Delete"],
                    onClick: () => controller.deleteTodoc(todo.id),
                }),

                component(Button, {
                    children: ["Edit"],
                    onClick: () => controller.startEditing(todo),
                }),

            )
        ]
    });
}