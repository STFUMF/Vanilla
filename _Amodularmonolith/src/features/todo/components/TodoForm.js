import { component } from "@core/components";

import { Button, Input, Row, Select } from "../../../shared/components";

export function TodoForm({controller}) {

    return component(Row, {
        gap: "sm",
        children: [
                    component(Input, {
                        value: controller.title,
                        placeholder: "Add a todo...",
                        size: "sm",
                        onInput: e => controller.setTitle(e.target.value)
                    }),

                    component(Select, {

                        value: controller.getPriority(),

                        options: [
                            { value: "low", label: "Low" },
                            { value: "medium", label: "Medium" },
                            { value: "high", label: "High" },
                        ],

                        onChange: e =>
                            controller.setPriority(e.target.value)
                    }),

                    component(Input, {
                        type: "date",
                        size: "sm",
                        value: controller.getDueDate(),
                        onInput: e => controller.setDueDate(e.target.value)
                    }),
                    component(Button, 
                        {
                        size: "md",
                        variant: "primary",
                        className: "btn-add",
                        onClick: () => controller.addTodoc(),
                        children: ["Add"]
                        },
                    ),
                ]
        }
    )
}