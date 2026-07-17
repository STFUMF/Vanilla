import "./Container.css";
import { element } from "@core/renderer";

export function Container({ size = "md", className = "", children }) {
  return element(
    "div",
    {
      class: `container container-${size} ${className}`,
    },

    ...children,
  );
}
