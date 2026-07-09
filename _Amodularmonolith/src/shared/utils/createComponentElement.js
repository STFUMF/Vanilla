import { element } from "@core/renderer";
import { classNames } from "./components/classNames.js";

export function createComponentElement({
    tag,
    baseClass,
    variant,
    size,
    className,
    children = [],
    props = {},
}) {

    return element(
        tag,
        {
            class: classNames(
                baseClass,

                variant && `${baseClass}-${variant}`,

                size && `${baseClass}-${size}`,

                className,
            ),
            ...props,
        },

        ...children,
    );
}