import { element } from "@core/renderer";
import { component } from "@core/components";
import { Stack } from "../../../shared/components";

import { NoteItem } from "./NoteItem.js";

export function NoteList({ controller }) {
  const notes = controller.getVisibleNotes();

  return component(Stack, {
    gap: "md",

    children: notes.map((note) =>
      component(NoteItem, {
        key: note.id,

        note,

        controller,
      }),
    ),
  });
}
