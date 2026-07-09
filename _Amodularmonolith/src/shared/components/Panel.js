import { createComponentElement } from "../utils/createComponentElement.js";

export function Panel({

    children,

}) {

    return createComponentElement({

        tag: "section",

        baseClass: "panel",

        children,

    });

}