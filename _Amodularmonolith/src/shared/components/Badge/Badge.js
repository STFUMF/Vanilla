import { element } from "@core/renderer";

export function Badge({text, variant = "default",}) {
    return element(
        "span",
        {
            class: `badge badge-${variant}`
        },
        text
    );
}