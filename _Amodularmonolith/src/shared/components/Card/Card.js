import "../../styles/components/card.css"
import { element } from "@core/renderer";
import { classNames } from "../../utils/components/classNames.js";
import { createComponentElement } from "../../utils/createComponentElement.js";

/**
 * Shared card component.
 * 
 * @param {object} props
 * @returns {object}
 */
export function Card({
    variant = "default",
    className = "", 
    children = [], 
    ...props
}) {
    return createComponentElement({

        tag: "div",

        baseClass: "card",

        variant,

        className,

        children,

        props,

    });
}