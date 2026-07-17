import { element } from "@core/renderer";

export function Toast({ message, type = "info", onClose }) {
  return element(
    "div",
    {
      class: `toast toast-${type}`,
    },

    element("span", {}, message),

    element(
      "button",
      {
        type: "button",
        onClick: onClose,
      },
      "×",
    ),
  );
}
