
import { element } from "@core/renderer";

export function Container({
    
    size = "md",

    children,
}) {

    return element (
        "div",
        {
            class: `container container-${size}`,
        },

        ...children,
    )
}