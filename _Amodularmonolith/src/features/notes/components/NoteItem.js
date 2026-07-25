import { element } from "@core/renderer";
import { component } from "@core/components";
import {
  Button,
  Card,
  Column,
  Divider,
  Input,
  Row,
  TextArea,
} from "../../../shared/components";

export function NoteItem({ note, controller, archived = false }) {
  if (controller.isEditing(note.id)) {
    return component(Card, {
      children: [
        component(Column, {
          gap: "md",

          children: [
            component(Input, {
              value: controller.editTitle,

              onInput: (e) => controller.setEditTitle(e.target.value),
            }),

            component(TextArea, {
              rows: 8,

              value: controller.editContent,

              onInput: (e) => controller.setEditContent(e.target.value),
            }),

            component(Row, {
              justify: "end",

              gap: "sm",

              children: archived
                ? [
                    component(Button, {
                      children: ["Restore"],
                      onClick: () => controller.restoreNote(note),
                    }),
                  ]
                : [
                    component(Button, {
                      children: ["Edit"],
                      onClick: () => controller.startEditing(note),
                    }),

                    component(Button, {
                      variant: "danger",
                      children: ["Delete"],
                      onClick: () => controller.deleteNotec(note),
                    }),

                    component(Button, {
                      children: ["Archive"],
                      onClick: () => controller.archiveNote(note),
                    }),
                  ],
            }),
          ],
        }),
      ],
    });
  }

  return component(Card, {
    children: [
      component(Column, {
        gap: "md",

        children: [
          element("h3", {}, note.title),

          element("p", {}, note.content),

          component(Divider),

          component(Row, {
            justify: "end",

            gap: "sm",

            children: [
              component(Button, {
                variant: "secondary",

                children: ["Edit"],

                onClick: () => controller.startEditing(note),
              }),

              component(Button, {
                variant: "danger",

                children: ["Delete"],

                onClick: () => controller.deleteNotec(note),
              }),

              note.archived
                ? component(Button, {
                    children: ["Restore"],

                    onClick: () => controller.restoreNote(note),
                  })
                : component(Button, {
                    children: ["Archive"],

                    onClick: () => controller.archiveNote(note),
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
