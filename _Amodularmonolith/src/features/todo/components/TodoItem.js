import { element } from "@core/renderer";
import { component } from "@core/components";

import { Button, Card, Input, Stack, Row } from "../../../shared/components";
import { getDueDateStatus } from "../../../shared/utils/date/dateStatus.js";
import { Badge } from "../../../shared/components/Badge/Badge.js";
import { Checkbox } from "../../../shared/components";
import { PriorityBdage } from "./PriorityBdage.js";
import { DueDateBadge } from "./DueDateBadge.js";
import { CategoryBadge } from "./CategoryBadge.js";

export function TodoItem({ todo, controller }) {
  const labels = {
    overdue: "OverDue",
    today: "Due Today",
    tomorrow: "Due Tomorrow",
    week: "Due this Week",
    future: "",
  };
  const status = getDueDateStatus(todo.dueDate);

  const actions = todo.archived
    ? [
        component(Button, {
          variant: "secondary",
          children: ["Restore"],
          onClick: () => controller.restoreTodo(todo),
        }),

        component(Button, {
          variant: "danger",
          children: ["Delete"],
          onClick: () => controller.deleteTodoc(todo),
        }),
      ]
    : [
        component(Button, {
          variant: "secondary",
          children: ["Edit"],
          onClick: () => controller.startEditing(todo),
        }),

        component(Button, {
          children: ["Archive"],
          onClick: () => controller.archiveTodo(todo),
        }),
      ];

  // Editing
  if (controller.isEditing(todo.id)) {
    return component(Row, {
      gap: "sm",

      children: [
        component(Input, {
          value: controller.editTitle,
          size: "sm",
          onInput: (e) => controller.setEditTitle(e.target.value),
        }),

        component(Button, {
          children: ["Save"],
          variant: "success",
          size: "md",
          onClick: (e) => {
            e.stopPropagation();
            controller.saveEdit(todo);
          },
        }),

        component(Button, {
          children: ["Cancel"],
          variant: "outline",
          size: "md",
          onClick: () => controller.cancelEditing(),
        }),
      ],
    });
  }

  return component(Card, {
    children: [
      component(Stack, {
        gap: "sm",

        children: [
          component(Row, {
            align: "center",

            gap: "sm",

            children: [
              component(Checkbox, {
                checked: controller.isSelected(todo.id),
                onChange: () => controller.toggleSelection(todo.id),
              }),

              component(Checkbox, {
                checked: todo.completed,
                onChange: () => controller.toggleTodoc(todo),
              }),

              element("span", {}, todo.title),

              component(PriorityBdage, {
                priority: todo.priority,
              }),

              todo.dueDate &&
                component(DueDateBadge, {
                  dueDate: todo.dueDate,
                }),

              todo.category &&
                component(CategoryBadge, {
                  category: todo.category,
                }),
            ],
          }),

          component(Row, {
            justify: "end",
            gap: "sm",
            children: actions,
          }),
        ],
      }),
    ],
  });
}
