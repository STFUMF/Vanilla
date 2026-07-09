import "../../styles/components/input.css"

import { createComponentElement } from "../../utils/createComponentElement.js";

/**
 * Shared input component.
 *
 * @param {object} props
 * @returns {object}
 */
export function Input({
    type = "text",
    value = "",
    size,
    variant,
    placeholder = "",
    className,
    onInput,
    ...props
}) {
    return createComponentElement({
        tag: "input",

        baseClass: "input",
        variant,
        size,
        className,

        props: {
            type,
            value,
            placeholder,
            onInput,
            ...props,
        },
    });
}