import { memo } from "@core/components";
import "./Header.css";
import { element } from "@core/renderer";

function header() {
  return element(
    "header",
    {
      class: "header",
    },

    element("h1", {}, "My Framework"),
  );
}

export const Header = memo(header);
