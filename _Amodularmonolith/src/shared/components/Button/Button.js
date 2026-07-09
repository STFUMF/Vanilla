import "../../styles/components/button.css";

import { element } from "@core/renderer";
import { classNames } from "../../utils/components/classNames.js";
import { createComponentElement } from "../../utils/createComponentElement.js";

/**
 * Shared button component.
 *
 * @param {object} props
 * @returns {object}
 */
export function Button({
  children,
  className,
  variant,
  size,
  onClick,
  ...props
}) {
  //console.log(`${children}, ${type}, ${className}, ${disabled}, ${onClick}`)
  return createComponentElement({
    tag: "button",
    baseClass: "btn",
    variant,
    size,
    className,
    children,
    props: {
      type: "button",
      onClick,
      ...props,
    },
  });
}
