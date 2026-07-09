import "./Grid.css";
import { element } from "@core/renderer";

export function Grid({
    columns = 2,

    gap = "md",

    children,
}) {

    return element(
        "div",
        {
            class:
            `grid grid-cols-${columns} grid-gap-${gap}`,
        },

        ...children,
    );
}