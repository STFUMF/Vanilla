import { element } from "@core/renderer";

/**
 * Shared button component.
 * 
 * @param {object} props
 * @returns {object}
 */
export function Button({
    children,
    type = "button",
    className = "",
    variant = "primary",
    disabled = false,
    onClick,
}) {
    //console.log(`${children}, ${type}, ${className}, ${disabled}, ${onClick}`)
    return element(
        "button",
        {
            type,
            class: `btn btn-${variant}`,
            disabled,
            onClick
        },
        ...children
    );
}