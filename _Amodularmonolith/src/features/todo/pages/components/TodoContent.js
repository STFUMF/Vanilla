import { element } from "@core/renderer";
import { component } from "@core/components";

import { BulkToolbar } from "../../components/BulkToolbar.js";
import { TodoForm } from "../../components/TodoForm.js";
import { TodoFilter } from "../../components/TodoFilter.js";
import { TodoPriorityFilter } from "../../components/TodoPriorityFilter.js";
import { TodoDueDateFilter } from "../../components/TodoDueDateFilter.js";
import { TodoSort } from "../../components/TodoSort.js";
import { TodoList } from "../../components/TodoList.js";
import { TodoStats } from "../../components/TodoStats.js";
import {
  Container,
  Stack,
  Toolbar,
  Divider,
  Input,
  Button,
} from "../../../../shared/components/index.js";
import { TodoCategoryFilter } from "../../components/TodoCategoryFilter.js";

export function TodoContent({ controller }) {
  const todos = controller.getVisibleTodos();
  const stats = controller.getStats();

  return component(Container, {
    size: "md",

    children: [
      component(Stack, {
        gap: "lg",

        children: [
          element("h1", {}, "Todo App"),

          component(TodoForm, {
            controller,
          }),

          component(Toolbar, {
            children: [
              component(TodoCategoryFilter, {
                controller,
              }),

              component(TodoPriorityFilter, {
                controller,
              }),

              component(TodoDueDateFilter, {
                controller,
              }),

              component(TodoSort, {
                controller,
              }),
            ],
          }),

          component(Toolbar, {
            children: [
              component(Input, {
                size: "sm",

                value: controller.search,

                placeholder: "Search todos...",

                onInput: (e) => controller.setSearch(e.target.value),
              }),
              component(TodoFilter, {
                controller,
              }),
            ],
          }),

          component(Button, {
            children: ["Undo"],

            disabled: !controller.canUndo(),

            onClick: () => controller.undo(),
          }),

          component(Button, {
            children: ["Redo"],

            disabled: !controller.canRedo(),

            onClick: () => controller.redo(),
          }),

          component(Button, {
            children: [controller.isLoading() ? "Refreshing..." : "Refresh"],

            variant: "secondary",
            disabled: controller.isLoading(),

            onClick: () => controller.reloadTodos(),
          }),

          component(BulkToolbar, {
            controller,
          }),

          component(Divider),

          component(TodoList, {
            todos,

            controller,
          }),

          component(Divider),

          component(TodoStats, stats),
        ],
      }),
    ],
  });
}
