import { component } from "@core/components";
import { element } from "@core/renderer";

import { Button, Input, Select } from "../../../shared/components";

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

        component(Select, {

            value: controller.getPriority(),

            options: [
                {
                    value: "low",
                    label: "Low"
                },
                {
                    value: "medium",
                    label: "Medium",
                },
                {
                    value: "high",
                    label: "High",
                },
            ],

            onChange: e =>
                controller.setPriority(e.target.value)
        }),

        element(
            "input",
            {
                type: "date",
                value: controller.getDueDate(),

                onInput: e =>
                        controller.setDueDate(e.target.value)
            }
        ),

        component(Button, 
            {
            onClick: () => controller.addTodoc(),
            },
            "Add"
        ),
    )
}