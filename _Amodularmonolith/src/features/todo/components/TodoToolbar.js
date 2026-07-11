import { component } from "@core/components";
import { Row } from "../../../shared/components/index.js";

export function TodoToolbar({ controller }) {
  return component(Row, {
    gap: "0.5rem",

    children: [
      component(Button, {
        childre: ["Refresh"],
        variant: "secondary",
        onClick: () => controller.reloadTodos(),
      }),
    ],
  });
}
