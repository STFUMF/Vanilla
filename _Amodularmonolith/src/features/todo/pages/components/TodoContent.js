import { element } from "@core/renderer";
import { component } from "@core/components";

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
} from "../../../../shared/components/index.js";

export function TodoContent({ controller }) {
  const todos = controller.getVisibleTodos();
  const stats = controller.getStats();

  if (controller.isLoading()) {
    return element("p", {}, "Loading todos...");
  }

  if (controller.getError()) {
    return component(ErrorMessage, {
      message: controller.getError(),
    });
  }

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
              component(Input, {
                size: "sm",

                value: controller.search,

                placeholder: "Search todos...",

                onInput: (e) => controller.setSearch(e.target.value),
              }),

              component(TodoFilter, {
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
