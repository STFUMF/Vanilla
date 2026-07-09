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
            variant: "primary",
            size: "md",
            children: ["All"],
            onClick: () => controller.setStatusFilter("all"),
        }),

        component(Button, {
            variant: "primary",
            size: "md",
            children: ["Active"],
            onClick: () => controller.setStatusFilter("active"),
        }),

        component(Button, {
            variant: "primary",
            size: "md",
            children: ["Completed"],
            onClick: () => controller.setStatusFilter("completed"),
        })
    );
}