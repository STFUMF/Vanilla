import { component } from "@core/components";
import { element } from "@core/renderer";

import { TodoItem } from "./TodoItem.js";
import { ErrorMessage } from "../../../shared/components/index.js";

export function TodoList({ todos, controller }) {
  if (controller.isLoading()) {
    return element("p", {}, "Loading todos...");
  }
  if (controller.getError()) {
    let errorMessage = controller.getError();
    return component(ErrorMessage, {
      message: errorMessage,
      onRetry: () => controller.reloadTodos(),
    });
  }

  if (todos.length === 0) {
    return element("p", {}, "No todos yet.");
  }

  return element(
    "div",
    {
      class: "todo-list",
    },
    ...todos.map((todo) => component(TodoItem, { todo, controller })),
  );
}
