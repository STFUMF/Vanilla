import { element } from "@core/renderer";

export function Row({

    justify = "flex-start",

    align = "center",

    gap = "md",

    children,
}) {
    return element(
        "div",
        {
            class: `row row-gap-${gap} row-justify-${justify} row-align-${align}`,

        },

        ...children,
    )
}