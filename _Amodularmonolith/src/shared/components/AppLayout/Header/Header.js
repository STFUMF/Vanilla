import "./Header.css";
import { element } from "@core/renderer";

export function Header() {
  return element(
    "header",
    {
      class: "header",
    },

    element("h1", {}, "My Framework"),
  );
}
