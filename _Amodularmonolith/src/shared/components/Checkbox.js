import { element } from "@core/renderer"
export function Checkbox({
    checked = false,
    className = "",
    onChange,
}) {
    return element("input", {
        type: "checkbox",
        checked,
        class: `checkbox ${className}`.trim(),
        onChange,
    });
}