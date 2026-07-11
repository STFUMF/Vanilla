import { element } from "@core/renderer";
import { component } from "@core/components";
import { Button } from "../Button/Button.js";

export function ErrorMessage({ message, onRetry }) {
  return element(
    "div",
    {
      class: "error-message",
    },

    element("p", {}, message),

    component(Button, {
      children: ["Retry"],

      variant: "primary",
      onClick: onRetry,
    }),
  );
}
