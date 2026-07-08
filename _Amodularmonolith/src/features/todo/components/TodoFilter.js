import { component, fragment } from "@core/components";
import { element } from "@core/renderer";

import { Button } from "../../../shared/components";

export function TodoFilter({ controller }) {
    
    return element(
        "div",
        {
            class: "-todo-filter",
        },


        component(Button, {
            children: ["All"],
            onClick: () => controller.setFilter("all"),
        }),

        component(Button, {
            children: ["Active"],
            onClick: () => controller.setFilter("active"),
        }),

        component(Button, {
            children: ["Completed"],
            onClick: () => controller.setFilter("completed"),
        })
    );
}