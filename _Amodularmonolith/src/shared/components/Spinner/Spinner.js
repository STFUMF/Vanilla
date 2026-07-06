import { element } from "@core/renderer";

export function Spinner({className = "",}) {
    return element(
        "span",
        {
            class: `spinner ${className}`.trim(),
            "aria-hidden": true,
        }
    );
}