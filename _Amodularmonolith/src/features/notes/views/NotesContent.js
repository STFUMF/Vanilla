import { element } from "@core/renderer";
import { component } from "@core/components";

import { Container, Stack, Divider } from "../../../shared/components/index.js";

import { NoteForm } from "../components/NoteForm";
import { NoteSearch } from "../components/NoteSearch";
import { NoteList } from "../components/NoteList";
import { NoteStats } from "../components/NoteStats";

export function NotesContent({ controller }) {
  return component(Container, {
    size: "mid",
    children: [
      component(Stack, {
        gap: "lg",

        children: [
          element("h1", {}, "Notes"),

          component(NoteForm, {
            controller,
          }),

          component(NoteSearch, {
            controller,
          }),

          component(Divider),

          component(NoteList, {
            controller,
          }),

          component(Divider),

          component(NoteStats, {
            controller,
          }),
        ],
      }),
    ],
  });
}
