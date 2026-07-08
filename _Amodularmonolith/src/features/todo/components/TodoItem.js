import { element } from "@core/renderer";
import { component } from "@core/components";

import { Button, Card, Input } from "../../../shared/components";
import { getDueDateStatus } from "../../../shared/utils/date/dateStatus.js";
import { Badge } from "../../../shared/components/Badge/Badge.js";
import { Checkbox } from "../../../shared/components";
import { PriorityBdage } from "./PriorityBdage.js";
import { DueDateBadge } from "./DueDateBadge.js";

export function TodoItem({todo, controller}) {
    const labels = {
        overdue: "OverDue",
        today: "Due Today",
        tomorrow: "Due Tomorrow",
        week: "Due this Week",
        future: "",
    }
    const status = getDueDateStatus(todo.dueDate);

    // Editing
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
                        variant: "success",
                        onClick: (e) => {
                            e.stopPropagation();
                            controller.saveEdit(todo);
                        },
                    }),

                    component(Button, {

                        children: ["Cancel"],
                        variant: "outline",
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

                component(Checkbox, {
                    type: "checkbox",
                    checked: todo.completed,
                    onChange: () => controller.toggleTodoc(todo.id),
                }),
                /* element(
                    "input",
                    {
                        type: "checkbox",
                        checked: todo.completed,
                        onChange: () => controller.toggleTodoc(todo.id),
                    }
                ), */

                element(
                    "span",
                    {},
                    todo.title
                ),

                component(PriorityBdage, {
                    priority: todo.priority,
                }),

                todo.dueDate
                    ? component(DueDateBadge, {
                        dueDate: todo.dueDate
                    })
                    : "",

                component(Button, {
                    children: ["Delete"],
                    variant: "danger",
                    onClick: () => controller.deleteTodoc(todo.id),
                }),

                component(Button, {
                    children: ["Edit"],
                    variant: "secondary",
                    onClick: () => controller.startEditing(todo),
                }),

            )
        ]
    });
}