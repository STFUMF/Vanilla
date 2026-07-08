import { element } from "@core/renderer";

export function Stack({
    gap = "1rem",
    align = "stretch",
    children,
}) {

    return element(
        "div",
        {
            class: `stack stack-gap-${gap} stack-align-${align}`,
        },
        ...children
    )
}