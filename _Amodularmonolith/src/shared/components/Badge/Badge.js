import "../../styles/components/button.css"
import { element } from "@core/renderer";
import { classNames } from "../../utils/components/classNames.js";
import { createComponentElement } from "../../utils/createComponentElement.js";

export function Badge({
    variant = "default",

    className,

    text,

    ...props
}) {
    return createComponentElement({

        tag: "span",

        baseClass: "badge",

        variant,

        className,

        children: [text],

        props,

    });
}