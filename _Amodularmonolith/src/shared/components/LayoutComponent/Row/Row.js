import "./Row.css"
import { element } from "@core/renderer";
import { classNames } from "../../../utils/components/classNames.js";

export function Row({

    justify = "flex-start",

    align = "center",

    gap = "md",

    className,

    children,
}) {
    return element(
        "div",
        {
            class: classNames(
                "row",
                `row-gap-${gap}`,
                `row-justify-${justify}`,
                `row-align-${align}`
            ),

        },

        ...children,
    )
}