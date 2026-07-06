import { element } from "@core/renderer";

/**
 * Shared navbar.
 */
export function Navbar({ children = [],}) {
    return element(
        "nav",
        {
            class: "navbar",
        },
        ...children
    );
}