import { component } from "@core/components";
import { element } from "@core/renderer";

import { navigate } from "@core/router";
import { TodoItem } from "../../components/TodoItem";

export function ArchiveContent({ controller }) {
  const todos = controller.getArchivedTodos();

  if (todos.length === 0) {
    return element(
      "p",
      {
        class: "-empty",
      },
      "Archive is empty.",
    );
  }

  return element(
    "div",
    {
      class: "-archive-list",
    },

    ...todos.map((todo) =>
      component(TodoItem, {
        todo,
        controller,
        archived: true,
      }),
    ),
  );
}
