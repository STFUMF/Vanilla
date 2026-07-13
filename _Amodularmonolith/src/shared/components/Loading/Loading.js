import "./Loading.css";
import { element } from "@core/renderer";

export function Loading() {
  return element(
    "div",
    {
      class: "loading",
    },
    "Loading...",
  );
}
