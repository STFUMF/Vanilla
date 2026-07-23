import { element } from "@core/renderer";
import { component } from "@core/components";

import { Button } from "../../../shared/components";

export function BulkToolbar({ controller }) {
  if (!controller.hasSelection()) {
    return element("div");
  }

  return element(
    "div",
    {
      class: "-bulk-toolbar",
    },

    element("span", {}, `${controller.getSelectedCount()} selected`),

    component(Button, {
      variant: "danger",
      size: "md",
      children: ["Delete"],
      onClick: () => controller.deleteSelected(),
    }),

    component(Button, {
      variant: "primary",
      size: "md",
      children: ["Complete"],
      onClick: () => controller.completeSelected(),
    }),

    component(Button, {
      variant: "secondary",
      size: "md",
      children: ["Clear"],
      onClick: () => controller.clearSelection(),
    }),
  );
}
