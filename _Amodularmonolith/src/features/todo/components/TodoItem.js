import { element } from "@core/renderer";
import { component } from "@core/components";

import { Button, Card, Input } from "../../../shared/components";
import { getDueDateStatus } from "../../../shared/utils/date/dateStatus.js";

export function TodoItem({todo, controller}) {
    const labels = {
        overdue: "OverDue",
        today: "Due Today",
        tomorrow: "Due Tomorrow",
        week: "Due this Week",
        future: "",
    }
const status = getDueDateStatus(todo.dueDate);
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

                        onClick: (e) => {
                            e.stopPropagation();
                            controller.saveEdit(todo);
                        },
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

                element(
                    "small",
                    {
                        class: "todo-priority",
                    },
                    todo.priority
                ),

                todo.dueDate
                    ? status && element(
                        "small",
                        {
                            class: `todo-status ${status}`,
                        },
                        labels[status]
                    )
                    : "null",

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