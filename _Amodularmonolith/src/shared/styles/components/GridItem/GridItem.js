import "./GridItem.css"
import { element } from "@core/renderer";

export function GridItem({
    span = 1,

    children,
}) {

    return element(
        "div",
        {
            class: `grid-span-${span}`,
        },

        ...children,
    )
}