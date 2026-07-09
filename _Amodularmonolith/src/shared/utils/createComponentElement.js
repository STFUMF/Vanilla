import { element } from "@core/renderer";
import { classNames } from "./components/classNames.js";
import { createVariants } from "./components/variants.js";

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


                ...createVariants(baseClass, {
                    variant,
                    size,
                }),
                className,
            ),
            ...props,
        },

        ...children,
    );
}