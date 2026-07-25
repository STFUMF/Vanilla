import { element } from "@core/renderer";
import { component } from "@core/components";
import { Card, Column } from "../../../shared/components";

export function NoteStats({ controller }) {
  const stats = controller.getStats();

  return component(Card, {
    children: [
      component(Column, {
        gap: "sm",

        children: [
          element("div", {}, `Total Notes: ${stats.total}`),

          element("div", {}, `Archived: ${stats.archived}`),
        ],
      }),
    ],
  });
}
