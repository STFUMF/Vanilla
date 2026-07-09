import { createComponentElement } from "../utils/createComponentElement.js";

export function Chip({

    children,

}) {

    return createComponentElement({

        tag: "span",

        baseClass: "chip",

        children,

    });

}