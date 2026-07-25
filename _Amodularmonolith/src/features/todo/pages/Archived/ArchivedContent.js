import { component } from "@core/components";
import { element } from "@core/renderer";

import { navigate } from "@core/router";
import { TodoItem } from "../../components/TodoItem";
import { NoteItem } from "../../../notes/components/NoteItem";

export function ArchiveContent({ todoController, noteController }) {
  const todos = todoController.getArchivedTodos();
  const notes = noteController.getArchivedNotes();
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

    // Archived Todos
    ...(todos.length
      ? [
          element("h2", {}, "Archived Todos"),
          ...todos.map((todo) =>
            component(TodoItem, {
              todo,
              controller: todoController,
              archived: true,
            }),
          ),
        ]
      : []),

    // Archived Notes
    ...(notes.length
      ? [
          element("h2", {}, "Archived Notes"),
          ...notes.map((note) =>
            component(NoteItem, {
              note,
              controller: noteController,
              archived: true,
            }),
          ),
        ]
      : []),
  );
}
