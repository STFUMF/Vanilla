import { element } from "@core/renderer";

/**
 * Shared card component.
 * 
 * @param {object} props
 * @returns {object}
 */
export function Card({className = "", children = [],}) {
    return element(
        "div",
        {
            class: `card ${className}`.trim(),
        },
        ...children
    );
}