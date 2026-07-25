import { element } from "@core/renderer";
import { component } from "@core/components";

import { Stack, Input, Button, TextArea } from "../../../shared/components";

export function NoteForm({ controller }) {
  return component(Stack, {
    gap: "md",

    children: [
      component(Input, {
        value: controller.title,
        placeholder: "Title",
        onInput: (e) => controller.setTitle(e.target.value),
      }),

      component(TextArea, {
        value: controller.content,
        rows: 10,
        placeholder: "Write your note...",
        onInput: (e) => controller.setContent(e.target.value),
      }),

      component(Button, {
        children: ["Save Note"],

        onClick: () => controller.addNotec(),
      }),
    ],
  });
}
