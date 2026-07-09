import { createComponentElement } from "../utils/createComponentElement.js";
export function Alert({

    variant = "primary",

    children,

}) {

    return createComponentElement({

        tag: "div",

        baseClass: "alert",

        variant,

        children,

    });

}