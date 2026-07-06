import { element } from "@core/renderer";

/**
 * Shared input component.
 * 
 * @param {object} props
 * @returns {object}
 */
export function Input({
    type = "text",
    value = "",
    placeholder = "",
    className = "",
    onInput,
}) {
    return element(
        "input",
        {
            type,
            value,
            placeholder,
            class: `input ${className}`.trim(),
            onInput,
        }
    );
}