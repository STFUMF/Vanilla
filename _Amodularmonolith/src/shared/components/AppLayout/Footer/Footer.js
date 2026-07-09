import "./Footer.css";

import { element } from "@core/renderer";

export function Footer() {
  return element(
    "footer",
    {
      class: "footer",
    },

    "Build with my Framework",
  );
}
