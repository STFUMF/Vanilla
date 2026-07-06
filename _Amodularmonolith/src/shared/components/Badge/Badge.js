import { element } from "@core/renderer";

export function Badge({children = [], className = "",}) {
    return element(
        "span",
        {
            class: `badge ${className}`.trim(),
        },
        ...children
    );
}