import "./Column.css";
import { element } from "@core/renderer";
import { classNames } from "../../../utils/components/classNames.js";

export function Column({
  justify = "flex-start",
  align = "stretch",
  gap = "md",
  className,
  children,
}) {
  return element(
    "div",
    {
      class: classNames(
        "column",
        `column-gap-${gap}`,
        `column-justify-${justify}`,
        `column-align-${align}`,
        className,
      ),
    },
    ...children,
  );
}
