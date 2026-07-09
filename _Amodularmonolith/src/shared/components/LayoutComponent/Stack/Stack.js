import "./Stack.css";
import { element } from "@core/renderer";
import { classNames } from "../../../utils/components/classNames.js";

export function Stack({
    gap,
    align = "stretch",
    className = "",
    children,
}) {

    return element(
        "div",
        {
            class: classNames(
                "stack",
                `stack-gap${gap}`,

                className,
            )
        },
        ...children
    )
}