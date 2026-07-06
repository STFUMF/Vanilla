import { element } from "@core/renderer";

export function Modal({open = false, children = [],}) {
    if (!open) {
        return null;
    }

    return element(
        "div",
        {
            class: "modal",
        },
        ...children
    );
}